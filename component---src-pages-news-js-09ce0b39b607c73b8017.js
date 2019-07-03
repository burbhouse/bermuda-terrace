(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});a(36);var n=a(0),i=a.n(n),r=a(170),o=a.n(r),l=a(161),c=a(183),s=a(169);t.default=function(e){var t=o()(e,"data.allContentfulNews.edges"),a=o()(e,"data.site.siteMetadata.title"),n=l.a.ul.withConfig({displayName:"news__ArticleList",componentId:"sc-1hu5z87-0"})(["margin:0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:5vmin;"]);return i.a.createElement(s.a,Object.assign({},e,{title:"News",image:"#",siteTitle:a}),i.a.createElement("h2",{className:"section-headline"},"Recent articles"),i.a.createElement(n,null,t.map(function(e){var t=e.node;return i.a.createElement("li",{key:t.slug},i.a.createElement(c.a,{article:t}))})))};var m="2725807737"},162:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),i=a.n(n),r=a(5),o=a.n(r),l=a(35),c=a.n(l);a.d(t,"a",function(){return c.a});a(163);var s=i.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,o=a?a.data:t[n]&&t[n].data;return i.a.createElement(i.a.Fragment,null,o&&r(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return i.a.createElement(s.Consumer,null,function(e){return i.a.createElement(m,{data:t,query:a,render:n||r,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},163:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},164:function(e){e.exports={primary:{"/":"Home","/events/":"Events","/news/":"News","/contact/":"Contact"},secondary:{"/":"Home","/board/":"Board","/projects/":"Projects","/events/":"Events","/news/":"News","/contact/":"Contact"},tertiary:{"/":"Home","/contact/":"Contact","/terms/":"Terms & Conditions","/privacy/":"Privacy Policy"}}},165:function(e){e.exports={primary:{"/":"Home","/events/":"Events","/news/":"News","/contact/":"Contact"},secondary:{"/":"Home","/association/":"Association","/board/":"Board","/dock/":"Dock","/projects/":"Projects","/events/":"Events","/news/":"News","/contact/":"Contact"},tertiary:{"/":"Home","/contact/":"Contact","/terms/":"Terms & Conditions","/privacy/":"Privacy Policy"}}},167:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),i=a.n(n),r=a(5),o=a.n(r),l=a(61),c=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Bermuda Terrace",logo:"/images/logo.png"}}}}},169:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(173),o=a.n(r),l=a(161),c=(a(36),a(90),a(60),a(37),a(166),a(162)),s=a(174),m=a(168),d=function(e){var t=Object(l.a)(c.a).withConfig({displayName:"brand__Brand",componentId:"s785di-0"})(["display:inline-flex;flex-grow:1;align-items:center;font-size:var(--font-size-xl);margin-left:1em;text-decoration:none;"]),a=l.a.img.withConfig({displayName:"brand__Logo",componentId:"s785di-1"})(["height:70px;width:auto;@media (max-width:768px){margin-left:-10px;height:60px;}"]);return i.a.createElement(c.b,{query:"2005248036",render:function(e){return i.a.createElement(t,{to:"/"},i.a.createElement(a,{alt:e.site.siteMetadata.title,src:e.site.siteMetadata.logo}))},data:m})},p=function(e){var t=l.a.header.withConfig({displayName:"header__Header",componentId:"sc-29c0gr-0"})(["display:flex;position:fixed;z-index:1;width:90vw;background:var(--color-header);padding-right:10vw;"]),n=l.a.ul.withConfig({displayName:"header__NavList",componentId:"sc-29c0gr-1"})(["display:inline-flex;justify-content:center;list-style:none;padding:0;margin:0;height:15vh;max-height:90px;font-size:var(--font-size-lg);@media (max-width:768px){visibility:hidden;}"]),r=l.a.li.withConfig({displayName:"header__NavListItem",componentId:"sc-29c0gr-2"})(["display:inline-flex;align-items:center;margin:0 1em;"]),o=Object(l.a)(c.a).withConfig({displayName:"header__NavLink",componentId:"sc-29c0gr-3"})(["color:var(--color-menu-link-primary);text-decoration:none;&:hover{color:var(--color-menu-link-primary-hover);border-bottom:solid 2px var(--color-menu-link-primary-hover);margin-bottom:-2px;}"]),m=a(164);try{m=a(165)}catch(p){"MODULE_NOT_FOUND"===p.code&&console.log("Site menu not found.")}return i.a.createElement("div",null,i.a.createElement(t,null,i.a.createElement(d,null),i.a.createElement(n,null,Object.keys(m.primary).map(function(e){return i.a.createElement(r,{key:"primary_"+e},i.a.createElement(o,{to:e},m.primary[e]))}))),i.a.createElement(s.slide,Object.assign({right:!0},e),Object.keys(m.secondary).map(function(e){return i.a.createElement(c.a,{key:"secondary_"+e,to:e},m.secondary[e])})))},u=function(e){var t=l.a.div.withConfig({displayName:"layout__App",componentId:"mxf4ha-0"})(["height:100vh;"]),a=l.a.div.withConfig({displayName:"layout__Wrapper",componentId:"mxf4ha-1"})(["overflow:auto;max-width:1180px;margin:0 auto;position:relative;top:8em;background:var(--color-white);@media (max-width:1180px){top:5.5em;}"]);return i.a.createElement(t,{id:"App"},i.a.createElement(p,{pageWrapId:"page-wrap",outerContainerId:"App"}),i.a.createElement(a,{id:"page-wrap"},e.children))},g=a(172),h=a.n(g),f=function(e){var t=l.a.section.withConfig({displayName:"hero__Hero",componentId:"sc-193yr11-0"})(["position:relative;background:var(--color-gray-light);color:var(--color-white);"]),a=Object(l.a)(h.a).withConfig({displayName:"hero__Image",componentId:"sc-193yr11-1"})(["height:31.8vh;max-height:400px;"]),n=l.a.div.withConfig({displayName:"hero__Placeholder",componentId:"sc-193yr11-2"})(["display:block;height:calc(var(--font-size-xl) * 2.8);background-color:var(--color-black)"]),r=l.a.div.withConfig({displayName:"hero__Details",componentId:"sc-193yr11-3"})(["position:absolute;background:rgba(0,0,0,0.8);left:50%;bottom:0;transform:translate(-50%,0);padding:0 0.5em;width:100%;"]),o=l.a.h1.withConfig({displayName:"hero__Headline",componentId:"sc-193yr11-4"})(["width:calc(100% - 10vmin);margin:0 auto;padding:2vmin 0;font-size:var(--font-size-xl);"]),c=e.image?i.a.createElement(a,{alt:e.title?e.title:"",fluid:e.image.fluid}):i.a.createElement(n,null);return i.a.createElement(t,null,c,e.title&&i.a.createElement(r,null,i.a.createElement(o,null,e.title)))},y=function(e){var t=l.a.footer.withConfig({displayName:"footer__Footer",componentId:"o5xpxj-0"})(["display:flex;z-index:1;width:calc(100% - 8vmin);background:var(--color-footer);padding:0 4vmin;margin:0;"]),n=l.a.ul.withConfig({displayName:"footer__NavList",componentId:"o5xpxj-1"})(["display:inline-flex;justify-content:left;flex-grow:1;list-style:none;padding:0;margin:0;height:15vh;max-height:120px;font-size:var(--font-size-sm);@media (max-width:768px){visibility:hidden;}"]),r=l.a.li.withConfig({displayName:"footer__NavListItem",componentId:"o5xpxj-2"})(["display:inline-flex;align-items:center;margin:0 1em;"]),o=Object(l.a)(c.a).withConfig({displayName:"footer__NavLink",componentId:"o5xpxj-3"})(["color:var(--color-menu-link-primary);text-decoration:none;&:hover{color:var(--color-menu-link-primary-hover);border-bottom:solid 2px var(--color-menu-link-primary-hover);margin-bottom:-2px;}"]),s=l.a.p.withConfig({displayName:"footer__Legal",componentId:"o5xpxj-4"})(["display:inline-flex;align-items:center;margin:0 1em;font-size:var(--font-size-sm);text-align:right;"]),m=a(164);try{m=a(165)}catch(d){"MODULE_NOT_FOUND"===d.code&&console.log("Site menu not found.")}return i.a.createElement(t,null,i.a.createElement(n,null,Object.keys(m.tertiary).map(function(e){return i.a.createElement(r,{key:"primary_"+e},i.a.createElement(o,{to:e},m.tertiary[e]))})),i.a.createElement(s,null,"Copyright ",(new Date).getFullYear()," ",e.siteTitle," | ",i.a.createElement("a",{href:"https://www.davidcabrera.me"},"Site by David Cabrera")))};t.a=function(e){var t=l.a.div.withConfig({displayName:"base__Wrapper",componentId:"sc-4yqait-0"})(["width:calc(100% - 10vmin);margin:0 auto;padding:5vmin 0;"]);return i.a.createElement(u,{location:e.location},i.a.createElement(o.a,{title:e.title+" | "+e.siteTitle}),i.a.createElement(f,{title:e.title,image:e.heroImage}),i.a.createElement(t,null,e.children),i.a.createElement(y,{siteTitle:e.siteTitle}))}},183:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(162),o=a(172),l=a.n(o),c=a(161);t.a=function(e){var t=e.article,a=c.a.div.withConfig({displayName:"article-preview__Preview",componentId:"sc-14hx6f5-0"})([""]),n=c.a.h3.withConfig({displayName:"article-preview__Title",componentId:"sc-14hx6f5-1"})(["font-size:1.5em;"]),o=c.a.p.withConfig({displayName:"article-preview__Tag",componentId:"sc-14hx6f5-2"})(["color:#A0A0A0;text-decoration:none;display:inline-block;padding:.33333rem .5rem;line-height:1;border-radius:2px;border:1px solid #A0A0A0;margin-right:.5em;"]);return i.a.createElement(a,null,i.a.createElement(r.a,{to:"/news/"+t.slug},i.a.createElement(l.a,{alt:"",fluid:t.heroImage.fluid})),i.a.createElement(n,null,i.a.createElement(r.a,{to:"/news/"+t.slug},t.title)),i.a.createElement("p",null,t.publishDate),t.tags.map(function(e){return i.a.createElement(o,{key:e},e)}))}}}]);
//# sourceMappingURL=component---src-pages-news-js-09ce0b39b607c73b8017.js.map