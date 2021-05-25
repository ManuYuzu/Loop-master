let sword = document.getElementById('sword')
sword.addEventListener('click', function () {
  if (char.gold >= 1) {
    char.strength++
    char.gold -= 1
  } else {
    console.log('Not today')
  }
})
