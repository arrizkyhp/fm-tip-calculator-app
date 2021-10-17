(this["webpackJsonptip-calculator-app"]=this["webpackJsonptip-calculator-app"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(14),i=c.n(n),r=c(15),l=c(2),o=(c(22),c(1)),j=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"attribution",children:["Challenge by",Object(o.jsxs)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:[" ","Frontend Mentor"]}),". Coded by"," ",Object(o.jsxs)("a",{href:"https://github.com/arrizkyhp",target:"_blank",rel:"noreferrer",children:[" ","Arrizky Hasya Pratama."," "]})]})})},b=c(7);function u(e){var t=[e.className];e.isTip&&t.push("btn--tip"),e.isReset&&t.push("btn--reset"),e.hasShadow&&t.push("btn-shadow");return Object(o.jsx)("button",{className:"btn ".concat(t.join(" ")),onClick:function(){e.onClick&&e.onClick()},children:e.children})}function d(e){var t=Object(a.useContext)(h),c=(t.reset,t.isReset),s=Object(a.useContext)(h),n=s.disabled;s.isDisabled;return Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"info-group amount-group",children:[Object(o.jsxs)("div",{className:"info__text",children:[Object(o.jsx)("h1",{className:"info__text__title",children:"Tip Amount"}),Object(o.jsx)("p",{className:"info__text__description",children:"/ person"})]}),Object(o.jsx)("h2",{className:"amount",id:"tipAmount",children:"$".concat(""===e.tipAmount?"0.00":e.tipAmount)})]}),Object(o.jsxs)("div",{className:"info-group",children:[Object(o.jsxs)("div",{className:"info__text",children:[Object(o.jsx)("h1",{className:"info__text__title",children:"Total"}),Object(o.jsx)("p",{className:"info__text__description",children:"/ person"})]}),Object(o.jsx)("h2",{className:"amount",id:"total",children:"$".concat(""===e.total?"0.00":e.total)})]}),Object(o.jsx)("button",{className:"btn btn--reset ".concat(n?"btn-disabled":""),id:"buttonReset",onClick:function(){c(!0)},children:"RESET"})]})}var h=Object(a.createContext)({reset:!1,isReset:function(){},disabled:!0,isDisabled:function(){}});function p(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),i=Object(b.a)(n,2),r=i[0],l=i[1],j=Object(a.useState)(0),p=Object(b.a)(j,2),O=p[0],m=p[1],x={reset:c,isReset:s,disabled:r,isDisabled:l},f=Object(a.useState)(""),v=Object(b.a)(f,2),N=v[0],g=v[1],_=Object(a.useState)(""),S=Object(b.a)(_,2),C=S[0],k=S[1],w=Object(a.useState)(""),T=Object(b.a)(w,2),y=T[0],F=T[1],R=Object(a.useState)(""),A=Object(b.a)(R,2),E=A[0],z=A[1],P=Object(a.useState)(!1),D=Object(b.a)(P,2),B=D[0],I=D[1],J=Object(a.useState)(!1),M=Object(b.a)(J,2),$=M[0],H=M[1],L=Object(a.useState)(""),q=Object(b.a)(L,2),G=q[0],K=q[1],Q=Object(a.useState)(""),U=Object(b.a)(Q,2),V=U[0],W=U[1];Object(a.useEffect)((function(){y<1||""===N?(K(""),W("")):X(),c&&(s(!1),l(!0),m(""),g(""),z(""),k(""),F(""),K(""),W("")),O>1&&z("")}),[y,C,c,N,r,O]);var X=function(){var e=N*C,t=parseFloat(e)/Number(y);K(Number(t).toFixed(2));var c=(parseFloat(e)+parseFloat(N))/y;W(Number(c).toFixed(2)),I(!1),l(!1)};return Object(o.jsxs)(h.Provider,{value:x,children:[Object(o.jsxs)("div",{className:"input",children:[Object(o.jsxs)("div",{className:"form-group input-bill-icon",children:[Object(o.jsx)("label",{htmlFor:"bill",children:"Bill"}),Object(o.jsx)("input",{type:"number",className:"input-bill form-control ".concat($?"error":""),placeholder:"0",value:N,id:"bill",min:"0",onChange:function(e){e.target.value<0&&(e.target.value=0);var t=e.target.value;t<0?(t=0,g(N)):0===e.target.value?(H(!0),g(0)):(H(!1),g(t))}})]}),Object(o.jsxs)("div",{className:"form-group tip-group",children:[Object(o.jsx)("label",{htmlFor:"tip",children:"Select Tip %"}),Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)(u,{hasShadow:!0,isTip:!0,className:5===O?"active":"",onClick:function(){k(.05),m(5)},children:"5%"}),Object(o.jsx)(u,{hasShadow:!0,isTip:!0,className:10===O?"active":"",onClick:function(){k(.1),m(10)},children:"10%"}),Object(o.jsx)(u,{hasShadow:!0,isTip:!0,className:15===O?"active":"",onClick:function(){k(.15),m(15)},children:"15%"}),Object(o.jsx)(u,{hasShadow:!0,isTip:!0,className:25===O?"active":"",onClick:function(){k(.25),m(25)},children:"25%"}),Object(o.jsx)(u,{hasShadow:!0,isTip:!0,className:50===O?"active":"",onClick:function(){k(.5),m(50)},children:"50%"}),Object(o.jsx)("input",{type:"number",className:"custom-tip select-tip",min:"0",id:"tip",value:E,onChange:function(e){m(""),e.target.value<0?(e.target.value=0,k(0),z(0)):(k(e.target.value/100),z(e.target.value))},placeholder:"Custom"})]})]}),Object(o.jsxs)("div",{className:"form-group input-nop-icon",children:[Object(o.jsx)("label",{htmlFor:"nop",children:"Number of People"}),B&&Object(o.jsx)("p",{className:"nop-error",children:"Can't be zero"}),Object(o.jsx)("input",{type:"number",className:"input-nop form-control ".concat("custom"===O?"active":""," ").concat(B?"error":""),id:"nop",min:"0",placeholder:"0",value:y,onChange:function(e){e.target.value<0&&(e.target.value="");var t=e.target.value;"0"===t?(console.log("cannot be zero"),F(0),I(!0)):""===t?(I(!0),F("")):t<0?(t=0,F(y)):F(t)}})]})]}),Object(o.jsx)(d,{tipAmount:G,total:V})]})}function O(){return Object(o.jsxs)("main",{className:"splitter",children:[Object(o.jsxs)("h1",{className:"logo text-dark-gray-cyan",children:["SPLI",Object(o.jsx)("br",{}),"TTER"]}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(p,{})}),Object(o.jsx)(j,{})]})}var m=function(){return Object(o.jsx)(r.a,{basename:"/fm-tip-calculator-app",children:Object(o.jsx)(l.a,{exact:!0,path:"/",component:O})})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e5d7888b.chunk.js.map