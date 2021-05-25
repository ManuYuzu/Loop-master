// GAME STATUS
let gameTimer
let speed = 300
let speedCombat = 1000

// CHARACTER CREATION
const char = new Character()

// COMBAT MOTOR
let combatTimer

const combat = function (y, x) {
  clearInterval(gameTimer)
  let enemyInCombat = enemies.filter(enemy => { return enemy.y === y && enemy.x === x })[0]
  showText(`${enemyInCombat.name} salvaje ha aparecido.\n`)

  combatTimer = setInterval(function () {
    enemyInCombat.health -= char.strength
    showText(`Atacas, tu enemigo pierde ${char.strength} puntos de vida.\n`)

    if (enemyInCombat.health <= 0) {
      char.gold += enemyInCombat.drop
      showText(`La rata ha muerto. Recibes ${enemyInCombat.drop} monedas de oro\n`)
      map[enemyInCombat.y][enemyInCombat.x] = 1
      enemies.splice(enemies.indexOf(enemyInCombat), 1)
      clearInterval(combatTimer)
      gameTimer = setInterval(game, speed)
    } else {
      char.health -= enemyInCombat.strength
      charHealth.innerText = char.health
      showText(`La rata te ataca y pierdes ${enemies.strength} puntos de vida.\n`)
    }

    if (char.health <= 0) {
      clearInterval(combatTimer)
      gameOver()
    }
  }, speedCombat)
}

// START GAME FUNCTION
function game () {
  drawBoard()
  loadInterface()
  char.findEnemy()
  char.moveCharacter()

  // RESPAWN
  if (char.y === char.startY && char.x === char.startX) {
    char.loop++
    char.health += 20
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
  gameTimer = setInterval(game, speed)
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
