import { Message, RichEmbed } from "discord.js";
import Command from '@type/Command';
import { ExtendedClient } from "ExtendedClient";
import axios from 'axios';
import animpwResponse from "@type/animpwResponce";


const animPW: Command = {
    name: "animpw",
    help: "title",
    type: "FUN",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => {

        const query = args.join('');
        if (!query.length) return;

        const res = await axios.get(`https://anim.pw/api/v2/anime/find?q=${encodeURI(query)}`);

        if (res.status !== 200) return message.channel.send('something wrong');

        const animes: animpwResponse[] = res.data.anime;

        for (const anime of animes) {
            const RichAnime = new RichEmbed();
            RichAnime.setColor("#2d70d5");
            RichAnime.setTitle(`${anime.titleRus}/${anime.titleEng}`).setURL(`https://anim.pw/release/${anime.name}.html`)
            RichAnime.setImage(`https://x.anim.pw/img/anime/${anime.poster_res}/${anime.poster_name}`);
            RichAnime.setDescription(anime.description);
            RichAnime.setFooter('https://anim.pw', "https://anim.pw/favicon.ico");
            await message.channel.send(RichAnime);
        }

    }
}

export default animPW;