import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='appHeader'>
        <Link to='/'>
          <h1>Noteful</h1>
        </Link>
      </header>
    );
  }
}
