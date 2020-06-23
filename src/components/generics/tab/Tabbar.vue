<template>
    <div class="tabbar" @resize="onResize">
        <slot/>
        <div class="tabbar__indicator" :style="indicatorStyle"></div>
    </div>
</template>
<script>
export default {
    props: ['indicatorColor'],
    data(){
        return {
            index : 0,
            tabs: [],
            indicatorWidth: 0,
            
        }
    },
    computed:{
        indicatorStyle(){
            
            const left = this.index * this.indicatorWidth
            if(this.indicatorColor){
                return `width: ${this.indicatorWidth}px; left: ${left}px; background-color: ${this.indicatorColor} !important`
            }
            return `width: ${this.indicatorWidth}px; left: ${left}px !important`
        },
        indicatorLeft(){
            return this.index * this.indicatorWidth
        }
    },
    
    methods:{
        async setIndicatorWidth(el){
            //const el = window.document.querySelector(selector)
            const rect = el.getBoundingClientRect()
            this.indicatorWidth = rect.width / this.tabs.length
            
        },
        onResize(){
            this.setIndicatorWidth(this.$el)
        }
    },
    mounted(){
        this.tabs = this.$children
        this.tabs.forEach((t, i) => {
            t.index = i
        })

        this.setIndicatorWidth(this.$el)
        window.addEventListener("resize", this.onResize);
    }
}
</script>
<style lang="scss" scoped>
.tabbar{
    height: 50px;
    display: flex;
    position: relative;
    
    &>.tabbar__indicator{
        position: absolute;
        
        bottom: 0;
        height: 2px;
        background-color: white;
        transition: all 0.3s linear;
    }
    
}
</style>