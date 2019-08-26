# **chisaki/core**
## core of library used by chisaki bot

## Usage

* installing via npm `npm thelazypie/chisaki_core -S`
* installing via yarn??? `yarn thelazypie/chisaki_core`

 Library based on discord.js and extend it for some features

Lib is module based

### how to create module

Chisaki used self interface Module which need implements:

Example:

```TestModule.ts```
```
import { Module, ModuleData } from 'chisaki_discord';


export class TestModule implements Module {
    init() {
        console.log('inited test module')
    }
    run(data: ModuleData) {
        console.log('runed test module')
    }

}

```

Next it need to be loaded into chisaki:

```
const chisaki = new ExtendedCLient();

chisaki.loadModule(new TestModule());

chisaki.start();

```
### **token must be in `process.env.BOT_TOKEN` or in `start` method**

