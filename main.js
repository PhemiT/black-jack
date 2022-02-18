// declaring variables 
let firstCard = 7
let secondCard = 10
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let gameMessage = ""
let getMessage = document.getElementById("get-message")
let getSum = document.getElementById("get-sum")
let getCards = document.getElementById("get-cards")

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
    cards.push(anotherCard)
    renderGame()
}

