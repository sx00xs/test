(function(t){function e(e){for(var r,o,u=e[0],c=e[1],a=e[2],f=0,h=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"38c8":function(t,e,n){},5387:function(t,e,n){t.exports=n.p+"img/05.594092ca.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"box"},on:{mouseover:t.handleBoxOver,mouseout:t.handleBoxOut}},[r("div",{staticClass:"list"},[r("ul",{ref:"myUl"},[r("li",{ref:"myLi"},[r("img",{attrs:{src:n("6643")}})]),t._m(0),t._m(1),t._m(2),t._m(3)])]),r("ul",{staticClass:"count"},t._l(t.btns,function(e,n){return r("li",{key:n,class:{current:e.isCurrent},on:{mouseover:function(e){return t.handleBtnOver(n)}}},[t._v("\n      "+t._s(n+1)+"\n    ")])}),0)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("img",{attrs:{src:n("5d2b")}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("img",{attrs:{src:n("a334")}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("img",{attrs:{src:n("6903")}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("img",{attrs:{src:n("5387")}})])}],o={data:function(){return{index:0,bOrder:!0,playTimer:null,timer:null,btns:[{isCurrent:!0},{isCurrent:!1},{isCurrent:!1},{isCurrent:!1},{isCurrent:!1}]}},methods:{handleBoxOver:function(){clearInterval(this.playTimer)},handleBoxOut:function(){var t=this;this.playTimer=setInterval(function(){t.next()},3e3)},handleBtnOver:function(t){this.index=t,this.cutover()},cutover:function(){for(var t=0;t<this.btns.length;t++)this.btns[t].isCurrent=!1;this.btns[this.index].isCurrent=!0,this.startMove(-this.index*this.$refs.myLi.offsetHeight)},next:function(){this.bOrder?this.index++:this.index--,this.index<=0&&(this.index=0,this.bOrder=!0),this.index>=this.btns.length-1&&(this.index=this.btns.length-1,this.bOrder=!1),this.cutover()},startMove:function(t){var e=this;clearInterval(this.timer),this.timer=setInterval(function(){e.doMove(t)},20)},doMove:function(t){var e=(t-this.$refs.myUl.offsetTop)/10;e=e>0?Math.ceil(e):Math.floor(e),this.$refs.myUl.offsetTop==t?clearInterval(this.timer):this.$refs.myUl.style.top=this.$refs.myUl.offsetTop+e+"px"}},mounted:function(){var t=this;this.playTimer=setInterval(function(){t.next()},3e3)}},u=o,c=(n("034f"),n("2877")),a=Object(c["a"])(u,i,s,!1,null,null,null),l=a.exports;n("38c8");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(l)}}).$mount("#app")},"5d2b":function(t,e,n){t.exports=n.p+"img/02.127ec562.jpg"},"64a9":function(t,e,n){},6643:function(t,e,n){t.exports=n.p+"img/01.bfc90548.jpg"},6903:function(t,e,n){t.exports=n.p+"img/04.ee7c2b79.jpg"},a334:function(t,e,n){t.exports=n.p+"img/03.9a410fea.jpg"}});
//# sourceMappingURL=app.3b325683.js.map