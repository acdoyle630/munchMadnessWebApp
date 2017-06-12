import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';

class App extends Component {

  searchYelp(){
    console.log('search YELP')
  }





  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Munch Madness</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.searchYelp}>Search</button>
        </p>
      </div>
    );
  }
}

export default App;
