<template>
  <div class="home">
    <!-- 全部商品分类列表 -->
    <TypeNav />
    <!-- 列表 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <TodayRecommend />
    <!-- 热卖 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!-- 楼层 -->
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
    <!-- 品牌商 -->
    <Banner />
  </div>
</template>

<script>
import TypeNav from "@comps/TypeNav";
import ListContainer from "@views/Home/ListContainer";
import TodayRecommend from "@views/Home/TodayRecommend";
import Rank from "@views/Home/Rank";
import Like from "@views/Home/Like";
import Floor from "@views/Home/Floor";
import Banner from "@views/Home/Banner";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  methods: {
    ...mapActions(["getFloors"]),
  },
  mounted() {
    this.getFloors();
  },
  components: {
    TypeNav,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Banner,
  },
};
</script>

<style lang="less" scoped>
</style>
