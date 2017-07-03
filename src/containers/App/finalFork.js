import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import { loadChampionDish } from '../../action';
import {Link, Redirect} from 'react-router-dom';

class FinalFork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first : "",
      second : "",
      third : "",
      fourth : "",
      searchBar : ""
    }

  }

  chooseFirst = () => {
    this.props.loadChampionDish(this.props.contenders.first)
  }

  chooseSecond = () => {
    this.props.loadChampionDish(this.props.contenders.second)
  }

  chooseThird = () => {
    this.props.loadChampionDish(this.props.contenders.third)
  }

  chooseFourth = () => {
    this.props.loadChampionDish(this.props.contenders.fourth)
  }

  render(){
    console.log(this.props.contenders)
    console.log(this.props.winners)
    if(this.props.contenders.current !== "done"){
      return(
        <Redirect to={{
          pathname : '/'
        }} />
        )
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Final Fork</h2>
        </div>
        <div className="App-intro">
          <form onSubmit ={this.handleSearchSubmit}>
            <input type = "text" value = {this.state.searchBar} onChange = {this.handleSearchChange} />
            <button type = "submit"> Find me food
            </button>
          </form>
        </div>
        <div className ='forkChoices'>
          <div className = 'left'>
            <div className = "first" onClick={this.chooseFirst}>
            {this.props.contenders.first.name}
            </div>
            <p id = "vsLeft">VS</p>
            <div className = "second" onClick={this.chooseSecond}>
            {this.props.contenders.second.name}
            </div>
          </div>
          <div id = 'forkMiddle'>
            <div id = 'forkLeftChamp'>
            {this.props.winners.leftChamp.name}
            </div>
            <p>VS</p>
            <div id = 'forkRightChamp'>
            {this.props.winners.rightChamp.name}
            </div>
          </div>
          <div className = 'right'>
            <div className = "third" onClick={this.chooseThird}>
            {this.props.contenders.third.name}
            </div>
            <p id = "vsRight">VS</p>
            <div className = "fourth" onClick={this.chooseFourth}>
            {this.props.contenders.fourth.name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    contenders : state.finalFork,
    winners : state.championDish
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadChampionDish : contenders => {
      dispatch(loadChampionDish(contenders))
    }
  }
}

const ConnectedFinalForkApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(FinalFork);

export default ConnectedFinalForkApp;