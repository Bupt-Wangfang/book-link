<template>
 <div class="main-container">
    <Nav />
    <div class="main">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive">
            <!-- 这里是会被缓存的视图组件，比如 Home！ -->
            </router-view>
        </keep-alive>
    </div>
 </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
 components:{
     Nav
 },
 created() {
    this.$store.dispatch('user/getUserInfo');
 }
}
</script>
<style lang = 'scss' scoped>
.main-container, .main {
    height: 100%;
}
.main {
    padding-top: 50px;
}
</style>