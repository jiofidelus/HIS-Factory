<template>
    <div class="x-canvas-context-menu" :class="{'close': !isOpen}"  :style="style">
        <transition-group>
            <ElementContextMenu v-show="!isLinkContextMenu" key="element-context-menu"/>
            <LinkContextMenu v-show="isLinkContextMenu" key="link-context-menu"/>
        </transition-group>
    </div>
</template>
<script>
import ElementContextMenu from './context-menu/ElementContextMenu.vue'
import LinkContextMenu from './context-menu/LinkContextMenu.vue'
export default {
    props:{
        isLinkContextMenu:{
            type: Boolean,
            default: false
        },
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

    components:{
        ElementContextMenu,
        LinkContextMenu
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
    width: $context-menu-width;
    display: flex;
    box-shadow: 0px 2px 2px #aaa;

    &.close{
        display: none;
    }
}
</style>