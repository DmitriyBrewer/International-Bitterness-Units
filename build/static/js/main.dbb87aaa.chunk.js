(this["webpackJsonpdark-hill-hp00000-redux-start-add-prewiew"]=this["webpackJsonpdark-hill-hp00000-redux-start-add-prewiew"]||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(31),c=n(21),r=n(34),o=n(49),i=Object(o.b)({name:"hops",initialState:[],reducers:{addTodo:function(e,t){if(e.length<=3)return e.push({id:t.payload}),e},deleteTodo:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},saveAction:function(e,t){return t.payload}}}),l=Object(o.b)({name:"users",initialState:{currentUser:{},isAuth:!1},reducers:{setUser:function(e,t){e.currentUser=t.payload,e.isAuth=!0},logout:function(e,t){localStorage.removeItem("token"),e.currentUser={},e.isAuth=!1}}}),s=l.actions.setUser,j=(l.actions.logout,l.reducer),b=Object(r.b)({hops:i.reducer,user:j}),u=Object(o.a)({reducer:b}),d=n(0),h=n.n(d),O=n(28),x=n(15),p=n(14),m=n(12),v=n(199),f=n(1),g=function(e){var t=e.disable,n=e.helperText,a=e.error,c=e.placeholder,r=e.onChange,o=e.value,i=e.id,l=e.onBlur,s=e.type;return Object(f.jsx)("div",{style:{margin:"10px",display:"inline-flex"},children:Object(f.jsx)(v.a,{disabled:t,error:a,helperText:n,label:c,variant:"outlined",size:"small",color:"secondary",type:s,onChange:r,value:o,id:i,onBlur:l})})},y=function(e){var t=e.getwort,n=h.a.useState({volume:"1000",destiny:"12",boil:"60"}),a=Object(m.a)(n,2),c=a[0],r=a[1],o=h.a.useState({volume:!1,destiny:!1,boil:!1}),i=Object(m.a)(o,2),l=i[0],s=i[1];return Object(d.useEffect)((function(){r(c),t(c.volume,c.destiny,c.boil)})),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{style:{textAlign:"center",fontFamily:"roboto"},children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 IBU"}),Object(f.jsx)(g,{placeholder:"\u041e\u0431\u044a\u0435\u043c \u0441\u0443\u0441\u043b\u0430, \u043b",id:"wort",value:null===c||void 0===c?void 0:c.volume,onChange:function(e){r(Object(p.a)(Object(p.a)({},c),{},{volume:e.target.value}))},onBlur:function(){!c.volume.trim()||parseInt(c.volume,10)>=100001?s(Object(p.a)(Object(p.a)({},l),{},{volume:!0})):s(Object(p.a)(Object(p.a)({},l),{},{volume:!1})),r(c),t(c.volume,c.destiny,c.boil)},type:"number",error:l.volume,helperText:l.volume?"\u274c \u041e\u0431\u044a\u0451\u043c \u043e\u0442 0 \u0434\u043e 100 000, \u043b":""}),Object(f.jsx)(g,{placeholder:"\u041f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c \u0441\u0443\u0441\u043b\u0430",id:"destiny",value:null===c||void 0===c?void 0:c.destiny,onChange:function(e){r(Object(p.a)(Object(p.a)({},c),{},{destiny:e.target.value}))},onBlur:function(){!c.destiny.trim()||parseInt(c.destiny,10)<=4||parseInt(c.destiny,10)>=36?s(Object(p.a)(Object(p.a)({},l),{},{destiny:!0})):s(Object(p.a)(Object(p.a)({},l),{},{destiny:!1})),r(c),t(c.volume,c.destiny,c.boil)},type:"number",error:l.destiny,helperText:l.destiny?"\u274c Plato \u043e\u0442 5 \u0434\u043e 35":""}),Object(f.jsx)(g,{placeholder:"\u0412\u0440\u0435\u043c\u044f \u043a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u044f",id:"boil",value:null===c||void 0===c?void 0:c.boil,onChange:function(e){r(Object(p.a)(Object(p.a)({},c),{},{boil:e.target.value}))},onBlur:function(){!c.boil.trim()||parseInt(c.boil,10)>=201?s(Object(p.a)(Object(p.a)({},l),{},{boil:!0})):s(Object(p.a)(Object(p.a)({},l),{},{boil:!1})),r(c),t(c.volume,c.destiny,c.boil)},type:"number",error:l.boil,helperText:l.boil?"\u274c \u041a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 0 \u0434\u043e 200 \u043c\u0438\u043d":""})]})},w=n(206),C=n(104),k=n.n(C),B=function(e){var t=e.onClick,n=e.children;return Object(f.jsx)("div",{children:Object(f.jsx)(w.a,{startIcon:Object(f.jsx)(k.a,{}),variant:"contained",style:{background:"black",color:"white"},onClick:t,children:n})})},I=function(e){var t,n=e.name,a=e.alpha,c=e.amount,r=e.time,o=e.wortvolume,i=e.wortdestiny,l=e.wortboil,s=e.getibu,j=e.id,b=parseInt(o,10),u=parseInt(i,10),h=parseInt(l,10),O=n,x=parseInt(c,10),p=parseInt(a,10),m=parseInt(r,10),v=x*p/(.1*b)*function(e,t){var n,a=[.055,.1,.137,.167,.212,.242,.276,.291,.295,.301];if(e<=1.0301)return t<=5.1&&(n=a[0]),t<=10.1&&t>=5.1&&(n=a[1]),t<=15.1&&t>=10.1&&(n=a[2]),t<=20.1&&t>=15.1&&(n=a[3]),t<=30.1&&t>=20.1&&(n=a[4]),t<=40.1&&t>=30.1&&(n=a[5]),t<=60.1&&t>=40.1&&(n=a[6]),t<=80.1&&t>=60.1&&(n=a[7]),t<=90.1&&t>=80.1&&(n=a[8]),t<=120.1&&t>=90.1&&(n=a[9]),t<=300.1&&t>=120.1&&(n=a[9]),n;var c=[.05,.091,.125,.153,.194,.221,.252,.266,.27,.275];if(e<=1.0401)return t<=5.1&&(n=c[0]),t<=10.1&&t>=5.1&&(n=c[1]),t<=15.1&&t>=10.1&&(n=c[2]),t<=20.1&&t>=15.1&&(n=c[3]),t<=30.1&&t>=20.1&&(n=c[4]),t<=40.1&&t>=30.1&&(n=c[5]),t<=60.1&&t>=40.1&&(n=c[6]),t<=80.1&&t>=60.1&&(n=c[7]),t<=90.1&&t>=80.1&&(n=c[8]),t<=120.1&&t>=90.1&&(n=c[9]),t<=300.1&&t>=120.1&&(n=c[9]),n;var r=[.046,.084,.114,.14,.177,.202,.231,.243,.247,.252];if(e<=1.0501)return t<=5.1&&(n=r[0]),t<=10.1&&t>=5.1&&(n=r[1]),t<=15.1&&t>=10.1&&(n=r[2]),t<=20.1&&t>=15.1&&(n=r[3]),t<=30.1&&t>=20.1&&(n=r[4]),t<=40.1&&t>=30.1&&(n=r[5]),t<=60.1&&t>=40.1&&(n=r[6]),t<=80.1&&t>=60.1&&(n=r[7]),t<=90.1&&t>=80.1&&(n=r[8]),t<=120.1&&t>=90.1&&(n=r[9]),t<=300.1&&t>=120.1&&(n=r[9]),n;var o=[.042,.076,.105,.128,.162,.185,.211,.222,.226,.23];if(e<=1.0601)return t<=5.1&&(n=o[0]),t<=10.1&&t>=5.1&&(n=o[1]),t<=15.1&&t>=10.1&&(n=o[2]),t<=20.1&&t>=15.1&&(n=o[3]),t<=30.1&&t>=20.1&&(n=o[4]),t<=40.1&&t>=30.1&&(n=o[5]),t<=60.1&&t>=40.1&&(n=o[6]),t<=80.1&&t>=60.1&&(n=o[7]),t<=90.1&&t>=80.1&&(n=o[8]),t<=120.1&&t>=90.1&&(n=o[9]),t<=300.1&&t>=120.1&&(n=o[9]),n;var i=[.038,.07,.096,.117,.148,.169,.193,.203,.206,.21];if(e<=1.0701||e>=1.0701)return t<=5.1&&(n=i[0]),t<=10.1&&t>=5.1&&(n=i[1]),t<=15.1&&t>=10.1&&(n=i[2]),t<=20.1&&t>=15.1&&(n=i[3]),t<=30.1&&t>=20.1&&(n=i[4]),t<=40.1&&t>=30.1&&(n=i[5]),t<=60.1&&t>=40.1&&(n=i[6]),t<=80.1&&t>=60.1&&(n=i[7]),t<=90.1&&t>=80.1&&(n=i[8]),t<=120.1&&t>=90.1&&(n=i[9]),t<=300.1&&t>=120.1&&(n=i[9]),n}((t=u)>=1.09?parseFloat((1+t/(258.6-t/258.2*227.1)).toFixed(2)):t,h-m),g=parseFloat(v.toFixed(1))||0;return Object(d.useEffect)((function(){s(j,g)}),[a,c,r,o,i,l]),Object(f.jsx)("div",{children:Object(f.jsxs)("h1",{style:{fontSize:"16px",color:"purple",margin:"10px",fontFamily:"roboto"},children:["ibu ",O,": ",g]})})},S=n(204),A=n(202),U=function(e){var t=e.value,n=e.onChange,a=e.color,c=h.a.useState({AMOUNT:"5000"}),r=Object(m.a)(c,2),o=r[0],i=r[1],l=h.a.useState(!1),s=Object(m.a)(l,2),j=s[0],b=s[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(S.a,{checked:j,onChange:function(e){b(e.target.checked)},color:"info"}),Object(f.jsx)(v.a,{style:{width:"150px"},disabled:!j,id:"filled-basic",label:"Max-IBU",variant:"outlined",size:"small",color:"info",placeholder:"max",value:null===o||void 0===o?void 0:o.AMOUNT,onChange:function(e){i(Object(p.a)(Object(p.a)({},o),{},{AMOUNT:e.target.value}))},type:"number"}),Object(f.jsx)("div",{children:Object(f.jsx)(A.a,{color:a,min:0,max:Number(null===o||void 0===o?void 0:o.AMOUNT),"aria-label":"Default",valueLabelDisplay:"auto",sx:{width:"50%",color:"success.purple"},defaultValue:0,value:t,onChange:n})})]})},T=function(e){var t=e.gethop,n=e.getibu,a=e.id,c=e.volume,r=e.destiny,o=e.boil,i=e.onClick,l=h.a.useState({name:"Sabro",alpha:"13",amount:"2500",time:"25"}),s=Object(m.a)(l,2),j=s[0],b=s[1],u=h.a.useState({alpha:!1,amount:!1,time:!1}),O=Object(m.a)(u,2),x=O[0],v=O[1],y=h.a.useState(!1),w=Object(m.a)(y,2),C=w[0],k=w[1],S=function(e){b(Object(p.a)(Object(p.a)({},j),{},{amount:e.target.value}))},A=function(){t(a,Object(p.a)({},j)),b(j)};return Object(d.useEffect)((function(){!o.trim()||parseInt(j.time,10)>=parseInt(o,10)+1?k(!0):k(!1)}),[o]),Object(f.jsxs)("div",{children:[Object(f.jsx)(g,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0445\u043c\u0435\u043b\u044f",value:null===j||void 0===j?void 0:j.name,onChange:function(e){b(Object(p.a)(Object(p.a)({},j),{},{name:e.target.value}))},onBlur:A,type:"string"}),Object(f.jsx)(g,{placeholder:"\u0410\u043b\u044c\u0444\u0430 \u043a\u0438\u0441\u043b\u043e\u0442\u0430",value:null===j||void 0===j?void 0:j.alpha,onChange:function(e){b(Object(p.a)(Object(p.a)({},j),{},{alpha:e.target.value}))},onBlur:function(){j.alpha.trim()&&0!==parseInt(j.alpha,10)?v(Object(p.a)(Object(p.a)({},x),{},{alpha:!1})):v(Object(p.a)(Object(p.a)({},x),{},{alpha:!0})),t(a,Object(p.a)({},j)),b(j)},type:"number",error:x.alpha,helperText:x.alpha?"\u274c \u0410\u043b\u044c\u0444\u0430 \u043a\u0438\u0441\u043b\u043e\u0442\u0430 \u043e\u0442 0 \u0434\u043e \u221e":""}),Object(f.jsx)(g,{placeholder:"\u041a\u043e\u043b-\u0432\u043e, \u0433",value:null===j||void 0===j?void 0:j.amount,onChange:S,onBlur:A,type:"number",error:x.amount,helperText:""}),Object(f.jsx)(g,{placeholder:"\u0412\u0440\u0435\u043c\u044f \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f, \u043c\u0438\u043d",value:null===j||void 0===j?void 0:j.time,onChange:function(e){b(Object(p.a)(Object(p.a)({},j),{},{time:e.target.value}))},onBlur:function(){!j.time.trim()||!o.trim()||parseInt(j.time,10)>=parseInt(o,10)+1?v(Object(p.a)(Object(p.a)({},x),{},{time:!0})):v(Object(p.a)(Object(p.a)({},x),{},{time:!1})),t(a,Object(p.a)({},j)),b(j)},type:"number",error:x.time,helperText:o?x.time?"\u274c \u043e\u0442 0 \u0434\u043e \u0412\u0440\u0435\u043c\u044f \u043a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u044f":"":x.time?"\u274c\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0440\u0435\u043c\u044f \u041a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u044f":"\u26a0\ufe0f\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u043a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u044f",disable:C}),Object(f.jsx)(B,{onClick:i,children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(f.jsx)(I,{name:j.name,alpha:j.alpha,amount:j.amount,time:j.time,wortvolume:c,wortdestiny:r,wortboil:o,getibu:n,id:a}),Object(f.jsx)(U,{value:null===j||void 0===j?void 0:j.amount,onChange:S,color:"secondary"})]})},_=function(e){var t=e.gethop,n=e.getibu,a=e.volume,r=e.destiny,o=e.boil,l=e.Hops,s=Object(c.b)();return Object(f.jsx)("div",{children:l.map((function(e){return Object(f.jsx)(T,{id:e.id,hop:e,onClick:function(){return s(i.actions.deleteTodo(e.id))},gethop:t,getibu:n,volume:a,destiny:r,boil:o},e.id)}))})},N=function(e){var t=e.onClick,n=e.children;return Object(f.jsx)("div",{children:Object(f.jsx)(w.a,{variant:"contained",style:{background:"black",color:"white"},onClick:t,children:n})})},F=n(215),M=n(197),D=n(214),H=n(200),z=function(){var e=Object(d.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(d.useState)(""),o=Object(m.a)(r,2),l=o[0],s=o[1],j=Object(d.useState)(""),b=Object(m.a)(j,2),u=b[0],h=b[1],O=Object(d.useState)(!0),x=Object(m.a)(O,2),v=x[0],g=x[1],w=Object(c.b)(),C=Object(c.c)((function(e){return e.hops}));Object(c.c)((function(e){return e.user.isAuth}));setTimeout((function(){g(!1)}),500);var k=C.reduce((function(e,t){return e+t.allibu}),0),B=parseFloat(k.toFixed(2));return Object(f.jsxs)("div",{children:[Object(f.jsx)(M.a,{}),Object(f.jsx)("div",{style:{textAlign:"center"},children:v?Object(f.jsx)(D.a,{color:"inherit",style:{margin:"30px"}}):Object(f.jsxs)(F.a,{maxWidth:"sm",children:[Object(f.jsx)(H.a,{variant:"filled",severity:"info",style:{marginTop:"20px"},children:"\u0414\u043b\u044f \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430, \u043f\u043e\u043b\u044f \u0431\u044b\u043b\u0438 \u0437\u0430\u0431\u043b\u0430\u0433\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0445\u043c\u0435\u043b\u044c"}),Object(f.jsx)(y,{getwort:function(e,t,n){a(e),s(t),h(n)}}),Object(f.jsx)("div",{style:{margin:"10px",display:"flex",justifyContent:"center",flexWrap:"wrap"},children:Object(f.jsx)(N,{onClick:function(e){e.preventDefault(),w(i.actions.addTodo(Date.now()))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0445\u043c\u0435\u043b\u044c"})}),Object(f.jsx)(_,{Hops:C,gethop:function(e,t){var n=C.map((function(n){return e===n.id?Object(p.a)(Object(p.a)({},n),{},{name:t.name,alpha:t.alpha,amount:t.amount,time:t.time}):n}));w(i.actions.saveAction(n))},volume:n,destiny:l,boil:u,getibu:function(e,t){var n=C.map((function(n){return e===n.id?Object(p.a)(Object(p.a)({},n),{},{allibu:t}):n}));w(i.actions.saveAction(n))}}),Object(f.jsxs)("h1",{style:{fontSize:"20px",color:"purple",margin:"10px",fontFamily:"roboto"},children:["\u041e\u0431\u0449\u0435\u0435 ibu: ",B||0]})]})})]})},G=n(44),E=n.n(G),V=n(69),W=n(70),L=n.n(W),P=function(){var e=Object(V.a)(E.a.mark((function e(t,n){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post("http://localhost:5000/api/auth/registration",{email:t,password:n});case 3:a=e.sent,alert(a.data.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=h.a.useState({email:"",password:""}),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(c.c)((function(e){return e.user.isAuth})),o=Object(c.b)(),i=function(){a(n),console.log(n)};return Object(f.jsxs)("div",{children:[!r&&Object(f.jsxs)("form",{onSubmit:i,style:{textAlign:"center"},children:[Object(f.jsx)("h1",{style:{fontFamily:"roboto"},children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),Object(f.jsx)(g,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",value:null===n||void 0===n?void 0:n.email,onChange:function(e){a(Object(p.a)(Object(p.a)({},n),{},{email:e.target.value}))},onBlur:i,type:"string"}),Object(f.jsx)(g,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:null===n||void 0===n?void 0:n.password,onChange:function(e){a(Object(p.a)(Object(p.a)({},n),{},{password:e.target.value}))},onBlur:i,type:"number"}),Object(f.jsx)(B,{onClick:function(){return o((e=null===n||void 0===n?void 0:n.email,t=null===n||void 0===n?void 0:n.password,function(){var n=Object(V.a)(E.a.mark((function n(a){var c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,L.a.post("http://localhost:5000/api/auth/login",{email:e,password:t});case 3:c=n.sent,a(s(c.data.user)),localStorage.setItem("token",c.data.token),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()));var e,t},children:"\u0432\u043e\u0439\u0442\u0438"})]}),r&&Object(f.jsx)("div",{style:{textAlign:"center"},children:Object(f.jsx)(O.b,{to:"/calc",children:Object(f.jsx)(B,{onClick:function(){},children:"Get Stated"})})})]})},q=function(){var e=h.a.useState({email:"",password:""}),t=Object(m.a)(e,2),n=t[0],a=t[1],c=function(){a(n),console.log(n)};return Object(f.jsxs)("form",{onSubmit:c,style:{textAlign:"center"},children:[Object(f.jsx)("h1",{style:{fontFamily:"roboto"},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(f.jsx)(g,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",value:null===n||void 0===n?void 0:n.email,onChange:function(e){a(Object(p.a)(Object(p.a)({},n),{},{email:e.target.value}))},onBlur:c,type:"string"}),Object(f.jsx)(g,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:null===n||void 0===n?void 0:n.password,onChange:function(e){a(Object(p.a)(Object(p.a)({},n),{},{password:e.target.value}))},onBlur:c,type:"number"}),Object(f.jsx)(B,{onClick:function(){return P(null===n||void 0===n?void 0:n.email,null===n||void 0===n?void 0:n.password)},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})},K=(n(150),function(){return Object(f.jsx)("div",{style:{textAlign:"center",background:"none"},children:Object(f.jsx)(F.a,{maxWidth:"sm",style:{background:"none"},children:Object(f.jsx)(O.b,{to:"/calc",style:{textDecoration:"none"},children:Object(f.jsx)("div",{className:"background",children:Object(f.jsx)("div",{className:"text_content",children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 IBU"})})})})})}),Q=n(208),R=n(209),X=n(213),Y=n(203),Z=n(216),$=n(217),ee=n(207),te=n(58),ne=n.n(te),ae=function(e){var t=e.textContent;return Object(f.jsx)("div",{children:Object(f.jsxs)(Y.a,{children:[Object(f.jsx)(Z.a,{children:Object(f.jsx)(ne.a,{style:{width:"10px"}})}),Object(f.jsx)($.a,{primary:t})]})})},ce=function(){return Object(f.jsxs)(h.a.Fragment,{children:[Object(f.jsx)(M.a,{}),Object(f.jsx)(F.a,{maxWidth:"md",children:Object(f.jsxs)(R.a,{sx:{bgcolor:"none"},children:[Object(f.jsx)("div",{style:{marginTop:"25px"},children:Object(f.jsx)(Q.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u041e\u0431\u0449\u0435\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})}),Object(f.jsx)(Q.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 IBU \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0446\u0438\u0438 \u0440\u0430\u0441\u0447\u0451\u0442\u043d\u043e\u0439 \u0433\u043e\u0440\u0435\u0447\u0438 \u043f\u0438\u0432\u0430.\u0412 \u043e\u0441\u043d\u043e\u0432\u0443 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0446\u0438\u0438 \u0437\u0430\u043b\u043e\u0436\u0435\u043d\u0430 \u0444\u043e\u0440\u043c\u0443\u043b\u0430 \u0422\u0438\u043d\u0441\u0435\u0442\u0430."}),Object(f.jsx)(Q.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u041a\u043e\u043c\u0443 \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(f.jsxs)(Q.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:["\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u042f\u043d\u0435\u043d\u043a\u043e, \u044f \u044f\u0432\u043b\u044f\u044e\u0441\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u044e\u0449\u0438\u043c \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u043e\u043c, \u0447\u0430\u0441\u0442\u043e \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u044e\u0441\u044c \u0441 \u0440\u0430\u0441\u0447\u0451\u0442\u043e\u043c IBU, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0438 \u043f\u0440\u0438\u043d\u044f\u043b \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f UI \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u044b\u0439 \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0435\u043d\u0438\u044f \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440. \u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u043a\u0430\u043a \u0438 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0443 \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0435\u043d\u0438\u044f."," "]}),Object(f.jsx)("img",{src:"https://avatars.githubusercontent.com/u/91193945?v=4",alt:"\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",width:"30%"}),Object(f.jsx)(Q.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430, \u0434\u0430\u0442\u044c \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u043e \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c IBU, \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043c\u0435\u043d\u044f\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0435 \u0445\u043c\u0435\u043b\u044f \u043d\u0430 \u0432\u0430\u0440\u043a\u0435."}),Object(f.jsx)(Q.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u041e\u0431\u0437\u043e\u0440 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439"}),Object(f.jsxs)(ee.a,{item:!0,xs:12,md:6,children:[Object(f.jsxs)(X.a,{children:[Object(f.jsx)(ae,{textContent:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0440\u0430\u0441\u0447\u0451\u0442\u043d\u043e\u0439 \u0433\u043e\u0440\u0435\u0447\u0438 \u043f\u0438\u0432\u0430"}),Object(f.jsx)(ae,{textContent:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u043e 5 \u0445\u043c\u0435\u043b\u0435\u0439 \u043d\u0430 \u0432\u0430\u0440\u043a\u0443, \u043a\u0430\u0436\u0434\u044b\u0439 \u0445\u043c\u0435\u043b\u044c \u0438\u043c\u0435\u0435\u0442 \u0441\u0432\u043e\u0451 IBU"}),Object(f.jsx)(ae,{textContent:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c IBU. \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 Slider \u043c\u043e\u0436\u043d\u043e \u043b\u0435\u0433\u043a\u043e \u0432  \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043b-\u0432\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u0445\u043c\u0435\u043b\u044f, \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043c\u0435\u043d\u044f\u044f \u0433\u043e\u0440\u0435\u0447\u044c \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0434\u0430\u0441\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0445\u043c\u0435\u043b\u044c \u0438 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043a\u0430\u043a \u0445\u043c\u0435\u043b\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u043e\u0431\u0449\u0435\u0435 IBU"}),Object(f.jsx)(ae,{textContent:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0445\u043c\u0435\u043b\u044c"}),Object(f.jsx)(ae,{textContent:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 Slider"})]}),Object(f.jsx)(Q.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"}),Object(f.jsx)(Q.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"\u0421\u043e\u0441\u0442\u0430\u0432 \u043f\u043e\u043b\u0435\u0439"}),Object(f.jsx)("div",{style:{background:"#d7d7d7",width:"70%"},children:Object(f.jsx)(Q.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u26a0\ufe0f -\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430"})}),Object(f.jsx)("div",{style:{background:"#d7d7d7",width:"70%"},children:Object(f.jsx)(Q.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u2705 -\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430"})}),Object(f.jsx)(Q.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0440\u0430\u0437\u0434\u0435\u043b\u0451\u043d \u043d\u0430 \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438:"}),Object(f.jsx)(Q.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"1. \u0421\u0443\u0441\u043b\u043e:"}),Object(f.jsxs)(X.a,{children:[Object(f.jsx)(ae,{textContent:"\u041e\u0431\u044a\u0451\u043c \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u043e\u0433\u043e \u0441\u0443\u0441\u043b\u0430, \u043b \u26a0\ufe0f"}),Object(f.jsx)(ae,{textContent:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u0430\u044f/\u0440\u0430\u0447\u0451\u0442\u043d\u0430\u044f \u043f\u043b\u043e\u0442\u0441\u043d\u043e\u0441\u0442\u044c \u0441\u0443\u0441\u043b\u0430, Plato \u26a0\ufe0f"}),Object(f.jsx)(ae,{textContent:"\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u044f \u0441\u0443\u0441\u043b\u0430, \u043c\u0438\u043d \u26a0\ufe0f"})]}),Object(f.jsx)(Q.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"2. \u0425\u043c\u0435\u043b\u044c:"}),Object(f.jsxs)(X.a,{children:[Object(f.jsx)(ae,{textContent:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0445\u043c\u0435\u043b\u044f \u2705"}),Object(f.jsx)(ae,{textContent:"\u0410\u043b\u044c\u0444\u0430 \u043a\u0438\u0441\u043b\u043e\u0442\u0430(\u0441\u043c. \u043d\u0430 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 \u0438\u043b\u0438 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0445\u043c\u0435\u043b\u044f) \u26a0\ufe0f"}),Object(f.jsx)(ae,{textContent:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0445\u043c\u0435\u043b\u044f \u043d\u0430 \u0432\u0430\u0440\u043a\u0443, \u0433 \u26a0\ufe0f"}),Object(f.jsx)(ae,{textContent:"\u0412\u0440\u0435\u043c\u044f \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0445\u043c\u0435\u043b\u044f, \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u044f, \u043c\u0438\u043d \u26a0\ufe0f"})]}),Object(f.jsxs)(Q.a,{variant:"h5",component:"h2",gutterBottom:!0,children:["\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f:"," "]}),Object(f.jsxs)(X.a,{children:[Object(f.jsxs)(Y.a,{children:[Object(f.jsx)(Z.a,{children:Object(f.jsx)(ne.a,{style:{width:"10px"}})}),Object(f.jsx)($.a,{primary:"\u041f\u043e\u043b\u0435 Max-IBU \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u043a\u043b/\u0432\u044b\u043a\u043b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043b-\u0432\u043e \u0445\u043c\u0435\u043b\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u044f Slider \u2705"}),Object(f.jsx)(S.a,{})]}),Object(f.jsxs)(Y.a,{children:[Object(f.jsx)(Z.a,{children:Object(f.jsx)(ne.a,{style:{width:"10px"}})}),Object(f.jsx)($.a,{primary:"\u041f\u043e\u043b\u0435 Slider \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0445\u043c\u0435\u043b\u044f \u043d\u0430 \u0432\u0430\u0440\u043a\u0443, \u0433 \u2705"}),Object(f.jsx)(A.a,{})]})]}),Object(f.jsx)(Q.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(f.jsx)(Q.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0438 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0435 \u0434\u0430\u0442\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"}),Object(f.jsxs)(Q.a,{variant:"h5",component:"h2",gutterBottom:!0,children:["\u0424\u0435\u0432\u0440\u0430\u043b\u044c 2022:"," "]}),Object(f.jsxs)(X.a,{children:[Object(f.jsx)(ae,{textContent:"\u0412\u044b\u0431\u043e\u0440 \u0432\u0432\u043e\u0434\u0438\u043c\u043e\u0439 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 SG \u0438\u043b\u0438 Plato"}),Object(f.jsx)(ae,{textContent:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0435\u0439"}),Object(f.jsx)(ae,{textContent:"\u0420\u0430\u0441\u0447\u0451\u0442 \u0433\u043e\u0440\u0435\u0447\u0438 \u0434\u043b\u044f Virpul/Hopstand"}),Object(f.jsx)(ae,{textContent:"\u0420\u0430\u0441\u0447\u0451\u0442 \u0433\u043e\u0440\u0435\u0447\u0438 \u0434\u043b\u044f DryHop"})]}),Object(f.jsx)(Q.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"\u0418\u044e\u043b\u044c 2022:"}),Object(f.jsx)(X.a,{children:Object(f.jsx)(ae,{textContent:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0430, \u0433\u0434\u0435 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0446\u0438\u0438"})})]})]})})]})};var re=function(){return Object(f.jsxs)(x.c,{children:[Object(f.jsx)(x.a,{path:"/calc",element:Object(f.jsx)(z,{})}),Object(f.jsx)(x.a,{path:"/login",element:Object(f.jsx)(J,{})}),Object(f.jsx)(x.a,{path:"/main",element:Object(f.jsx)(K,{})}),Object(f.jsx)(x.a,{path:"/about",element:Object(f.jsx)(ce,{})}),Object(f.jsx)(x.a,{path:"/signup",element:Object(f.jsx)(q,{})}),Object(f.jsx)(x.a,{path:"/*",element:Object(f.jsx)(z,{})})]})},oe=n(218),ie=function(){return Object(f.jsx)(oe.a,{style:{background:"black"}})},le=n(210),se=n(211),je=n(51),be=n.n(je),ue=function(){return Object(f.jsx)("div",{className:be.a.logo,children:Object(f.jsxs)("svg",{width:"22",height:"27",viewBox:"0 0 37 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(f.jsx)("path",{d:"M23.8352 31.9565L24.0159 2.13043H2.10876V31.9565",stroke:"white","stroke-width":"3","stroke-miterlimit":"10"}),Object(f.jsx)("path",{d:"M34.6924 10.0435L34.8792 39.8695H12.972V10.0435",stroke:"white","stroke-width":"3","stroke-miterlimit":"10"})]})})};function de(){Object(c.c)((function(e){return e.user.isAuth})),Object(c.b)();return Object(f.jsx)(R.a,{sx:{flexGrow:1},children:Object(f.jsx)(le.a,{position:"static",children:Object(f.jsxs)(se.a,{style:{background:"black"},children:[Object(f.jsx)(Q.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(f.jsx)(O.b,{to:"/calc",children:Object(f.jsx)(ue,{})})}),Object(f.jsx)(Q.a,{variant:"h6",component:"div",sx:{flexGrow:30},children:Object(f.jsx)(O.b,{to:"/calc",className:be.a.header_text_content,children:"\u041f\u0438\u0432\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430"})}),Object(f.jsx)(O.b,{to:"/calc",className:be.a.header_text_content,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(f.jsx)(O.b,{to:"/about",className:be.a.header_text_content,children:"About"})]})})})}var he=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(de,{}),Object(f.jsx)(re,{}),Object(f.jsx)(ie,{})]})})},Oe=document.getElementById("root");Object(a.render)(Object(f.jsx)(c.a,{store:u,children:Object(f.jsx)(he,{})}),Oe)},51:function(e,t,n){e.exports={header_text_content:"Navbar_header_text_content__2KDf4",logo:"Navbar_logo__zNlyq"}}},[[151,1,2]]]);
//# sourceMappingURL=main.dbb87aaa.chunk.js.map