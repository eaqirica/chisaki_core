import { Message, RichEmbed } from "discord.js";
import Command from '@type/Command'
import { ExtendedClient } from "ExtendedClient";

const help: Command = {
    name: "help",
    help: "ага, гений! молодец!",
    type: "MODERATION",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => {
        //request to db and increase warn count
        await message.delete();

        await message.channel.send('```<-=-=-=-=-=-=-=-=-=-=-!-=-=-=-=-=-=-=-=-=-=->```');

        const RichCommand = new RichEmbed();
        RichCommand.setTitle("Commands...");
        RichCommand.setURL('https://ryuunosuke.space/commands');
        RichCommand.setColor("#30ba8f");
        RichCommand.setTimestamp(new Date());
        RichCommand.setFooter(message.author.username, message.author.avatarURL);

        exClient.commands.forEach((command: Command) => {
            // message.channel.send(`type = ${command.type} | name = ${command.name} | usage = ${command.help}`);
            RichCommand.addField(`Name: ${command.name}`, `Usage: <${command.help}>`);
            RichCommand.addBlankField();
        })

        await message.channel.send(RichCommand);
        await message.channel.send('```<-=-=-=-=-=-=-=-=-=-=-¡-=-=-=-=-=-=-=-=-=-=->```');
    }
}

export default help;