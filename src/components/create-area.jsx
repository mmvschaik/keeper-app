import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, updateNote] = useState({title: "", content: ""});
    const [isExpanded, setExpanded] = useState(false);

    function noteChange(e) {
        const {name, value} = e.target;
        updateNote(prevNote => ({...prevNote, [name]: value}));
    }

    function submit(e) {
        props.onSubmit(note);
        updateNote({title: "", content: ""});
        e.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded &&
                <input
                    onChange={noteChange}
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                />}
                <textarea
                    onClick={expand}
                    onChange={noteChange}
                    name="content"
                    placeholder="Take a note..."
                    value={note.content}
                    rows={isExpanded ? "3" : "1"}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submit}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;