<template>
    <div class="x-canvas-context-menu" :class="{'close': !isOpen}"  :style="style">

    </div>
</template>
<script>
export default {
    props:{
        isOpen: {
            type: Boolean,
            default: false
        },
        top:{
            type: Number,
            default : 0
        },
        left:{
            type: Number,
            default : 0
        }
    },

    computed: {
        style(){
            return `left: ${this.left}px; top: ${this.top}px`
        }
    }
}
</script>
<style lang="scss" scoped>
.x-canvas-context-menu{
    background-color: #fff;
    position: absolute;
    z-index: 100;
    width: 200px;
    min-height: 50px;
    display: flex;
    box-shadow: 0px 2px 2px #aaa;

    &.close{
        display: none;
    }
}
</style>