(this["webpackJsonpdark-hill-hp00000-redux-start-add-prewiew"]=this["webpackJsonpdark-hill-hp00000-redux-start-add-prewiew"]||[]).push([[0],{150:function(t,e,n){},151:function(t,e,n){"use strict";n.r(e);var c=n(30),a=n(20),o=n(33),r=n(48),i=Object(r.b)({name:"hops",initialState:[],reducers:{addTodo:function(t,e){if(t.length<=3)return t.push({id:e.payload}),t},deleteTodo:function(t,e){return t.filter((function(t){return t.id!==e.payload}))},saveAction:function(t,e){return e.payload}}}),l=Object(r.b)({name:"users",initialState:{currentUser:{},isAuth:!1},reducers:{setUser:function(t,e){t.currentUser=e.payload,t.isAuth=!0},logout:function(t,e){localStorage.removeItem("token"),t.currentUser={},t.isAuth=!1}}}),s=l.actions.setUser,j=(l.actions.logout,l.reducer),u=Object(o.b)({hops:i.reducer,user:j}),b=Object(r.a)({reducer:u}),d=n(0),h=n.n(d),x=n(27),O=n(14),v=n(15),p=n(12),m=n(197),g=n(1),f=function(t){var e=t.placeholder,n=t.onChange,c=t.value,a=t.id,o=t.onBlur,r=t.type;return Object(g.jsx)("div",{style:{margin:"10px",display:"inline-flex"},children:Object(g.jsx)(m.a,{label:e,variant:"outlined",size:"small",color:"secondary",type:r,onChange:n,value:c,id:a,onBlur:o})})},y=function(t){var e=t.getwort,n=h.a.useState({volume:"1000",destiny:"12",boil:"60"}),c=Object(p.a)(n,2),a=c[0],o=c[1],r=function(){o(a),e(a.volume,a.destiny,a.boil)};return Object(d.useEffect)((function(){o(a),e(a.volume,a.destiny,a.boil)})),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{style:{textAlign:"center",fontFamily:"roboto"},children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 IBU"}),Object(g.jsx)(f,{placeholder:"\u041e\u0431\u044a\u0435\u043c \u0441\u0443\u0441\u043b\u0430, \u043b",id:"wort",value:null===a||void 0===a?void 0:a.volume,onChange:function(t){o(Object(v.a)(Object(v.a)({},a),{},{volume:t.target.value}))},onBlur:r,type:"number"}),Object(g.jsx)(f,{placeholder:"\u041f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c \u0441\u0443\u0441\u043b\u0430",id:"destiny",value:null===a||void 0===a?void 0:a.destiny,onChange:function(t){o(Object(v.a)(Object(v.a)({},a),{},{destiny:t.target.value}))},onBlur:r,type:"number"}),Object(g.jsx)(f,{placeholder:"\u0412\u0440\u0435\u043c\u044f \u043a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u044f",id:"boil",value:null===a||void 0===a?void 0:a.boil,onChange:function(t){o(Object(v.a)(Object(v.a)({},a),{},{boil:t.target.value}))},onBlur:r,type:"number"})]})},w=n(203),C=n(104),k=n.n(C),B=function(t){var e=t.onClick,n=t.children;return Object(g.jsx)("div",{children:Object(g.jsx)(w.a,{startIcon:Object(g.jsx)(k.a,{}),variant:"contained",style:{background:"black",color:"white"},onClick:e,children:n})})},S=function(t){var e,n=t.name,c=t.alpha,a=t.amount,o=t.time,r=t.wortvolume,i=t.wortdestiny,l=t.wortboil,s=t.getibu,j=t.id,u=parseInt(r,10),b=parseInt(i,10),h=parseInt(l,10),x=n,O=parseInt(a,10),v=parseInt(c,10),p=parseInt(o,10),m=O*v/(.1*u)*function(t,e){var n,c=[.055,.1,.137,.167,.212,.242,.276,.291,.295,.301];if(t<=1.0301)return e<=5.1&&(n=c[0]),e<=10.1&&e>=5.1&&(n=c[1]),e<=15.1&&e>=10.1&&(n=c[2]),e<=20.1&&e>=15.1&&(n=c[3]),e<=30.1&&e>=20.1&&(n=c[4]),e<=40.1&&e>=30.1&&(n=c[5]),e<=60.1&&e>=40.1&&(n=c[6]),e<=80.1&&e>=60.1&&(n=c[7]),e<=90.1&&e>=80.1&&(n=c[8]),e<=120.1&&e>=90.1&&(n=c[9]),e<=300.1&&e>=120.1&&(n=c[9]),n;var a=[.05,.091,.125,.153,.194,.221,.252,.266,.27,.275];if(t<=1.0401)return e<=5.1&&(n=a[0]),e<=10.1&&e>=5.1&&(n=a[1]),e<=15.1&&e>=10.1&&(n=a[2]),e<=20.1&&e>=15.1&&(n=a[3]),e<=30.1&&e>=20.1&&(n=a[4]),e<=40.1&&e>=30.1&&(n=a[5]),e<=60.1&&e>=40.1&&(n=a[6]),e<=80.1&&e>=60.1&&(n=a[7]),e<=90.1&&e>=80.1&&(n=a[8]),e<=120.1&&e>=90.1&&(n=a[9]),e<=300.1&&e>=120.1&&(n=a[9]),n;var o=[.046,.084,.114,.14,.177,.202,.231,.243,.247,.252];if(t<=1.0501)return e<=5.1&&(n=o[0]),e<=10.1&&e>=5.1&&(n=o[1]),e<=15.1&&e>=10.1&&(n=o[2]),e<=20.1&&e>=15.1&&(n=o[3]),e<=30.1&&e>=20.1&&(n=o[4]),e<=40.1&&e>=30.1&&(n=o[5]),e<=60.1&&e>=40.1&&(n=o[6]),e<=80.1&&e>=60.1&&(n=o[7]),e<=90.1&&e>=80.1&&(n=o[8]),e<=120.1&&e>=90.1&&(n=o[9]),e<=300.1&&e>=120.1&&(n=o[9]),n;var r=[.042,.076,.105,.128,.162,.185,.211,.222,.226,.23];if(t<=1.0601)return e<=5.1&&(n=r[0]),e<=10.1&&e>=5.1&&(n=r[1]),e<=15.1&&e>=10.1&&(n=r[2]),e<=20.1&&e>=15.1&&(n=r[3]),e<=30.1&&e>=20.1&&(n=r[4]),e<=40.1&&e>=30.1&&(n=r[5]),e<=60.1&&e>=40.1&&(n=r[6]),e<=80.1&&e>=60.1&&(n=r[7]),e<=90.1&&e>=80.1&&(n=r[8]),e<=120.1&&e>=90.1&&(n=r[9]),e<=300.1&&e>=120.1&&(n=r[9]),n;var i=[.038,.07,.096,.117,.148,.169,.193,.203,.206,.21];if(t<=1.0701||t>=1.0701)return e<=5.1&&(n=i[0]),e<=10.1&&e>=5.1&&(n=i[1]),e<=15.1&&e>=10.1&&(n=i[2]),e<=20.1&&e>=15.1&&(n=i[3]),e<=30.1&&e>=20.1&&(n=i[4]),e<=40.1&&e>=30.1&&(n=i[5]),e<=60.1&&e>=40.1&&(n=i[6]),e<=80.1&&e>=60.1&&(n=i[7]),e<=90.1&&e>=80.1&&(n=i[8]),e<=120.1&&e>=90.1&&(n=i[9]),e<=300.1&&e>=120.1&&(n=i[9]),n}((e=b)>=1.09?parseFloat((1+e/(258.6-e/258.2*227.1)).toFixed(2)):e,h-p),f=parseFloat(m.toFixed(1))||0;return Object(d.useEffect)((function(){s(j,f)}),[c,a,o,r,i,l]),Object(g.jsx)("div",{children:Object(g.jsxs)("h1",{style:{fontSize:"16px",color:"purple",margin:"10px",fontFamily:"roboto"},children:["ibu ",x,": ",f]})})},I=n(201),A=n(199),U=function(t){var e=t.value,n=t.onChange,c=t.color,a=h.a.useState({AMOUNT:"5000"}),o=Object(p.a)(a,2),r=o[0],i=o[1],l=h.a.useState(!1),s=Object(p.a)(l,2),j=s[0],u=s[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)(I.a,{checked:j,onChange:function(t){u(t.target.checked)},color:"info"}),Object(g.jsx)(m.a,{style:{width:"150px"},disabled:!j,id:"filled-basic",label:"Max-IBU",variant:"outlined",size:"small",color:"info",placeholder:"max",value:null===r||void 0===r?void 0:r.AMOUNT,onChange:function(t){i(Object(v.a)(Object(v.a)({},r),{},{AMOUNT:t.target.value}))},type:"number"}),Object(g.jsx)("div",{children:Object(g.jsx)(A.a,{color:c,min:0,max:Number(null===r||void 0===r?void 0:r.AMOUNT),"aria-label":"Default",valueLabelDisplay:"auto",sx:{width:"50%",color:"success.purple"},defaultValue:0,value:e,onChange:n})})]})},_=function(t){var e=t.gethop,n=t.getibu,c=t.id,a=t.volume,o=t.destiny,r=t.boil,i=t.onClick,l=h.a.useState({name:"Cascade",alpha:"7.1",amount:"2500",time:"10"}),s=Object(p.a)(l,2),j=s[0],u=s[1],b=function(t){u(Object(v.a)(Object(v.a)({},j),{},{amount:t.target.value}))},d=function(){e(c,Object(v.a)({},j)),u(j)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(f,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0445\u043c\u0435\u043b\u044f",value:null===j||void 0===j?void 0:j.name,onChange:function(t){u(Object(v.a)(Object(v.a)({},j),{},{name:t.target.value}))},onBlur:d,type:"string"}),Object(g.jsx)(f,{placeholder:"\u0410\u043b\u044c\u0444\u0430 \u043a\u0438\u0441\u043b\u043e\u0442\u0430",value:null===j||void 0===j?void 0:j.alpha,onChange:function(t){u(Object(v.a)(Object(v.a)({},j),{},{alpha:t.target.value}))},onBlur:d,type:"number"}),Object(g.jsx)(f,{placeholder:"\u041a\u043e\u043b-\u0432\u043e, \u0433",value:null===j||void 0===j?void 0:j.amount,onChange:b,onBlur:d,type:"number"}),Object(g.jsx)(f,{placeholder:"\u0412\u0440\u0435\u043c\u044f \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f, \u043c\u0438\u043d",value:null===j||void 0===j?void 0:j.time,onChange:function(t){u(Object(v.a)(Object(v.a)({},j),{},{time:t.target.value}))},onBlur:d,type:"number"}),Object(g.jsx)(B,{onClick:i,children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(g.jsx)(S,{name:j.name,alpha:j.alpha,amount:j.amount,time:j.time,wortvolume:a,wortdestiny:o,wortboil:r,getibu:n,id:c}),Object(g.jsx)(U,{value:null===j||void 0===j?void 0:j.amount,onChange:b,color:"secondary"})]})},N=function(t){var e=t.gethop,n=t.getibu,c=t.volume,o=t.destiny,r=t.boil,l=t.Hops,s=Object(a.b)();return Object(g.jsx)("div",{children:l.map((function(t){return Object(g.jsx)(_,{id:t.id,hop:t,onClick:function(){return s(i.actions.deleteTodo(t.id))},gethop:e,getibu:n,volume:c,destiny:o,boil:r},t.id)}))})},F=function(t){var e=t.onClick,n=t.children;return Object(g.jsx)("div",{children:Object(g.jsx)(w.a,{variant:"contained",style:{background:"black",color:"white"},onClick:e,children:n})})},T=n(212),M=n(195),D=n(211),H=function(){var t=Object(d.useState)(""),e=Object(p.a)(t,2),n=e[0],c=e[1],o=Object(d.useState)(""),r=Object(p.a)(o,2),l=r[0],s=r[1],j=Object(d.useState)(""),u=Object(p.a)(j,2),b=u[0],h=u[1],x=Object(d.useState)(!0),O=Object(p.a)(x,2),m=O[0],f=O[1],w=Object(a.b)(),C=Object(a.c)((function(t){return t.hops}));Object(a.c)((function(t){return t.user.isAuth}));setTimeout((function(){f(!1)}),500);var k=C.reduce((function(t,e){return t+e.allibu}),0),B=parseFloat(k.toFixed(2));return Object(g.jsxs)("div",{children:[Object(g.jsx)(M.a,{}),Object(g.jsx)("div",{style:{textAlign:"center"},children:m?Object(g.jsx)(D.a,{color:"inherit",style:{margin:"30px"}}):Object(g.jsxs)(T.a,{maxWidth:"sm",children:[Object(g.jsx)(y,{getwort:function(t,e,n){c(t),s(e),h(n)}}),Object(g.jsx)("div",{style:{margin:"10px",display:"flex",justifyContent:"center",flexWrap:"wrap"},children:Object(g.jsx)(F,{onClick:function(t){t.preventDefault(),w(i.actions.addTodo(Date.now()))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0445\u043c\u0435\u043b\u044c"})}),Object(g.jsx)(N,{Hops:C,gethop:function(t,e){var n=C.map((function(n){return t===n.id?Object(v.a)(Object(v.a)({},n),{},{name:e.name,alpha:e.alpha,amount:e.amount,time:e.time}):n}));w(i.actions.saveAction(n))},volume:n,destiny:l,boil:b,getibu:function(t,e){var n=C.map((function(n){return t===n.id?Object(v.a)(Object(v.a)({},n),{},{allibu:e}):n}));w(i.actions.saveAction(n))}}),Object(g.jsxs)("h1",{style:{fontSize:"20px",color:"purple",margin:"10px",fontFamily:"roboto"},children:["\u041e\u0431\u0449\u0435\u0435 ibu: ",B||0]})]})})]})},z=n(43),G=n.n(z),V=n(69),W=n(70),E=n.n(W),L=function(){var t=Object(V.a)(G.a.mark((function t(e,n){var c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("http://localhost:5000/api/auth/registration",{email:e,password:n});case 3:c=t.sent,alert(c.data.message),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.response.data.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),J=function(){var t=h.a.useState({email:"",password:""}),e=Object(p.a)(t,2),n=e[0],c=e[1],o=Object(a.c)((function(t){return t.user.isAuth})),r=Object(a.b)(),i=function(){c(n),console.log(n)};return Object(g.jsxs)("div",{children:[!o&&Object(g.jsxs)("form",{onSubmit:i,style:{textAlign:"center"},children:[Object(g.jsx)("h1",{style:{fontFamily:"roboto"},children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),Object(g.jsx)(f,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",value:null===n||void 0===n?void 0:n.email,onChange:function(t){c(Object(v.a)(Object(v.a)({},n),{},{email:t.target.value}))},onBlur:i,type:"string"}),Object(g.jsx)(f,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:null===n||void 0===n?void 0:n.password,onChange:function(t){c(Object(v.a)(Object(v.a)({},n),{},{password:t.target.value}))},onBlur:i,type:"number"}),Object(g.jsx)(B,{onClick:function(){return r((t=null===n||void 0===n?void 0:n.email,e=null===n||void 0===n?void 0:n.password,function(){var n=Object(V.a)(G.a.mark((function n(c){var a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.a.post("http://localhost:5000/api/auth/login",{email:t,password:e});case 3:a=n.sent,c(s(a.data.user)),localStorage.setItem("token",a.data.token),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()));var t,e},children:"\u0432\u043e\u0439\u0442\u0438"})]}),o&&Object(g.jsx)("div",{style:{textAlign:"center"},children:Object(g.jsx)(x.b,{to:"/calc",children:Object(g.jsx)(B,{onClick:function(){},children:"Get Stated"})})})]})},P=function(){var t=h.a.useState({email:"",password:""}),e=Object(p.a)(t,2),n=e[0],c=e[1],a=function(){c(n),console.log(n)};return Object(g.jsxs)("form",{onSubmit:a,style:{textAlign:"center"},children:[Object(g.jsx)("h1",{style:{fontFamily:"roboto"},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(g.jsx)(f,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",value:null===n||void 0===n?void 0:n.email,onChange:function(t){c(Object(v.a)(Object(v.a)({},n),{},{email:t.target.value}))},onBlur:a,type:"string"}),Object(g.jsx)(f,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:null===n||void 0===n?void 0:n.password,onChange:function(t){c(Object(v.a)(Object(v.a)({},n),{},{password:t.target.value}))},onBlur:a,type:"number"}),Object(g.jsx)(B,{onClick:function(){return L(null===n||void 0===n?void 0:n.email,null===n||void 0===n?void 0:n.password)},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})},q=(n(150),function(){return Object(g.jsx)("div",{style:{textAlign:"center",background:"none"},children:Object(g.jsx)(T.a,{maxWidth:"sm",style:{background:"none"},children:Object(g.jsx)(x.b,{to:"/calc",style:{textDecoration:"none"},children:Object(g.jsx)("div",{className:"background",children:Object(g.jsx)("div",{className:"text_content",children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 IBU"})})})})})}),K=n(205),Q=n(206),R=n(210),X=n(200),Y=n(213),Z=n(214),$=n(204),tt=n(57),et=n.n(tt),nt=function(t){var e=t.textContent;return Object(g.jsx)("div",{children:Object(g.jsxs)(X.a,{children:[Object(g.jsx)(Y.a,{children:Object(g.jsx)(et.a,{style:{width:"10px"}})}),Object(g.jsx)(Z.a,{primary:e})]})})},ct=function(){return Object(g.jsxs)(h.a.Fragment,{children:[Object(g.jsx)(M.a,{}),Object(g.jsx)(T.a,{maxWidth:"md",children:Object(g.jsxs)(Q.a,{sx:{bgcolor:"none"},children:[Object(g.jsx)("div",{style:{marginTop:"25px"},children:Object(g.jsx)(K.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u041e\u0431\u0449\u0435\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})}),Object(g.jsx)(K.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 IBU \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0446\u0438\u0438 \u0440\u0430\u0441\u0447\u0451\u0442\u043d\u043e\u0439 \u0433\u043e\u0440\u0435\u0447\u0438 \u043f\u0438\u0432\u0430.\u0412 \u043e\u0441\u043d\u043e\u0432\u0443 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0446\u0438\u0438 \u0437\u0430\u043b\u043e\u0436\u0435\u043d\u0430 \u0444\u043e\u0440\u043c\u0443\u043b\u0430 \u0422\u0438\u043d\u0441\u0435\u0442\u0430."}),Object(g.jsx)(K.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u041a\u043e\u043c\u0443 \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(g.jsxs)(K.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:["\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u042f\u043d\u0435\u043d\u043a\u043e, \u044f \u044f\u0432\u043b\u044f\u044e\u0441\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u044e\u0449\u0438\u043c \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u043e\u043c, \u0447\u0430\u0441\u0442\u043e \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u044e\u0441\u044c \u0441 \u0440\u0430\u0441\u0447\u0451\u0442\u043e\u043c IBU, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0438 \u043f\u0440\u0438\u043d\u044f\u043b \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f UI \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u044b\u0439 \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0435\u043d\u0438\u044f \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440. \u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u043a\u0430\u043a \u0438 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0443 \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0435\u043d\u0438\u044f."," "]}),Object(g.jsx)("img",{src:"https://avatars.githubusercontent.com/u/91193945?v=4",alt:"\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",width:"30%"}),Object(g.jsx)(K.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430, \u0434\u0430\u0442\u044c \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u043e \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c IBU, \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043c\u0435\u043d\u044f\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0435 \u0445\u043c\u0435\u043b\u044f \u043d\u0430 \u0432\u0430\u0440\u043a\u0435."}),Object(g.jsx)(K.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u041e\u0431\u0437\u043e\u0440 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439"}),Object(g.jsxs)($.a,{item:!0,xs:12,md:6,children:[Object(g.jsxs)(R.a,{children:[Object(g.jsx)(nt,{textContent:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0440\u0430\u0441\u0447\u0451\u0442\u043d\u043e\u0439 \u0433\u043e\u0440\u0435\u0447\u0438 \u043f\u0438\u0432\u0430"}),Object(g.jsx)(nt,{textContent:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u043e 5 \u0445\u043c\u0435\u043b\u0435\u0439 \u043d\u0430 \u0432\u0430\u0440\u043a\u0443, \u043a\u0430\u0436\u0434\u044b\u0439 \u0445\u043c\u0435\u043b\u044c \u0438\u043c\u0435\u0435\u0442 \u0441\u0432\u043e\u0451 IBU"}),Object(g.jsx)(nt,{textContent:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c IBU. \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 Slider \u043c\u043e\u0436\u043d\u043e \u043b\u0435\u0433\u043a\u043e \u0432  \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043b-\u0432\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u0445\u043c\u0435\u043b\u044f, \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043c\u0435\u043d\u044f\u044f \u0433\u043e\u0440\u0435\u0447\u044c \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0434\u0430\u0441\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0445\u043c\u0435\u043b\u044c \u0438 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043a\u0430\u043a \u0445\u043c\u0435\u043b\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u043e\u0431\u0449\u0435\u0435 IBU"}),Object(g.jsx)(nt,{textContent:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0445\u043c\u0435\u043b\u044c"}),Object(g.jsx)(nt,{textContent:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 Slider"})]}),Object(g.jsx)(K.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"}),Object(g.jsx)(K.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"\u0421\u043e\u0441\u0442\u0430\u0432 \u043f\u043e\u043b\u0435\u0439"}),Object(g.jsx)("div",{style:{background:"#d7d7d7",width:"70%"},children:Object(g.jsx)(K.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u26a0\ufe0f -\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430"})}),Object(g.jsx)("div",{style:{background:"#d7d7d7",width:"70%"},children:Object(g.jsx)(K.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u2705 -\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430"})}),Object(g.jsx)(K.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0440\u0430\u0437\u0434\u0435\u043b\u0451\u043d \u043d\u0430 \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438:"}),Object(g.jsx)(K.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"1. \u0421\u0443\u0441\u043b\u043e:"}),Object(g.jsxs)(R.a,{children:[Object(g.jsx)(nt,{textContent:"\u041e\u0431\u044a\u0451\u043c \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u043e\u0433\u043e \u0441\u0443\u0441\u043b\u0430, \u043b \u26a0\ufe0f"}),Object(g.jsx)(nt,{textContent:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u0430\u044f/\u0440\u0430\u0447\u0451\u0442\u043d\u0430\u044f \u043f\u043b\u043e\u0442\u0441\u043d\u043e\u0441\u0442\u044c \u0441\u0443\u0441\u043b\u0430, Plato \u26a0\ufe0f"}),Object(g.jsx)(nt,{textContent:"\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u044f \u0441\u0443\u0441\u043b\u0430, \u043c\u0438\u043d \u26a0\ufe0f"})]}),Object(g.jsx)(K.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"2. \u0425\u043c\u0435\u043b\u044c:"}),Object(g.jsxs)(R.a,{children:[Object(g.jsx)(nt,{textContent:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0445\u043c\u0435\u043b\u044f \u2705"}),Object(g.jsx)(nt,{textContent:"\u0410\u043b\u044c\u0444\u0430 \u043a\u0438\u0441\u043b\u043e\u0442\u0430(\u0441\u043c. \u043d\u0430 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 \u0438\u043b\u0438 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0445\u043c\u0435\u043b\u044f) \u26a0\ufe0f"}),Object(g.jsx)(nt,{textContent:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0445\u043c\u0435\u043b\u044f \u043d\u0430 \u0432\u0430\u0440\u043a\u0443, \u0433 \u26a0\ufe0f"}),Object(g.jsx)(nt,{textContent:"\u0412\u0440\u0435\u043c\u044f \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0445\u043c\u0435\u043b\u044f, \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u0438\u043f\u044f\u0447\u0435\u043d\u0438\u044f, \u043c\u0438\u043d \u26a0\ufe0f"})]}),Object(g.jsxs)(K.a,{variant:"h5",component:"h2",gutterBottom:!0,children:["\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f:"," "]}),Object(g.jsxs)(R.a,{children:[Object(g.jsxs)(X.a,{children:[Object(g.jsx)(Y.a,{children:Object(g.jsx)(et.a,{style:{width:"10px"}})}),Object(g.jsx)(Z.a,{primary:"\u041f\u043e\u043b\u0435 Max-IBU \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u043a\u043b/\u0432\u044b\u043a\u043b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043b-\u0432\u043e \u0445\u043c\u0435\u043b\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u044f Slider \u2705"}),Object(g.jsx)(I.a,{})]}),Object(g.jsxs)(X.a,{children:[Object(g.jsx)(Y.a,{children:Object(g.jsx)(et.a,{style:{width:"10px"}})}),Object(g.jsx)(Z.a,{primary:"\u041f\u043e\u043b\u0435 Slider \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0445\u043c\u0435\u043b\u044f \u043d\u0430 \u0432\u0430\u0440\u043a\u0443, \u0433 \u2705"}),Object(g.jsx)(A.a,{})]})]}),Object(g.jsx)(K.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(g.jsx)(K.a,{variant:"subtitle1",component:"h3",gutterBottom:!0,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0438 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0435 \u0434\u0430\u0442\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"}),Object(g.jsxs)(K.a,{variant:"h5",component:"h2",gutterBottom:!0,children:["\u0424\u0435\u0432\u0440\u0430\u043b\u044c 2022:"," "]}),Object(g.jsxs)(R.a,{children:[Object(g.jsx)(nt,{textContent:"\u0412\u044b\u0431\u043e\u0440 \u0432\u0432\u043e\u0434\u0438\u043c\u043e\u0439 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 SG \u0438\u043b\u0438 Plato"}),Object(g.jsx)(nt,{textContent:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0435\u0439"}),Object(g.jsx)(nt,{textContent:"\u0420\u0430\u0441\u0447\u0451\u0442 \u0433\u043e\u0440\u0435\u0447\u0438 \u0434\u043b\u044f Virpul/Hopstand"}),Object(g.jsx)(nt,{textContent:"\u0420\u0430\u0441\u0447\u0451\u0442 \u0433\u043e\u0440\u0435\u0447\u0438 \u0434\u043b\u044f DryHop"})]}),Object(g.jsx)(K.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"\u0418\u044e\u043b\u044c 2022:"}),Object(g.jsx)(R.a,{children:Object(g.jsx)(nt,{textContent:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0430, \u0433\u0434\u0435 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0446\u0438\u0438"})})]})]})})]})};var at=function(){return Object(g.jsxs)(O.c,{children:[Object(g.jsx)(O.a,{path:"/calc",element:Object(g.jsx)(H,{})}),Object(g.jsx)(O.a,{path:"/login",element:Object(g.jsx)(J,{})}),Object(g.jsx)(O.a,{path:"/main",element:Object(g.jsx)(q,{})}),Object(g.jsx)(O.a,{path:"/about",element:Object(g.jsx)(ct,{})}),Object(g.jsx)(O.a,{path:"/signup",element:Object(g.jsx)(P,{})}),Object(g.jsx)(O.a,{path:"/*",element:Object(g.jsx)(H,{})})]})},ot=n(215),rt=function(){return Object(g.jsx)(ot.a,{style:{background:"black"}})},it=n(207),lt=n(208),st=n(50),jt=n.n(st),ut=function(){return Object(g.jsx)("div",{className:jt.a.logo,children:Object(g.jsxs)("svg",{width:"22",height:"27",viewBox:"0 0 37 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(g.jsx)("path",{d:"M23.8352 31.9565L24.0159 2.13043H2.10876V31.9565",stroke:"white","stroke-width":"3","stroke-miterlimit":"10"}),Object(g.jsx)("path",{d:"M34.6924 10.0435L34.8792 39.8695H12.972V10.0435",stroke:"white","stroke-width":"3","stroke-miterlimit":"10"})]})})};function bt(){Object(a.c)((function(t){return t.user.isAuth})),Object(a.b)();return Object(g.jsx)(Q.a,{sx:{flexGrow:1},children:Object(g.jsx)(it.a,{position:"static",children:Object(g.jsxs)(lt.a,{style:{background:"black"},children:[Object(g.jsx)(K.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(g.jsx)(x.b,{to:"/calc",children:Object(g.jsx)(ut,{})})}),Object(g.jsx)(K.a,{variant:"h6",component:"div",sx:{flexGrow:30},children:Object(g.jsx)(x.b,{to:"/calc",className:jt.a.header_text_content,children:"\u041f\u0438\u0432\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430"})}),Object(g.jsx)(x.b,{to:"/calc",className:jt.a.header_text_content,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(g.jsx)(x.b,{to:"/about",className:jt.a.header_text_content,children:"About"})]})})})}var dt=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(bt,{}),Object(g.jsx)(at,{}),Object(g.jsx)(rt,{})]})})},ht=document.getElementById("root");Object(c.render)(Object(g.jsx)(a.a,{store:b,children:Object(g.jsx)(dt,{})}),ht)},50:function(t,e,n){t.exports={header_text_content:"Navbar_header_text_content__2KDf4",logo:"Navbar_logo__zNlyq"}}},[[151,1,2]]]);
//# sourceMappingURL=main.3f9eccb5.chunk.js.map