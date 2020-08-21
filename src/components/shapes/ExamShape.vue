<template>
    <div v-on="$listeners" class="exam-shape">
        <div class="exam-shape__inner">
            <span><strong>Exam</strong></span>
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
.exam-shape{
    cursor: pointer;
    min-width: 70px;
    min-height: 70px;
    padding: 8px;
    transition: all 0.4s ;
    
    &>.exam-shape__inner{
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