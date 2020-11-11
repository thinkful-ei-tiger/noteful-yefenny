import React from 'react';
import NotefulContext from '../NotefulContext';
import NoteCard from '../noteCard/noteCard';
import './note.css';

export default function Note(props) {
  return (
    <NotefulContext.Consumer>
      {(context) => {
        const note = context.notes.find(
          (note) => note.id === props.match.params.noteId
        );
        return (
          <div className='note'>
            <NoteCard note={note} />
            <p>{note.content}</p>
          </div>
        );
      }}
    </NotefulContext.Consumer>
  );
}
