(function(t){function n(n){for(var r,c,u=n[0],s=n[1],a=n[2],f=0,p=[];f<u.length;f++)c=u[f],i[c]&&p.push(i[c][0]),i[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(n);while(p.length)p.shift()();return o.push.apply(o,a||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,u=1;u<e.length;u++){var s=e[u];0!==i[s]&&(r=!1)}r&&(o.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},i={app:0},o=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var a=0;a<u.length;a++)n(u[a]);var l=s;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),i=e.n(r);i.a},"262b":function(t,n,e){t.exports=e.p+"img/03.9a410fea.jpg"},"32bd":function(t,n,e){t.exports=e.p+"img/04.ee7c2b79.jpg"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"box",on:{mouseover:t.handleBoxOver,mouseout:t.handleBoxOut}},[e("transition-group",{attrs:{tag:"ul",name:"fade"}},t._l(t.pics,function(n){return e("li",{key:n.src,class:{current:n.isActive},attrs:{"data-index":"pic.count"}},[n.isActive?e("img",{attrs:{src:n.src,width:"490",height:"170"}}):t._e()])}),0),e("ul",{staticClass:"count"},t._l(t.pics,function(n){return e("li",{key:n.count,class:{current:n.isActive},on:{mouseover:function(e){return t.handleCountOver(n.count)}}},[t._v("\n            "+t._s(n.count+1)+"\n        ")])}),0)],1)},o=[],c=e("5118"),u={name:"Navs",data:function(){return{index:0,timer:null,play:null,pics:[{src:e("a2da"),isActive:!0,count:0},{src:e("b232"),isActive:!1,count:1},{src:e("262b"),isActive:!1,count:2},{src:e("32bd"),isActive:!1,count:3},{src:e("b808"),isActive:!1,count:4}]}},methods:{handleBoxOver:function(){Object(c["clearInterval"])(this.play)},handleBoxOut:function(){this.auotPlay()},auotPlay:function(){var t=this;this.play=Object(c["setInterval"])(function(){t.index++,t.index>=t.pics.length&&(t.index=0),t.show(t.index)},2e3)},show:function(t){this.index=t;for(var n=0;n<this.pics.length;n++)this.pics[n].isActive=!1;this.pics[this.index].isActive=!0},handleCountOver:function(t){this.show(t)},enter:function(t,n){},leave:function(t,n){}},created:function(){this.auotPlay()}},s=u,a=(e("034f"),e("2877")),l=Object(a["a"])(s,i,o,!1,null,null,null),f=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(f)}}).$mount("#app")},"64a9":function(t,n,e){},a2da:function(t,n,e){t.exports=e.p+"img/01.bfc90548.jpg"},b232:function(t,n,e){t.exports=e.p+"img/02.127ec562.jpg"},b808:function(t,n,e){t.exports=e.p+"img/05.594092ca.jpg"}});
//# sourceMappingURL=app.4e5114a3.js.map