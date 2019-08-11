import { Client, Collection, ClientOptions, Message } from 'discord.js';
import { readdirSync, lstatSync } from 'fs';;
import { resolve } from 'path';

import Command from '@type/Command'

export class ExtendedClient extends Client {

    constructor(options?: ClientOptions) {
        super(options);
        this.commands = new Collection();
        this.onCommandSend();
        this.handleCommand();
    }

    public commands: Collection<string, Command>;

    private onCommandSend(): void {
        this.on('message', (message: Message) => {
            if (!message.content.startsWith("-")) return;

            const prefixlessMessage: string[] = message.content.slice("-".length).split(/ +/);
            const args: string[] = prefixlessMessage.splice(1);
            const command: string = prefixlessMessage[0];

            if (this.commands.has(command)) this.emit('commandSend', command, message, args);
        })
    }

    private handleCommand(): void {
        this.on('commandSend', (command: string, message: Message, args: string[]) => {
            const curCommand = this.commands.get(command);
            if (curCommand !== undefined) curCommand.summon(message, args);
        })
    }

    private async loadFiles(folder: string, directory: string): Promise<void> {
        const filenames = readdirSync(resolve(process.cwd(), folder, directory));
        filenames.forEach(async (file: string) => {
            //todo: can i do this better?
            const command: any = await import(resolve(process.cwd(), folder, directory, file))
            this.commands.set(command.default.name, command.default);
        });
        return Promise.resolve();
    }

    private async loadDirs(folder: string): Promise<string[]> {
        const output = readdirSync(resolve(process.cwd(), folder));

        const dirs = output.filter((dir: string) => {
            const isDir = lstatSync(resolve(process.cwd(), folder, dir)).isDirectory();

            if (isDir) return dir;
        });
        return dirs;
    }

    public async loadCommands(commandsFolder: string): Promise<void> {
        const directories: string[] = await this.loadDirs(commandsFolder);
        for (const directory of directories) {
            await this.loadFiles(commandsFolder, directory);
        }
        return Promise.resolve();
    }

}