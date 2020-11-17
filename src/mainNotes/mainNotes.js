import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import NoteCard from '../noteCard/noteCard';
import addButton from '../images/add.svg';
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
          <div>
            <ul className='notesList'>
              {notes.map((note) => (
                <li key={note.id}>
                  <NoteCard note={note} />
                </li>
              ))}
            </ul>
            <Link
              to={{
                pathname: '/new/note',
                state: {
                  folderId: props.match.params.folderId || ''
                }
              }}
              className='addNotes'
            >
              <img src={addButton} alt='Add new note image' />
              <span>Add note</span>
            </Link>
          </div>
        );
      }}
    </NotefulContext.Consumer>
  );
}
