// CHARACTER CREATION
const char = new Character()

// FIRST ENEMY CREATION
//let enemy = new EnemyMaker()

// CHAR-INFO
let charName = document.getElementById('char-name')
let charHealth = document.getElementById('char-health')

// ENEMIES RANDOM SPAWN
let path = []
function randomSpawn () {
  for (let i = 0; i < LEVELS.L1.length; i++) {
    for (let j = 0; j < LEVELS.L1[i].length; j++) {
      if (LEVELS.L1[i][j] === 1) {
        path.push({ postY: i, postX: j })
      }
    }
  }
}
randomSpawn()

// ENEMIES SPAWN
let enemies = []
// ENEMIES RESPAWN FOR EACH LOOP
function spawnEnemies () {
  for (let i = 0; i < char.loop; i++) {
  enemSpawn = Math.floor(Math.random() * path.length)
  enemies.push(new EnemyMaker(path[enemSpawn]))
  enemies[i].StartPosition()
  randomSpawn()
  }
}
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
      LEVELS.L1[enemyInCombat.y][enemyInCombat.x] = 1
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

// DRAWBOARD FUNCTION
function drawBoard () {
  // BOARD ACT
  LEVELS.L1.forEach((row, r) => {
    row.forEach((col, c) => {
      const rowHTML = document.querySelector(`.row${r + 1}`)
      const cellHTML = rowHTML.querySelector(`.col${c + 1}`)

      if (LEVELS.L1[r][c] === 1) {
        cellHTML.classList.remove('character')
        cellHTML.classList.remove('enemy')
        cellHTML.classList.add('road')
      }

      if (LEVELS.L1[r][c] === 2) {
        cellHTML.classList.remove('road')
        cellHTML.classList.remove('enemy')
        cellHTML.classList.add('character')
      }

      if (LEVELS.L1[r][c] === 3) {
        cellHTML.classList.remove('character')
        cellHTML.classList.remove('road')
        cellHTML.classList.add('enemy')
      }
    })
  })
  // INTERFACE ACT
  charName.innerText = char.name
  charHealth.innerText = char.health
  let charStrength = document.getElementById('char-strength')
  charStrength.innerText = char.strength
  let charGold = document.getElementById('char-gold')
  charGold.innerText = char.gold
}

// START GAME FUNCTION
function game () {
  drawBoard()
  char.moveCharacter()
}

// START GAME
char.StartPosition()
spawnEnemies()
let gameTimer = setInterval(game, 300)

// GAME OVER FUNCTION
function gameOver () {
  clearInterval(gameTimer)
  window.alert('GAME OVER')
}

// PAUSE / RE-START BUTTON CREATION
let button = document.getElementsByClassName('pause')[0]

// PAUSE / RE-START BUTTON FUNCTION
let paused = false
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
