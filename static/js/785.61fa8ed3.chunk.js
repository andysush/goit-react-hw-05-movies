"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[785],{785:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(689),u=n(348),s="Cast_cast__box__CBUcA",i="Cast_cast__item__UfPEI",o="Cast_cast__img__IB6ux",A="Cast_cast__text__rZB6U",p=n(184),f=function(){var t=(0,c.UO)().movieId,e=(0,a.useState)([]),n=(0,r.Z)(e,2),f=n[0],h=n[1],d=(0,a.useState)(""),l=(0,r.Z)(d,2),m=l[0],g=l[1];return(0,a.useEffect)((function(){u.IQ(t).then((function(t){return h(t.cast)})).catch((function(t){return g(t.message)})),g("")}),[t]),(0,p.jsxs)("section",{className:s,children:[m&&(0,p.jsxs)("span",{children:["Sorry. ",m," \ud83d\ude2d Please, try again later"]}),(0,p.jsx)("ul",{children:f.length>0?f.map((function(t){var e=t.name,n=t.id,r=t.profile_path,a=t.character;return(0,p.jsxs)("li",{className:i,children:[(0,p.jsx)("img",{className:o,width:50,height:75,src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB6QAAAekB8yd1yAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUQSURBVHic7ZpBbxNHGIbfGceJjY0T23GMSdLQSEClhqoQpKigcuyB0kuP/QE99a/0D/QH9NhLaYWKuBRQVRFVkNIDKDi2Q+yExF6vcby73ux8PWTTQiLZ6/jbXSh9jta37/fOm4lndsaCiHAYbXvzOqS8JkCXAXEJoPSRorcCoQH0B0EsQ6lf07lTPx+peDWA7e3tU1GpvgPwRZA2A+RHW8mvc7nc5sEH/wSgN158RkTfA8iG5S4g6kKIr8YzU78AbgDuX/4x/vuDP6BuK7mQy+U2JQC40/5dGTwAZN0xQzRe1K4LKX4K21EYkKLPJaS8FraR0JDymtxf6t5NBOiy3F/n31XEJRnmJoeIbCKyw+oPUHokwG5qt91+XG/UNaOzW1BEkwAOwm9IIXbiJxK1bCabTiSTCwBkEKaEtrN5dC/MjGVaxXK5aDhKfeilPiLlX3Nz8/Gx2Ni83978DkDVatW7zaa2BCA24LPmxET690Lh9KfwcTb4FoDd7a4XS8WmcpwLw+jISOTP+TPzE9HR0Vkub6/p+yFKRHZx7Vln2MEDgHKcC8XiquHXl6UvAVRrG/eVUue59BTRuWpt4z6X3quwB2AYnactXb/KrdvS9auG0XnKrcsaABHZlUqZAEQ5dV2ilXIJ3P8KrAE0m9oy59Q/jCI612xqy5yarAFoWt33PQV3D9YALKu7wKkXRA+2ABzH0QCkuPR6kHJ7scAWQLfb3eHSCrIXWwBEKrC3Os5ebAGMjo5NcmkF2YstgJGRkRwAi0uvB5bbiwXOVUDISIR9p3YYt4dg0+MSAoCJ8XSDUy+IHqwBZDLpDwA4nJqHcNwebLAGEI2O5hOJ5D1OzVdJJJL3otHRPKcm+9vgzMzMIgS2uHUhsDUzM7PILcsegJSR5PT0bBW8K4I1PT1blTKSZNQE4NOBSOpk6mLh9PQKAI4Ni104Pb2SOpm6yKB1BPZjccPoPG2/bG+1O21AoAUa8tJVoKVpDdO2uneTJ5P5ePzEOSar+/Ich6KOs6fv7NQfNrX6rCLy9ShbClGcSGfXJyezH0ciI+PD6g0bgNrcqt1tNhqXCUgMa2YQBLA7kcksn8oXhjo2P3YAlmkWy+U1z5cdfrF/ifJ+fCwWO9bMO1YAu+32SmW9fAbBvP97ofXe7FwpkUx+NOiDA0+dlq4vV9YrZ/HmDB4AUpX1ytmWrg98XjhQAIbZebJRfb4AUHzQRv5D8Y3q8wXD7DwZ5CnPATiO87JcKsUw+B1fkMTKpVLMcZyXXh/wHEClvLZCRHPH8xUcRDRXKa+teK33FIBpdFZNy7pyfFvBYlrWFdPorHqp9RRAtVrdBuMhRAAI13Nf+gZg23bV6lpLw3sKFqtrLdm2Xe1X1zeAptZY9VL3BiJd772L+hXoLf1N/tbviRfvfQPYs+1Qt7rD4MV7zwAcx2kG/ZLDCQEJx3GavWp6BrBn276f8vpNvzH0DMCyuy1eO8HTbww9AyCl/DziDoR+Y3gblzdW/g8gbANhIwHoYZsIEV1CiEdhuwgNIR5JED0M20doED2URLgdto+wIMJtmZ7M3xREt8I2EzSC6FZ6Mn9zfxVQ8hsBmCF7CgwBmFDyG8BdBsenpp4BuAFCYD91C439Md5wx/zvPmA8m79DEbUI4EFY3gLgAUXU4ng2f+fgg9duh9PpQgXAUqPx4hMJ9aWAOA9g73DdW8SegKhB0LcK8odMZuo3AK/dhP0NXn0vCsCEU8kAAAAASUVORK5CYII=",alt:e}),(0,p.jsx)("p",{className:A,children:e}),(0,p.jsxs)("p",{className:A,children:["Character: ",a]})]},n)})):(0,p.jsx)("p",{children:"We don't have info about actors for this movie."})})]})}},348:function(t,e,n){n.d(e,{IQ:function(){return m},IT:function(){return f},Jh:function(){return w},Lo:function(){return d},v9:function(){return v}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="6e0255c07ab0a5172ae69937101051b4",i="/trending/movie/day",o="/movie/",A="/search/movie",p="/movie/";function f(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"?api_key=").concat(s));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/").concat(e,"?api_key=").concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p).concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p).concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return B.apply(this,arguments)}function B(){return(B=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(A,"?api_key=").concat(s,"&query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.Z.defaults.baseURL="http://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=785.61fa8ed3.chunk.js.map