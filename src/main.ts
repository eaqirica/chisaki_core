import dotenv from 'dotenv';
dotenv.config();

import { ExtendedClient } from "./ExtendedClient";

(async () => {
    const chisaki = new ExtendedClient();
    //todo: await chisaki.enableLogging(loggingType);
    await chisaki.loadCommands('build/commands');
    await chisaki.login(process.env.BOT_TOKEN);
})()