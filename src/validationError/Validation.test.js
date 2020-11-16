import React from 'react';
import ReactDOM from 'react-dom';
import ValidationError from './ValidationError';

describe('Validation Component', () => {
  it('render without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ValidationError />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
