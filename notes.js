const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch (e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body,
  };

  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
    //notes.filter either 0 or 1
  var filteredNotes = notes.filter((note) => {
    return note.title === title;
    });
  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var revisedNotes = notes.filter((note) => {
    return note.title != title;
  });
  saveNotes(revisedNotes);

  return notes.length != revisedNotes.length;
};

var logNote = (note) =>{
  console.log('--');
  console.log('Title: ' + note.title);
  console.log('Body: ' + note.body);
};


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
};
