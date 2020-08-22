

const list_items=document.querySelectorAll(".list-item");
const lists=document.querySelectorAll(".list");


let draggedItem=null;

for(let i=0;i<list_items.length;i++){
    const item = list_items[i];

    item.addEventListener("dragstart",function(){
        console.log("dragstart");
        draggedItem=item;
        setTimeout(function(){
            item.style.display="none";

        },0)
    });

    item.addEventListener("dragend",function(){
        console.log("dragnet");
        setTimeout(function(){
            draggedItem.style.display="block";
            draggedItem=null;
        },0)
    })



}