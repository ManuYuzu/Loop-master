// GAME STATUS
let gameTimer

// CHARACTER CREATION
const char = new Character()

// COMBAT MOTOR
let combatTimer
let boxDiag = document.getElementById('dialogs')

const combat = function (y, x) {
  clearInterval(gameTimer)
  // boxDiag.innerText = `${enemies.name} salvaje ha aparecido.\n`
  combatTimer = setInterval(function () {
    // boxDiag.innerText += `Atacas y pierde ${char.strength} puntos de vida.\n`
    let enemyInCombat = enemies.filter(enemie => {
      return enemie.y === y && enemie.x === x
    })[0]
    enemyInCombat.health -= char.strength
    if (enemyInCombat.health <= 0) {
      // boxDiag.innerText += ' La rata ha muerto.\n'

      char.gold += enemyInCombat.drop
      map[enemyInCombat.y][enemyInCombat.x] = 1
      enemies.splice(enemies.indexOf(enemyInCombat), 1)
      gameTimer = setInterval(game, 300)
      clearInterval(combatTimer)
    } else {
      char.health -= enemyInCombat.strength
      charHealth.innerText = char.health
      // boxDiag.innerText += ` La rata te ataca y pierdes ${enemies.strength} puntos de vida.\n`
    }
    if (char.health <= 0) {
      clearInterval(combatTimer)
      gameOver()
    }
  }, 600)
}

// START GAME FUNCTION
function game () {
  drawBoard()
  loadInterface()
  char.moveCharacter()

  // RESPAWN
  if (char.y === char.startY && char.x === char.startX) {
    char.loop++
    spawnEnemies()
    console.log('Respawn, another lap')
  }
}

// GAME OVER FUNCTION
function gameOver () {
  clearInterval(gameTimer)
  window.alert('GAME OVER')
}

// START GAME
function startGame () {
  char.startPosition()
  loadInterface()
  spawnEnemies()
  gameTimer = setInterval(game, 300)
}

// START GAME
startGame()

// PAUSE / RE - START BUTTON CREATION
let paused = false

const button = document.getElementsByClassName('pause')[0]
button.addEventListener('click', function () {
  if (!paused) {
    clearInterval(gameTimer)
    clearInterval(combatTimer)
    button.classList.remove('pause')
    button.classList.add('start')
    button.innerText = 'START'
    console.log('JUEGO PAUSADO')
  } else {
    gameTimer = setInterval(game, 300)
    button.classList.remove('start')
    button.classList.add('pause')
    button.innerText = 'PAUSE'
    console.log('JUEGO REANUDADO')
  }
  paused = !paused
})
