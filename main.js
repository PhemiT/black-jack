// declaring variables and objects 
let player = {
    name : "Phemi",
    chips : "500"
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let gameMessage = ""
let getMessage = document.getElementById("get-message")
let getSum = document.getElementById("get-sum")
let getCards = document.getElementById("get-cards")
let playerInfo = document.getElementById("player-info")

playerInfo.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) + 1
    if (randomCard > 11) {
        return 10
    } else if (randomCard === 1) {
        return 11
    }
    return randomCard
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    getCards.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        getCards.textContent += cards[i] + " ";
    }
    getSum.textContent = "Sum: " + sum
    if (sum < 21) {
        gameMessage = "Do you want to draw a new card?!"
    } else if (sum === 21) {
        hasBlackJack = true
        gameMessage = "You've got Blackjack!"
    } else if (sum > 21) {
        gameMessage = "You're out of the game!"
        isAlive = false
    }    
    getMessage.textContent = gameMessage
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let anotherCard = getRandomCard()
    sum += anotherCard
    cards.push(anotherCard)
    renderGame()
    }  
}
