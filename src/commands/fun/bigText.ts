import { Message, RichEmbed } from "discord.js";
import Command from '@type/Command'
import { ExtendedClient } from "ExtendedClient";

const help: Command = {
    name: "bigtext",
    help: "usage < text to big >",
    type: "FUN",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => {

        //make it better
        //problem: unhandled unexpected chars
        const letters: string[] = args.toString().toLowerCase().replace(",", "").split('').map((letter: string) => `:regional_indicator_${letter}:`);
        console.log(letters)

        await message.channel.send(letters.join(''));
    }
}

export default help;