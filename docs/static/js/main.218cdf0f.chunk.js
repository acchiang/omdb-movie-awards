(this["webpackJsonpomdb-movie-awards"]=this["webpackJsonpomdb-movie-awards"]||[]).push([[0],{49:function(e,a,t){e.exports=t(61)},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),o=t.n(r),c=(t(54),t(23)),l=(t(55),t(56),t(117));var m=function(e){var a=e.searchInput,t=e.setSearchInput,r=Object(n.useCallback)((function(e){t(e.target.value)}),[t]);return i.a.createElement("div",{id:"search-bar"},i.a.createElement(l.a,{id:"outlined-basic",label:"Search movie title",variant:"outlined",fullWidth:!0,value:a,onChange:r}))},u=t(41),d=t(107),s=t(111),h=t(110),v=t(106),f=t(108),E=t(109),b=t(105),p=t(64);t(60);var g=function(e){var a=e.searchInput,t=e.nominationData,r=e.setNominationData,o=i.a.useState(),l=Object(c.a)(o,2),m=l[0],g=l[1],w=i.a.useState(1),k=Object(c.a)(w,2),y=k[0],N=k[1],j=[{id:"Title",label:"Title",minWidth:250},{id:"Year",label:"Year",minWidth:50},{id:"Nominate",label:"Nominate",minWidth:50}];Object(n.useEffect)((function(){0!==a.length&&fetch("https://www.omdbapi.com/?s=".concat(a,"&type=movie&page=").concat(y,"&apikey=7faf4e64"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return g(e.Search)})).catch((function(e){return console.log(e)}))}),[y,a]);var C=Object(n.useMemo)((function(){var e=[];return null!=m&&m.forEach((function(a){e.push(function(e){var a=e.Title,n=e.Year,o=i.a.createElement(p.a,{onClick:function(){var e=!0;t.forEach((function(t,n){if(t.Title===a&&e)return window.alert("You already nominated this movie!"),void(e=!1)})),e&&(t.length>=5?window.alert("You can only nominate up to 5 movies. Remove one to add another."):r([].concat(Object(u.a)(t),[{Title:a,Year:n}])))}},"Nominate");return{Title:a,Year:n,Nominate:o}}(a))})),e}),[m,t,r]);return i.a.createElement("div",{id:"tableContainer"},i.a.createElement("div",{id:"paginator"},i.a.createElement(b.a,{variant:"contained"},i.a.createElement(p.a,{disabled:1===y,onClick:function(){N(y-1)}},"Prev"),i.a.createElement(p.a,{onClick:function(){N(y+1)},disabled:null==m||0===m.length},"Next"))),i.a.createElement(v.a,null,i.a.createElement(d.a,{stickyHeader:!0,size:"small","aria-label":"sticky table"},i.a.createElement(f.a,null,i.a.createElement(E.a,null,j.map((function(e){return i.a.createElement(h.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),i.a.createElement(s.a,null,C.map((function(e){return i.a.createElement(E.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},j.map((function(a){var t=e[a.id];return i.a.createElement(h.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))))},w=t(113),k=t(114),y=t(116),N=t(115),j=t(112),C=Object(j.a)({cardContainer:{paddingLeft:20,paddingBottom:20}});var O=function(e){var a=e.nominationData,t=e.setNominationData,r=C(),o=function(e){var n=e.Title,o=e.Year;return i.a.createElement("div",{className:r.cardContainer},i.a.createElement(w.a,null,i.a.createElement(k.a,null,i.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},n,", ",o)),i.a.createElement(y.a,null,i.a.createElement(p.a,{size:"small",onClick:function(){t(a.filter((function(e){return e.Title!==n})))}},"Remove"))))};return Object(n.useMemo)((function(){return i.a.createElement("div",{id:"nominationCards"},a.map((function(e,a){return i.a.createElement(o,{Title:e.Title,Year:e.Year})})))}),[a])},S=t(62);var T=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)([]),l=Object(c.a)(o,2),u=l[0],d=l[1],s=i.a.createElement("div",{className:"Search"},i.a.createElement(N.a,{variant:"h3",component:"h3"},"The Shoppies"),i.a.createElement(m,{searchInput:t,setSearchInput:r}));return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"headerContainer"},i.a.createElement(S.a,{elevation:3,children:s})),i.a.createElement("div",{className:"bodyContainer"},i.a.createElement("div",{className:"tableContainer"},i.a.createElement(S.a,{elevation:3,children:i.a.createElement(g,{searchInput:t,nominationData:u,setNominationData:d})})),i.a.createElement("div",null,i.a.createElement(O,{nominationData:u,setNominationData:d}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.218cdf0f.chunk.js.map