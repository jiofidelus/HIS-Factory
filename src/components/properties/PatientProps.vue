<template>
    <div id="patient-props">
        <h4>Patient props</h4>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {PatientEntity} from '../../models/shapes/concretes/PatientEntity'
@Component({name: PatientEntity.name})
export default class PatientProps extends Vue{
    patientEntity!: PatientEntity
}
</script>