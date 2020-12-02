<template>
  <!-- 选择商品类型 -->
  <div class="seletor">
    <div class="type-wrap logo">
      <div class="brand key">品牌</div>
      <div class="logo-list value">
        <ul class="logo-list-item">
          <li
            class="logo-item"
            v-for="trademark in trademarkList"
            :key="trademark.tmId"
            @click="addBrand(`${trademark.tmId}:${trademark.tmName}`)"
          >
            {{ trademark.tmName }}
          </li>
        </ul>
      </div>
      <div class="ext">
        <a href="###" class="sui-btn">多选</a>
        <a href="###">更多</a>
      </div>
    </div>

    <div class="type-wrap tlist">
      <div class="key">杨帅</div>
      <div class="value">
        <ul class="type-list">
          <li class="type-list-item">
            <a>听得懂尘土飞扬规划</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="type-wrap tlist" v-for="attrs in attrsList" :key="attrs.attrId">
      <div class="key">{{ attrs.attrName }}</div>
      <div class="value">
        <ul class="type-list">
          <li
            class="type-list-item"
            v-for="(attrValue, index) in attrs.attrValueList"
            :key="index"
            @click="$emit('add-prop',`${attrs.attrId}:${attrValue}:${attrs.attrName}`)"
          >
            <a>{{ attrValue }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchType",
  props: {
    addBrand: Function,
  },
  computed: {
    ...mapGetters(["trademarkList", "attrsList"]),
  },
};
</script>

<style lang="less" scoped>
.key {
  width: 100px;
  background: #f1f1f1;
  line-height: 26px;
  text-align: right;
  padding: 10px 10px 0 15px;
}
.value {
  width: 100%;
  overflow: hidden;
  padding: 10px 90px 0 15px;
  color: #333;
}
a:hover {
  color: rgb(79, 76, 212);
}
.seletor {
  border: 1px solid #ddd;
  margin-bottom: 5px;
}
.type-wrap {
  margin: 0;
  position: relative;
  border-top: 1px solid #ddd;
}
.logo {
  display: flex;
}
.brand {
  padding-bottom: 87px;
}
.logo-list-item {
  display: flex;
}
.logo-item {
  border: 1px solid #e4e4e4;
  margin: -1px -1px 0 0;
  width: 105px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  color: #e1251b;
  font-style: italic;
  font-size: 14px;
}
.ext {
  position: absolute;
  top: 10px;
  right: 10px;
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
  padding: 0 10px;
  background: #fff;
  border: 1px solid #d5d5d5;
}
.tlist {
  display: flex;
}
.type-list {
  display: flex;
}
.type-list-item {
  margin-right: 30px;
  line-height: 26px;
}
</style>
