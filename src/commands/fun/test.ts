import { Message } from "discord.js";
import Command from '@type/Command'

const test: Command = {
    name: "test",
    type: "SYSTEM",
    summon: (message: Message, args: string[]) => console.log('hello world')
}

export default test;

