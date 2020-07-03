<template>
    <div id="properties-panel">
        <header>
            <p class="text-center font-600">
                Properties
            </p>
        </header>
        <div class="match-height" bg="orange">
            <div v-if="currentEntity == undefined">
               <p class="text-center">
                    <i>No component selected</i>
               </p>
            </div>
            <div v-else>
                <component :fieldEntity="f" v-for="(f, index) in currentEntity.fields" :key='index' :is="f.type" />
            </div>
        </div>
    </div>
</template>
<script>
import fields from '../fields'
import {createNamespacedHelpers} from 'vuex'
const {mapActions, mapState} = createNamespacedHelpers('project/entities')
export default {
    components: fields,
    computed:{
        ...mapState(["currentEntity"])
    }
}
</script>
<style lang="scss" scoped>
#properties-panel{
    background-color: rgb(242, 250, 255);
    height: 100%;
    border-left: 2px solid rgb(224, 231, 235);;
    color: $color-primary;
    overflow: hidden;
    overflow-y: auto;
    &>header{
        &>p{
            text-transform: uppercase;
            letter-spacing: 2.5px;
            color: rgba($color: $color-primary, $alpha: 0.8);
        }
    }
}
</style>