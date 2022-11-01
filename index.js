let currentHomeScore = document.getElementById("score-element-1")
let scoreHome = 0
let currentAwayScore = document.getElementById("score-element-2")
let scoreAway = 0

function clickOneHome() {
    scoreHome += 1
    currentHomeScore.textContent = scoreHome
}

function clickTwoHome() {
    scoreHome += 2
    currentHomeScore.textContent = scoreHome
}

function clickThreeHome() {
    scoreHome += 3
    currentHomeScore.textContent = scoreHome
}

function clickOneAway() {
    scoreAway += 1
    currentAwayScore.textContent = scoreAway
}

function clickTwoAway() {
    scoreAway += 2
    currentAwayScore.textContent = scoreAway
}

function clickThreeAway() {
    scoreAway += 3
    currentAwayScore.textContent = scoreAway
}