import { Message, RichEmbed } from "discord.js";
import Command from '@type/Command'
import { ExtendedClient } from "ExtendedClient";

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const zeroOne: Command = {
    name: "headandtails",
    help: "type -headandtails",
    type: "FUN",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => {

        const k = getRandomInt(0, 1);
        console.log(k);
        k ? await message.channel.send("heads") : await message.channel.send("tail");

    }
}

export default zeroOne;