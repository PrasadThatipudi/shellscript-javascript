const greetCommand = new Deno.Command("echo", {
  args:["Hello, world of scripting languages!"],
  stdout:"inherit"
});

await greetCommand.output();


const greet = new Deno.Command("echo", {
  args:["Hello, world of scripting languages!"],
  stdout:"piped"
})

const { stdout } = await greet.output();
console.log("STDOUT: ", new TextDecoder().decode(stdout));