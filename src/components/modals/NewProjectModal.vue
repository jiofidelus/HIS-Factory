<template>
    <modal title="New project" :isVisible="isVisible" @close="close">
        <form @submit.prevent class="x-form">
            <div class="x-form-group">
                <label for="projectName">Name</label>
                <div class="x-input">
                    <input required placeholder="Type the project name" type="text" for="projectName" name="projectName">
                </div>
            </div>
            <div class="x-form-group">
                <label for="projectName">Short name</label>
                <div class="x-input">
                    <input required placeholder="Type the project short name" type="text" for="projectName" name="projectName">
                </div>
            </div>
            <div class="modal-actions">
                <button type="submit" class="x-btn blue-highlight-theme">CREATE</button>
                <button type="button" @click="close" class="x-btn highlight-theme">CANCEL</button>
            </div>
        </form>
    </modal>
</template>
<script>
import Modal from '../generics/Modal'
export default {
    props:{
        isVisible:{type: Boolean, default: true},
    },
    components:{
        Modal
    },
    methods:{
        close(){
            this.$emit('close')
        }
    }
}
</script>
<style lang="scss" scoped>
.modal-actions{
    margin-top: 15px;
    display: flex;
    flex-direction: row-reverse;
    &>.x-btn:nth-child(2){
        margin-right: 10px;
    }
}
</style>