(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18f57e0e"],{"37f9":function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ul",{staticClass:"main"},[t("el-button",{attrs:{type:"primary"},on:{click:n.get}},[n._v("请求")]),t("el-button",{attrs:{type:"danger"},on:{click:n.cancel}},[n._v("取消请求")]),t("once-popconfirm",{ref:"popconfirm"}),t("el-button",{directives:[{name:"popconfirm",rawName:"v-popconfirm:popconfirm",arg:"popconfirm"}]},[n._v("111")])],1)},o=[],c=(t("1951"),t("450d"),t("eedf")),i=t.n(c),a=t("b775");function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.data,t=void 0===e?{}:e,r=n.urlParams,o=n.options;return Object(a["a"])({funName:"test",url:"data1",data:t,urlParams:r,options:o})}function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.data,t=void 0===e?{}:e,r=n.urlParams,o=n.options;return Object(a["a"])({funName:"testOne",url:"message",data:t,urlParams:r,options:o})}var f=t("ed08"),l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("el-popconfirm",n._b({},"el-popconfirm",n.$attrs,!1))},p=[],d=(t("06f1"),t("6ac9")),m=t.n(d),v=(t("4fdb"),t("b076")),b=t.n(v),h=t("2b0e"),O=function(n,e,t){var r=e.expression?e.value:e.arg,o=t.context.$refs[r];o&&(Array.isArray(o)?o[0].$refs.reference=n:o.$refs.reference=n)},g={bind:function(n,e,t){O(n,e,t)},inserted:function(n,e,t){O(n,e,t)}};h["default"].directive("popconfirm",g);var w=function(n){n.directive("popconfirm",g)};g.install=w;var j=g,P={name:"OncePopconfirm",inheritAttrs:!1,directives:{directive:j},components:{elPopconfirm:b.a,elPopover:m.a}},y=P,_=t("2877"),k=Object(_["a"])(y,l,p,!1,null,null,null),E=k.exports,$={name:"index",components:{elButton:i.a,OncePopconfirm:E},data:function(){return{}},created:function(){},methods:{get:function(){Object(f["a"])({test:u,testOne:s}).then((function(n){console.log(n)})).catch((function(n){console.log(n)}))},cancel:function(){this.$store.dispatch("http/cancel",{funNames:["testOne"]})}}},x=$,N=Object(_["a"])(x,r,o,!1,null,null,null);e["default"]=N.exports},ed08:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return i}));t("ac6a"),t("456d");var r=t("7618");function o(n){if("object"!==Object(r["a"])(n))throw new Error("参数必须是一个Object");var e={},t={},o=0,c=Object.keys(n).length;return new Promise((function(r,i){0===c?r(e):function(){var a=function(n,a,u){++o,u?e[n]=a:t[n]=a,o==c&&(0===Object.keys(e).length?i(Object.assign(e,t)):r(Object.assign(e,t)))},u=function(e){n.hasOwnProperty(e)&&Promise.resolve(n[e]()).then((function(n){a(e,n,!0)}),(function(n){a(e,n,!1)}))};for(var s in n)u(s)}()}))}function c(n,e){var t=null;return function(){t?(clearTimeout(t),t=setTimeout(n,e)):t=setTimeout(n,e)}}function i(){var n=document.createEvent("Event");n.initEvent("resize",!0,!0),window.dispatchEvent(n)}}}]);