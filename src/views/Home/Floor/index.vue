<template>
  <div class="floor">
    <div class="floor-area">
      <div class="floor-title">
        <h3>{{ floor.name }}</h3>
        <ul class="floor-title-list">
          <li
            class="floor-title-item"
            v-for="(keyword, index) in floor.keywords"
            :key="index"
          >
            <a href="###" class="item">{{ keyword }}</a>
          </li>
        </ul>
      </div>
      <div class="floor-contain">
        <div class="blockgary">
          <ul class="contain-list">
            <li v-for="(navItem, index) in floor.navList" :key="index">
              {{ navItem.text }}
            </li>
          </ul>
          <img :src="floor.imgUrl" class="blockgary-img" />
        </div>
        <div class="lunbo">
          <!-- 轮播图 -->
          <Carousel :carouselList="floor.carouselList" />
        </div>
        <div class="split">
          <span class="line"></span>
          <img
            :src="recommend.imgUrl"
            v-for="recommend in floor.recommendList.slice(0, 2)"
            :key="recommend.id"
          />
        </div>
        <div class="split-center">
          <img :src="floor.bigImg" />
        </div>
        <div class="split">
          <span class="line"></span>
          <img
            :src="recommend.imgUrl"
            v-for="recommend in floor.recommendList.slice(2, 4)"
            :key="recommend.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@comps/Carousel";
export default {
  name: "Floor",
  props: {
    floor: Object,
  },
  components: {
    Carousel,
  },
};
</script>

<style lang="less" scoped>
.floor-area {
  width: 1200px;
  margin: 15px auto 0;
}
.floor-title {
  display: flex;
  justify-content: space-between;
}
h3 {
  font-size: 20px;
  color: #c81623;
  line-height: 30px;
  margin: 9px 0;
}
.floor-title-list {
  display: flex;
  margin: 10px 0 0;
}
.floor-title-item {
  line-height: 18px;
  /*  &:first-child >a{
    color: #e1251b;
  } */
  &:last-child > a::after {
    content: "";
  }
}
a {
  padding-top: 1px;
  color: #e1251b;
}
a:hover {
  color: rgb(79, 76, 212);
}
.item::after {
  content: "|";
  padding: 0 10px;
}
.floor-contain {
  display: flex;
  height: 360px;
  justify-content: space-between;
  border-top: 2px solid #c81623;
  border-bottom: 1px solid #e4e4e4;
}
.blockgary {
  width: 210px;
  height: 100%;
  background-color: #f7f7f7;
}
.contain-list {
  padding: 15px 0;
  li {
    float: left;
    width: 40%;
    margin: 0 10px;
    line-height: 26px;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
  }
}
.blockgary-img {
  width: 100%;
}
//轮播图占个位置
.floor-banner {
  img {
    width: 325px;
    height: 360px;
  }
}
.split {
  position: relative;
  width: 220px;
  border-left: 1px solid #e4e4e4;
  margin-left: 1px;
  img {
    transition: all 400ms;
    &:hover {
      opacity: 0.8;
    }
  }
}
.line {
  position: absolute;
  background: #e4e4e4;
  width: 220px;
  height: 1px;
  top: 180px;
}
.split-center {
  border-left: 1px solid #e4e4e4;
}
.lunbo {
  width: 329px;
  height: 360px;
}
</style>
