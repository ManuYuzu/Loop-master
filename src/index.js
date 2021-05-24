const LEVELS = {
  // 0 = Vacio / 1 = Camino / 2 = Character / 3 = Enemigos / 4 = Moneda
  L1: [
  // 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
}

const Character = function () {
  this.y = 5
  this.x = 8
  this.previousY = 0
  this.previousX = 0
  this.strength = 5
  this.health = 20

  this.StartPosition = function () {
    LEVELS.L1[this.y][this.x] = 2
  }

  this.moveCharacter = function () {
    LEVELS.L1[this.y][this.x] = 1
    if (LEVELS.L1[this.y][this.x + 1] === 1 && this.x + 1 !== this.previousX) {
      this.previousY = this.y
      this.previousX = this.x
      this.x++
    } else if (LEVELS.L1[this.y + 1][this.x] === 1 && this.y + 1 !== this.previousY) {
      this.previousY = this.y
      this.previousX = this.x
      this.y++
    } else if (LEVELS.L1[this.y][this.x - 1] === 1 && this.x - 1 !== this.previousX) {
      this.previousY = this.y
      this.previousX = this.x
      this.x--
    } else if (LEVELS.L1[this.y - 1][this.x] === 1 && this.y - 1 !== this.previousY) {
      this.previousY = this.y
      this.previousX = this.x
      this.y--
    } else if (LEVELS.L1[this.y][this.x + 1] === 3 && this.x + 1 !== this.previousX) {
      combat()
    } else if (LEVELS.L1[this.y + 1][this.x] === 3 && this.y + 1 !== this.previousY) {
      combat()
    } else if (LEVELS.L1[this.y][this.x - 1] === 3 && this.x - 1 !== this.previousX) {
      combat()
    } else if (LEVELS.L1[this.y - 1][this.x] === 3 && this.y - 1 !== this.previousY) {
      combat()
    }
    LEVELS.L1[this.y][this.x] = 2
  }
}

const EnemyMaker = function () {
  this.y = 0
  this.x = 0
  this.strength = 1
  this.health = 5
}

const combat = function () {
  clearInterval(gameTimer)
  console.log('pelea')
}
const char = new Character()

function drawBoard () {
  LEVELS.L1.forEach((row, r) => {
    row.forEach((col, c) => {
      const rowHTML = document.querySelector(`.row${r + 1}`)
      const cellHTML = rowHTML.querySelector(`.col${c + 1}`)

      if (LEVELS.L1[r][c] === 1) {
        cellHTML.classList.remove('character')
        cellHTML.classList.add('road')
      }

      if (LEVELS.L1[r][c] === 2) {
        cellHTML.classList.remove('road')
        cellHTML.classList.add('character')
      }

      if (LEVELS.L1[r][c] === 3) {
        cellHTML.classList.remove('road')
        cellHTML.classList.add('enemy')
      }
    })
  })
}

function game () {
  drawBoard()
  char.moveCharacter()
}

// ejecucion
char.StartPosition()
const gameTimer = setInterval(game, 300)
