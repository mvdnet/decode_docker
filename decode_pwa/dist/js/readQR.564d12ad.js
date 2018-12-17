(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["readQR"],{"0d1a":function(e,t){e.exports="-- generate a simple keyring\nkeyring = ECDH.new()\nkeyring:keygen()\n\n-- export the keypair to json\nexport = JSON.encode(\n   {\n      public  = keyring:public():base64(),\n\t  private = keyring:private():base64()\n   }\n)\nprint(export)\n"},"2fdb":function(e,t,n){"use strict";var s=n("5ca1"),i=n("d2c8"),r="includes";s(s.P+s.F*n("5147")(r),"String",{includes:function(e){return!!~i(this,e,r).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,n){var s=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[s]=!1,!"/./"[e](t)}catch(e){}}return!0}},6762:function(e,t,n){"use strict";var s=n("5ca1"),i=n("c366")(!0);s(s.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},a860:function(e,t){e.exports="data = read_json(DATA)\nkeys = read_json(KEYS)\n\nheader = msgunpack(base64(data.header))\n\ninternal_key = ECDH.new()\ninternal_key:private(base64(keys.private))\n\npayload = decrypt(internal_key, base64(header.pub_key), map(data, base64))\n\nprint(JSON.encode(msgunpack(payload.text)))\n"},aae3:function(e,t,n){var s=n("d3f4"),i=n("2d95"),r=n("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},d2c8:function(e,t,n){var s=n("aae3"),i=n("be13");e.exports=function(e,t,n){if(s(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},dfc5:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loggedIn?e.onboardingRequest?n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",[e.data?n("div",[n("pre",[e._v(e._s(e.data[0]))]),n("img",{attrs:{src:"data:image/jpeg;base64,"+e.image}})]):e._e()])])]):e.request?n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[e.response?e.response.response.data?n("div",{staticClass:"has-text-centered"},[n("answer",{attrs:{question:e.request.description,status:e.response.response.data.request_status,valid:e.response.response.data.request_valid,color:e.response.response.data.secret,pictureUrl:e.pictureUrl}}),n("br"),n("p",[n("button",{staticClass:"button",on:{click:function(t){e.endQuestion()}}},[e._v("OK")])])],1):e._e():n("div",[n("h1",{staticClass:"title"},[e._v("Beantwoord vraag")]),n("h2",{staticClass:"subtitle"},[e._v("\n                    "+e._s(e.request.description)+"\n                ")]),n("div",[n("button",{staticClass:"button is-link",on:{click:function(t){e.acceptQuestion()}}},[e._v("OK")]),e._v("\n                     \n                    "),n("button",{staticClass:"button is-danger",on:{click:function(t){e.denyQuestion()}}},[e._v("Weiger")])]),n("h2",{staticClass:"subtitle"},[e._v("\n                    "+e._s(e.sessionId)+"\n                ")])])])]):n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("Scan QR Code")]),n("div",[n("h2",{staticClass:"subtitle"},[e._v("\n                    Scan de QR code om de identiteitsvraag te lezen\n                ")]),n("div",[n("qrcode-reader",{on:{decode:e.onDecode}})],1)]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Session ID manual input")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputSession,expression:"inputSession"}],staticClass:"input",attrs:{type:"text",placeholder:"Session code"},domProps:{value:e.inputSession},on:{change:e.onInputSession,input:function(t){t.target.composing||(e.inputSession=t.target.value)}}})]),n("p",[n("button",{staticClass:"button is-link",attrs:{disabled:!e.inputSession},on:{click:function(t){e.getRequest(e.sessionId)}}},[e._v("Get Request")])])])])]):n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("Login")]),n("div",[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Naam")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputUsername,expression:"inputUsername"}],staticClass:"input",attrs:{type:"text",placeholder:"Je naam"},domProps:{value:e.inputUsername},on:{input:function(t){t.target.composing||(e.inputUsername=t.target.value)}}})])]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Pincode")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.pincode,expression:"pincode"}],staticClass:"input",attrs:{type:"password",maxlength:"4",placeholder:"Pincode",pattern:"[0-9]{4}"},domProps:{value:e.pincode},on:{input:function(t){t.target.composing||(e.pincode=t.target.value)}}})])]),n("p",[n("button",{staticClass:"button is-link",attrs:{disabled:!(e.inputUsername&&4===e.pincode.length)},on:{click:function(t){e.login()}}},[e._v("Log in")])])])])]),e.debug?n("div",[n("pre",[e._v(e._s(e.sessionId))]),n("pre",[e._v(e._s(e.request))]),n("pre",[e._v(e._s(e.response))])]):e._e()])},i=[],r=(n("96cf"),n("3040")),a=(n("6762"),n("2fdb"),n("c93e")),o=(n("cadf"),n("551c"),n("097d"),n("2f62")),c=n("9a3e"),u=window.io.connect("http://oscity.nl:5005/");function d(e){u.emit("join_room",{session_id:e})}var l={INITIALIZED:"INITIALIZED",GOT_PUB_KEY:"GOT_PUB_KEY",GOT_ENCR_DATA:"GOT_ENCR_DATA",FINALIZED:"FINALIZED"},p=n("298f"),h=n("d722"),v=n("cf4c"),g=n("0d1a"),f=n.n(g),m=n("a860"),b=n.n(m),_={data:function(){return{sessionId:null,request:null,onboardingRequest:null,response:null,inputSession:"",inputUsername:"aj.jansen",pincode:"1234",pictureUrl:null,loggedIn:!1,result:null,keypair:null,encryptedData:null,decrypted:null,session:null,data:null,image:null}},computed:Object(a["a"])({},Object(o["c"])(["username","debug"])),components:{QrcodeReader:c["QrcodeReader"],answer:v["a"]},methods:Object(a["a"])({},Object(o["b"])({setUsername:"setUsername"}),{onDecode:function(e){if(e){if(e.includes("http")){var t=e.indexOf("?");this.sessionId=e.substring(t+"?session=".length,e.length)}else this.sessionId=e;this.getRequest(this.sessionId)}},zenroom:function(e){var t=this;window.Module=Object(a["a"])({},window.Module,{exec_ok:function(){return t.result+=" OK"},exec_error:function(){return t.result+=" ERROR"}});var n=function(){window.Module.print=function(e){return t.keypair=e};var e=null,n=null,s=null,i=f.a;window.Module.ccall("zenroom_exec","number",["string","string","string","string","number"],[i,s,e,n,1])},s=function(){window.Module.print=function(e){return t.setDecryptedValue(e)};var e=t.keypair,n=t.encryptedData,s=null,i=b.a;window.Module.ccall("zenroom_exec","number",["string","string","string","string","number"],[i,s,e,n,1])};"keypair"===e?n():"decrypt"===e&&s()},joinOnboarding:function(){this.zenroom("keypair"),this.result=this.keypair,this.sendPublicKey(JSON.parse(this.keypair).public)},sendPublicKey:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["b"])(t,this.sessionId);case 2:this.response=e.sent,this.result=this.response;case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),handleEncrypedData:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["e"])(this.sessionId);case 2:this.session=e.sent,this.encryptedData=this.session.response.data.encrypted,this.zenroom("decrypt");case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),setDecryptedValue:function(e){this.decrypted=e;var t=JSON.parse(this.decrypted);this.data=JSON.parse(t.data),this.image=this.data[1].image_base64,Object(p["c"])("personal_data",this.data[0]),Object(p["c"])("personal_photo",this.image)},getRequest:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["e"])(t);case 2:this.request=e.sent,"onboarding"===this.request.response.request?(this.onboardingRequest=this.request.response,d(this.sessionId),this.joinOnboarding()):this.request=this.request.response;case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),acceptQuestion:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["a"])(this.request.id,this.username);case 2:this.response=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),denyQuestion:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["c"])(this.request.id);case 2:this.response=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),endQuestion:function(){this.$router.push("/")},onInputSession:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.inputSession.includes("http")?(t=this.inputSession.indexOf("?"),this.sessionId=this.inputSession.substring(t+"?session=".length,this.inputSession.length)):this.sessionId=this.inputSession,this.result=this.sessionId,this.getRequest(this.sessionId);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),login:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.inputUsername&&this.pincode&&(this.loggedIn=!0,this.setUsername(this.inputUsername));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),mounted:function(){var e=this;this.loggedIn=!!this.username,this.sessionId=this.$route.query.session,this.sessionId&&this.getRequest(this.sessionId);var t=function(e){return console.log(e)};u.on("status_update",function(n){t(n),n.status==l.GOT_ENCR_DATA&&e.handleEncrypedData()}),console.log("API URL: http://oscity.nl:5005/")}},y=_,w=n("2877"),k=Object(w["a"])(y,s,i,!1,null,null,null);k.options.__file="readQR.vue";t["default"]=k.exports}}]);
//# sourceMappingURL=readQR.564d12ad.js.map