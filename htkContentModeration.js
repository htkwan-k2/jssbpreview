!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,u={f:a&&!c.call({1:2},1)?function(t){var e=a(this,t);return!!e&&e.enumerable}:c},s=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,l=function(t){return f.call(t).slice(8,-1)},p="".split,h=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?p.call(t,""):Object(t)}:Object,d=function(t){return h(function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},v=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,g=function(t,e){return m.call(t,e)},b=r.document,w=y(b)&&y(b.createElement),j=function(t){return w?b.createElement(t):{}},S=!i&&!o((function(){return 7!=Object.defineProperty(j("div"),"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,P={f:i?O:function(t,e){if(t=d(t),e=v(e,!0),S)try{return O(t,e)}catch(t){}if(g(t,e))return s(!u.f.call(t,e),t[e])}},T=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},x=Object.defineProperty,E={f:i?x:function(t,e,n){if(T(t),e=v(e,!0),T(n),S)try{return x(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},L=i?function(t,e,n){return E.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t},N=function(t,e){try{L(r,t,e)}catch(n){r[t]=e}return e},k=r["__core-js_shared__"]||N("__core-js_shared__",{}),A=Function.toString;"function"!=typeof k.inspectSource&&(k.inspectSource=function(t){return A.call(t)});var I,M,R,C,_=k.inspectSource,F=r.WeakMap,K="function"==typeof F&&/native code/.test(_(F)),z=e((function(t){(t.exports=function(t,e){return k[t]||(k[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),D=0,U=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++D+U).toString(36)},H=z("keys"),G={},J=r.WeakMap;if(K){var V=new J,W=V.get,B=V.has,X=V.set;I=function(t,e){return X.call(V,t,e),e},M=function(t){return W.call(V,t)||{}},R=function(t){return B.call(V,t)}}else{var Y=H[C="state"]||(H[C]=q(C));G[Y]=!0,I=function(t,e){return L(t,Y,e),e},M=function(t){return g(t,Y)?t[Y]:{}},R=function(t){return g(t,Y)}}var Q={set:I,get:M,has:R,enforce:function(t){return R(t)?M(t):I(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=M(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Z=e((function(t){var e=Q.get,n=Q.enforce,o=String(String).split("String");(t.exports=function(t,e,i,c){var a=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,s=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof e||g(i,"name")||L(i,"name",e),n(i).source=o.join("string"==typeof e?e:"")),t!==r?(a?!s&&t[e]&&(u=!0):delete t[e],u?t[e]=i:L(t,e,i)):u?t[e]=i:N(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||_(this)}))})),$=r,tt=function(t){return"function"==typeof t?t:void 0},et=function(t,e){return arguments.length<2?tt($[t])||tt(r[t]):$[t]&&$[t][e]||r[t]&&r[t][e]},nt=Math.ceil,rt=Math.floor,ot=function(t){return isNaN(t=+t)?0:(t>0?rt:nt)(t)},it=Math.min,ct=function(t){return t>0?it(ot(t),9007199254740991):0},at=Math.max,ut=Math.min,st=function(t){return function(e,n,r){var o,i=d(e),c=ct(i.length),a=function(t,e){var n=ot(t);return n<0?at(n+e,0):ut(n,e)}(r,c);if(t&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},ft={includes:st(!0),indexOf:st(!1)}.indexOf,lt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=d(t),o=0,i=[];for(n in r)!g(G,n)&&g(r,n)&&i.push(n);for(;e.length>o;)g(r,n=e[o++])&&(~ft(i,n)||i.push(n));return i}(t,lt)}},ht={f:Object.getOwnPropertySymbols},dt=et("Reflect","ownKeys")||function(t){var e=pt.f(T(t)),n=ht.f;return n?e.concat(n(t)):e},yt=function(t,e){for(var n=dt(e),r=E.f,o=P.f,i=0;i<n.length;i++){var c=n[i];g(t,c)||r(t,c,o(e,c))}},vt=/#|\.prototype\./,mt=function(t,e){var n=bt[gt(t)];return n==jt||n!=wt&&("function"==typeof e?o(e):!!e)},gt=mt.normalize=function(t){return String(t).replace(vt,".").toLowerCase()},bt=mt.data={},wt=mt.NATIVE="N",jt=mt.POLYFILL="P",St=mt,Ot=P.f,Pt=function(t,e){var n,o,i,c,a,u=t.target,s=t.global,f=t.stat;if(n=s?r:f?r[u]||N(u,{}):(r[u]||{}).prototype)for(o in e){if(c=e[o],i=t.noTargetGet?(a=Ot(n,o))&&a.value:n[o],!St(s?o:u+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;yt(c,i)}(t.sham||i&&i.sham)&&L(c,"sham",!0),Z(n,o,c,t)}},Tt=r.Promise,xt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),Et=xt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Lt=z("wks"),Nt=r.Symbol,kt=Et?Nt:Nt&&Nt.withoutSetter||q,At=function(t){return g(Lt,t)||(xt&&g(Nt,t)?Lt[t]=Nt[t]:Lt[t]=kt("Symbol."+t)),Lt[t]},It=E.f,Mt=At("toStringTag"),Rt=At("species"),Ct=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},_t={},Ft=At("iterator"),Kt=Array.prototype,zt=function(t,e,n){if(Ct(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Dt={};Dt[At("toStringTag")]="z";var Ut="[object z]"===String(Dt),qt=At("toStringTag"),Ht="Arguments"==l(function(){return arguments}()),Gt=Ut?l:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),qt))?n:Ht?l(e):"Object"==(r=l(e))&&"function"==typeof e.callee?"Arguments":r},Jt=At("iterator"),Vt=function(t,e,n,r){try{return r?e(T(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&T(o.call(t)),e}},Wt=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,o,i){var c,a,u,s,f,l,p,h,d=zt(n,r,o?2:1);if(i)c=t;else{if("function"!=typeof(a=function(t){if(null!=t)return t[Jt]||t["@@iterator"]||_t[Gt(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(h=a)&&(_t.Array===h||Kt[Ft]===h)){for(u=0,s=ct(t.length);s>u;u++)if((f=o?d(T(p=t[u])[0],p[1]):d(t[u]))&&f instanceof e)return f;return new e(!1)}c=a.call(t)}for(l=c.next;!(p=l.call(c)).done;)if("object"==typeof(f=Vt(c,d,p.value,o))&&f&&f instanceof e)return f;return new e(!1)}).stop=function(t){return new e(!0,t)}})),Bt=At("iterator"),Xt=!1;try{var Yt=0,Qt={next:function(){return{done:!!Yt++}},return:function(){Xt=!0}};Qt[Bt]=function(){return this},Array.from(Qt,(function(){throw 2}))}catch(t){}var Zt,$t,te,ee=At("species"),ne=et("document","documentElement"),re=et("navigator","userAgent")||"",oe=/(iphone|ipod|ipad).*applewebkit/i.test(re),ie=r.location,ce=r.setImmediate,ae=r.clearImmediate,ue=r.process,se=r.MessageChannel,fe=r.Dispatch,le=0,pe={},he=function(t){if(pe.hasOwnProperty(t)){var e=pe[t];delete pe[t],e()}},de=function(t){return function(){he(t)}},ye=function(t){he(t.data)},ve=function(t){r.postMessage(t+"",ie.protocol+"//"+ie.host)};ce&&ae||(ce=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return pe[++le]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Zt(le),le},ae=function(t){delete pe[t]},"process"==l(ue)?Zt=function(t){ue.nextTick(de(t))}:fe&&fe.now?Zt=function(t){fe.now(de(t))}:se&&!oe?(te=($t=new se).port2,$t.port1.onmessage=ye,Zt=zt(te.postMessage,te,1)):!r.addEventListener||"function"!=typeof postMessage||r.importScripts||o(ve)?Zt="onreadystatechange"in j("script")?function(t){ne.appendChild(j("script")).onreadystatechange=function(){ne.removeChild(this),he(t)}}:function(t){setTimeout(de(t),0)}:(Zt=ve,r.addEventListener("message",ye,!1)));var me,ge,be,we,je,Se,Oe,Pe,Te={set:ce,clear:ae},xe=P.f,Ee=Te.set,Le=r.MutationObserver||r.WebKitMutationObserver,Ne=r.process,ke=r.Promise,Ae="process"==l(Ne),Ie=xe(r,"queueMicrotask"),Me=Ie&&Ie.value;Me||(me=function(){var t,e;for(Ae&&(t=Ne.domain)&&t.exit();ge;){e=ge.fn,ge=ge.next;try{e()}catch(t){throw ge?we():be=void 0,t}}be=void 0,t&&t.enter()},Ae?we=function(){Ne.nextTick(me)}:Le&&!oe?(je=!0,Se=document.createTextNode(""),new Le(me).observe(Se,{characterData:!0}),we=function(){Se.data=je=!je}):ke&&ke.resolve?(Oe=ke.resolve(void 0),Pe=Oe.then,we=function(){Pe.call(Oe,me)}):we=function(){Ee.call(r,me)});var Re,Ce,_e=Me||function(t){var e={fn:t,next:void 0};be&&(be.next=e),ge||(ge=e,we()),be=e},Fe=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Ct(e),this.reject=Ct(n)},Ke={f:function(t){return new Fe(t)}},ze=function(t,e){if(T(t),y(e)&&e.constructor===t)return e;var n=Ke.f(t);return(0,n.resolve)(e),n.promise},De=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Ue=r.process,qe=Ue&&Ue.versions,He=qe&&qe.v8;He?Ce=(Re=He.split("."))[0]+Re[1]:re&&(!(Re=re.match(/Edge\/(\d+)/))||Re[1]>=74)&&(Re=re.match(/Chrome\/(\d+)/))&&(Ce=Re[1]);var Ge,Je,Ve,We,Be,Xe,Ye,Qe=Ce&&+Ce,Ze=Te.set,$e=At("species"),tn="Promise",en=Q.get,nn=Q.set,rn=Q.getterFor(tn),on=Tt,cn=r.TypeError,an=r.document,un=r.process,sn=et("fetch"),fn=Ke.f,ln=fn,pn="process"==l(un),hn=!!(an&&an.createEvent&&r.dispatchEvent),dn=St(tn,(function(){if(!(_(on)!==String(on))){if(66===Qe)return!0;if(!pn&&"function"!=typeof PromiseRejectionEvent)return!0}if(Qe>=51&&/native code/.test(on))return!1;var t=on.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[$e]=e,!(t.then((function(){}))instanceof e)})),yn=dn||!function(t,e){if(!e&&!Xt)return!1;var n=!1;try{var r={};r[Bt]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){on.all(t).catch((function(){}))})),vn=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},mn=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;_e((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,u,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,h=f.reject,d=f.domain;try{l?(i||(2===e.rejection&&jn(t,e),e.rejection=1),!0===l?a=o:(d&&d.enter(),a=l(o),d&&(d.exit(),s=!0)),a===f.promise?h(cn("Promise-chain cycle")):(u=vn(a))?u.call(a,p,h):p(a)):h(o)}catch(t){d&&!s&&d.exit(),h(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&bn(t,e)}))}},gn=function(t,e,n){var o,i;hn?((o=an.createEvent("Event")).promise=e,o.reason=n,o.initEvent(t,!1,!0),r.dispatchEvent(o)):o={promise:e,reason:n},(i=r["on"+t])?i(o):"unhandledrejection"===t&&function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},bn=function(t,e){Ze.call(r,(function(){var n,r=e.value;if(wn(e)&&(n=De((function(){pn?un.emit("unhandledRejection",r,t):gn("unhandledrejection",t,r)})),e.rejection=pn||wn(e)?2:1,n.error))throw n.value}))},wn=function(t){return 1!==t.rejection&&!t.parent},jn=function(t,e){Ze.call(r,(function(){pn?un.emit("rejectionHandled",t):gn("rejectionhandled",t,e.value)}))},Sn=function(t,e,n,r){return function(o){t(e,n,o,r)}},On=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,mn(t,e,!0))},Pn=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw cn("Promise can't be resolved itself");var o=vn(n);o?_e((function(){var r={done:!1};try{o.call(n,Sn(Pn,t,r,e),Sn(On,t,r,e))}catch(n){On(t,r,n,e)}})):(e.value=n,e.state=1,mn(t,e,!1))}catch(n){On(t,{done:!1},n,e)}}};dn&&(on=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,on,tn),Ct(t),Ge.call(this);var e=en(this);try{t(Sn(Pn,this,e),Sn(On,this,e))}catch(t){On(this,e,t)}},(Ge=function(t){nn(this,{type:tn,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Z(t,r,e[r],n);return t}(on.prototype,{then:function(t,e){var n,r,o,i=rn(this),c=fn((n=on,void 0===(o=T(this).constructor)||null==(r=T(o)[ee])?n:Ct(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=pn?un.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&mn(this,i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),Je=function(){var t=new Ge,e=en(t);this.promise=t,this.resolve=Sn(Pn,t,e),this.reject=Sn(On,t,e)},Ke.f=fn=function(t){return t===on||t===Ve?new Je(t):ln(t)},"function"==typeof Tt&&(We=Tt.prototype.then,Z(Tt.prototype,"then",(function(t,e){var n=this;return new on((function(t,e){We.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof sn&&Pt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return ze(on,sn.apply(r,arguments))}}))),Pt({global:!0,wrap:!0,forced:dn},{Promise:on}),Xe=tn,Ye=!1,(Be=on)&&!g(Be=Ye?Be:Be.prototype,Mt)&&It(Be,Mt,{configurable:!0,value:Xe}),function(t){var e=et(t),n=E.f;i&&e&&!e[Rt]&&n(e,Rt,{configurable:!0,get:function(){return this}})}(tn),Ve=et(tn),Pt({target:tn,stat:!0,forced:dn},{reject:function(t){var e=fn(this);return e.reject.call(void 0,t),e.promise}}),Pt({target:tn,stat:!0,forced:dn},{resolve:function(t){return ze(this,t)}}),Pt({target:tn,stat:!0,forced:yn},{all:function(t){var e=this,n=fn(e),r=n.resolve,o=n.reject,i=De((function(){var n=Ct(e.resolve),i=[],c=0,a=1;Wt(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=fn(e),r=n.reject,o=De((function(){var o=Ct(e.resolve);Wt(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}}),metadata={systemName:"cmImageAnalysis",displayName:"cmImageAnalysis",description:"JSSB for Azure Vision 2.0 Image Analyzer."},ondescribe=async function(){postSchema({objects:{cmImageAnalytics:{displayName:"cmImageAnalytics",description:"Azure Vision 2. 0 Image Analytics",properties:{imageURL:{displayName:"imageURL",type:"string"},apiKey:{displayName:"imaapiKeyge",type:"string"},tag:{displayName:"tag",type:"text"},caption:{displayName:"caption",type:"text"},name:{displayName:"name",type:"text"},confidence:{displayName:"confidence",type:"decimal"},age:{displayName:"Title",type:"string"},gender:{displayName:"Completed",type:"string"},leftPos:{displayName:"leftPos",type:"boonumberlean"},topPos:{displayName:"topPos",type:"number"},width:{displayName:"width",type:"number"},height:{displayName:"height",type:"number"}},methods:{ListCelebrities:{displayName:"GetCelebrities",type:"list",inputs:["imageURL","apiKey"],requiredInputs:["imageURL","apiKey"],outputs:["name","confidence","leftPos","topPos","width","height"]},ListDescription:{displayName:"ListDescription",type:"list",inputs:["imageURL","apiKey"],requiredInputs:["imageURL","apiKey"],outputs:["tag"]}}}}})},onexecute=async function(t,e,n,r){switch(t){case"cmImageAnalytics":await async function(t,e){switch(t){case"ListCelebrities":await function(t){return new Promise((e,n)=>{var r=new XMLHttpRequest,o=JSON.stringify({url:t.imageURL});r.onreadystatechange=function(){try{if(4!==r.readyState)return;if(200!==r.status)throw new Error("Failed with status "+r.status);console.log("========= htk ",r.responseText);var t=JSON.parse(r.responseText);if(t&&t.categories){var o=t.categories;for(var i in o)if("people_"===o[i].name){var c=Object.keys(celebrities).length;for(var a in console.log("==== Length of celebrity array is ",c),celebrities)postResult({name:t[a].name,confidence:t[a].confidence,leftPos:t[a].faceRectangle.left,topPos:t[a].faceRectangle.top,width:t[a].faceRectangle.width,height:t[a].faceRectangle.height})}}e()}catch(t){n(t)}},r.open("POST","https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?details=Celebrities"),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("Ocp-Apim-Subscription-Key",t.apiKey),r.send(o)})}(e);break;case"ListDescription":await onexecuteListDescription(e);break;case"ListFaces":await onexecuteListFaces(e);break;case"ListCaptions":await onexecuteListCaptions(e);break;default:throw new Error("The method "+t+" is not supported.")}}(e,r);break;default:throw new Error("The object "+t+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
