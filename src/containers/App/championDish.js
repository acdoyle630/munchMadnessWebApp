import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import { loadChampionDish } from '../../action';
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
      champsChosen : false
    }

  }
  render(){
    console.log(this.props.winners)
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>ChampionDish</h2>
          </div>
          <div id = 'championship'>
            <div id = 'leftychamp'>
            {this.props.winners.leftChamp.name}
            </div>
            <p>VS</p>
            <div id = 'rightychamp'>
            {this.props.winners.rightChamp.name}
            </div>
          </div>

        </div>
      )}
    }

const mapStateToProps = (state) => {
  return {
    winners : state.championDish
  };
}

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadChampionDish : contenders => {
      dispatch(loadChampionDish(contenders))
    }
  }
}
*/
const ConnectedChampionDishApp = connect(
  mapStateToProps,
  //mapDispatchToProps
  )(ChampionDish);

export default ConnectedChampionDishApp;
