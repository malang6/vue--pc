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
        <ValidationProvider rules="required|length|phone" v-slot="{ errors }">
          <label>手机号:</label>
          <input
            type="text"
            placeholder="请输入你的手机号"
            v-model="user.phone"
          />
          <span class="error-mag">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="register-content">
        <ValidationProvider rules="codeRequired|codeLength" v-slot="{ errors }">
          <label>验证码:</label>
          <input type="text" placeholder="请输入验证码" v-model="user.code" />
          <img
            ref="code"
            src="http://182.92.128.115/api/user/passport/code"
            alt="code"
            @click="changeCode"
          />
          <span class="error-mag">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="register-content">
        <ValidationProvider rules="passwordRequired|password" v-slot="{ errors }">
          <label>登录密码:</label>
          <input
            type="text"
            placeholder="请输入你的登录密码"
            v-model="user.password"
          />
          <span class="error-mag">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="register-content">
        <ValidationProvider rules="rePasswordRequired|rePassword" v-slot="{ errors }">
          <label>确认密码:</label>
          <input
            type="text"
            placeholder="请输入确认密码"
            v-model="user.rePassword"
          />
          <span class="error-mag">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="register-control">
        <input type="checkbox" class="agree" v-model="user.isAgree" />
        <span>同意协议并注册《尚品汇用户协议》</span>
      </div>
      <div class="register-btn">
        <!-- <button @click="submit">完成注册</button> -->
        <!-- @click="submit" 是给组件绑定自定义事件 -->
        <Button @click="submit">完成注册</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider,extend } from "vee-validate";
/*
  文档：https://vee-validate.logaretm.com/v3/guide/basics.html#validation-provider
  1. 下载 
    yarn add vee-validate
  2. 引入组件并注册
    局部注册
    全局注册
  3. 使用
    用 ValidationProvider 组件包裹要表单校验的 表单项  
  4. 使用检验规则
    - 自定义规则
      extend("length", {
        validate(value) {
          return value.length === 11;
        },
        message: "长度必须为11位", // 错误信息
      });
    - 内置规则
        import { required, email } from 'vee-validate/dist/rules';
        extend("required", {
          ...required,
          message: "手机号必须要填写", // 错误信息
        });

        <ValidationProvider rules="required"></ValidationProvider>  
*/
import { required } from "vee-validate/dist/rules";
import { Message } from "element-ui";
import Button from "@comps/Button"
extend("required", required);
extend("required", {
  ...required,
  message: "手机号不能为空！",
});

extend("codeRequired", {
  ...required,
  message: "验证码不能为空！",
});
extend("passwordRequired", {
  ...required,
  message: "登录密码不能为空！",
});
extend("rePasswordRequired", {
  ...required,
  message: "确认密码不能为空！",
});
extend("length", {
  validate: (value) => {
    return value.length === 11;
  },
  message: "手机号必须11位！",
});

extend("phone", {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号不符合规范",
});

//验证码是否正确之类的东西不能在客户端这里验证，必须是在服务器上验证。安全问题
extend("codeLength", {
  validate: (value) => {
    return value.length === 4;
  },
  message: "验证码必须是4位！",
});

//密码校验
extend("password", {
  validate: (value) => {
    return /[0-9]{6,12}/.test(value);
  },
  message: "密码必须是6到12位数字！",
});

//确认密码校验
extend("rePassword", {
  validate: (value) => {
    return /[0-9]{6,12}/.test(value);
  },
  message: "密码必须是6到12位数字！",
});

export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "", //手机号
        password: "", //密码
        rePassword: "", //确认密码
        code: "", //验证码
        isAgree: false, //是否同意协议
      },
    };
  },
  components: {
    ValidationProvider,
    Button
  },
  methods: {
    async submit() {
      try {
        const { phone, password, rePassword, code, isAgree } = this.user;
        if (!isAgree) return Message.error("请同意协议~");
        if (password !== rePassword) {
          return Message.error("两次密码输入不一致！");
        }
        // console.log(phone, password, code);
        //当actions中的方法只有一个需要用的时候,可以直接使用this.$store.dispatch
        await this.$store.dispatch("register", { phone, password, code });
        this.$router.push("/login");
      } catch {
        //注册失败时,清空密码,并更新验证码
        this.user.password = "";
        this.user.rePassword = "";
        this.changeCode();
      }
    },
    //更新验证码 因为复用的时候拿不到e  所有使用ref 不复用可以直接用第二种
    changeCode() {
      this.$refs.code.src = "http://182.92.128.115/api/user/passport/code";
      // e.target.src = "http://182.92.128.115/api/user/passport/code";
    },
  },
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
img {
  position: absolute;
  top: 5px;
}
.error-mag {
  position: absolute;
  padding-left: 100px;
  display: block;
  color: #e1251b;
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
