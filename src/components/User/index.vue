<template>
  <el-dropdown trigger="click" @command="handleClick">
    <div class="header-icon-item user" v-if="isLogin" title="你还没有登陆">
      未登录
    </div>
    <div class="header-icon-item user login" v-else title="个人信息">
      <img :src="avatar" />
      <!-- <i class="el-icon-caret-bottom tips"></i> -->
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-if="isLogin" icon="el-icon-user" command="login"
        >登录</el-dropdown-item
      >
      <el-dropdown-item
        v-if="!isLogin"
        icon="el-icon-user-solid"
        command="userinfo"
        >个人中心</el-dropdown-item
      >
      <el-dropdown-item
        v-if="!isLogin"
        icon="el-icon-switch-button"
        command="logout"
        >退出</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import { Dropdown, DropdownItem, DropdownMenu } from "element-ui";
export default {
  name: "User",
  components: {
    elDropdown: Dropdown,
    elDropdownItem: DropdownItem,
    elDropdownMenu: DropdownMenu
  },
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return !this.$store.state.user.userData.name;
    },
    avatar() {
      return this.$store.state.user.userData.avatar;
    }
  },
  methods: {
    handleClick(command) {
      this[command]();
    },
    login() {
      const route = this.$route.path;
      this.$router.replace({ path: "login?redirict=" + route });
    },
    logout() {
      this.$store
        .dispatch("user/logout")
        .then(() => {
          this.$message.success("退出成功！");
          this.$router.replace({ path: "login" });
        })
        .catch(err => {
          this.$message.warning(err.errMsg);
        });
    },
    userinfo() { }
  }
};
</script>
