import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import { format } from 'date-fns';
import cancel from '../images/cancel.svg';
import PropTypes from 'prop-types';
import './noteCard.css';

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
  id: 'default-id',
  name: 'default-name',
  modified: '12/12/2020'
};

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired
};
