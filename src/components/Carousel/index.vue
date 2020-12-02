<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
        autoplay
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>

    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 左右按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// swiper使用 参考文档https://swiperjs.com/get-started/
// 1. 引入swiper两个文件
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

// Swiper6默认只有核心轮播图功能，其他功能没有
// 要使用其他功能，需要先加载
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      require: true,
    },
  },
  methods: {
    initSwiper() {
      // 使用 this.$refs.swiper 取代 .swiper-container
      // 使用 this.$refs.swiper 才能保证轮播图组件使用的自己的swiper
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //设置分页器可以点击
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  watch: {
    // [] --> 最终的数据 数据发生变化才会触发
    // 轮播图DOM元素要渲染完成 --> 轮播图数据
    // watch为了确保有轮播图数据
    // this.$nextTick为了确保轮播图数据已经渲染成DOM元素

    carouselList() {
      // 确保：swiper不能new多次
      if (this.swiper) return;
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  mounted() {
    // 轮播图数据要有 且 轮播图DOM元素要渲染完成 才能 new Swiper
    /* 
      1. ListContainer组件
        一上来没有数据 -- 触发watch
      2. Floor 
        一上来就有数据 -- mounted  
    */
    //空数组转成布尔值还是true 所以这里要判断数组的长度
    if (!this.carouselList.length) return;
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
</style>
