(function(t){function e(e){for(var o,i,a=e[0],f=e[1],u=e[2],p=0,c=[];p<a.length;p++)i=a[p],s[i]&&c.push(s[i][0]),s[i]=0;for(o in f)Object.prototype.hasOwnProperty.call(f,o)&&(t[o]=f[o]);l&&l(e);while(c.length)c.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var f=n[a];0!==s[f]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},s={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],f=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=f;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),s=n.n(o);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"myBox",staticClass:"box"},[n("h2",{on:{mousedown:t.handleDown,mousemove:t.handleMove,mouseup:t.handleUp}},[n("a",{attrs:{href:"javascript:;"},on:{click:t.handleClick,mousedown:t.handleAdown}},[t._v("点击回放拖动轨迹")])]),n("p",[n("strong",[t._v("Drag:")]),n("span",[t._v(t._s(t.bDrag))])]),n("p",[n("strong",[t._v("offsetTop:")]),n("span",[t._v(t._s(t.span1))])]),n("p",[n("strong",[t._v("offsetLeft:")]),n("span",[t._v(t._s(t.span2))])])])},r=[],i=n("5118"),a={name:"Mavs",data:function(){return{bDrag:!1,span1:"",span2:"",disX:0,disY:0,pos:[{x:"",y:""}]}},methods:{handleInitlalSpan:function(){var t=this.$refs.myBox;this.span1=t.offsetTop,this.span2=t.offsetLeft},handleDown:function(){var t=this.$refs.myBox;return this.bDrag=!0,this.disX=event.clientX-t.offsetLeft,this.disY=event.clientY-t.offsetTop,this.pos.push({x:t.offsetLeft,y:t.offsetTop}),!1},handleMove:function(){if(this.bDrag){var t=this.$refs.myBox,e=event.clientX-this.disX,n=event.clientY-this.disY,o=document.documentElement.clientWidth-t.offsetWidth,s=document.documentElement.clientHeight-t.offsetHeight;e=e<0?0:e,e=e>o?o:e,n=n<0?0:n,n=n>s?s:n,t.style.marginTop=0,t.style.marginLeft=0,t.style.left=e+"px",t.style.top=n+"px",this.pos.push({x:e,y:n}),this.span1=t.offsetTop,this.span2=t.offsetLeft}},handleUp:function(){var t=this.$refs.myBox;this.bDrag=!1,this.span1=t.offsetTop,this.span2=t.offsetLeft},handleClick:function(){var t=this,e=this.$refs.myBox;if(1!=this.pos.length)var n=Object(i["setInterval"])(function(){var o=t.pos.pop();o?(e.style.left=o.x+"px",e.style.top=o.y+"px",t.status()):Object(i["clearInterval"])(n)},30)},handleAdown:function(){event.cancelBubble=!0},status:function(){var t=this.$refs.myBox;this.span1=t.offsetTop,this.span2=t.offsetLeft}},mounted:function(){this.handleInitlalSpan(),document.addEventListener("mousemove",this.handleMove)}},f=a,u=(n("034f"),n("2877")),l=Object(u["a"])(f,s,r,!1,null,null,null),p=l.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(p)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.ce004a5a.js.map