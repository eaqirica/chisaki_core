import { Module } from './Module'
import { Collection } from 'discord.js';

export class ModuleLoader {

    public modules: Collection<string, Module> = new Collection();

    /**
     *  register and load module(s)
     * @param _module module for registration and load
     */
    public registerModule(_module: Module): Promise<void> {
        this.load(_module);
        return Promise.resolve();
    }
    /**
     *  unregister and unload module(s)
     * @param _module module for unregistration and load
     */
    public unregisterModule(_module: Module): Promise<void> {
        this.unload(_module);
        return Promise.resolve();
    }

    private load(m: Module) {
        this.modules.set(m.name, m);
    }

    private unload(m: Module) {
        this.modules.delete(m.name);
    }

}