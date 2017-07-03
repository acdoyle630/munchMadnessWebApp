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
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>ChampionDish</h2>
          </div>
          <div className="App-intro">
              <button onClick = {this.goToChampiondish}> Championship!
              </button>
          </div>
        </div>
      )}
    }

    export default ChampionDish;