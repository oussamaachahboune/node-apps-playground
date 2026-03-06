const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note to your notes list",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // required
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(chalk.green("Title: " + argv.title + "\nBody: " + argv.body));
  },
});

yargs.command({
  command: "remove",
  describe: "Remove an existing note by its title",
  handler: function () {
    console.log(chalk.red("Note removed successfully!"));
  },
});

yargs.command({
  command: "list",
  describe: "List all of your saved notes",
  handler: function () {
    console.log(chalk.blue("Fetching all your notes..."));
  },
});

yargs.command({
  command: "read",
  describe: "Read the contents of a specific note by title",
  handler: function () {
    console.log(chalk.yellow("Reading note..."));
  },
});

yargs.parse();
