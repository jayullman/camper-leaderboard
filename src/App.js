/* Notes and TODOs

TODO: add font awesome to project
*/


import React, { Component } from 'react';
import requestJSON from './requestJSON';
import Header from './Header';
import Button from './UpdateButton';
import Table from './Table';

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
  // this method will make another AJAX request and update
  updateData = () => {
    requestJSON.call(this);
}

  render() {

    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button onClick={this.updateData} />
          <br/>
          <br/>
          <br/>
          30 Days <br/><br/>


          <br/>
          <br/>
          allTime <br/><br/>

        </p>

        <Table scores={this.state.scores_30days} />

      </div>
    );
  }
}


export default App;
