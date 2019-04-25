const fs = require("fs");

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
  } else {
    console.log("exists");
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const note = notes.filter(note => note.title === title);

  if (note.length === 0) {
    console.log(`Note with title "${title}" doesn't exist`);
  } else {
    const res = deleteNote(notes, note[0]);
    saveNotes(res);
  }
};

const deleteNote = (arr, item) => {
  return arr.reduce((acc, val) => {
    if (val.title !== item.title) acc.push(val);
    return acc;
  }, []);
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
