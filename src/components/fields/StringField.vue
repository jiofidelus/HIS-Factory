<template>
    <Accordion :title="fieldEntity.name" headerClass="field-header">
        <AccordionItem>
            <div class="d-flex flex-column">
                <div class="x-field-entry d-flex flex-column">
                    <label>Name</label>
                    <input type="text" v-model="fieldEntity.name">
                </div>
                <div class="x-field-prop d-flex flex-column">
                    <label>Short name</label>
                    <input type="text" v-model="fieldEntity.shortName">
                </div>
                <div class="x-field-prop">
                    <input type="checkbox" v-model="fieldEntity.required"> <span>Required</span>
                </div>
                 <div class="x-field-prop">
                    <input type="checkbox" v-model="fieldEntity.readonly"> <span>Readonly</span>
                </div>
            </div>
        </AccordionItem>
    </Accordion>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {FieldEntity} from '../../models/database/fields/FieldEntity'
import Accordion from '../generics/accordion/Accordion.vue';
import AccordionItem from '../generics/accordion/AccordionItem.vue'

@Component({name: 'StringField',
    components: {Accordion, AccordionItem}
})
export default class StringField extends Vue{
    
    @Prop() readonly fieldEntity!: FieldEntity

    index = 0
    showBody  = true
    
    toggleBody(){
        this.showBody = !this.showBody
    }
}
</script>
<style lang="scss">
.field-header{
    background-color: rgba(255, 255, 255, 0.486) !important;
    color: #000 !important;
    box-shadow: none !important;
    font-size: 12px !important;
    font-weight: 600;
    border-bottom: 1px solid #00000028;
}
</style>
