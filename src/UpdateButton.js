// this component will create a button that
// when pressed will make a new AJAX request
// updating the state


import React from 'react';

// function will receive a callback to update state
function UpdateButton(props) {


  return (
    <button onClick={props.onClick}>
      Update Scores
    </button>
  );

}

export default UpdateButton;
