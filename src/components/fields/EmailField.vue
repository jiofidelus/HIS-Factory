<template>
    <string-field :fieldEntity="fieldEntity">
    </string-field>
</template>
<script lang="ts">
import StringField from './StringField.vue'
import {FieldEntity} from '../../models/database/fields/FieldEntity'
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component({name: 'TextField', components:{
    StringField
}})
export default class TextField extends Vue{
    @Prop() readonly fieldEntity!: FieldEntity
}
</script>
