const Character = function () {
  this.y = 5
  this.x = 8
  this.previousY = 0
  this.previousX = 0
  this.strength = 5
  this.health = 20

  // Chr start position
  this.StartPosition = function () {
    LEVELS.L1[this.y][this.x] = 2
  }
  // Chr moving in path
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
      // Chr finds an enemy
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
    if (this.y === RESPAWNY && this.x === RESPAWNX) {
      spawnEnemies()
      console.log('Respawn')
    }
  }
}