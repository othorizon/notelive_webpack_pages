!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=241)}({116:function(e,t){e.exports=_},12:function(e,t){e.exports=jQuery},129:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o=n(60),r=n(71),i=n(12),a=n.n(i),s=n(34),l=n(16),c=n(65);class d{updateWorkspaceUi(){a()("#new_password_tip").hide(),a()("#new_password").hide(),top.workspace&&(a()("#noteToolsBar").hide(),a()("#workspaceNoteBar").show()),this.updateUiFun&&this.updateUiFun()}register(e,t,n,o){this.getNoteFun=e,this.loadNoteFun=t,this.getSaveStatusFun=n,this.updateUiFun=o}checkAndInitWorkspace(e){if(!e)return!1;let t=decodeURI(e.substr(1)),n=t.match(/^\/*w\/+(\w+)\/*(.*)/);if(n&&3===n.length){if(t=n[2]){let r=n[1];return r=r.substring(0,8),t=t.replace(/\W/g,"").substring(0,16),e=o.d(r,t),window.location.hash=e,this.openWorkspace(e),!0}throw window.location.href="/mind#"+n[1],"redirect page to mind"}}openWorkspace(e){let t=this;this.getNoteFun().setTitle(e),this.loadPwdFromLocal(),this.updateWorkspaceUi();let n=window.parent.workspace;n&&(this.getNoteFun().setQueryPassword(n.getPassword()),window.getSaveStatus=this.getSaveStatusFun),this.loadNoteFun().then(e=>{if(e.isNew&&n&&t.getNoteFun().setPassword(n.getPassword()).setLockType(n.getLockType()).setQueryPassword(n.getPassword()),window.parent.updateHasNoteFun){let e=window.parent.updateHasNoteFun,n=!!t.getNoteFun().getContent();c.AppEventInstance.on(c.EventType.NoteChanged,()=>{let o=t.getNoteFun();o.getContent()&&!1===n?(e(o.getTitle(),!0),n=!0):o.getContent()||!0!==n||(e(o.getTitle(),!1),n=!1)})}}),n||Object(r.d)(this.getNoteFun().getTitle())}loadPwdFromLocal(){let e=this.getNoteFun(),t=Object(s.a)(e.getTitle());t&&e.setQueryPassword(new l.Note(JSON.parse(t)).getQueryPassword())}registerIframeEvent(e){if(window.parent.globalKeyDownEvent&&e){let t=window.parent.globalKeyDownEvent;a()(e).ready(()=>{a()(e.contentWindow).on("keydown",e=>{t(e)})})}}}},16:function(e,t,n){"use strict";n.r(t),n.d(t,"SERVER_PATH",function(){return r}),n.d(t,"COOLAB_SERVER_PATH",function(){return a}),n.d(t,"CONFIG",function(){return i}),n.d(t,"Note",function(){return s}),n.d(t,"Response",function(){return l});const o="//api.notelive.cn",r={renderPrefix:o+"/render/",queryOne:o+"/server/queryOne",replaceOrInsertOne:o+"/server/replaceOrInsertOne",modifyWorkspacePwd:o+"/server/modifyWorkspacePwd",delWorkspace:o+"/server/delWorkspace",queryWorkspaceTitles:o+"/server/queryWorkspaceTitles"},i={responseCode:{SUCCESS:200,NO_AUTH:505,ERROR:500},workspaceTitlePrefix:"/w/",siteNoteTitle:"note live - 在线记事本",siteFlowTitle:"note live - 在线流程图",flowDefaultData:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="203px" height="64px" version="1.1" content="&lt;mxfile userAgent=&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36&quot; version=&quot;@DRAWIO-VERSION@&quot; editor=&quot;www.draw.io&quot;&gt;&lt;diagram id=&quot;14058d99-db58-e9f5-3aba-399879c13e25&quot; name=&quot;Page-1&quot;&gt;jZNNk4MgDIZ/jXeVbbe91n5d9tTDnimmwhSNg1jt/vpFCVWnszPLBfIkIfgmRiwr+5PhtfzCHHSUxnkfsX2Upkm62rhtIE9Pth8rDwqjcgqawEX9AMGYaKtyaBaBFlFbVS+hwKoCYReMG4PdMuyGelm15gW8gYvg+p1+q9xKTzfpeuJnUIUMlZP11nuuXNwLg21F9aKU3cbl3SUPd9GHNpLn2M0QO0QsM4jWn8o+Az1oG2Tzecc/vK93G6jsfxJY/OlTHly39PF7bK9OCKeuVuLudgkG6Ln2GSTqpLJwqbkY7M6NQcR20pbaWYk73rCyR14qPUzAGfQDrBKcHNTwZBNsunZIHMWDnCxuBAWvYgrOUKMZ38DicTmOhldDR3eF5k1Due9akDwPMBb6GSJtToAlWPN0IeR1JXxKmGMyu2ko0piYnA3EmhinOSxeN0+9cAdqRzCnto++2b/FDr8=&lt;/diagram&gt;&lt;/mxfile&gt;" style="background-color: rgb(255, 255, 255);"><defs><linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="mx-gradient-ffcd28-1-ffa500-1-s-0"><stop offset="0%" style="stop-color:#FFCD28"/><stop offset="100%" style="stop-color:#FFA500"/></linearGradient><linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="mx-gradient-ffffff-0.9-ffffff-0.1-s-0"><stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9"/><stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.1"/></linearGradient></defs><g transform="translate(0.5,0.5)"><rect x="0" y="0" width="200" height="60" rx="30" ry="30" fill="#000000" stroke="#000000" transform="translate(2,3)" opacity="0.25"/><rect x="0" y="0" width="200" height="60" rx="30" ry="30" fill="url(#mx-gradient-ffcd28-1-ffa500-1-s-0)" stroke="#d79b00" pointer-events="none"/><path d="M 31.5 -1 Q -1 -1 -1 31.5 L -1 24 Q 100 42 201 24 L 201 31.5 Q 201 -1 168.5 -1 Z" fill="url(#mx-gradient-ffffff-0.9-ffffff-0.1-s-0)" stroke="none" pointer-events="none"/><g transform="translate(24.5,20.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="150" height="19" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 18px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 150px; white-space: nowrap; word-wrap: normal; font-weight: bold; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;">Double click here</div></div></foreignObject><text x="75" y="19" fill="#000000" text-anchor="middle" font-size="18px" font-family="Helvetica" font-weight="bold">Double click here</text></switch></g></g></svg>',enableCoolab:!0},a=o+"/coolab";class s{constructor(e){return e&&(this.id=e.id,this.title=e.title,this.queryPassword=e.queryPassword,this.password=e.password,this.content=e.content,this.contentType=e.contentType,this.lockType=e.lockType,this.updateTime=e.updateTime),this.contentType||(this.contentType="markdown"),this}getTitle(){return this.title}getContent(){return this.content||""}getQueryPassword(){return this.queryPassword}getPassword(){return this.password}getContentType(){return this.contentType}getLockType(){return this.lockType}getUpdateTime(){return this.updateTime}setTitle(e){return this.title=e,this}setContent(e){return this.content=e,this}setQueryPassword(e){return this.queryPassword=e,this}setPassword(e){return this.password=e,this}setContentType(e){return this.contentType=e,this}setLockType(e){return this.lockType=e,this}setUpdateTime(e){return this.updateTime=e,this}}class l{constructor(e){return e&&(this.code=e.code,this.msg=e.msg,this.data=e.data),this}getCode(){return this.code}getMsg(){return this.msg}getData(){return this.data}getNote(){return new s(this.data)}}},162:function(e,t,n){"use strict";n.r(t),n.d(t,"install",function(){return s});var o=n(12),r=n.n(o);n(413);const i=n(163),a='\n<div id="updateTips" class="update-tips" style="display:none">\n    <span id="updateTipsContent"></span>\n    <a onclick="document.getElementById(\'updateTips\').style.display=\'none\'" href="javascript:" class="update-tip-close">关闭</a>\n</div>\n';function s(){r()("body").append(a),i.install({onUpdating:()=>{r()("#updateTipsContent").html("有新的内容更新，正在获取....."),r()("#updateTips").show(),console.log("SW Event:","onUpdating")},onUpdateReady:()=>{console.log("SW Event:","onUpdateReady"),r()("#updateTipsContent").html('有新的内容更新,是否现在更新(将会刷新页面)？&emsp;<a id="updateBtn" class=\'click\' href="javascript:"><b>更新</b></a>'),r()("#updateTips").show(),r()("#updateBtn").on("click",function(){i.applyUpdate()})},onUpdated:()=>{console.log("SW Event:","onUpdated"),window.location.reload()},onUpdateFailed:()=>{console.log("SW Event:","onUpdateFailed"),console.error("更新失败"),r()("#updateTipsContent").html("更新失败，请尝试刷新页面")}})}},163:function(e,t){function n(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function o(){n()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()})}setInterval(o,36e5),t.install=function(e){if(e||(e={}),n()){var t=function(e){var t,n,r,i=e.installing||e.waiting;function a(){switch(i.state){case"redundant":o("onUpdateFailed"),i.onstatechange=null;break;case"installing":t||o("onUpdating");break;case"installed":n||o("onUpdateReady");break;case"activated":o("onUpdated"),i.onstatechange=null}}function s(){switch(i.state){case"redundant":i.onstatechange=null;break;case"installing":case"installed":break;case"activated":o("onInstalled"),i.onstatechange=null}}i&&!i.onstatechange&&(e.active?(a(),r=a):(s(),r=s),t=!0,e.waiting&&(n=!0),i.onstatechange=r)},o=function(t){"function"==typeof e[t]&&e[t]({source:"ServiceWorker"})};navigator.serviceWorker.register("/sw.js",{}).then(function(e){e&&(t(e),e.onupdatefound=function(){t(e)})}).catch(function(e){return o("onError"),Promise.reject(e)})}},t.applyUpdate=function(e,t){n()&&navigator.serviceWorker.getRegistration().then(function(n){n&&n.waiting?(n.waiting.postMessage({action:"skipWaiting"}),e&&e()):t&&t()})},t.update=o},188:function(e,t,n){"use strict";n.r(t);var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=window.device,i={},a=[];window.device=i;var s=window.document.documentElement,l=window.navigator.userAgent.toLowerCase(),c=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];function d(e){return-1!==l.indexOf(e)}function u(e){return s.className.match(new RegExp(e,"i"))}function p(e){var t=null;u(e)||(t=s.className.replace(/^\s+|\s+$/g,""),s.className=t+" "+e)}function f(e){u(e)&&(s.className=s.className.replace(" "+e,""))}function w(){i.landscape()?(f("portrait"),p("landscape"),g("landscape")):(f("landscape"),p("portrait"),g("portrait")),y()}function g(e){for(var t in a)a[t](e)}i.macos=function(){return d("mac")},i.ios=function(){return i.iphone()||i.ipod()||i.ipad()},i.iphone=function(){return!i.windows()&&d("iphone")},i.ipod=function(){return d("ipod")},i.ipad=function(){return d("ipad")},i.android=function(){return!i.windows()&&d("android")},i.androidPhone=function(){return i.android()&&d("mobile")},i.androidTablet=function(){return i.android()&&!d("mobile")},i.blackberry=function(){return d("blackberry")||d("bb10")||d("rim")},i.blackberryPhone=function(){return i.blackberry()&&!d("tablet")},i.blackberryTablet=function(){return i.blackberry()&&d("tablet")},i.windows=function(){return d("windows")},i.windowsPhone=function(){return i.windows()&&d("phone")},i.windowsTablet=function(){return i.windows()&&d("touch")&&!i.windowsPhone()},i.fxos=function(){return(d("(mobile")||d("(tablet"))&&d(" rv:")},i.fxosPhone=function(){return i.fxos()&&d("mobile")},i.fxosTablet=function(){return i.fxos()&&d("tablet")},i.meego=function(){return d("meego")},i.cordova=function(){return window.cordova&&"file:"===location.protocol},i.nodeWebkit=function(){return"object"===o(window.process)},i.mobile=function(){return i.androidPhone()||i.iphone()||i.ipod()||i.windowsPhone()||i.blackberryPhone()||i.fxosPhone()||i.meego()},i.tablet=function(){return i.ipad()||i.androidTablet()||i.blackberryTablet()||i.windowsTablet()||i.fxosTablet()},i.desktop=function(){return!i.tablet()&&!i.mobile()},i.television=function(){for(var e=0;e<c.length;){if(d(c[e]))return!0;e++}return!1},i.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?screen.orientation.type.includes("portrait"):window.innerHeight/window.innerWidth>1},i.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?screen.orientation.type.includes("landscape"):window.innerHeight/window.innerWidth<1},i.noConflict=function(){return window.device=r,this},i.ios()?i.ipad()?p("ios ipad tablet"):i.iphone()?p("ios iphone mobile"):i.ipod()&&p("ios ipod mobile"):i.macos()?p("macos desktop"):i.android()?i.androidTablet()?p("android tablet"):p("android mobile"):i.blackberry()?i.blackberryTablet()?p("blackberry tablet"):p("blackberry mobile"):i.windows()?i.windowsTablet()?p("windows tablet"):i.windowsPhone()?p("windows mobile"):p("windows desktop"):i.fxos()?i.fxosTablet()?p("fxos tablet"):p("fxos mobile"):i.meego()?p("meego mobile"):i.nodeWebkit()?p("node-webkit"):i.television()?p("television"):i.desktop()&&p("desktop"),i.cordova()&&p("cordova"),i.onChangeOrientation=function(e){"function"==typeof e&&a.push(e)};var h="resize";function b(e){for(var t=0;t<e.length;t++)if(i[e[t]]())return e[t];return"unknown"}function y(){i.orientation=b(["portrait","landscape"])}Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(h="orientationchange"),window.addEventListener?window.addEventListener(h,w,!1):window.attachEvent?window.attachEvent(h,w):window[h]=w,w(),i.type=b(["mobile","tablet","desktop"]),i.os=b(["ios","iphone","ipad","ipod","android","blackberry","windows","fxos","meego","television"]),y();var m=i;n.d(t,"checkDesktop",function(){return T}),n.d(t,"checkMobile",function(){return x});const v="desktop",k="mobile";function T(){let e=P("ed");if(e!==k&&(m.desktop()||e===v))throw window.location.pathname=window.location.pathname.replace(/\/?mobile/,""),"redirect page to desktop"}function x(){let e=P("ed");if(e!==v&&(!m.desktop()||e===k))throw window.location.pathname="/mobile"+window.location.pathname,"redirect page to mobile"}function P(e){let t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=decodeURI(window.location.search).substr(1).match(t);return null!=n?unescape(n[2]):null}},241:function(e,t,n){"use strict";n.r(t);n(270);var o=n(116),r=n.n(o),i=n(12),a=n.n(i),s=n(16),l=n(71),c=n(34),d=n(129);n(188).checkDesktop();const u='<span title="离线模式下数据会保存在本地" style="display: flex; align-items: center; padding: 0 6px;width: 40px; height: 24px; border-radius: 3px;white-space: nowrap; font-size: 14px; color: rgba(55, 53, 47, 0.6); border: 1px solid rgba(55, 53, 47, 0.16);" class="">Offline</span><span style="display: flex;align-items: center;padding: 0 6px;height: 24px;margin-right: 18px;white-space: nowrap;font-size: 5px;color: rgba(55, 53, 47, 0.6);">本地保存</span>';n(162).install();let p,f,w,g,h,b,y,m,v,k,T,x,P,O,C,S,N,E,R,j=new s.Note,F=1,_=!1,U="",W=!0,M=!0,I=new d.a;function A(){W=!0,w.attr("disabled",""),T.show()}function q(){W&&(W=!1,T.hide(),w.attr("disabled",null))}function Q(e=!0){(M=e)?k.hide():k.show(),m.show(),y.focus()}function D(){m.hide(),y.val("")}function G(){P.show(),x.focus(),x.val(j.getPassword()),S.val(j.getLockType()||"rw")}function H(){P.hide()}function L(){1===F&&g.html("未保存"),F=0}function K(e){g.html(u),F=0,_=!0}function z(){return new Promise(e=>{a.a.ajax({type:"POST",url:s.SERVER_PATH.queryOne,data:{title:j.getTitle(),queryPassword:j.getQueryPassword()},success:function(t){if(_=!1,t){let n=new s.Response(t);if(n.getCode()===s.CONFIG.responseCode.SUCCESS){if(w.show(),m.hide(),n.getData()){let e=j.getQueryPassword();(j=n.getNote()).setQueryPassword(e),j.setPassword(e),function(){if(!j.getLockType()||-1===j.getLockType().indexOf("w"))return void q();if(j.getQueryPassword())return void q();A()}(),function(){if(W)return;let e=Object(c.a)(j.getTitle());if(e){let t=new s.Note(JSON.parse(e));if(t.getUpdateTime()>j.getUpdateTime()){let e=j.getQueryPassword();(j=t).setPassword(e),j.setQueryPassword(e),J(j)}}}(),U=j.getContent()||"",w.val(j.getContent()||""),h.val(j.getContentType()||"txt")}else q();Object(c.c)(j),e(!0)}else n.getCode()===s.CONFIG.responseCode.NO_AUTH?Q(!0):(console.error(n),K(n.getMsg()))}U=j.getContent(),e()},error:function(t){console.error(t),K(),function(){let e=Object(c.a)(j.getTitle());e&&(j=new s.Note(JSON.parse(e)),w.val(j.getContent()||""),h.val(j.getContentType()||"txt"),console.log("load from localStorage"))}(),q(),e()}})})}function B(){if(!W)return j.getTitle()?(j.setContent(w.val()),j.setUpdateTime(Date.now()),U=j.getContent(),""!==j.getContent()&&void 0!==j.getContent()&&null!==j.getContent()||Object(l.c)(j.getTitle()),Object(c.c)(j),J(j)):Promise.resolve()}function J(e){return new Promise((t,n)=>{a.a.ajax({type:"POST",url:s.SERVER_PATH.replaceOrInsertOne,data:e,success:function(n){if(_=!1,n){let o=new s.Response(n);if(o.getCode()===s.CONFIG.responseCode.SUCCESS)return q(),0===F&&g.html("已保存"),F=1,console.log("update data"),Object(c.c)(e),void t(!0);o.getCode()===s.CONFIG.responseCode.NO_AUTH?Q(!1):(console.error(o),K(o.getMsg()))}else console.error("保存失败,返回数据为空"),K();t()},error:function(e){e&&413===e.status?g.html("<span style='color: red'>保存失败，超过长度限制</span>"):(console.error(e),K()),t()}})})}function V(){console.log("init"),D(),H(),j=new s.Note,U="",w.blur(),w.val(""),h.val("txt"),F=1,W=!0,w.attr("disabled",""),g.html("&emsp;");let e=location.hash;if(!I.checkAndInitWorkspace(e)){if(void 0===e||null==e||""===e){let t=Object(l.b)();t?e=t:(e=Y(4),console.log("random title:"+e))}else console.log("load from hash:"+e),e=decodeURI(e.substr(1)).replace(/\W/g,"").substring(0,8);if("list"===e)return function e(){w.blur();w.hide();P.hide();m.hide();N.hide();f.html(Object(l.a)());p.show();document.title="列表 @"+s.CONFIG.siteNoteTitle;let t=a()(".removeHistory");t.off("click");t.on("click",function(t){let n=a()(this).attr("data").substr(1);console.log("remove note:"+n),Object(l.c)(n),Object(c.b)(n),e()})}(),void Z(null);"create"===e&&(e=Y(4),console.log("create new :"+e)),window.location.hash=e,document.title=e+" @"+s.CONFIG.siteNoteTitle,w.show(),p.hide(),N.show(),b.attr("href",s.SERVER_PATH.renderPrefix+e),Z(e),j.setTitle(e),function(){let e=Object(c.a)(j.getTitle());e&&j.setQueryPassword(new s.Note(JSON.parse(e)).getQueryPassword())}(),z(),Object(l.d)(j.getTitle())}}function Y(e){e=e||32;const t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=t.length;let o="";for(let r=0;r<e;r++)o+=t.charAt(Math.floor(Math.random()*n));return o}function Z(e){e?(E.show(),R.show(),E.attr("href","/markdown/#"+e),R.attr("href","/html/#"+e)):(E.hide(),R.hide())}I.register(()=>j,()=>z(),()=>F,()=>{b.attr("href",s.SERVER_PATH.renderPrefix+"?title="+j.getTitle())}),a()(function(){p=a()("#file_list"),f=a()("#list_items"),w=a()("#content"),g=a()("#tip"),h=a()("#contentType"),b=a()("#api_url"),N=a()("#renderApi"),E=a()("#render_markdown"),R=a()("#render_html"),function(){y=a()("#password"),m=a()("#password_div"),v=a()("#password_btn"),k=a()("#readonly_btn"),x=a()("#new_password"),P=a()("#new_password_div"),O=a()("#new_password_btn"),C=a()("#new_password_cancel"),S=a()("#lockType"),(T=a()("#editDoc")).on("click",()=>Q(!1));let e=function(){j.setPassword(y.val()).setQueryPassword(y.val()),D(),M?z():J(j)};y.on("keypress",function(t){13===t.keyCode&&e()}),v.on("click",e),k.on("click",()=>{A(),j.setQueryPassword(null),function(){let e=Object(c.a)(j.getTitle());e&&Object(c.c)(new s.Note(JSON.parse(e)).setQueryPassword(null).setPassword(null))}(),D(),z()}),a()("#modify_password").on("click",G),O.on("click",function(){j.setPassword(x.val()),j.getPassword()?j.setLockType(S.val()):j.setLockType(null),H(),B().then(e=>{e&&(j.setQueryPassword(x.val()),Object(c.c)(j))})}),C.on("click",function(){H()})}(),V(),window.onhashchange=V,function(){window.addEventListener("beforeunload",e=>{W||U!==w.val()&&(B(),_||0!==F||(e.returnValue="有尚未保存的数据，现在退出可能会丢失数据"))}),w.on("blur",function(){W||U!==w.val()&&(console.log("on blur to save data"),B())}),w.on("input propertychange",function(){W||j.getContent()!==w.val()&&(j.setContent(w.val()),Object(c.c)(j))}),w.on("input propertychange",function(){W||U!==w.val()&&L()});let e=r.a.throttle(function(){W||U!==w.val()&&B()},5e3,{leading:!0});w.on("input propertychange",()=>{W||U!==w.val()&&e()}),h.on("change",()=>{W||(L(),j.setContentType(h.val()),B())})}()})},270:function(e,t){},34:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});const o="note.local.notes.";function r(e){let t=s(e.getTitle());void 0===e.getContent()||null===e.getContent()||""===e.getContent()?(localStorage.removeItem(t),console.log("remove note from localStorage:"+e.getTitle())):localStorage.setItem(t,JSON.stringify(e))}function i(e){localStorage.removeItem(s(e))}function a(e){return localStorage.getItem(s(e))}function s(e){return o+e}},413:function(e,t){},60:function(e,t,n){"use strict";n.d(t,"f",function(){return i}),n.d(t,"g",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return u});var o=n(16);function r(e){e=e||32;const t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=t.length;let o="";for(let r=0;r<e;r++)o+=t.charAt(Math.floor(Math.random()*n));return o}function i(){return r(4)}function a(){return r(4)}function s(e){let t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=decodeURI(window.location.search).substr(1).match(t);return null!=n?unescape(n[2]):null}function l(e,t){return o.CONFIG.workspaceTitlePrefix+e+"/"+t}function c(e,t){let n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in n)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[t]:("00"+n[t]).substr((""+n[t]).length)));return e}function d(e){if(!e)return null;let t=e.match(/^\/*w\/+\w+\/+(\w+)/);return t&&2===t.length?t[1]:null}function u(e,t){return e&&-1!==e.indexOf("w")&&!t}},65:function(e,t){let n=null;n||(n=new class{constructor(){let e=this;e.app_events={},e.emit=function(t,n){let o=e.app_events[t];if(o&&o.length)for(let e=0;e<o.length;e++)if(o[e])try{o[e](n)}catch(e){console.error(t+": Listener ERROR",e)}},e.on=function(t,n){e.app_events[t]||(e.app_events[t]=[]),e.app_events[t].push(n)},e.off=function(t,n){let o=e.app_events[t];if(o&&o.length){let e=o.indexOf(n);o.splice(e,1)}}}}),e.exports={EventType:{WindowKeydown:"WindowKeydown",NoteChanged:"NoteChanged",jsMindSelectNode:"jsMindSelectNode"},AppEventInstance:n}},71:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"c",function(){return c});const o='<pre>-&emsp;<a href="{{title}}">{{title}}</a>&emsp;&emsp;[<span class="removeHistory" data="{{title}}" style="color:dodgerblue;text-decoration: underline;cursor: pointer">x</span>]</pre>',r="note.titles";function i(){let e,t=localStorage.getItem(r);return e=t?JSON.parse(t):[]}function a(){return i().map(e=>o.replace(/{{title}}/g,"#"+e)).join("")}function s(){return i()[0]}function l(e){d([e].concat(i().filter(t=>t!==e)))}function c(e){d(i().filter(t=>t!==e))}function d(e){localStorage.setItem(r,JSON.stringify(e))}}});