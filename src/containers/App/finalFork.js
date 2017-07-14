import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
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
      searchBar : "",
      champsChosen : false,
      displayFirstNumber : "",
      displayFirstPrice : "",
      displayFirstStars : "",
      displaySecondNumber : "",
      displaySecondPrice : "",
      displaySecondStars : "",
      displayThirdNumber : "",
      displayThirdPrice : "",
      displayThirdStars : "",
      displayFourthNumber : "",
      displayFourthPrice : "",
      displayFourthStars : ""
    }

  }

  goToChampiondish = () =>{
    if(this.props.winners.leftChamp.name === undefined || this.props.winners.rightChamp.name === undefined ){
      alert('Choose your contenders')
    }
    else{
     this.setState({
      champsChosen : true
     });
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

  statsFirst = (event) => {
    event.preventDefault();
    if(this.state.displayFirstNumber === ''){
      console.log('hit first')
      this.setState ({
        displayFirstNumber : `Phone Number : ${this.props.contenders.first.display_phone}`,
        displayFirstPrice : `Price : ${this.props.contenders.first.price}`,
        displayFirstStars : `Stars : ${this.props.contenders.first.rating}`
      });
    } else {
      this.setState({
        displayFirstNumber : '',
        displayFirstPrice : '',
        displayFirstStars : ''
      });
    }
  }

  statsSecond = (event) => {
    event.preventDefault();
    if(this.state.displaySecondNumber === ''){
      console.log('hit second')
      this.setState ({
        displaySecondNumber : `Phone Number : ${this.props.contenders.second.display_phone}`,
        displaySecondPrice : `Price : ${this.props.contenders.second.price}`,
        displaySecondStars : `Stars : ${this.props.contenders.second.rating}`
      });
    } else {
      this.setState({
        displaySecondNumber : '',
        displaySecondPrice : '',
        displaySecondStars : ''
      });
    }
  }

   statsThird = (event) => {
    event.preventDefault();
    if(this.state.displayThirdNumber === ''){
      console.log('hit third')
      this.setState ({
        displayThirdNumber : `Phone Number : ${this.props.contenders.third.display_phone}`,
        displayThirdPrice : `Price : ${this.props.contenders.third.price}`,
        displayThirdStars : `Stars : ${this.props.contenders.third.rating}`
      });
    } else {
      this.setState({
        displayThirdNumber : '',
        displayThirdPrice : '',
        displayThirdStars : ''
      });
    }
  }

  statsFourth = (event) => {
    event.preventDefault();
    if(this.state.displayFourthNumber === ''){
      console.log('hit fourth')
      this.setState ({
        displayFourthNumber : `Phone Number : ${this.props.contenders.fourth.display_phone}`,
        displayFourthPrice : `Price : ${this.props.contenders.fourth.price}`,
        displayFourthStars : `Stars : ${this.props.contenders.fourth.rating}`
      });
    } else {
      this.setState({
        displayFourthNumber : '',
        displayFourthPrice : '',
        displayFourthStars : ''
      });
    }
  }

  render(){

    console.log(this.props.contenders.first)
    if(this.state.champsChosen === true){
      return(
        <Redirect to={{
          pathname : 'championDish'
        }} />
        )
    }
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
            <button onClick = {this.goToChampiondish}> Championship!
            </button>
        </div>
        <div className ='forkChoices'>
          <div className = 'left'>
          <button onClick ={this.statsFirst} > Details
          </button>
            <div className = "first" onClick={this.chooseFirst}>
              <div className = 'contenderName'>
                {this.props.contenders.first.name}
              </div>
              <div className = 'contenderStats'>
                {this.state.displayFirstPrice}
              </div>
              <div className = 'contenderStats'>
                {this.state.displayFirstStars}
              </div>
              <div className = "contenderStats">
                {this.state.displayFirstNumber}
              </div>
            </div>
            <p id = "vsLeft">VS</p>
            <button onClick = {this.statsSecond}>
            Details
            </button>
            <div className = "second" onClick={this.chooseSecond}>
              <div className = 'contenderName'>
                {this.props.contenders.second.name}
              </div>
              <div className = 'contenderStats'>
                {this.state.displaySecondPrice}
              </div>
              <div className = 'contenderStats'>
                {this.state.displaySecondStars}
              </div>
              <div className = "contenderStats">
                {this.state.displaySecondNumber}
              </div>
            </div>
          </div>
          <div id = 'forkMiddle'>
            <div id = 'forkLeftChamp'>
              <div className = 'contenderName'>
                {this.props.winners.leftChamp.name}
              </div>
              <div className = 'contenderPrice'>
                {this.props.winners.leftChamp.price}
              </div>
              <div className = 'contenderStars'>
                {this.props.winners.leftChamp.rating}
              </div>
            </div>
            <p>VS</p>
            <div id = 'forkRightChamp'>
              <div className = 'contenderName'>
                {this.props.winners.rightChamp.name}
              </div>
              <div className = 'contenderPrice'>
                {this.props.winners.rightChamp.price}
              </div>
              <div className = 'contenderStars'>
                {this.props.winners.rightChamp.rating}
              </div>
            </div>
          </div>
          <div className = 'right'>
           <button onClick = {this.statsThird}>
            Details
            </button>
            <div className = "third" onClick={this.chooseThird}>
              <div className = 'contenderName'>
                {this.props.contenders.third.name}
              </div>
              <div className = 'contenderStats'>
                {this.state.displayThirdPrice}
              </div>
              <div className = 'contenderStats'>
                {this.state.displayThirdStars}
              </div>
              <div className = "contenderStats">
                {this.state.displayThirdNumber}
              </div>
            </div>
            <p id = "vsRight">VS</p>
             <button onClick = {this.statsFourth}>
            Details
            </button>
            <div className = "fourth" onClick={this.chooseFourth}>
              <div className = 'contenderName'>
                {this.props.contenders.fourth.name}
              </div>
              <div className = 'contenderStats'>
                {this.state.displayFourthPrice}
              </div>
              <div className = 'contenderStats'>
                {this.state.displayFourthStars}
              </div>
                <div className = "contenderStats">
                {this.state.displayFourthNumber}
              </div>


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