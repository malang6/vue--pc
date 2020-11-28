<template>
  <div class="home">
    <!-- 全部商品分类列表 -->
    <TypeNav />
    <!-- 列表 -->
    <ListContainer />
    <!-- 页脚 -->
    <CopyRight />
  </div>
</template>

<script>
import TypeNav from "@comps/TypeNav";
import ListContainer from "@views/Home/ListContainer";
import CopyRight from "@views/Home/CopyRight";
export default {
  name: "Home",
  components: {
    TypeNav,
    ListContainer,
    CopyRight,
  },
};
</script>

<style lang="less" scoped>
</style>
