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
          <ul class="cart-list" v-for="cart in cartList" :key="cart.id">
            <li class="cart-list-con1 w1">
              <input
                type="checkbox"
                :checked="cart.isChecked === 1"
                @change="checkCartHandle(cart)"
              />
            </li>
            <li class="cart-list-con2 w2">
              <img :src="cart.imgUrl" />
              <div class="item-mag">{{ cart.skuName }}</div>
            </li>
            <li class="cart-list-con3 w3">
              <span class="price">{{ cart.skuPrice }}</span>
            </li>
            <li class="cart-list-con4 w4">
              <div class="count">
                <button
                  class="mins count-btn"
                  :disabled="cart.skuNum <= 1"
                  @click="addToCart({ skuId: cart.skuId, skuNum: -1 })"
                >
                  -
                </button>
                <!-- :value="cart.skuNum" 这里要使用input就不能使用v-model绑定,因为v-model已经有了input事件.要使用value -->
                <input
                  autocomplete="off"
                  minnum="1"
                  type="text"
                  class="itxt"
                  :value="cart.skuNum"
                  @input="formatSkuNum"
                  @blur="update(cart.skuId, cart.skuNum, $event)"
                />
                <button
                  class="plus count-btn"
                  :disabled="cart.skuNum >= 10"
                  @click="addToCart({ skuId: cart.skuId, skuNum: 1 })"
                >
                  +
                </button>
              </div>
            </li>
            <li class="cart-list-con5 w5">
              <span class="sum">{{ cart.skuPrice * cart.skuNum }}</span>
            </li>
            <li class="cart-list-con6 w6">
              <a class="del" @click="del(cart.skuId)">删除</a>
              <br />
              <a href="###" class="move">移到收藏</a>
            </li>
          </ul>
        </div>
        <div class="cart-tool">
          <div class="choose-inp">
            <input type="checkbox" v-model="isAllChecked" />
            <span>全选</span>
          </div>
          <div class="option">
            <a @click="delAllChecked">删除选中的商品</a>
            <a href="###">移到我的关注</a>
            <a href="###">清除下柜商品</a>
          </div>
          <div class="moneybox">
            <div class="choosed">
              已选择
              <span>{{ totalCount }}</span>
              件商品
            </div>
            <div class="sumprice">
              <em>总价（不含运费）：</em>
              <i class="summoney">{{ totalPrice }}</i>
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
import { mapState, mapActions } from "vuex";
export default {
  name: "ShopCart",
  computed: {
    ...mapState({
      cartList: (state) => state.shopcart.cartList,
    }),
    //计算是否全选中
    isAllChecked: {
      get() {
        //当下面的已选中总数和商品总数相等时 全选按钮选中
        const sum = this.cartList.reduce((p, c) => p + c.skuNum, 0);
        return this.totalCount && this.totalCount === sum;
      },
      // 当用户点击改变勾选框的勾选状态时调用
      async set(value) {
        // 标识当前是否勾选的布尔值true/false
        try {
          await this.checkAllCart(value);
          // 如果成功了, 重新获取购物车数据显示
          this.getCartList();
        } catch (error) {
          // 如果失败了, 提示
          alert(error.message);
        }
      },
    },
    //计算总数
    totalCount() {
      return this.cartList.reduce((p, c) => {
        if (c.isChecked === 1) {
          p = p + c.skuNum;
        }
        return p;
      }, 0);
    },
    //计算总价钱
    totalPrice() {
      return this.cartList.reduce((p, c) => {
        if (c.isChecked === 1) {
          p = p + c.skuPrice * c.skuNum;
        }
        return p;
      }, 0);
    },
  },
  methods: {
    ...mapActions([
      "getCartList",
      "addToCart",
      "delCart",
      "checkCart",
      "checkAllCart",
    ]),
    // 点击删除按钮，删除购物车商品
    del(skuId) {
      if (window.confirm("您确定要删除吗?")) {
        this.delCart(skuId);
      }
    },
    // 删除所有已选中商品
    delAllChecked() {
      if (window.confirm("您确定要清空购物车吗?")) {
        this.cartList.forEach((cart) => {
          if (cart.isChecked) {
            this.delCart(cart.skuId);
          }
        });
      }
    },
    // 全选
    async checkCartHandle(cart) {
      // 准备数据
      const skuId = cart.skuId;
      const isChecked = cart.isChecked === 1 ? "0" : "1";
      // 可以用try catch 也可以用.then .catch
      try {
        await this.checkCart({ skuId, isChecked });
        // 如果成功了, 重新获取购物车数据显示
        this.getCartList();
      } catch (error) {
        // 如果失败了, 提示
        alert(error.message);
      }
    },
    //input框输入，正则校验：只允许输入数字 不是数字的就替换为空
    formatSkuNum(e) {
      let skuNum = +e.target.value.replace(/\D+/g, "");
      if (skuNum < 1) {
        // 商品数量不能小于1
        skuNum = 1;
      } else if (skuNum > 10) {
        // 商品数量不能大于库存(假设库存是10)
        skuNum = 10;
      }
      e.target.value = skuNum;
    },
    //
    update(skuId, skuNum, e) {
      // console.log(e.target.value, skuNum);

      //当输入的值没有改变的时候,就不要发请求了  e.target.value得到的是字符串,+可以将其转化为Number
      if (+e.target.value === skuNum) return;

      //传过去的skuNum是1或者-1 所有要使用e.target.value - skuNum
      this.addToCart({ skuId, skuNum: e.target.value - skuNum });
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>

<style lang="less" scoped>
button[disabled] {
  color: #c0c4cc;
  cursor: not-allowed;
}
a:hover {
  cursor: pointer;
}
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
  text-align: center;
  padding: 8px 8px;
  cursor: pointer;
  outline: none;
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
