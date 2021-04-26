function initGame () {
  console.log('let the game begin')
}

function getRandomNumber (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

window.addEventListener('load', initGame)
