<template>
    <div class="x-accordion">
        <header :class="headerClass" @click.stop="toggleAccordion">
            <span>{{title}}</span>
            <button class="caret" :class="{'is-open': hideAccordionBody}">
                <span>&#9660;</span>
            </button>
        </header>
        <div class="x-accordion-body " :class="{'is-closed': hideAccordionBody}">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
    name: "Accordion",
    props: {
        title:{type: String, default: "Accordion", required: true},
        headerClass:{type: String, default: ""}
    },
    data(){
        return {
            index: 0,
            hideAccordionBody: true
        }
    },
    methods:{
        toggleAccordion(){
            this.hideAccordionBody = ! this.hideAccordionBody
        }
    },
    mounted(){
        this.$parent.$children.forEach((item, i) => {
            item.index = i
        })
    }
}
</script>
<style lang="scss">
.x-accordion{
    &>header{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        font-size: 10px;
        letter-spacing: 2px;
        cursor: pointer;
        height: 40px;
        background-color: #42536d;
        color: rgba(255,255,255, 0.5);
        transition: color 0.3s linear;
        box-shadow: 0 1px 2px #222;
        z-index: 2;
        &:hover{
            color: #fff
        }
        &>.caret{
            transition: all 0.4s linear;
            transform-origin: 50% 50%;
            display: flex;
            background-color:inherit;
            align-items: center;
            color: inherit;
            justify-content: center;
            border: none;
            font-size: 8px;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            padding: 0;
            cursor: pointer;

            &.is-open{
                transform: rotate(-180deg);
            }
        }
    }
    .x-accordion-body{
        position: relative;
        transition: all 0.5s linear;
        max-height: 300px;
        overflow: hidden;
        
        z-index: 0;
        transition: all 0.4s linear;
        &.is-closed{
            max-height: 0;
            overflow: hidden;
        }
    }
}

</style>