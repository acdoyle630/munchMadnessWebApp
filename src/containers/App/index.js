import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { loadContenders } from '../../action';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newGame : false
    }

  }

  play = () => {
    this.setState({
      newGame : true
    });
  }





  render() {
    if(this.state.newGame === true){
      return(
        <Redirect to={{
          pathname : 'ChooseContenders'
        }} />
        )
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Munch Madness</h2>
        </div>
        <div className="App-intro">
          <button onClick = {this.play}>
            PLAY NEW GAME!
          </button>
        </div>

      </div>
    );
  }
}


const ConnectedLandingApp = connect(
  //mapStateToProps,
 // mapDispatchToProps
  )(App);

export default ConnectedLandingApp;
