import { Message, Emoji, User } from "discord.js";
import Command from '@type/Command'
import { ExtendedClient } from "ExtendedClient";

const natribu: Command = {
    name: "natribu",
    type: "FUN",
    help: "@user or @user @user...",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => {
        if (!message.guild) return;
        if (message.author.bot) return;
        await message.delete();

        message.mentions.users.forEach(async (user: User) => {
            await message.channel.send(`${user}! Wellcome to http://natribu.org from ${message.author}`); //
        })

    }
}

export default natribu;