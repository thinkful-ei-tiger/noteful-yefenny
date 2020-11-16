import React from 'react';
import ReactDOM from 'react-dom';
import NoteForm from './NoteForm';

describe('NoteForm component', () => {
  it('render without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoteForm />, div);
    ReactDOM.unmountComponentAtNode();
  });
});
