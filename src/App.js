import React, { Component } from 'react';
import requestJSON from './requestJSON';

import logo from './logo.svg';
import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      scores_allTime: [],
      scores_30days: []

    };

    // makes ajax call to FCC's server and sets the state
    // for allTime scores and 30days scores
    // code has been seperated into seperate module requestJSON.js
    requestJSON.call(this);

  }



  render() {



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.scores_30days}
        </p>
      </div>
    );
  }
}


export default App;
