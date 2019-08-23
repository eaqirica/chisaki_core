import { Client, Message, } from "discord.js";
import { ModuleLoader } from "./ModuleLoader"
import { Module } from './Module'
import { ModuleData } from "./ModuleData";

/**
 *  default discordjs Client object with some features
 */
export class ExtendedCLient extends Client {

    private ML: ModuleLoader;

    constructor(options?: any) {
        super(options);
        this.ML = new ModuleLoader();
    }

    /**
     * uses Module Loader load module
     * @param _module 
     */
    public loadModule(_module: Module): void {
        this.ML.registerModule(_module);
    }
    /**
     * uses Module Loader unload module
     * @param _module 
     */
    public unloadModule(_module: Module): void {
        this.ML.unregisterModule(_module);
    }

    /**
     * call all registrered modules
     */
    private executeModules(): void {
        if (!this.ML.modules.size) console.warn("Modules not finded");

        const moduleData: ModuleData = { exClient: this }

        try {
            this.ML.modules.forEach((module_) => {
                module_.init();
                module_.run(moduleData);
            })
        } catch (error) {
            throw error;
        }
    }
    /**
     * add event on ready, call login then execute registered modules
     */
    public async start(): Promise<void> {
        //if (!process.env.BOT_TOKEN) throw new Error("can't find BOT_TOKEN property in procces.env");
        this.on('ready', this.executeModules);
        await this.login('NTgwNjUzODU5NjUxOTc3MjM2.XVwewg.qQtU1o0vlc_O94Q-qPjx1mWd8Ro');
    }
}