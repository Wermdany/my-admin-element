<template>
  <el-form
    class="route-form"
    ref="RouteForm"
    :disabled="disabled"
    :rules="rules"
    :model="model"
    label-position="right"
  >
    <el-form-item :label-width="labelWidth" prop="meta.title">
      <span slot="label" style="text-transform:capitalize;"
        >title <tips placement="top" content="此页面的名字，很多地方需要用到它"
      /></span>
      <el-input v-model="model.meta.title"> </el-input>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="path">
      <span slot="label" style="text-transform:capitalize;"
        >path
        <tips placement="top" content="此页面的路径，如果有父级，会自动添加上去"
      /></span>
      <el-input v-model="model.path"> </el-input>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="name">
      <span slot="label" style="text-transform:capitalize;"
        >name
        <tips
          placement="top"
          content="路由表中的name属性，如果想要被正确缓存页面，必须和页面内的name保持一致"
      /></span>
      <el-input v-model="model.name"> </el-input>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="component">
      <span slot="label" style="text-transform:capitalize;"
        >component
        <tips
          placement="top"
          html-content="此页面应用的组件名，停留显示详细描述"
      /></span>
      <el-select
        v-model="model.component"
        :title="model.component && components[model.component].introduce"
      >
        <el-option
          :title="components[com].introduce"
          v-for="com in componentsKeys"
          :key="com.id"
          :value="com"
          >{{ com }}</el-option
        >
      </el-select>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="redirect">
      <span slot="label" style="text-transform:capitalize;"
        >redirect
        <tips
          placement="top"
          html-content="此页面的重定向，设置后会忽略Path，直接跳转到当前设置值<br/>如果有嵌套路由并且，没有设置，则把第一个子路由的Path，当作父路由的Redirect"
      /></span>
      <el-input v-model="model.redirect"> </el-input>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="meta.icon">
      <span slot="label" style="text-transform:capitalize;"
        >icon <tips placement="top" html-content="页面前图标"
      /></span>
      <el-select v-model="model.meta.icon"
        ><span
          slot="prefix"
          style="width:25px;display:inline-block;color:#606266;"
          ><i :class="'el-icon-' + model.meta.icon"></i
        ></span>
        <el-option
          v-for="icon in elementIcon"
          :key="icon.id"
          :value="icon | formatIcon"
        >
          <div>
            <i :class="icon"></i>
            <span style="margin-left:5px;">{{ icon | formatIcon }}</span>
          </div>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="meta.introduce">
      <span slot="label" style="text-transform:capitalize;"
        >introduce
        <tips
          placement="top"
          html-content="此页面详细介绍<br/>路由设置>组件设置>路由title"
      /></span>
      <el-input v-model="model.meta.introduce" type="textarea"></el-input>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="meta.cache">
      <span slot="label" style="text-transform:capitalize;"
        >cache
        <tips
          placement="top"
          html-content="离开此页面是否缓存，不填写默认缓存页面<br/>只有在最底层才有效，如果一些页面不需要缓存，为提高性能应该设置它"
      /></span>
      <el-select v-model="model.meta.cache">
        <el-option label="缓存" :value="true"></el-option>
        <el-option label="销毁" :value="false"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="hidden">
      <span slot="label" style="text-transform:capitalize;"
        >hidden
        <tips
          placement="top"
          html-content="此页面是否在侧边栏隐藏，不填写默认不隐藏<br/>如果一些页面不需要在侧边栏显示，可以设置它"
      /></span>
      <el-select v-model="model.hidden">
        <el-option label="隐藏" :value="true"></el-option>
        <el-option label="显示" :value="false"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="alwaysShow">
      <span slot="label" style="text-transform:capitalize;"
        >alwaysShow
        <tips
          placement="top"
          html-content="此页面是在侧边栏的渲染模式，只有在嵌套路由下，子路由只有一个的情况下才生效"
      /></span>
      <el-select v-model="model.alwaysShow">
        <el-option label="始终渲染父路由" :value="true"></el-option>
        <el-option label="只渲染子路由" :value="false"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="meta.breadcrumb">
      <span slot="label" style="text-transform:capitalize;"
        >breadcrumb
        <tips
          placement="top"
          html-content="此页面是否在面包屑显示，不填写默认显示<br/>如果一些页面不需要在面包屑显示，可以设置它"
      /></span>
      <el-select v-model="model.meta.breadcrumb">
        <el-option label="显示" :value="true"></el-option>
        <el-option label="隐藏" :value="false"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label-width="labelWidth" prop="meta.affix">
      <span slot="label" style="text-transform:capitalize;"
        >affix
        <tips
          placement="top"
          html-content="此页面是否在标签页固定，固定下无法关闭，默认不固定"
      /></span>
      <el-select v-model="model.meta.affix">
        <el-option label="固定" :value="true"></el-option>
        <el-option label="不固定" :value="false"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>
import { Form, FormItem, Input, Select, Option } from "element-ui";
import Tips from "@/components/Tips";
import elementIcon from "./util/elementIcon";
import components from "@/router/nameToComponent";
export default {
  name: "RouteForm",
  components: {
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elSelect: Select,
    elOption: Option,
    Tips
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    componentsKeys() {
      return Object.keys(components);
    }
  },
  data() {
    this.labelWidth = "120px";
    this.elementIcon = elementIcon;
    this.components = components;
    this.rules = {
      "meta.title": [
        {
          required: true,
          trigger: "blur"
        }
      ],
      path: [
        {
          required: true,
          trigger: "blur"
        }
      ],
      name: [
        {
          required: true,
          trigger: "blur"
        }
      ]
    };
    return {};
  },
  filters: {
    formatIcon(v) {
      return v.replace("el-icon-", "");
    }
  }
};
</script>
<style lang="less" scoped>
.route-form {
  /deep/.el-select {
    width: 100%;
  }
}
</style>
