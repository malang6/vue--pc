<template>
  <div class="banner">
    <div class="banner-area">
      <ul class="banner-list">
        <li class="banner-item">
          <img src="./images/brand_03.png" />
        </li>
        <li class="banner-item">
          <img src="./images/brand_05.png" />
        </li>
        <li class="banner-item">
          <img src="./images/brand_07.png" />
        </li>
        <li class="banner-item">
          <img src="./images/brand_09.png" />
        </li>
        <li class="banner-item">
          <img src="./images/brand_11.png" />
        </li>
        <li class="banner-item">
          <img src="./images/brand_13.png" />
        </li>
        <li class="banner-item">
          <img src="./images/brand_15.png" />
        </li>
        <li class="banner-item">
          <img src="./images/brand_17.png" />
        </li>
        <li class="banner-item">
          <img src="./images/brand_19.png" />
        </li>
        <li class="banner-item">
          <img src="./images/brand_21.png" class="banner-last" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="less" scoped>
.banner-area {
  width: 1200px;
  height: 67px;
  margin: 10px auto;
}
.banner-list {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  background: #f7f7f7;
  line-height: 18px;
}
.banner-item {
  height: 37px;
  img {
    padding: 0 10px;
    border-right: 1px solid #ccc;
  }
  .banner-last {
    border: none;
  }
}
</style>
