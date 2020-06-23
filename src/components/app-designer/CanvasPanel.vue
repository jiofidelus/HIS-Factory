<template>
    <div id="canvas-panel">
        
    </div>
</template>
<script>

export default {
    data(){
        return {
            size: {width: 0, height: 0}
        }
    },
    mounted(){
    
       const  {width, height} = this.$el.getBoundingClientRect()
       this.size.width = width
       this.size.height = height
       const graph = new joint.dia.Graph;

        const paper = new joint.dia.Paper({
            el: document.getElementById('canvas-panel'),
            model: graph,
            width: this.size.width ,
            height: this.size.height,
            gridSize: 10,
            drawGrid: true,
            background:{
                color : '#fdfdfd'
            }
        });

        const rect = new joint.shapes.standard.Rectangle();
        rect.position(100, 30);
        rect.resize(100, 40);
        rect.attr({
            body: {
                fill: 'blue'
            },
            label: {
                text: 'Hello',
                fill: 'white'
            }
        });
        rect.addTo(graph);

        const rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.addTo(graph);

        const link = new joint.shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(graph);
   }
}
</script>
<style lang="scss" scoped>

</style>