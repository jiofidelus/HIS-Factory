<template>
    <div class="accordion-item" :class="className">
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
<style lang="scss" scoped>
.accordion-item{
    padding: 10px;
    font-size: 12px;
    border-bottom: 1px solid #1f2936;
}
</style>