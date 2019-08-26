import { Client, Message, } from "discord.js";
import { ModuleLoader } from "./ModuleLoader"
import { Module } from './Module'
import { ModuleData } from "./ModuleData";

/**
 *  default discordjs Client object with some features
 */
export class ExtendedCLient extends Client {

    private ML: ModuleLoader;

    public getModule(key: string): Module | undefined {
        return this.ML.modules.get(key);
    }

    constructor(options?: any) {
        super(options);
        this.ML = new ModuleLoader();
    }

    /**
     * uses Module Loader load module
     * @param _module 
     */
    public loadModule(_module: Module): Promise<void> {
        this.ML.registerModule(_module);
        return Promise.resolve();
    }
    /**
     * uses Module Loader unload module
     * @param _module 
     */
    public unloadModule(_module: Module): Promise<void> {
        this.ML.unregisterModule(_module);
        return Promise.resolve();
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
    public async start(token?: string): Promise<void> {
        let t: string;

        if (process.env.BOT_TOKEN) {
            t = process.env.BOT_TOKEN
        } else if (token) {
            t = token;
        } else {
            throw new Error('Can not find token')
        }

        this.on('ready', this.executeModules);
        await this.login(t);
    }
}