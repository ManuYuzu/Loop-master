
// Combat
let combatTimer
const combat = function () {
  clearInterval(gameTimer)
  combatTimer = setInterval(function () {
    enemy.health -= char.strength
    if (enemy.health <= 0) {
      LEVELS.L1[enemy.y][enemy.x] = 1
      gameTimer = setInterval(game, 300)
      clearInterval(combatTimer)
    } else {
      char.health -= enemy.strength
    }

    if (char.health <= 0) {
      clearInterval(combatTimer)
      gameOver()
    }
  }, 1000)
}

// Main chr created
const char = new Character()

// Enemies created
let enemy = new EnemyMaker()

// tabletop refresh
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

// Spawn new Enemies for each Loop

function spawnEnemies () {
  console.log('hi')
  enemy = new EnemyMaker()
  enemy.StartPosition()
}

function gameOver () {
  clearInterval(gameTimer)
  window.alert('GAME OVER')
}

function game () {
  drawBoard()
  char.moveCharacter()
}


let button = document.getElementsByClassName('pause')[0]



// ejecucion
char.StartPosition()
enemy.StartPosition()
let gameTimer = setInterval(game, 300)

let paused = false
console.log(paused)
button.addEventListener('click', function () {
  if (!paused) {
    clearInterval(gameTimer)
    clearInterval(combatTimer)
    button.classList.remove('pause')
    button.classList.add('start')
    button.innerText = 'START'
  } else {
    gameTimer = setInterval(game, 300)
    button.classList.remove('start')
    button.classList.add('pause')
    button.innerText = 'PAUSE'
  }
  paused = !paused
  console.log(paused)
})
