(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(8),r=n.n(c),o=(n(15),n(1)),u=n(3),i=n(2),m=n(4),d=(n(17),n(9)),E=n.n(d);var s=function(){var e=Object(a.useState)([{id:1,title:"wake up",completed:!1},{id:2,title:"reading a book",completed:!1},{id:3,title:"jogging",completed:!1}]),t=Object(m.a)(e,2),n=t[0],c=t[1];return l.a.createElement("div",{className:"w3-container"},l.a.createElement("h2",null,"Todos Here"),l.a.createElement("div",null,l.a.createElement(b,{addTodo:function(e){return c([].concat(Object(i.a)(n),[e]))}})),l.a.createElement("table",{className:"w3-table-all"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"w3-red"},l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"TITLE"),l.a.createElement("th",null,"STATUS"),l.a.createElement("th",{colSpan:"3"},"ACTTION"))),l.a.createElement("tbody",null,n.map(function(e,t){var a=e.id,r=e.title,o=e.completed;return l.a.createElement("tr",{key:t},l.a.createElement("td",null,a),l.a.createElement("td",null,r),l.a.createElement("td",null,o?"YES":"NO"),l.a.createElement("td",null,l.a.createElement("button",{className:"w3-btn w3-btn-block w3-primary",onClick:function(){return function(e,t){var a=n.indexOf(n.filter(function(t){return t.id===e}).pop()),l=Object(i.a)(n);l[a].completed=!l[a].completed,c(l)}(a)}},"Toggle Complted")),l.a.createElement("td",null,l.a.createElement("button",{className:"w3-btn w3-tbn-block w3-info",onClick:function(){return function(e){return console.log(" todo deleted "+e)}(a)}},"Edit")),l.a.createElement("td",null,l.a.createElement("button",{className:"w3-btn w3-btn-block w3-danger",onClick:function(){return function(e){return c(n.filter(function(t){return t.id!==e}))}(a)}},"Remove")))}))))},b=function(e){var t=e.addTodo,n=Object(a.useState)({id:null,title:" ",completd:!1}),c=Object(m.a)(n,2),r=c[0],i=c[1],d=function(e){e.preventDefault(),t(Object(u.a)({},r,{id:E()()})),i({id:null,title:"",completed:!1})};return l.a.createElement("div",null,l.a.createElement("label",null,"Title ",l.a.createElement("input",{className:"w3-input",type:"text",value:r.title,name:"title",onChange:function(e){return function(e){e.preventDefault(),i(Object(u.a)({},r,Object(o.a)({},e.target.name,e.target.value))),"Enter"===e.key&&(console.log(e.key),d(e))}(e)},placeholder:" todo title"})),l.a.createElement("button",{className:"w3-btn w3-primary",onClick:function(e){return d(e)}},"Create"))},f=function(){return l.a.createElement("div",{className:"w3-container"},l.a.createElement("header",{className:"w3-teal "},l.a.createElement("h1",null,"My Lovely Todo App")),l.a.createElement(s,null),l.a.createElement("footer",{className:" w3-teal"},"@Tods 2022 ",Date("y")))},p=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,22)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),c(e),r(e)})};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),p()}},[[10,3,2]]]);
//# sourceMappingURL=main.b448fb84.chunk.js.map