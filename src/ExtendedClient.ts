import { Client, Collection, ClientOptions, Message } from 'discord.js';
import { readdirSync, lstatSync } from 'fs';
import { resolve } from 'path';

import Command from '@type/Command'

export class ExtendedClient extends Client {

    constructor(options?: ClientOptions) {
        super(options);
        this.commands = new Collection();
        this.onCommandAction();
        this.handleCommand();
        this.handleHelp();
    }

    public commands: Collection<string, Command>;

    public define({ prop, value, opts }: { prop: string; value: any; opts?: PropertyDescriptor; }): void {
        Object.defineProperty(this, prop, { value, ...opts });
    }

    private onCommandAction(): void {
        this.on('message', (message: Message) => {
            if (!message.content.startsWith("-")) return;

            const prefixlessMessage: string[] = message.content.slice("-".length).split(/ +/);
            const args: string[] = prefixlessMessage.splice(1);
            const command: string = prefixlessMessage[0];

            if (args.some((arg) => arg === '-h')) return this.emit('commandHelp', command, message);
            if (this.commands.has(command)) this.emit('commandSend', this, command, message, args);
        })
    }

    private handleHelp(): void {
        this.on('commandHelp', (command: string, message: Message) => {
            const curCommand = this.commands.get(command);
            if (curCommand !== undefined) message.reply(`Usage <${curCommand.help}>`);
        });
    }

    private handleCommand(): void {
        this.on('commandSend', (exClient: ExtendedClient, command: string, message: Message, args: string[]) => {
            const curCommand = this.commands.get(command);
            if (curCommand !== undefined) curCommand.summon(exClient, message, args);
        })
    }
    /**
     * load files from dirs, finded in command folder
     * @param folder part of path
     * @param directory part of path
     */
    private async loadFiles(folder: string, directory: string): Promise<void> {
        const filenames = readdirSync(resolve(process.cwd(), folder, directory));
        filenames.forEach(async (file: string) => {
            //todo: can i do this better?
            const command: any = await import(resolve(process.cwd(), folder, directory, file))
            this.commands.set(command.default.name, command.default);
        });
        return Promise.resolve();
    }
    /**
     * load array of dir, contains in command folder
     * @remarks calling for all dirs in commands folder
     * @param folder path to dir in folder
     * @returns array of dirs, finded at command folder
     */
    private async loadDirs(folder: string): Promise<string[]> {
        const output = readdirSync(resolve(process.cwd(), folder));

        const dirs = output.filter((dir: string) => {
            const isDir = lstatSync(resolve(process.cwd(), folder, dir)).isDirectory();

            if (isDir) return dir;
        });
        return dirs;
    }
    /**
     * load commands from folder
     * @param commandsFolder path to commands folder, folder must be in src directory
     */
    public async loadCommands(commandsFolder: string): Promise<void> {
        const directories: string[] = await this.loadDirs(commandsFolder);
        for (const directory of directories) {
            await this.loadFiles(commandsFolder, directory);
        }
        return Promise.resolve();
    }

}