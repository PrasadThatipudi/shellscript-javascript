const greetCommand = new Deno.Command("echo", {
  args:["Hello, world of scripting languages!"],
  stdout:"inherit"
});

await greetCommand.output();
