<template>
    <div
        :id="id"
        class="card"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop
        @drop.prevent='drop'
    >
        <slot/>
    </div>
</template>


<script>
export default {
    props:["id","draggable"],
    methods:{
        drop:e=>{
            const card_id=e.dataTransfer.getData("card_id");

            const card=document.getElementById(card_id);

            card.style.display="block";
            e.target.appendChild(card);
        }
    }
}
</script>