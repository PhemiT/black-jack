// declaring variables 
var firstCard = 7
var secondCard = 10
var cards = [firstCard, secondCard]
var sum = firstCard + secondCard
var hasBlackJack = false
var isAlive = true
var gameMessage = ""
var getMessage = document.getElementById("get-message")
var getSum = document.getElementById("get-sum")
var getCards = document.getElementById("get-cards")

function startGame() {
    renderGame()
}

function renderGame() {
    getCards.textContent = "Cards: " + cards[0] + " " + cards[1]
    getSum.textContent = "Sum: " + sum
    if (sum <= 21) {
        gameMessage = "Do you want to draw a new card?!"
    } else if (sum === 21) {
        gameMessage = "Nicee!You've got Blackjack"
    } else {
        gameMessage = "You're out of the game!"
        isAlive = false
    }    
    getMessage.textContent = gameMessage
}

function newCard() {
    anotherCard = 5
    sum += anotherCard
    renderGame()
}