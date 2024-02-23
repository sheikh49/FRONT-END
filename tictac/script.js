let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-bn");
let newGameBtn=document.querySelector("#newgame");
let msg=document.querySelector("#message");
let msgcon=document.querySelector(".message");
let turn0 = true; //PlayerX,Player0
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
let count =0;
const resetGame=()=>{
    turn0=true;
    enablebox();
    msgcon.classList.add("hide");
    count=0;
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
   
    console.log("Box was clicked");
    if (turn0) {
      box.innerText = "O";
      box.style.color = "#0000FF";
      
      turn0 = false;
    } else {
      box.innerText = "X";
      
      box.style.color = "#0000FF";
      turn0 = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
    
  });
  
  
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner} `;
    
    msgcon.classList.remove("hide");
    disablebox();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    //     console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!==""){
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            console.log("Winner",pos1Val);
            console.log(count);
            
            showWinner(pos1Val);
        }
    }
   
        
    }
    if(count>=9){
        console.log("Its a Draw");
        msg.innerText="Its a Draw";
        msgcon.classList.remove("hide");
    }
    
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

