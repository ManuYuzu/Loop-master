// ENEMY CONSTRUCTOR
const EnemyMaker = function () {
  this.y = 9
  this.x = 11
  this.strength = 2
  this.health = 10

  // ENEMY START POSITION
  this.StartPosition = function () {
    LEVELS.L1[this.y][this.x] = 3
  }
}
