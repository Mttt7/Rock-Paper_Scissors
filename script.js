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


let pointsPc=0
let pointsPlayer=0

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getPcChoice(){
    let choice=getRandomIntInclusive(1,3)
    return choice
}






const rockBtn=document.getElementById("rockBtn")
const paperBtn=document.getElementById("paperBtn")
const scissBtn=document.getElementById("scissBtn")


rockBtn.addEventListener("click", function(){
    round(1)
    


})

paperBtn.addEventListener("click", function(){
    round(2)

    
})

scissBtn.addEventListener("click", function(){
    round(3)

    
})

/* DISPLAYING EVERYTHING */

function displayPoints(){
    displayPcPoints()
    displayPlayerPoints()
}

function displayPlayerPoints(){
    document.getElementById("player-points").innerHTML=pointsPlayer
}

function displayPcPoints(){
    document.getElementById("pc-points").innerHTML=pointsPc
}



function displayPlayerFigure(fig){
    if(fig==1){
        document.getElementById("img-player-choice").src="images/rock.png"
    }

    if(fig==2){
        document.getElementById("img-player-choice").src="images/paper.png"
    }

    if(fig==3){
        document.getElementById("img-player-choice").src="images/scissors.png"
    }
}

function displayPcFigure(fig){
    if(fig==1){
        document.getElementById("img-pc-choice").src="images/rock.png"
    }

    if(fig==2){
        document.getElementById("img-pc-choice").src="images/paper.png"
    }

    if(fig==3){
        document.getElementById("img-pc-choice").src="images/scissors.png"
    }
}

/* CHECKING */
function checkWinner(playchoice,pcchoice){
if(playchoice==1 && pcchoice==1) return 2
    if(playchoice==1 && pcchoice==2) return 0
    if(playchoice==1 && pcchoice==3) return 1

    if(playchoice==2 && pcchoice==2) return 2
    if(playchoice==2 && pcchoice==3) return 0
    if(playchoice==2 && pcchoice==1) return 1

    if(playchoice==3 && pcchoice==3) return 2
    if(playchoice==3 && pcchoice==1) return 0
    if(playchoice==3 && pcchoice==2) return 1
}

/* MAIN GAME FUNCTIONS */


function round(playerChoice){
    
   
    



    displayPlayerFigure(playerChoice)
    pc_choice=getPcChoice()
    displayPcFigure(pc_choice)

    let winner = checkWinner(playerChoice,pc_choice)
    if(winner==2){
        console.log("DRAW")
        displayPoints()
    }
    if(winner==0){
        pointsPc++
        console.log("PC WON")
        displayPoints()

    }
    if(winner==1){
        pointsPlayer++
        console.log("PLAYER WON")
        displayPoints()
    }
}


function game(){
    
   

}