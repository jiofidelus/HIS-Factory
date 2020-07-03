<template>
    <div class="workspace match-parent">
        <nav>
            <h4>Workspace</h4>
        </nav>
        <app-designer class="designer"/>
    </div>
</template>
<script>
import AppDesigner from '../components/app-designer/AppDesigner.vue'
export default {
    components:{
        AppDesigner
    }
}
</script>
<style lang="scss" scoped>
.workspace{
    display: flex;
    flex-direction: column;
    &>nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        height: 55px;
        background-color: #fdfdfd;
    }
    &>.designer{
        height: 100%;
        box-shadow: 0 1px 2px rgba($color: #000000, $alpha: 0.1),
                     0 2px 4px rgba($color: #000000, $alpha: 0.12),
                     0 4px 6px rgba($color: #000000, $alpha: 0.14)
    }
}
</style>