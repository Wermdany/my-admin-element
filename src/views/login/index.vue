<template>
  <div class="login-contianer">
    <el-form :model="form" size="medium" ref="form" :rules="rules">
      <div class="login__logo">
        <img class="logo" src="@/assets/logo.png" alt="" />
      </div>
      <div class="login__title">{{ pageTitle }}</div>
      <el-form-item prop="userName">
        <span class="icon"><i class="el-icon-user-solid"></i></span>
        <el-input
          v-model="form.userName"
          placeholder="请输入用户名"
          ref="userName"
          @keyup.enter.native="enterHandleLogin"
        ></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <span class="icon"><i class="el-icon-message-solid"></i></span>
        <el-input
          v-model="form.passWord"
          show-password
          placeholder="请输入密码"
          ref="passWord"
          @keyup.enter.native="enterHandleLogin"
        ></el-input>
      </el-form-item>
      <el-form-item class="checkbox">
        <el-checkbox v-model="saveUserData">记住密码</el-checkbox>
        <tips
          trigger="hover"
          placement="top"
          content="把您的信息保存到本地，带来便捷的同时会有一定的风险！"
        />
      </el-form-item>
      <el-button
        type="primary"
        style="width:100%"
        size="medium"
        :loading="loginLoading"
        @click="handleLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script>
import { Input, Button, Form, FormItem, Checkbox } from "element-ui";
import Tips from "@/components/Tips";
import { DEFAULT_PAGE_TITLE } from "@/namespace";
import { formatRedirect } from "@/utils/format";
export default {
  name: "login",
  components: {
    elInput: Input,
    elButton: Button,
    elForm: Form,
    elFormItem: FormItem,
    elCheckbox: Checkbox,
    Tips
  },
  data() {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入您的用户名!"));
      } else {
        callback();
      }
    };
    const validatePassWord = (rule, value, callback) => {
      if (!value.length) {
        callback(new Error("请输入您的密码"));
      }
      if (value.length < 6) {
        callback(new Error("密码长度不能小于6位！"));
      } else {
        callback();
      }
    };
    this.pageTitle = DEFAULT_PAGE_TITLE;
    return {
      form: {
        userName: "admin",
        passWord: "123456"
      },
      rules: {
        userName: [
          { required: true, trigger: "blur", validator: validateUserName }
        ],
        passWord: [
          { required: true, trigger: "blur", validator: validatePassWord }
        ]
      },
      saveUserData: true,
      loginLoading: false,
      redirect: undefined,
      query: {}
    };
  },
  watch: {
    $route: {
      handler(route) {
        if (route.redirectedFrom) {
          const format = formatRedirect(this.$route.redirectedFrom);
          this.redirect = format.redirect;
          this.query = format.query;
          return;
        }
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.query = this.getOtherQuery(query);
        }
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loginLoading = true;
          this.$store
            .dispatch("user/login", {
              data: {
                userName: this.form.userName,
                passWord: this.form.passWord
              },
              type: this.saveUserData
            })
            .then(() => {
              this.$message.success("登陆成功！");
              this.loginLoading = false;
              this.$store
                .dispatch("permission/generateRoutes")
                .then(() => {
                  this.$router.push({
                    path: this.redirect || "/",
                    query: this.query
                  });
                })
                .catch(res => {
                  this.$message.error(res.errMsg);
                });
            })
            .catch(err => {
              this.loginLoading = false;
              this.$message.warning(err.errMsg);
            });
        } else {
          this.$message.warning("请按要求填写字段");
        }
      });
    },
    autoFocus(e) {
      const userName = this.$refs.userName;
      if (userName.value === "") {
        userName.focus();
        if (e === "enter") {
          userName.elForm.validateField(["userName"]);
        }
        return false;
      }
      const passWord = this.$refs.passWord;
      if (passWord.value === "") {
        passWord.focus();
        if (e === "enter") {
          userName.elForm.validateField(["passWord"]);
        }
        return false;
      }
      return true;
      // console.log(userName, passWord);
    },
    enterHandleLogin() {
      if (this.autoFocus("enter")) {
        this.handleLogin();
      }
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/variables.less";
@labelColor: #889aa4;
/deep/ .el-checkbox__inner {
  border-color: @labelColor;
  background: none;
}
.login-contianer {
  width: 100%;
  height: 100%;
  background: @menuHover;
  /deep/.el-form {
    width: 480px;
    max-width: 100%;
    padding: 100px 35px 0;
    margin: 0 auto;

    .login__logo {
      text-align: center;
      .logo {
        width: 80px;
        height: 80px;
      }
    }
    .login__title {
      text-align: center;
      color: white;
      font-size: 26px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .checkbox {
      > .el-form-item__content {
        border: none;
        background: none;
        color: @labelColor;
        .el-checkbox__label {
          color: @labelColor;
        }
      }
    }
    .el-form-item__content {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      .icon {
        color: @labelColor;
        padding: 0 0 0 10px;
        &.view {
          cursor: pointer;
        }
      }
    }
    .el-input {
      width: 90%;
      > input {
        height: 47px;
      }
    }
    .el-input__inner {
      border: none;
      background: transparent;
      color: #fff;
    }
  }
}
</style>
