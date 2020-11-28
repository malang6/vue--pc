<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" /> -->
    <Footer v-if="!$route.meta.isFooterHide" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "Apps",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>