<template>
  <div class="home">
    <TypeNav/>
    <!-- 列表 -->
    <ListContainer/>
  </div>
</template>

<script>
import TypeNav from "./TypeNav";
import ListContainer from "./ListContainer";
export default {
  name: "Home",
  components: {
    TypeNav,
    ListContainer,
  },
};
</script>

<style lang="less" scoped>
</style>
