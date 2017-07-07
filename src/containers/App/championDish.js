import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import { loadWinner } from '../../action';
import {Link, Redirect} from 'react-router-dom';

class ChampionDish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first : "",
      second : "",
      third : "",
      fourth : "",
      searchBar : "",
      championChosen : false,
      championSelected : false
    }

  }

  showWinner = () => {
    console.log(this.props.champ.champWinner);
    if(this.state.championSelected === true){
      this.setState({
        championChosen : true
      });
    }
    else{
      alert('choose your winner')
    }
  }

  chooseWinnerLeft = () => {
    this.props.loadWinner(this.props.winners.leftChamp);
    this.setState({
      championSelected : true
    })
  }

  chooseWinnerRight = () => {
    this.props.loadWinner(this.props.winners.rightChamp);
    this.setState({
      championSelected : true
    })
  }

  render(){
    console.log(this.state)
    if(this.state.championChosen === true){
      return (
          <Redirect to={{
          pathname : 'winner'
        }} />
        )
    }
    console.log(this.props.champ)
    if(this.props.winners.currentChampionContender === 'one'){
      return(
        <Redirect to={{
          pathname : '/'
        }} />
        )
    }
    console.log(this.props.winners)
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>ChampionDish</h2>
          </div>
          <div>
            <button onClick = {this.showWinner}>
              Show me the winner
            </button>
          </div>
          <div id = 'championship'>
            <div id = 'leftychamp' onClick ={this.chooseWinnerLeft}>
            {this.props.winners.leftChamp.name}
            </div>
            <p>VS</p>
            <div id = 'rightychamp' onClick ={this.chooseWinnerRight}>
            {this.props.winners.rightChamp.name}
            </div>
          </div>
          <div id = "finalWinner">
            {this.props.champ.champWinner.name}
          </div>

        </div>
      )}
    }

const mapStateToProps = (state) => {
  return {
    winners : state.championDish,
    champ : state.winner
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadWinner : winner => {
      dispatch(loadWinner(winner))
    }
  }
}

const ConnectedChampionDishApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(ChampionDish);

export default ConnectedChampionDishApp;
