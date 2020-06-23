<template>
    <div @click="onClick" class="tabbar-item" :class="{'active': active}">
        <slot/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            index : 1,

        }
    },
    computed:{
        active(){
            return this.$parent.index == this.index
        }
    },
   
    methods:{
        async onClick(){
            this.$parent.index = this.index
            this.$emit('active')
            this.$emit('click')
        }
    }
}
</script>
<style lang="scss" scoped>
.tabbar-item{
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #888;
    transition: all 0.3s linear;
    font-size: 13px;
    letter-spacing: 1.5px;
    &:hover{
        color: #000;
    }
    &>.x-badge{
        background-color: #888 !important;
        color: white
    }
    &.active{
        
        color: #000;

        &>.x-badge{
        background-color: black !important;
        color: white
    }
    }
}
</style>