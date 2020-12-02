<template>
  <div class="shoopcart">
    <div class="shopcart-area">
      <h4>全部商品</h4>
      <div class="cart-main">
        <div class="cart-th">
          <div class="cart-th1 w1">全部</div>
          <div class="cart-th2 w2">商品</div>
          <div class="cart-th3 w3">单价（元）</div>
          <div class="cart-th4 w4">数量</div>
          <div class="cart-th5 w5">小计（元）</div>
          <div class="cart-th6 w6">操作</div>
        </div>
        <div class="cart-body">
          <ul class="cart-list">
            <li class="cart-list-con1 w1">
              <input type="checkbox" />
            </li>
            <li class="cart-list-con2 w2">
              <img
                src="http://182.92.128.115:8080/group1/M00/00/0F/rBFUDF7JsSCAOfNkAADpIchA8Kg371.jpg"
              />
              <div class="item-mag">aa</div>
            </li>
            <li class="cart-list-con3 w3">
              <span class="price">3400</span>
            </li>
            <li class="cart-list-con4 w4">
              <div class="count">
                <a class="mins count-btn">-</a>
                <input type="text" class="itxt" />
                <a class="plus count-btn">+</a>
              </div>
            </li>
            <li class="cart-list-con5 w5">
              <span class="sum">17000000</span>
            </li>
            <li class="cart-list-con6 w6">
              <a href="###" class="del">删除</a>
              <br />
              <a href="###" class="move">移到收藏</a>
            </li>
          </ul>

          <ul class="cart-list">
            <li class="cart-list-con1 w1">
              <input type="checkbox" />
            </li>
            <li class="cart-list-con2 w2">
              <img
                src="http://182.92.128.115:8080/group1/M00/00/0F/rBFUDF7JsSCAcEknAAD2GX_A-0U431.jpg"
              />
              <div class="item-mag">荣耀V30 Pro</div>
            </li>
            <li class="cart-list-con3 w3">
              <span class="price">3400</span>
            </li>
            <li class="cart-list-con4 w4">
              <div class="count">
                <a class="mins count-btn">-</a>
                <input type="text" class="itxt" />
                <a class="plus count-btn">+</a>
              </div>
            </li>
            <li class="cart-list-con5 w5">
              <span class="sum">17000000</span>
            </li>
            <li class="cart-list-con6 w6">
              <a href="###" class="del">删除</a>
              <br />
              <a href="###" class="move">移到收藏</a>
            </li>
          </ul>
        </div>
        <div class="cart-tool">
          <div class="choose-inp">
            <input type="checkbox" />
            <span>全选</span>
          </div>
          <div class="option">
            <a href="###">删除选中的商品</a>
            <a href="###">移到我的关注</a>
            <a href="###">清除下柜商品</a>
          </div>
          <div class="moneybox">
            <div class="choosed">
              已选择
              <span>5300</span>
              件商品
            </div>
            <div class="sumprice">
              <em>总价（不含运费）：</em>
              <i class="summoney">1820000</i>
            </div>
            <div class="sumbtn">
              <a href="###" class="sum-btn">结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCart",
};
</script>

<style lang="less" scoped>
.shopcart-area {
  width: 1200px;
  margin: 0 auto;
}
h4 {
  margin: 9px 0;
  font-size: 14px;
  line-height: 21px;
}
.cart-th {
  display: flex;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
}
.w1 {
  width: 5%;
}
.w2 {
  width: 35%;
}
.w3,
.w4,
.w5,
.w6 {
  width: 15%;
}
.cart-body {
  margin: 15px 0;
  border: 1px solid #ddd;
}
.cart-list {
  display: flex;
  height: 82px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.cart-list-con2 {
  display: flex;
}
img {
  width: 82px;
  height: 82px;
}
.item-mag {
  width: 150px;
  margin: 0 10px;
  line-height: 18px;
}
.count {
  display: flex;
}
.count-btn {
  border: 1px solid #ddd;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
  cursor: pointer;
}
.mins {
  border-right: 0;
}
.itxt {
  border: 1px solid #ddd;
  width: 40px;
  height: 33px;
  text-align: center;
  font-size: 14px;
  outline: none;
}
.plus {
  border-left: 0;
}
.sum {
  font-size: 16px;
}
.cart-tool {
  display: flex;
  position: relative;
  height: 52px;
  border: 1px solid #ddd;
}
.choose-inp {
  display: flex;
  align-items: center;
  padding: 10px;
}
.option {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 288px;
  padding: 10px;
}
.moneybox {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
}
.choosed {
  line-height: 26px;
  padding: 0 10px;
}
.sumprice {
  width: 200px;
  line-height: 22px;
  padding: 0 10px;
}
.summoney {
  color: #c81623;
  font-size: 16px;
}
.sumbtn:hover {
  a {
    color: rgb(79, 76, 212);
  }
}
.sum-btn {
  display: block;
  position: relative;
  width: 96px;
  height: 52px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  background: #e1251b;
}
</style>
