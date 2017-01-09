// this module will create the table and rows that
// displays each camper's information

import React from 'react';


// function will receive the state object with either alltime
// or recent scores
function Table(props) {
  var rowArray = [];
  console.log(props);

  // only run after AJAX call is complete
  if (props.scores.length > 0) {

    // rowArray will be an array of tablerow JSX elements
    rowArray = props.scores.map((camper, index) => {

      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td style={{textAlign: 'left'}}>
            <img
              src={camper.img}
              width={40}
              height={40}
              alt="avatar-thumbnail"
              style={{marginRight: '10px'}}
            />
            {camper.username}
          </td>
          <td>{camper.recent}</td>
          <td>{camper.alltime}</td>
        </tr>
      );

    });
  }

    return (
      <table>
        <thead>
          <tr>
            <th style={{width: 50}}>#</th>
            <th>Camper</th>
            <th style={{width: 100}}>Recent</th>
            <th style={{width: 100}}>All Time</th>
        </tr>
        </thead>
        <tbody>
          {rowArray.length > 0 ? rowArray : ''}
        </tbody>
      </table>
    );
}

export default Table;
