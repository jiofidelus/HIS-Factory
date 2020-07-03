<template>
    <div id="app-designer">
        <controls-panel/>
        <canvas-panel/>
        <properties-panel/>
    </div>
</template>
<script>
import CanvasPanel from './CanvasPanel.vue'
import ControlsPanel from './ControlsPanel.vue'
import PropertiesPanel from './PropertiesPanel.vue'
export default {
    components:{
        CanvasPanel, ControlsPanel, PropertiesPanel
    },
    
}
</script>
<style lang="scss" scoped>
#app-designer{
    display: grid;
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    grid-template-columns: 250px 1fr 300px;

}
</style>