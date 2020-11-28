<template>
  <div class="home">
    <!-- 全部商品分类列表 -->
    <TypeNav />
    <!-- 列表 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <TodayRecommend/>
    <!-- 页脚 -->
    <CopyRight />
  </div>
</template>

<script>
import TypeNav from "@comps/TypeNav";
import ListContainer from "@views/Home/ListContainer";
import TodayRecommend from "@views/Home/TodayRecommend";
import CopyRight from "@views/Home/CopyRight";
export default {
  name: "Home",
  components: {
    TypeNav,
    ListContainer,
    TodayRecommend,
    CopyRight,
  },
};
</script>

<style lang="less" scoped>
</style>
