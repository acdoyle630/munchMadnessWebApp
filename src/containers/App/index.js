import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { loadMyLocation, loadMyPrice, pickRound } from '../../action';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newGame : false,
      searchLocation : "",
      price : "1,2,3,4",
      numberOfTeams : 0
    }

  }

  startGame = () =>{
    this.props.pickRound(this.state.numberOfTeams)
    this.props.loadMyLocation(this.state.searchLocation)
    this.props.loadMyPrice(this.state.price)
    this.play();
  }

  handleSearhLocationChange = (event) => {
    this.setState ({
      searchLocation : event.target.value
    });
  }

  handleDollarChange = (event) =>{
    let priceNum = (Number(event.target.value))
    let priceRange = []
    let priceString = ''
    for (var i = 1; i <= priceNum; i++){
      priceRange.push(i);
    }

    priceString = priceRange.join()
    this.setState({
      price : priceString
    })
  }

  handleNuberOfTeamsChange = (event) =>{
    this.setState({
      numberOfTeams : Number(event.target.value)
    })
  }

  play = () => {
    this.setState({
      newGame : true
    });
  }







  render() {
    console.log(this.state)
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
            <select name = "dollarSigns" onChange = {this.handleDollarChange}>
              <option> Any Price </option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
            <select name ="numberOfTeams" onChange = {this.handleNuberOfTeamsChange}>
              <option> Number of Teams</option>
              <option value = '4' > Final Fork </option>
              <option value = '8' > Elite Ate </option>
              <option value = '16'> Sweet Sixteen </option>
            </select>
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
    },
    loadMyPrice : myPrice => {
      dispatch(loadMyPrice(myPrice))
    },
    pickRound : round =>{
      dispatch(pickRound(round))
    }
  }
}

const ConnectedLandingApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

export default ConnectedLandingApp;
