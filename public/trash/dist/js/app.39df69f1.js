(function(e){function t(t){for(var r,o,u=t[0],l=t[1],c=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"98fbacbe"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"634836fb"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var f=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/registration"}},[e._v("Sign Up")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/login"}},[e._v("Logout")])],1),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"}),e._v(" "),n("div",{staticClass:"col-md-6"},[n("router-view")],1),e._v(" "),n("div",{staticClass:"col-md-3"})])])},a=[],i=n("2455");function u(e){n("e7be")}var l=null,c=!1,s=u,f=null,p=null,d=Object(i["a"])(l,o,a,c,s,f,p),v=d.exports,b=n("8c4f");r["default"].use(b["a"]);var h=new b["a"]({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/registration",name:"registration",component:function(){return n.e("about").then(n.bind(null,"3fd1"))}},{path:"/projects",name:"projects",component:function(){return n.e("about").then(n.bind(null,"acca"))},beforeEnter:function(e,t,n){localStorage.token?n():n(!1)}},{path:"/new-project",name:"new-project",component:function(){return n.e("about").then(n.bind(null,"0a37"))}}]}),g=h,m=n("5f5b"),y=(n("f9e3"),n("2dd8"),n("3459")),w=n("bc3a"),_=n.n(w),j=n("a7fe"),k=n.n(j);r["default"].use(k.a,_.a),r["default"].use(y["a"],"v-icon"),r["default"].axios.defaults.baseURL="http://localhost:3000/",r["default"].use(m["a"]),r["default"].config.productionTip=!1,new r["default"]({router:g,render:function(e){return e(v)}}).$mount("#app")},"98b9":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n#nav {\n  padding: 30px;\n}\n#nav a {\n  font-weight: bold;\n  color: #2c3e50;\n}\n#nav a.router-link-exact-active {\n  color: #42b983;\n}\n",""])},e7be:function(e,t,n){var r=n("98b9");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("474b47a6",r,!0,{})}});
//# sourceMappingURL=app.39df69f1.js.map