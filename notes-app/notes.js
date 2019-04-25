const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title = "", body = "") => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note tile taken!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const res = notes.filter(note => note.title !== title);

  if (res.length < notes.length) {
    console.log(chalk.green.inverse("Success!"));
    saveNotes(res);
  } else {
    console.log(chalk.red.inverse("Ooops... no note found..."));
  }
};

const saveNotes = arr => {
  const dataJSON = JSON.stringify(arr);

  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};
