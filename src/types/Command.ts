import { Message } from "discord.js";
import { ExtendedClient } from "ExtendedClient";
/**
 * abstraction for command
 */
export default interface Command {
    name: string,
    help: string,
    type: "FUN" | "MODERATION" | "SYSTEM" | "INFO" | "SEARCH",
    summon: (exClient: ExtendedClient, message: Message, args: string[]) => any;
}