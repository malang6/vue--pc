<template>
  <div class="centerorder">
    <div class="centerorder-area">
      <!-- 左边列表 -->
      <div class="groupby">
        <dl>
          <dt>
            <i>·</i>
            订单中心
          </dt>
          <dd>
            <router-link to="/center/myorder" class="red active"
              >我的订单</router-link
            >
          </dd>
          <dd>
            <router-link to="/center/groupbuy">团购订单</router-link>
          </dd>
          <dd>本地生活订单</dd>
          <dd>我的预售</dd>
          <dd>评价晒单</dd>
          <dd>取消订单记录</dd>
        </dl>
        <dl>
          <dt><i>·</i> 关注中心</dt>
          <dd>关注的商品</dd>
          <dd>关注的店铺</dd>
          <dd>关注的专辑</dd>
          <dd>关注的品牌</dd>
          <dd>关注的活动</dd>
          <dd>浏览历史</dd>
        </dl>
        <dl>
          <dt><i>·</i> 特色业务</dt>
          <dd>我的营业厅</dd>
          <dd>京东通信</dd>
          <dd>定期送</dd>
          <dd>京东代下单</dd>
          <dd>我的回收单</dd>
          <dd>节能补贴</dd>
          <dd>医药服务</dd>
          <dd>流量加油站</dd>
          <dd>黄金托管</dd>
        </dl>
        <dl>
          <dt><i>·</i> 客户服务</dt>
          <dd>返修退换货</dd>
          <dd>价格保护</dd>
          <dd>意见建议</dd>
          <dd>购买咨询</dd>
          <dd>交易纠纷</dd>
          <dd>我的发票</dd>
        </dl>
        <dl>
          <dt><i>·</i> 设置</dt>
          <dd>个人信息</dd>
          <dd>收货地址</dd>
        </dl>
      </div>
      <!-- 右边的订单 -->
      <div class="order-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Center",
};
</script>

<style lang="less" scoped>
.centerorder-area {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding: 10px;
  color: #333;
  box-sizing: border-box;
}
.groupby {
  width: 16.67%;
}
dl {
  line-height: 28px;
}
dt {
  font-weight: bold;
  padding: 5px;
  height: 28px;
}
i {
  color: #77b72c;
}
dd {
  margin: 0 0 6px;
  border-bottom: 1px solid #ededed;
  text-align: center;
}
.red:hover {
  color: rgb(79, 76, 212);
}
.active {
  color: red;
}
.order-right {
  width: 83.33%;
  margin: 0 20px;
}
</style>
