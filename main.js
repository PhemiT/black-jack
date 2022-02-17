// declaring variables 
var firstCard = 7
var secondCard = 10
var sum = firstCard + secondCard
var hasBlackJack = false
var isAlive = true
var gameMessage = ""
var getMessage = document.getElementById("get-message")


function startgame() {
    if (sum <= 21) {
        gameMessage = "Do you want to draw a new card?!"
    } else if (sum === 21) {
        gameMessage = "Nicee! You've got Blackjack"
    } else {
        gameMessage = "You lost!"
        isAlive = false
    }    
    getMessage.textContent = gameMessage
}