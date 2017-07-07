import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

class Winner extends Component {
  constructor(props) {
    super(props);

  }


  render(){
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Your Champion</h2>
        </div>
      </div>
    )}
  }

const mapStateToProps = (state) => {
  return {
    champ : state.winner
  };
}

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadWinner : winner => {
      dispatch(loadWinner(winner))
    }
  }
}*/

const ConnectedWinnerApp = connect(
  mapStateToProps,
  //mapDispatchToProps
  )(Winner);

export default ConnectedWinnerApp;
