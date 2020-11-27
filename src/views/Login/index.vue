<template>
  <div class="login">
    <div class="login-area">
      <div class="login-img"></div>
      <div class="login-form-area">
        <div class="login-form">
          <ul class="login-form-top">
            <li>
              <a href="###" class="scanlogin">扫描登录</a>
            </li>
            <li>
              <a href="###" class="scanlogin current">账户登录</a>
            </li>
          </ul>
          <div class="login-form-bottom clearfix">
            <form>
              <div class="login-phone">
                <i class="icon-phone"></i>
                <input
                  type="text"
                  placeholder="手机号"
                  class="login-input login-input-phone"
                />
              </div>
              <div class="login-password">
                <i class="icon-password"></i>
                <input
                  type="password"
                  placeholder="请输入密码"
                  class="login-input login-input-password"
                />
              </div>
              <div class="login-setting">
                <label>
                  <input type="checkbox" checked />
                  自动登录
                </label>
                <span>忘记密码？</span>
              </div>
              <button type="submit">登 录</button>
              <div class="login-register">
                <router-link to="/register">立即注册</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="less" scoped>
.login {
  height: 487px;
  background-color: #e93854;
}
.login-area {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.login-img {
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background: url("./images/loginbg.png") no-repeat;
}
.login-form-area {
  width: 420px;
  height: 406px;
  position: absolute;
  right: 0;
  top: 45px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #fff;
}
.login-form-top {
  display: flex;
}
li {
  width: 380px;
  text-align: center;
}
.scanlogin {
  width: 100%;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-decoration: none;
}
.current {
  border-bottom: none;
  border-top-color: #28a3ef;
  color: #e1251b;
}
a:hover {
  color: rgb(79, 76, 212);
}
form {
  margin: 15px 0 18px 0;
}
.login-form-bottom {
  padding: 18px;
  border: 1px solid #ddd;
  border-top: none;
}
.login-phone {
  display: flex;
  margin-bottom: 22px;
}
.login-password {
  display: flex;
  margin-bottom: 22px;
}
i {
  width: 37px;
  height: 32px;
  border: 1px solid #ccc;
  border-right: none;
  background: url("./images/icons.png") no-repeat -10px -201px;
  box-sizing: border-box;
  border-radius: 2px 0 0 2px;
}
.icon-password {
  background-position: -72px -201px;
}
.login-input {
  width: 302px;
  height: 32px;
  box-sizing: border-box;
  padding: 6px 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 0 2px 2px 0;
  outline: none;
}
.login-setting {
  display: flex;
  justify-content: space-between;
}
button {
  width: 100%;
  height: 36px;
  padding: 6px;
  margin-top: 25px;
  background-color: #e1251b;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
  word-spacing: 4px;
  cursor: pointer;
}
.login-register {
  margin-top: 30px;
}
a {
  float: right;
  font-size: 15px;
  line-height: 38px;
}
.clearfix::after {
  content: "";
  height: 0;
  display: block;
  clear: both;
}
</style>
