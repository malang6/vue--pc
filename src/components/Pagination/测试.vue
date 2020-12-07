<template>
  <div class="pagination">
    <button
      @click="myCurrentPage = myCurrentPage - 1"
      :disabled="myCurrentPage === 1"
    >
      上一页
    </button>
    <button
      :class="{ active: myCurrentPage === 1 }"
      @click="changeCurrentPage(1)"
    >
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="btn in mapBtnCount"
      :key="btn"
      :class="{ active: myCurrentPage === startEnd.start + btn - 1 }"
      @click="changeCurrentPage(startEnd.start + btn - 1)"
    >
      {{ startEnd.start + btn - 1 }}
    </button>
    <button v-show="startEnd.end < totalPage - 1">...</button>
    <button
      :class="{ active: myCurrentPage === totalPage }"
      @click="changeCurrentPage(totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      @click="myCurrentPage >= myCurrentPage + 1"
      :disabled="myCurrentPage === totalPage"
    >
      下一页
    </button>
    <button disabled>共 10 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  // current-page props传递的是会自动将属性名都转化为小驼峰命名，使用的时候既可以使用传的时候带下划线的 current-page 也可以用小驼峰
  props: {
    //当前的页码
    currentPage: {
      type: Number,
      default: 1,
    },
    //每页显示几条
    pageSize: {
      type: Number,
      default: 5,
    },
    //页码按钮数量
    pagerCount: {
      type: Number,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    //总数
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      myCurrentPage: this.currentPage,
    };
  },
  computed: {
    //总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    //计算开始结束
    startEnd() {
      const { myCurrentPage, pagerCount, totalPage } = this;
      const count = pagerCount - 2;
      const halfCount = Math.floor(count / 2);
      let start, end;
      if (myCurrentPage >= totalPage - halfCount) {
        start = totalPage - count;
      } else {
        start = myCurrentPage - halfCount;
      }
      if (start <= 1) {
        start = 2;
      }

      end = start + count - 1;

      if (end >= totalPage) {
        end = totalPage - 1;
      }
      return {
        start,
        end,
      };
    },
    //button按钮数量
    mapBtnCount() {
      const { start, end } = this.startEnd;
      let count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    changeCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  align-items: center;
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
  background-color: #409eff;
  color: #fff;
}
span {
  font-size: 14px;
  margin-left: 10px;
  color: #606266;
}
input {
  width: 35px;
  outline: none;
  color: #606266;
  text-align: center;
}
</style>
