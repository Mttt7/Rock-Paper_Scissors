/* HIDING  AND SHOWING MENU*/
const menu = document.getElementById("menu")
const fugures = document.getElementById("figures")
const gameSection = document.getElementById("game")
const startBtn = document.getElementById("start-button")
const exitBtn = document.getElementById("exit-button")
const resultBtn=document.getElementById("result")
exitBtn.style.display = 'none'
gameSection.style.display = 'none'
figures.style.display = 'none'
exitBtn.style.display = 'none'
resultBtn.style.display='none'



startBtn.addEventListener('click',function start(){
    pointsPc=0
    pointsPlayer=0
    displayPoints(-1)
    document.getElementById("img-pc-choice").src="images/PC.png"
    document.getElementById("img-player-choice").src="images/YOU.png"
    console.log("x")
    menu.style.display = 'none'
    exitBtn.style.display = 'block'
    gameSection.style.display = 'flex'
    figures.style.display = 'flex'
    resultBtn.style.display = 'flex'

    

})

exitBtn.addEventListener('click',function start(){
    console.log("x")
    menu.style.display = 'block'
    exitBtn.style.display = 'none'
    gameSection.style.display = 'none'
    figures.style.display = 'none'
    resultBtn.style.display='none'

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

function displayPoints(result){
    displayPcPoints()
    displayPlayerPoints()
    
    if(result==-1){
        resultBtn.innerHTML="???"
    }
    if(result==0){
        
        resultBtn.innerHTML="PC WON"
    } 
    if(result==1){
        
         resultBtn.innerHTML="PLAYER WON"
    }
    if(result==2){
        resultBtn.innerHTML="DRAW"
    }
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

    console.log("X")
    const timeoutFigure = setTimeout(displayPcFigure,500,pc_choice)
    console.log("Y")
    
    let winner = checkWinner(playerChoice,pc_choice)
    if(winner==2){
        console.log("DRAW")
        const timeoutPoints=setTimeout(displayPoints,500,2)
        
        
    }
    if(winner==0){
        pointsPc++
        console.log("PC WON")
        const timeoutPoints=setTimeout(displayPoints,500,0)
        

    }
    if(winner==1){
        pointsPlayer++
        console.log("PLAYER WON")
        
        const timeoutPoints=setTimeout(displayPoints,500,1)
        
    }
}


function game(){
    
   

}