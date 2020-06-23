<template>
    <div class="field-accordion">
        <header>
            <span>Prop name</span>
        </header>
        <div class="field-accordion__body">

        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {FieldEntity} from '../../models/database/fields/FieldEntity'
@Component({name: 'StringField'})
export default class StringField extends Vue{
    
    @Prop() readonly fieldEntity!: FieldEntity

    index = 0
    showBody  = true
    
    toggleBody(){
        this.showBody = !this.showBody
    }
}
</script>
