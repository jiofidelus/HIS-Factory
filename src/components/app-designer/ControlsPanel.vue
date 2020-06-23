<template>
    <div id="controls-panel">
        <header>
            <p class="text-center font-600">
                Controls
            </p>
        </header>
        <div v-height="20"></div>
        <main>
            <accordion title="ENTITIES" headerClass="font-600">
                <accordion-item>
                   <entity-shapes/>
                </accordion-item>
            </accordion>
            <accordion title="ELEMENTS" headerClass="font-600">
            </accordion>
            <accordion title="LINKS" headerClass="font-600">
            </accordion>
            <accordion title="ABSTRACT SHAPES" headerClass="font-600">
            </accordion>
        </main>
    </div>
</template>
<script>
import Accordion from '../generics/accordion/Accordion.vue'
import AccordionItem from '../generics/accordion/AccordionItem.vue'
import EntityShapes from './EntityShapes.vue'
export default {
   components:{Accordion, AccordionItem, EntityShapes}
}
</script>
<style lang="scss" scoped>
#controls-panel{
    height: 100%;
    background-color: #2e3c50;
    color: #fafafa;
    overflow: hidden;
    overflow-y: auto;
    &>header{
        &>p{
            text-transform: uppercase;
            letter-spacing: 2.5px;
            color: rgba(255, 255, 255, 0.8);
        }
    }
}
</style>