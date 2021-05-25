// ENEMY CONSTRUCTOR
const EnemyMaker = function (coord) {
  this.y = coord.postY
  this.x = coord.postX
  this.name = 'Rattata'
  this.health = 12
  this.strength = 2
  this.drop = 1

  // ENEMY START POSITION
  this.StartPosition = function () {
    LEVELS.L1[this.y][this.x] = 3
  }
}
