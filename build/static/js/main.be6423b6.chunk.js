(this["webpackJsonpdice-roller"]=this["webpackJsonpdice-roller"]||[]).push([[0],{31:function(n,e,t){"use strict";t.r(e);var i,a,r,c,o,d,s,x,l,b,j,p,u,O,h,f,g,m,v,w,k,y,S,N,D=t(0),E=t.n(D),T=t(17),z=t.n(T),J=t(2),C=t(3),I=t(4),B=t(10),L=t.n(B),R=t(14),A=t(5),F=t(33),M=t(1),P=Object(I.a)(F.a.div).attrs((function(){return{initial:!1,variants:H}}))(i||(i=Object(C.a)(["\n  text-align: center;\n  height: 80px;\n  width: 80px;\n  background-color: #edf6ff;\n  margin-top: 20px;\n  margin-left: 20px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,\n    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,\n    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;\n  @media (max-width: 768px) {\n    height: 50px;\n    width: 50px;\n  }\n"]))),H={start:{rotate:[0,360,0,0,0],transition:{duration:3}},end:{}},Y=I.a.div(a||(a=Object(C.a)(["\n  font-size: 30px;\n  margin-top: 22px;\n  @media (max-width: 768px) {\n    font-size: 30px;\n    margin-top: 12px;\n  }\n"]))),q=function(n){var e=n.num,t=n.showAnimate;n.index;return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(P,{animate:t?"start":"end",children:Object(M.jsxs)(Y,{children:[" ",e]})})})},G="react-dice-cookies",K=function(){return localStorage.getItem(G)},Q=I.a.div(r||(r=Object(C.a)(["\n  height: auto;\n  margin: auto;\n  margin-bottom: 50px;\n  text-align: center;\n  width: 60%;\n  background-color: #edf6ff6b;\n  border-radius: 10px;\n  @media (max-width: 768px) {\n    width: 90%;\n  }\n"]))),U=I.a.div(c||(c=Object(C.a)(["\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-around;\n  justify-content: center;\n"]))),V=I.a.div(o||(o=Object(C.a)(["\n  margin: auto;\n  justify-content: center;\n  padding: 20px;\n  display: flex;\n  margin-bottom: 10px;\n"]))),W=I.a.button(d||(d=Object(C.a)(["\n  background-color: #1f0454;\n  color: #fff;\n  border: none;\n  display: inline-block;\n  padding: 0.875em 1em;\n  font-weight: 400;\n  font-size: 1em;\n  border-radius: 4px;\n  line-height: 1;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),X=I.a.input(s||(s=Object(C.a)(["\n  margin-left: 20px;\n  opacity: 0.7;\n  @media (max-width: 768px) {\n    width: 50%;\n    margin-left: 10px;\n  }\n"]))),Z={Expression:"2d6+3",Dice:[1,1],Total:6,Time:new Date},$=I.a.div(x||(x=Object(C.a)(["\n  height: auto;\n  margin: auto;\n  margin-bottom: 50px;\n  text-align: center;\n  width: 60%;\n  background-color: rgba(34, 34, 34, 0.349);\n  border-radius: 10px;\n  @media (max-width: 768px) {\n    width: 90%;\n  }\n"]))),_=I.a.div(l||(l=Object(C.a)(["\n  padding: 20px;\n  color: #d8d8d8;\n  font-size: 25px;\n  @media (max-width: 768px) {\n    font-size: 20px;\n  }\n"]))),nn=I.a.li(b||(b=Object(C.a)(["\n  padding: 2px;\n  margin-top: 2px;\n"]))),en=I.a.a(j||(j=Object(C.a)(["\n  color: #1f0454;\n  margin-bottom: 10px;\n  font-size: 18px;\n  text-decoration: none;\n"]))),tn=I.a.div(p||(p=Object(C.a)(["\n  color: #1f0454;\n  margin-bottom: 10px;\n  font-size: 25px;\n"]))),an=I.a.div(u||(u=Object(C.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-content: space-between;\n  align-items: flex-end;\n  @media (max-width: 768px) {\n    display: flex;\n    align-content: space-between;\n    align-items: center;\n    flex-direction: column;\n  }\n"]))),rn=I.a.div(O||(O=Object(C.a)(["\n  color: #be162c;\n  font-size: 22px;\n"]))),cn=function(){var n=Object(D.useState)(2),e=Object(A.a)(n,2),t=e[0],i=e[1],a=Object(D.useState)(6),r=Object(A.a)(a,2),c=r[0],o=r[1],d=Object(D.useState)(3),s=Object(A.a)(d,2),x=s[0],l=s[1],b=Object(D.useState)(6),j=Object(A.a)(b,2),p=j[0],u=j[1],O=Object(D.useState)([1,2]),h=Object(A.a)(O,2),f=h[0],g=h[1],m=Object(D.useState)(!1),v=Object(A.a)(m,2),w=v[0],k=v[1],y=Object(D.useState)("2d6+3"),S=Object(A.a)(y,2),N=S[0],E=S[1],T=Object(D.useState)([]),z=Object(A.a)(T,2),J=z[0],C=z[1],I=Object(D.useState)(!1),B=Object(A.a)(I,2),F=B[0],P=B[1];Object(D.useEffect)((function(){setTimeout((function(){k(!1)}),2e3)}),[w]),Object(D.useEffect)((function(){var n=K(),e=n?JSON.parse(n):void 0;e&&C(e)}),[]),Object(D.useEffect)((function(){var n,e=Z;if(e.Expression=N,e.Dice=f,e.Total=Number(p),J.length<1){var t=K(),i=t?JSON.parse(t):void 0;if(i)i.unshift(e),C(i);else{var a=J.slice();a.unshift(e),C(a)}}else{var r=JSON.parse(JSON.stringify(J));r.unshift(e),C(r)}J.length>0&&(n=JSON.stringify(J),localStorage.setItem(G,n))}),[p]);var H=function(){var n=Object(R.a)(L.a.mark((function n(e){var a,r,c,d,s;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(a=e.indexOf("d")>0?e.split("d")[0]:e.split("D")[0],r=e.indexOf("d")>0?e.split("d")[1].split("+")[0]:e.split("D")[1].split("+")[0],c=e.split("+")[1],E(e),i(Number(a)),o(Number(r)),l(Number(c)),d=[],s=0;s<Number(t);s++)d.push(1);g(d);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Y=function(){var n=Object(R.a)(L.a.mark((function n(){var e,t,i,a;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!F)for(H(N),e=f.slice(),t=0,i=0;i<f.length;i++)a=Math.round(Math.random()*(c-1)+1),e[i]=a,t+=a,i===f.length-1&&(g(e),u(t+Number(x)),k(!0));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(Q,{children:[Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsxs)(V,{children:[Object(M.jsx)("div",{children:"Expression: "}),Object(M.jsx)(X,{name:"expression",placeholder:"2d6+3",onChange:function(n){var e=n.target.value;E(e),e.indexOf("d")<0&&e.indexOf("D")<0||e.indexOf("+")<0||H(e)},onBlur:function(n){var e=n.target.value;e.indexOf("d")<0&&e.indexOf("D")<0||e.indexOf("+")<0?P(!0):(P(!1),H(e))}})]}),F?Object(M.jsx)(rn,{children:"Please input a valid expression!"}):null,Object(M.jsx)(U,{children:f.map((function(n,e){return Object(M.jsx)(q,{num:n,showAnimate:w,index:e})}))}),Object(M.jsx)(W,{onClick:Y,children:"Click to Roll Dice"}),Object(M.jsxs)(tn,{children:["Total: ",p]}),Object(M.jsx)("br",{})]}),Object(M.jsxs)($,{children:[Object(M.jsxs)(an,{children:[Object(M.jsx)("div",{style:{width:"120px"}}),Object(M.jsx)(_,{children:"Your results:"}),Object(M.jsx)(W,{onClick:function(){localStorage.removeItem(G),window.location.reload()},style:{width:"120px"},children:"Clear Logs"})]}),J.map((function(n,e){return Object(M.jsx)("div",{className:"List+".concat(e),children:0!==e?Object(M.jsx)(nn,{children:Object(M.jsxs)(en,{href:"/detail/".concat(e),children:["Expression:",n.Expression," Total: ",n.Total]})}):null})})),Object(M.jsx)("br",{}),Object(M.jsx)("br",{})]})]})},on=I.a.div(h||(h=Object(C.a)(["\n  height: auto;\n  margin:auto;\n  text-align: center;\n  width: 100%;\n  background-color:#edf6ff;\n"]))),dn=I.a.div(f||(f=Object(C.a)(["\n  padding:5px;\n  height: auto;\n  margin:auto;\n  text-align: center;\n  width: 80%;\n  background-image: -webkit-linear-gradient(-90deg, #5e85fc 0%, #c46dfd 100%);\n  border-radius:10px;\n"]))),sn=I.a.h1(g||(g=Object(C.a)(["\n  margin-top:100px;\n  color: #e9e9e9;\n"]))),xn=I.a.h2(m||(m=Object(C.a)(["\n  color: #e9e9e9;\n"]))),ln=function(){return Object(M.jsx)(on,{children:Object(M.jsxs)(dn,{children:[Object(M.jsx)(sn,{children:"React Dice"}),Object(M.jsx)(xn,{children:"By Iris Liang"}),Object(M.jsx)(cn,{})]})})},bn=t(9),jn=I.a.div(v||(v=Object(C.a)(["\n  height: auto;\n  margin: auto;\n  margin-bottom: 50px;\n  text-align: center;\n  width: 60%;\n  background-color: #edf6ff6b;\n  border-radius: 10px;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),pn=I.a.div(w||(w=Object(C.a)(["\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-around;\n  justify-content: center;\n"]))),un=I.a.div(k||(k=Object(C.a)(["\n  padding: 10px;\n  height: auto;\n  margin: auto;\n  text-align: center;\n  width: 80%;\n  background-image: -webkit-linear-gradient(-90deg, #5e85fc 0%, #c46dfd 100%);\n  border-radius: 10px;\n  margin-top: 10%;\n"]))),On=I.a.button(y||(y=Object(C.a)(["\n  background-color: #1f0454;\n  color: #fff;\n  border: none;\n  display: inline-block;\n  padding: 0.875em 1em;\n  font-weight: 400;\n  font-size: 1em;\n  border-radius: 4px;\n  line-height: 1;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),hn=I.a.div(S||(S=Object(C.a)(["\n  color: #1f0454;\n  margin-bottom: 10px;\n  font-size: 22px;\n"]))),fn=I.a.h2(N||(N=Object(C.a)(["\n  color: #e9e9e9;\n"]))),gn=function(){var n,e=K(),t=e?JSON.parse(e):void 0,i=Object(J.g)().id,a=i?t[Number(i)-1]:void 0,r=new Date(null===a||void 0===a?void 0:a.Time).toLocaleString();return Object(M.jsxs)(un,{children:[Object(M.jsxs)(fn,{children:["Result of Roll ",i]}),Object(M.jsxs)(jn,{children:[Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)(pn,{children:null===a||void 0===a||null===(n=a.Dice)||void 0===n?void 0:n.map((function(n,e){return Object(M.jsx)(q,{num:n,showAnimate:!0,index:e})}))}),Object(M.jsxs)(hn,{children:["Expression: ",null===a||void 0===a?void 0:a.Expression]}),Object(M.jsxs)(hn,{children:["Total: ",null===a||void 0===a?void 0:a.Total]}),Object(M.jsxs)(hn,{children:["Time: ",r]}),Object(M.jsx)(bn.b,{to:"/",children:Object(M.jsx)(On,{children:"Back to Home Page"})}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{})]})]})},mn=function(){return Object(M.jsx)(E.a.Fragment,{children:Object(M.jsxs)(J.c,{children:[Object(M.jsx)(J.a,{path:"/",element:Object(M.jsx)(ln,{})}),Object(M.jsx)(J.a,{path:"/detail/:id",element:Object(M.jsx)(gn,{})})]})})};z.a.render(Object(M.jsx)(E.a.StrictMode,{children:Object(M.jsx)(bn.a,{children:Object(M.jsx)(mn,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.be6423b6.chunk.js.map