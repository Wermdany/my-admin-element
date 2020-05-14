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
      ref="Tree"
    >
      <template slot-scope="{ data, node }">
        <div class="tree-item">
          <span class="tree-item--title">{{ data.meta.title }}</span>
          <template v-if="useType === 'cat'">
            <i
              class="el-icon-view tree-item--cat"
              :title="'查看[$]详细' | format(data)"
              @click.stop="catDetail(data, node)"
            ></i>
          </template>
          <template v-if="useType === 'edit'">
            <i
              class="el-icon-edit"
              :title="'修改[$]信息' | format(data)"
              @click.stop
            ></i>
            <el-popconfirm :title="'是否确认删除节点[$]？' | format(data)">
              <i
                slot="reference"
                class="el-icon-delete"
                :title="'删除[$]节点' | format(data)"
                @click.stop
              ></i
            ></el-popconfirm>
            <i
              class="el-icon-plus"
              :title="'在[$]新增节点' | format(data)"
              @click.stop
            ></i>
          </template>
        </div>
      </template>
    </el-tree>
  </div>
</template>
<script>
import { Tree, Input, Popconfirm } from "element-ui";
export default {
  name: "RouteTree",
  components: {
    elTree: Tree,
    elInput: Input,
    elPopconfirm: Popconfirm
  },
  props: {
    searchWord: {
      type: String,
      default: ""
    },
    useType: {
      type: String,
      default: "cat"
    }
  },
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
    catDetail(data, node) {
      this.$emit("catDetail", data, node);
    }
  },
  filters: {
    format(v, data) {
      return v.replace("$", " " + data.meta.title + " ");
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
</style>
