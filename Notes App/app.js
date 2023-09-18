import yargs from "yargs";
import * as notes from "./notes.js";

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      type: "string",
      demandOption: true,
      describe: "Note title",
    },
    body: {
      type: "string",
      demandOption: true,
      describe: "Note body",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      type: "string",
      demandOption: true,
      describe: "Note title",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler: () => {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read notes",
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();
