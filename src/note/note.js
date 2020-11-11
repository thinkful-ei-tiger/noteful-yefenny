import React from 'react';
import './note.css';

export default function Note(props) {
  return (
    <div className='note'>
      <div className='noteCard'>
        <h2>{props.note.name}</h2>
        <div className='noteInfo'>
          <span> Date modified on {props.note.modified}</span>
          <button> Delete Note</button>
        </div>
      </div>
      <p>{props.note.content}</p>
    </div>
  );
}
