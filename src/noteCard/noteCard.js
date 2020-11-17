import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import { format } from 'date-fns';
import cancel from '../images/cancel.svg';
import PropTypes from 'prop-types';
import './noteCard.css';
import { render } from '@testing-library/react';

export default class NoteCard extends Component {
  deleteCard = (id, cb) => {
    fetch(`http://localhost:9090/notes/${id}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) {
          res.json();
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        this.props.onDelete();
        cb(id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    const { note } = this.props;
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
                    this.deleteCard(note.id, context.deleteNote);
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
}

NoteCard.defaultProps = {
  note: {}
};

NoteCard.propTypes = {
  note: PropTypes.object
};
