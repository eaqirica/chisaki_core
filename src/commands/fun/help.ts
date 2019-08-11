import { Message } from "discord.js";
import Command from '@type/Command'
import { ExtendedClient } from "ExtendedClient";

const help: Command = {
    name: "help",
    help: "ага, гений! молодец!",
    type: "MODERATION",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => {
        //request to db and increase warn count
        await message.delete();
        message.channel.send('<-=-=-=-=-=-=-=-=-=-=-!-=-=-=-=-=-=-=-=-=-=->');
        exClient.commands.forEach((command: Command) => {
            message.channel.send(`type = ${command.type} | name = ${command.name} | usage = ${command.help}`)
        })
        message.channel.send('<-=-=-=-=-=-=-=-=-=-=-¡-=-=-=-=-=-=-=-=-=-=->');
    }
}

export default help;