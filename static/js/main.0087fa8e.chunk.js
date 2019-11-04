(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,r){e.exports=r(218)},112:function(e,t,r){},21:function(e,t,r){e.exports={settingsFormWrapper:"ContactForm_settingsFormWrapper__1JT6p",settingsForm:"ContactForm_settingsForm__3627Z",sendBtns:"ContactForm_sendBtns__2oe8s",sendBtn:"ContactForm_sendBtn__RN1Tg",closeForm:"ContactForm_closeForm__1c5ui"}},218:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),i=r(41),a=r.n(i),o=(r(112),r(88)),l=r(89),c=r(103),m=r(90),u=r(105),d=r(91),A=r.n(d),p=r(104),g=r(8),b=r.n(g),h=r(26),E=function(e){var t=e.addNewField,r=e.numberArr,i=Object(s.useState)(null),a=Object(h.a)(i,2),o=a[0],l=a[1];return n.a.createElement("div",{className:b.a.inputWrapper},n.a.createElement("input",{type:"text",maxLength:"20",onChange:function(e){l(e.target.value)},placeholder:"Name"}),n.a.createElement("button",{onClick:function(){var e={id:Math.random(),name:o,phone:"",email:"",showDesc:!1,showForm:!1};t({newField:e,numberArr:r}),l(null)},disabled:!o},"Add"))},S=r(21),w=r.n(S),f=r(220),N=r(219),D=r(27),O=r.n(D),F=function(e){var t=e.input,r=e.type,s=e.placeholder,i=e.value,a=e.accept,o=e.child,l=e.label,c=e.maxLength,m=e.autoFocus,u=e.meta,d=u.error,A=u.touched;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:O.a.inputLabel+" "+(A&&d?O.a.errorInputLabel:"")},A&&d?d:l),n.a.createElement("input",Object.assign({className:O.a.inputField+" "+(A&&d?O.a.errorInputField:"")+" "+O.a.reg},t,{accept:a,value:i,autoFocus:m,placeholder:A&&d?d:s,maxLength:c,type:r})),o)},I=function(e){if(!(e&&e.length>=1))return"Required field"},M=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},v=function(e){return e&&!/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/i.test(e)?"Invalid number, must be 10 digits":void 0},R=function(e){return function(t){if(t&&t.length>e)return"Max ".concat(e," symbols")}},C=R(30),x=R(15),j=Object(N.a)({form:"settingsForm",enableReinitialize:!0})((function(e){var t=e.handleSubmit,r=e.pristine,s=e.submitting,i=e.toggleForm,a=e.toggleFormSublist,o=e.isSublist,l=e.id;return n.a.createElement("div",{className:w.a.settingsFormWrapper},n.a.createElement("form",{onSubmit:t},n.a.createElement("div",{className:w.a.settingsForm},n.a.createElement(f.a,{name:"name",type:"text",placeholder:"Name",maxLength:"31",component:F,label:"Name",validate:[I,C]}),n.a.createElement(f.a,{name:"email",type:"email",placeholder:"Email",maxLength:"31",component:F,label:"Email",validate:[M,C]}),n.a.createElement(f.a,{name:"phone",type:"tel",placeholder:"Phone",maxLength:"16",component:F,label:"Phone",validate:[v,x]}),n.a.createElement("div",{className:w.a.sendBtns},n.a.createElement("button",{className:w.a.sendBtn,type:"submit",disabled:r||s},"To send"),n.a.createElement("button",{className:w.a.sendBtn,type:"reset",disabled:r},"Reset")))),n.a.createElement("span",{className:w.a.closeForm,onClick:function(){return function(e){o?a(e):i(e)}(l)}},"X"))})),H=n.a.memo((function(e){var t=e.showDescription,r=e.numberArr,s=e.editMode,i=e.toggleForm,a=e.list,o=e.isSublist,l=e.toggleFormSublist;return n.a.createElement("div",{className:b.a.showDesc,onDoubleClick:function(){return!s&&(a.id,void(o?l(a.id,o):i(a.id,o)))}},n.a.createElement("span",{className:b.a.showDescEmail},"\u2709 ",a.email),n.a.createElement("span",{className:b.a.showDescPhone},"\u2706 ",a.phone),n.a.createElement("span",{className:b.a.closeDesc,onClick:function(){return!s&&t({status:!a.showDesc,id:a.id,numberArr:r})}},"X"))})),W=n.a.memo((function(e){var t=e.isSublist,r=e.createSublist,s=e.setRemoveDescription,i=e.numberArr,a=e.desc,o=e.changeItemOrder,l=e.id,c=e.index,m=e.setRemoveSublist;return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:b.a.up,disabled:c===a.length-1,onClick:function(){return o(c,i)}},"\u2195"),n.a.createElement("button",{className:b.a.add,disabled:t,onClick:function(){r(l)}},"Add Sublist"),n.a.createElement("button",{className:b.a.remove,onClick:function(){t?m({id:l,numberArr:i}):s({id:l,numberArr:i})}},"Remove"))})),B=n.a.memo((function(e){var t=e.setShowDescription,r=e.setRemoveDescription,s=e.numberArr,i=e.addNewField,a=e.editMode,o=e.desc,l=e.toggleForm,c=e.onSubmit,m=e.changeItemOrder,u=e.createSublist,d=e.isSublist,A=e.setRemoveSublist,p=e.setShowDescriptionSublist,g=e.toggleFormSublist,h=function(e){d?p({status:e.status,id:e.id,numberArr:s}):t({status:e.status,id:e.id,numberArr:s})};return n.a.createElement("div",{className:d?b.a.listWrapper+" "+b.a.sublist:b.a.listWrapper},n.a.createElement("div",null,"List_",d?"".concat(s+1,"_1"):s+1),o.length&&o.map((function(e,E){return n.a.createElement(n.a.Fragment,{key:Math.random()},n.a.createElement("div",{className:b.a.list},e.showDesc&&n.a.createElement(n.a.Fragment,null,e.showForm&&n.a.createElement(j,{toggleForm:l,toggleFormSublist:g,isSublist:d,onSubmit:c,id:e.id}),n.a.createElement(H,{showDescription:h,numberArr:s,editMode:a,toggleForm:l,list:e,isSublist:d,toggleFormSublist:g})),n.a.createElement("div",{className:b.a.descName,onDoubleClick:function(){return!a&&h({status:!e.showDesc,id:e.id,numberArr:s})}},e.name),n.a.createElement(W,{isSublist:d,setRemoveSublist:A,createSublist:u,setRemoveDescription:r,numberArr:s,desc:o,changeItemOrder:m,id:e.id,index:E})),e.sublist&&e.sublist.length&&n.a.createElement(B,{isSublist:"sublist"in e,desc:e.sublist,setShowDescription:t,setRemoveDescription:r,numberArr:s,addNewField:i,editMode:a,toggleForm:l,onSubmit:c,changeItemOrder:m,createSublist:u,setRemoveSublist:A,setShowDescriptionSublist:p,toggleFormSublist:g}))})),n.a.createElement(E,{numberArr:s,addNewField:i}))})),k=function(e){var t=e.listsArray,r=e.setShowDescription,i=e.setRemoveDescription,a=e.numberArr,o=e.addNewField,l=e.editMode,c=e.setShowFormEdit,m=e.setChangeContent,u=e.setChangeItemOrder,d=e.setNewList,A=e.setRemoveSublist,p=e.setShowDescriptionSublist,g=e.setShowFormEditSublist,b=e.setChangeContentSublist,E=Object(s.useState)(t),S=Object(h.a)(E,2),w=S[0],f=S[1],N=Object(s.useState)(null),D=Object(h.a)(N,2),O=D[0],F=D[1],I=Object(s.useState)(null),M=Object(h.a)(I,2),v=M[0],R=M[1];Object(s.useEffect)((function(){f(t)}),[t,t.length]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(B,{setShowDescription:r,setRemoveDescription:i,numberArr:a,setShowDescriptionSublist:p,addNewField:o,editMode:l,desc:w,toggleForm:function(e,t){F(e),R(t),c({id:e,numberArr:a})},onSubmit:function(e){var t={name:e.name,phone:e.phone,email:e.email,numberArr:a,id:O};v?b(t):m(t)},toggleFormSublist:function(e,t){F(e),R(t),g({id:e,numberArr:a})},changeItemOrder:function(e,t){var r=[w[e+1],w[e]];w[e]=r[0],w[e+1]=r[1];var s=w.filter((function(e){return e}));u({newArray:s,numberArr:t})},createSublist:function(e){d({newSubList:{sublist:[{id:e,name:"newSublist",phone:"",email:"",showDesc:!1,showForm:!1}]},id:e,numberArr:a})},setRemoveSublist:A}))},z=r(7),P=r.n(z),T=r(94),Y=r.n(T),G=r(95),Q=r.n(G),y=r(96),L=r.n(y),U=r(97),X=r.n(U),Z=r(98),K=r.n(Z),V=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:P.a.footerWrapper},n.a.createElement("footer",{className:P.a.footer},n.a.createElement("div",null,n.a.createElement("a",{className:P.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://sphinx7777.github.io/testFree"},n.a.createElement("img",{className:P.a.linkImg,src:K.a,alt:"Test 1"}),n.a.createElement("span",{className:P.a.linkTitle},"Test_1"))),n.a.createElement("div",{className:P.a.LinkWrapper},n.a.createElement("div",{className:P.a.linkLineWrapper},n.a.createElement("a",{className:P.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://sphinx7777.github.io/reactTypeScript"},n.a.createElement("img",{className:P.a.linkImg,src:Y.a,alt:"ToDo"}),n.a.createElement("span",{className:P.a.linkTitle},"ToDo")),n.a.createElement("a",{className:P.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://sphinx7777.github.io/SocialNetvork"},n.a.createElement("img",{className:P.a.linkImg,src:Q.a,alt:"Social network"}),n.a.createElement("span",{className:P.a.linkTitle},"Social_Network")),n.a.createElement("a",{className:P.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Sphinx7777?tab=repositories"},n.a.createElement("img",{className:P.a.linkImg,src:L.a,alt:"\u0413\u0438\u0442\u0445\u0430\u0431"}),n.a.createElement("span",{className:P.a.linkTitle},"Git")))),n.a.createElement("div",null,n.a.createElement("a",{className:P.a.linkPost,target:"_blank",rel:"noopener noreferrer",href:"mailto:Spamoglot13@gmail.com"},n.a.createElement("img",{className:P.a.linkImg,src:X.a,alt:"Social network"}),n.a.createElement("span",{className:P.a.linkTitle},"Spamoglot13@gmail.com"))))),n.a.createElement("div",{className:P.a.title},n.a.createElement("span",null,"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c. \u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0440\u0430\u043d\u044c\u0448\u0435 \u0441\u043f\u0438\u0441\u043a\u043e\u0432 \u0441 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e \u044f \u043d\u0435 \u0434\u0435\u043b\u0430\u043b \u0438 \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b \u0432\u0441\u044e \u0441\u0443\u0431\u0431\u043e\u0442\u0443 \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043f\u043e\u043d\u044f\u043b \u0447\u0442\u043e \u043f\u043e\u0448\u0435\u043b \u043d\u0435 \u043f\u043e \u0442\u043e\u043c\u0443 \u043f\u0443\u0442\u0438. \u0412 \u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u0437\u0430\u043d\u0438\u043c\u0430\u043b\u0441\u044f \u0432\u0442\u043e\u0440\u044b\u043c \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u043c \u0438 \u043f\u0435\u0440\u0435\u0434\u0435\u043b\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0441 \u043d\u0443\u043b\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0435 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c. \u0421\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u043d\u0435 \u043f\u043e\u043d\u044f\u043b \u043a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c, \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e ((. \u0421\u0434\u0435\u043b\u0430\u043b \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043e\u043c. \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0444\u043e\u0440\u043c\u043b\u044f\u0442\u044c \u0441\u043c\u044b\u0441\u043b\u0430 \u043d\u0435 \u0443\u0432\u0438\u0434\u0435\u043b \u0442.\u043a. \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0435 \u0443\u0434\u0430\u043b\u0441\u044f \u043a\u0430\u043a \u0431\u044b\u043b\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e. DoubleClick \u043d\u0430 \u0438\u043c\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435. DoubleClick \u043d\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f. \u0421\u043e\u0441\u0435\u0434\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043c\u0435\u0441\u0442\u0430\u043c\u0438. \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0441\u044f, \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0441\u0435\u0433\u043e \u043e\u0434\u0438\u043d Sublist \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f. \u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0432 local storage. \u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0442\u044c \u0432 \u043f\u043e\u0434\u043e\u0431\u043d\u043e\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0435 \u043a\u043e\u0434 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0440\u0430\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0438 \u044f \u043f\u043e\u043d\u0438\u043c\u0430\u044e \u0447\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u0430\u043a \u0442\u043e \u0438\u043d\u0430\u0447\u0435.)) \u041d\u0430 \u043d\u0435\u0434\u0435\u043b\u0435 \u0431\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043d\u043e \u0442\u044f\u043d\u0443\u0442\u044c \u043d\u0435\u0434\u0435\u043b\u044e \u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u043d\u0435 \u0432\u0438\u0436\u0443 \u0441\u043c\u044b\u0441\u043b\u0430. \u0412\u044b\u0448\u0435 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0442\u0435\u0441\u0442, \u0434\u0440\u0443\u0433\u0438\u0435 \u043c\u043e\u0438 \u043d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439.")))},J=function(e){var t=e.listsArr1,r=e.listsArr2,s=e.listsArr3,i=Object(p.a)(e,["listsArr1","listsArr2","listsArr3"]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(V,null),n.a.createElement("div",{className:b.a.listsWrapper},n.a.createElement(k,Object.assign({listsArray:t,numberArr:0},i)),n.a.createElement(k,Object.assign({listsArray:r,numberArr:1},i)),n.a.createElement(k,Object.assign({listsArray:s,numberArr:2},i))))},q=r(17),_=r(99),$=r(44);function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(r,!0).forEach((function(t){Object(_.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re="/listsReducer///SHOW_DESCRIPTION",se="/listsReducer///SHOW_FORM_EDIT",ne="/listsReducer///ADD_NEW_FIELD",ie="/listsReducer///SET_NEW_SUBLIST",ae="/listsReducer///REMOVE_SUBLIST",oe=Object($.load)({namespace:"lists"}).lists;oe&&oe.listsArr&&oe.listsArr.length||(oe={listsArr:[[{id:1,name:"1",phone:"111 11 11 11",email:"111@gmail.com",showDesc:!1,showForm:!1},{id:2,name:"11",phone:"111 11 11 11",email:"111@gmail.com",showDesc:!1,showForm:!1},{id:3,name:"111",phone:"111 11 11 11",email:"111@gmail.com",showDesc:!1,showForm:!1}],[{id:4,name:"2",phone:"222 22 22 22",email:"222@gmail.com",showDesc:!1,showForm:!1},{id:5,name:"22",phone:"222 22 22 22",email:"222@gmail.com",showDesc:!1,showForm:!1},{id:6,name:"222",phone:"222 22 22 22",email:"222@gmail.com",showDesc:!1,showForm:!1}],[{id:7,name:"3",phone:"333 33 33 33",email:"333@gmail.com",showDesc:!1,showForm:!1},{id:8,name:"33",phone:"333 33 33 33",email:"333@gmail.com",showDesc:!1,showForm:!1},{id:9,name:"333",phone:"333 33 33 33",email:"333@gmail.com",showDesc:!1,showForm:!1}]],editField:!1,editMode:!1});var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return te({},e,{},e.listsArr[t.numberArr]=e.listsArr[t.numberArr].map((function(e){return e.id===t.id?(e.showDesc=!e.showDesc,e):e})));case se:return te({},e,{},e.listsArr[t.numberArr]=e.listsArr[t.numberArr].map((function(e){return e.id===t.id?(e.showForm=!e.showForm,e):e})),{editMode:!e.editMode});case"/listsReducer///SET_CHANGE_CONTENT":return te({},e,{},e.listsArr[t.numberArr]=e.listsArr[t.numberArr].map((function(e){return e.id===t.id?(e.email=t.email,e.name=t.name,e.phone=t.phone,e.showForm=!1,e):e})),{editMode:!1});case"/listsReducer///REMOVE_DESCRIPTION":return te({},e,{},e.listsArr,{},e.listsArr[t.numberArr]=e.listsArr[t.numberArr].filter((function(e){return e.id!==t.id})));case ne:return te({},e,{},e.listsArr,{},e.listsArr[t.numberArr].push(t.newField),{editField:!e.editField});case"/listsReducer///SET_CHANGE_ITEM_ORDER":return te({},e,{},e.listsArr,{},e.listsArr[t.numberArr]=t.newArray);case ie:return te({},e,{},e.listsArr[t.numberArr]=e.listsArr[t.numberArr].map((function(e){return e.id===t.id?(Object.assign(e,t.newSubList),e):e})),{editMode:!1});case ae:return te({},e,{},e.listsArr,{},e.listsArr[t.numberArr]=e.listsArr[t.numberArr].map((function(e){return e.id===t.id?(e.sublist=e.sublist.filter((function(e){return e.id!==t.id})),e.sublist.length||(e.sublist=!1),e):e})));case"/listsReducer///SET_SHOW_DESCRIPTION_SUBLIST":return te({},e,{},e.listsArr,{},e.listsArr[t.numberArr]=e.listsArr[t.numberArr].map((function(e){return e.id===t.id?(e.sublist=e.sublist.map((function(e){return e.id===t.id&&(e.showDesc=!e.showDesc),e})),e):e})));case"/listsReducer///SET_SHOW_FORM_EDIT_SUBLIST":return te({},e,{},e.listsArr,{},e.listsArr[t.numberArr]=e.listsArr[t.numberArr].map((function(e){return e.id===t.id?(e.sublist=e.sublist.map((function(e){return e.id===t.id&&(e.showForm=!e.showForm),e})),e):e})),{editMode:!e.editMode});case"/listsReducer///SET_CHANGE_CONTENT_SUBLIST":return te({},e,{},e.listsArr,{},e.listsArr[t.numberArr]=e.listsArr[t.numberArr].map((function(e){return e.id===t.id?(e.sublist=e.sublist.map((function(e){return e.id===t.id&&(e.email=t.email,e.name=t.name,e.phone=t.phone,e.showForm=!1),e})),e):e})),{editMode:!1});default:return e}},ce=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.setShowDescription,r=e.setRemoveDescription,s=e.addNewField,i=e.setShowFormEdit,a=e.setChangeContent,o=e.setChangeItemOrder,l=e.setNewList,c=e.setRemoveSublist,m=e.setShowDescriptionSublist,u=e.setShowFormEditSublist,d=e.setChangeContentSublist;return n.a.createElement("div",{className:A.a.app},n.a.createElement(J,{editMode:this.props.editMode,listsArr1:this.props.listsArr1,listsArr2:this.props.listsArr2,listsArr3:this.props.listsArr3,setShowDescription:t,setRemoveDescription:r,addNewField:s,setShowFormEdit:i,setChangeContent:a,setChangeItemOrder:o,setNewList:l,setRemoveSublist:c,setShowDescriptionSublist:m,setShowFormEditSublist:u,setChangeContentSublist:d}))}}]),t}(n.a.PureComponent),me=Object(q.b)((function(e){return{editMode:e.lists.editMode,editField:e.lists.editField,listsArr1:e.lists.listsArr[0],listsArr2:e.lists.listsArr[1],listsArr3:e.lists.listsArr[2]}}),{setShowDescription:function(e){return te({type:re},e)},setRemoveDescription:function(e){return te({type:"/listsReducer///REMOVE_DESCRIPTION"},e)},setChangeItemOrder:function(e){return te({type:"/listsReducer///SET_CHANGE_ITEM_ORDER"},e)},addNewField:function(e){return te({type:ne},e)},setShowFormEdit:function(e){return te({type:se},e)},setChangeContent:function(e){return te({type:"/listsReducer///SET_CHANGE_CONTENT"},e)},setNewList:function(e){return te({type:ie},e)},setRemoveSublist:function(e){return te({type:ae},e)},setShowDescriptionSublist:function(e){return te({type:"/listsReducer///SET_SHOW_DESCRIPTION_SUBLIST"},e)},setShowFormEditSublist:function(e){return te({type:"/listsReducer///SET_SHOW_FORM_EDIT_SUBLIST"},e)},setChangeContentSublist:function(e){return te({type:"/listsReducer///SET_CHANGE_CONTENT_SUBLIST"},e)}})(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=r(102),de=r(6),Ae=r(100),pe=r(221),ge=Object(de.c)({lists:le,form:pe.a}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,he=Object(de.e)(ge,Object(de.d)(be(Object(de.a)(Ae.a,Object($.save)({namespace:"lists"})))));a.a.render(n.a.createElement(ue.a,null,n.a.createElement(q.a,{store:he},n.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},27:function(e,t,r){e.exports={inputLabel:"InputComponent_inputLabel__6RmSq",errorInputLabel:"InputComponent_errorInputLabel__2Mgw6",inputField:"InputComponent_inputField__316-i",errorInputField:"InputComponent_errorInputField__3QDOX"}},7:function(e,t,r){e.exports={footerWrapper:"Header_footerWrapper__2es5V",linkPost:"Header_linkPost__2Bb_v",linkImg:"Header_linkImg__3pEc1",footer:"Header_footer__2JHLD",linkLineWrapper:"Header_linkLineWrapper__2MKr_",link:"Header_link__1IjGY",LinkWrapper:"Header_LinkWrapper__1BaTn",photoWrapper:"Header_photoWrapper__1FUXz",photo:"Header_photo__aDtuM",title:"Header_title__1A8oo"}},8:function(e,t,r){e.exports={listsWrapper:"Lists_listsWrapper__JtP0O",listWrapper:"Lists_listWrapper__cr8m-",inputWrapper:"Lists_inputWrapper__qRr3Q",list:"Lists_list__3L_z1",showDesc:"Lists_showDesc__2riSX",showDescEmail:"Lists_showDescEmail__uD-Px",showDescPhone:"Lists_showDescPhone__2zhmZ",closeDesc:"Lists_closeDesc__1BNyo",descName:"Lists_descName__3_vPh",up:"Lists_up__2sxSB",add:"Lists_add__1XkUI",remove:"Lists_remove__35tj1",sublist:"Lists_sublist__1ohiG"}},91:function(e,t,r){e.exports={app:"App_app__1rLC3"}},94:function(e,t,r){e.exports=r.p+"static/media/organizer.87c1219c.png"},95:function(e,t){e.exports="data:image/png;base64,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"},96:function(e,t,r){e.exports=r.p+"static/media/git.2bcad980.ico"},97:function(e,t,r){e.exports=r.p+"static/media/mail.a9b30fd8.ico"},98:function(e,t,r){e.exports=r.p+"static/media/test.4267c0a0.ico"}},[[107,1,2]]]);
//# sourceMappingURL=main.0087fa8e.chunk.js.map