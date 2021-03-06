import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { loadContenders } from '../../action';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

class ChooseContenders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first : "",
      second : "",
      third : "",
      fourth : "",
      fifth : "",
      sixth : "",
      seventh : "",
      eighth : "",
      ninth : "",
      tenth : "",
      eleventh : "",
      twelth : "",
      thirteenth : "",
      forteenth : "",
      fifthteenth : "",
      sixthteenth : "",
      searchBar : "",
      searchLocation : this.props.myLocation.myLocation,
      searchPrice : this.props.myPrice.myPrice,
      id : 1
    }

  }

  handleSearchChange = (event) => {
    this.setState({
      searchBar : event.target.value
    });
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.searchYelp(this.state);
  }

  searchYelp(restaurant){
    console.log(this.props.myLocation)
    console.log(restaurant)
    if(this.state.searchBar === ""){
      alert('enter search critera')
    }
    else{
       return fetch('/api', {
        method: "POST",
        credentials: 'include',
          headers:
          {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(restaurant)
        }).then(response =>{
          return(response.json())
        }).then(data => {
          this.generateBracket(data)
        }).catch(err => {
          throw err;
        })
      }
    }

  generateBracket(data){
    console.log(data)
    this.setState({
      searchBar : ""
    })
    if(data.result === undefined){
      alert('no matches for your search critera')
    }
    else{
      let choice = JSON.parse(data.result)
        choice.id = this.state.id
        this.props.loadContenders(choice)
        this.state.id++

        if(this.state.first !== "" && this.state.second !== "" && this.state.third !== "" && this.state.fourth !== "" && this.state.fifth !== "" && this.state.sixth !== "" && this.state.seventh !== "" && this.state.eighth === ""){
           this.setState({eighth: choice.name})
        }
        if(this.state.first !== "" && this.state.second !== "" && this.state.third !== "" && this.state.fourth !== "" && this.state.fifth !== "" && this.state.sixth !== "" && this.state.seventh === ""){
           this.setState({seventh: choice.name})
        }
        if(this.state.first !== "" && this.state.second !== "" && this.state.third !== "" && this.state.fourth !== "" && this.state.fifth !== "" && this.state.sixth === ""){
           this.setState({sixth: choice.name})
        }
        if(this.state.first !== "" && this.state.second !== "" && this.state.third !== "" && this.state.fourth !== "" && this.state.fifth === ""){
           this.setState({fifth: choice.name})
        }
        if(this.state.first !== "" && this.state.second !== "" && this.state.third !== "" && this.state.fourth === ""){
          this.setState({fourth: choice.name})
        }
        if(this.state.first !== "" && this.state.second !== "" && this.state.third === ""){
          this.setState({third: choice.name})
        }
        if(this.state.first !== "" && this.state.second === ""){
          this.setState({second: choice.name})
        }
        if(this.state.first === ""){
        this.setState({first: choice.name})
        }
      }
  }




  render() {
    console.log(this.props.round)
    if(this.props.myLocation.myLocation === ""){
      return(
        <Redirect to={{
          pathname : '/'
        }} />
        )
    }
    if(this.state.first !== "" && this.state.second !== "" && this.state.third !== "" && this.state.fourth !== "" && this.props.round.round === 4){
      return(
        <Redirect to={{
          pathname : 'finalFork'
        }} />
        )
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Choose Your Contenders</h2>
        </div>
        <div className="App-intro">
          <form onSubmit ={this.handleSearchSubmit}>
            <input type = "text" placeholder ="type" value = {this.state.searchBar} onChange = {this.handleSearchChange} />
            <button type = "submit"> Find me food
            </button>
          </form>
        </div>
          <div id = 'allChoices'>
            <div className ='choices'>
              <div className = "contenders">
              {this.state.first}
              </div>
              <div className = "contenders">
              {this.state.third}
              </div>
              <div className = "contenders">
              {this.state.fifth}
              </div>
              <div className = "contenders">
              {this.state.seventh}
              </div>
            </div>
            <div className = 'choices'>
              <div className = "contenders">
              {this.state.second}
              </div>
              <div className = "contenders">
              {this.state.fourth}
              </div>
              <div className = "contenders">
              {this.state.sixth}
              </div>
              <div className = "contenders">
              {this.state.eighth}
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
    myLocation : state.myLocation,
    myPrice : state.myPrice,
    round : state.round
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadContenders : contenders => {
      dispatch(loadContenders(contenders))
    }
  }
}

const ConnectedChooseContendersApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(ChooseContenders);

export default ConnectedChooseContendersApp;
