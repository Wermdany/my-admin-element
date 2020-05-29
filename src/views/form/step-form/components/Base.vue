<template>
  <el-form :model="model" :rules="rules" ref="rules">
    <el-form-item label="付款账号：" prop="payment" label-width="120px">
      <el-input v-model="model.payment"></el-input>
    </el-form-item>
    <el-form-item label="收款账号：" prop="collectMoney" label-width="120px">
      <el-input v-model="model.collectMoney">
        <el-select
          v-model="model.collectMoneyType"
          slot="prepend"
          placeholder="请选择"
        >
          <el-option label="支付宝" value="alipay"></el-option>
          <el-option label="微信" value="wxpay"></el-option>
        </el-select>
      </el-input>
    </el-form-item>
    <el-form-item
      label="收款人姓名："
      prop="collectMoneyUser"
      label-width="120px"
    >
      <el-input v-model="model.collectMoneyUser"></el-input>
    </el-form-item>
    <el-form-item label-width="120px" label="转账金额：" prop="amount">
      <el-input
        prefix-icon="el-icon-date"
        v-model.number="model.amount"
      ></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import { Form, FormItem, Input, Select, Option } from "element-ui";

export default {
  name: "Base",
  inheritAttrs: false,
  components: {
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elSelect: Select,
    elOption: Option
  },
  data() {
    return {
      model: {
        payment: "admin@admin.admin",
        collectMoneyType: "alipay",
        collectMoney: "vue@vue.vue",
        collectMoneyUser: "张三",
        amount: 210
      },
      rules: {
        payment: [
          {
            required: true,
            trigger: "blur",
            message: "请输入付款账户"
          }
        ],
        collectMoney: [
          {
            required: true,
            trigger: "blur",
            message: "请输入收款账户"
          }
        ],
        collectMoneyUser: [
          {
            required: true,
            trigger: "blur",
            message: "请输入收款人姓名"
          }
        ],
        amount: [
          {
            required: true,
            trigger: "blur",
            message: "请输入转账金额"
          },
          {
            type: "number",
            message: "转账金额必须是数字"
          }
        ]
      }
    };
  },
  methods: {
    valid() {
      return new Promise(resolve => {
        this.$refs.rules.validate(valid => {
          resolve(valid);
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
/deep/.el-input-group__prepend {
  background: #fff;
  .el-select .el-input {
    width: 110px;
  }
}
</style>
