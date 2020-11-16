import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import { format } from 'date-fns';
import cancel from '../images/cancel.svg';
import './noteCard.css';

function deleteCard(id, cb) {
  fetch(`http://localhost:9090/notes/${id}`, { method: 'DELETE' })
    .then((res) => {
      if (!res.ok) {
        res.json();
        throw new Error(res.statusText);
      }
    })
    .then((data) => {
      cb(id);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export default function NoteCard(props) {
  const { note } = props;
  const dateModified = new Date(note.modified);
  return (
    <NotefulContext.Consumer>
      {(context) => {
        return (
          <div className='noteCard'>
            <Link to={`/note/${note.id}`}>
              <h2>{note.name}</h2>
            </Link>
            <div className='noteInfo'>
              <span> modified on {format(dateModified, 'do MMM yyyy')}</span>
              <button
                onClick={() => {
                  deleteCard(note.id, context.deleteNote);
                }}
                className='deleteNote'
              >
                <img src={cancel} alt='delete-icon' className='can-img' />
              </button>
            </div>
          </div>
        );
      }}
    </NotefulContext.Consumer>
  );
}

NoteCard.defaultProps = {
  note: {}
};
