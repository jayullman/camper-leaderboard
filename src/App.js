import React, { Component } from 'react';
import requestJSON from './requestJSON';
import Header from './Header';
import Footer from './Footer';
import Button from './UpdateButton';
import Table from './Table';

import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    /* currentView can be either recent or allTime */
    this.state = {
      scores_allTime: [],
      scores_recent: [],
      currentView: 'recent'
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


  handleColumnClick = (e) => {
    e.preventDefault();

    if (e.target.id === 'recent') {
      this.setState({currentView: 'recent'});
    } else {
      this.setState({currentView: 'allTime'});
    }



  }

  render() {

    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Click the Recent or All Time column headers to
          see the a list of 100 campers organized by Recent (Past 30 Days), or
          All Time.
          <br/><br/>
          <Button onClick={this.updateData} />

        </p>

        <Table
          scores={this.state.currentView === 'recent' ?
            this.state.scores_recent :
            this.state.scores_allTime}
          handleClick={this.handleColumnClick}
          currentView={this.state.currentView}
         />
        <Footer />
      </div>
    );
  }
}


export default App;
