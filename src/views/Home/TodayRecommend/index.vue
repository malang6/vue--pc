<template>
  <div class="today_recommend">
    <ul class="today_recommend-list">
      <li class="clock">
        <div class="time">
          <img src="./images/clock.png" />
          <h3>今日推荐</h3>
        </div>
      </li>
      <li>
        <img src="./images/today01.png" />
      </li>
      <li>
        <img src="./images/today02.png" />
      </li>
      <li>
        <img src="./images/today03.png" />
      </li>
      <li>
        <img src="./images/today04.png" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodayRecommend",
};
</script>

<style lang="less" scoped>
.today_recommend {
  width: 100%;
}
.today_recommend-list {
  display: flex;
  width: 1200px;
  margin: 0 auto;
}
.clock {
  width: 16.67%;
  background-color: #5c5251;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.time {
  padding: 30px 0;
}
h3 {
  margin: 9px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
}
</style>
