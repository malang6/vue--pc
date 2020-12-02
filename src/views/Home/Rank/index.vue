<template>
  <div class="rank">
    <div class="rank-area">
      <div class="rank-nav">
        <div class="rank-nav-div">
          <a href="###" class="tab-tit">
            <i class="i-img on"></i>
            <p>热卖排行</p>
          </a>
        </div>
        <div class="rank-nav-div">
          <a href="###" class="tab-tit">
            <i class="i-img"></i>
            <p>特价排行</p>
          </a>
        </div>
        <div class="rank-nav-div">
          <a href="###" class="tab-tit">
            <i class="i-img"></i>
            <p>新品排行</p>
          </a>
        </div>
      </div>
      <div>
        <ul class="rank-list">
          <li>
            <div class="img-item">
              <p class="tab-pic">
                <a href="###"> <img src="./images/1.jpg" /> </a>
              </p>

              <div class="tab-info">
                <div class="info-title">
                  <a href="###"
                    >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                    移动联通电信4G手机</a
                  >
                </div>
                <p class="info-price">定金：¥100.00</p>
              </div>
            </div>
          </li>
          <li>
            <div class="img-item">
              <p class="tab-pic">
                <a href="###"> <img src="./images/1.jpg" /> </a>
              </p>

              <div class="tab-info">
                <div class="info-title">
                  <a href="###"
                    >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                    移动联通电信4G手机</a
                  >
                </div>
                <p class="info-price">定金：¥100.00</p>
              </div>
            </div>
          </li>
          <li>
            <div class="img-item">
              <p class="tab-pic">
                <a href="###"> <img src="./images/1.jpg" /> </a>
              </p>

              <div class="tab-info">
                <div class="info-title">
                  <a href="###"
                    >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                    移动联通电信4G手机</a
                  >
                </div>
                <p class="info-price">定金：¥100.00</p>
              </div>
            </div>
          </li>
          <li>
            <div class="img-item">
              <p class="tab-pic">
                <a href="###"> <img src="./images/1.jpg" /> </a>
              </p>

              <div class="tab-info">
                <div class="info-title">
                  <a href="###"
                    >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                    移动联通电信4G手机</a
                  >
                </div>
                <p class="info-price">定金：¥100.00</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rank",
};
</script>

<style lang="less" scoped>
.rank {
  width: 100%;
}
.rank-area {
  width: 1200px;
  margin: 0 auto;
}
.rank-nav {
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  width: 312px;
}
.tab-tit {
  display: block;
  padding: 0 18px;
  text-decoration: none;
  font-size: 16px;
}
.tab-tit {
  p {
    margin: 5px 0;
    line-height: 28px;
  }
}
.i-img {
  width: 35px;
  height: 35px;
  display: block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAjCAYAAAApF3xtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzM0MzQwRjE3RDMzMTFFOTkzMTU5RjZEREI3OEZBNDIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzM0MzQwRjA3RDMzMTFFOTkzMTU5RjZEREI3OEZBNDIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTlCNEE0N0Y3RDMzMTFFOTlEODBCNEMwRDM2QThEMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTlCNEE0ODA3RDMzMTFFOTlEODBCNEMwRDM2QThEMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5W9squAAAD/UlEQVR42uxabYgNURieO+6ur8WqRbvlq+ubyB+tr4w/iPIR1kfaVtH6Je4PfilkU9REfvhDlNQi8pE/iEkpRO1qW5ZuLUp2l7AbxbZ7PWfve9fZszNzz5k7H4q3ns7Me87MPPOcd86858zE0um09t/6WzzfE6RSKZXmw4EzwGagmzkSiUR+BJKGl6P+8DCtbrsGeoCijwbGcPuFwCVgI7A4xM73xCMoYZYCdcB0rocYmRW0vywkUTzziHt8fGJ0sVlAGTAMaAdageVAJRCj+jXANqCEO8VsX247aQTGI64oyBwU1cB6CtFcdsrBX5qnIIHziEsKMhaFCWzwKcQL6dpdQFpBEP95JI0MD9NKK40xEIWRaPCRDLMBwEVgroIoofLQc4iyF8UVGrT8tBlABT37MqKEzkN3EWUHhW2QNkpClEh46A6izENxOoTXqZ5DlMh46DaiFKA470dWLGGvXUSJlIddj+3kEqIg7QvwwKU+Uh66EC1sf19IWWkb0OEQLZHzECNmCTA+JEJTgAUOdZHzEIVZFfLsfqWDP3IeojDzqbwLTAROCvVbyM+H3h06jmWzg2mCVk911dTeDh3c9bS/jYduE1bMfiQSiWaUX4X6j+TPrmFcJrXfANspK7WARUAjJU4GTdaa6Q1jENj2NJfw7uGBVN2WB/kD4yG+CksUwu8XsBsYBDwGJpF/LRHbD9wiH+u5m0T0nEQeEzmPXDnCK+AGt/+J236C6GnBm6yCI6PRjHckcI961C2JGyh58648gBZK7X3jEbdRvzC7gxuvRVHrcLJ3VI5zmM430vM7woXQN5co6OWBxyZ0HqIwb4HJXF5ThaKKq98DseqEcP9gcyHWg0MkJn3vHfx9eCCv6ccDYgXKQxSmvg8hTZtAOUXWirntcghXhPI2kSojPwv5z8A6Wj1zsxcOfiUegO88xOfugcKgx0LzMIVhOQ1yu4CtVHdU4hz3HfyR8xCFuUoDVQGioZhGet6KyJ/tAbZOcpYi75iW+STBssiHwFRhQaiYwjprncB1B6K9PPAY2fIgf2A8YuIHN9w4G+Q2ecgev9OAWSDZ/gJQ6fhdKWmEx8O0KmVm10e0zFqsqg1VIMN6qSZHm0h59BMGPdgQwooZC/cm1xamFQ4P02pSWUE7ADwLiMwj4JBk28h42AqDqPlJM9yUz2Re0uuzU6q1aUXGwzFNhjitNLI/94nMU8pF2pSOMq1IeLguRpM4C4ET3ExW1dgAelzLfEBv83SGjDih8ojJ/h9Dn2cPAqs1uZ8BuigfqXHJcNV/A8l8nvWPh2nlJwwnUCnNXNlaxkyaqLG5SDul5A20FnKtZ90kh3n+PyZp+MPDL2H+FfstwABG8V5BZ1YwvgAAAABJRU5ErkJggg==);
  margin-left: 10px;
}
.on {
  background-position: -35px 0;
}
.rank-list {
  display: flex;
  padding: 10px;
}
.img-item {
  width: 269px;
  margin: 0 12px 10px;
  border: 1px solid #e1251b;
}
.tab-pic {
  width: 230px;
  height: 210px;
  text-align: center;
  margin: 5px auto 18px;
}
img {
  width: 200px;
  height: 200px;
}
.info-title {
  height: 50px;
  line-height: 28px;
  margin: 0 auto;
  padding-left: 10px;
}
.info-price {
  font-size: 20px;
  color: #e1251b;
  height: 35px;
  padding-left: 10px;
  line-height: 24px;
  margin: 10px auto 0;
}
</style>
