import Command from "@type/Command";

const test: Command = {
    name: "test",
    type: "SYSTEM",
    summon: (args: string) => console.log('hello world')
}

export default test;

