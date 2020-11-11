import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BackBar from './backBar';

describe('BackBar component', () => {
  it('render without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BackBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
