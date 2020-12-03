<template>
  <div class="centerorder">
    <div class="centerorder-area">
      <!-- 左边列表 -->
      <GroupBy />
      <!-- 右边的订单 -->
      <MyOrder />
    </div>
  </div>
</template>

<script>
import GroupBy from "./GroupBy";
import MyOrder from "./MyOrder";
export default {
  name: "Center",
  components: {
    GroupBy,
    MyOrder,
  },
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
</style>
