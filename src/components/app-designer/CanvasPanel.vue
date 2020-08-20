<template>
    <div id="canvas-panel">
        
        
    </div>
</template>
<script>
import Vue from "vue"
import entitiesMixins from '../../mixins/entities.mixins'

export default Vue.extend ({
    mixins: [entitiesMixins],
    watch:{
        entities:function(values){
            const last =  values[values.length-1]
          
            last.shape.root.addTo(this.graph)
        }
    },
    data(){
        return {
            size: {width: 0, height: 0},
            graph: {},
            paper: {},
            color: "green"
        }
    },
    mounted(){
        // window.onresize = (e)=>{
            
        //     const  {width, height} = this.$el.getBoundingClientRect()
        //     console.log(width)
        //     this.size.width = width
        //     this.size.height = height
        //     this.paper.setDimensions(width, height)
        // }
       const  {width, height} = this.$el.getBoundingClientRect()
       this.size.width = width
       this.size.height = height
       this.graph = new this.$joint.dia.Graph;

        this.paper = new this.$joint.dia.Paper({
            el: document.getElementById('canvas-panel'),
            model: this.graph,
            width: this.size.width ,
            height: this.size.height,
            gridSize: 10,
            drawGrid: true,
            background:{
                color : '#fdfdfd'
            }
        });


        const rect = new this.$joint.shapes.standard.Rectangle();
        rect.position(100, 30);
        rect.resize(100, 40);
        rect.attr({
            body: {
                fill: this.color
            },
            label: {
                text: 'What',
                fill: 'white'
            }
        });
        rect.addTo(this.graph);

        const rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.addTo(this.graph);

        const link = new this.$joint.shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(this.graph);

        

   }
})
</script>
<style lang="scss" scoped>

</style>