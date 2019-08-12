import { Message } from "discord.js";
import Command from '@type/Command'
import { ExtendedClient } from "ExtendedClient";

const warn: Command = {
    name: "warn",
    help: "message to warn",
    type: "MODERATION",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => {
        //request to db and increase warn count
        await message.delete();
        await message.channel.send(`[***${"WARNING"}***]: ${args.join(" ")}`); //
    }
}

export default warn;