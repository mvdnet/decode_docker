(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["disclosure~onboarding~question~readQR~scan~showQR"],{3040:function(t,e,r){"use strict";function n(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t,e){try{var r=i[t](e),a=r.value}catch(t){return void o(t)}r.done?n(a):Promise.resolve(a).then(u,c)}function u(t){a("next",t)}function c(t){a("throw",t)}u()})}}r.d(e,"a",function(){return n})},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"===typeof t,h=e.regeneratorRuntime;if(h)s&&(t.exports=h);else{h=e.regeneratorRuntime=s?t.exports:{},h.wrap=b;var f="suspendedStart",p="suspendedYield",l="executing",y="completed",d={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(T([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=L.prototype=O.prototype=Object.create(v);_.prototype=w.constructor=L,L.constructor=_,L[c]=_.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},j(E.prototype),E.prototype[u]=function(){return this},h.AsyncIterator=E,h.async=function(t,e,r,n){var o=new E(b(t,e,r,n));return h.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},j(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},h.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof O?e:O,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=S(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function O(){}function _(){}function L(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(r,n,i,a){var u=x(t[r],t,n);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},a)}a(u.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function S(t,e,r){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return J()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?y:p,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:J}}function J(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},d722:function(t,e,r){"use strict";r.d(e,"g",function(){return i}),r.d(e,"e",function(){return u}),r.d(e,"b",function(){return s}),r.d(e,"h",function(){return f}),r.d(e,"f",function(){return l}),r.d(e,"a",function(){return d}),r.d(e,"d",function(){return g}),r.d(e,"c",function(){return w});r("96cf");var n=r("3040"),o="http://oscity.nl:5005/";function i(t,e){return a.apply(this,arguments)}function a(){return a=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=o+"init_disclosure",t.next=3,fetch(n,{method:"POST",body:JSON.stringify({attribute_request:e,description:r})});case 3:return i=t.sent,t.abrupt("return",i.json());case 5:case"end":return t.stop()}},t,this)})),a.apply(this,arguments)}function u(t){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=o+"get_session",t.next=3,fetch(r,{method:"POST",body:JSON.stringify({session_id:e})});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}},t,this)})),c.apply(this,arguments)}function s(t,e){return h.apply(this,arguments)}function h(){return h=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=o+"attach_public_key",t.next=3,fetch(n,{method:"POST",body:JSON.stringify({public_key:e,session_id:r})});case 3:return i=t.sent,t.abrupt("return",i.json());case 5:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=o+"get_session_status",t.next=3,fetch(r,{method:"POST",body:JSON.stringify({session_id:e})});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}},t,this)})),p.apply(this,arguments)}function l(t){return y.apply(this,arguments)}function y(){return y=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=o+"get_session",t.next=3,fetch(r,{method:"POST",body:JSON.stringify({session_id:e})});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}},t,this)})),y.apply(this,arguments)}function d(t,e){return v.apply(this,arguments)}function v(){return v=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=o+"accept_request",t.next=3,fetch(n,{method:"POST",body:JSON.stringify({session_id:e,username:r})});case 3:return i=t.sent,t.abrupt("return",i.json());case 5:case"end":return t.stop()}},t,this)})),v.apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return m=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=o+"deny_request",t.next=3,fetch(r,{method:"POST",body:JSON.stringify({session_id:e})});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}},t,this)})),m.apply(this,arguments)}function w(t,e){return b.apply(this,arguments)}function b(){return b=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=o+"init_disclosure",t.next=3,fetch(n,{method:"POST",body:JSON.stringify({description:e,attribute_request:r})});case 3:return i=t.sent,t.abrupt("return",i.json());case 5:case"end":return t.stop()}},t,this)})),b.apply(this,arguments)}}}]);
//# sourceMappingURL=disclosure~onboarding~question~readQR~scan~showQR.619d00e3.js.map