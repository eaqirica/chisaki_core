import ModuleData from "./ModuleData";

export default interface Module {
    init: () => void;
    run: (data: ModuleData) => void;
}