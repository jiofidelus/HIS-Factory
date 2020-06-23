<template>
     <div class="d-flex jtf-space-around flex-wrap">
        <patient-shape @click="createEntity('PatientEntity')"/>
    </div>
</template>
<script>
import PatientShape from '../shapes/PatientShape.vue'
//import { mixins } from 'vue-class-component'
import EntitiesMixin from '../../mixins/entities.mixins'
export default {
    mixins: [EntitiesMixin],
    components: {PatientShape}
}
</script>
