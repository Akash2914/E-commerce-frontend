"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[943],{50508:function(e,r,t){t.d(r,{rE:function(){return u},w9:function(){return l},HZ:function(){return i}});var n=t(15861),a=t(87757),o=t.n(a),c=t(74569),s=t.n(c),u=function(){var e=(0,n.Z)(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://ecommercebackend-t310.onrender.com","/postContact"),r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(o().mark((function e(r,t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("".concat("https://ecommercebackend-t310.onrender.com","/removeContact/").concat(r),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommercebackend-t310.onrender.com","/getContacts"),{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},1385:function(e,r,t){t.r(r);var n=t(29439),a=t(72791),o=t(30577),c=t(64386),s=t(11635),u=t(43360),l=t(24849),i=t(50508),d=t(16871),h=t(80184);r.default=function(){var e=(0,a.useState)(!1),r=(0,n.Z)(e,2),t=r[0],p=r[1],m=(0,a.useState)(""),x=(0,n.Z)(m,2),f=x[0],b=x[1],j=(0,a.useState)(""),Z=(0,n.Z)(j,2),v=Z[0],g=Z[1],y=(0,a.useState)(""),k=(0,n.Z)(y,2),C=k[0],w=k[1],q=(0,a.useState)(""),S=(0,n.Z)(q,2),A=S[0],F=S[1],L=(0,d.s0)(),N=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c.Yb,{children:(0,h.jsxs)(s.Z,{onSubmit:function(e){e.preventDefault();var r={name:f,email:v,phone:C,content:A};return f&&v&&C&&A?N.test(C)?(p(!0),void(0,i.rE)(r).then((function(e){o.Am.success("Your request has been received, we will contact you shortly"),p(!1),b(""),g(""),w(""),F(""),L("/")})).catch((function(e){o.Am.error(e),p(!1)}))):o.Am.error("Enter a Valid Phone Number wihtout country code"):o.Am.error("All are required Fields")},children:[(0,h.jsxs)(s.Z.Group,{controlId:"name",children:[(0,h.jsx)(s.Z.Label,{children:(0,h.jsx)("strong",{style:{color:"black"},children:"Name"})}),(0,h.jsx)(s.Z.Control,{type:"text",autoFocus:!0,required:!0,placeholder:"name",value:f,onChange:function(e){return b(e.target.value)}})]}),(0,h.jsx)("br",{}),(0,h.jsxs)(s.Z.Group,{controlId:"email",children:[(0,h.jsx)(s.Z.Label,{children:(0,h.jsx)("strong",{style:{color:"black"},children:"Email"})}),(0,h.jsx)(s.Z.Control,{type:"text",autoFocus:!0,required:!0,placeholder:"email",value:v,onChange:function(e){return g(e.target.value)}})]}),(0,h.jsx)("br",{}),(0,h.jsxs)(s.Z.Group,{controlId:"phone",children:[(0,h.jsx)(s.Z.Label,{children:(0,h.jsx)("strong",{style:{color:"black"},children:"Phone"})}),(0,h.jsx)(s.Z.Control,{type:"Number",autoFocus:!0,required:!0,placeholder:"Phone",value:C,onChange:function(e){return w(e.target.value)}})]}),(0,h.jsx)("br",{}),(0,h.jsxs)(s.Z.Group,{controlId:"content",children:[(0,h.jsx)(s.Z.Label,{children:(0,h.jsx)("strong",{style:{color:"black"},children:"Content"})}),(0,h.jsx)(s.Z.Control,{as:"textarea",required:!0,placeholder:"Type Your Query",value:A,onChange:function(e){return F(e.target.value)},rows:3})]}),t?(0,h.jsxs)(u.Z,{variant:"primary",className:"btn-sm btn-danger mt-3",disabled:!0,children:[(0,h.jsx)(l.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"  ","Loading..."]}):(0,h.jsx)(u.Z,{type:"submit",disabled:t||!f||!A||!v,className:"btn-raised mt-3",variant:"primary",children:"Create"})]})})})}}}]);
//# sourceMappingURL=943.5d1cba37.chunk.js.map