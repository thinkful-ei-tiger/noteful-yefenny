import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import Header from './header/header';
import MainSideBar from './mainSideBar/mainSideBar';
import MainNotes from './mainNotes/mainNotes';
import BackBar from './backBar/backBar';
import Note from './note/note';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import NoteError from './errorBoundaries/NoteError';
import FolderError from './errorBoundaries/FolderError';
import './App.css';
import NotesService from './services/notes-service';
import FoldersService from './services/folders-service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: []
    };
  }
  deleteNote = (id) => {
    this.setState(
      {
        notes: this.state.notes.filter((note) => note.id !== id)
      },
      () => <Redirect to='/' />
    );
  };
  componentDidMount() {
    this.fetchFolders();
    this.fetchNotes();
  }

  fetchFolders = (cb) => {
    FoldersService.getAllFolders()
      .then((folders) => {
        this.setState(
          {
            folders
          },
          () => {
            return cb;
          }
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  fetchNotes = (cb) => {
    NotesService.getAllNotes()
      .then((notes) => {
        this.setState(
          {
            notes
          },
          () => {
            return cb;
          }
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote
    };
    return (
      <NotefulContext.Provider value={contextValue}>
        <div className='App'>
          <Header />
          <main className='Main'>
            <nav>
              <FolderError>
                <Route exact path='/' component={MainSideBar} />
                <Route path='/folder/:folderid' component={MainSideBar} />
              </FolderError>
              <Route path='/new/folder' component={BackBar} />
              <Route path='/new/note' component={BackBar} />
              <Route path='/note/:noteId' component={BackBar} />
            </nav>
            <section>
              <NoteError>
                <Route exact path='/' component={MainNotes} />
                <Route path='/folder/:folderid' component={MainNotes} />
                <Route
                  path='/new/folder'
                  render={({ history }) => (
                    <AddFolder
                      fetchFolders={this.fetchFolders}
                      history={history}
                    />
                  )}
                />
                <Route path='/note/:noteId' component={Note} />
              </NoteError>
              <Route
                path='/new/note'
                render={({ history }) => (
                  <AddNote
                    folders={this.state.folders}
                    fetchNotes={this.fetchNotes}
                    history={history}
                  />
                )}
              />
            </section>
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
