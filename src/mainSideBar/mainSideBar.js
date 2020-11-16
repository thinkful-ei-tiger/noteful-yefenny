import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import addImage from '../images/add.svg';
import './mainSideBar.css';

export default function MainSideBar(props) {
  return (
    <NotefulContext.Consumer>
      {(context) => (
        <div>
          <ul className='foldersList'>
            {context.folders.map((folder) => (
              <li
                key={folder.id}
                className={
                  folder.id === props.match.params.folderId ? 'selected' : ''
                }
              >
                <NavLink to={`/folder/${folder.id}`} className='folder-list'>
                  {folder.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to='/new/folder'>
            <img src={addImage} alt='' />
          </Link>
        </div>
      )}
    </NotefulContext.Consumer>
  );
}
