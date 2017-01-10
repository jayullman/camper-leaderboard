// this is the header for the app

import React from 'react';

function Header() {
  return (
    <div className="App-header">
      <h1><span className="fcc-title">freeCodeCamp</span><br/>
      <span className="project-title">Leaderboard</span></h1>
      <h2 className='subtitle'>A <a target="_blank" href="https://www.freecodecamp.com/">freeCodeCamp<i
        className="fa fa-free-code-camp" aria-hidden="true"></i></a> Project</h2>
        <h5 className="github">View this project on <a target="_blank"
          href="https://github.com/libeja/camper-leaderboard">github</a> <a
            target="_blank"
            href="https://github.com/libeja/camper-leaderboard"><i
              className="fa fa-github" aria-hidden="true"></i></a></h5>
    </div>
  );
}

export default Header;
