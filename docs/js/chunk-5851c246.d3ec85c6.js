(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5851c246"],{"23c8":function(t,e,a){},2895:function(t,e,a){"use strict";var n=a("87ea"),r=a.n(n);r.a},"2fef":function(t,e,a){},"349d":function(t,e,a){},"34d7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("component",t._b({},"component",t.linkProps(t.to),!1),[t._t("default")],2)},r=[],i=a("61f7"),s={name:"Link",props:{to:{required:!0,type:String}},methods:{linkProps:function(t){return Object(i["b"])(t)?{is:"a",href:t,target:"_blank",rel:"noopener"}:{is:"router-link",to:t}}}},o=s,c=a("2877"),l=Object(c["a"])(o,n,r,!1,null,null,null);e["a"]=l.exports},"499e":function(t,e,a){"use strict";var n=a("d884"),r=a.n(n);r.a},"582b":function(t,e,a){"use strict";var n=a("2fef"),r=a.n(n);r.a},"5a4e":function(t,e,a){},"6e89":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-console"},[a("top-chart"),a("card-grid"),a("sales-card")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:15}},[a("card-item",{attrs:{title:"总销售额"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v(" ¥ "+t._s(t._f("parseNumber")(126560))+" ")]},proxy:!0},{key:"body",fn:function(){return[a("chart-text",{attrs:{week:12,day:11}})]},proxy:!0},{key:"footer",fn:function(){return[t._v("日销售额 ¥ "+t._s(t._f("parseNumber")(12423))+" ")]},proxy:!0}])}),a("card-item",{attrs:{title:"营销活动效果"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v(" "+t._s(t._f("parseNumber")(8974))+" ")]},proxy:!0},{key:"body",fn:function(){return[a("chart-area")]},proxy:!0},{key:"footer",fn:function(){return[t._v("日访问量 "+t._s(t._f("parseNumber")(12423))+" ")]},proxy:!0}])}),a("card-item",{attrs:{title:"支付比数"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v(" "+t._s(t._f("parseNumber")(6871))+" ")]},proxy:!0},{key:"body",fn:function(){return[a("chart-interval")]},proxy:!0},{key:"footer",fn:function(){return[t._v("转化率 "+t._s(58)+"% ")]},proxy:!0}])}),a("card-item",{attrs:{title:"营销活动效果"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v(" "+t._s(78)+"% ")]},proxy:!0},{key:"body",fn:function(){return[a("chart-progress",{attrs:{percentage:78,"show-text":!1,color:"#2d8cf0"}})]},proxy:!0},{key:"footer",fn:function(){return[a("chart-text",{attrs:{week:9,day:11}})]},proxy:!0}])})],1)},s=[],o=(a("7a0f"),a("450d"),a("0f6c")),c=a.n(o),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{staticClass:"card-item",attrs:{xs:24,sm:{span:12},lg:{span:6}}},[a("el-card",{attrs:{shadow:"never"}},[a("template",{slot:"header"},[a("div",{staticClass:"card-header__title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),a("div",{staticClass:"card-header__tips"},[a("el-tooltip",{attrs:{content:t.tip,placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline"})])],1),a("div",{staticClass:"card-header__content"},[t._t("content")],2)]),a("div",{staticClass:"card-header__chart"},[a("div",{staticClass:"card-header__chart-fixed"},[t._t("body")],2)]),a("div",{staticClass:"card-header__footer"},[t._t("footer")],2)],2)],1)},u=[],d=(a("0c67"),a("299c")),f=a.n(d),p=(a("f4f9"),a("c2cc")),y=a.n(p),h=(a("b8e0"),a("a4c4")),x=a.n(h),v={name:"CardItem",components:{elCard:x.a,elCol:y.a,elTooltip:f.a},props:{title:{type:String,required:!0},tip:{type:String,default:"指标说明"}}},m=v,_=(a("582b"),a("2877")),b=Object(_["a"])(m,l,u,!1,null,"35768e30",null),g=b.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-text"},[t._v("\n  周同比 "+t._s(t.week)+"%\n  "),a("i",{staticClass:"el-icon-caret-top",staticStyle:{color:"#f5222d"}}),t._v("\n  日同比 "+t._s(t.day)+"%\n  "),a("i",{staticClass:"el-icon-caret-bottom",staticStyle:{color:"#52c41a"}})])},C=[],w=(a("c5f6"),{name:"ChartText",props:{week:{type:Number,required:!0},day:{type:Number,required:!0}}}),O=w,j=Object(_["a"])(O,k,C,!1,null,null,null),S=j.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-progress"},[a("el-progress",t._b({},"el-progress",t.$attrs,!1))],1)},E=[],$=(a("6b30"),a("c284")),P=a.n($),T={name:"ChartProgress",inheritAttrs:!1,components:{elProgress:P.a}},I=T,M=Object(_["a"])(I,D,E,!1,null,null,null),R=M.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-area"},[a("div",{attrs:{id:"chart-area"}})])}],q=a("917c"),L=a("ed08"),A={name:"ChartArea",data:function(){return this.chartData=[{x:"2020-06-12",y:7},{x:"2020-06-13",y:5},{x:"2020-06-14",y:4},{x:"2020-06-15",y:2},{x:"2020-06-16",y:4},{x:"2020-06-17",y:7},{x:"2020-06-18",y:5},{x:"2020-06-19",y:6},{x:"2020-06-20",y:5},{x:"2020-06-21",y:9},{x:"2020-06-22",y:6},{x:"2020-06-23",y:3},{x:"2020-06-24",y:1},{x:"2020-06-25",y:5},{x:"2020-06-26",y:3},{x:"2020-06-27",y:6},{x:"2020-06-28",y:5}],{}},methods:{init:function(){var t=new q["a"]({container:"chart-area",autoFit:!0,height:100,padding:[27,10],pixelRatio:2*window.devicePixelRatio});return t.data(this.chartData),t.tooltip({showCrosshairs:!1,showTitle:!1,shared:!0,itemTpl:'<li data-index="0" style="margin: 0px 0px 8px; list-style-type: none; padding: 0px;">\n        <span style="background-color:{color};" class="g2-tooltip-marker"></span>{xx}\n      <span class="g2-tooltip-value" style="display: inline-block; float: right; margin-left: 30px;">{yy}</span></li>'}),t.area().position("x*y").shape("smooth").color("#975fe4").style({fillOpacity:1}).tooltip("x*y",(function(t,e){return{xx:t,yy:e}})),t.axis(!1),t}},mounted:function(){this.init().render(),Object(L["c"])()}},Y=A,z=(a("2895"),Object(_["a"])(Y,F,N,!1,null,"05376cf6",null)),G=z.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-interval"},[a("div",{attrs:{id:"chart-interval"}})])}],H={name:"ChartInterval",data:function(){return this.chartData=[{x:"2020-06-12",y:7},{x:"2020-06-13",y:5},{x:"2020-06-14",y:4},{x:"2020-06-15",y:2},{x:"2020-06-16",y:4},{x:"2020-06-17",y:7},{x:"2020-06-18",y:5},{x:"2020-06-19",y:6},{x:"2020-06-20",y:5},{x:"2020-06-21",y:9},{x:"2020-06-22",y:6},{x:"2020-06-23",y:3},{x:"2020-06-24",y:1},{x:"2020-06-25",y:5},{x:"2020-06-26",y:3},{x:"2020-06-27",y:6},{x:"2020-06-28",y:5}],{}},methods:{init:function(){var t=new q["a"]({container:"chart-interval",autoFit:!0,height:100,padding:[27,10],pixelRatio:2*window.devicePixelRatio});return t.data(this.chartData),t.tooltip({showCrosshairs:!1,showMarkers:!1,showTitle:!1,shared:!0,itemTpl:'<li data-index="0" style="margin: 0px 0px 8px; list-style-type: none; padding: 0px;">\n      <span style="background-color:{color};" class="g2-tooltip-marker"></span>\n      {xx}\n      <span class="g2-tooltip-value" style="display: inline-block; float: right; margin-left: 30px;">{yy}</span></li>'}),t.interval().position("x*y").shape("smooth").color("#3aa1ff").style({fillOpacity:1}).tooltip("x*y",(function(t,e){return{xx:t,yy:e}})),t.axis(!1),t}},mounted:function(){this.init().render(),Object(L["c"])()}},W=H,K=(a("7945"),Object(_["a"])(W,J,B,!1,null,"4d5aedf3",null)),Q=K.exports,U={name:"TopChart",components:{elRow:c.a,CardItem:g,ChartText:S,ChartProgress:R,ChartArea:G,ChartInterval:Q}},V=U,X=Object(_["a"])(V,i,s,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:15}},t._l(t.row,(function(e){return a("card-item",{key:e.id,attrs:{title:e.title,to:e.to},scopedSlots:t._u([{key:"icon",fn:function(){return[a("i",{class:e.icon,style:{color:e.color}})]},proxy:!0}],null,!0)})})),1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{staticClass:"grid-item",attrs:{xs:{span:8},sm:{span:6},lg:{span:3}}},[a("el-card",{staticClass:"grid-item--card",attrs:{shadow:"hover"}},[a("item-link",{attrs:{to:t.to}},[a("div",{staticClass:"grid-item--card__body"},[a("div",{staticClass:"card__body-icon"},[t._t("icon")],2),a("div",{staticClass:"card__body-title"},[t._v(t._s(t.title))])])])],1)],1)},nt=[],rt=a("34d7"),it={name:"CardItem",props:{title:{type:String,required:!0,default:""},to:{type:String,required:!0}},components:{elCard:x.a,elCol:y.a,ItemLink:rt["a"]}},st=it,ot=(a("499e"),Object(_["a"])(st,at,nt,!1,null,"10e0b326",null)),ct=ot.exports,lt={name:"CardGrid",components:{elRow:c.a,CardItem:ct},data:function(){return this.row=[{icon:"el-icon-s-custom",color:"rgb(105, 192, 255)",to:"",title:"用户"},{icon:"el-icon-s-data",color:"rgb(149, 222, 100)",to:"",title:"分析"},{icon:"el-icon-shopping-cart-2",color:"rgb(255, 156, 110)",to:"",title:"商城"},{icon:"el-icon-s-claim",color:"rgb(179, 127, 235)",to:"",title:"订单"},{icon:"el-icon-s-ticket",color:"rgb(255, 214, 102)",to:"",title:"票据"},{icon:"el-icon-message-solid",color:"rgb(92, 219, 211)",to:"",title:"消息"},{icon:"el-icon-collection-tag",color:"rgb(255, 133, 192)",to:"",title:"标签"},{icon:"el-icon-s-tools",color:"rgb(255, 192, 105)",to:"",title:"配置"}],{}}},ut=lt,dt=Object(_["a"])(ut,tt,et,!1,null,null,null),ft=dt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"sales-card",attrs:{shadow:"never"}},[a("template",{slot:"header"},[a("div",{staticClass:"sales-card__tabs"},[a("el-button",{class:{active:0==t.tabIndex},attrs:{type:"text"},on:{click:function(e){return t.tabSwitch(0)}}},[t._v("销售额")]),a("el-button",{class:{active:1==t.tabIndex},attrs:{type:"text"},on:{click:function(e){return t.tabSwitch(1)}}},[t._v("访问量")]),a("div",{staticClass:"sales-card__tabs--bar",style:{left:t.tabLeft}})],1),a("div",{staticClass:"sales-card__date"},["SM"!=t.device?a("div",{staticClass:"sales-card__date-select"},[a("a",{class:{active:t.active("day")},on:{click:function(e){return t.setTime("day")}}},[t._v("今日")]),a("a",{class:{active:t.active("week")},on:{click:function(e){return t.setTime("week")}}},[t._v("本周")]),a("a",{class:{active:t.active("month")},on:{click:function(e){return t.setTime("month")}}},[t._v("本月")]),a("a",{class:{active:t.active("year")},on:{click:function(e){return t.setTime("year")}}},[t._v("全年")])]):t._e(),a("div",{staticClass:"sales-card__date-picker"},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"mini","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":{firstDayOfWeek:1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)])]),a("el-col",{attrs:{xs:24,sm:{span:16},lg:{span:18}}},[a("chart-sales",{ref:"ChartSales",attrs:{title:t._f("parse")("$趋势",t.tabIndex)}})],1),a("el-col",{attrs:{xs:24,sm:{span:8},lg:{span:6}}},[a("rank-list",{staticStyle:{"margin-left":"20px"},attrs:{title:t._f("parse")("门店$排名",t.tabIndex),list:t.list,max:7}})],1)],2)},yt=[],ht=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("bd86")),xt=(a("1951"),a("eedf")),vt=a.n(xt),mt=(a("826b"),a("c263")),_t=a.n(mt),bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rank-list"},[t.title?a("h4",{staticClass:"rank-list__title"},[t._v(t._s(t.title))]):t._e(),a("ul",{staticClass:"rank-list__body"},t._l(t.formatList,(function(e,n){return a("li",{key:n,staticClass:"rank-list__body-item"},[a("span",{staticClass:"rank-list-number",style:{backgroundColor:n<3&&"#314659",color:n<3&&"#FFF"}},[t._v(t._s(n+1))]),a("span",{staticClass:"rank-list-title"},[t._v(t._s(e.title))]),a("span",{staticClass:"rank-list-value"},[t._v(t._s(t._f("parseNumber")(e.value)))])])})),0)])},gt=[],kt={name:"RankList",props:{title:{type:String,default:""},max:{type:Number,default:5},list:{type:Array,default:function(){return[]},required:!0}},computed:{formatList:function(){return this.list.slice(0,this.max)}}},Ct=kt,wt=(a("ff8e"),Object(_["a"])(Ct,bt,gt,!1,null,null,null)),Ot=wt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cahrt-sales"},[a("h4",{staticClass:"rank-list__title"},[t._v(t._s(t.title))]),a("div",{attrs:{id:"cahrt-sales"}})])},St=[],Dt={name:"ChartSales",props:{title:{required:!0,type:String}},data:function(){return this.chart=null,{data:[{x:"1月",y:816},{x:"2月",y:542},{x:"3月",y:914},{x:"4月",y:781},{x:"5月",y:355},{x:"6月",y:796},{x:"7月",y:714},{x:"8月",y:1195},{x:"9月",y:1055},{x:"10月",y:271},{x:"11月",y:384},{x:"12月",y:1098}]}},methods:{init:function(){this.chart=new q["a"]({container:"cahrt-sales",autoFit:!0,padding:[20,20,40,40],height:280,pixelRatio:2*window.devicePixelRatio}),this.chart.tooltip({showCrosshairs:!1,showTitle:!1,shared:!0,showMarkers:!1,itemTpl:'<li data-index="0" style="margin: 0px 0px 8px; list-style-type: none; padding: 0px;">\n        <span style="background-color:{color};" class="g2-tooltip-marker"></span>{xx}\n      <span class="g2-tooltip-value" style="display: inline-block; float: right; margin-left: 30px;">{yy}</span></li>'}),this.chart.scale("y",{max:1200,nice:!0}),this.chart.data(this.data),this.chart.axis("y",{grid:{line:{style:{lineDash:[3,3]}}}}),this.chart.interval().position("x*y").tooltip("x*y",(function(t,e){return{xx:t,yy:e}})).color("#58afff")},renderChart:function(){this.chart.render()}},mounted:function(){this.init(),this.renderChart(),Object(L["c"])()}},Et=Dt,$t=(a("ba5f"),Object(_["a"])(Et,jt,St,!1,null,null,null)),Pt=$t.exports,Tt=a("2f62"),It=(a("f576"),a("6b54"),a("3b2b"),a("7618"));function Mt(t,e){if(0===arguments.length||!t)return null;var a,n=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(It["a"])(t)?a=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var r={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},i=n.replace(/{([ymdhisa])+}/g,(function(t,e){var a=r[e];return"a"===e?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return i}function Rt(){var t=new Date,e=new Date(t.getFullYear(),t.getMonth(),1),a=new Date(t.getFullYear(),t.getMonth()+1,0);return[Mt(e,"{y}-{m}-{d}"),Mt(a,"{y}-{m}-{d}")]}function Ft(){var t=new Date;return[Mt(t,"{y}-{m}-{d}"),Mt(t,"{y}-{m}-{d}")]}function Nt(){var t=new Date,e=new Date(t.setDate(t.getDate()-t.getDay())),a=new Date(t.setDate(t.getDate()-t.getDay()-6));return[Mt(a,"{y}-{m}-{d}"),Mt(e,"{y}-{m}-{d}")]}function qt(){var t=new Date;return[Mt(t,"{y}-01-01"),Mt(t,"{y}-12-31")]}function Lt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function At(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Lt(Object(a),!0).forEach((function(e){Object(ht["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Lt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Yt={name:"SalesCard",components:{elCard:x.a,elCol:y.a,elDatePicker:_t.a,elButton:vt.a,RankList:Ot,ChartSales:Pt},data:function(){return this.dateMap={day:Ft(),week:Nt(),month:Rt(),year:qt()},this.list=[{title:"大门一号",value:"456789"},{title:"大门二号",value:"456789"},{title:"大门三号",value:"456789"},{title:"大门四号",value:"456789"},{title:"大门五号",value:"456789"},{title:"大门六号",value:"456789"},{title:"大门七号",value:"456789"},{title:"大门八号",value:"456789"},{title:"大门九号",value:"456789"},{title:"大门十号",value:"456789"}],{date:Ft(),tabIndex:0}},computed:At({},Object(Tt["c"])({device:function(t){return t.app.device}}),{tabLeft:function(){return 10+58*this.tabIndex+"px"}}),mounted:function(){},methods:{tabSwitch:function(t){this.tabIndex!=t&&(this.tabIndex=t,this.$refs.ChartSales.renderChart())},setTime:function(t){this.date=this.dateMap[t]},active:function(t){return!!Array.isArray(this.date)&&(this.date[0]==this.dateMap[t][0]&&this.date[1]==this.dateMap[t][1])}},filters:{parse:function(t,e){var a=["销售额","访问量"];return t.replace("$",a[e])}}},zt=Yt,Gt=(a("8e4d"),Object(_["a"])(zt,pt,yt,!1,null,"1fc1db14",null)),Jt=Gt.exports,Bt={name:"dashboardConsole",components:{TopChart:Z,CardGrid:ft,SalesCard:Jt},data:function(){return{}}},Ht=Bt,Wt=(a("834f"),Object(_["a"])(Ht,n,r,!1,null,"00576728",null));e["default"]=Wt.exports},"78ef":function(t,e,a){},7945:function(t,e,a){"use strict";var n=a("5a4e"),r=a.n(n);r.a},"834f":function(t,e,a){"use strict";var n=a("349d"),r=a.n(n);r.a},"87ea":function(t,e,a){},"8e4d":function(t,e,a){"use strict";var n=a("9171"),r=a.n(n);r.a},9171:function(t,e,a){},ba5f:function(t,e,a){"use strict";var n=a("23c8"),r=a.n(n);r.a},d884:function(t,e,a){},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s}));a("ac6a"),a("456d");var n=a("7618");function r(t){if("object"!==Object(n["a"])(t))throw new Error("参数必须是一个Object");var e={},a={},r=0,i=Object.keys(t).length;return new Promise((function(n,s){0===i?n(e):function(){var o=function(t,o,c){++r,c?e[t]=o:a[t]=o,r==i&&(0===Object.keys(e).length?s(Object.assign(e,a)):n(Object.assign(e,a)))},c=function(e){t.hasOwnProperty(e)&&Promise.resolve(t[e]()).then((function(t){o(e,t,!0)}),(function(t){o(e,t,!1)}))};for(var l in t)c(l)}()}))}function i(t,e){var a=null;return function(){a?(clearTimeout(a),a=setTimeout(t,e)):a=setTimeout(t,e)}}function s(){var t=document.createEvent("Event");t.initEvent("resize",!0,!0),window.dispatchEvent(t)}},ff8e:function(t,e,a){"use strict";var n=a("78ef"),r=a.n(n);r.a}}]);