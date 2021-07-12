import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from '../components/create-area';

function App() {
  const [notes, addNote] = useState([]);

  function submitNote(note) {
    addNote(prevNotes => [...prevNotes, note]);
}

function deleteNote(id) {
  addNote(prevNotes => {
    return prevNotes.filter((note, index) => index !== id)
  });
}

  return (
    <div>
      <Header />
      <CreateArea onSubmit={submitNote}/>
      {notes.map((note, index) => (
        <Note deleteNote={deleteNote} key={index} id={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
