(function(e){function t(t){for(var r,o,s=t[0],u=t[1],l=t[2],i=0,p=[];i<s.length;i++)o=s[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return u.p+"js/"+({home:"home"}[e]||e)+"."+{home:"06e9ee9e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({home:"home"}[e]||e)+"."+{home:"92647ec0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],i=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===r||i===a))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],i=l.getAttribute("data-href");if(i===r||i===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var p=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"64be":function(e,t,n){"use strict";n("c894")},9224:function(e){e.exports=JSON.parse('{"a":"1.0.1"}')},c894:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),a=Object(o["g"])("a",{href:"#/",class:"text-reset"},[Object(o["g"])("p",{class:"m-0 p-0"},"TVbarata.com")],-1);function c(e,t,n,r,c,s){var u=Object(o["x"])("CustomNavBar"),l=Object(o["x"])("router-view"),i=Object(o["x"])("CustomFooter");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])(u,{title:"TVbarata.com",sections:e.sections},null,8,["sections"]),Object(o["g"])(l),Object(o["g"])(i,null,{default:Object(o["F"])((function(){return[a]})),_:1})],64)}n("4de4"),n("4160"),n("d81d"),n("07ac"),n("159b"),n("5a07");var s={class:"ml-auto mr-5 pr-5 navbar-nav"};function u(e,t,n,r,a,c){var u=Object(o["x"])("router-link");return Object(o["p"])(),Object(o["d"])("nav",{class:"navbar navbar-expand-md navbar-light mb-0",style:"background-color: ".concat(r.VUE_APP_NAVBAR_BG_CSS_COLOR,"; color: ").concat(r.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";")},[Object(o["g"])("a",{class:"navbar-brand",href:"#/",style:"color: ".concat(r.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";")},Object(o["z"])(n.title),5),Object(o["g"])("button",{class:"navbar-toggler ".concat(r.collapseMenu?"collapsed":""),onClick:t[1]||(t[1]=function(e){return r.collapseMenu=!r.collapseMenu}),type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":!r.collapseMenu,"aria-label":"Toggle navigation"},[Object(o["g"])("span",{class:"navbar-toggler-icon",style:"background-color: ".concat(r.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";")},null,4)],10,["aria-expanded"]),Object(o["g"])("div",{class:"navbar-collapse collapse ".concat(r.collapseMenu?"":"show"),id:"navbarNavDropdown"},[Object(o["g"])("ul",s,[Object(o["g"])("li",{class:"nav-item dropleft dropdown ".concat(r.showDropdown?"show":"")},[Object(o["g"])("a",{style:"color: ".concat(r.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";"),class:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink",href:"",onClick:t[2]||(t[2]=Object(o["H"])((function(e){return r.showDropdown=!r.showDropdown}),["prevent"])),"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":r.showDropdown}," Categorías ",12,["aria-expanded"]),Object(o["g"])("div",{class:"dropdown-menu ".concat(r.showDropdown?"show":""),style:{"max-height":"300px","overflow-y":"scroll"}},[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(n.sections,(function(e,n){return Object(o["p"])(),Object(o["d"])(u,{key:n,style:{width:"200px"},class:"dropdown-item text-truncate",to:"".concat(n),onClick:t[3]||(t[3]=function(e){return r.showDropdown=!1})},{default:Object(o["F"])((function(){return[Object(o["f"])(Object(o["z"])(n)+" ("+Object(o["z"])(e)+")",1)]})),_:2},1032,["to"])})),128))],2)],2)])],2)],4)}var l=Object({NODE_ENV:"production",BASE_URL:"/"}),i=l.VUE_APP_NAVBAR_BG_CSS_COLOR,p=void 0===i?"black":i,d=l.VUE_APP_NAVBAR_TEXT_CSS_COLOR,b=void 0===d?"white":d,O={props:{title:String,sections:Object},setup:function(){var e=Object(o["u"])(!1),t=Object(o["u"])(!0);return{showDropdown:e,collapseMenu:t,VUE_APP_NAVBAR_BG_CSS_COLOR:p,VUE_APP_NAVBAR_TEXT_CSS_COLOR:b}}};O.render=u;var f=O,_=(n("95ca"),{href:"#/",class:"text-reset"}),v={class:"m-0 p-0"},h={class:"m-0 p-0"},g=Object(o["f"])("Created with ❤️ by "),j=Object(o["g"])("a",{href:"https://github.com/yeikiu/",target:"_blank",class:"text-reset"},"JQ",-1);function m(e,t,n,r,a,c){return Object(o["p"])(),Object(o["d"])("div",{class:"text-center mt-5 py-2",style:"background-color: ".concat(a.VUE_APP_FOOTER_BG_CSS_COLOR,"; color: ").concat(a.VUE_APP_FOOTER_TEXT_CSS_COLOR,";")},[Object(o["w"])(e.$slots,"default",{},(function(){return[Object(o["g"])("a",_,[Object(o["g"])("p",v,"v"+Object(o["z"])(a.version),1)])]})),Object(o["g"])("p",h,[g,j,Object(o["f"])(" © "+Object(o["z"])((new Date).toDateString().slice(-4)),1)])],4)}var w=n("9224"),C=Object({NODE_ENV:"production",BASE_URL:"/"}),E=C.VUE_APP_FOOTER_BG_CSS_COLOR,y=void 0===E?"darkgray":E,S=C.VUE_APP_FOOTER_TEXT_CSS_COLOR,A=void 0===S?"white":S,P={data:function(){return console.log({version:w["a"]}),{version:w["a"],VUE_APP_FOOTER_BG_CSS_COLOR:y,VUE_APP_FOOTER_TEXT_CSS_COLOR:A}}};P.render=m;var R=P,T=(n("f9e3"),Object(o["h"])({components:{CustomNavBar:f,CustomFooter:R},setup:function(){var e=Object(o["k"])("items",{}),t=Object.values(e).filter((function(e){return e.brand})).map((function(e){return e.brand})),n={};return t.forEach((function(e){n[e]=n[e]?n[e]+1:1})),{sections:n}}}));n("64be");T.render=c;var V=T,x=(n("d3b7"),n("6c02")),k=[{path:"/:category?",props:!0,component:function(){return n.e("home").then(n.bind(null,"bb51"))}}],N=Object(x["a"])({history:Object(x["b"])(),routes:k}),L=N,B=n("e4fd"),U="data/data.json",D=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B["a"].get(U);case 2:t=e.sent,n=t.data,Object(o["c"])(V).use(L).provide("items",n).mount("#app");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();D()}});
//# sourceMappingURL=app.5f0607d2.js.map