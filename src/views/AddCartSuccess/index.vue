<template>
  <div class="addcartsuccess">
    <div class="addcartsuccess-area">
      <h3>
        <i class="iconfont icon-Shapecopy"></i>
        商品已成功加入购物车
      </h3>
      <div class="goods">
        <div class="left-goods">
          <div class="left-img">
            <img
              src="http://182.92.128.115:8080/group1/M00/00/0D/rBFUDF7G99eAd5v_AAVf81560TE840.png"
            />
            <div class="right-info">
              <p class="title">IphoneXR--11</p>
              <p class="attr">颜色：WFZ5099IH/5L钛金釜内胆 数量：1</p>
            </div>
          </div>
        </div>
        <div class="right-gocart">
          <a href="###">查看商品详情</a>
          <router-link to="/shortcart">去购物车结算 ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCartSuccess",
};
</script>

<style lang="less" scoped>
.addcartsuccess {
  background-color: #f4f4f4;
}
.addcartsuccess-area {
  width: 1200px;
  margin: 0 auto;
}
.goods {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
h3 {
  font-size: 16px;
  color: #6aaf04;
  padding: 15px 0;
  font-weight: normal;
}
.icon-Shapecopy {
  font-size: 24px;
}

.left-img {
  display: flex;
  border: 1px solid #dfdfdf;
  width: 60px;
}
img {
  width: 60px;
  height: 60px;
}
.right-info {
  color: #444;
  margin-left: 10px;
}
.title {
  width: 100%;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.attr {
  width: 250px;
  color: #aaa;
}
a {
  padding: 7px 36px;
  font-size: 15px;
  line-height: 22px;
  color: #333;
  background-color: #eee;
  border: 1px solid #e1e1e1;
}
a:hover {
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
}
</style>
