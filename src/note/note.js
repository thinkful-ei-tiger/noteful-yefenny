import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import NoteCard from '../noteCard/noteCard';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './note.css';

class Note extends Component {
  static contextType = NotefulContext;
  onDelete = () => {
    this.props.history.push('/');
  };
  render() {
    const { notes } = this.context;
    const note = notes.find(
      (note) => note.id === this.props.match.params.noteId
    );
    return (
      <div className='note'>
        <NoteCard note={note} onDelete={this.onDelete} />
        <p>{note.content}</p>
      </div>
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
