function initGame () {
  let userInput = document.querySelector('.userInput')
  let submitButton = document.querySelector('.submitButton')

  let randomNumber = getRandomNumber(0, 100)
  console.log('random number:', randomNumber)

  function compareGuessedNumber (guessedNumber) {
    if (randomNumber < guessedNumber) {
      console.log('too high')
    } else if (randomNumber > guessedNumber) {
      console.log('too low')
    } else if (randomNumber === guessedNumber) {
      console.log('you win!!!')
    } else {
      console.log('invalid input')
    }
  }

  function handleUserInput (event) {
    event.preventDefault()
    let userGuess = Number(userInput.value)
    compareGuessedNumber(userGuess)
  }

  submitButton.addEventListener('click', handleUserInput)
}

function getRandomNumber (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

window.addEventListener('load', initGame)
