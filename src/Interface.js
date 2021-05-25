// CHAR-INFO
let charName = document.getElementById('char-name')


let charHealth = document.getElementById('char-health')
let charGold = document.getElementById('char-gold')
let charStrength = document.getElementById('char-strength')

function loadInterface () {
  charName.innerText = char.name
  charHealth.innerText = char.health
  charStrength.innerText = char.strength
  charGold.innerText = char.gold
}

// DRAWBOARD FUNCTION
function drawBoard () {
  // BOARD ACT
  map.forEach((row, r) => {
    row.forEach((col, c) => {
      const rowHTML = document.querySelector(`.row${r + 1}`)
      const cellHTML = rowHTML.querySelector(`.col${c + 1}`)

      if (map[r][c] === 1) {
        cellHTML.classList.remove('character')
        cellHTML.classList.remove('enemy')
        cellHTML.classList.add('road')
      }

      if (map[r][c] === 2) {
        cellHTML.classList.remove('road')
        cellHTML.classList.remove('enemy')
        cellHTML.classList.add('character')
      }

      if (map[r][c] === 3) {
        cellHTML.classList.remove('character')
        cellHTML.classList.remove('road')
        cellHTML.classList.add('enemy')
      }
    })
  })
}

// SHOP Interface
let sword = document.getElementById('sword')
sword.addEventListener('click', buySword)
