(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(14),n=a.n(c),r=(a(35),a(12)),o=a(3),l=(a(36),a(37),a(16)),j=(a(38),a(0)),d=Object(i.createContext)(),m=function(e){var t=e.reducer,a=e.initialState,s=e.children;return Object(j.jsx)(d.Provider,{value:Object(i.useReducer)(t,a),children:s})},h=function(){return Object(i.useContext)(d)};var _=function(e){var t=e.id,a=e.title,i=e.image,s=e.price,c=e.rating,n=h(),r=Object(l.a)(n,2),o=(r[0].basket,r[1]);return Object(j.jsxs)("div",{className:"product",children:[Object(j.jsxs)("div",{className:"product__info",children:[Object(j.jsx)("p",{children:a}),Object(j.jsxs)("p",{className:"product__price",children:[Object(j.jsx)("small",{children:"$"}),Object(j.jsx)("strong",{children:s})]}),Object(j.jsx)("div",{className:"product__rating",children:Array(c).fill().map((function(e,t){return Object(j.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(j.jsx)("img",{src:i,alt:""}),Object(j.jsx)("button",{onClick:function(){o({type:"ADD_TO_BASKET",item:{id:t,title:a,image:i,price:s,rating:c}})},children:"Add to Basket"})]})};var b=function(){return Object(j.jsx)("div",{className:"home",children:Object(j.jsxs)("div",{className:"home__container",children:[Object(j.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(j.jsxs)("div",{className:"home__row",children:[Object(j.jsx)(_,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(j.jsx)(_,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(j.jsxs)("div",{className:"home__row",children:[Object(j.jsx)(_,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(j.jsx)(_,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(j.jsx)(_,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(j.jsx)("div",{className:"home__row",children:Object(j.jsx)(_,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},p=(a(40),a(26)),O=a.n(p),g=a(28),u=a.n(g);var x=function(){var e=h(),t=Object(l.a)(e,2),a=t[0],i=a.basket;return a.user,t[1],Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(j.jsxs)("div",{className:"header__search",children:[Object(j.jsx)("input",{className:"header__searchInput",type:"text"}),Object(j.jsx)(O.a,{className:"header__searchIcon"})]}),Object(j.jsxs)("div",{className:"header__nav",children:[Object(j.jsxs)("div",{className:"header__option",children:[Object(j.jsx)("span",{className:"header__optionLineOne",children:"Hello Guest"}),Object(j.jsx)("span",{className:"header__optionLineTwo",children:"Sign in"})]}),Object(j.jsxs)("div",{className:"header__option",children:[Object(j.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(j.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(j.jsxs)("div",{className:"header__option",children:[Object(j.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(j.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(j.jsx)(r.b,{to:"/checkout",children:Object(j.jsxs)("div",{className:"header__optionBasket",children:[Object(j.jsx)(u.a,{}),Object(j.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===i||void 0===i?void 0:i.length})]})})]})]})};var v=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(o.c,{children:Object(j.jsxs)(o.a,{path:"/",children:[Object(j.jsx)(x,{}),Object(j.jsx)(b,{})]})})})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),c(e),n(e)}))},S=a(29),f=a(21),C=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(f.a)(Object(f.a)({},e),{},{basket:[].concat(Object(S.a)(e.basket),[t.item])});default:return e}};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{initialState:{basket:[],user:null},reducer:C,children:Object(j.jsx)(v,{})})}),document.getElementById("root")),N()}},[[57,1,2]]]);
//# sourceMappingURL=main.7e68570c.chunk.js.map