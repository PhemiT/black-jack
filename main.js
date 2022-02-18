// declaring variables 
let firstCard = getRandomCard()
let secondCard = getRandomCard()
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
    getCards.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        getCards.textContent += cards[i] + " ";
        
    }
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
    anotherCard = getRandomCard()
    sum += anotherCard
    cards.push(anotherCard)
    renderGame()
}
