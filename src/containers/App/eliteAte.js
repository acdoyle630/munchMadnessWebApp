import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

class EliteAte extends Component {
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
    console.log(this.props.contenders);
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
        <div className ='eliteChoices'>
          <div className = 'left'>
            <div className = "first">
            {this.props.contenders.first.name}
            </div>
            <p>VS</p>
            <div className = "second">
            {this.props.contenders.second.name}
            </div>
          </div>
          <div className = 'right'>
            <div className = "third">
            {this.props.contenders.third.name}
            </div>
            <p>VS</p>
            <div className = "fourth">
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
    contenders : state.restaurants
  };
}

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadContenders : contenders => {
      dispatch(loadContenders(contenders))
    }
  }
}*/

const ConnectedEliteAteApp = connect(
  mapStateToProps,
  //mapDispatchToProps
  )(EliteAte);

export default ConnectedEliteAteApp;