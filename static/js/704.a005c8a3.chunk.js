"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[704],{2704:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(1413),r=n(1134),c=n(9434),s=n(6916),o=function(e){return e.contacts.contacts.items},i=function(e){return e.contacts.contacts.isLoading},l=function(e){return e.contacts.contacts.error},u=(0,s.P1)([o,function(e){return e.contacts.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),d=n(6338),m=n(5172),h="ContactForm_contactsForm__6k3Pf",p="ContactForm_contactsFormBtn__+ADVC",f=n(184),x=function(){var e=(0,c.I0)(),t=(0,c.v9)(o),n=(0,r.cI)(),s=n.register,i=n.handleSubmit,l=n.reset,u=n.formState.errors;return(0,f.jsxs)("form",{onSubmit:i((function(n){t.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?(0,m.s)("".concat(n.name," is already in your contacts!")):(e((0,d.uK)(n)),l())})),className:h,children:[(0,f.jsxs)("label",{children:["Name",(0,f.jsx)("input",(0,a.Z)((0,a.Z)({},s("name",{required:!0})),{},{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Alex"})),u.name&&(0,f.jsx)("span",{children:"This field is required"})]}),(0,f.jsxs)("label",{children:["Phone",(0,f.jsx)("input",(0,a.Z)((0,a.Z)({},s("phone",{required:!0})),{},{type:"tel",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",placeholder:"066-123-45-67"})),u.phone&&(0,f.jsx)("span",{children:"This field is required"})]}),(0,f.jsxs)("label",{children:["Email",(0,f.jsx)("input",(0,a.Z)((0,a.Z)({},s("email",{required:!0})),{},{type:"email",placeholder:"youremail@gmail.com"})),u.email&&(0,f.jsx)("span",{children:"This field is required"})]}),(0,f.jsx)("button",{type:"submit",className:p,children:"Add contact"})]})},j="ContactsList_contactsList__7sAfD",_=n(2791),C="ContactListItem_contactListItem__A4sXv",b="ContactListItem_deleteBtn__roUYm",v=function(e){var t=e.contactId,n=e.contactName,a=e.contactNumber,r=e.deleteContact;return(0,f.jsxs)("li",{className:C,children:[(0,f.jsx)("p",{children:"".concat(n,": ")}),(0,f.jsx)("span",{children:a}),(0,f.jsx)("button",{className:b,onClick:function(){return r(t)},type:"button",name:t,children:"Delete"})]})},y=function(){var e=(0,c.I0)(),t=(0,c.v9)(u);(0,_.useEffect)((function(){e((0,d.yF)())}),[e]);var n=function(t){e((0,d.GK)(t))};return(0,f.jsx)("ul",{className:j,children:0!==t.length&&t.map((function(e){var t=e._id,a=e.name,r=e.phone;return(0,f.jsx)(v,{contactId:t,contactName:a,contactNumber:r,deleteContact:n},t)}))})},g="Filter_filterInput__1Cysk",N=function(){var e=(0,c.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{children:"Fined contacts by name"}),(0,f.jsx)("input",{className:g,onChange:function(t){e((0,d.Tv)(t.target.value))},type:"text",name:"filter"})]})},w=n(3430),I=n(9085),L=(n(5462),function(){var e=(0,c.v9)(i),t=(0,c.v9)(l);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(x,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(N,{}),(0,f.jsx)(y,{}),e&&(0,f.jsx)(w.rj,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"",visible:!0}),t&&(0,f.jsx)(I.Ix,{})]})})}}]);
//# sourceMappingURL=704.a005c8a3.chunk.js.map