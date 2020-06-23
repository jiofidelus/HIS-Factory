<template>
    <div id="dashboard" class="match-parent">
        <nav>
            <div class="top-nav">
                <div class="user-brand">
                    <span class="letter-icon">A</span>
                    <span class="username-text">ALEX ETAME</span>
                </div>
                <div>
                    <router-link class="x-btn-link" to = '/'>Log out</router-link>
                </div>
            </div>
            <div class="menu">
                <tabbar indicatorColor="#000">
                    <tabbar-item @click="showProjects">Projects <span class="x-badge">2</span></tabbar-item>
                    <tabbar-item @click="showProfile">Profile</tabbar-item>
                </tabbar>
            </div>
        </nav>
        <main class="match-parent">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>
<script>
import Tabbar from '../components/generics/tab/Tabbar.vue'
import TabbarItem from '../components/generics/tab/TabbarItem.vue'
export default {
    components:{
        Tabbar, TabbarItem
    },
    methods:{
        showProjects(){
            this.$router.push({name: 'ProjectList'})
        },
        showProfile(){
             this.$router.push({name: 'Profile'})
        }
    }
}
</script>
<style lang="scss" scoped>
#dashboard{
    color: #2e3c50;
    &>nav{
        position: fixed;
        width: 100%;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 1px 4px #666;
        background-color: white;
        z-index: 5;
        &>.top-nav{
            display: flex;
            align-items: center;
            height: 50px;
            justify-content: space-between;
            padding: 0 15px;
            &>.user-brand{
                font-size : 14px;
                font-weight: 600;
                .letter-icon{
                    height: 30px;
                    width: 30px;
                    display: inline-block;
                    margin-right: 10px;
                    border-radius: 50%;
                    line-height: 30px;
                    text-align: center;
                    background-color: #eee;
                    
                    
                }
                .username-text{
                    font-size : 12px;
                    
                }
            }

        }
        &>.menu{
            align-self: flex-start;
            height: 50px;
            width: 350px;
        }
    }
    &>main{
        padding-top: 90px;
    }
}
</style>