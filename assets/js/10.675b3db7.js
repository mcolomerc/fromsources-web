(window.webpackJsonp=window.webpackJsonp||[]).push([[10,20],{259:function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"a",function(){return l}),n.d(e,"j",function(){return c}),n.d(e,"i",function(){return p}),n.d(e,"f",function(){return f}),n.d(e,"g",function(){return h}),n.d(e,"h",function(){return d}),n.d(e,"b",function(){return v}),n.d(e,"e",function(){return g}),n.d(e,"l",function(){return m}),n.d(e,"m",function(){return b}),n.d(e,"c",function(){return _}),n.d(e,"k",function(){return x});n(260);var r=n(103),i=n.n(r),a=(n(68),n(50),n(69),n(67),n(265),n(34)),s=n.n(a),o=(n(264),n(148),/#.*$/),u=/\.(md|html)$/,l=/\/$/,c=/^(https?:|mailto:|tel:)/;function p(t){return decodeURI(t).replace(o,"").replace(u,"")}function f(t){return c.test(t)}function h(t){return/^mailto:/.test(t)}function d(t){return/^tel:/.test(t)}function v(t){if(f(t))return t;var e=t.match(o),n=e?e[0]:"",r=p(t);return l.test(r)?t:r+".html"+n}function g(t,e){var n=t.hash,r=function(t){var e=t.match(o);if(e)return e[0]}(e);return(!r||n===r)&&p(t.path)===p(e)}function m(t,e,n){n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=p(e),i=0;i<t.length;i++)if(p(t[i].path)===r)return s()({},t[i],{type:"page",path:v(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function b(t,e,n,r){var a=n.pages,o=n.themeConfig,u=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||u.sidebar||o.sidebar))return function(t){var e=_(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var l=u.sidebar||o.sidebar;if(l){var c=function(t,e){if(i()(e))return{base:"/",config:e};for(var n in e)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(n))return{base:n,config:e[n]};var r;return{}}(e,l),p=c.base,f=c.config;return f?f.map(function(t){return function t(e,n,r,a){if("string"==typeof e)return m(n,e,r);if(i()(e))return s()(m(n,e[0],r),{title:e[1]});a&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var o=e.children||[];return{type:"group",title:e.title,children:o.map(function(e){return t(e,n,r,!0)}),collapsable:!1!==e.collapsable}}(t,a,p)}):[]}return[]}function _(t){var e;return(t=t.map(function(t){return s()({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function x(t){return s()(t,{type:t.items&&t.items.length?"links":"link"})}},260:function(t,e,n){"use strict";var r=n(8),i=n(149)(!1),a=[].indexOf,s=!!a&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(s||!n(49)(a)),"Array",{indexOf:function(t){return s?a.apply(this,arguments)||0:i(this,t,arguments[1])}})},264:function(t,e,n){"use strict";var r=n(10),i=n(25),a=n(145),s=n(146);n(147)("match",1,function(t,e,n,o){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=r(t),l=String(this);if(!u.global)return s(u,l);var c=u.unicode;u.lastIndex=0;for(var p,f=[],h=0;null!==(p=s(u,l));){var d=String(p[0]);f[h]=d,""===d&&(u.lastIndex=a(l,i(u.lastIndex),c)),h++}return 0===h?null:f}]})},265:function(t,e,n){"use strict";var r=n(150),i=n(10),a=n(104),s=n(145),o=n(25),u=n(146),l=n(105),c=n(18),p=Math.min,f=[].push,h=!c(function(){RegExp(4294967295,"y")});n(147)("split",2,function(t,e,n,c){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);for(var a,s,o,u=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,h=void 0===e?4294967295:e>>>0,d=new RegExp(t.source,c+"g");(a=l.call(d,i))&&!((s=d.lastIndex)>p&&(u.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&f.apply(u,a.slice(1)),o=a[0].length,p=s,u.length>=h));)d.lastIndex===a.index&&d.lastIndex++;return p===i.length?!o&&d.test("")||u.push(""):u.push(i.slice(p)),u.length>h?u.slice(0,h):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,i,r):d.call(String(i),n,r)},function(t,e){var r=c(d,t,this,e,d!==n);if(r.done)return r.value;var l=i(t),f=String(this),v=a(l,RegExp),g=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),b=new v(h?l:"^(?:"+l.source+")",m),_=void 0===e?4294967295:e>>>0;if(0===_)return[];if(0===f.length)return null===u(b,f)?[f]:[];for(var x=0,$=0,k=[];$<f.length;){b.lastIndex=h?$:0;var y,C=u(b,h?f:f.slice($));if(null===C||(y=p(o(b.lastIndex+(h?0:$)),f.length))===x)$=s(f,$,g);else{if(k.push(f.slice(x,$)),k.length===_)return k;for(var w=1;w<=C.length-1;w++)if(k.push(C[w]),k.length===_)return k;$=x=y}}return k.push(f.slice(x)),k}]})},279:function(t,e,n){},295:function(t,e,n){"use strict";n.r(e);var r={name:"Social",props:{url:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},quote:{type:String,default:""},hashtags:{type:String,default:""}}},i=n(24),a=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("social-sharing",{attrs:{url:this.url,title:this.title,description:this.description,quote:this.quote,hashtags:this.hashtags,"twitter-user":"mcolomer"},inlineTemplate:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("network",{attrs:{network:"facebook"}},[e("v-icon",{staticStyle:{cursor:"pointer"},attrs:{large:"",color:"blue darken-2"}},[this._v("fab fa-facebook-square")])],1),this._v(" "),e("network",{attrs:{network:"linkedin"}},[e("v-icon",{staticStyle:{cursor:"pointer"},attrs:{large:"",color:"blue darken-2"}},[this._v("fab fa-linkedin")])],1),this._v(" "),e("network",{attrs:{network:"twitter"}},[e("v-icon",{staticStyle:{cursor:"pointer"},attrs:{large:"",color:"blue darken-2"}},[this._v("fab fa-twitter-square")])],1)],1)},staticRenderFns:[]}})},[],!1,null,null,null);e.default=a.exports},308:function(t,e,n){"use strict";var r=n(279);n.n(r).a},317:function(t,e,n){"use strict";n.r(e);var r=n(52),i=(n(50),n(69),n(148),n(259));function a(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(r.a)(t.children||[])):i.push(t)});for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===t.path)return i[a+n]}}var s={props:["sidebarItems"],components:{Social:n(295).default},computed:{url:function(){if(this.$page.path)return"https://marcelogft.github.io/fromsources-web/".concat(this.$page.path)},title:function(){if(this.$page.frontmatter.title)return this.$page.frontmatter.title},description:function(){if(this.$page.frontmatter.description)return this.$page.frontmatter.description},quote:function(){if(this.$page.frontmatter.quote)return this.$page.frontmatter.quote},hashtags:function(){if(this.$page.frontmatter.hashtags)return this.$page.frontmatter.hashtags},lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(i.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(i.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,r=t.docsDir,a=void 0===r?"":r,s=t.docsBranch,o=void 0===s?"master":s,u=t.docsRepo,l=void 0===u?e:u,c=Object(i.i)(this.$page.path);return i.a.test(c)?c+="README.md":c+=".md",l&&n?this.createEditLink(e,l,a,o,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,a){return/bitbucket.org/.test(t)?(i.j.test(e)?e:t).replace(i.a,"")+"/".concat(r)+(n?"/"+n.replace(i.a,""):"")+a+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.j.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit/".concat(r)+(n?"/"+n.replace(i.a,""):"")+a}}},o=(n(308),n(24)),u=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("Content",{attrs:{custom:!1}})],1),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),n("section",[n("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("div",{staticClass:"text-xs-center"},[t.title?n("Social",{attrs:{url:t.url,title:t.title,description:t.description,quote:t.quote,hashtags:t.hashtags}}):t._e()],1)])],1)],1),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null);e.default=u.exports}}]);