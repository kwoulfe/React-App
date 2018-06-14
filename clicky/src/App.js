import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
