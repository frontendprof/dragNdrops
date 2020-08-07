

// Defining global variables

const draggablElements=document.querySelectorAll(".draggable");
const droppablElements=document.querySelectorAll(".droppable");



draggablElements.forEach(e=>{
    e.addEventListener("dragstart",dragStart);
})




droppablElements.forEach(e=>{
    e.addEventListener("dragenter",dragEnter);
    e.addEventListener("dragover",dragOver);
    e.addEventListener("dragleave",dragLeave);
    e.addEventListener("drop",drop);
})



// Draggable events

function dragStart(e){
    console.log(e.dataTransfer.setData("text", e.target.id));
    e.dataTransfer.setData("text",e.target.id);
}



// Droppable events

function dragEnter(e){
    if(!e.target.classList.contains("dropped")){

        e.target.classList.add("droppable-hover");
    }
}

function dragOver(e){
    if(!e.target.classList.contains("dropped")){

        e.preventDefault();
    }
    
}


function dragLeave(e){
    e.target.classList.remove("droppable-hover");
}

function drop(e){
    e.preventDefault();
    e.target.classList.remove("droppable-hover")
    const draggablElementData=e.dataTransfer.getData("text");
    const droppablElementData=e.target.getAttribute("data-draggable-id");

    if(draggablElementData===droppablElementData){
        e.target.classList.add("dropped");
        const draggablElement=document.getElementById(draggablElementData);
        e.target.style.backgroundColor = draggablElement.style.color;
        console.log(draggablElement.style.color)
        draggablElement.classList.add("dragged");
        draggablElement.setAttribute("draggable","false");
        e.target.insertAdjacentHTML("afterbegin",`<i class="fas fa-${draggablElementData}"></i>`);        

    }

}