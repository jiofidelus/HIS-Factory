<template>
    <div class="x-accordion-item" :class="className">
        <slot/>
    </div>
</template>
<script>
export default {
    props: ["className"],
    data(){
        return{
            index : 0
        }
    },

}
</script>
<style lang="scss">
.x-accordion-item{
    padding: 10px;
    font-size: 12px;
    border-bottom: 1px solid #00000028;
}
</style>