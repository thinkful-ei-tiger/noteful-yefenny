import React from 'react';
import ReactDOM from 'react-dom';
import FolderForm from './FolderForm';

describe('FolderForm component', () => {
  it('render without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FolderForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
