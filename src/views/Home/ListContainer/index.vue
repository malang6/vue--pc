<template>
  <div class="listcontainer">
    <div class="sortList">
      <div class="center">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="banner in banners"
              :key="banner.id"
              autoplay
            >
              <img :src="banner.imgUrl" />
            </div>
          </div>

          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 左右按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div class="swiper-right">
        <div class="right-news">
          <h4>
            <em>尚品汇快报</em>
            <span class="more">更多 ></span>
          </h4>
          <ul class="right-news-list">
            <li>
              <span class="news-span">[特惠]</span>
              备战开学季 全民半价购数码
            </li>
            <li>
              <span class="news-span">[公告]</span>
              备战开学季 全民半价购数码
            </li>
            <li>
              <span class="news-span">[特惠]</span>
              备战开学季 全民半价购数码
            </li>
            <li>
              <span class="news-span">[公告]</span>
              备战开学季 全民半价购数码
            </li>
            <li>
              <span class="news-span">[特惠]</span>
              备战开学季 全民半价购数码
            </li>
          </ul>
        </div>
        <ul class="icon-list">
          <li>
            <i class="icon-list-i i-hf"></i>
            <span>话费</span>
          </li>
          <li>
            <i class="icon-list-i i-jp"></i>
            <span>机票</span>
          </li>
          <li>
            <i class="icon-list-i i-dyp"></i>
            <span>电影票</span>
          </li>
          <li>
            <i class="icon-list-i i-yx"></i>
            <span>游戏</span>
          </li>
          <li>
            <i class="icon-list-i i-cp"></i>
            <span>彩票</span>
          </li>
          <li>
            <i class="icon-list-i i-jyz"></i>
            <span>加油站</span>
          </li>
          <li>
            <i class="icon-list-i i-jd"></i>
            <span>酒店</span>
          </li>
          <li>
            <i class="icon-list-i i-hcp"></i>
            <span>火车票</span>
          </li>
          <li>
            <i class="icon-list-i i-zc"></i>
            <span>众筹</span>
          </li>
          <li>
            <i class="icon-list-i i-lc"></i>
            <span>理财</span>
          </li>
          <li>
            <i class="icon-list-i i-lpk"></i>
            <span>礼品卡</span>
          </li>
          <li>
            <i class="icon-list-i i-bt"></i>
            <span>白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// swiper使用 参考文档https://swiperjs.com/get-started/
// 1. 引入swiper两个文件
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { mapState, mapActions } from "vuex";

// Swiper6默认只有核心轮播图功能，其他功能没有
// 要使用其他功能，需要先加载
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "ListContainer",
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    }),
  },
  methods: {
    ...mapActions(["getBanners"]),
  },
  async mounted() {
    // await就会等待vuex将数据更新完毕，再执行后面代码
    await this.getBanners();

    //new Swiper的前提：必须先 生成相应的DOM结构
    // 方法一 加定时器,让new Swiper成为异步执行（宏任务） 因为页面更新DOM结构式微任务
    /* setTimeout(() => {
      new Swiper(".swiper-container", {
        loop: true,

        pagination: {
          el: ".swiper-pagination",
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }, 0); */

    //方法二 使用this.$nextTick 这个更推荐 语义更好
    // 等当前用户界面更新完毕，在触发其中的回调函数
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // autoplay: true, //自动轮播
        /*autoplay: {
            delay: 3000,
            stopOnLastSlide: false,//在最一页
            disableOnInteraction: true,//当用户点击下一页按钮后，自动轮播会停 false就不会停 自动轮播还有
        },*/

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
    });
    /* 
      1. 在mounted去new Swiper，为了保证DOM结构生成了在new
      2. mounted直接new Swiper，此时还没有获取到banners数据
        轮播图图片还未生成，所以失败
      3. 要等轮播图图片数据请求回来，在new Swiper
      4. await this.getBanners() --> 等待vuex将数据更新完毕，再执行后面代码
      5. 轮播图数据有了，但是DOM结构没有
        更新用户界面都是异步的，所以要等同步全部执行完，再去更新
      6. 方案一：定时器  
        通过定时器将new Swiper添加宏任务队列，而更新用户界面是微任务队列
        所以是先更新用户界面，此时就有DOM结构
        再new Swiper，此时就OK
      7. 方案二：
        this.$nextTick(() => {}) 
        Vue.nextTick(() => {})  
          等当前用户界面更新完毕，在触发其中的回调函数
          将其中的回调函数放到更新完成DOM后在触发
          其中的回调函数可以近似看做实在updated中执行（但是只会执行一次）
      8. 注意：Swiper6需要手动引入其他插件才可以使用
      
      调试代码：打印调试
    */
  },
};
</script>

<style lang="less" scoped>
.listcontainer {
  width: 1200px;
  margin: 0 auto;
}
.sortList {
  height: 464px;
  padding-left: 210px;
}
.center {
  float: left;
  box-sizing: border-box;
  width: 730px;
  overflow: hidden;
  height: 100%;
  padding: 5px;
  position: relative;
}
.swiper-right {
  float: left;
  width: 250px;
  margin-left: 5px;
}
.right-news {
  border: 1px solid #e4e4e4;
  margin-top: 5px;
}
h4 {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  padding: 5px 10px;
  margin: 5px 5px 0;
  line-height: 22px;
  overflow: hidden;
  font-size: 14px;
}
.more {
  font-size: 12px;
  font-weight: 400;
}
.right-news-list {
  padding: 5px 15px;
  line-height: 26px;
}
.news-span {
  font-weight: 700;
}
.icon-list {
  border-right: 1px solid #e4e4e4;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.icon-list {
  li {
    border-left: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    margin-right: -1px;
    height: 64px;
    text-align: center;
    position: relative;
    cursor: pointer;
    width: 25%;
  }
}
.icon-list-i {
  background-image: url("./images/icons.png");
  width: 61px;
  height: 40px;
  display: block;
}
.i-hf {
  background-position: 0px -5px;
}
.i-jp {
  background-position: -62px -5px;
}
.i-dyp {
  background-position: -126px -5px;
}
.i-yx {
  background-position: -190px -5px;
}
.i-cp {
  background-position: 0px -76px;
}
.i-jyz {
  background-position: -62px -76px;
}
.i-jd {
  background-position: -126px -76px;
}
.i-hcp {
  background-position: -190px -76px;
}
.i-zc {
  background-position: 0px -146px;
}
.i-lc {
  background-position: -62px -146px;
}
.i-lpk {
  background-position: -126px -146px;
}
.i-bt {
  background-position: -190px -146px;
}
.ads {
  margin-top: 5px;
}
</style>
