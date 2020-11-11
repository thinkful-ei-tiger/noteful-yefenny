import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './mainNotes.css';

export default function MainNotes(props) {
  return (
    <NotefulContext.Consumer>
      {(context) => {
        const notes = props.match.params.folderId
          ? context.notes.filter(
              (note) => note.folderId === props.match.params.folderId
            )
          : context.notes;
        return (
          <ul className='notesList'>
            {notes.map((note) => (
              <li key={note.id}>
                <Link to={`/note/${note.id}`}>
                  <h2>{note.name}</h2>
                </Link>
                <div className='noteInfo'>
                  <span> Date modified on {note.modified}</span>
                  <button> Delete Note</button>
                </div>
              </li>
            ))}
          </ul>
        );
      }}
    </NotefulContext.Consumer>
  );
}
