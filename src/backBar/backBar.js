import React from 'react';
import { Link } from 'react-router-dom';
import './backBar.css';

export default function BackBar(props) {
  return (
    <input
      type='button'
      onClick={() => props.history.push('/')}
      className='back-button'
      value='Go back'
    />
  );
}
