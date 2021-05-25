// CHAR-INFO
let charName = document.getElementById('char-name')
let charHealth = document.getElementById('char-health')
let charStrength = document.getElementById('char-strength')
let charGold = document.getElementById('char-gold')

let boxDiag = document.getElementById('dialogs')
boxDiag.innerText = ''

function loadInterface () {
  charName.innerText = char.name
  charHealth.innerText = char.health
  charStrength.innerText = char.strength
  charGold.innerText = char.gold
}

// DRAWBOARD FUNCTION
function drawBoard () {
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

function showText (text) {
  if (boxDiag.length === 0) {
    boxDiag.innerText = text
  } else {
    boxDiag.innerText += text
  }
  boxDiag.scrollTop = boxDiag.scrollHeight
}

// SHOP Interface
let sword = document.getElementById('sword')
sword.addEventListener('click', buySword)
