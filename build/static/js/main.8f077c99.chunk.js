(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(15),r=t.n(a),u=t(3),o=t(4),i=t.n(o),s="http://localhost:3001/api/persons",l=function(){return i.a.get(s)},d=function(e){return i.a.post(s,e)},j=function(e,n){return i.a.put("".concat(s,"/").concat(e),n)},b=function(e){return i.a.delete("".concat(s,"/").concat(e))},h=(t(39),t(0));function f(e){if(e.filter.length>0){var n=e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filter.toLowerCase())}));return Object(h.jsx)("div",{children:n.map((function(n){return Object(h.jsxs)("p",{children:[n.name," ",n.number," ",Object(h.jsx)(m,{handleDelete:function(){return e.handleDelete(n.id,n.name)}})]},n.name)}))})}return Object(h.jsx)("div",{children:e.persons.map((function(n){return Object(h.jsxs)("p",{children:[n.name," ",n.number," ",Object(h.jsx)(m,{handleDelete:function(){return e.handleDelete(n.id,n.name)}})]},n.name)}))})}function m(e){return Object(h.jsx)("button",{onClick:e.handleDelete,children:"delete"})}function O(e){return Object(h.jsxs)("div",{children:["filter numbers ",Object(h.jsx)("input",{value:e.filter,onChange:e.handleChange})]})}function p(e){return Object(h.jsxs)("form",{onSubmit:e.addPerson,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})}function x(e){var n=e.message,t=e.classname;return null===n?null:Object(h.jsx)("div",{className:t,children:n})}var v=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),i=o[0],s=o[1],m=Object(c.useState)(""),v=Object(u.a)(m,2),g=v[0],w=v[1],C=Object(c.useState)(""),N=Object(u.a)(C,2),D=N[0],S=N[1],k=Object(c.useState)(null),T=Object(u.a)(k,2),y=T[0],P=T[1],A=Object(c.useState)("error"),E=Object(u.a)(A,2),I=E[0],J=E[1];Object(c.useEffect)((function(){l().then((function(e){a(e.data)}))}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(x,{message:y,classname:I}),Object(h.jsx)(O,{filter:D,handleChange:function(e){S(e.target.value)}}),Object(h.jsx)("h3",{children:"Add a new number"}),Object(h.jsx)(p,{addPerson:function(e){e.preventDefault();var n={name:i,number:g};t.some((function(e){return e.name===i}))?window.confirm("".concat(i," is already added to phonebook, replace the old number with the new one?"))&&(j(t.find((function(e){return e.name===i})).id,n),l().then((function(e){a(e.data)})),s(""),w(""),P("The number for ".concat(i," has been updated")),setTimeout((function(){P(null)}),5e3),J("success")):(d(n).then((function(e){a(t.concat(e.data)),s(""),w("")})).catch((function(e){console.log(e)})),P("Added ".concat(i)),setTimeout((function(){P(null)}),5e3),J("success"))},newName:i,handleNameChange:function(e){s(e.target.value)},newNumber:g,handleNumberChange:function(e){w(e.target.value)}}),Object(h.jsx)("h3",{children:"Numbers"}),Object(h.jsx)(f,{persons:t,filter:D,handleDelete:function(e,n){window.confirm("Delete ".concat(n,"?"))&&(b(e).catch((function(c){P("Information of ".concat(n," has already been removed from server")),setTimeout((function(){P(null)}),5e3),J("error"),a(t.filter((function(n){return n.id!==e})))})),l().then((function(e){a(e.data)})),P("Deleted ".concat(n)),setTimeout((function(){P(null)}),5e3),J("success"))}})]})};r.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8f077c99.chunk.js.map