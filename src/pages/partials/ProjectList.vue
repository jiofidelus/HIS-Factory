<template>
    <div id="project-list" class="match-parent">
        
        <div class="back-level">
            <div v-height="40"></div>
            <p class="text-center">
                <span style="color: rgba(255,255,255,0.7); font-weight: bold; font-size: 1em; text-transform: uppercase">Manage your projects</span>
            </p>
        </div>
        <div class="top-level">
            <div v-height="100"></div>
            <div class="list">
                <project-card @click="toWorkspace">O4TBSS</project-card>
                <project-card @click="toWorkspace">Patient Tracer</project-card>
                <project-card isAdd @click="showProductModal = true">
                    <i style="font-size: 32px" class="material-icons">add</i>
                </project-card>
            </div>
        </div>
        <new-project-modal :isVisible="showProductModal" @close="showProductModal = false"/>
    </div>
</template>
<script>
import ProjectCard from '../../components/ProjectCard'
import NewProjectModal from '../../components/modals/NewProjectModal'
export default {
    data(){
        return {
            showProductModal : false
        }
    },
    methods:{
        toWorkspace(){
            this.$router.push({name: "Workspace"})
        }
    },
    components:{ProjectCard, NewProjectModal}
}
</script>
<style lang="scss" scoped>
#project-list{
    position: relative;
    &>.back-level{
        position: absolute;
        width: 100%;
        height: 200px;
        background-color: #3b516e;
        z-index: 1;
    }
    &>.top-level{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow: auto;
        background-color: transparent;
        z-index: 2;

        &>.list{
            display: flex;
            justify-content: center;
            flex-flow: wrap;
        }
    }
}
</style>