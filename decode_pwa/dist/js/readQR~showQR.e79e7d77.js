(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["readQR~showQR"],{3040:function(t,e,r){"use strict";function n(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t,e){try{var r=o[t](e),a=r.value}catch(t){return void i(t)}r.done?n(a):Promise.resolve(a).then(s,u)}function s(t){a("next",t)}function u(t){a("throw",t)}s()})}}r.d(e,"a",function(){return n})},"562f":function(t,e,r){},6501:function(t,e,r){"use strict";var n=r("562f"),i=r.n(n);i.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"===typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{f=e.regeneratorRuntime=c?t.exports:{},f.wrap=_;var h="suspendedStart",l="suspendedYield",p="executing",d="completed",y={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(C([])));g&&g!==n&&i.call(g,a)&&(v=g);var w=E.prototype=x.prototype=Object.create(v);O.prototype=w.constructor=E,E.constructor=O,E[u]=O.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},L(j.prototype),j.prototype[s]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,r,n){var i=new j(_(t,e,r,n));return f.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=C,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function _(t,e,r,n){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new R(n||[]);return o._invoke=k(t,r,a),o}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function O(){}function E(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(r,n,o,a){var s=b(t[r],t,n);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){u.value=t,o(u)},a)}a(s.arg)}var r;function n(t,n){function i(){return new Promise(function(r,i){e(t,n,r,i)})}return r=r?r.then(i,i):i()}this._invoke=n}function k(t,e,r){var n=h;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return T()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=b(t,e,r);if("normal"===u.type){if(n=r.done?d:l,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=b(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},cf4c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"answer",style:{"border-color":t.color}},[t.pictureUrl&&"ACCEPTED"===t.status&&t.valid?r("div",[r("img",{attrs:{src:t.pictureUrl,width:"50%"}})]):t._e(),r("div",[r("h1",{staticClass:"title"},[t._v("Antwoord")]),r("h2",{staticClass:"subtitle"},[t._v(t._s(t.question))]),r("div",{staticClass:"has-text-centered"},["ACCEPTED"===t.status?r("div",[t.valid?r("p",{staticClass:"isOK"},[t._m(0),t._v("\n                     \n                    "),r("span",[t._v("OK")])]):r("p",{staticClass:"isNotOK"},[t._m(1),t._v("\n                     \n                    "),r("span",[t._v("Nee")])])]):"DENIED"===t.status?r("div",[t._m(2)]):t._e()]),r("br")])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"fa fa-check fa-3x",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"fa fa-bolt fa-3x",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"isNotOK"},[r("span",[r("i",{staticClass:"fa fa-times fa-3x",attrs:{"aria-hidden":"true"}})]),t._v("\n                     \n                    "),r("span",[t._v("Vraag is geweigerd")])])}],o={name:"Answer",props:["question","status","valid","color","pictureUrl"]},a=o,s=(r("6501"),r("2877")),u=Object(s["a"])(a,n,i,!1,null,null,null);u.options.__file="Answer.vue";e["a"]=u.exports},d722:function(t,e,r){"use strict";r.d(e,"f",function(){return o}),r.d(e,"d",function(){return s}),r.d(e,"b",function(){return c}),r.d(e,"g",function(){return h}),r.d(e,"e",function(){return p}),r.d(e,"a",function(){return y}),r.d(e,"c",function(){return m});r("96cf");var n=r("3040"),i=(r("cadf"),r("551c"),r("097d"),"http://oscity.nl:5005/");function o(t,e){return a.apply(this,arguments)}function a(){return a=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=i+"init_disclosure",t.next=3,fetch(n,{method:"POST",body:JSON.stringify({attribute_request:e,description:r})});case 3:return o=t.sent,t.abrupt("return",o.json());case 5:case"end":return t.stop()}},t,this)})),a.apply(this,arguments)}function s(t){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=i+"get_session",t.next=3,fetch(r,{method:"POST",body:JSON.stringify({session_id:e})});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}},t,this)})),u.apply(this,arguments)}function c(t,e){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=i+"attach_public_key",t.next=3,fetch(n,{method:"POST",body:JSON.stringify({public_key:e,session_id:r})});case 3:return o=t.sent,t.abrupt("return",o.json());case 5:case"end":return t.stop()}},t,this)})),f.apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=i+"get_session_status",t.next=3,fetch(r,{method:"POST",body:JSON.stringify({session_id:e})});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}},t,this)})),l.apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return d=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=i+"get_session",t.next=3,fetch(r,{method:"POST",body:JSON.stringify({session_id:e})});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}},t,this)})),d.apply(this,arguments)}function y(t,e){return v.apply(this,arguments)}function v(){return v=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=i+"accept_request",t.next=3,fetch(n,{method:"POST",body:JSON.stringify({session_id:e,username:r})});case 3:return o=t.sent,t.abrupt("return",o.json());case 5:case"end":return t.stop()}},t,this)})),v.apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return g=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=i+"deny_request",t.next=3,fetch(r,{method:"POST",body:JSON.stringify({session_id:e})});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}},t,this)})),g.apply(this,arguments)}}}]);
//# sourceMappingURL=readQR~showQR.e79e7d77.js.map