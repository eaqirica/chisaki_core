declare type Command = {
    name: string,
    type: "FUN" | "MODERATION" | "SYSTEM"
    summon: (args: string) => any;
}

export default Command;