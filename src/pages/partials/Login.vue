<template>
    <div id="login">
        <div v-height="75"></div>
        <div class="form-container">
            <form class="x-form" @submit.prevent>
                <div class="x-form-group">
                    <label for="email">Email</label>
                    <div class="x-input">
                        <input placeholder="Type your email" type="text" id="email" name="email">
                    </div>
                </div>
                <div class="x-form-group">
                    <label for="password">Password</label>
                    <div class="x-input">
                        <input placeholder="Type your password" type="password" id="password" name="password">
                    </div>
                </div>
                <div class="x-form-actions">
                    <button class="x-btn" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

</style>