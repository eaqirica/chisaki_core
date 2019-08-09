import dotenv from 'dotenv';
dotenv.config();

import { Client, Collection, ClientOptions } from 'discord.js';
import { readdirSync, lstatSync, createReadStream, readFileSync } from 'fs';;
import { resolve } from 'path';

import Command from '@type/Command'

export class ExtendedClient extends Client {

    constructor(options?: ClientOptions) {
        super(options);
        this.commands = new Collection();
    }

    public commands: Collection<string, Command>;

    private define(prop: string, value: any, opts: PropertyDescriptor): void {
        Object.defineProperty(this, prop, { value, ...opts });
    }

    private loadFiles(folder: string, directory: string): void {
        const filenames = readdirSync(resolve(process.cwd(), folder, directory));
        console.log(filenames);
        filenames.forEach((file: string) => {
            //todo: how import command from this place
            const command: Command = require(resolve(process.cwd(), folder, directory, file));
            console.log(command);
        });
    }

    private loadDirs(folder: string): string[] {
        const output = readdirSync(resolve(process.cwd(), folder));

        const dirs = output.filter((dir: string) => {
            const isDir = lstatSync(resolve(process.cwd(), folder, dir)).isDirectory();

            if (isDir) return dir;
        });

        console.log(dirs);
        return dirs;
    }

    public loadCommands(commandsFolder: string): void {
        const directories: string[] = this.loadDirs(commandsFolder);
        directories.forEach((directory: string) => {
            this.loadFiles(commandsFolder, directory);
        })
    }

}

const chisaki = new ExtendedClient();

chisaki.loadCommands('src/commands');

chisaki.login(process.env.BOT_TOKEN);