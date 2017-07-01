import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first : "",
      second : "",
      third : "",
      fourth : ""
    }

  }

  searchYelp = (event) =>{
    event.preventDefault();
    console.log('search YELP')
     return fetch('/api', {
      method: "GET",
      credentials: 'include',
        headers:
        {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then(response =>{
        return(response.json())
      }).then(data => {
        console.log(data)
        this.generateBracket(data)
      }).catch(err => {
        throw err;
      })
    }

  generateBracket(data){
    let choice = JSON.parse(data.result)
    console.log(choice.name)
    if(this.state.first === ""){
    this.setState({first: choice.name})
    }
    if(this.state.first != "" && this.state.second === ""){
      this.setState({second: choice.name})
    }
    if(this.state.first != "" && this.state.second != "" && this.state.third === ""){
      this.setState({third: choice.name})
    }
    if(this.state.first != "" && this.state.second != "" && this.state.third != "" && this.state.fourth === ""){
      this.setState({fourth: choice.name})
    }
  }




  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Munch Madness</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.searchYelp}>Search</button>
        </p>
        <div id ='choices'>
          {this.state.first}
        </div>
      </div>
    );
  }
}

export default App;
