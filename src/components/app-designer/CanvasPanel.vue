<template>
    <div id="canvas-panel">
        
    </div>
</template>
<script>

export default {
    data(){
        return {
            size: {width: 0, height: 0},
            graph: {},
            paper: {}
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
                fill: 'blue'
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
}
</script>
<style lang="scss" scoped>

</style>