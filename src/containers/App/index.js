import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { loadMyLocation } from '../../action';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newGame : false,
      searchLocation : ""
    }

  }

  startGame = () =>{
    this.props.loadMyLocation(this.state.searchLocation)
    this.play();
  }

  handleSearhLocationChange = (event) => {
    this.setState ({
      searchLocation : event.target.value
    });
  }

  play = () => {
    this.setState({
      newGame : true
    });
  }





  render() {
    console.log(this.props.myLocation)
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
          <form onSubmit = {this.startGame}>
            <input type = "text" placeholder = "location city/zip" value = {this.state.searchLocation} onChange = {this.handleSearhLocationChange} />
            <button type = 'submit'>
              Start New Game
            </button>
          </form>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myLocation : state.myLocation
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadMyLocation : myLocation => {
      dispatch(loadMyLocation(myLocation))
    }
  }
}

const ConnectedLandingApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

export default ConnectedLandingApp;
