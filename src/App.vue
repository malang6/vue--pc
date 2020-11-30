<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" /> -->
    <Footer />
  </div>
</template>

<script>
import Header from "@comps/Header";
import Footer from "@comps/Footer";

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