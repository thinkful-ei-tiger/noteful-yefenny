import React from 'react';
import { Link } from 'react-router-dom';
import './noteCard.css';

export default function NoteCard(props) {
  const { note } = props;
  return (
    <div className='noteCard'>
      <Link to={`/note/${note.id}`}>
        <h2>{note.name}</h2>
      </Link>
      <div className='noteInfo'>
        <span> Date modified on {note.modified}</span>
        <button> Delete Note</button>
      </div>
    </div>
  );
}

NoteCard.defaultProps = {
  note: {}
};
