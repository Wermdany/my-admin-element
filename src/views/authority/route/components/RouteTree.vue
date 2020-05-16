<template>
  <div class="route-tree">
    <el-input
      class="search"
      clearable
      v-model="searchKeyWord"
      prefix-icon="el-icon-search"
      placeholder="查找页面"
    ></el-input>
    <el-tree
      v-bind="$attrs"
      :props="treeConfig"
      node-key="path"
      highlight-current
      :filter-node-method="filterRoutes"
      @node-drop="nodeDrop"
      ref="Tree"
    >
      <template slot-scope="{ data, node }">
        <div class="tree-item">
          <span class="tree-item--title"
            ><i
              :class="data.meta.icon | formatIcon"
              style="width:14px;height:14px;margin:0 3px 0 0;display:inline-block;"
            ></i
            >{{ data.meta.title }}</span
          >
          <template v-if="useType === 'cat'">
            <i
              class="el-icon-view tree-item--cat"
              :title="'查看[$]详细' | format(data)"
              @click.stop="getNode(data, node, 0)"
            ></i>
          </template>
          <template v-if="useType === 'edit'">
            <i
              class="el-icon-edit"
              :title="'修改[$]信息' | format(data)"
              @click.stop="getNode(data, node, 1)"
            ></i>
            <el-popconfirm
              @onConfirm="getNode(data, node, 2)"
              :title="'是否确认删除节点[$]？' | format(data)"
            >
              <i
                slot="reference"
                class="el-icon-delete"
                :title="'删除[$]节点' | format(data)"
                @click.stop
              ></i
            ></el-popconfirm>
            <el-dropdown @command="handleCommand(data, node, $event)">
              <i
                class="el-icon-plus"
                :title="'在[$]附近新增节点' | format(data)"
                @click.stop
              ></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="3">内部插入</el-dropdown-item>
                <el-dropdown-item command="4">后置插入</el-dropdown-item>
                <el-dropdown-item command="5">前置插入</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </div>
      </template>
    </el-tree>
  </div>
</template>
<script>
import {
  Tree,
  Input,
  Popconfirm,
  Popover,
  Dropdown,
  DropdownItem,
  DropdownMenu
} from "element-ui";
import RouteTreeMixins from "./mixins/RouteTree";
export default {
  name: "RouteTree",
  inheritAttrs: false,
  components: {
    elTree: Tree,
    elInput: Input,
    elPopconfirm: Popconfirm,
    elDropdown: Dropdown,
    elDropdownItem: DropdownItem,
    elDropdownMenu: DropdownMenu,
    // see: https://github.com/ElemeFE/element/pull/19416
    elPopover: Popover
  },
  props: {
    searchWord: {
      type: String,
      default: ""
    },
    useType: {
      type: String,
      default: "cat",
      validator: val => ["cat", "edit", "select"].indexOf(val) !== -1
    }
  },
  mixins: [RouteTreeMixins],
  data() {
    this.treeConfig = {
      children: "children",
      label: data => data.meta.title
    };
    return {
      //搜索模块的
      searchKeyWord: ""
    };
  },
  watch: {
    searchKeyWord(val) {
      this.filterRun(val);
    }
  },
  methods: {
    filterRoutes(value, data) {
      if (!value) return true;
      return data.meta.title.indexOf(value) !== -1;
    },
    filterRun(val) {
      this.$refs.Tree.filter(val);
    },
    // events type [0,1,2,3,4,5] => [ "Cat","Edit","Delete","Append","InsertAfter","InsertBefore","Drop"]
    getNode(data, node, type) {
      this.$emit("get-node", data, node, type);
    },
    nodeDrop(selfNode, selectNode, location) {
      this.$emit("node-drop", selectNode, selfNode, location, 6);
    },
    handleCommand(data, node, type) {
      this.getNode(data, node, type);
    },
    receiveEvent(formNode, selectNode, type, all) {
      //type >0
      if (type) {
        this["$_node" + type](formNode, selectNode, all);
      }
    }
  },
  filters: {
    format(v, data) {
      return v.replace("$", " " + data.meta.title + " ");
    },
    formatIcon(v) {
      if (!v) return "";
      return "el-icon-" + v;
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/variables.less";
.tree-item {
  font-size: 14px;
  i {
    margin-left: 10px;
    &:hover {
      color: @base-color-default;
    }
  }
}
.search {
  margin-bottom: 10px;
}
.route-tree {
  /deep/.el-dropdown {
    color: inherit;
  }
  /deep/.el-tree-node.is-drop-inner > .el-tree-node__content {
    background-color: @base-color-default;
    color: white;
  }
}
</style>
