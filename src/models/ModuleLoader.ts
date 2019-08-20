import { Module } from './Module'

export class ModuleLoader {

    public modules: Array<Module> = new Array();

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
        this.modules.push(m);
    }
    private unload(m: Module) {
        const index = this.modules.indexOf(m);
        index > -1 ? this.modules.splice(index, 1) : "";
    }

}