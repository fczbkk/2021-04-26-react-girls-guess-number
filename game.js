function initGame () {
  let userInput = document.querySelector('.userInput')
  let submitButton = document.querySelector('.submitButton')

  let randomNumber = getRandomNumber(0, 100)
  console.log('random number:', randomNumber)

  submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    let userGuess = Number(userInput.value)
    console.log('user guessed', userGuess)
  })
}

function getRandomNumber (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

window.addEventListener('load', initGame)
