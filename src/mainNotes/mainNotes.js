import React from 'react';
import { Link } from 'react-router-dom';
import './mainNotes.css';

export default function MainNotes(props) {
  return (
    <ul className='notesList'>
      {props.notes.map((note) => (
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
}
