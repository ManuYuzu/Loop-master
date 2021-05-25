// ENEMY CONSTRUCTOR
const Enemy = function (coord) {
  this.y = coord.postY
  this.x = coord.postX
  this.name = 'Rattata'
  this.health = 12
  this.strength = 2
  this.drop = 1

  // ENEMY START POSITION
  this.startPosition = function () {
    map[this.y][this.x] = 3
  }
}

// ENEMIES SPAWN
const enemies = []
const path = []

// GENERATE ENEMIES RANDOM SPAWN POINTS
function generateSpawnPoint () {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) {
        path.push({ postY: i, postX: j })
      }
    }
  }
}

// RESPAWN ENEMIES IN FREE POSITIONS
function spawnEnemies () {
  for (let i = 0; i < char.loop; i++) {
    generateSpawnPoint()
    enemSpawn = Math.floor(Math.random() * path.length)
    enemies.push(new Enemy(path[enemSpawn]))
    enemies[i].startPosition()
  }
}
