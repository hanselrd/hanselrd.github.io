(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{59:function(e,t,a){e.exports=a(74)},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var i,n=a(0),l=a.n(n),r=a(30),o=a.n(r),u=a(16),c=a(86),s=a(19),m=a(24),d=a(22),p=a(57),b=a(85),g=a(79),f=a(80),h=a(34),v=a(4),x={internal:{languageChanged:Object(v.createAction)("@@locale-internal/LANGUAGE CHANGED",(function(e){return e}))()},start:Object(v.createAction)("@@locale/START")(),change:Object(v.createAction)("@@locale/CHANGE",(function(e){return e}))(),showModal:Object(v.createAction)("@@locale/SHOW MODAL")(),hideModal:Object(v.createAction)("@@locale/HIDE MODAL")(),toggleModal:Object(v.createAction)("@@locale/TOGGLE MODAL")()},O=function(e,t,a){var i=a.localization;return e.pipe(Object(p.a)(Object(v.getType)(x.start)),Object(g.a)(x.internal.languageChanged(i.getLanguage())))},E=function(e,t,a){var i=a.localization;return e.pipe(Object(p.a)(Object(v.getType)(x.change)),Object(f.a)((function(e){return i.setLanguage(e.payload)})),Object(h.a)((function(e){return x.internal.languageChanged(e.payload)})))},j=Object(b.a)(O,E),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showModal:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(v.getType)(x.internal.languageChanged):return Object(d.a)({},e,{language:t.payload});case Object(v.getType)(x.showModal):return Object(d.a)({},e,{showModal:!0});case Object(v.getType)(x.hideModal):return Object(d.a)({},e,{showModal:!1});case Object(v.getType)(x.toggleModal):return Object(d.a)({},e,{showModal:!e.showModal});default:return e}},y=a(3),N=a(81),w=a(82),A={internal:{locationChanged:Object(v.createAction)("@@router-internal/LOCATION CHANGED",(function(e){return e}))()},start:Object(v.createAction)("@@router/START")(),push:Object(v.createAction)("@@router/PUSH",(function(e,t){return{path:e,state:t}}))(),replace:Object(v.createAction)("@@router/REPLACE",(function(e,t){return{path:e,state:t}}))(),go:Object(v.createAction)("@@router/GO",(function(e){return e}))(),goBack:Object(v.createAction)("@@router/GO BACK")(),goForward:Object(v.createAction)("@@router/GO FORWARD")()},k=function(e,t,a){var i=a.history;return e.pipe(Object(p.a)(Object(v.getType)(A.start)),Object(N.a)((function(){return new y.a((function(e){return i.listen((function(t){return e.next(t)}))}))})),Object(h.a)((function(e){return A.internal.locationChanged(e)})))},C=function(e,t,a){var i=a.history;return e.pipe(Object(p.a)(Object(v.getType)(A.push)),Object(f.a)((function(e){var t=e.payload,a=t.path,n=t.state;i.push(a,n)})),Object(w.a)())},M=function(e,t,a){var i=a.history;return e.pipe(Object(p.a)(Object(v.getType)(A.replace)),Object(f.a)((function(e){var t=e.payload,a=t.path,n=t.state;i.replace(a,n)})),Object(w.a)())},T=function(e,t,a){var i=a.history;return e.pipe(Object(p.a)(Object(v.getType)(A.go)),Object(f.a)((function(e){i.go(e.payload)})),Object(w.a)())},S=function(e,t,a){var i=a.history;return e.pipe(Object(p.a)(Object(v.getType)(A.goBack)),Object(f.a)((function(){return i.goBack()})),Object(w.a)())},L=function(e,t,a){var i=a.history;return e.pipe(Object(p.a)(Object(v.getType)(A.goForward)),Object(f.a)((function(){return i.goBack()})),Object(w.a)())},D=Object(b.a)(k,C,M,T,S,L),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(v.getType)(A.internal.locationChanged):return Object(d.a)({},e,{location:t.payload});default:return e}},G=a(50),H=a(84),B=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return{locale:e.locale,router:e.router}})),a=Object(n.useState)(!1),i=Object(G.a)(a,2),r=i[0],o=i[1],c=Object(n.useState)(!1),d=Object(G.a)(c,2),p=d[0],b=d[1],g=Object(m.b)({marginLeft:r?0:-1e3});return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"bg-gray-900 fixed top-0 left-0 text-gray-300 w-full p-6 m-auto z-10 shadow-md"},l.a.createElement("div",{className:"container flex m-auto justify-between sm:px-2 md:px-4 lg:px-8 xl:px-16"},l.a.createElement("div",{className:"flex my-auto"},l.a.createElement("div",{className:"flex sm:hidden"},l.a.createElement("button",{onClick:function(){o(!r),b(!1)},className:"focus:outline-none"},l.a.createElement(s.a,{className:"my-auto hover:text-white"}))),l.a.createElement("div",{className:"flex ml-6 my-auto sm:ml-0"},l.a.createElement(s.f,{className:"my-auto text-xl text-gray-600"}),l.a.createElement("span",{className:"ml-1 font-bold text-white"},"Hansel De La Cruz")),l.a.createElement("div",{className:"hidden ml-12 m-auto sm:block"},l.a.createElement("ul",{className:"text-xs font-bold flex"},l.a.createElement("li",{className:"hover:text-white text-white"},l.a.createElement("span",{className:"border-b-4 border-white px-1"},"Home")),l.a.createElement("li",{className:"ml-6 hover:text-white"},l.a.createElement("span",{className:"px-1"},"Projects")),l.a.createElement("li",{className:"ml-6 hover:text-white"},l.a.createElement("span",{className:"px-1"},"R\xe9sum\xe9"))))),l.a.createElement("button",{onClick:function(){b(!p),o(!1)},className:"focus:outline-none"},l.a.createElement("div",{className:"flex my-auto hover:text-white"},l.a.createElement(s.d,{className:"my-auto"}),l.a.createElement("span",{className:"ml-1 text-xs font-bold uppercase"},t.locale.language))))),l.a.createElement("div",{onClick:function(e){e.target===e.currentTarget&&o(!1)},className:"".concat(r?"block":"hidden"," fixed top-0 left-0 w-full h-full sm:hidden"),style:{backgroundColor:"rgba(0,0,0,0.4)"}},l.a.createElement(m.a.div,{className:"bg-gray-900 pt-24 w-5/12 h-full text-gray-300 shadow-md",style:g},l.a.createElement(H.a,{enabled:r},l.a.createElement("div",null,l.a.createElement("ul",{className:"text-sm font-semibold text-center"},l.a.createElement("li",{className:"hover:text-white text-white"},l.a.createElement("span",{className:"border-b-4 border-white px-1"},"Home")),l.a.createElement("li",{className:"mt-8 hover:text-white"},l.a.createElement("span",{className:"px-1"},"Projects")),l.a.createElement("li",{className:"mt-8 hover:text-white"},l.a.createElement("span",{className:"px-1"},"R\xe9sum\xe9"))))))),l.a.createElement("div",{onClick:function(){b(!1)},className:"".concat(p?"block":"hidden"," fixed top-0 left-0 w-full h-full z-50"),style:{backgroundColor:"rgba(0,0,0,0.85)"}},l.a.createElement(H.a,{enabled:p},l.a.createElement("div",{className:"mt-32 w-3/4 h-auto mx-auto text-white rounded"},l.a.createElement("h1",{className:"font-bold text-lg text-center"},"Choose your preferred language"),l.a.createElement("div",{className:"mt-10 flex justify-center"},l.a.createElement("button",{onClick:function(){e(x.change("en")),b(!1)},className:"border-2 rounded px-6 py-2 hover:bg-gray-100 hover:text-black focus:outline-none"},"English"),l.a.createElement("button",{onClick:function(){e(x.change("es")),b(!1)},className:"ml-6 border-2 rounded px-6 py-2 hover:bg-gray-100 hover:text-black focus:outline-none sm:ml-10"},"Espa\xf1ol"))))))},I=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.locale})),a=Object(u.c)((function(e){return e.router}));Object(n.useEffect)((function(){e(x.start()),e(A.start()),e(A.push("/"))}),[e]);var i=Object(m.b)({opacity:1,number:2020,from:{opacity:0,number:0}});return l.a.createElement("div",{className:"flex flex-col min-h-screen"},l.a.createElement(B,null),l.a.createElement(m.a.main,{className:"container flex-1 mt-20 px-6 break-all",style:i},l.a.createElement("p",{className:"sm:hidden text-red-700 text-center"},"XS"),l.a.createElement("p",{className:"hidden sm:block md:hidden text-blue-700 text-center"},"SM"),l.a.createElement("p",{className:"hidden md:block lg:hidden text-green-700 text-center"},"MD"),l.a.createElement("p",{className:"hidden lg:block xl:hidden text-yellow-700 text-center"},"LG"),l.a.createElement("p",{className:"hidden xl:block text-purple-500 text-center"},"XL"),l.a.createElement("p",null,JSON.stringify(t)),l.a.createElement("p",null,JSON.stringify(a)),l.a.createElement(m.a.span,null,i.number.interpolate((function(e){return Math.floor(e)}))),l.a.createElement("p",null,"Ipsum deserunt nisi eligendi nihil impedit. Atque doloremque nostrum minima iusto delectus voluptas, velit? Minima amet nobis consequatur beatae quis! Quidem ullam voluptatem nobis quasi sequi Reiciendis cumque ducimus sequi perspiciatis quas veniam, nesciunt libero Quidem laudantium nihil corporis iste exercitationem Nisi corrupti minus recusandae velit eius impedit Neque rerum doloribus debitis atque quos? Odit voluptatum exercitationem suscipit at a eius consequuntur! Modi dolorem doloremque odit deserunt laborum Sapiente quidem delectus quibusdam numquam vitae. Perferendis molestiae provident ducimus sunt eos ex Sunt consequuntur perferendis expedita minus error, perferendis consequuntur? Ad doloremque dignissimos soluta aliquid corporis totam Accusantium nulla est unde itaque adipisci nihil eveniet? In dolor nobis voluptates expedita enim. Similique sunt quas dolore nisi eum sunt Similique incidunt at nulla ex quod. Accusantium fuga at aut aperiam maxime, in. Fuga rerum necessitatibus voluptatum debitis recusandae! Libero ea maiores dolorem illum exercitationem quas! Animi esse quae nemo praesentium molestiae rem Quibusdam magni laborum facilis obcaecati harum Repudiandae quo fuga rem error laudantium facere, iusto? Voluptatum rem quae in ullam eaque accusantium. Quibusdam suscipit corrupti dolorem vero pariatur, voluptatem quidem Alias dolorem doloremque possimus laborum blanditiis eligendi. Ipsum quidem accusantium qui esse provident eveniet! Repellat odit doloribus impedit cupiditate doloribus ad porro Autem nostrum ipsa non omnis suscipit dolor ab maiores voluptatem quibusdam aspernatur Velit harum omnis sed accusantium unde eius dicta Beatae nihil velit aliquid temporibus non aspernatur Architecto quo sit laborum minus quasi explicabo deleniti. Alias praesentium numquam provident illum iure! Nulla assumenda impedit maiores assumenda molestias eligendi. Optio explicabo laudantium dolor totam illo. Magni ipsam iure dignissimos fugiat libero facilis. Dolores numquam officiis saepe asperiores ea Labore incidunt qui corrupti quae sunt Perferendis quo culpa amet sint fugit? Quisquam dolor sequi voluptas culpa minus. Alias inventore quo voluptatibus ad earum. Sapiente sapiente esse eaque voluptate et? Nostrum iure vitae necessitatibus vero impedit. Sint culpa cupiditate quas provident recusandae Quisquam ullam totam molestias laboriosam nemo. Modi debitis eius fugit facere dolores, vel Adipisci dolorum expedita mollitia et similique! Excepturi veniam iste a obcaecati veritatis Dolorem vel iste aut dignissimos nam? Pariatur enim voluptatem est soluta tempora recusandae omnis mollitia alias omnis alias! Aut commodi ipsam esse tempore aliquam ex? Voluptate exercitationem optio adipisci quas pariatur fugit! Voluptates nisi iure asperiores quam rerum facilis Repudiandae molestias quasi voluptatem fugiat saepe Facere inventore debitis blanditiis cupiditate numquam Doloribus corrupti nihil reprehenderit aliquam nulla enim, labore! Neque eos inventore itaque cupiditate rem voluptates. Aspernatur nisi vitae ab placeat debitis! Tempore minus numquam tempora quia recusandae? Magnam veritatis vero quam illo aliquam. Omnis nobis praesentium vitae sunt adipisci. Harum enim labore amet quia vel aperiam Vitae praesentium voluptatem perspiciatis architecto qui! Accusamus eveniet sequi mollitia dolore eligendi? Vero earum distinctio assumenda assumenda voluptate odit debitis velit? Est doloribus quod expedita iusto quo, fuga ipsa Voluptas perspiciatis atque magnam unde deleniti ab quod non? Itaque odit distinctio repudiandae ipsam doloremque. Quaerat expedita expedita natus distinctio voluptatem voluptatibus. Vel recusandae voluptatem deleniti molestias quam ut nam Blanditiis numquam doloremque velit repellendus aliquid dignissimos. Quo sequi")),l.a.createElement("footer",{className:"bg-gray-900 mt-4 px-4 py-16 text-white"},l.a.createElement("div",{className:"flex justify-between"},l.a.createElement("div",{className:"text-sm font-semibold"},l.a.createElement("ul",{className:"flex"},l.a.createElement("li",null,"About Me"),l.a.createElement("li",{className:"ml-2"},"Contact"))),l.a.createElement("div",{className:"text-lg"},l.a.createElement("ul",{className:"flex"},l.a.createElement("li",null,l.a.createElement(s.b,null)),l.a.createElement("li",{className:"ml-3"},l.a.createElement(s.e,null)),l.a.createElement("li",{className:"ml-3"},l.a.createElement(s.c,null))))),l.a.createElement("hr",{className:"border-0 border-gray-800 my-8"}),l.a.createElement("div",{className:"w-full text-xs text-gray-300 text-center"},l.a.createElement("span",null,"\xa9 Copyright 2020")," ",l.a.createElement("span",{className:"font-bold"},"Hansel De La Cruz"))))},Q=a(13),V=Object(Q.a)(),z=a(17),P=(a(68),a(69),a(83)),F=a(55),J={history:V,localization:new(a.n(F).a)({en:{language:"Language"},es:{language:"Idioma"}}),localStorage:localStorage},W=Object(b.a)(j,D),U=Object(z.combineReducers)({locale:q,router:R}),X=Object(P.a)({dependencies:J});i=Object(z.createStore)(U,Object(z.applyMiddleware)(X)),X.run(W);var K=i;a(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(u.a,{store:K},l.a.createElement(c.a,{history:V},l.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.c9a3bf45.chunk.js.map