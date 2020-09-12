<template>
 <main class="page home">
     <!--banner-->
    <Carousel height="100%" class="banner" trigger="click">
        <CarouselItem :title="item.title" class="banner-item" @click="bannerDetail(item)" v-for="item in banners" :key="item.id">
            <h4 class='title'>{{ item.title }}</h4>
            <img :src="item.img_url" alt="" class="banner-img">
        </CarouselItem>
    </Carousel>
    <Backtop :visibility-height="100" :bottom="100">
        <i class="el-icon-arrow-up"></i>
    </Backtop>
    <!--文章列表展示-->
    <ListView class='list' :showNoMore='page > 1' :noMore='noMore' :list='list' @load='loadList'></ListView>
 </main>
</template>

<script>
import { Carousel, CarouselItem, Backtop} from 'element-ui'
import ListView from '@/components/ListView'
import { getBanners } from '@/api/banner'
import { getArticles } from '@/api/article'
export default {
 components:{
     Carousel,
     CarouselItem,
     Backtop,
     ListView
 },
 created() {
     getBanners().then((res) => {
         this.banners = res.data;
     });
     this.loadList();
 },
 data(){
    return {
        banners: [],
        list: [],
        noMore: false,
        showNoMore: true,
        page: 0,
        pageSize: 10,
        total: 0
    }
 },
 methods:{
     bannerDetail(banner) {
         if(banner.relate_id){
             this.$router.push({path: 'detail/' + banner.relate_id});
         } else {
             this.$router.push({path: 'banner/' + banner.id, query: {title: banner.title}});
         }
     },
     loadList(closeLoading) {
         getArticles({
             pageIndex: this.page,
             pageSize: this.pageSize
         }).then(({ data }) => {
             this.list = [...this.list, ...data.list];
             this.total = data.total;
             if(this.total <= this.list.length) {
                 this.noMore = true;
             }
             closeLoading && closeLoading();
             this.page++;
         })
     }
 },
}
</script>
<style scoped>
</style>