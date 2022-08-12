/* HIDING  AND SHOWING MENU*/
const menu = document.getElementById("menu")
const startBtn = document.getElementById("start-button")
const exitBtn = document.getElementById("exit-button")
exitBtn.style.display = 'none'

startBtn.addEventListener('click',function start(){
    console.log("x")
    menu.style.display = 'none'
    exitBtn.style.display = 'block'


})

exitBtn.addEventListener('click',function start(){
    console.log("x")
    menu.style.display = 'block'
    exitBtn.style.display = 'none'


})