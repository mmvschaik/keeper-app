import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={() => props.deleteNote(props.id)}><DeleteIcon /></button>
        </div>
    )
}

export default Note;
