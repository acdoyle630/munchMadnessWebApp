import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { loadContenders } from '../../action';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

class eliteAte extends Component {
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
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Elite Ate</h2>
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


export default eliteAte;