<template>
  <el-dropdown trigger="click" @command="handleClick">
    <div class="header-icon-item user un-login" v-if="isLogin">未登录</div>
    <div class="header-icon-item user login" v-else>
      <img :src="avatar" />
      <i class="el-icon-caret-bottom tips"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-if="isLogin">登录</el-dropdown-item>
      <el-dropdown-item v-if="!isLogin">退出</el-dropdown-item>
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
    return {
      isLogin: false,
      avatar:
        " https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/40/h/40"
    };
  },
  computed: {
    classObj() {
      return {
        "un-login": !this.isLogin
      };
    }
  },
  methods: {
    handleClick(command) {
      console.log(command);
    }
  }
};
</script>
