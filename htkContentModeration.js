!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,u={f:c&&!a.call({1:2},1)?function(t){var e=c(this,t);return!!e&&e.enumerable}:a},s=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,l=function(t){return f.call(t).slice(8,-1)},p="".split,y=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?p.call(t,""):Object(t)}:Object,d=function(t){return y(function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}(t))},h=function(t){return"object"==typeof t?null!==t:"function"==typeof t},v=function(t,e){if(!h(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!h(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,g=function(t,e){return m.call(t,e)},b=r.document,w=h(b)&&h(b.createElement),j=function(t){return w?b.createElement(t):{}},S=!i&&!o((function(){return 7!=Object.defineProperty(j("div"),"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,T={f:i?O:function(t,e){if(t=d(t),e=v(e,!0),S)try{return O(t,e)}catch(t){}if(g(t,e))return s(!u.f.call(t,e),t[e])}},P=function(t){if(!h(t))throw TypeError(String(t)+" is not an object");return t},L=Object.defineProperty,x={f:i?L:function(t,e,n){if(P(t),e=v(e,!0),P(n),S)try{return L(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},E=i?function(t,e,n){return x.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t},N=function(t,e){try{E(r,t,e)}catch(n){r[t]=e}return e},R=r["__core-js_shared__"]||N("__core-js_shared__",{}),k=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(t){return k.call(t)});var I,A,M,C,K=R.inspectSource,F=r.WeakMap,U="function"==typeof F&&/native code/.test(K(F)),q=e((function(t){(t.exports=function(t,e){return R[t]||(R[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),_=0,z=Math.random(),D=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++_+z).toString(36)},H=q("keys"),J={},G=r.WeakMap;if(U){var V=new G,W=V.get,B=V.has,X=V.set;I=function(t,e){return X.call(V,t,e),e},A=function(t){return W.call(V,t)||{}},M=function(t){return B.call(V,t)}}else{var Y=H[C="state"]||(H[C]=D(C));J[Y]=!0,I=function(t,e){return E(t,Y,e),e},A=function(t){return g(t,Y)?t[Y]:{}},M=function(t){return g(t,Y)}}var Q={set:I,get:A,has:M,enforce:function(t){return M(t)?A(t):I(t,{})},getterFor:function(t){return function(e){var n;if(!h(e)||(n=A(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Z=e((function(t){var e=Q.get,n=Q.enforce,o=String(String).split("String");(t.exports=function(t,e,i,a){var c=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,s=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||g(i,"name")||E(i,"name",e),n(i).source=o.join("string"==typeof e?e:"")),t!==r?(c?!s&&t[e]&&(u=!0):delete t[e],u?t[e]=i:E(t,e,i)):u?t[e]=i:N(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||K(this)}))})),$=r,tt=function(t){return"function"==typeof t?t:void 0},et=function(t,e){return arguments.length<2?tt($[t])||tt(r[t]):$[t]&&$[t][e]||r[t]&&r[t][e]},nt=Math.ceil,rt=Math.floor,ot=function(t){return isNaN(t=+t)?0:(t>0?rt:nt)(t)},it=Math.min,at=function(t){return t>0?it(ot(t),9007199254740991):0},ct=Math.max,ut=Math.min,st=function(t){return function(e,n,r){var o,i=d(e),a=at(i.length),c=function(t,e){var n=ot(t);return n<0?ct(n+e,0):ut(n,e)}(r,a);if(t&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},ft={includes:st(!0),indexOf:st(!1)}.indexOf,lt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=d(t),o=0,i=[];for(n in r)!g(J,n)&&g(r,n)&&i.push(n);for(;e.length>o;)g(r,n=e[o++])&&(~ft(i,n)||i.push(n));return i}(t,lt)}},yt={f:Object.getOwnPropertySymbols},dt=et("Reflect","ownKeys")||function(t){var e=pt.f(P(t)),n=yt.f;return n?e.concat(n(t)):e},ht=function(t,e){for(var n=dt(e),r=x.f,o=T.f,i=0;i<n.length;i++){var a=n[i];g(t,a)||r(t,a,o(e,a))}},vt=/#|\.prototype\./,mt=function(t,e){var n=bt[gt(t)];return n==jt||n!=wt&&("function"==typeof e?o(e):!!e)},gt=mt.normalize=function(t){return String(t).replace(vt,".").toLowerCase()},bt=mt.data={},wt=mt.NATIVE="N",jt=mt.POLYFILL="P",St=mt,Ot=T.f,Tt=function(t,e){var n,o,i,a,c,u=t.target,s=t.global,f=t.stat;if(n=s?r:f?r[u]||N(u,{}):(r[u]||{}).prototype)for(o in e){if(a=e[o],i=t.noTargetGet?(c=Ot(n,o))&&c.value:n[o],!St(s?o:u+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;ht(a,i)}(t.sham||i&&i.sham)&&E(a,"sham",!0),Z(n,o,a,t)}},Pt=r.Promise,Lt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),xt=Lt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Et=q("wks"),Nt=r.Symbol,Rt=xt?Nt:Nt&&Nt.withoutSetter||D,kt=function(t){return g(Et,t)||(Lt&&g(Nt,t)?Et[t]=Nt[t]:Et[t]=Rt("Symbol."+t)),Et[t]},It=x.f,At=kt("toStringTag"),Mt=kt("species"),Ct=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Kt={},Ft=kt("iterator"),Ut=Array.prototype,qt=function(t,e,n){if(Ct(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},_t={};_t[kt("toStringTag")]="z";var zt="[object z]"===String(_t),Dt=kt("toStringTag"),Ht="Arguments"==l(function(){return arguments}()),Jt=zt?l:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Dt))?n:Ht?l(e):"Object"==(r=l(e))&&"function"==typeof e.callee?"Arguments":r},Gt=kt("iterator"),Vt=function(t,e,n,r){try{return r?e(P(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&P(o.call(t)),e}},Wt=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,o,i){var a,c,u,s,f,l,p,y,d=qt(n,r,o?2:1);if(i)a=t;else{if("function"!=typeof(c=function(t){if(null!=t)return t[Gt]||t["@@iterator"]||Kt[Jt(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(y=c)&&(Kt.Array===y||Ut[Ft]===y)){for(u=0,s=at(t.length);s>u;u++)if((f=o?d(P(p=t[u])[0],p[1]):d(t[u]))&&f instanceof e)return f;return new e(!1)}a=c.call(t)}for(l=a.next;!(p=l.call(a)).done;)if("object"==typeof(f=Vt(a,d,p.value,o))&&f&&f instanceof e)return f;return new e(!1)}).stop=function(t){return new e(!0,t)}})),Bt=kt("iterator"),Xt=!1;try{var Yt=0,Qt={next:function(){return{done:!!Yt++}},return:function(){Xt=!0}};Qt[Bt]=function(){return this},Array.from(Qt,(function(){throw 2}))}catch(t){}var Zt,$t,te,ee=kt("species"),ne=et("document","documentElement"),re=et("navigator","userAgent")||"",oe=/(iphone|ipod|ipad).*applewebkit/i.test(re),ie=r.location,ae=r.setImmediate,ce=r.clearImmediate,ue=r.process,se=r.MessageChannel,fe=r.Dispatch,le=0,pe={},ye=function(t){if(pe.hasOwnProperty(t)){var e=pe[t];delete pe[t],e()}},de=function(t){return function(){ye(t)}},he=function(t){ye(t.data)},ve=function(t){r.postMessage(t+"",ie.protocol+"//"+ie.host)};ae&&ce||(ae=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return pe[++le]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Zt(le),le},ce=function(t){delete pe[t]},"process"==l(ue)?Zt=function(t){ue.nextTick(de(t))}:fe&&fe.now?Zt=function(t){fe.now(de(t))}:se&&!oe?(te=($t=new se).port2,$t.port1.onmessage=he,Zt=qt(te.postMessage,te,1)):!r.addEventListener||"function"!=typeof postMessage||r.importScripts||o(ve)?Zt="onreadystatechange"in j("script")?function(t){ne.appendChild(j("script")).onreadystatechange=function(){ne.removeChild(this),ye(t)}}:function(t){setTimeout(de(t),0)}:(Zt=ve,r.addEventListener("message",he,!1)));var me,ge,be,we,je,Se,Oe,Te,Pe={set:ae,clear:ce},Le=T.f,xe=Pe.set,Ee=r.MutationObserver||r.WebKitMutationObserver,Ne=r.process,Re=r.Promise,ke="process"==l(Ne),Ie=Le(r,"queueMicrotask"),Ae=Ie&&Ie.value;Ae||(me=function(){var t,e;for(ke&&(t=Ne.domain)&&t.exit();ge;){e=ge.fn,ge=ge.next;try{e()}catch(t){throw ge?we():be=void 0,t}}be=void 0,t&&t.enter()},ke?we=function(){Ne.nextTick(me)}:Ee&&!oe?(je=!0,Se=document.createTextNode(""),new Ee(me).observe(Se,{characterData:!0}),we=function(){Se.data=je=!je}):Re&&Re.resolve?(Oe=Re.resolve(void 0),Te=Oe.then,we=function(){Te.call(Oe,me)}):we=function(){xe.call(r,me)});var Me,Ce,Ke=Ae||function(t){var e={fn:t,next:void 0};be&&(be.next=e),ge||(ge=e,we()),be=e},Fe=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Ct(e),this.reject=Ct(n)},Ue={f:function(t){return new Fe(t)}},qe=function(t,e){if(P(t),h(e)&&e.constructor===t)return e;var n=Ue.f(t);return(0,n.resolve)(e),n.promise},_e=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},ze=r.process,De=ze&&ze.versions,He=De&&De.v8;He?Ce=(Me=He.split("."))[0]+Me[1]:re&&(!(Me=re.match(/Edge\/(\d+)/))||Me[1]>=74)&&(Me=re.match(/Chrome\/(\d+)/))&&(Ce=Me[1]);var Je,Ge,Ve,We,Be,Xe,Ye,Qe=Ce&&+Ce,Ze=Pe.set,$e=kt("species"),tn="Promise",en=Q.get,nn=Q.set,rn=Q.getterFor(tn),on=Pt,an=r.TypeError,cn=r.document,un=r.process,sn=et("fetch"),fn=Ue.f,ln=fn,pn="process"==l(un),yn=!!(cn&&cn.createEvent&&r.dispatchEvent),dn=St(tn,(function(){if(!(K(on)!==String(on))){if(66===Qe)return!0;if(!pn&&"function"!=typeof PromiseRejectionEvent)return!0}if(Qe>=51&&/native code/.test(on))return!1;var t=on.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[$e]=e,!(t.then((function(){}))instanceof e)})),hn=dn||!function(t,e){if(!e&&!Xt)return!1;var n=!1;try{var r={};r[Bt]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){on.all(t).catch((function(){}))})),vn=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},mn=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;Ke((function(){for(var o=e.value,i=1==e.state,a=0;r.length>a;){var c,u,s,f=r[a++],l=i?f.ok:f.fail,p=f.resolve,y=f.reject,d=f.domain;try{l?(i||(2===e.rejection&&jn(t,e),e.rejection=1),!0===l?c=o:(d&&d.enter(),c=l(o),d&&(d.exit(),s=!0)),c===f.promise?y(an("Promise-chain cycle")):(u=vn(c))?u.call(c,p,y):p(c)):y(o)}catch(t){d&&!s&&d.exit(),y(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&bn(t,e)}))}},gn=function(t,e,n){var o,i;yn?((o=cn.createEvent("Event")).promise=e,o.reason=n,o.initEvent(t,!1,!0),r.dispatchEvent(o)):o={promise:e,reason:n},(i=r["on"+t])?i(o):"unhandledrejection"===t&&function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},bn=function(t,e){Ze.call(r,(function(){var n,r=e.value;if(wn(e)&&(n=_e((function(){pn?un.emit("unhandledRejection",r,t):gn("unhandledrejection",t,r)})),e.rejection=pn||wn(e)?2:1,n.error))throw n.value}))},wn=function(t){return 1!==t.rejection&&!t.parent},jn=function(t,e){Ze.call(r,(function(){pn?un.emit("rejectionHandled",t):gn("rejectionhandled",t,e.value)}))},Sn=function(t,e,n,r){return function(o){t(e,n,o,r)}},On=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,mn(t,e,!0))},Tn=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw an("Promise can't be resolved itself");var o=vn(n);o?Ke((function(){var r={done:!1};try{o.call(n,Sn(Tn,t,r,e),Sn(On,t,r,e))}catch(n){On(t,r,n,e)}})):(e.value=n,e.state=1,mn(t,e,!1))}catch(n){On(t,{done:!1},n,e)}}};dn&&(on=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,on,tn),Ct(t),Je.call(this);var e=en(this);try{t(Sn(Tn,this,e),Sn(On,this,e))}catch(t){On(this,e,t)}},(Je=function(t){nn(this,{type:tn,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Z(t,r,e[r],n);return t}(on.prototype,{then:function(t,e){var n,r,o,i=rn(this),a=fn((n=on,void 0===(o=P(this).constructor)||null==(r=P(o)[ee])?n:Ct(r)));return a.ok="function"!=typeof t||t,a.fail="function"==typeof e&&e,a.domain=pn?un.domain:void 0,i.parent=!0,i.reactions.push(a),0!=i.state&&mn(this,i,!1),a.promise},catch:function(t){return this.then(void 0,t)}}),Ge=function(){var t=new Je,e=en(t);this.promise=t,this.resolve=Sn(Tn,t,e),this.reject=Sn(On,t,e)},Ue.f=fn=function(t){return t===on||t===Ve?new Ge(t):ln(t)},"function"==typeof Pt&&(We=Pt.prototype.then,Z(Pt.prototype,"then",(function(t,e){var n=this;return new on((function(t,e){We.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof sn&&Tt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return qe(on,sn.apply(r,arguments))}}))),Tt({global:!0,wrap:!0,forced:dn},{Promise:on}),Xe=tn,Ye=!1,(Be=on)&&!g(Be=Ye?Be:Be.prototype,At)&&It(Be,At,{configurable:!0,value:Xe}),function(t){var e=et(t),n=x.f;i&&e&&!e[Mt]&&n(e,Mt,{configurable:!0,get:function(){return this}})}(tn),Ve=et(tn),Tt({target:tn,stat:!0,forced:dn},{reject:function(t){var e=fn(this);return e.reject.call(void 0,t),e.promise}}),Tt({target:tn,stat:!0,forced:dn},{resolve:function(t){return qe(this,t)}}),Tt({target:tn,stat:!0,forced:hn},{all:function(t){var e=this,n=fn(e),r=n.resolve,o=n.reject,i=_e((function(){var n=Ct(e.resolve),i=[],a=0,c=1;Wt(t,(function(t){var u=a++,s=!1;i.push(void 0),c++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=fn(e),r=n.reject,o=_e((function(){var o=Ct(e.resolve);Wt(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}}),metadata={systemName:"cmImageAnalysis",displayName:"cmImageAnalysis",description:"JSSB for Azure Vision 2.0 Image Analyzer."},ondescribe=async function(){postSchema({objects:{cmImageAnalytics:{displayName:"cmImageAnalytics",description:"Azure Vision 2. 0 Image Analytics",properties:{imageURL:{displayName:"imageURL",type:"string"},apiKey:{displayName:"imaapiKeyge",type:"string"},tag:{displayName:"tag",type:"text"},caption:{displayName:"caption",type:"text"},name:{displayName:"name",type:"text"},confidence:{displayName:"confidence",type:"decimal"},age:{displayName:"Title",type:"string"},gender:{displayName:"Completed",type:"string"},leftPos:{displayName:"leftPos",type:"boonumberlean"},topPos:{displayName:"topPos",type:"number"},width:{displayName:"width",type:"number"},height:{displayName:"height",type:"number"}},methods:{ListCelebrities:{displayName:"GetCelebrities",type:"list",inputs:["imageURL","apiKey"],requiredInputs:["imageURL","apiKey"],outputs:["name","confidence","leftPos","topPos","width","height"]},ListDescription:{displayName:"ListDescription",type:"list",inputs:["imageURL","apiKey"],requiredInputs:["imageURL","apiKey"],outputs:["tag"]},ListFaces:{displayName:"GetFaces",type:"list",inputs:["imageURL","apiKey"],requiredInputs:["imageURL","apiKey"],outputs:["age","gender"]},ListCaptions:{displayName:"ListCaptions",type:"list",inputs:["imageURL","apiKey"],requiredInputs:["imageURL","apiKey"],outputs:["caption"]}}}}})},onexecute=async function(t,e,n,r){switch(t){case"cmImageAnalytics":await async function(t,e){switch(t){case"ListCelebrities":await function(t){return new Promise((e,n)=>{var r=new XMLHttpRequest,o=JSON.stringify({url:t.imageURL});r.onreadystatechange=function(){try{if(4!==r.readyState)return;if(200!==r.status)throw new Error("Failed with status "+r.status);console.log("========= htk ",r.responseText);var t=JSON.parse(r.responseText);if(t&&t.categories){var o=t.categories;for(var i in o)if("people_"===o[i].name){var a=Object.keys(celebrities).length;for(var c in console.log("==== Length of celebrity array is ",a),celebrities)postResult({name:t[c].name,confidence:t[c].confidence,leftPos:t[c].faceRectangle.left,topPos:t[c].faceRectangle.top,width:t[c].faceRectangle.width,height:t[c].faceRectangle.height})}}e()}catch(t){n(t)}},r.open("POST","https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?details=Celebrities"),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("Ocp-Apim-Subscription-Key",t.apiKey),r.send(o)})}(e);break;case"ListDescription":await function(t){return new Promise((e,n)=>{var r=new XMLHttpRequest,o=JSON.stringify({url:t.imageURL});r.onreadystatechange=function(){try{if(4!==r.readyState)return;if(200!==r.status)throw new Error("Failed with status "+r.status);console.log("========= htk ",r.responseText);JSON.parse(r.responseText);for(var t in tags)console.log("name ["+tags[t]+"]"),postResult({name:tags[t]});e()}catch(t){n(t)}},r.open("POST","https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Description"),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("Ocp-Apim-Subscription-Key",t.apiKey),r.send(o)})}(e);break;case"ListFaces":await onexecuteListFaces(e);break;case"ListCaptions":await onexecuteListCaptions(e);break;default:throw new Error("The method "+t+" is not supported.")}}(e,r);break;default:throw new Error("The object "+t+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
