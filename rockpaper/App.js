let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");
const body=document.body;
const genComp=()=>{
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("Draw")
    msg.innerText="Game Drawn";
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("You Win");
        msg.innerText="You Win!!"
        msg.style.backgroundColor="green";
        
        userScore++;
        uScore.innerHTML=`${userScore}`

    }else{

        console.log("Computer Wins");
        msg.innerText="You Lose  Try Again!!";
        msg.style.backgroundColor="red";
        
        compScore++;
        cScore.innerHTML=`${compScore}`
    }
}
const playGame = (userChoice) => {
  console.log("user choice=", userChoice);
  const  computerChoice = genComp();
  //display the result on screen    
  console.log("Computer Choice=",computerChoice);
  if(userChoice=== computerChoice){
        drawGame();
  }else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=computerChoice==="paper"? false:true;
    } else if(userChoice==="paper"){
       userChoice= computerChoice==="scissor"?false:true;
    }else{
        userWin= computerChoice==="rock"? false : true ;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
