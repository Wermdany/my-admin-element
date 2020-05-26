<template>
  <div class="authority-auth--list">
    <div class="authority-auth--header">
      <el-button type="primary" icon="el-icon-plus">新增</el-button>
    </div>
    <div class="authority-auth--body">
      <el-table :data="tableData">
        <el-table-column prop="name" label="权限名称"></el-table-column>
        <el-table-column prop="detailed" label="详细描述"></el-table-column>
        <el-table-column prop="time" label="修改时间"></el-table-column>
        <el-table-column prop="route" label="规则详细">
          <template slot-scope="{ row }">
            <el-popover>
              <el-link slot="reference" type="primary" :underline="false"
                >查看</el-link
              >
              <route-tree
                :data="row.route"
                :use-search="false"
                use-type="cat"
              />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="route" label="操作">
          <template slot-scope="{ row, $index }">
            <el-link
              type="primary"
              @click="editPath($index)"
              :underline="false"
            >
              编辑</el-link
            >
            <el-popconfirm
              :title="`确认要删除 [${row.name}] 吗？`"
              @onConfirm="deleteRow($index, $event)"
            >
              <el-link type="danger " slot="reference" :underline="false"
                >删除</el-link
              ></el-popconfirm
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { auth } from "@/api/authority";
import {
  Table,
  TableColumn,
  Button,
  Link,
  Popover,
  Popconfirm
} from "element-ui";
import { HTTP_PASS } from "@/namespace";
import RouteTree from "@/views/authority/route/components/RouteTree";
export default {
  name: "authorityAuth",
  components: {
    elButton: Button,
    elTable: Table,
    elTableColumn: TableColumn,
    elLink: Link,
    elPopover: Popover,
    elPopconfirm: Popconfirm,
    RouteTree
  },
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    request() {
      auth().then(res => {
        if (res.code == HTTP_PASS) {
          this.tableData = res.data;
        }
      });
    },
    deleteRow(i) {
      this.tableData.splice(i, 1);
    },
    editPath(index) {
      this.$router.push("/authority/auth/edit/" + (index + 1));
    }
  },
  created() {
    this.request();
  }
};
</script>
<style lang="less" scoped>
.authority-auth--header {
  margin-bottom: 10px;
}
</style>
