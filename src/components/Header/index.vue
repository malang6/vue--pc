<template>
  <div class="header">
    <div class="header-top-area">
      <div class="header-top">
        <div class="header-top-left">
          <p class="header-title">尚品汇欢迎您！</p>
          <p class="header-left-link">
            <span
              >请<router-link to="/login">登录</router-link>
              <router-link to="/register" class="header-free-rejister"
                >免费注册</router-link
              >
            </span>
          </p>
        </div>
        <div class="header-top-right">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <h1>
        <router-link to="/">
          <img src="./images/logo.png" alt="尚品汇" />
        </router-link>
      </h1>
      <div class="header-search-area">
        <form class="header-seach-form" @submit.prevent="search">
          <input type="text" class="header-input" v-model="searchText" />
          <button class="header-search">搜索</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "", //搜索内容文本
    };
  },
  methods: {
    /**
     * 搜索功能函数
     */
    /* search() {
      const { searchText } = this;
      const params = searchText ? `/${searchText}` : "";
      const location = `/search${params}`;
      this.$router.push(location);
    }, */

    search() {
      const { searchText } = this;
      const location = {
        name: "search",
      };
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      const { categoryName } = this.$route.query;
      if (categoryName) {
        location.query = {
          ...this.$route.query,
        };
      }

      //判断是不是在search页面，在的话那就是replace跳转 不在的话就要用push跳转，否则会导致回退不到主页面

      //if(this.$route.path.indexOf("/search")>-1)
      //if(this.$route.path.includes("/search"))
      //if(this.$route.path.startWith("/search"))
      //if(/^\/search/.test(this.$route.path))
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
      // this.$router.push(
      //   location
      //   /* ,
      //   (res) => {
      //     console.log(res);
      //   },
      //   (err) => {
      //     console.log(err);
      //   } */
      // );
      /* .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        }); */
    },
  },
  watch: {
    //监听路径，如果是在主页，则去掉搜索框的文字
    $route() {
      if (this.$route.path === "/") {
        this.searchText = "";
      }
    },
  },
  mounted() {
    //全局事件总线 绑定清空搜索框文字事件
    this.$bus.$on("clearKeyword", () => {
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scoped>
.header-top-area {
  background-color: #eaeaea;
}
.header-top {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  height: 30px;
  line-height: 30px;
}
.header-top-left {
  display: flex;
}
.header-title {
  margin-right: 10px;
}
a {
  text-decoration: none;
  color: #666;
}
a:hover {
  color: rgb(79, 76, 212);
}
.header-free-rejister {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
  margin-left: 5px;
}
.header-top-right {
  a:nth-child(1) {
    border: none;
  }
  a {
    padding: 0 10px;
    border-left: 1px solid #b3aeae;
  }
}
.header-bottom {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
}
h1 {
  cursor: pointer;
}
.header-seach-form {
  display: flex;
  margin-top: 35px;
}
.header-input {
  box-sizing: border-box;
  width: 490px;
  height: 32px;
  padding: 0 4px;
  border: 2px solid #ea4a36;
}
.header-input:focus {
  outline: none;
}
.header-search {
  height: 32px;
  width: 68px;
  background-color: #ea4a36;
  color: #fff;
  border: none;
  cursor: pointer;
}
.header-search:focus {
  outline: none;
}
</style>
