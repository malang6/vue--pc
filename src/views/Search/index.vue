<template>
  <div class="search">
    <div class="search-area">
      <TypeNav />
      <div class="main">
        <div class="py-container">
          <!-- 已选择的商品类型 -->
          <div class="bread">
            <ul class="all-res">
              <li>
                <a href="###">全部结果</a>
              </li>
            </ul>
            <ul class="sui-tag">
              <li class="with-x" v-show="options.keyword" @click="delKeyword">
                关键字：{{ options.keyword }}
                <i class="with-x-i">x</i>
              </li>

              <li
                class="with-x"
                v-show="options.categoryName"
                @click="delCategoryName"
              >
                分类：{{ options.categoryName }}
                <i class="with-x-i">x</i>
              </li>

              <li
                class="with-x"
                v-show="options.trademark"
                @click="delTrademark"
              >
                品牌：{{ options.trademark.split(":")[1] }}
                <i class="with-x-i">x</i>
              </li>

              <li
                class="with-x"
                v-for="(prop, index) in options.props"
                :key="prop"
                @click="delProp(index)"
              >
                {{ prop.split(":")[2] }}：{{ prop.split(":")[1] }}
                <i class="with-x-i">x</i>
              </li>
            </ul>
          </div>

          <!-- 选择商品类型  -->
          <SearchType :addBrand="addBrand" @add-prop="addProp" />

          <!-- 商品详情 -->
          <div class="details">
            <div class="sui-navbar">
              <div class="sui-navbar-inner">
                <ul class="sui-navbar-list">
                  <li class="sui-navbar-item active">
                    <a href="###"
                      >综合
                      <i class="iconfont icondown"></i>
                    </a>
                  </li>
                  <li class="sui-navbar-item">
                    <a href="###">销量</a>
                  </li>
                  <li class="sui-navbar-item">
                    <a href="###">新品</a>
                  </li>
                  <li class="sui-navbar-item">
                    <a href="###">评价⬆</a>
                  </li>
                  <li class="sui-navbar-item">
                    <a href="###">价格⬇</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 商品列表 -->
            <div class="goods-list">
              <ul class="g-list">
                <li
                  class="g-list-item"
                  v-for="goods in goodsList"
                  :key="goods.id"
                >
                  <div class="list-wapper">
                    <!-- 商品图片 -->
                    <div class="g-img">
                      <a href="###">
                        <img :src="goods.defaultImg" class="img" />
                      </a>
                    </div>
                    <!-- 商品价格 -->
                    <div class="price">
                      <strong>
                        <i>￥{{ goods.price }}</i>
                      </strong>
                    </div>
                    <!-- 商品描述 -->
                    <div class="attr">
                      <a href="###">{{ goods.title }}</a>
                    </div>
                    <!-- 商品评价 -->
                    <div class="commit">
                      <i>
                        已有
                        <span>2000</span>
                        人评价
                      </i>
                    </div>
                    <!-- 加入购物车 -->
                    <div class="operate">
                      <a href="###" class="sui-btn btn-red">加入购物车</a>
                      <a href="###" class="sui-btn btn-bordered">收藏</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 分页 -->
            <div class="pagination">
              <button disabled>上一页</button>
              <button class="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>下一页</button>
              <button disabled>共 9 条</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchType from "./SearchType";
import TypeNav from "@comps/TypeNav";
export default {
  name: "Search",
  data() {
    return {
      options: {
        category1Id: "", //一级分类Id
        category2Id: "", //二级分类Id
        category3Id: "", //三级分类Id
        categoryName: "", //分类名称
        keyword: "", //搜索内容（搜索关键字）
        order: "", //排序 1 综合排序 2 价格排序 asc升序 desc降序
        pageNo: 1,
        pageSize: 5,
        props: [], //商品属性
        trademark: "", //品牌
      },
    };
  },
  components: {
    TypeNav,
    SearchType,
  },
  watch: {
    //监听路径，当搜索内容变了之后，重新更新并发请求
    $route() {
      this.updateProductList();
    },
  },
  computed: {
    ...mapGetters(["goodsList"]),
  },
  methods: {
    ...mapActions(["getProductionList"]),
    updateProductList() {
      //先解构赋值 将searchText 从 this.$route.params中解构出来
      //searchText: keyword 这是将解构出来的searchText重命名为keyword
      const { searchText: keyword } = this.$route.params;
      const {
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      } = this.$route.query;
      // const options={
      //直接修改数据并更新状态
      this.options = {
        ...this.options,
        keyword,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      };

      //更新状态数据
      // this.options = options;

      //发请求
      this.getProductionList(this.options);
    },
    //删除关键字
    delKeyword() {
      this.options.keyword = "";
      this.$bus.$emit("clearKeyword");
      //要改变路径的params 就要重新跳转 直接this.$route.params={}这样不行，因为$route是只读的 不允许修改
      this.$router.replace({
        name: "search",
        query: this.$route.query,
      });
    },
    //删除分类
    delCategoryName() {
      this.options.categoryName = "";
      this.$router.replace({
        name: "search",
        params: this.$route.params,
      });
    },
    //添加品牌并更新数据
    addBrand(trademark) {
      this.options.trademark = trademark;
      this.updateProductList();
    },
    //删除品牌并更新数据
    delTrademark() {
      this.options.trademark = "";
      this.updateProductList();
    },
    //添加商品属性并更新数据
    addProp(prop) {
      this.options.props.push(prop);
      this.updateProductList();
    },
    //删除商品属性并更新数据
    delProp(index) {
      this.options.props.splice(index, 1);
      this.updateProductList();
    },
  },
  mounted() {
    this.updateProductList();
  },
};
</script>

<style lang="less" scoped>
.main {
  margin-top: 10px;
}
.py-container {
  width: 1200px;
  margin: 0 auto;
}
.bread {
  display: flex;
  margin-bottom: 5px;
  overflow: hidden;
}
.all-res {
  padding: 3px 15px;
  border-radius: 3px;
}
.with-x {
  font-size: 12px;
  margin: 0 5px 5px 0;
  display: inline-block;
  color: #000;
  background: #f7f7f7;
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #dedede;
  white-space: nowrap;
  transition: color 400ms;
  cursor: pointer;
}
.with-x:hover {
  color: #28a3ef;
}
.with-x-i {
  margin-left: 10px;
  font-size: 14px;
  height: 100%;
  vertical-align: top;
}
.details {
  margin-bottom: 5px;
}
.sui-navbar-list {
  position: relative;
  left: 0;
  display: block;
  margin: 0 10px 0 0;
  display: flex;
}
.sui-navbar-item {
  line-height: 18px;
  a {
    display: block;
    cursor: pointer;
    padding: 11px 15px;
    color: #777;
    text-decoration: none;
  }
  a:hover {
    color: rgb(79, 76, 212);
  }
}
.active {
  a {
    background: #e1251b;
    color: #fff;
  }
}
.sui-navbar-inner {
  min-height: 40px;
  padding-right: 20px;
  background: #fbfbfb;
  border: 1px solid #e2e2e2;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
}
.goods-list {
  margin: 20px 0;
}
.g-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 15px;
}
.g-list-item {
  width: 220px;
  // height: 399px;
  margin-top: 10px;
  line-height: 28px;
  padding-left: 15px;
}
.g-img {
  width: 215px;
  height: 255px;
}
.img {
  width: 215px;
  height: 215px;
  vertical-align: middle;
  transition: all 0.5s;
}
.img:hover {
  transform: scale(1.05);
  opacity: 0.8;
}
.price {
  font-size: 18px;
  color: #c81623;
  strong {
    i {
      margin-left: -5px;
    }
  }
}
.attr {
  width: 85%;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  a {
    color: #333;
  }
}
.commit {
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
  span {
    font-weight: bold;
    color: #646fb0;
  }
}
.operate {
  padding: 12px 15px 12px 0;
}
.sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0;
  background-color: transparent;
  margin-right: 15px;
}
.btn-red {
  border: 1px solid #e1251b;
  color: #e1251b;
}
.btn-red:hover {
  border: 1px solid #e1251b;
  background-color: #e1251b;
  color: white;
}
.btn-bordered {
  min-width: 85px;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
}
.btn-bordered:hover {
  border: 1px solid #666;
  color: #fff;
  background-color: #666;
}
a:hover {
  color: rgb(79, 76, 212);
}
.pagination {
  height: 28px;
}
button {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  outline: none;
  border-radius: 2px;
  padding: 0 4px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border: 0;
}
button[disabled] {
  color: #c0c4cc;
  cursor: not-allowed;
}
button.active {
  cursor: not-allowed;
  background-color: #409eff;
  color: #fff;
}
</style>
