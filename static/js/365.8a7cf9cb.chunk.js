"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[365],{510:function(t,n,e){e.d(n,{Z:function(){return o}});e(791);var r=e(689),a=e(87),c="MovieList_movieList__uFrOZ",u="MovieList_movieList__item__NEeVw",i=e(184),o=function(t){var n=t.movieData,e=(0,r.TH)();return(0,i.jsx)("ul",{className:c,children:n.map((function(t){var n=t.id,r=t.title;return(0,i.jsx)("li",{className:u,children:(0,i.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:e},children:r})},n)}))})}},348:function(t,n,e){e.d(n,{IQ:function(){return m},IT:function(){return v},Jh:function(){return w},Lo:function(){return l},v9:function(){return x}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="6e0255c07ab0a5172ae69937101051b4",o="/trending/movie/day",s="/movie/",p="/search/movie",f="/movie/";function v(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"?api_key=").concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p,"?api_key=").concat(i,"&query=").concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"},365:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(439),a=e(348),c=e(791),u="Pages_filmList__title__QhCvJ",i=e(510),o=e(184);var s=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1];return(0,c.useEffect)((function(){a.IT().then((function(t){return s(t.results)})).catch((function(){return window.alert("Network Error. Please, try again later")}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:u,children:" Top films: "}),(0,o.jsx)(i.Z,{movieData:e})]})}}}]);
//# sourceMappingURL=365.8a7cf9cb.chunk.js.map