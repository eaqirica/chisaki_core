import { Client } from "discord.js";

declare module "chisaki_discord" {

    interface ModuleData {
        exClient: ExtendedCLient;
    }

    interface Module {
        init: () => void;
        run: (data: ModuleData) => void;
    }

    export class ModuleLoader {
        public modules: Array<Module>;

        /**
         *  register and load module(s)
         * @param _module module for registration and load
         */
        public registerModule(_module: Module): void;

        /**
         * 
         * @param _module 
         */
        public unregisterModule(_module: Module): void;

        /**
         * 
         * @param m 
         */
        private load(m: Module): void;

        /**
         * 
         * @param m 
         */
        private unload(m: Module): void;
    }
    export class ExtendedCLient extends Client {
        private ML: ModuleLoader;

        constructor(options?: any);

        /**
         * uses Module Loader load module
         * @param _module 
         */
        public loadModule(_module: Module): void;
        /**
         * uses Module Loader unload module
         * @param _module 
         */
        public unloadModule(_module: Module): void;

        /**
         * call all registrered modules
         */
        private executeModules();
        /**
         * add event on ready, call login then execute registered modules
         */
        public start(): Promise<void>;
    }
}