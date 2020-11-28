<template>
  <div class="like">
    <div class="like-area">
      <div class="like-text">
        <h3>猜你喜欢</h3>
        <p class="like-change">
          <a href="###" class="fr">换一换</a>
        </p>
      </div>
      <div>
        <ul class="like-list">
          <li class="like-item">
            <p class="like-info-pic">
              <a href="###"> <img src="./images/like_01.png" /> </a>
            </p>
            <div class="like-info">
              <div class="like-info-title">
                <a href="###">阳光美包新款单肩包女包时尚子母包四件套女</a>
              </div>
              <p class="like-info-price">¥116.00</p>
            </div>
          </li>
          <li class="like-item">
            <p class="like-info-pic">
              <a href="###"> <img src="./images/like_02.png" /> </a>
            </p>
            <div class="like-info">
              <div class="like-info-title">
                <a href="###">阳光美包新款单肩包女包时尚子母包四件套女</a>
              </div>
              <p class="like-info-price">¥116.00</p>
            </div>
          </li>
          <li class="like-item">
            <p class="like-info-pic">
              <a href="###"> <img src="./images/like_03.png" /> </a>
            </p>
            <div class="like-info">
              <div class="like-info-title">
                <a href="###">阳光美包新款单肩包女包时尚子母包四件套女</a>
              </div>
              <p class="like-info-price">¥116.00</p>
            </div>
          </li>
          <li class="like-item">
            <p class="like-info-pic">
              <a href="###"> <img src="./images/like_01.png" /> </a>
            </p>
            <div class="like-info">
              <div class="like-info-title">
                <a href="###">阳光美包新款单肩包女包时尚子母包四件套女</a>
              </div>
              <p class="like-info-price">¥116.00</p>
            </div>
          </li>
          <li class="like-item">
            <p class="like-info-pic">
              <a href="###"> <img src="./images/like_02.png" /> </a>
            </p>
            <div class="like-info">
              <div class="like-info-title">
                <a href="###">阳光美包新款单肩包女包时尚子母包四件套女</a>
              </div>
              <p class="like-info-price">¥116.00</p>
            </div>
          </li>
          <li class="like-item">
            <p class="like-info-pic">
              <a href="###"> <img src="./images/like_03.png" /> </a>
            </p>
            <div class="like-info">
              <div class="like-info-title">
                <a href="###">阳光美包新款单肩包女包时尚子母包四件套女</a>
              </div>
              <p class="like-info-price">¥116.00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Like",
};
</script>

<style lang="less" scoped>
.like {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;
}
.like-area {
  width: 1200px;
  margin: 0 auto;
}
.like-text {
  display: flex;
  justify-content: space-between;
}
h3 {
  font-size: 20px;
  line-height: 30px;
}
.fr {
  background-image: url("./images/icons.png");
  display: inline-block;
  width: 66px;
  height: 25px;
  background-position: 182px -104px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 400;
  color: #666;
  text-decoration: none;
}
.like-list {
  border: 1px solid #e4e4e4;
  overflow: hidden;
  padding: 0 10px;
  //   box-sizing: border-box;
  display: flex;
}
.like-item {
  height: 250px;
  margin: 0 -1px;
  overflow: hidden;
  background: #fff;
  position: relative;
  width: 16.667%;
  padding: 0 20px;
}
.like-info {
  padding: 0;
  width: 142px;
  border-right: 1px solid #e4e4e4;
}
.like-info-title {
  margin: 5px 0;
}
.like-info-price {
  color: #df3033;
  font-size: 20px;
  line-height: 30px;
  margin: 9px 0;
  font-weight: 700;
}
img {
  transition: all 400ms;
}
img:hover {
  opacity: 0.8;
  transform: scale(1.1);
}
</style>
