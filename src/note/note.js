import React from 'react';
import NotefulContext from '../NotefulContext';
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
            <div className='noteCard'>
              <h2>{note.name}</h2>
              <div className='noteInfo'>
                <span> Date modified on {note.modified}</span>
                <button> Delete Note</button>
              </div>
            </div>
            <p>{note.content}</p>
          </div>
        );
      }}
    </NotefulContext.Consumer>
  );
}
