<template>
 <div class="infinite-list-wrapper" style="overflow:auto">
     <div v-if='list.length'>
         <ul 
            class="list"
            v-infinite-scroll='load'
            infinite-scroll-disabled='disabled'
         >
             <Item v-for='item in list' :data='item' :key='item.id'></Item>
         </ul>
         <div class="infinite-list-bottom">
             <Button class='btn-load' @click='loadMore' v-if='!loading && !noMore'>加载更多</Button>
             <div class="loading" v-if="!noMore" v-loading='loading'></div>
             <p class="no-more" v-if='showNoMore && noMore'>没有更多了</p>
         </div>
     </div>
     <p class="no-data" v-else>
         暂无数据
     </p>
 </div>
</template>

<script>
import { Button } from 'element-ui'
import Item from '../Item'
export default {
 components:{
     Item,
     Button
 },
 computed: {
     disabled(){
         return this.loading || (this.showNoMore && this.noMore);
     }
 },
 props: {
     list: {
         type: Array
     },
     noMore: {
         type: Boolean,
         default: false
     },
     showNoMore: {
         type: Boolean,
         default: true
     }
 },
 data(){
    return {
        loading: false
    }
 },
 methods:{
     // 点击加载更多
     loadMore() {
         this.loading = true;
         this.$emit('load', this.closeLoading);
     },
     // 关闭加载中
     closeLoading() {
         this.loading = false;
     },
     // 滚动到底部时自动执行加载方法
     load() {
         this.$emit('bottom-load');
     }
 },
}
</script>
<style scoped>
</style>