"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(689),u=n(348),i="Reviews_reviews__box__lB7vt",s="Reviews_reviews__name__R-07q",o="Reviews_reviews__text__Y-Cmq",p=n(184),f=function(){var t=(0,c.UO)().movieId,e=(0,a.useState)([]),n=(0,r.Z)(e,2),f=n[0],h=n[1];return(0,a.useEffect)((function(){u.Jh(t).then((function(t){return h(t.results)})).catch((function(){return window.alert("Network Error. Please, try again later")}))}),[t]),(0,p.jsx)("div",{className:i,children:(0,p.jsx)("ul",{children:f.length>0?f.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{className:s,children:["Author: ",n]}),(0,p.jsx)("p",{className:o,children:r})]},e)})):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})})})}},348:function(t,e,n){n.d(e,{IQ:function(){return _},IT:function(){return h},Jh:function(){return m},Lo:function(){return l},v9:function(){return x}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="6e0255c07ab0a5172ae69937101051b4",s="/trending/movie/day",o="/movie/",p="/search/movie",f="/movie/";function h(){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p,"?api_key=").concat(i,"&query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.Z.defaults.baseURL="http://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=168.7890ed85.chunk.js.map