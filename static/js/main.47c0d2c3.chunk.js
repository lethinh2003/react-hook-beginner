(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(28),a=c.n(i),j=(c(37),c(38),c(39),c(6)),r=c(0);var d=function(){return Object(r.jsxs)("div",{className:"topnav",children:[Object(r.jsx)(j.c,{to:"/",activeClassName:"active",exact:!0,children:"Home"}),Object(r.jsx)(j.c,{to:"/blogs",activeClassName:"active",children:"Blogs"}),Object(r.jsx)(j.c,{to:"/todos",activeClassName:"active",children:"Todos"})]})},l=c(32),o=c(7),b=(c(49),function(){var e=Object(n.useState)([{id:1,title:"Hoc bai"},{id:2,title:"Choi game"},{id:3,title:"Hoc lap trinh"}]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),a=Object(o.a)(i,2),j=a[0],d=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"todos-container",children:c.length>0&&c.map((function(e){return Object(r.jsxs)("li",{className:"todo-item",children:[e.title," ",Object(r.jsx)("span",{onClick:function(){return function(e){var t=c.filter((function(t){return t.id!==e}));s(t)}(e.id)},children:" X "})]},e.id)}))}),Object(r.jsxs)("div",{className:"todos-form",children:[Object(r.jsx)("label",{className:"todos-label",htmlFor:"title",children:"Todo title"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",id:"title",className:"todos-input",value:j,onChange:function(e){return function(e){d(e.target.value)}(e)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",onClick:function(){return function(){if(j){var e=c,t={id:Math.floor(1e3*Math.random()),title:j};s([].concat(Object(l.a)(e),[t])),d("")}}()},children:"Add"})]})]})}),h=(c(50),function(e){var t=e.info;return Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("img",{src:t.avatar}),Object(r.jsxs)("p",{children:["Hello, my name is ",t.name,", I'm ",t.age," years old and I study at ",t.school,"."]}),Object(r.jsx)("p",{children:"This is my project for beginner ReactJS "})]})}),O=(c(19),c(10)),u=c.n(O),x=c(18),v=c.n(x),p=c(31),m=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],a=Object(n.useState)(!0),j=Object(o.a)(a,2),r=j[0],d=j[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source();function c(){return(c=Object(p.a)(v.a.mark((function c(){var n,s;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,u.a.get(e,{cancelToken:t.token});case 3:n=c.sent,(s=n&&n.data?n.data:[])&&s.length>0&&s.map((function(e){return e})),i(s),d(!1),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),u.a.isCancel(c.t0)?console.log("Request canceled",c.t0.message):d(!1);case 13:case"end":return c.stop()}}),c,null,[[0,10]])})))).apply(this,arguments)}return function(){c.apply(this,arguments)}(),function(){t.cancel("This is message error!")}}),[]),{data:s,isLoading:r}},f=function(){var e=m("https://jsonplaceholder.typicode.com/todos"),t=e.data,c=e.isLoading,n=t.filter((function(e){return e.id<=10}));return Object(r.jsxs)(r.Fragment,{children:[!0===c&&Object(r.jsxs)("div",{className:"lds-roller",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"Titie"})]})}),Object(r.jsx)("tbody",{children:!1===c&&n&&n.length>0&&n.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.id}),Object(r.jsxs)("td",{children:[e.title,Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",children:Object(r.jsx)(j.b,{to:"/blogs/"+e.id,children:"Detail"})})]})]},e.id)}))})]})]})},g=c(2),y=function(){var e=Object(g.g)().id,t=m("https://jsonplaceholder.typicode.com/todos/".concat(e)),c=t.data,n=t.isLoading,s=Object(g.f)();return Object(r.jsxs)(r.Fragment,{children:[!0===n&&Object(r.jsxs)("div",{className:"lds-roller",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]}),!1===n&&c&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{type:"submit",onClick:function(){s.push("/blogs")},children:"Back to Blogs"}),Object(r.jsxs)("div",{className:"detail",children:[Object(r.jsxs)("div",{className:"detail-title",children:["Title: ",c.title]}),Object(r.jsxs)("div",{className:"detail-user",children:["User-Id: ",c.userId]})]},c.id)]})]})};var N=function(){return Object(r.jsx)(j.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{}),Object(r.jsx)("header",{className:"App-header",children:Object(r.jsxs)(g.c,{children:[Object(r.jsx)(g.a,{path:"/",exact:!0,children:Object(r.jsx)(h,{info:{avatar:"https://lethinh2003.xyz/upload/avatar_4965.png",name:"Le Thinh",age:18,school:"HCMUE"}})}),Object(r.jsx)(g.a,{path:"/blogs",exact:!0,children:Object(r.jsx)(f,{})}),Object(r.jsx)(g.a,{path:"/blogs/:id",exact:!0,children:Object(r.jsx)(y,{})}),Object(r.jsx)(g.a,{path:"/todos",children:Object(r.jsx)(b,{})})]})})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),C()}},[[70,1,2]]]);
//# sourceMappingURL=main.47c0d2c3.chunk.js.map