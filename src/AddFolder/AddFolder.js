import React, { Component } from 'react';
import ValidationError from '../validationError/ValidationError';
import './AddFolder.css';

export default class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start: false
    };
  }

  updateName = (name) => {
    this.setState({
      name,
      start: true
    });
  };

  validateName = () => {
    const { name, start } = this.state;
    if (start) {
      if (name.trim().length < 3)
        return 'Name should have at least 3 characters';
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const query = {
      name: this.state.name
    };
    const URL = 'http://localhost:9090/folders/';

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    })
      .then((res) => {
        if (!res.ok) {
          Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        this.props.fetchFolders(this.props.history.push('/'));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div className='registration'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h2>New folder</h2>
          <div className='form-group'>
            <label htmlFor='name'>Name </label>
            <input
              type='text'
              className='registration__control'
              name='name'
              id='name'
              onChange={(e) => {
                this.updateName(e.target.value);
              }}
              required
            />
            <ValidationError message={this.validateName()} />
          </div>
          <button
            type='submit'
            className='registration__button'
            disabled={this.validateName()}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
