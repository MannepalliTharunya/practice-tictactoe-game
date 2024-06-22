let boxes =document.querySelectorAll(".box");
let resetGme=document.querySelector("#reset");
let newGame=document.querySelector("#new");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

let turno=true;

 const winpatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
const resetGame=()=>{
  turno=true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) =>{
  box.addEventListener("click",()=>{
    console.log("box is clicked");
    if(turno){
      box.innerText="o";
      turno=false;
    } else{
        box.innerText="x";
        turno=true;
        
      }
    box.disabled=true;
    checkWinner();
  });
});
const disableboxes=()=>{
  for(let box of boxes){
    box.disabled=true;

  }
};
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showwinner= (winner)=>{
  msg.innerText=`congratulations,winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
};
const checkWinner=()=>{
  for( let pattern of winpatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
       if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
          console.log("winner");
          
          showwinner(pos1val);


        }
       }
    
  }
}
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);