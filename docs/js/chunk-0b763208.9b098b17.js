(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b763208"],{"30c4":function(e,t,n){var o={"./authority/route.js":"c82a","./common/head.route.js":"cb14","./common/loginTail.route.js":"d8ff","./components/route.js":"768e","./dashboard/route.js":"d04c","./form/route.js":"d107","./other/route.js":"d9da"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="30c4"},"405d":function(e,t,n){"use strict";var o=n("874f"),r=n.n(o);r.a},"53f0":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"authority-auth--edit"},[n("el-col",{attrs:{xs:24,sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:14,offset:5},xl:{span:12,offset:6}}},[n("base-form",{ref:"BaseForm"}),n("auth-form",{ref:"AuthForm"})],1),n("div",{staticClass:"authority-auth--footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("完成")]),n("el-button",{on:{click:e.reset}},[e._v("清空")])],1)],1)},r=[],a=(n("96cf"),n("3b8d")),i=(n("7f7f"),n("1951"),n("450d"),n("eedf")),c=n.n(i),s=(n("f4f9"),n("c2cc")),u=n.n(s),d=n("647a"),l=n("c11e"),m=n("fd85"),h=n("0f53");n("ac6a");function f(e,t){if(!Array.isArray(e))throw new Error("need a Array");e.forEach((function(e){e.children&&e.children.length?f(e.children,t):t.push(e)}))}var p={name:"authorityAuthEdit",components:{elCol:u.a,elButton:c.a,BaseForm:d["a"],AuthForm:l["a"]},data:function(){return{model:{}}},computed:{id:function(){return this.$route.params.id}},methods:{request:function(){var e=this;Object(m["a"])().then((function(t){if(t.code==h["d"]){e.model=t.data[e.id-1],e.$refs.BaseForm.model={name:e.model.name||null,detailed:e.model.detailed};var n=[];f(e.model.route,n),e.$refs.AuthForm.setNode(n)}}))},submit:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.BaseForm.valid();case 2:return t=e.sent,e.next=5,this.$refs.AuthForm.valid();case 5:n=e.sent,o=this.$refs.AuthForm.model,r=this.$refs.BaseForm.model,t&&n?console.log(Object.assign({},o,r)):this.$notify({title:"警告",message:"请按要求填写必填字段",type:"warning"});case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.$refs.AuthForm.reset(),this.$refs.BaseForm.reset()}},created:function(){this.request()}},y=p,b=(n("7ec3"),n("2877")),v=Object(b["a"])(y,o,r,!1,null,"7b5d59e0",null);t["default"]=v.exports},"647a":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-form--base"},[n("el-form",{ref:"Form",attrs:{model:e.model,rules:e.rules}},[n("el-form-item",{attrs:{label:"权限名：","label-width":e.labelWIdth,prop:"name"}},[n("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),n("el-form-item",{attrs:{label:"权限描述：","label-width":e.labelWIdth,prop:"detailed"}},[n("el-input",{model:{value:e.model.detailed,callback:function(t){e.$set(e.model,"detailed",t)},expression:"model.detailed"}})],1)],1)],1)},r=[],a=(n("10cb"),n("450d"),n("f3ad")),i=n.n(a),c=(n("eca7"),n("3787")),s=n.n(c),u=(n("425f"),n("4105")),d=n.n(u),l={name:"AuthFormBase",components:{elForm:d.a,elFormItem:s.a,elInput:i.a},data:function(){return this.labelWIdth="100px",this.rules={name:[{required:!0,trigger:"blur"}],detailed:[{required:!0,trigger:"blur"}]},{model:{name:"",detailed:""}}},methods:{valid:function(){var e=this;return new Promise((function(t){e.$refs.Form.validate((function(e){t(e)}))}))},reset:function(){this.$refs.Form.resetFields()}}},m=l,h=n("2877"),f=Object(h["a"])(m,o,r,!1,null,null,null);t["a"]=f.exports},"768e":function(e,t,n){"use strict";n.r(t);var o=[{path:"/components",name:"components",redirect:"/components/sticky",component:"main",meta:{icon:"open",title:"内置组件"},children:[{path:"sticky",name:"sticky",component:"sticky",meta:{icon:"",title:"吸附组件"}}]}];t["default"]=o},"7ec3":function(e,t,n){"use strict";var o=n("8359"),r=n.n(o);r.a},8271:function(e,t,n){"use strict";function o(e){if(!e)return"根节点";var t=e.data.meta.title;return e.level<2?"".concat(t):o(e.parent)+"-"+t}function r(e,t){var n=[];for(var o in e)e.hasOwnProperty(o)&&o!==t&&(n=n.concat(e[o]));return n}function a(e,t,n,o){for(var r=0;r<e.length;r++){if(e[r].hasOwnProperty(t)&&e[r][t]==n){e.splice(r,1,o);break}e[r].children&&e[r].children.length&&a(e[r].children,t,n,o)}}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a}))},8359:function(e,t,n){},"874f":function(e,t,n){},a85b:function(e,t,n){"use strict";n("a481"),n("ac6a");var o=n("0f53"),r=n("6be8"),a=/\.\/([a-z]+)[\\/a-zA-Z\\.]*\.js$/,i=n("30c4"),c=i.keys().reduce((function(e,t){var n=t.replace(a,"$1"),c=i(t).default;if(o["h"])var s=Object(r["c"])(c,n);return e.hasOwnProperty(n)?e[n]=e[n].concat(s||c):e[n]=s||c,e}),{});t["a"]=c},c11e:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-form--auth"},[n("el-form",{ref:"Form",attrs:{model:e.model,rules:e.rules}},[n("el-form-item",{attrs:{label:"路由表：","label-width":"100px",prop:"route"}},[n("route-tree",{ref:"RouteTree",attrs:{data:e.routeTree,"use-type":"select","use-search":!1,"default-expand-all":""},on:{"selected-change":e.selectedChange}})],1)],1)],1)},r=[],a=(n("96cf"),n("3b8d")),i=(n("eca7"),n("450d"),n("3787")),c=n.n(i),s=(n("425f"),n("4105")),u=n.n(s),d=n("d3ce"),l=n("8271"),m=n("a85b"),h={name:"AuthFormAuth",components:{elForm:u.a,elFormItem:c.a,RouteTree:d["a"]},data:function(){return this.routeTree=Object(l["a"])(this.$deepCopy(m["a"]),"common"),this.rules={route:[{required:!0,trigger:"blur"}]},{model:{route:[]}}},methods:{setNode:function(e){this.$refs.RouteTree.setSelectedByNode(e),this.model.route=e},getNode:function(){return this.$refs.RouteTree.getSelectedNode()},selectedChange:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.RouteTree.getSelectedNode();case 2:this.model.route=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),valid:function(){var e=this;return new Promise((function(t){e.$refs.Form.validate((function(e){t(e)}))}))},reset:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.RouteTree.resetSelected();case 2:this.$refs.Form.resetFields();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},f=h,p=n("2877"),y=Object(p["a"])(f,o,r,!1,null,null,null);t["a"]=y.exports},c82a:function(e,t,n){"use strict";n.r(t);var o=[{path:"/authority",name:"authority",component:"main",alwaysShow:!0,redirect:"/authority/user",meta:{introduce:"系统权限管理",icon:"s-tools",title:"权限管理"},children:[{path:"user",name:"authorityUser",component:"user",meta:{title:"用户管理",icon:"user-solid"}},{path:"auth",name:"authorityAuth",component:"auth",redirect:"/authority/auth/list",meta:{title:"权限管理",icon:"set-up"},children:[{path:"list",name:"authorityAuthList",component:"authList",meta:{title:"权限列表",icon:"set-up"}},{path:"add",name:"authorityAuthAdd",hidden:!0,component:"authAdd",meta:{title:"权限新增",icon:"set-up"}},{path:"edit/:id(\\d+)",name:"authorityAuthEdit",hidden:!0,component:"authEdit",meta:{title:"权限编辑",icon:"set-up"}}]},{path:"route",name:"authorityAuth",component:"route",meta:{title:"路由管理",icon:"tickets"}}]}];t["default"]=o},d04c:function(e,t,n){"use strict";n.r(t);var o=[{path:"/dashboard",name:"dashboard",redirect:"/dashboard/console",component:"main",alwaysShow:!0,meta:{icon:"s-data",title:"仪表盘"},children:[{path:"console",name:"dashboardConsole",component:"console",meta:{icon:"help",title:"主控台"}}]}];t["default"]=o},d107:function(e,t,n){"use strict";n.r(t);var o=[{path:"/form",name:"form",redirect:"/form/base-form",component:"main",meta:{icon:"document",title:"表单"},children:[{path:"base-form",name:"formBaseForm",component:"baseForm",meta:{icon:"",title:"基础表单"}},{path:"step-form",name:"formStepForm",component:"stepForm",meta:{icon:"",title:"分步表单",introduce:"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"}}]}];t["default"]=o},d3ce:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"route-tree"},[e.useSearch?n("el-input",{staticClass:"search",attrs:{clearable:"","prefix-icon":"el-icon-search",placeholder:"查找页面"},model:{value:e.searchKeyWord,callback:function(t){e.searchKeyWord=t},expression:"searchKeyWord"}}):e._e(),n("el-tree",e._b({ref:"Tree",attrs:{props:e.treeConfig,"node-key":e.nodeKey,"show-checkbox":"select"==e.useType,"highlight-current":"","filter-node-method":e.filterRoutes},on:{"node-drop":e.nodeDrop,getNode:e.getTreeNode,check:e.checkChange},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.data,r=t.node;return[n("div",{staticClass:"tree-item"},[n("span",{staticClass:"tree-item--title"},[n("i",{class:e._f("formatIcon")(o.meta.icon),staticStyle:{width:"14px",height:"14px",margin:"0 3px 0 0",display:"inline-block"}}),e._v(e._s(o.meta.title))]),"cat"===e.useType?[n("i",{staticClass:"el-icon-view tree-item--cat",attrs:{title:e._f("format")("查看[$]详细",o)},on:{click:function(t){return t.stopPropagation(),e.getNode(o,r,0)}}})]:e._e(),"edit"===e.useType?[n("i",{staticClass:"el-icon-edit",attrs:{title:e._f("format")("修改[$]信息",o)},on:{click:function(t){return t.stopPropagation(),e.getNode(o,r,1)}}}),n("el-popconfirm",{attrs:{title:e._f("format")("是否确认删除节点[$]？",o)},on:{onConfirm:function(t){return e.getNode(o,r,2)}}},[n("i",{staticClass:"el-icon-delete",attrs:{slot:"reference",title:e._f("format")("删除[$]节点",o)},on:{click:function(e){e.stopPropagation()}},slot:"reference"})]),n("el-dropdown",{on:{command:function(t){return e.handleCommand(o,r,t)}}},[n("i",{staticClass:"el-icon-plus",attrs:{title:e._f("format")("在[$]附近新增节点",o)},on:{click:function(e){e.stopPropagation()}}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"3"}},[e._v("内部插入")]),n("el-dropdown-item",{attrs:{command:"4"}},[e._v("后置插入")]),n("el-dropdown-item",{attrs:{command:"5"}},[e._v("前置插入")])],1)],1)]:e._e()],2)]}}])},"el-tree",e.$attrs,!1))],1)},r=[],a=(n("a481"),n("06f1"),n("450d"),n("6ac9")),i=n.n(a),c=(n("960d"),n("defb")),s=n.n(c),u=(n("bd49"),n("18ff")),d=n.n(u),l=(n("cb70"),n("b370")),m=n.n(l),h=(n("4fdb"),n("b076")),f=n.n(h),p=(n("10cb"),n("f3ad")),y=n.n(p),b=(n("5e32"),n("6721")),v=n.n(b),w=(n("ac6a"),n("456d"),n("8271")),g={methods:{$_nodeDelete:function(e){this.$refs.Tree.remove(e)},$_nodeEdit:function(e,t,n){Object(w["c"])(n,"path",e.path,t)},$_nodeAppend:function(e,t,n){Object.keys(e)&&Object.keys(t)&&this.$refs.Tree.append(t,e),n.push(t)},$_nodeInsertBefore:function(e,t){this.$refs.Tree.insertBefore(t,e)},$_nodeInsertAfter:function(e,t){this.$refs.Tree.insertAfter(t,e)}}},$={name:"RouteTree",inheritAttrs:!1,components:{elTree:v.a,elInput:y.a,elPopconfirm:f.a,elDropdown:m.a,elDropdownItem:d.a,elDropdownMenu:s.a,elPopover:i.a},props:{useType:{type:String,default:"cat",validator:function(e){return-1!==["cat","edit","select"].indexOf(e)}},useSearch:{type:Boolean,default:!0},nodeKey:{type:String,default:"path"}},mixins:[g],data:function(){return this.treeConfig={children:"children",label:function(e){return e.meta.title}},{searchKeyWord:""}},watch:{searchKeyWord:function(e){this.filterRun(e)}},methods:{filterRoutes:function(e,t){return!e||-1!==t.meta.title.indexOf(e)},filterRun:function(e){this.$refs.Tree.filter(e)},getNode:function(e,t,n){this.$emit("get-node",e,t,n)},nodeDrop:function(e,t,n){this.$emit("node-drop",t,e,n,6)},handleCommand:function(e,t,n){this.getNode(e,t,n)},receiveEvent:function(e,t,n,o){n&&this["$_node"+n](e,t,o)},getTreeNode:function(e){return this.$refs.Tree.getNode(e)},setSelectedByNode:function(e){this.$refs.Tree.setCheckedNodes(e)},setSelectedByKey:function(e){this.$refs.Tree.setCheckedKeys(e)},getSelectedNode:function(){return this.$refs.Tree.getCheckedNodes(!0,!1)},getSelectedKey:function(){return this.$refs.Tree.getCheckedKeys()},resetSelected:function(){this.$refs.Tree.setCheckedKeys([])},checkChange:function(){this.$emit("selected-change")}},filters:{format:function(e,t){return e.replace("$"," "+t.meta.title+" ")},formatIcon:function(e){return e?"el-icon-"+e:""}}},_=$,k=(n("405d"),n("2877")),A=Object(k["a"])(_,o,r,!1,null,"ebb8d4dc",null);t["a"]=A.exports},d9da:function(e,t,n){"use strict";n.r(t);var o=[{path:"https://www.baidu.com/",meta:{title:"外部链接-百度",icon:"tickets",introduce:"外部链接-百度测试"}}];t["default"]=o},fd85:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b775");function o(){return new Promise((function(e){e({code:0,errMsg:"",data:[{name:"全部权限",detailed:"全部权限详细介绍",route:[{path:"/dashboard",name:"dashboard",redirect:"/dashboard/console",component:"common_main",alwaysShow:!0,meta:{icon:"s-data",title:"仪表盘"},children:[{path:"console",name:"dashboardConsole",component:"dashboard_console",meta:{icon:"help",title:"主控台"}}]},{path:"/components",name:"components",redirect:"/components/sticky",alwaysShow:!0,component:"common_main",meta:{icon:"open",title:"内置组件",introduce:"系统内置组件"},children:[{path:"sticky",name:"componentsSticky",component:"components_sticky",meta:{icon:"",title:"吸附组件",introduce:"页面滚动，固定到一定位置"}}]},{path:"/form",name:"form",redirect:"/form/base-form",component:"common_main",meta:{icon:"document",title:"表单"},children:[{path:"base-form",name:"formBaseForm",component:"form_baseForm",meta:{icon:"",title:"基础表单"}},{path:"step-form",name:"formStepForm",component:"form_stepForm",meta:{icon:"",title:"分步表单",introduce:"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"}}]},{path:"/authority",name:"authority",component:"common_main",alwaysShow:!0,redirect:"/authority/user",meta:{introduce:"系统权限管理",icon:"s-tools",title:"权限管理"},children:[{path:"user",name:"authorityUser",component:"authority_user",meta:{title:"用户管理",icon:"user-solid"}},{path:"auth",name:"authorityAuth",component:"authority_auth",redirect:"/authority/auth/list",meta:{title:"权限管理",icon:"set-up"},children:[{path:"list",name:"authorityAuthList",component:"authority_authList",meta:{title:"权限列表",icon:"set-up",noCache:!0}},{path:"add",name:"authorityAuthAdd",hidden:!0,component:"authority_authAdd",meta:{title:"权限新增",icon:"set-up"}},{path:"edit/:id(\\d+)",name:"authorityAuthEdit",hidden:!0,component:"authority_authEdit",meta:{title:"权限编辑",icon:"set-up"}}]},{path:"route",name:"authorityRoute",component:"authority_route",meta:{title:"路由管理",icon:"tickets"}}]},{path:"https://www.baidu.com/",meta:{title:"外部链接-百度",icon:"tickets",introduce:"外部链接-百度测试"}}],time:"1983-05-08 10:07:26"},{name:"部分权限",detailed:"部分权限详细介绍",route:[{path:"/authority",name:"authority",component:"main",alwaysShow:!0,redirect:"/authority/user",meta:{introduce:"系统权限管理",icon:"s-tools",title:"权限管理"},children:[{path:"user",name:"authorityUser",component:"user",meta:{title:"用户管理",icon:"user-solid"}},{path:"auth",name:"authorityAuth",component:"auth",redirect:"/authority/auth/list",meta:{title:"权限管理",icon:"set-up"},children:[{path:"list",name:"authorityAuthList",component:"authList",meta:{title:"权限列表",icon:"set-up"}},{path:"edit/:id(\\d+)",name:"authorityAuthEdit",hidden:!0,component:"authority_authEdit",meta:{title:"权限编辑",icon:"set-up"}}]},{path:"route",name:"authorityAuth",component:"route",meta:{title:"路由管理",icon:"tickets"}}]}],time:"1985-09-24 18:24:44"}]})}))}}}]);