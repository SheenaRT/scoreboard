let homeCount = 0;
let awayCount = 0;

let homeScore = document.getElementById('home-score');
let awayScore = document.getElementById('away-score');

function plusOneHome() {
  homeCount = homeCount + 1;
  homeScore.textContent = homeCount;
}

function plusTwoHome() {
  homeCount = homeCount + 2;
  homeScore.textContent = homeCount;
}

function plusThreeHome() {
  homeCount = homeCount + 3;
  homeScore.textContent = homeCount;
}

function plusOneAway() {
  awayCount = awayCount + 1;
  awayScore.textContent = awayCount;
}

function plusTwoAway() {
  awayCount = awayCount + 2;
  awayScore.textContent = awayCount;
}

function plusThreeAway() {
  awayCount = awayCount + 3;
  awayScore.textContent = awayCount;
}
