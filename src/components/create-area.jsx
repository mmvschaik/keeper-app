import React, { useState } from 'react';

function CreateArea(props) {
    const [note, updateNote] = useState({title: "", content: ""});

    function noteChange(e) {
        const {name, value} = e.target;
        updateNote(prevNote => ({...prevNote, [name]: value}));
    }

    function submit(e) {
        props.onSubmit(note);
        updateNote({title: "", content: ""});
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={noteChange} type="text" name="title" placeholder="Title" value={note.title} />
                <textarea onChange={noteChange} name="content" rows="3" placeholder="Take a note..." value={note.content} />
                <button onClick={submit}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;