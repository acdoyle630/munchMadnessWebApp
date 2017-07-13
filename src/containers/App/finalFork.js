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
      searchBar : "",
      champsChosen : false,
      displayFirstNumber : "",
      displaySecond : false,
      displayThird : false,
      displayFourth : false
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
        displayFirstNumber : this.props.contenders.first.display_phone
      });
    } else {
      this.setState({
        displayFirstNumber : ''
      });
    }
  }

  render(){
    console.log(this.props.contenders.first.display)
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
              <div className = 'contenderPrice'>
                {this.props.contenders.first.price}
              </div>
              <div className = 'contenderStars'>
                {this.props.contenders.first.rating} Stars
              </div>
              <div className = "contenderStats">
                {this.state.displayFirstNumber}






              </div>
            </div>
            <p id = "vsLeft">VS</p>
            <div id = 'currentStats'>







            </div>
            <div className = "second" onClick={this.chooseSecond}>
              <div className = 'contenderName'>
                {this.props.contenders.second.name}
              </div>
              <div className = 'contenderPrice'>
                {this.props.contenders.second.price}
              </div>
              <div className = 'contenderStars'>
                {this.props.contenders.second.rating} Stars
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
                {this.props.winners.leftChamp.rating} Stars
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
                {this.props.winners.rightChamp.rating} Stars
              </div>
            </div>
          </div>
          <div className = 'right'>
            <div className = "third" onClick={this.chooseThird}>
              <div className = 'contenderName'>
                {this.props.contenders.third.name}
              </div>
              <div className = 'contenderPrice'>
                {this.props.contenders.third.price}
              </div>
              <div className = 'contenderStars'>
                {this.props.contenders.third.rating} Stars
              </div>
            </div>
            <p id = "vsRight">VS</p>
            <div className = "fourth" onClick={this.chooseFourth}>
              <div className = 'contenderName'>
                {this.props.contenders.fourth.name}
              </div>
              <div className = 'contenderPrice'>
                {this.props.contenders.fourth.price}
              </div>
              <div className = 'contenderStars'>
                {this.props.contenders.fourth.rating} Stars
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