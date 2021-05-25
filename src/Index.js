// COMBAT MOTOR
let combatTimer

const combat = function () {
  clearInterval(gameTimer)
  combatTimer = setInterval(function () {
    enemy.health -= char.strength
    console.log('ATAQUE')
    console.log('Enemy health: ' + enemy.health)
    if (enemy.health <= 0) {
      console.log('ENEMIGO DERROTADO')
      LEVELS.L1[enemy.y][enemy.x] = 1
      gameTimer = setInterval(game, 300)
      clearInterval(combatTimer)
    } else {
      char.health -= enemy.strength
      console.log('ATAQUE ENEMIGO')
      console.log('Character health: ' + char.health)
    }
    if (char.health <= 0) {
      clearInterval(combatTimer)
      gameOver()
    }
  }, 1000)
}

// CHARACTER CREATION
const char = new Character()

// FIRST ENEMY CREATION
let enemy = new EnemyMaker()

// DRAWBOARD FUNCTION
function drawBoard () {
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
}

// ENEMIES RESPAWN FOR EACH LOOP
function spawnEnemies () {
  console.log('hi')
  enemy = new EnemyMaker()
  enemy.StartPosition()
}

// START GAME FUNCTION
function game () {
  drawBoard()
  char.moveCharacter()
}

// START GAME
char.StartPosition()
enemy.StartPosition()
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
