const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove an existing note by its title",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List all of your saved notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read the contents of a specific note by title",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
