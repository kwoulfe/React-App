import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Images from './components/Images/images';
import bob from './components/Images/images.json';

class App extends Component {
  state = {
    bob,
    score: 0
  };

  runGame = () => {
    this.setState({ score: this.state.score + 1 });
    console.log(bob.key);
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <div className="container">
          {this.state.bob.map(bob => (
            <Images
              id={bob.id}
              key={bob.key}
              name={bob.name}
              image={bob.image}
              game={this.runGame}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
