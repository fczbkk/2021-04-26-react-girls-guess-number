function initGame () {
  let userInput = document.querySelector('.userInput')
  let submitButton = document.querySelector('.submitButton')
  let message = document.querySelector('.message')
  let lowGuess = document.querySelector('.lowGuess')
  let highGuess = document.querySelector('.highGuess')
  let startAgainButton = document.querySelector('.startAgainButton')

  let guessCounter = 0
  let lowGuessNumber = 0
  let highGuessNumber = 100
  let randomNumber = getRandomNumber(0, 100)
  console.log('random number:', randomNumber)

  function compareGuessedNumber (guessedNumber) {
    guessCounter = guessCounter + 1
    console.log('guess', guessCounter)

    if (randomNumber < guessedNumber) {
      message.innerHTML = 'Too high'
      if (highGuessNumber > guessedNumber) {
        highGuessNumber = guessedNumber
        highGuess.innerHTML = highGuessNumber
      }
    } else if (randomNumber > guessedNumber) {
      message.innerHTML = 'Too low'
      if (lowGuessNumber < guessedNumber) {
        lowGuessNumber = guessedNumber
        lowGuess.innerHTML = lowGuessNumber
      }
    } else if (randomNumber === guessedNumber) {
      message.innerHTML = 'you win!!! you guess ' + guessCounter + ' times'
    } else {
      message.innerHTML = 'invalid input'
    }
  }

  function handleUserInput (event) {
    event.preventDefault()
    let userGuess = Number(userInput.value)
    compareGuessedNumber(userGuess)
  }

  function restartGame () {
    document.location.reload()
  }

  submitButton.addEventListener('click', handleUserInput)
  startAgainButton.addEventListener('click', restartGame)
}

function getRandomNumber (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

window.addEventListener('load', initGame)
