(this["webpackJsonpyarden-peretz-13-5-21"]=this["webpackJsonpyarden-peretz-13-5-21"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},43:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);c(0);var n=c(15),a=c.n(n),i=(c(34),c(14)),s=(c(35),c(17)),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return e.length>0?(e=[],{city:t.city}):{city:t.city};default:return e}},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return e.push(t.city),e;default:return e}},o=Object(s.a)({searchCity:l,addFavoriteCity:r}),d=Object(s.b)(o,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),j=(c(36),c(1)),u=function(){var e=d.getState().addFavoriteCity,t=document.getElementById("fav_list");return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",id:"fav_list",onLoad:void(null!=t&&e.map((function(e){var c=document.createElement("div");c.className="col-sm-4 favorite",c.innerHTML=e.city,document.getElementsByTagName("div"),t.appendChild(c)})))})})},h=c(10),b=function(){var e;return Object(j.jsx)("div",{className:"nav-bar",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("h2",{id:"nav_logo",children:"Weather App"})}),Object(j.jsxs)("li",{className:"nav-btns",children:[Object(j.jsx)(h.b,{id:"favorites_btn",className:"btn btn-primary",to:"/Favorites",children:"FAVORITES"}),Object(j.jsx)(h.b,(e={className:"nav-btns"},Object(i.a)(e,"className","btn btn-primary"),Object(i.a)(e,"id","home_btn"),Object(i.a)(e,"to","/"),Object(i.a)(e,"children","HOME"),e))]})]})})},m=(c(43),c(9)),v=function(e){return{type:"SEARCH",city:e}},O=c(13),x=c.n(O),y="tel aviv",p=[],_=function(e){x.a.get("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl&")).then((function(t){var c=document.getElementById("today_temp");document.getElementById("today").innerText="today",c.innerText=t.data[0].Temperature.Metric.Value,console.log("city key "+e)})).catch((function(e){console.log(e)}))},f="",g=function(){return f},N=function(){var e=Object(m.c)((function(e){return e.city})),t=Object(m.b)(),c="";return Object(j.jsxs)("div",{className:"search_bar",children:[Object(j.jsx)("p",{className:"h4",children:"Search City "}),Object(j.jsx)("input",{type:"text",id:"city_name",value:e,onChange:function(){var e,n=document.getElementById("city_name");f=n.value,""!=(c=n.value)&&(t(v(c)),e=c,x.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl&q=".concat(e)).then((function(e){y=e.data[0].Key,_(y);var t=[];e.data.forEach((function(e){var c=e.LocalizedName;p.push(c),t.push(c)}));for(var c=0;c<p.length;c++)!1===t.includes(p[c])&&p.splice(c,1);console.log("res.data array : "+t)})).catch((function(e){return e}))),""===n.value&&t(v(c=""));var a=document.getElementById("ac_results");p.length>0&&p.map((function(e){var t=document.createElement("option");t.className="city_opt",t.innerHTML=e,a.appendChild(t)})),console.log(p)},className:"form-control"}),Object(j.jsx)("br",{}),Object(j.jsx)("select",{id:"ac_results",onChange:function(){var e=document.getElementById("city_name"),t=document.getElementById("ac_results"),c=t.options[t.selectedIndex].value;f=c,null!=e&&(e.value=c)}})]})},E=(c(62),function(){var e=d.getState();console.log(e)}),C=function(){Object(m.c)((function(e){return e.counter}));var e=Object(m.b)();setInterval((function(){var e=document.getElementById("display_city_name");void 0!=g()&&""!=g()&&null!=g()&&null!=e&&(e.innerText=g())}),500);return Object(j.jsxs)("div",{className:"display_cities",children:[Object(j.jsx)("input",{type:"button",onClick:E,id:"show_store",value:"show_store"}),Object(j.jsx)("div",{className:"top_section",children:Object(j.jsxs)("ul",{className:"top_section_list",children:[Object(j.jsx)("li",{children:Object(j.jsx)("div",{className:"tlv_default",id:"today"})}),Object(j.jsxs)("li",{className:"city_details",children:[Object(j.jsx)("h5",{className:"city_name",id:"display_city_name",children:"Tel Aviv"}),Object(j.jsx)("p",{className:"city_temp",id:"today_temp",children:"38C"})]}),Object(j.jsx)("li",{className:"add_favorites",children:Object(j.jsx)("input",{type:"button",onClick:function(){return function(){var t=d.getState().searchCity;void 0!=t&&""!=t&&t!=g()&&e({type:"ADD_FAVORITE",city:t})}()},className:"btn btn-light",value:"Add Favorite"})})]})}),Object(j.jsx)("h2",{className:"dsc_heading",children:"heading"}),Object(j.jsx)("div",{className:"display_days_and_degrees",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-sm-2 day_box",children:[Object(j.jsx)("h5",{children:"sun"}),Object(j.jsx)("p",{children:"38C"})]}),Object(j.jsxs)("div",{className:"col-sm-2 day_box",children:[Object(j.jsx)("h5",{children:"mon"}),Object(j.jsx)("p",{children:"38C"})]}),Object(j.jsxs)("div",{className:"col-sm-2 day_box",children:[Object(j.jsx)("h5",{children:"tue"}),Object(j.jsx)("p",{children:"38C"})]}),Object(j.jsxs)("div",{className:"col-sm-2 day_box",children:[Object(j.jsx)("h5",{children:"wed"}),Object(j.jsx)("p",{children:"38C"})]}),Object(j.jsxs)("div",{className:"col-sm-2 day_box",children:[Object(j.jsx)("h5",{children:"thu"}),Object(j.jsx)("p",{children:"38C"})]})]})})]})},w=c(3);var I=function(){return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)(h.a,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(N,{path:"/",component:Object(w.e)(N)}),Object(j.jsxs)(w.b,{children:[Object(j.jsx)(u,{path:"/Favorites"}),Object(j.jsx)(C,{exact:!0,path:"/",component:Object(w.e)(C)})]})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};a.a.render(Object(j.jsx)(m.a,{store:d,children:Object(j.jsx)(I,{})}),document.getElementById("root")),T()}},[[63,1,2]]]);
//# sourceMappingURL=main.f0f47765.chunk.js.map