<template>
  <div class="categoryNav">
    <div class="category-area">
      <div class="category-contain">
        <h2>全部商品分类</h2>
        <div class="category-sort">
          <div class="category-sort-list">
            <!-- 一级分类 -->
            <div
              class="item"
              v-for="category in categoryList"
              :key="category.categoryId"
            >
              <h3>
                <a href="###" class="category-one">{{
                  category.categoryName
                }}</a>
              </h3>
              <div class="item-list">
                <div class="subitem">
                  <!-- 二级分类 -->
                  <dl
                    v-for="child in category.categoryChild"
                    :key="child.categoryId"
                  >
                    <dt>
                      <a href="###">{{ child.categoryName }}</a>
                    </dt>
                    <dd>
                      <!-- 三级分类 -->
                      <em
                        v-for="grandChild in child.categoryChild"
                        :key="grandChild.categoryId"
                      >
                        <a href="###">{{ grandChild.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
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
import { reqGetBaseCategoryList } from "@api/home";
export default {
  name: "CategoryNav",
  data() {
    return {
      categoryList: [],
    };
  },
  async mounted() {
    const result = await reqGetBaseCategoryList();
    this.categoryList = result.slice(0, 15);
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
</style>
