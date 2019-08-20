import Module from './Module'

export default class ModuleLoader {

    public modules: Array<Module> = new Array();

    /**
     *  register and load module(s)
     * @param _module module for registration and load
     */
    public registerModule(_module: Module) {
        this.load(_module);
    }

    private load(m: Module) {
        this.modules.push(m);
    }

}