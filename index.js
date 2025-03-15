let homeCount = 0;
let guestCount = 0;

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function plusOneHome() {
    homeCount = homeCount + 1;
    homeScore.textContent = homeCount
}

function plusTwoHome() {
    homeCount = homeCount + 2;
    homeScore.textContent = homeCount
}

function plusThreeHome() {
    homeCount = homeCount + 3;
    homeScore.textContent = homeCount
}

function plusOneGuest() {
    guestCount = guestCount + 1;
    guestScore.textContent = guestCount
}

function plusTwoGuest() {
    guestCount = guestCount + 2;
    guestScore.textContent = guestCount
}

function plusThreeGuest() {
    guestCount = guestCount + 3;
    guestScore.textContent = guestCount
}