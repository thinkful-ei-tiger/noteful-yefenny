import React from 'react';
import ReactDOM from 'react-dom';
import AddNote from './AddNote';

describe('AddNote component', () => {
  it('render without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddNote />, div);
    ReactDOM.unmountComponentAtNode();
  });
});
