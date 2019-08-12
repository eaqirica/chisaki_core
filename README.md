# **Chisaki**

![](https://cdn.discordapp.com/avatars/493371941076467722/defa051c76993c5d08d0c9699d282f50.png?size=128)

*Chisaki* - is a beatifull powerfull discord bot which support ~~many~~ features like moderation, anime search or music and ~~many other~~.

* # **How to use her**

* ## How to compile and run.

* **with node**
    * ```npm run build``` - only compile.
    * ```npm run start``` - only start.
    * ```npm run dev``` compile and run.
* **with yarn**
    * ```yarn build``` - only compile.
    * ```yarn start``` - only start.
    * ```yarn dev``` - compile and run.

* ## How to add commands.

* Create ***.ts*** file in some folder in src/commands like this:
```js
import Command from '@type/Command'

const commandName: Command = {
    name: "test",
    type: "command type",
    help: "your usage",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => console.log("some actions this");
}

export default commandName;
```
* recompile 
    > ```npm run build``` or ```yarn build```
* done!

## Connecting to database

---

coming soon...

---