// Crate a array contain the all element
let moves = ["ROCK", "PAPER", "SCISSORS"];

// States 
let isGameStarted = false
let gameOver = false

// Grab the move element of each players and store it to variables
let p1moveEl = document.getElementById("p1move-el")
let p2moveEl = document.getElementById("p2move-el")

// Grab the wins element and store in a variable
let p1winsEl = document.getElementById("p1wins-el")
let p2winsEl = document.getElementById("p2wins-el")

// Grab the message element and store it into variable
let messageEl = document.getElementById("message-el")

// Grab the final win element and store it into variable
let winsEl = document.getElementById("wins-el")

// Create a function that randomly crate numbers
function createRandomNumber() {
    let randomNumber =  Math.floor(Math.random() * 3)
    return randomNumber
}
// The start game function
function start() {
    if (isGameStarted === false){
        p1moveEl.textContent = moves[createRandomNumber()]
        p2moveEl.textContent = moves[createRandomNumber()]
        isGameStarted = true
        winsCount()
    }
}
// The keep going function
function keep() {
    if (gameOver != true) {
        p1moveEl.textContent = moves[createRandomNumber()]
        p2moveEl.textContent = moves[createRandomNumber()]
        winsCount()
        checkWins()
    }

}

// The Wins count function

function winsCount () {
        if (p1moveEl.textContent === "ROCK" && p2moveEl.textContent === "SCISSORS"){
            p1winsEl.textContent += "*"
            messageEl.textContent = "ROCK SMASHES THE SCISSORS"
        } else if (p1moveEl.textContent === "SCISSORS" && p2moveEl.textContent === "PAPER") {
            p1winsEl.textContent += "*"
            messageEl.textContent = "SCISSORS CUTS PAPER"
        } else if (p1moveEl.textContent === "PAPER" && p2moveEl.textContent === "ROCK") {
            p1winsEl.textContent += "*"
            messageEl.textContent = "PAPER WRAP THE ROCK"
        } else if (p1moveEl.textContent === "SCISSORS" && p2moveEl.textContent === "ROCK") {
            p2winsEl.textContent += "*"
            messageEl.textContent = "ROCK SMASHES THE ROCK"
        } else if (p1moveEl.textContent === "PAPER" && p2moveEl.textContent === "SCISSORS"){
            p2winsEl.textContent += "*"
            messageEl.textContent = "SCISSORS CUTS THE PAPER"
        } else if (p1moveEl.textContent === "ROCK" && p2moveEl.textContent === "PAPER"){
            p2winsEl.textContent += "*"
            messageEl.textContent = "PAPER WRAP ROCK"
        } else {
            messageEl.textContent = "SAME MOVE"
        }

}

function checkWins () {
    if (p1winsEl.textContent === "Wins :***" || p2winsEl.textContent === "Wins :***"){
        if (p1winsEl.textContent === "Wins :***") {
            winsEl.textContent = "PLAYER 1 WINS"
        } else {
            winsEl.textContent = "PLAYER 2 WINS"
        }
        gameOver = true
    }
}




