(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(t,e,r){"use strict";r.r(e);r(97),r(21),r(98);var n={computed:{posts:function(){return console.log(this.$site.pages),this.$site.pages.filter(function(t){return t.path.startsWith("/blog/")&&!t.frontmatter.blog_index}).sort(function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)})}}},a=r(0),o=Object(a.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.posts,function(e){return r("v-flex",{key:e.key,attrs:{xs12:""}},[r("v-card",[r("v-img",{attrs:{src:e.frontmatter.image,"aspect-ratio":"2.75"}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.frontmatter.title))]),t._v(" "),r("div",[t._v(t._s(e.frontmatter.description)+" ...")])])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{flat:"",color:"orange",to:e.path}},[t._v("More")])],1)],1),t._v(" "),r("br")],1)}),1)},[],!1,null,null,null);o.options.__file="BlogIndex.vue";e.default=o.exports}}]);