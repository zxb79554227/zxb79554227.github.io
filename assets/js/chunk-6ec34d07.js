(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ec34d07"],{"0a89":function(t,e,a){},"2c50":function(t,e,a){"use strict";var i=a("0a89"),n=a.n(i);n.a},"3af5":function(t,e,a){"use strict";var i=a("62f3"),n=a.n(i);n.a},"4cb4":function(t,e,a){},"4ffc":function(t,e,a){t.exports=a.p+"assets/img/businessCard.png"},"54dd":function(t,e,a){"use strict";var i=a("4cb4"),n=a.n(i);n.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),n=a("5899"),s="["+n+"]",c=RegExp("^"+s+s+"*"),r=RegExp(s+s+"*$"),o=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(c,"")),2&t&&(a=a.replace(r,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},"62f3":function(t,e,a){},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var s,c;return n&&"function"==typeof(s=e.constructor)&&s!==a&&i(c=s.prototype)&&c!==a.prototype&&n(t,c),t}},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),s=a("94ca"),c=a("6eeb"),r=a("5135"),o=a("c6b6"),l=a("7156"),u=a("c04e"),v=a("d039"),d=a("7c73"),f=a("241c").f,b=a("06cf").f,p=a("9bf2").f,m=a("58a8").trim,h="Number",_=n[h],g=_.prototype,x=o(d(g))==h,C=function(t){var e,a,i,n,s,c,r,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(s=l.slice(2),c=s.length,r=0;r<c;r++)if(o=s.charCodeAt(r),o<48||o>n)return NaN;return parseInt(s,i)}return+l};if(s(h,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var N,y=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof y&&(x?v((function(){g.valueOf.call(a)})):o(a)!=h)?l(new _(C(e)),a,y):C(e)},E=i?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)r(_,N=E[I])&&!r(y,N)&&p(y,N,b(_,N));y.prototype=g,g.constructor=y,c(n,h,y)}},b03e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"about",staticClass:"about",attrs:{id:"about"}},[a("div",{staticClass:"about-top-box"},[t._m(0),a("div",{staticClass:"business-btns"},[a("el-button",[t._v("圆角按钮")]),a("el-button",[t._v("圆角按钮")]),a("el-button",[t._v("圆角按钮")])],1)]),a("div",{staticClass:"about-content-box"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"简介",name:"first"}},[t._v("简介")]),a("el-tab-pane",{attrs:{label:"经历",name:"second"}},[a("transition-group",{attrs:{name:"list",tag:"p"}},t._l(t.exData,(function(t){return a("div",{key:t.id},[a("Ex",{ref:"ex-item"+t.id,refInFor:!0,attrs:{id:t.id,year:t.year,actived:t.actived,img:t.img,event:t.event}})],1)})),0)],1),a("el-tab-pane",{attrs:{label:"技术筏",name:"third"}},[a("Tech")],1)],1)],1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"business-card"},[i("img",{attrs:{src:a("4ffc"),alt:""}})])}],s=(a("b0c0"),[{id:1,year:"1987",event:"来到地球来到地",content:[],img:"",actived:!0},{id:2,year:"2002",event:"写了自己第一个网页",content:[],img:"",actived:!1}]),c=s,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{ref:"ex-item"+t.id,attrs:{id:t.id}},[a("div",{staticClass:"ex-item"},[a("div",{staticClass:"ex-year"},[t._v(t._s(t.year))]),a("div",{staticClass:"ex-dot"}),a("div",{staticClass:"ex-event"},[t._v(t._s(t.event))])])])])},o=[],l=(a("a9e3"),{props:{id:Number,year:String,event:String,img:String,actived:Boolean},mounted:function(){}}),u=l,v=(a("3af5"),a("2877")),d=Object(v["a"])(u,r,o,!1,null,"9c464b46",null),f=d.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{staticClass:"tech-class",model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"设计",name:"design"}},[a("el-tabs",{staticClass:"tech-class-v",staticStyle:{height:"300px"},attrs:{"tab-position":t.tabPosition}},[a("el-tab-pane",{attrs:{label:"Photoshop"}},[t._v("Photoshop")]),a("el-tab-pane",{attrs:{label:"Sketch"}},[t._v("Sketch")])],1)],1),a("el-tab-pane",{attrs:{label:"开发",name:"devlop"}},[a("el-tabs",{staticClass:"tech-class-v",staticStyle:{height:"300px"},attrs:{"tab-position":t.tabPosition}},[a("el-tab-pane",{attrs:{label:"Javascript"}},[a("div",{staticClass:"tech-item-content"},[a("div",{staticClass:"tech-item-title"},[t._v(" Javascript ")]),a("div",{staticClass:"tech-item-des"},[t._v(" 前端骚年们的基础语言之一，不会就没有饭碗的！熟悉Js对象继承和构造，熟悉各种常用插件个流行框架，熟悉原生JS接口以及webApi接口. ")]),a("div",{staticClass:"tech-ability"},[a("div",{staticClass:"tech-ability-box"},[a("div",[t._v("熟练度:")]),a("el-progress",{attrs:{"text-inside":!0,"stroke-width":16,percentage:70}})],1),a("div",{staticClass:"tech-ability-box"},[a("div",[t._v("学习时常:")]),t._v(" +10 years ")]),a("div",{staticClass:"tech-ability-box"},[a("div",[t._v("偏爱度:")]),t._v(" +10 years ")])])])]),a("el-tab-pane",{attrs:{label:"HTML"}},[t._v("HTML")]),a("el-tab-pane",{attrs:{label:"CSS"}},[t._v("CSS")])],1)],1)],1)],1)},p=[],m={data:function(){return{activeName:"design",tabPosition:"right"}}},h=m,_=(a("2c50"),Object(v["a"])(h,b,p,!1,null,"32c4969f",null)),g=_.exports,x=a("4158"),C=function(t,e){var a=new x["c"];a.from(t,{css:{top:"-100%",width:"100%"},duration:.8}).from(t,{opacity:0,duration:.8},"-=0.3"),a.pause(),"play"===e&&a.play(),"reverse"===e&&a.reverse()},N={data:function(){return{activeName:"first",exData:""}},methods:{handleClick:function(t){console.log(t.name),"second"===t.name&&(this.exData=c)}},components:{Ex:f,Tech:g},created:function(){},mounted:function(){C(".about","play")}},y=N,E=(a("54dd"),Object(v["a"])(y,i,n,!1,null,"b244eab2",null));e["default"]=E.exports}}]);