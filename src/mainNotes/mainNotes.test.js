import React from 'react';
import ReactDOM from 'react-dom';
import MainNotes from './mainNotes';

describe('MainNotes component', () => {
  it('render without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainNotes />, div);
    ReactDOM.unmountComponentAtNode();
  });
});
