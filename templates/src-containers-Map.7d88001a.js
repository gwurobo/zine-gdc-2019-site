(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(18),i=n(21);n(115);t.a=Object(r.withSiteData)(function(e){var t=e.tableOfContents;return o.a.createElement("div",{className:"toc-wrapper"},o.a.createElement(i.Location,null,function(e){var n=e.location;return t.map(function(e){var t=e.route,a=e.title,r="unionfaqs"===e.articleType?o.a.createElement("span",{className:"toc-unionfaqs"},"UnionFAQs: "):null;return o.a.createElement("span",{className:"toc-item",key:t},n.pathname===t||n.pathname===t+"/"?o.a.createElement("span",{className:"toc-item-active"},r,a):o.a.createElement(i.Link,{to:t},r,a))})}))})},125:function(e,t,n){"use strict";var a=n(0),o=n.n(a);n(116);t.a=function(){return o.a.createElement("div",null,o.a.createElement("h2",{className:"tc"},"Download the Zine!"),o.a.createElement("div",{className:"downloadzines-container"},o.a.createElement("a",{title:"Download the Zine! (Waluigi cover by @pioldes)",href:"https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019waluigi.pdf"},o.a.createElement("img",{className:"downloadzines-cover",src:"/images/cover_thumb_waluigi.jpg"})),o.a.createElement("a",{title:"Download the Zine! (Isabelle cover)",href:"https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019isabelleisabelle.pdf"},o.a.createElement("img",{className:"downloadzines-cover",src:"/images/cover_thumb_isabelle.jpg"})),o.a.createElement("a",{title:"Download the Zine! (Unionize! cover)",href:"https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019unionize.pdf"},o.a.createElement("img",{className:"downloadzines-cover",src:"/images/cover_thumb_unionize.jpg"})),o.a.createElement("a",{title:"Download the Zine! (Egg cover by @mushbuh)",href:"https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019egg.pdf"},o.a.createElement("img",{className:"downloadzines-cover",src:"/images/cover_thumb_egg.jpg"}))),o.a.createElement("h3",{className:"tc"},"Choose from the four cover variants!",o.a.createElement("br",null),"Print and share with your coworkers and friends!"),o.a.createElement("p",{className:"tc downloadzines-notes"},o.a.createElement("div",null,o.a.createElement("a",{href:"/endnotes"},"References page")),o.a.createElement("div",null,o.a.createElement("a",{href:"/how-to-print"},"Printing hints")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://gameworkersunite.org"},"Game Workers Unite International"))))}},126:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(18),i=(n(117),function(){return o.a.createElement("div",{className:"clearfix"})}),l=n(21),c=(n(118),function(e){var t=e.prevPage,n=e.nextPage;return o.a.createElement("div",{className:"prev-next-wrapper"},t?o.a.createElement(l.Link,{to:t.route},"<"," ",t.name):null,n?o.a.createElement(l.Link,{to:n.route},n.name," ",">"):null)}),s=n(124),m=n(125),u=function(e){var t=e.prevPage,n=e.nextPage;return o.a.createElement("div",{style:{marginBottom:"2rem"}},o.a.createElement(c,{prevPage:t,nextPage:n}),o.a.createElement(s.a,null),o.a.createElement(m.a,null))};n(119),t.a=Object(r.withRouteData)(function(e){var t=e.title,n=e.contents,a=e.prevPage,l=e.nextPage,c=e.header,m=e.type,d=e.containerClassName,p=void 0===d?"":d,f=e.headerClassName,h=void 0===f?"":f,g=e.contentClassName,v=void 0===g?"":g,E=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.Head,{title:"GWU GDC 2019 Zine - ".concat(t)},o.a.createElement("meta",{property:"og:title",content:"".concat("unionfaqs"===m?"UnionFAQs: ":"").concat(t)})),o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("div",{style:{width:"100%",position:"relative"}},o.a.createElement("div",{className:"nav_sidebar"},o.a.createElement(s.a,null))),o.a.createElement("div",{className:"page ".concat(p)},c?c(t):o.a.createElement("h2",{className:h},t),E||o.a.createElement("div",{className:"page-content ".concat(v),dangerouslySetInnerHTML:{__html:n}}),o.a.createElement(i,null)),o.a.createElement(u,{prevPage:a,nextPage:l})))})},49:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(145),i=n.n(r),l=n(126);n(121);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}window.WORLD_110M_JSON_PATH="/world-110m.json",window.WORLD_50M_JSON_PATH="/world-50m.json";var p=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=m(t).call(this,e))||"object"!==c(o)&&"function"!=typeof o?d(a):o).state={zoom:.9},n.handleZoomIn=n.handleZoomIn.bind(d(d(n))),n.handleZoomOut=n.handleZoomOut.bind(d(d(n))),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.a.Component),n=t,(a=[{key:"handleZoomIn",value:function(){this.setState(function(e){return{zoom:Math.min(e.zoom+.5,20)}})}},{key:"handleZoomOut",value:function(){this.setState(function(e){return{zoom:Math.max(e.zoom-.5,1)}})}},{key:"render",value:function(){var e=this.state.zoom;return o.a.createElement(l.a,{containerClassName:"map_container"},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}},o.a.createElement("div",{style:{width:"100%",position:"relative"}},o.a.createElement("div",{style:{position:"absolute",right:10,top:10,display:"flex",flexDirection:"column"}},o.a.createElement("button",{disabled:e>=20,style:{marginBottom:10,opacity:e>=20?.3:1},onClick:this.handleZoomIn},"➕"),o.a.createElement("button",{disabled:e<=1,style:{opacity:e<=1?.3:1},onClick:this.handleZoomOut},"➖"))),o.a.createElement(i.a,{className:"chapter_map",centerLat:18,centerLng:13,height:450,markerScale:.1,scale:205,width:780,enablePanning:!0,zoom:this.state.zoom,tooltipClassName:"chapter_map_tooltip"}),o.a.createElement("p",{style:{textAlign:"center",fontSize:"1.4rem",marginTop:"1rem"}},"Find your local chapter and get involved!")))}}])&&s(n.prototype,a),r&&s(n,r),t}();t.default=p}}]);
//# sourceMappingURL=src-containers-Map.7d88001a.js.map