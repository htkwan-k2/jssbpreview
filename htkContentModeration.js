!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,a={f:u&&!c.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:c},f=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},s={}.toString,l=function(t){return s.call(t).slice(8,-1)},p="".split,d=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?p.call(t,""):Object(t)}:Object,h=function(t){return d(function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}(t))},v=function(t){return"object"==typeof t?null!==t:"function"==typeof t},y=function(t,e){if(!v(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!v(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!v(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!v(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,g=function(t,e){return m.call(t,e)},b=r.document,w=v(b)&&v(b.createElement),j=function(t){return w?b.createElement(t):{}},S=!i&&!o((function(){return 7!=Object.defineProperty(j("div"),"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,E={f:i?O:function(t,e){if(t=h(t),e=y(e,!0),S)try{return O(t,e)}catch(t){}if(g(t,e))return f(!a.f.call(t,e),t[e])}},T=function(t){if(!v(t))throw TypeError(String(t)+" is not an object");return t},P=Object.defineProperty,x={f:i?P:function(t,e,n){if(T(t),e=y(e,!0),T(n),S)try{return P(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},I=i?function(t,e,n){return x.f(t,e,f(1,n))}:function(t,e,n){return t[e]=n,t},N=function(t,e){try{I(r,t,e)}catch(n){r[t]=e}return e},M=r["__core-js_shared__"]||N("__core-js_shared__",{}),k=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(t){return k.call(t)});var A,_,D,C,F=M.inspectSource,L=r.WeakMap,z="function"==typeof L&&/native code/.test(F(L)),R=e((function(t){(t.exports=function(t,e){return M[t]||(M[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),q=0,G=Math.random(),H=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++q+G).toString(36)},U=R("keys"),W={},B=r.WeakMap;if(z){var J=new B,K=J.get,V=J.has,X=J.set;A=function(t,e){return X.call(J,t,e),e},_=function(t){return K.call(J,t)||{}},D=function(t){return V.call(J,t)}}else{var Y=U[C="state"]||(U[C]=H(C));W[Y]=!0,A=function(t,e){return I(t,Y,e),e},_=function(t){return g(t,Y)?t[Y]:{}},D=function(t){return g(t,Y)}}var Q={set:A,get:_,has:D,enforce:function(t){return D(t)?_(t):A(t,{})},getterFor:function(t){return function(e){var n;if(!v(e)||(n=_(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Z=e((function(t){var e=Q.get,n=Q.enforce,o=String(String).split("String");(t.exports=function(t,e,i,c){var u=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof e||g(i,"name")||I(i,"name",e),n(i).source=o.join("string"==typeof e?e:"")),t!==r?(u?!f&&t[e]&&(a=!0):delete t[e],a?t[e]=i:I(t,e,i)):a?t[e]=i:N(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||F(this)}))})),$=r,tt=function(t){return"function"==typeof t?t:void 0},et=function(t,e){return arguments.length<2?tt($[t])||tt(r[t]):$[t]&&$[t][e]||r[t]&&r[t][e]},nt=Math.ceil,rt=Math.floor,ot=function(t){return isNaN(t=+t)?0:(t>0?rt:nt)(t)},it=Math.min,ct=function(t){return t>0?it(ot(t),9007199254740991):0},ut=Math.max,at=Math.min,ft=function(t){return function(e,n,r){var o,i=h(e),c=ct(i.length),u=function(t,e){var n=ot(t);return n<0?ut(n+e,0):at(n,e)}(r,c);if(t&&n!=n){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},st={includes:ft(!0),indexOf:ft(!1)}.indexOf,lt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=h(t),o=0,i=[];for(n in r)!g(W,n)&&g(r,n)&&i.push(n);for(;e.length>o;)g(r,n=e[o++])&&(~st(i,n)||i.push(n));return i}(t,lt)}},dt={f:Object.getOwnPropertySymbols},ht=et("Reflect","ownKeys")||function(t){var e=pt.f(T(t)),n=dt.f;return n?e.concat(n(t)):e},vt=function(t,e){for(var n=ht(e),r=x.f,o=E.f,i=0;i<n.length;i++){var c=n[i];g(t,c)||r(t,c,o(e,c))}},yt=/#|\.prototype\./,mt=function(t,e){var n=bt[gt(t)];return n==jt||n!=wt&&("function"==typeof e?o(e):!!e)},gt=mt.normalize=function(t){return String(t).replace(yt,".").toLowerCase()},bt=mt.data={},wt=mt.NATIVE="N",jt=mt.POLYFILL="P",St=mt,Ot=E.f,Et=function(t,e){var n,o,i,c,u,a=t.target,f=t.global,s=t.stat;if(n=f?r:s?r[a]||N(a,{}):(r[a]||{}).prototype)for(o in e){if(c=e[o],i=t.noTargetGet?(u=Ot(n,o))&&u.value:n[o],!St(f?o:a+(s?".":"#")+o,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;vt(c,i)}(t.sham||i&&i.sham)&&I(c,"sham",!0),Z(n,o,c,t)}},Tt=r.Promise,Pt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),xt=Pt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,It=R("wks"),Nt=r.Symbol,Mt=xt?Nt:Nt&&Nt.withoutSetter||H,kt=function(t){return g(It,t)||(Pt&&g(Nt,t)?It[t]=Nt[t]:It[t]=Mt("Symbol."+t)),It[t]},At=x.f,_t=kt("toStringTag"),Dt=kt("species"),Ct=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Ft={},Lt=kt("iterator"),zt=Array.prototype,Rt=function(t,e,n){if(Ct(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},qt={};qt[kt("toStringTag")]="z";var Gt="[object z]"===String(qt),Ht=kt("toStringTag"),Ut="Arguments"==l(function(){return arguments}()),Wt=Gt?l:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Ht))?n:Ut?l(e):"Object"==(r=l(e))&&"function"==typeof e.callee?"Arguments":r},Bt=kt("iterator"),Jt=function(t,e,n,r){try{return r?e(T(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&T(o.call(t)),e}},Kt=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,o,i){var c,u,a,f,s,l,p,d,h=Rt(n,r,o?2:1);if(i)c=t;else{if("function"!=typeof(u=function(t){if(null!=t)return t[Bt]||t["@@iterator"]||Ft[Wt(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(d=u)&&(Ft.Array===d||zt[Lt]===d)){for(a=0,f=ct(t.length);f>a;a++)if((s=o?h(T(p=t[a])[0],p[1]):h(t[a]))&&s instanceof e)return s;return new e(!1)}c=u.call(t)}for(l=c.next;!(p=l.call(c)).done;)if("object"==typeof(s=Jt(c,h,p.value,o))&&s&&s instanceof e)return s;return new e(!1)}).stop=function(t){return new e(!0,t)}})),Vt=kt("iterator"),Xt=!1;try{var Yt=0,Qt={next:function(){return{done:!!Yt++}},return:function(){Xt=!0}};Qt[Vt]=function(){return this},Array.from(Qt,(function(){throw 2}))}catch(t){}var Zt,$t,te,ee=kt("species"),ne=et("document","documentElement"),re=et("navigator","userAgent")||"",oe=/(iphone|ipod|ipad).*applewebkit/i.test(re),ie=r.location,ce=r.setImmediate,ue=r.clearImmediate,ae=r.process,fe=r.MessageChannel,se=r.Dispatch,le=0,pe={},de=function(t){if(pe.hasOwnProperty(t)){var e=pe[t];delete pe[t],e()}},he=function(t){return function(){de(t)}},ve=function(t){de(t.data)},ye=function(t){r.postMessage(t+"",ie.protocol+"//"+ie.host)};ce&&ue||(ce=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return pe[++le]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Zt(le),le},ue=function(t){delete pe[t]},"process"==l(ae)?Zt=function(t){ae.nextTick(he(t))}:se&&se.now?Zt=function(t){se.now(he(t))}:fe&&!oe?(te=($t=new fe).port2,$t.port1.onmessage=ve,Zt=Rt(te.postMessage,te,1)):!r.addEventListener||"function"!=typeof postMessage||r.importScripts||o(ye)?Zt="onreadystatechange"in j("script")?function(t){ne.appendChild(j("script")).onreadystatechange=function(){ne.removeChild(this),de(t)}}:function(t){setTimeout(he(t),0)}:(Zt=ye,r.addEventListener("message",ve,!1)));var me,ge,be,we,je,Se,Oe,Ee,Te={set:ce,clear:ue},Pe=E.f,xe=Te.set,Ie=r.MutationObserver||r.WebKitMutationObserver,Ne=r.process,Me=r.Promise,ke="process"==l(Ne),Ae=Pe(r,"queueMicrotask"),_e=Ae&&Ae.value;_e||(me=function(){var t,e;for(ke&&(t=Ne.domain)&&t.exit();ge;){e=ge.fn,ge=ge.next;try{e()}catch(t){throw ge?we():be=void 0,t}}be=void 0,t&&t.enter()},ke?we=function(){Ne.nextTick(me)}:Ie&&!oe?(je=!0,Se=document.createTextNode(""),new Ie(me).observe(Se,{characterData:!0}),we=function(){Se.data=je=!je}):Me&&Me.resolve?(Oe=Me.resolve(void 0),Ee=Oe.then,we=function(){Ee.call(Oe,me)}):we=function(){xe.call(r,me)});var De,Ce,Fe=_e||function(t){var e={fn:t,next:void 0};be&&(be.next=e),ge||(ge=e,we()),be=e},Le=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Ct(e),this.reject=Ct(n)},ze={f:function(t){return new Le(t)}},Re=function(t,e){if(T(t),v(e)&&e.constructor===t)return e;var n=ze.f(t);return(0,n.resolve)(e),n.promise},qe=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Ge=r.process,He=Ge&&Ge.versions,Ue=He&&He.v8;Ue?Ce=(De=Ue.split("."))[0]+De[1]:re&&(!(De=re.match(/Edge\/(\d+)/))||De[1]>=74)&&(De=re.match(/Chrome\/(\d+)/))&&(Ce=De[1]);var We,Be,Je,Ke,Ve,Xe,Ye,Qe=Ce&&+Ce,Ze=Te.set,$e=kt("species"),tn="Promise",en=Q.get,nn=Q.set,rn=Q.getterFor(tn),on=Tt,cn=r.TypeError,un=r.document,an=r.process,fn=et("fetch"),sn=ze.f,ln=sn,pn="process"==l(an),dn=!!(un&&un.createEvent&&r.dispatchEvent),hn=St(tn,(function(){if(!(F(on)!==String(on))){if(66===Qe)return!0;if(!pn&&"function"!=typeof PromiseRejectionEvent)return!0}if(Qe>=51&&/native code/.test(on))return!1;var t=on.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[$e]=e,!(t.then((function(){}))instanceof e)})),vn=hn||!function(t,e){if(!e&&!Xt)return!1;var n=!1;try{var r={};r[Vt]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){on.all(t).catch((function(){}))})),yn=function(t){var e;return!(!v(t)||"function"!=typeof(e=t.then))&&e},mn=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;Fe((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var u,a,f,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,d=s.reject,h=s.domain;try{l?(i||(2===e.rejection&&jn(t,e),e.rejection=1),!0===l?u=o:(h&&h.enter(),u=l(o),h&&(h.exit(),f=!0)),u===s.promise?d(cn("Promise-chain cycle")):(a=yn(u))?a.call(u,p,d):p(u)):d(o)}catch(t){h&&!f&&h.exit(),d(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&bn(t,e)}))}},gn=function(t,e,n){var o,i;dn?((o=un.createEvent("Event")).promise=e,o.reason=n,o.initEvent(t,!1,!0),r.dispatchEvent(o)):o={promise:e,reason:n},(i=r["on"+t])?i(o):"unhandledrejection"===t&&function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},bn=function(t,e){Ze.call(r,(function(){var n,r=e.value;if(wn(e)&&(n=qe((function(){pn?an.emit("unhandledRejection",r,t):gn("unhandledrejection",t,r)})),e.rejection=pn||wn(e)?2:1,n.error))throw n.value}))},wn=function(t){return 1!==t.rejection&&!t.parent},jn=function(t,e){Ze.call(r,(function(){pn?an.emit("rejectionHandled",t):gn("rejectionhandled",t,e.value)}))},Sn=function(t,e,n,r){return function(o){t(e,n,o,r)}},On=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,mn(t,e,!0))},En=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw cn("Promise can't be resolved itself");var o=yn(n);o?Fe((function(){var r={done:!1};try{o.call(n,Sn(En,t,r,e),Sn(On,t,r,e))}catch(n){On(t,r,n,e)}})):(e.value=n,e.state=1,mn(t,e,!1))}catch(n){On(t,{done:!1},n,e)}}};hn&&(on=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,on,tn),Ct(t),We.call(this);var e=en(this);try{t(Sn(En,this,e),Sn(On,this,e))}catch(t){On(this,e,t)}},(We=function(t){nn(this,{type:tn,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Z(t,r,e[r],n);return t}(on.prototype,{then:function(t,e){var n,r,o,i=rn(this),c=sn((n=on,void 0===(o=T(this).constructor)||null==(r=T(o)[ee])?n:Ct(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=pn?an.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&mn(this,i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),Be=function(){var t=new We,e=en(t);this.promise=t,this.resolve=Sn(En,t,e),this.reject=Sn(On,t,e)},ze.f=sn=function(t){return t===on||t===Je?new Be(t):ln(t)},"function"==typeof Tt&&(Ke=Tt.prototype.then,Z(Tt.prototype,"then",(function(t,e){var n=this;return new on((function(t,e){Ke.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof fn&&Et({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return Re(on,fn.apply(r,arguments))}}))),Et({global:!0,wrap:!0,forced:hn},{Promise:on}),Xe=tn,Ye=!1,(Ve=on)&&!g(Ve=Ye?Ve:Ve.prototype,_t)&&At(Ve,_t,{configurable:!0,value:Xe}),function(t){var e=et(t),n=x.f;i&&e&&!e[Dt]&&n(e,Dt,{configurable:!0,get:function(){return this}})}(tn),Je=et(tn),Et({target:tn,stat:!0,forced:hn},{reject:function(t){var e=sn(this);return e.reject.call(void 0,t),e.promise}}),Et({target:tn,stat:!0,forced:hn},{resolve:function(t){return Re(this,t)}}),Et({target:tn,stat:!0,forced:vn},{all:function(t){var e=this,n=sn(e),r=n.resolve,o=n.reject,i=qe((function(){var n=Ct(e.resolve),i=[],c=0,u=1;Kt(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,n.call(e,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=sn(e),r=n.reject,o=qe((function(){var o=Ct(e.resolve);Kt(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}}),metadata={systemName:"com.k2.example",displayName:"Example Broker",description:"An example broker that accesses JSONPlaceholder."},ondescribe=async function(){postSchema({objects:{cmImageAnalytics:{displayName:"cmImageAnalytics",description:"Azure Vision 2. 0 Image Analytics",properties:{id:{displayName:"ID",type:"number"},userId:{displayName:"User ID",type:"number"},title:{displayName:"Title",type:"string"},completed:{displayName:"Completed",type:"boolean"}},methods:{get:{displayName:"Get TODO",type:"read",inputs:["id"],outputs:["id","userId","title","completed"]},getParams:{displayName:"Get TODO",type:"read",parameters:{pid:{displayName:"param1",description:"Description Of Param 1",type:"number"}},requiredParameters:["pid"],outputs:["id"]}}}}})},onexecute=async function(t,e,n,r){switch(t){case"cmImageAnalytics":await async function(t,e,n){switch(t){case"get":await function(t){return new Promise((e,n)=>{var r=new XMLHttpRequest;r.onreadystatechange=function(){try{if(4!==r.readyState)return;if(200!==r.status)throw new Error("Failed with status "+r.status);var t=JSON.parse(r.responseText);postResult({id:t.id,userId:t.userId,title:t.title,completed:t.completed}),e()}catch(t){n(t)}},r.open("GET","https://jsonplaceholder.typicode.com/todos/"+t.id),r.setRequestHeader("test","test value"),r.send()})}(e);break;default:throw new Error("The method "+t+" is not supported.")}}(e,r);break;default:throw new Error("The object "+t+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
