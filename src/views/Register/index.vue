<template>
  <div class="register">
    <div class="register-area">
      <h3>
        注册新用户
        <span class="rigister-text"
          >我有账号，去<router-link to="/login" class="register-login">
            登陆</router-link
          >
        </span>
      </h3>
      <div class="register-content">
        <label>手机号:</label>
        <input type="text" placeholder="请输入你的手机号" />
        <span class="error-mag"></span>
      </div>
      <div class="register-content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" />
        <img src="" alt="code" />
        <span class="error-mag"></span>
      </div>
      <div class="register-content">
        <label>登录密码:</label>
        <input type="text" placeholder="请输入你的登录密码" />
        <span class="error-mag"></span>
      </div>
      <div class="register-content">
        <label>确认密码:</label>
        <input type="text" placeholder="请输入确认密码" />
        <span class="error-mag"></span>
      </div>
      <div class="register-control">
        <input type="checkbox" class="agree" />
        <span>同意协议并注册《尚品汇用户协议》</span>
      </div>
      <div class="register-btn">
        <button type="submit">完成注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less" scoped>
.register {
  height: 487px;
}
.register-area {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
}
h3 {
  font-size: 20px;
  line-height: 30px;
  padding: 6px 15px;
  background-color: #ececec;
}
.rigister-text {
  font-size: 14px;
  float: right;
}
.register-login {
  color: #e1251b;
}
.register-content {
  padding-left: 390px;
  margin-bottom: 18px;
  position: relative;
}
.register-content:first-of-type {
  margin-top: 40px;
}
label {
  font-size: 14px;
  width: 96px;
  text-align: right;
  display: inline-block;
}
input:not(.agree) {
  width: 270px;
  height: 38px;
  padding-left: 8px;
  box-sizing: border-box;
  margin-left: 5px;
  outline: none;
  border: 1px solid #999;
}
.register-control {
  text-align: center;
}
.agree {
  vertical-align: middle;
}
.register-btn {
  text-align: center;
  line-height: 36px;
  margin: 17px 0 0 55px;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
  width: 270px;
  height: 36px;
  background: #e1251b;
  color: #fff !important;
  display: inline-block;
  font-size: 16px;
}
</style>
