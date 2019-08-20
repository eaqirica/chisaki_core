import { Client, Message, } from "discord.js";
import ModuleLoader from "./ModuleLoader"
import Module from './Module'
import ModuleData from "./ModuleData";

/**
 *  default discordjs Client object with some features
 */
export default class ExtendedCLient extends Client {

    private ML: ModuleLoader;

    constructor(options?: any) {
        super(options);
        this.ML = new ModuleLoader();
    }

    /**
     * uses Module Loader load module
     * @param _module 
     */
    public loadModule(_module: Module) {
        this.ML.registerModule(_module);
    }
    /**
     * call all registrered modules
     */
    private executeModules() {
        if (!this.ML.modules.length) console.warn("Modules not finded");

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
    public async start() {
        //if (!process.env.BOT_TOKEN) throw new Error("can't find BOT_TOKEN property in procces.env");
        this.on('ready', this.executeModules);
        await this.login('NTgwNjUzODU5NjUxOTc3MjM2.XVwewg.qQtU1o0vlc_O94Q-qPjx1mWd8Ro');
    }
}