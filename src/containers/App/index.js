import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { loadContenders } from '../../action';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first : "",
      second : "",
      third : "",
      fourth : "",
      searchBar : "",
      searchLocation : "",
      id : 1
    }

  }

  handleSearchChange = (event) => {
    this.setState({
      searchBar : event.target.value
    });
  }

  handleSearhLocationChange = (event) => {
    this.setState ({
      searchLocation : event.target.value
    });
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.searchYelp(this.state);
  }

  searchYelp(restaurant){
    console.log(restaurant)
    if(this.state.searchBar === "" || this.state.searchLocation === ""){
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
    this.setState({
      searchBar : ""
    })
    let choice = JSON.parse(data.result)
    choice.id = this.state.id
    this.props.loadContenders(choice)
    this.state.id++
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




  render() {
    if(this.state.first !== "" && this.state.second !== "" && this.state.third !== "" && this.state.fourth !== ""){
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
          <h2>Munch Madness</h2>
        </div>
        <div className="App-intro">
          <form onSubmit ={this.handleSearchSubmit}>
            <input type = "text" placeholder ="type" value = {this.state.searchBar} onChange = {this.handleSearchChange} />
            <input type = "text" placeholder = "location city/zip" value = {this.state.searchLocation} onChange = {this.handleSearhLocationChange} />
            <button type = "submit"> Find me food
            </button>
          </form>
        </div>
        <div className ='choices'>
          <div className = "first">
          {this.state.first}
          </div>
          <div className = "second">
          {this.state.second}
          </div>
          <div className = "third">
          {this.state.third}
          </div>
          <div className = "fourth">
          {this.state.fourth}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contenders : state.finalFork
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadContenders : contenders => {
      dispatch(loadContenders(contenders))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

export default ConnectedApp;
