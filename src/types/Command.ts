import { Message } from "discord.js";
import { ExtendedClient } from "ExtendedClient";
/**
 * abstraction for command
 */
declare type Command = {
    name: string,
    help: string,
    type: "FUN" | "MODERATION" | "SYSTEM" | "INFO",
    summon: (exClient: ExtendedClient, message: Message, args: string[]) => any;
}

export default Command;