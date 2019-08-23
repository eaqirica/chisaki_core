import { Module } from './Module'
import {Collection} from 'discord.js';

export class ModuleLoader {

    public modules: Collection<string,Module> = new Collection();

    /**
     *  register and load module(s)
     * @param _module module for registration and load
     */
    public registerModule(_module: Module) {
        this.load(_module);
    }
    public unregisterModule(_module: Module) {
        this.unload(_module);
    }

    private load(m: Module) {
        this.modules.set(m.name,m);
    }

    private unload(m: Module) {
        this.modules.delete(m.name);
    }

}