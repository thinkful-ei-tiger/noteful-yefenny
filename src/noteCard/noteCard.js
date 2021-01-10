import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import { format } from 'date-fns';
import cancel from '../images/cancel.svg';
import PropTypes from 'prop-types';
import './noteCard.css';
import NotesService from '../services/notes-service';

export default class NoteCard extends Component {
  deleteCard = (id, cb, history) => {
    NotesService.deleteNote(id)
      .then((data) => {
        history.push('/');
        cb(id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    const { id, name, modified } = this.props;
    let dateModified = modified
      ? format(new Date(modified), 'do MMM yyyy')
      : '';
    return (
      <NotefulContext.Consumer>
        {(context) => {
          return (
            <div className='noteCard'>
              <Link to={`/note/${id}`}>
                <h2>{name}</h2>
              </Link>
              <div className='noteInfo'>
                <span>modified on {dateModified}</span>
                <button
                  onClick={() => {
                    this.deleteCard(id, context.deleteNote, this.props.history);
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
  id: 0,
  name: 'default-name',
  modified: '12/12/2020'
};

NoteCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired
};
