<template>
  <div class="listcontainer">
    <div class="sortList">
      <div class="center">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/banner2.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/banner2.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/banner3.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/banner4.jpg" />
            </div>
          </div>
          <div class="swiper-btn left"></div>
          <div class="swiper-btn right"></div>
          <div class="swiper-dotts">
            <span class="dott active"></span>
            <span class="dott"></span>
            <span class="dott"></span>
            <span class="dott"></span>
          </div>
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
          <img src="./images/ad1.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContainer",
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
.swiper-wrapper {
  display: flex;
}
.swiper-btn {
  width: 40px;
  height: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: pink;
}
.left {
  left: 10px;
}
.right {
  right: 5px;
}
.swiper-dotts {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.dott {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 3px;
}
.active {
  background-color: red;
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
.ads{
  margin-top: 5px;
}
</style>
