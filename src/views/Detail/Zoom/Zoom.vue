<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" @mousemove="maskMove" ref="event"></div>
    <div class="big">
      <img
        :src="imgUrl"
        :style="{ left: -2 * moveL + 'px', top: -2 * moveT + 'px' }"
      />
    </div>
    <div
      class="mask"
      ref="mask"
      :style="{ left: moveL + 'px', top: moveT + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      imgUrl: "",
      moveL: 0,
      moveT: 0,
    };
  },
  methods: {
    maskMove(e) {
      //获取鼠标距离元素边缘的距离
      let { offsetL, offsetT } = { offsetL: e.offsetX, offsetT: e.offsetY };
      //获取event元素的宽高
      let { offsetW, offsetH } = {
        offsetW: this.$refs.event.offsetWidth / 2,
        offsetH: this.$refs.event.offsetHeight / 2,
      };
      //获取mask蒙版的宽高
      let { maskOffsetW, maskOffsetH } = {
        maskOffsetW: this.$refs.mask.offsetWidth / 2,
        maskOffsetH: this.$refs.mask.offsetHeight / 2,
      };
      //计算蒙版的偏移距离  
      let { moveL, moveT } = {
        moveL: offsetL - maskOffsetW,
        moveT: offsetT - maskOffsetH,
      };
      //边界条件
      if (moveL > offsetW) {
        moveL = offsetW;
      } else if (moveL < 0) {
        moveL = 0;
      }
      if (moveT > offsetH) {
        moveT = offsetH;
      } else if (moveT < 0) {
        moveT = 0;
      }
      
      this.moveL = moveL;
      this.moveT = moveT;
    },
  },
  mounted() {
    this.$bus.$on("getImgUrl", (imgUrl) => (this.imgUrl = imgUrl));
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>