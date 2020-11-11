import React from 'react';
import { NavLink } from 'react-router-dom';
import './mainSideBar.css';

export default function MainSideBar(props) {
  return (
    <>
      <ul className='foldersList'>
        {props.folders.map((folder) => (
          <li key={folder.id}>
            <NavLink to={`/folder/${folder.id}`}> {folder.name}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
