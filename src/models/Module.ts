import { ModuleData } from "./ModuleData";

export interface Module {
    init: () => void;
    run: (data: ModuleData) => void;
}