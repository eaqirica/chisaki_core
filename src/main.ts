import dotenv from 'dotenv';
dotenv.config();

import { ExtendedClient } from "./ExtendedClient";

(async () => {
    const chisaki = new ExtendedClient();
    await chisaki.loadCommands('build/commands');
    console.log(chisaki.commands);
    await chisaki.login(process.env.BOT_TOKEN);
})()