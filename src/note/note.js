import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import NoteCard from '../noteCard/noteCard';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './note.css';

class Note extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {(context) => {
          const { notes = [] } = context;
          const note = notes.find(
            (note) => note.id === this.props.match.params.noteId
          ) || { content: '' };

          return (
            <div className='note'>
              <NoteCard
                id={note.id}
                name={note.name}
                modified={note.modified}
                history={this.props.history}
              />
              <p>{note.content}</p>
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

Note.defaultProps = {
  notes: [
    {
      id: 'default-id',
      name: 'default-name',
      modified: new Date(),
      content: 'default-content'
    }
  ]
};
Note.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      modified: PropTypes.date,
      content: PropTypes.string
    })
  )
};

export default withRouter(Note);
