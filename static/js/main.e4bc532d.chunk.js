(this["webpackJsonpts_react-study"]=this["webpackJsonpts_react-study"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(5),i=n.n(r),s=(n(12),n(6)),d=n(7),u=(n(13),n(0)),j=function(t){return Object(u.jsx)("ul",{className:"inner",children:t.items.map((function(e){return Object(u.jsxs)("li",{className:e.id,children:[Object(u.jsx)("span",{children:e.text}),Object(u.jsx)("button",{onClick:t.onDeleteTodo.bind(undefined,e.id),children:"Delete."})]},e.id)}))})},a=(n(15),function(t){var e=Object(c.useRef)(null);return Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=e.current.value;t.onAddTodo(c),e.current.value=""},className:"inner",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"todo-text",children:"TodoList"}),Object(u.jsx)("input",{type:"text",id:"todo-text",ref:e})]}),Object(u.jsx)("button",{type:"submit",children:"Add."})]})}),l=(n(16),function(){return Object(u.jsx)("footer",{children:"\xa9 yy-work"})}),b=function(){var t=Object(c.useState)([{id:Math.random().toString(),text:"Todo Item"}]),e=Object(d.a)(t,2),n=e[0],o=e[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(a,{onAddTodo:function(t){o((function(e){return[{id:Math.random().toString(),text:t}].concat(Object(s.a)(e))}))}}),Object(u.jsx)(j,{items:n,onDeleteTodo:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))}}),Object(u.jsx)(l,{})]})};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.e4bc532d.chunk.js.map