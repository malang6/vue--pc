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
                  <li
                    :class="{
                      'sui-navbar-item': true,
                      active: options.order.indexOf('1') > -1,
                    }"
                    @click="setOrder('1')"
                  >
                    <a
                      >综合
                      <i
                        :class="{
                          iconfont: true,
                          'icon-jiantouarrow505': isAllDone,
                          'icon-jiantouarrow499': !isAllDone,
                        }"
                      ></i>
                    </a>
                  </li>
                  <li class="sui-navbar-item">
                    <a>销量</a>
                  </li>
                  <li class="sui-navbar-item">
                    <a>新品</a>
                  </li>
                  <li class="sui-navbar-item">
                    <a>评价</a>
                  </li>
                  <li
                    :class="{
                      'sui-navbar-item': true,
                      active: options.order.indexOf('2') > -1,
                    }"
                    @click="setOrder('2')"
                  >
                    <a>
                      价格
                      <span>
                        <i
                          :class="{
                            iconfont: true,
                            'icon-jiantou': true,
                            //当点击到价格时再去看给哪个箭头加未激活样式 deactive是未激活的样式 isPriceDone初始值是false
                            //indexOf('2')是看有没有2 有找到返回对应下标，没找到返回-1
                            deactive:
                              options.order.indexOf('2') > -1 && isPriceDone,
                          }"
                        ></i>
                        <i
                          :class="{
                            iconfont: true,
                            'icon-jiantouarrow486': true,
                            deactive:
                              options.order.indexOf('2') > -1 && !isPriceDone,
                          }"
                        ></i>
                      </span>
                    </a>
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
                      <router-link to="/addcartsuccess" class="sui-btn btn-red"
                        >加入购物车</router-link
                      >
                      <a href="###" class="sui-btn btn-bordered">收藏</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 分页 -->
            <!-- <div class="pagination">
              <button disabled>上一页</button>
              <button class="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>下一页</button>
              <button disabled>共 9 条</button>
            </div> -->
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="options.pageNo"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="5"
              layout=" prev, pager, next, total, sizes,jumper"
              :total="total"
            >
            </el-pagination>
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
        order: "1:desc", //排序 1 综合排序 2 价格排序 asc升序 desc降序
        pageNo: 1, //当前显示第几页
        pageSize: 5, //每页显示几条
        props: [], //商品属性
        trademark: "", //品牌
      },
      isAllDone: true, //控制综合方向
      isPriceDone: false, //控制价格箭头方向
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
    ...mapGetters(["goodsList", "total"]),
  },
  methods: {
    ...mapActions(["getProductionList"]),
    //更新商品列表
    updateProductList(pageNo = 1) {
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
        ...this.options, //先将初始的options展开，当下面的有值则直接覆盖
        keyword,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
        pageNo,
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
    //设置排序方式
    setOrder(order) {
      let [orderNum, orderType] = this.options.order.split(":");
      //第二次点击的时候，箭头方向才会改变
      if (order === orderNum) {
        if (order === "1") {
          this.isAllDone = !this.isAllDone; //改变综合的箭头方向
          orderType = this.isAllDone ? "desc" : "asc";
        } else {
          this.isPriceDone = !this.isPriceDone;
          orderType = this.isPriceDone ? "desc" : "asc";
        }
      } else {
        //当第一次点 综合 的时候，要保证orderType和箭头方向对应
        if (order === "1") {
          orderType = this.isAllDone ? "desc" : "asc";
        } else {
          this.isPriceDone = false; //保证第一次点到 价格 的时候，箭头都是向上的
          orderType = "asc";
        }
      }
      this.options.order = `${order}:${orderType}`;
      this.updateProductList();
    },
    //每页显示多少条
    handleSizeChange(pageSize) {
      this.options.pageSize = pageSize;
      this.updateProductList();
    },
    //显示哪一页
    handleCurrentChange(pageNo) {
      // console.log("pageNo", pageNo);
      this.updateProductList(pageNo);
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
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 11px 15px;
    color: #777;
    text-decoration: none;
    span {
      line-height: 8px;
      i {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
.active {
  a {
    background: #e1251b;
    color: #fff;
  }
}
.deactive {
  color: rgba(255, 255, 255, 0.5);
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
/* .pagination {
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
} */
</style>
