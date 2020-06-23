<template>
    <div id="properties-panel">
        <header>
            <p class="text-center font-600">
                Properties
            </p>
        </header>
        <div v-height="20"></div>
    </div>
</template>
<script>

export default {
   
}
</script>
<style lang="scss" scoped>
#properties-panel{
    background-color: rgb(242, 250, 255);
    height: 100%;
    border-left: 2px solid rgb(224, 231, 235);;
    color: $color-primary;
    &>header{
        &>p{
            text-transform: uppercase;
            letter-spacing: 2.5px;
            color: rgba($color: $color-primary, $alpha: 0.8);
        }
    }
}
</style>