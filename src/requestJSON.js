

export default function() {

  // obtain JSON data for top users for all time
  const xhr_allTimeScores = new XMLHttpRequest();
    xhr_allTimeScores.open('Get', 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime');

  // obtain JSON data for top users for past 30 days
  const xhr_recentScores = new XMLHttpRequest();
    xhr_recentScores.open('Get', 'https://fcctop100.herokuapp.com/api/fccusers/top/recent');


  xhr_allTimeScores.onreadystatechange = () => {
    if (xhr_allTimeScores.readyState === 4) {
      if (xhr_allTimeScores.status === 200) {

      this.setState({scores_allTime: JSON.parse(xhr_allTimeScores.responseText)});
      } else {
        console.log('Error: ' + xhr_allTimeScores.status);
      }
    }
  };

  xhr_recentScores.onreadystatechange = () => {
    if (xhr_recentScores.readyState === 4) {
      if (xhr_recentScores.status === 200) {
      /*console.log(JSON.parse(xhr_allTimeScores.responseText));*/
      this.setState({scores_recent: JSON.parse(xhr_recentScores.responseText)});
      } else {
        console.log('Error: ' + xhr_recentScores.status);
      }
    }
  };

  xhr_allTimeScores.send(null);
  xhr_recentScores.send(null);
}
