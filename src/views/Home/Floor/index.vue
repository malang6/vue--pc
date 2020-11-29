<template>
  <div class="floor">
    <div class="floor-area">
      <div class="floor-title">
        <h3>家用电器</h3>
        <ul class="floor-title-list">
          <li class="floor-title-item"><a href="###" class="item">热门</a></li>
          <li class="floor-title-item">
            <a href="###" class="item">大家电</a>
          </li>
          <li class="floor-title-item">
            <a href="###" class="item">生活电器</a>
          </li>
          <li class="floor-title-item">
            <a href="###" class="item">厨房电器</a>
          </li>
          <li class="floor-title-item">
            <a href="###" class="item">应季电器</a>
          </li>
          <li class="floor-title-item">
            <a href="###" class="item">空气/净水器</a>
          </li>
          <li class="floor-title-item"><a href="###">高端电器</a></li>
        </ul>
      </div>
      <div class="floor-contain">
        <div class="blockgary">
          <ul class="contain-list">
            <li>节能补贴</li>
            <li>4K电视</li>
            <li>空气净化器</li>
            <li>1H电饭煲</li>
            <li>滚筒洗衣机</li>
            <li>电热水器</li>
          </ul>
          <img src="./images/floor-1-1.png" class="blockgary-img" />
        </div>
        <div class="floor-banner">
          <img src="./images/floor-1-b01.png" />
        </div>
        <div class="split">
          <span class="line"></span>
          <img src="./images/floor-1-2.png" />
          <img src="./images/floor-1-3.png" />
        </div>
        <div class="split-center">
          <img src="./images/floor-1-4.png" />
        </div>
        <div class="split">
          <span class="line"></span>
          <img src="./images/floor-1-5.png" />
          <img src="./images/floor-1-6.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Floor",
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
</style>
