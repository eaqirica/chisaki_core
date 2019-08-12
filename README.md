# **Chisaki-dicord**

## How to compile and run.

* **with node**
    * ```npm run build``` only compile.
    * ```npm run start``` only start.
    * ```npm run dev``` compile and run.
* **with yarn**
    * ```yarn build``` only compile.
    * ```yarn start``` only start.
    * ```yarn dev``` compile and run.
---

## How to add commands.

* Create *.ts* file in some folder in src/commands like this:
```
import Command from '@type/Command'

const commandName: Command = {
    name: "test",
    type: "command type",
    help: "your usage",
    summon: async (exClient: ExtendedClient, message: Message, args: string[]) => console.log("some actions this");
}

export default commandName;
```
* recompile (npm run build or yarn build`)
* done!