import dotenv from 'dotenv';
dotenv.config();

import { ExtendedClient } from "./ExtendedClient";

const chisaki = new ExtendedClient();
(async () => {
    //todo: await chisaki.enableLogging(loggingType);
    await chisaki.loadCommands('build/commands');
    await chisaki.login(process.env.BOT_TOKEN);
})().then(async () => {
    //const owner = await chisaki.fetchUser('236442313918775296');
    await chisaki.user.setPresence({ status: 'dnd', game: { name: "твой шёпот", type: "LISTENING" } })
})