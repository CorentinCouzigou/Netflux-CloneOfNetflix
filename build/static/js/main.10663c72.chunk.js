(this.webpackJsonpnetflux=this.webpackJsonpnetflux||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(25),i=c.n(s),o=(c(61),c(6)),l=(c(62),c(63),c(43)),r=c.n(l),j=c(44),d=c.n(j),b=c(45),h=c.n(b),u=c(46),f=c.n(u),v=c(1);var _=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),l=i[0],j=i[1],b=function(){window.scrollY>100?n(!0):n(!1)};return Object(a.useState)((function(){document.addEventListener("scroll",b)})),Object(v.jsxs)("div",{className:"nav ".concat(c||l?"nav--black":"nav--transparent"," ").concat(l&&"show"),children:[Object(v.jsx)("div",{className:"nav__burger",onClick:function(){j(!l)},children:Object(v.jsx)(r.a,{})}),Object(v.jsx)("span",{className:"nav__logo",children:"Netflux"}),Object(v.jsxs)("nav",{className:"nav__links",children:[Object(v.jsx)("a",{href:"/",className:"nav__link",children:"Accueil"}),Object(v.jsx)("a",{href:"/",className:"nav__link",children:"S\xe9ries"}),Object(v.jsx)("a",{href:"/",className:"nav__link",children:"Films"})]}),Object(v.jsxs)("div",{className:"nav__actions",children:[Object(v.jsx)("a",{href:"/",className:"nav__action",children:Object(v.jsx)(d.a,{})}),Object(v.jsx)("a",{href:"/",className:"nav__action",children:"DIRECT"}),Object(v.jsx)("a",{href:"/",className:"nav__action",children:Object(v.jsx)(h.a,{})}),Object(v.jsx)("a",{href:"/",className:"nav__action",children:Object(v.jsx)(f.a,{})}),Object(v.jsx)("a",{href:"/",className:"nav__action",children:Object(v.jsx)("img",{className:"nav__img",src:"../../images/avatar.jpg",alt:"logo avatar"})})]})]})},O=(c(71),c(47)),m=c.n(O),x=c(48),p=c.n(x),g=c(49),N=c.n(g),k=c(50),w=c.n(k),y=c.p+"static/media/tmdb-logo.da3f379f.svg";var S=function(){return Object(v.jsx)("footer",{className:"footer",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"footer__socials",children:[Object(v.jsx)("a",{href:"/",className:"footer__social",children:Object(v.jsx)(m.a,{})}),Object(v.jsx)("a",{href:"/",className:"footer__social",children:Object(v.jsx)(p.a,{})}),Object(v.jsx)("a",{href:"/",className:"footer__social",children:Object(v.jsx)(N.a,{})}),Object(v.jsx)("a",{href:"/",className:"footer__social",children:Object(v.jsx)(w.a,{})})]}),Object(v.jsxs)("ul",{className:"footer__links",children:[Object(v.jsx)("li",{className:"footer__link",children:Object(v.jsx)("a",{href:"/",children:"lien footer"})}),Object(v.jsx)("li",{className:"footer__link",children:Object(v.jsx)("a",{href:"/",children:"lien footer"})}),Object(v.jsx)("li",{className:"footer__link",children:Object(v.jsx)("a",{href:"/",children:"lien footer"})}),Object(v.jsx)("li",{className:"footer__link",children:Object(v.jsx)("a",{href:"/",children:"lien footer"})}),Object(v.jsx)("li",{className:"footer__link",children:Object(v.jsx)("a",{href:"/",children:"lien footer"})}),"       ",Object(v.jsx)("li",{className:"footer__link",children:Object(v.jsx)("a",{href:"/",children:"lien footer"})}),Object(v.jsx)("li",{className:"footer__link",children:Object(v.jsx)("a",{href:"/",children:"lien footer"})}),"       ",Object(v.jsx)("li",{className:"footer__link",children:Object(v.jsx)("a",{href:"/",children:"lien footer"})})]}),Object(v.jsxs)("div",{className:"footer_copy",children:[Object(v.jsx)("span",{children:"Netflix Clone - Netflix tous droits r\xe9serv\xe9s et source TMDB"}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{children:Object(v.jsx)("a",{href:"https://www.themoviedb.org/",children:Object(v.jsx)("img",{className:"footer__span",src:y,alt:"logo tmdb"})})})]})]})})},T=c(16),C=c.n(T),E=c(19),M=(c(73),c(53)),P=c.n(M),U=c(54),D=c.n(U),R=c(20),A=c.n(R),F="70c6fa38777297717f3964356e97a7bf";console.log("string");var L="https://api.themoviedb.org/3",q={fetchTrending:"".concat(L,"/discover/movie?api_key=").concat(F,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"),fetchNetflixOriginals:"".concat(L,"/trending/all/week?api_key=").concat(F),fetchTopRated:"".concat(L,"/discover/movie?api_key=").concat(F,"&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"),fetchActionMovies:"".concat(L,"/discover/movie?api_key=").concat(F,"&with_genres=28"),fetchComedyMovies:"".concat(L,"/discover/movie?api_key=").concat(F,"&with_genres=35"),fetcHorrorMovies:"".concat(L,"/discover/movie?api_key=").concat(F,"&with_genres=27"),fetchRomanceMovies:"".concat(L,"/discover/movie?api_key=").concat(F,"&with_genres=10749"),fetchDocumentaries:"".concat(L,"/discover/movie?api_key=").concat(F,"&with_genres=99")},V=(c(92),c(51)),B=c.n(V);var H=function(e){var t=e.bannerStyle,c=e.movie,a=e.handleClickPopup,n=e.popupStatut;return console.log("movie",c),Object(v.jsx)("div",{className:"quickView ".concat(n&&"open"),children:Object(v.jsxs)("div",{className:"quickView__banner",children:[Object(v.jsx)("img",{className:"quickView__banner__image",src:t,alt:"presentation quick vue"}),Object(v.jsxs)("div",{className:"quickView__content",children:[Object(v.jsx)("h3",{className:"quickView__title",children:(null===c||void 0===c?void 0:c.title)||(null===c||void 0===c?void 0:c.name)||(null===c||void 0===c?void 0:c.original_title)}),Object(v.jsx)("p",{children:null===c||void 0===c?void 0:c.overview})]}),Object(v.jsx)("button",{className:"quickView__close",onClick:a,children:Object(v.jsx)(B.a,{})})]})})},K=c(17);var I=function(e){var t=e.imageLoaded,c=Object(a.useState)({}),n=Object(o.a)(c,2),s=n[0],i=n[1],l=Object(a.useState)(!1),r=Object(o.a)(l,2),j=r[0],d=r[1];function b(){d(!j)}Object(a.useEffect)((function(){function e(){return(e=Object(E.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get(q.fetchTrending);case 2:t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h,u,f="https://image.tmdb.org/t/p/original/".concat(null===s||void 0===s?void 0:s.backdrop_path);return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"banner",children:[Object(v.jsx)("img",{onLoad:t,className:"banner__image",src:f,alt:"banner pr\xe9sentation"}),Object(v.jsxs)("div",{className:"banner__content",children:[Object(v.jsx)("h1",{className:"banner__title",children:(null===s||void 0===s?void 0:s.name)||(null===s||void 0===s?void 0:s.title)||(null===s||void 0===s?void 0:s.original_title)}),Object(v.jsx)("p",{className:"banner__description",children:(h=null===s||void 0===s?void 0:s.overview,u=100,h?h.substr(0,u-1)+"...":"No description")}),Object(v.jsxs)("div",{className:"banner__buttons",children:[Object(v.jsx)(K.b,{to:"/video/".concat(null===s||void 0===s?void 0:s.id),children:Object(v.jsxs)("button",{className:"banner__button banner__button--play",children:[" ",Object(v.jsx)(P.a,{}),"Lecture"]})}),Object(v.jsxs)("button",{className:"banner__button",onClick:b,children:[Object(v.jsx)(D.a,{}),"Plus d'infos"]})]})]}),Object(v.jsx)(H,{bannerStyle:f,movie:s,handleClickPopup:b,popupStatut:j})]})})};c(97);var W=function(){return Object(v.jsx)("div",{className:"loading",children:Object(v.jsxs)("div",{className:"round",children:[Object(v.jsx)("div",{className:"line__up"}),Object(v.jsx)("div",{className:"line__middle"}),Object(v.jsx)("div",{className:"line__down"})]})})};c(98);function z(e){var t=e.title,c=e.fetchUrl,n=e.isPoster,s="https://image.tmdb.org/t/p/original",i=Object(a.useState)([]),l=Object(o.a)(i,2),r=l[0],j=l[1];return Object(a.useEffect)((function(){function e(){return(e=Object(E.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get(c);case 2:t=e.sent,console.log("resultMovies",t.data.results),j(t.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("h2",{className:"row__tile",children:t}),Object(v.jsx)("div",{className:"row__images",children:r.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(K.b,{to:"/video/".concat(e.id),children:n?Object(v.jsx)("img",{src:"".concat(s).concat(e.poster_path),className:"row__image",alt:(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_title)}):Object(v.jsx)("img",{src:"".concat(s).concat(e.backdrop_path),className:"row__image",alt:(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_title)})})},e.id)}))})]})})}z.defaultProps={isPoster:!1};var J=z,Y=c(5);c(99);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_TMDBKEY:"70c6fa38777297717f3964356e97a7bf"})),console.log("70c6fa38777297717f3964356e97a7bf");var G=function(){var e=Y.f.apply().id,t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){function t(){return(t=Object(E.a)(C.a.mark((function t(){var c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("http://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("70c6fa38777297717f3964356e97a7bf","&append_to_response=videos"));case 2:c=t.sent,s(c.data.videos.results[0].key),console.log("resultmovie",c.data.videos.results[0].key);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()})),Object(v.jsx)("div",{className:"video",children:Object(v.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n),title:"video",frameBorder:"0",allowFullScreen:!0})})};var Q=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useRef)(0);return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(K.a,{children:Object(v.jsxs)(Y.c,{children:[Object(v.jsxs)(Y.a,{exact:!0,path:"/",children:[Object(v.jsx)("div",{style:{display:c?"block":"none"},children:Object(v.jsx)(W,{})}),Object(v.jsxs)("div",{style:{display:c?"none":"block"},children:[Object(v.jsx)(_,{}),Object(v.jsx)(I,{imageLoaded:function(){s.current+=1,s.current>0&&n(!1)}}),Object(v.jsx)(J,{title:"Programmes originaux Netflux",fetchUrl:q.fetchNetflixOriginals,isPoster:!0}),Object(v.jsx)(J,{title:"Tendances actuelles",fetchUrl:q.fetchTrending}),Object(v.jsx)(J,{title:"Les mieux not\xe9s",fetchUrl:q.fetchTopRated}),Object(v.jsx)(J,{title:"Films d'action",fetchUrl:q.fetchActionMovies}),Object(v.jsx)(J,{title:"Com\xe9dies",fetchUrl:q.fetchComedyMovies}),Object(v.jsx)(J,{title:"Films d'horreurs",fetchUrl:q.fetcHorrorMovies}),Object(v.jsx)(J,{title:"Documentaires",fetchUrl:q.fetchDocumentaries}),Object(v.jsx)(S,{})]})]}),Object(v.jsx)(Y.a,{path:"/video/:id",component:G}),Object(v.jsx)(Y.a,{path:"/"})]})})})};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root"))},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){},92:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.10663c72.chunk.js.map