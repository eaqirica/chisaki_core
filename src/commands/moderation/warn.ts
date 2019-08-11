import { Message, Emoji } from "discord.js";
import Command from '@type/Command'

const warn: Command = {
    name: "warn",
    type: "MODERATION",
    summon: (message: Message, args: string[]) => message.channel.send(`\`[${"WARNING"}]: ${args.join(" ")}\``)
}

export default warn;