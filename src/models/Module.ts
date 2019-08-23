import { ModuleData } from "./ModuleData";

export interface Module {
    name: string;
    init: () => void;
    run: (data: ModuleData) => void;
}