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



/* GAME */
/* 1-ROCK  2-PAPER  3-SCISSORS */

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getPcChoice(){
    let choice=getRandomIntInclusive(1,3)
    return choice
}

function getPlayerChoice(choice){
    return choice
}





const rockBtn=document.getElementById("rockBtn")
const paperBtn=document.getElementById("paperBtn")
const scissBtn=document.getElementById("scissBtn")


rockBtn.addEventListener(click, function(){
    getPlayerChoice(1)


})

paperBtn.addEventListener(click, function(){
    getPlayerChoice(2)

    
})

scissBtn.addEventListener(click, function(){
    getPlayerChoice(3)

    
})

/* DISPLAYING EVERYTHING */
function displayPlayerPoints(points){

}

function displayPcPoints(points){

}





/* MAIN GAME FUNCTIONS */


function round(){

}

function game(){
    let pointsPc=0
    let pointsPlayer=0
    displayPcPoints(pointsPc)
    displayPlayerPoints(pointsPlayer)

}