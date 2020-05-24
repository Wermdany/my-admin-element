<template>
  <el-form :model="allModel">
    <el-form-item label="付款账号：" prop="payment" label-width="120px">
      {{ allModel.payment }}
    </el-form-item>
    <el-form-item label="收款账号：" prop="collectMoney" label-width="120px">
      <el-tag>{{ allModel.collectMoneyType | payType }}</el-tag>
      {{ allModel.collectMoney }}
    </el-form-item>
    <el-form-item
      label="收款人姓名："
      prop="collectMoneyUser"
      label-width="120px"
    >
      {{ allModel.collectMoneyUser }}
    </el-form-item>
    <el-form-item label-width="120px" label="转账金额：" prop="amount">
      {{ allModel.amount }}
    </el-form-item>
  </el-form>
</template>
<script>
import { Form, FormItem, Tag } from "element-ui";

export default {
  name: "Reconfirm",
  components: {
    elForm: Form,
    elFormItem: FormItem,
    elTag: Tag
  },
  props: {
    allModel: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      cat: {}
    };
  },
  filters: {
    payType(v) {
      const type = {
        alipay: "支付宝",
        wxpay: "微信"
      };
      return type[v];
    }
  }
};
</script>
