<template>
 <main class="page home">
     <!--banner-->
    <Carousel height="100%" class="banner" trigger="click">
        <CarouselItem :title="item.title" class="banner-item" @click.native="bannerDetail(item)" v-for="item in banners" :key="item.id">
            <h4 class='title'>{{ item.title }}</h4>
            <img :src="item.img_url" alt="" class="banner-img">
        </CarouselItem>
    </Carousel>
    <Backtop :visibility-height="100" :bottom="100">
        <i class="el-icon-arrow-up"></i>
    </Backtop>
    <!--文章列表展示-->

 </main>
</template>

<script>
import { Carousel, CarouselItem, Backtop} from 'element-ui'
import { getBanners } from '@/api/banner'
export default {
 components:{
     Carousel,
     CarouselItem,
     Backtop
 },
 created() {
     getBanners().then((res) => {
         this.banners = res.data;
     });
     this.loadList();
 },
 data(){
    return {
        banners: []
    }
 },
 methods:{
     bannerDetail(banner) {},
     loadList() {}
 },
}
</script>
<style scoped>
</style>