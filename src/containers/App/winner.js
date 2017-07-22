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
    if(this.props.champ.champWinner.name === undefined){
      return(
        <Redirect to={{
          pathname : '/'
        }} />
        )
    }
    console.log(this.props.champ.champWinner)
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Your Champion</h2>
        </div>
        <div id = "winnerDetails">
          <div className = 'winnerName'>
            {this.props.champ.champWinner.name}
          </div>
          <div className = 'winnerStats'>
            {this.props.champ.champWinner.price}
          </div>
          <div className = 'winnerStats'>
            {this.props.champ.champWinner.rating}
          </div>
          <div className = 'winnerStats'>
            {this.props.champ.champWinner.display_phone}
          </div>
          <div className = 'winnerStats'>
            {this.props.champ.champWinner.url}
          </div>
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
