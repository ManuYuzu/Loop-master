// CHARACTER CONSTRUCTOR
const Character = function () {
  this.y = 5
  this.x = 8
  this.previousY = 0
  this.previousX = 0
  this.strength = 5
  this.name = 'Tanuki'
  this.health = 200
  this.gold = 0
  this.loop = 1

  // CHARACTER START POSITION
  this.StartPosition = function () {
    LEVELS.L1[this.y][this.x] = 2
  }
  // CHARACTER MOVEMENT MOTOR
  this.moveCharacter = function () {
    LEVELS.L1[this.y][this.x] = 1
    // CHARACTER FIND PATH OR ENEMY
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
      combat(this.y, this.x + 1)
    } else if (LEVELS.L1[this.y + 1][this.x] === 3 && this.y + 1 !== this.previousY) {
      combat(this.y + 1, this.x)
    } else if (LEVELS.L1[this.y][this.x - 1] === 3 && this.x - 1 !== this.previousX) {
      combat(this.y, this.x - 1)
    } else if (LEVELS.L1[this.y - 1][this.x] === 3 && this.y - 1 !== this.previousY) {
      combat(this.y - 1, this.x)
    }
    LEVELS.L1[this.y][this.x] = 2

    // RESPAWN
    if (this.y === RESPAWNY && this.x === RESPAWNX) {
      this.loop++
      spawnEnemies()
      console.log('Respawn, another lap')
    }
  }
}
