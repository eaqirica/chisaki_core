import { Message, RichEmbed } from "discord.js";
import Command from '@type/Command'
import { ExtendedClient } from "ExtendedClient";
import { isAlpha } from 'validator'

const help: Command = {
    name: "bigtext",
    help: "usage < text to big >",
    type: "FUN",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => {

        const preparedString = args.toString().toLowerCase().replace(/,/g, "").trim();

        if (!isAlpha(preparedString)) return await message.channel.send('NANI?')

        const letters: string[] = preparedString.split('').map((letter: string) => `:regional_indicator_${letter}:`);

        await message.channel.send(letters.join(''));
    }
}

export default help;