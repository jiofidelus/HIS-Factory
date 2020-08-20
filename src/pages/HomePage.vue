<template>
    <div id="home-page" class="match-parent">
        <section id="site-presentation"></section>
        <section id="auth">
            <nav>
                <div class="app-brand">
                    <span class='font-600'>HISQuery</span>
                </div>
                <div id="auth-actions">
                    <router-link class="x-btn-link" :to = '{name: "Login"}' >Login</router-link>
                    <router-link class="x-btn-link" :to = '{name: "Register"}'>Register</router-link>
                </div>
            </nav>
            <main>
                <transition name="scale" mode="out-in">
                    <router-view/>
                </transition>
            </main>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
#home-page{
    color: black;;
    display: grid;
    grid-template-columns: 300px 1fr;

    &>#site-presentation{
        background-color: #000;
    }
    &>#auth{
        display: flex;
        flex-direction: column;
        background-color: #f6f9ff69;
        &>nav{
            padding:  15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
           
        }
        &>main{
            display: flex;
            justify-content: center;
            
        }
    }
}
</style>