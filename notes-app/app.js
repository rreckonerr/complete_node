const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes");

// console.log(
//   validator.isEmail("blabla@bla.bla")
//     ? "blabla@bla.bla " + chalk.bold.inverse.green("is valid email")
//     : "blabla@bla.bla " + chalk.red("is invalid email")
// );Then have you tried simply editing it to the shortcut key(s) you want? It looks like the default is Alt + Print.

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
      default: "Default title!"
    }
  },
  handler: ({ title, body }) => {
    notes.addNote(title, body);
    // console.log(`Title: ${chalk.inverse.bold.blue(title)}`);
  }
});

yargs.command({
  command: "remove",
  describe: "remove an existing note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: ({ title }) => {
    notes.removeNote(title);
  }
});

console.log(yargs.argv);
// console.log("---", "args", process.argv);
// console.log("---", "yargs", yargs.hey("cafasf"));
