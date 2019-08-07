import dotenv from 'dotenv';
dotenv.config();

import { Client, Message, Collection } from 'discord.js'

const chisaki = new Client();

chisaki.on('ready', () => {
    console.log(`I'am ready!`);
});

(async () => {
    await chisaki.login(process.env.BOT_TOKEN);
})()
