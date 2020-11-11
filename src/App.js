import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import STORE from './dummy-store';
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
  componentDidMount() {
    this.setState({
      folders: STORE.folders,
      notes: STORE.notes
    });
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <main className='Main'>
          <nav>
            <Route
              exact
              path='/'
              render={() => <MainSideBar folders={this.state.folders} />}
            />
            <Route
              path='/folder/:folderId'
              render={(routeProps) => {
                return <MainSideBar folders={this.state.folders} />;
              }}
            />
            <Route
              path='/note/:noteID'
              render={({ history }) => {
                return <BackBar goBack={() => history.push('/')} />;
              }}
            />
          </nav>
          <section>
            <Route
              exact
              path='/'
              render={() => <MainNotes notes={this.state.notes} />}
            />
            <Route
              path='/folder/:folderId'
              render={(routeProps) => {
                return (
                  <MainNotes
                    notes={this.state.notes.filter(
                      (note) =>
                        note.folderId === routeProps.match.params.folderId
                    )}
                  />
                );
              }}
            />
            <Route
              path='/note/:noteId'
              render={(routeProps) => {
                return (
                  <Note
                    note={this.state.notes.find(
                      (note) => note.id === routeProps.match.params.noteId
                    )}
                  />
                );
              }}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
