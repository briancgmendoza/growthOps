(()=>{"use strict";var e,n={519:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(537),o=t.n(r),a=t(645),s=t.n(a)()(o());s.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: monospace;\r\n}\r\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,sBAAsB;AACxB",sourcesContent:["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: monospace;\r\n}\r\n"],sourceRoot:""}]),s.locals={};const i=s},470:(e,n,t)=>{var r=t(893),o=t(935),a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)};const s=function(){return(0,r.jsx)("section",a({className:"mb-3"},{children:(0,r.jsx)("h3",a({className:"fw-bold"},{children:"GrowthOps Exam"}))}))};var i=t(294),l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},l.apply(this,arguments)};const c=function(e){var n=e.onClick,t=e.type,o=e.className,a=e.children;return(0,r.jsx)("button",l({type:t,onClick:n,className:o},{children:a}))};var u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)},d=function(e){var n=e.onClose;return(0,r.jsx)("div",{className:"position-fixed \r\n        top-0 \r\n        left-0 \r\n        w-100 \r\n        h-100 \r\n        zindex-modal-backdrop",onClick:n,style:{backgroundColor:"rgba(0, 0, 0, .75)"}})},f=function(e){var n=e.children;return(0,r.jsx)("div",u({className:"position-fixed\r\n      top-50\r\n      start-50\r\n      translate-middle\r\n      w-75\r\n      zindex-dropdown",style:{maxWidth:"500px"}},{children:(0,r.jsx)("div",{children:n})}))};const h=function(e){var n=e.children,t=e.onClose;return(0,r.jsxs)(r.Fragment,{children:[o.createPortal((0,r.jsx)(d,{onClose:t}),document.getElementById("overlays")),o.createPortal((0,r.jsx)(f,{children:n}),document.getElementById("overlays"))]})};var p=t(503),y=t(680),b=((0,p.ZF)({apiKey:"AIzaSyB11_IfEh42fTxZdeG9gjh3HAfJkCTrHUQ",authDomain:"react-growthops.firebaseapp.com",databaseURL:"https://react-growthops-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"react-growthops",storageBucket:"react-growthops.appspot.com",messagingSenderId:"1039538457597",appId:"1:1039538457597:web:4a6a1fbaca766fb608a794",measurementId:"G-4NBH46ZKNJ"}),(0,y.ad)()),m=t(257),x=function(){return x=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},x.apply(this,arguments)};const v=function(e){var n=e.btnText,t=e.btnSecText,o=e.onClose,a=i.useState([{date:"",yesterdayWork:"",planToday:"",blocker:""}]),s=a[0],l=a[1],u=(0,m.hJ)(b,"dailyLog"),d=function(e,n){var t=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}([],s,!0);t[e][n.currentTarget.name]=n.currentTarget.value,l(t)};return(0,r.jsxs)("form",x({onSubmit:function(e){return a=e,n=void 0,t=void 0,o=function(){return function(e,n){var t,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=n.call(e,s)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}(this,(function(e){switch(e.label){case 0:return a.preventDefault(),[4,(0,m.ET)(u,x({},s))];case 1:return e.sent(),alert("Added successfully!"),window.location.reload(),[2]}}))},new((r=void 0)||(r=Promise))((function(e,a){function s(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,i)}l((o=o.apply(n,t||[])).next())}));var n,t,r,o,a},className:"gy-2 gx-3"},{children:[s.map((function(e,n){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",x({className:"form-floating mb-3"},{children:[(0,r.jsx)("input",{type:"date",value:e.date,onChange:function(e){return d(n,e)},name:"date",id:"date",required:!0,className:"form-control",placeholder:""}),(0,r.jsx)("label",x({htmlFor:"date"},{children:"Date"}))]})),(0,r.jsxs)("div",x({className:"form-floating mb-3"},{children:[(0,r.jsx)("input",{type:"text",value:e.yesterdayWork,onChange:function(e){return d(n,e)},name:"yesterdayWork",id:"yesterdayWork",required:!0,className:"form-control",placeholder:""}),(0,r.jsx)("label",x({htmlFor:"yesterdayWork"},{children:"What you did yesterday?"}))]})),(0,r.jsxs)("div",x({className:"form-floating mb-3"},{children:[(0,r.jsx)("input",{type:"text",value:e.planToday,onChange:function(e){return d(n,e)},name:"planToday",id:"planToday",required:!0,className:"form-control",placeholder:""}),(0,r.jsx)("label",x({htmlFor:"planToday"},{children:"Today's plan"}))]})),(0,r.jsxs)("div",x({className:"form-floating"},{children:[(0,r.jsx)("input",{type:"text",value:e.blocker,onChange:function(e){return d(n,e)},name:"blocker",id:"blocker",className:"form-control",placeholder:""}),(0,r.jsx)("label",x({htmlFor:"blocker"},{children:"Blockers"}))]}))]},n)})),(0,r.jsxs)("div",x({className:"float-end"},{children:[(0,r.jsx)(c,x({type:"submit",className:"btn btn-success m-2"},{children:n})),(0,r.jsx)(c,x({type:"button",className:"btn btn-danger m-2",onClick:o},{children:t}))]}))]}))};var j=function(){return j=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},j.apply(this,arguments)},g=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}l((r=r.apply(e,n||[])).next())}))},w=function(e,n){var t,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=n.call(e,s)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};const k=function(){var e=i.useState([]),n=e[0],t=e[1],o=(0,m.hJ)(b,"dailyLog"),a=i.useState(!1),s=a[0],l=a[1],u=i.useState(null),d=(u[0],u[1]),f=i.useState(!1),p=f[0],y=f[1],x=i.useState(window.innerWidth),k=x[0],O=x[1],C=function(){O(window.innerWidth)};return i.useEffect((function(){return window.addEventListener("resize",C),function(){return window.removeEventListener("resize",C)}}),[]),i.useEffect((function(){g(void 0,void 0,void 0,(function(){var e,n;return w(this,(function(r){switch(r.label){case 0:l(!0),d(null),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,(0,m.PL)(o)];case 2:return e=r.sent(),t(e.docs.map((function(e){return j(j({},e.data()),{id:e.id})}))),[3,4];case 3:return n=r.sent(),d(n.message),[3,4];case 4:return l(!1),[2]}}))}))}),[]),(0,r.jsx)(r.Fragment,{children:s?(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:"Loading"})}):(0,r.jsxs)("section",{children:[(0,r.jsx)("h3",j({className:"text-center fw-bold"},{children:"Daily Scrum"})),(0,r.jsx)("div",j({className:"my-0 mx-auto"},{children:(0,r.jsxs)("table",j({className:"table table-striped text-center"},{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[k>500&&(0,r.jsx)("th",j({scope:"col"},{children:"Date"})),(0,r.jsx)("th",j({scope:"col"},{children:"What you did yesterday?"})),(0,r.jsx)("th",j({scope:"col"},{children:"Today's plan"})),(0,r.jsx)("th",j({scope:"col"},{children:"Blocker"})),k>500&&(0,r.jsx)("th",j({scope:"col"},{children:"Options"}))]})}),(0,r.jsx)("tbody",{children:n.length>0&&n.map((function(e,n){return(0,r.jsxs)("tr",{children:[k>500&&(0,r.jsx)("td",{children:e[0].date}),(0,r.jsx)("td",{children:e[0].yesterdayWork}),(0,r.jsx)("td",{children:e[0].planToday}),(0,r.jsx)("td",{children:e[0].blocker}),k>500&&(0,r.jsx)("td",{children:(0,r.jsx)(c,j({type:"button",onClick:function(){return n=e.id,g(void 0,void 0,void 0,(function(){var e;return w(this,(function(t){switch(t.label){case 0:return e=(0,m.JU)(b,"dailyLog",n),[4,(0,m.oe)(e)];case 1:return t.sent(),alert("Deleted successfully!"),window.location.reload(),[2]}}))}));var n},className:"btn btn-light"},{children:(0,r.jsx)("i",{className:"bi bi-x-square"})}))})]},n)}))})]}))})),(0,r.jsx)(c,j({type:"button",onClick:function(){return y(!p)},className:"btn btn-primary float-end"},{children:"Add Work Log"})),p&&(0,r.jsx)(h,j({onClose:function(){return y(!1)}},{children:(0,r.jsx)(v,{btnText:"Submit",btnSecText:"Close",onClose:function(){return y(!1)}})}))]})})};var O=function(){return O=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},O.apply(this,arguments)};const C=function(){return(0,r.jsxs)("div",O({className:"d-flex \r\n        flex-column\r\n        align-items-center\r\n        justify-content-center\r\n        m-3"},{children:[(0,r.jsx)(s,{}),(0,r.jsx)(k,{})]}))};var N=t(379),A=t.n(N),T=t(795),S=t.n(T),E=t(569),B=t.n(E),P=t(565),W=t.n(P),I=t(216),L=t.n(I),F=t(589),Z=t.n(F),z=t(519),D={};D.styleTagTransform=Z(),D.setAttributes=W(),D.insert=B().bind(null,"head"),D.domAPI=S(),D.insertStyleElement=L(),A()(z.Z,D),z.Z&&z.Z.locals&&z.Z.locals,o.render((0,r.jsx)((function(){return(0,r.jsx)("main",{children:(0,r.jsx)(C,{})})}),{}),document.getElementById("root"))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,e=[],r.O=(n,t,o,a)=>{if(!t){var s=1/0;for(u=0;u<e.length;u++){for(var[t,o,a]=e[u],i=!0,l=0;l<t.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,o,a]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={826:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,a,[s,i,l]=t,c=0;if(s.some((n=>0!==e[n]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var u=l(r)}for(n&&n(t);c<s.length;c++)a=s[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},t=self.webpackChunkgrowthops=self.webpackChunkgrowthops||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=r.O(void 0,[78],(()=>r(470)));o=r.O(o)})();
//# sourceMappingURL=index.js.map