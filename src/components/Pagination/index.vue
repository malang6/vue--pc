<template>
  <div class="pagination">
    <button
      :disabled="myCurrentPage === 1"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button :class="{ active: myCurrentPage === 1 }" @click="setCurrentPage(1)">
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in mapBtnCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <button
      v-show="totalPages > 1"
      @click="setCurrentPage(totalPages)"
      :class="{ active: myCurrentPage === totalPages }"
    >
      {{ totalPages }}
    </button>
    <button
      :disabled="myCurrentPage === totalPages"
      @click="setCurrentPage(myCurrentPage + 1)"
    >
      下一页
    </button>
    <button disabled>共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
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
    //页码数量
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
      //为了方便修改myCurrentPage，定义data数据
      //原因：props数据是只读的
      myCurrentPage: this.currentPage,
    };
  },
  computed: {
    //总页数
    totalPages() {
      // 向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    //计算中间按钮的开始和结束的按钮值
    startEnd() {
      // 收集所有参与计算的参数
      const { myCurrentPage, pagerCount, totalPages } = this;
      let start, end;
      //中间页码显示数量 总显示的页码数pagerCount减去两头固定的两个
      const count = pagerCount - 2;
      const halfCount = Math.floor(count / 2);
      if (myCurrentPage >= totalPages - halfCount) {
        // 1 ... 5 6 7 8 [9] 10
        start = totalPages - count;
      } else {
        // 正常情况
        start = myCurrentPage - halfCount;
      }

      if (start <= 1) {
        // 1 [2] 3 4 5 6 ...10
        start = 2;
      }
      // 正常情况
      end = start + count - 1;

      if (end >= totalPages) {
        // 1 [2] 3
        end = totalPages - 1;
      }

      // 返回计算结果
      return {
        start,
        end,
      };
    },

    //计算遍历button的数量
    mapBtnCount() {
      const { start, end } = this.startEnd;
      const count = end - start + 1;
      return count > 1 ? count : 0;
    },
  },
  watch: {
    // 让每次页码发生变化加载新数据
    myCurrentPage(pageNo) {
      this.$emit("current-change", pageNo);
      //   this.$listeners["current-change"](pageNo);
    },
    // 当外面页面发生变化，里面页面也要变化
    currentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
  methods: {
    //设置当前页码
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
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
  //   cursor: not-allowed;
  background-color: #409eff;
  color: #fff;
}
</style>
