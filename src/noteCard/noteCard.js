import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import { format } from 'date-fns';
import cancel from '../images/cancel.svg';
import PropTypes from 'prop-types';
import './noteCard.css';
import { render } from '@testing-library/react';

export default class NoteCard extends Component {
  deleteCard = (id, cb, history) => {
    fetch(`http://localhost:9090/notes/${id}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) {
          res.json();
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        console.log(history);
        history.push('/');
        cb(id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    const { note } = this.props;
    let dateModified = note.modified
      ? format(new Date(note.modified), 'do MMM yyyy')
      : '';
    return (
      <NotefulContext.Consumer>
        {(context) => {
          return (
            <div className='noteCard'>
              <Link to={`/note/${note.id}`}>
                <h2>{note.name}</h2>
              </Link>
              <div className='noteInfo'>
                <span>modified on {dateModified}</span>
                <button
                  onClick={() => {
                    this.deleteCard(
                      note.id,
                      context.deleteNote,
                      this.props.history
                    );
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
  note: {
    modified: new Date()
  }
};

NoteCard.propTypes = {
  note: PropTypes.object
};
