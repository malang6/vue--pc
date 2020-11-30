<template>
  <div class="footer" :class="!$route.meta.isCopyRightHide ? 'bgcolor' : ''">
    <div class="footer-area">
      <CopyRight v-if="!$route.meta.isCopyRightHide" />
      <ul class="footer-list">
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li class="line">尚品汇社区</li>
      </ul>
      <p class="footer-address">地址：北京市昌平区宏福科技园综合楼6层</p>
      <p class="footer-code">京ICP备19006430号</p>
    </div>
  </div>
</template>

<script>
import CopyRight from "@comps/CopyRight";
export default {
  name: "Footer",
  components: {
    CopyRight,
  },
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
}
.bgcolor {
  background-color: #eaeaea;
}
.footer-area {
  width: 1200px;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 20px;
}
.footer-list {
  display: flex;
  justify-content: center;
}
li {
  border-right: 1px solid #ccc;
  // border-right: 1px solid #e4e4e4;
  padding: 4px 20px;
  margin: 15px 0;
}
p {
  height: 24px;
  line-height: 24px;
}
.line{
  border-right: none;
}
</style>
