<template>
  <div class="categoryNav">
    <div class="category-area" @click="goSearch">
      <div class="category-contain">
        <div
          @mouseenter="isSearchShow = true"
          @mouseleave="isSearchShow = false"
        >
          <h2>全部商品分类</h2>
          <!-- 给显示隐藏添加过渡效果-->
          <transition name="search">
            <div class="category-sort" v-show="isHomeShow || isSearchShow">
              <div class="category-sort-list">
                <!-- 一级分类 -->
                <div
                  class="item"
                  v-for="category in categoryList"
                  :key="category.categoryId"
                >
                  <h3>
                    <a
                      class="category-one"
                      :data-categoryName="category.categoryName"
                      :data-categoryId="category.categoryId"
                      data-categoryType="1"
                      >{{ category.categoryName }}</a
                    >
                  </h3>
                  <div class="item-list">
                    <div class="subitem">
                      <!-- 二级分类 -->
                      <dl
                        v-for="child in category.categoryChild"
                        :key="child.categoryId"
                      >
                        <dt>
                          <a
                            :data-categoryName="child.categoryName"
                            :data-categoryId="child.categoryId"
                            data-categoryType="2"
                            >{{ child.categoryName }}</a
                          >
                        </dt>
                        <dd>
                          <!-- 三级分类 -->
                          <em
                            v-for="grandChild in child.categoryChild"
                            :key="grandChild.categoryId"
                          >
                            <a
                              :data-categoryName="grandChild.categoryName"
                              :data-categoryId="grandChild.categoryId"
                              data-categoryType="3"
                              >{{ grandChild.categoryName }}</a
                            >
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <nav class="categoryNav-nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "CategoryNav",
  data() {
    return {
      isHomeShow: this.$route.path === "/", //控制home组件中 三级分类显示
      isSearchShow: false, //控制search组件中，三级分类的显示隐藏
    };
  },
  computed: {
    // 当使用vuex模块化，这种方式就不行了
    // ...mapState(["testCount", "categoryList"]),
    // ...mapState(["testCount", "home"]), // 这种方式可以，需要使用 this.home.categoryList。太麻烦

    ...mapState({
      // 对象中的数据，就会传递给组件

      // categoryList就是组件能接受到的数据
      // 它的值是一个函数，函数内部会调用得到值
      // 调用时会将所有vuex数据传递进去，就是state
      categoryList: (state) => state.home.categoryList,
      // testCount: (state) => state.testCount, (总state的状态数据)
    }),
  },
  methods: {
    // 函数直接写
    // 注意：将来action函数名称和mutation函数名称不要重复
    ...mapActions(["getCategoryList"]),

    goSearch(e) {
      // console.log(e.target.dataset);
      const { categoryname, categoryid, categorytype } = e.target.dataset;
      //当前点击的如果不是a标签，则不跳转。因为a标签上有categoryname 所以可以通过有没有这个值来判断，没有就直接return，不进行跳转
      if (!categoryname) return;
      const location = {
        name: "search", //命名路由
        query: {
          categoryName: categoryname,
          [`category${categorytype}Id`]: categoryid,
        },
      };
      const { searchText } = this.$route.params;
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
      // this.$router.push(location);
    },
  },
  mounted() {
    //判断categoryList存在，并且长度不为0.如果存在表示已经发过请求了，就不用再去重复发请求。
    // 减少请求次数
    if (this.categoryList.length) return;
    // 调用vuex的action函数
    this.getCategoryList();
  },
};
</script>

<style lang="less" scoped>
.category-area {
  border-bottom: 2px solid #e1251b;
}
.category-contain {
  position: relative;
  display: flex;
  width: 1200px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
}
h2 {
  width: 210px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: #e1251b;
}
.categoryNav-nav {
  a {
    margin: 0 22px;
    font-size: 16px;
    color: #333;
  }
}
.category-sort {
  position: absolute;
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  background-color: #fafafa;
  z-index: 99;
}
h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
}
.category-one {
  color: #333;
}
a:hover {
  cursor: pointer;
  color: rgb(79, 76, 212);
}
.item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 10;
}
.item:hover {
  background-color: #ccc;
}
.item:hover .item-list {
  display: block;
}
.subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
dl {
  padding: 6px 0;
  overflow: hidden;
  margin: 0;
}
dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
.search-enter {
  height: 0;
}
.search-enter-active {
  transition: height 0.5s;
  overflow: hidden;
}
</style>
