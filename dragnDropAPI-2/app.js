

// Defining global variables

const draggablElements=document.querySelectorAll(".draggable");
const droppablElements=document.querySelectorAll(".droppable");



draggablElements.forEach(e=>{
    e.addEventListener("dragstart",dragStart);
})




droppablElements.forEach(e=>{
    e.addEventListener("dragover",dragOver);
    // e.addEventListener("drop",drop);
})


function dragStart(e){
    console.log(e.dataTransfer.setData("text", e.target.color));
    e.dataTransfer.setData("text",e.target.color);
}

function dragOver(e){
    e.preventDefault();
}