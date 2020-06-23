<template>
    <div id="register">
        <div v-height="75"></div>
        <div class="form-container">
            <form class="x-form" @submit.prevent>
                <div class="x-form-group">
                    <label for="username">Username</label>
                    <div class="x-input">
                        <input placeholder="Type your username" type="text" name="username" id="username" required>
                    </div>
                </div>
                <div class="x-form-group">
                    <label for="email">Email</label>
                    <div class="x-input">
                        <input placeholder="Type your email"  required type="email" id="email" name="email">
                    </div>
                </div>
                <div class="x-form-group">
                    <label for="password">Password</label>
                    <div class="x-input">
                        <input  placeholder="Type your password"  required type="password" id="password" name="password">
                    </div>
                </div>
                <div class="x-form-group">
                    <label for="cpassword">Confirm password</label>
                    <div class="x-input">
                        <input  placeholder="Re-type your password"  required type="password" id="cpassword" name="cpassword">
                    </div>
                    <!-- <span class="text-helper">Enter the same password like above</span> -->
                </div>
                <div class="x-form-actions">
                    <button type="submit" class="x-btn">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>