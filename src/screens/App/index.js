import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="/test"
            rel="noopener noreferrer"
          >
            Test
          </a>
        </header>
      </div>
    );
  }
}

export default App;
