import { Message } from "discord.js";

declare type Command = {
    name: string,
    type: "FUN" | "MODERATION" | "SYSTEM"
    summon: (message: Message, args: string[]) => any;
}

export default Command;