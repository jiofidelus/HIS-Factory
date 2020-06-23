<template>
    <div v-on="$listeners" class="patient-shape">
        <div class="patient-shape__inner">
            <span><strong>Patient</strong></span>
        </div>
    </div>
</template>
<script>
export default {
    inheritAttrs: false
}
</script>
<style lang="scss" scoped>

$color: lighten($color-primary, 40);
.patient-shape{
    cursor: pointer;
    min-width: 70px;
    min-height: 70px;
    padding: 8px;
    transition: all 0.4s ;
    
    &>.patient-shape__inner{
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        font-size: 0.9em;
        color: $color;
        border: 2px solid $color;
    }
    &:hover{
        background-color: darken($color: $color-primary, $amount: 5);
    }
}
</style>