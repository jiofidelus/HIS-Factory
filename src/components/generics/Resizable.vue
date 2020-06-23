<template>
    <div class="resizer " :class="resizableClass" ref="resizer" @click="init($event)">
        <div class="resizer__content">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis unde, pariatur corrupti temporibus voluptatibus, aliquam libero placeat expedita recusandae, assumenda architecto dolorum ducimus doloribus fugiat at magnam vel perspiciatis deleniti est quis nulla nobis soluta iure! Ipsum, ea, dolor dicta quo sunt cumque aperiam tempore temporibus tempora quibusdam maxime laudantium sint enim omnis voluptas nesciunt in itaque deserunt fugiat quaerat doloribus at tenetur nobis voluptate? Harum necessitatibus temporibus dicta odit iure rem consequuntur nobis veritatis at explicabo sunt, sequi atque veniam! Neque facere, explicabo laborum odit repellendus ea laboriosam dignissimos excepturi aut! Commodi earum quam officia iure deserunt asperiores?
        </div>
        <div :class='resizerBarClass' v-if="showResizer" class="resizer__bar "
            ref="resizerRight"
         ></div>
    </div>
</template>
<script>
export default {
    props:{
        showResizer:{type: Boolean, default: true},
        resizerBarClass: {type: String, default: ''},
        resizableClass: {type: String, default: ''},
    },
    data(){
        return{
            width: 0,
            mounted : false,
            mouseIsDown: false,
            startX: 0,
            initialWidth: 0
        }
    },
    
    methods:{
       
        initDrag(e){
            //console.log(e.target)
            this.startX = e.clientX
            this.initialWidth = this.getWidth()

            console.log(this.initialWidth, e.clientX, e.offsetX)
            
            document.documentElement.addEventListener('mousemove', this.doDrag, false)
            document.documentElement.addEventListener('mouseup', this.stopDrag, false)
        },
        doDrag(e){
            const offset = this.initialWidth + e.clientX - this.startX
            console.log(offset)
            this.$el.style.width = (offset) + 'px'
        },
        getWidth(){
            return parseInt(document.defaultView.getComputedStyle(this.$el).width, 10)
        },
        
        stopDrag(){
            //console.log('Stop Drag', e.target)
            document.documentElement.removeEventListener('mousemove', this.doDrag, false);
            document.documentElement.removeEventListener('mouseup', this.stopDrag, false);
        },
        init(evt){
           
            evt.target.removeEventListener('click', this.init, false)
            this.$refs.resizerRight.addEventListener('mousedown', this.initDrag, false)
        }

    },
    mounted(){
        this.width = this.getWidth()
        //this.width = 300
        //this.mounted = true
        
    }
}
</script>
<style scoped>
.resizer{
    position: relative;
   
    width: 100%;
    background-color: whitesmoke;
    overflow: auto;
    
}
.resizer > .resizer__content{
    
    overflow: auto;
    z-index: 1;
}
.resizer > .resizer__bar{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1px;
    top: 0;
    background-color: #aaa;
    cursor: col-resize;
    z-index: 2;
}
</style>