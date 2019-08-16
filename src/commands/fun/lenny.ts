import { Message, RichEmbed } from "discord.js";
import Command from '@type/Command'
import { ExtendedClient } from "ExtendedClient";

const help: Command = {
    name: "lenny",
    help: "type -lenny",
    type: "FUN",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => {
        await message.delete();
        await message.channel.send('( ͡° ͜ʖ ͡°)');
    }
}

export default help;