const cellsElements = document.querySelectorAll("[data-cell]")
const winnerView=document.querySelector('.message-view')
const textWinner=document.querySelector('.text-winner')
const COMPITITIONS=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]


const X_CLASS='x';
const CIRCLE_CLASS='circle';
let circle_turn=false

cellsElements.forEach((cell)=>{
cell.addEventListener('click',handlEvenet,{once:true})
})


function handlEvenet(ev){
let mark=circle_turn?CIRCLE_CLASS:X_CLASS
placeMark(ev.target,mark)
if(checkForWinner(mark)){    
winnerView.classList.add('show')
textWinner.textContent='the winner is '+ mark
}else{
turnMark()    
}
}



function removeMarks(){
cellsElements.forEach((cell)=>{
cell.classList.remove(X_CLASS);
cell.classList.remove(CIRCLE_CLASS);
cell.removeEventListener('click',handlEvenet)
cell.addEventListener('click',handlEvenet,{once:true})
})
}


function checkForWinner(mark){
return COMPITITIONS.some((compition)=>{
return compition.every((index)=>{
return cellsElements[index].classList.contains(mark)
})
})

}


function restartGame(){


removeMarks();
winnerView.classList.remove('show')

}


function placeMark(cell , mark){
cell.classList.add(mark)
}



function turnMark(){
circle_turn=!circle_turn
}

