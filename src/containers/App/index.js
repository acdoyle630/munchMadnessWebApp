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
      fourth : "",
      searchBar : ""
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
    console.log(restaurant)
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
        console.log(response)
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
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Munch Madness</h2>
        </div>
        <div className="App-intro">
          <form onSubmit ={this.handleSearchSubmit}>
            <input type = "text" value = {this.state.searchBar} onChange = {this.handleSearchChange} />
            <button type = "submit"> Find me food
            </button>
          </form>
        </div>
        <div id ='choices'>
          <div id = "first">
          {this.state.first}
          </div>
          <div id = "second">
          {this.state.second}
          </div>
          <div id = "third">
          {this.state.third}
          </div>
          <div id = "fourth">
          {this.state.fourth}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
