let sword = document.getElementById('sword')
sword.addEventListener('click', function () {
  if (char.gold >= 1) {
    char.strength++
    char.gold -= 1
    console.log(char.strength)
  } else {
    console.log('Not today')
  }

})

// let  = document.getElementById('sword')
// console.log(sword)
// sword.addEventListener('click', function () {
//   char.strength++
//   char.gold -= 1
//   console.log(char.strength)
// })
// let sword = document.getElementById('sword')
// console.log(sword)
// sword.addEventListener('click', function () {
//   char.strength++
//   char.gold -= 1
//   console.log(char.strength)
// })
// let sword = document.getElementById('sword')
// console.log(sword)
// sword.addEventListener('click', function () {
//   char.strength++
//   char.gold -= 1
//   console.log(char.strength)
// })
// let sword = document.getElementById('sword')
// console.log(sword)
// sword.addEventListener('click', function () {
//   char.strength++
//   char.gold -= 1
//   console.log(char.strength)
// })