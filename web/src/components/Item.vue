<template>
 <div class='item'>
     <slot></slot>
     <span @click="toDetail" class='title'>{{data.title}}</span>
     <div class="content" v-html='replace(data.content)'></div>
     <UserInfo class='user-info' :data='data' />
 </div>
</template>

<script>
import UserInfo from './UserInfo'
export default {
 components:{
     UserInfo
 },
 props: {
     data: {
        type: Object
     }
 },
 data(){
    return {
    }
 },
 methods:{
     toDetail() {
         this.$router.push({path: `/detail/${this.data.id}`, query: {title: this.data.title}});
     },
     replace(content = '') {
         return content.replace(/<.*?>/g, '');
     }
 },
}
</script>
<style scoped>
</style>