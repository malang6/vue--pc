<template>
  <div class="myorder">
    <div class="title">
      <h3>我的订单</h3>
    </div>
    <div class="chosetype">
      <table class="choseType-title">
        <tr>
          <th width="29%">商品</th>
          <th width="31%">订单详情</th>
          <th width="13%">收货人</th>
          <th>金额</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </table>
    </div>
    <div class="orders" v-for="order in orderList.records" :key="order.id">
      <table class="order-item">
        <tr>
          <th colspan="5" class="order-num">
            <span>{{ order.createTime }} 订单编号：{{ order.outTradeNo }}</span>
            <span class="order-num-img">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVQ4T2NkoBAwYtFvwMDAsICBgeEDmpwAAwNDAgMDwwVkcWQDHBgYGP4zMDBMYGBgKMBiMMiABiS5gyA1yAaAJEkBYPXoXgC54gDUFBD7AZStgCYOU4NhAMhUmEtANLJhyOJw16K7YNQASABSLRBxpQlkSzCiEZSE12NJxjDDQKkxEJqkwWLY8gIoGYMUYgOg/IGST7AZQEpyxuoCkgwAAM/OLBHb4Q8yAAAAAElFTkSuQmCC"
              />
            </span>
          </th>
        </tr>
        <tbody
          v-for="orderDetail in order.orderDetailList"
          :key="orderDetail.id"
        >
          <tr>
            <td class="center" width="58%">
              <div class="typographic">
                <img :src="orderDetail.imgUrl" />
                <a href="###" class="block-txt">{{ orderDetail.skuName }}</a>
                <span class="xnum">x{{ orderDetail.skuNum }}</span>
              </div>
            </td>
            <td :rowspan="order.orderDetailList.length" class="center-txt">{{ order.consignee }}</td>
            <td class="center center-txt" :rowspan="order.orderDetailList.length">
              <ul>
                <li>总金额¥0.01</li>
                <li>在线支付</li>
              </ul>
            </td>
            <td class="center center-txt" :rowspan="order.orderDetailList.length">
              <a href="###">{{ order.orderStatusName }}</a>
            </td>
            <td class="center center-txt" :rowspan="order.orderDetailList.length">
              <ul>
                <li><a href="###">评价|晒单</a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 分页器 -->
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="+page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="+limit"
      layout=" prev, pager, next, total, sizes,jumper"
      :total="orderList.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { reqOrderList } from "@api/order";
export default {
  name: "MyOrder",
  data() {
    return {
      orderList: {},
      page: "1",//当前第几页
      limit: "5",//每页显示多少条
    };
  },
  methods: {
    async updateOrderList() {
      this.orderList = await reqOrderList(this.page, this.limit);
    },
    handleCurrentChange(page) {
      this.page = page;
      this.updateOrderList();
    },
    handleSizeChange(limit) {
      this.limit = limit;
      this.updateOrderList();
    },
  },
  mounted() {
    this.updateOrderList();
  },
};
</script>

<style lang="less" scoped>
.myorder {
  color: #666;
}
.title {
  margin-bottom: 22px;
  border: 1px solid #ddd;
}
h3 {
  padding: 12px 10px;
  font-size: 15px;
  background-color: #f1f1f1;
}
.chosetype {
  margin-bottom: 15px;
  .choseType-title {
    border-collapse: separate;
    margin-bottom: 0px;
  }
}
table {
  border: 1px solid #e6e6e6;
  border-collapse: collapse;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 18px;
  max-width: 100%;
}
th {
  padding: 6px 8px;
  color: #666;
  font-weight: 700;
  vertical-align: bottom;
  background-color: #f4f4f4;
  line-height: 18px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 12px;
  text-align: left;
}
td {
  min-width: 78px;
  padding: 6px 8px;
  text-align: left;
  vertical-align: middle;
  border: 1px solid #e6e6e6;
}
.order-num-img {
  float: right;
  img {
    margin-right: 10px;
    vertical-align: middle;
  }
}
.typographic {
  position: relative;
  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
}
.block-txt {
  display: inline-block;
  position: absolute;
  top: 6px;
  min-width: 80px;
  max-width: 250px;
  color: #e1251b;
}
.xnum {
  position: absolute;
  left: 300px;
  top: 6px;
}
.center-txt {
  text-align: center;
}
</style>
