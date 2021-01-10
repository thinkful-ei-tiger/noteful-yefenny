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
        const notes = props.match.params.folderid
          ? context.notes.filter(
              (note) => note.folderid === parseInt(props.match.params.folderid)
            )
          : context.notes;

        return (
          <div>
            <ul className='notesList'>
              {notes.map((note) => (
                <li key={note.id}>
                  <NoteCard
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    history={props.history}
                  />
                </li>
              ))}
            </ul>
            <Link
              to={{
                pathname: '/new/note',
                state: {
                  folderid: props.match.params.folderid || ''
                }
              }}
              className='addNotes'
            >
              <img src={addButton} alt='Add new note button' />
              <span>Add note</span>
            </Link>
          </div>
        );
      }}
    </NotefulContext.Consumer>
  );
}
