import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import STORE from './dummy-store';
import NotefulContext from './NotefulContext';
import Header from './header/header';
import MainSideBar from './mainSideBar/mainSideBar';
import MainNotes from './mainNotes/mainNotes';
import BackBar from './backBar/backBar';
import Note from './note/note';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: []
    };
  }
  deleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id)
    });
  };
  componentDidMount() {
    this.setState({
      folders: STORE.folders,
      notes: STORE.notes
    });
  }
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
              <Route exact path='/' component={MainSideBar} />
              <Route path='/folder/:folderId' component={MainSideBar} />
              <Route path='/note/:noteID' component={BackBar} />
            </nav>
            <section>
              <Route exact path='/' component={MainNotes} />
              <Route path='/folder/:folderId' component={MainNotes} />
              <Route path='/note/:noteId' component={Note} />
            </section>
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
