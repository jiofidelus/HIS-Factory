<template>
    <div v-on="$listeners" v-bind="$attrs" @mouseover="isMouseOver= true" @mouseout="isMouseOver=false" class="project-card" :class='{"is-add": isAdd}'>
        <div class="actions" v-if="!isAdd">
            <transition name='scale-in'>
                <button class="icon-action" v-show="isMouseOver">
                    <i class="material-icons">delete</i>
                </button>
            </transition>
            <transition name = "scale-in" mode="out-in">
                <button class="icon-action" v-show="isMouseOver">
                    <i class="material-icons">edit</i>
                </button>
            </transition>
        </div>
        <slot/>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    props: {
        isAdd: {type: Boolean, default: false}
    },
    data(){
        return{
            isMouseOver : false
        }
    }
}
</script>
<style lang="scss">
.project-card{
    position: relative;
    width: 200px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 1em;
    box-shadow: 0px 1px 2px #666;
    transition: all 0.3s;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 0.8em;
    margin: 10px;
    cursor: pointer;
    text-transform: uppercase;
    &:hover{
        background-color: $color-primary;
        color: whitesmoke
    }

    &.is-add{
        background-color:lighten($color: $color-secondary-alt, $amount: 20);
        color: #000;
        &:hover{
            background-color: lighten($color: $color-secondary-alt, $amount: 10);
        }
    }
    &>.actions{
        display: flex;
        flex-direction: row-reverse;
        position: absolute;
        top: 0;
        right: 0;
        &>.icon-action{
            border: none;
            outline: none;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            margin-top: 10px;
            columns: #2e2e2e;
            cursor: pointer;
            background-color: #eee;
            height: 25px;
            width: 25px;
            border-radius: 50%;
            &>i{
                font-size: 14px;
                
            }
        }
    }
}
.scale-in-enter-active{
    animation: scaleAnim 1s cubic-bezier(0.23, 1, 0.320, 1);
}

</style>