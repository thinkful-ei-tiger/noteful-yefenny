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
              <NoteCard note={note} onDelete={this.onDelete} />
              <p>{note.content}</p>
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

Note.defaultProps = {
  notes: []
};
Note.propTypes = {
  notes: PropTypes.array
};

export default withRouter(Note);
