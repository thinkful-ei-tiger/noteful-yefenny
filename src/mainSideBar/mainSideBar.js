import React from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './mainSideBar.css';

export default function MainSideBar(props) {
  return (
    <NotefulContext.Consumer>
      {(context) => (
        <>
          <ul className='foldersList'>
            {context.folders.map((folder) => (
              <li key={folder.id}>
                <NavLink to={`/folder/${folder.id}`}> {folder.name}</NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
    </NotefulContext.Consumer>
  );
}
