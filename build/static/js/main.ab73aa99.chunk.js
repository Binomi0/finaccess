(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,r){e.exports=r(76)},44:function(e,t,r){},76:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(18),i=r.n(c),o=(r(44),r(78)),s=r(79),u=r(80),l=r(32),m=r.n(l),p=r(11),h=r(12),v=r(14),f=r(13),d=r(15),b=function(e){function t(){return Object(p.a)(this,t),Object(v.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,"P\xe1gina no encontrada prueba"," ",n.a.createElement("a",{href:"/app/search",target:"_self"},"aqu\xed"))}}]),t}(a.Component),g=r(2),y=r.n(g),w=r(5),k=r(36),I=r(3),R=r(4);function E(){var e=Object(I.a)(["\n  padding: 0.2rem 0.7rem;\n  font-size: 26px;\n  background: cornflowerblue;\n"]);return E=function(){return e},e}function O(){var e=Object(I.a)(["\n  padding: 0.5rem;\n  font-size: 1.2rem;\n"]);return O=function(){return e},e}function U(){var e=Object(I.a)(["\n  height: 100px;\n  padding: 2rem auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return U=function(){return e},e}var x=R.a.div(U()),j=R.a.input(O()),_=R.a.button(E()),A=function(e){var t=e.handleChange,r=Object(a.useState)("Thor"),c=Object(k.a)(r,2),i=c[0],o=c[1];return n.a.createElement(x,null,n.a.createElement(j,{name:"heroe",type:"text",value:i,onChange:function(e){var t=e.target;return o(t.value)}}),n.a.createElement(_,{onClick:function(){return t(i)}},n.a.createElement("span",{role:"img","aria-label":"magnifier"},"\ud83d\udd0d")))},M=r(38);function N(){var e=Object(I.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n  padding: 0 1rem;\n"]);return N=function(){return e},e}function C(){var e=Object(I.a)(["\n  padding: 0;\n  img {\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n  }\n\n  h4,\n  p {\n    padding: 0 1rem;\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(I.a)(["\n  background-color: ",";\n  color: ",";\n  width: 100%;\n  cursor: pointer;\n"]);return S=function(){return e},e}var X=R.a.div(S(),function(e){return e.selected?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.8)"},function(e){return e.selected?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"}),T=R.a.div(C()),H=R.a.div(N());function G(){var e=Object(I.a)(["\n  width: 100%;\n\n  h4 {\n    line-height: 0.9rem;\n  }\n\n  p {\n    font-size: 0.5rem;\n  }\n"]);return G=function(){return e},e}var z=R.a.div(G()),P=function(e){var t=e.comic,r=t.resourceURI,a=t.name;return n.a.createElement(z,null,n.a.createElement("p",{key:r},a))},V=function(e){var t=e.comics;return n.a.createElement(z,null,n.a.createElement("h4",null,"Comics"),t.items.map(function(e,t){return t<=2?n.a.createElement(P,{key:e.resourceURI,comic:e}):null}))};function D(){var e=Object(I.a)(["\n  width: 100%;\n\n  h4 {\n    line-height: 0.9rem;\n  }\n\n  p {\n    font-size: 0.5rem;\n  }\n"]);return D=function(){return e},e}var L=R.a.div(D()),W=function(e){var t=e.serie,r=t.resourceURI,a=t.name;return n.a.createElement(L,{key:r},a)},B=function(e){var t=e.series;return n.a.createElement(L,null,n.a.createElement("h4",null,"Series"),t.items.length&&t.items.map(function(e,t){return t<=2?n.a.createElement(W,{key:e.resourceURI,serie:e}):null}))};function q(){var e=Object(I.a)(["\n  width: 100%;\n\n  h4 {\n    line-height: 0.9rem;\n  }\n\n  p {\n    font-size: 0.5rem;\n  }\n"]);return q=function(){return e},e}function J(){var e=Object(I.a)(["\n  width: 100%;\n\n  h4 {\n    line-height: 0.9rem;\n  }\n\n  p {\n    font-size: 0.5rem;\n  }\n"]);return J=function(){return e},e}var $=R.a.div(J()),F=R.a.div(q()),K=function(e){var t=e.storie,r=t.resourceURI,a=t.name;return n.a.createElement($,null,n.a.createElement("p",{key:r},a))},Q=function(e){var t=e.stories;return n.a.createElement(F,null,n.a.createElement("h4",null,"Stories"),t.items.map(function(e,t){return t<=2?n.a.createElement(K,{key:e.resourceURI,storie:e}):null}))},Y=function(e){function t(){var e,r;Object(p.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(v.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state=Object(M.a)({},r.props.character,{selected:null}),r}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.selected!==this.state.selected&&this.setState({selected:e.selected})}},{key:"render",value:function(){var e=this.props,t=e.handleClick,r=e.idx,a=this.state,c=a.comics,i=a.stories,o=a.series,s=a.name,u=a.selected,l=a.description,m=a.thumbnail,p=m.path,h=m.extension,v="".concat(p,".").concat(h);return n.a.createElement(X,{onClick:function(){return t(r)},selected:u},n.a.createElement(T,null,n.a.createElement("img",{src:v,alt:"character"}),n.a.createElement("h4",null,"Nombre: ",s),n.a.createElement("p",null,"Descripci\xf3n:"," ",l||"Ups! Parece que no he encontrado una descripci\xf3n...")),n.a.createElement(H,null,n.a.createElement(V,{comics:c}),n.a.createElement(Q,{stories:i}),n.a.createElement(B,{series:o})))}}]),t}(n.a.Component),Z=r(7),ee=r.n(Z),te=r(8),re=r.n(te),ae="2b338eb5f577d71ecf79c2347a55dc75",ne="limit=".concat(12),ce={attributionHTML:'<a href="http://marvel.com">Data provided by Marvel. \xa9 2019 MARVEL</a>',attributionText:"Data provided by Marvel. \xa9 2019 MARVEL",code:200,copyright:"\xa9 2019 MARVEL",data:{count:3,limit:3,offset:66,results:[{comics:{available:21,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/comics",items:[{name:"Astonishing X-Men (2004) #25",resourceURI:"http://gateway.marvel.com/v1/public/comics/21511"},{name:"Astonishing X-Men (2004) #26",resourceURI:"http://gateway.marvel.com/v1/public/comics/21714"},{name:"Astonishing X-Men (2004) #27",resourceURI:"http://gateway.marvel.com/v1/public/comics/21941"}],returned:20},description:"",events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/events",items:[],returned:0},id:1011298,modified:"1969-12-31T19:00:00-0500",name:"Armor (Hisako Ichiki)",resourceURI:"http://gateway.marvel.com/v1/public/characters/1011298",series:{available:3,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/series",items:[{name:"Astonishing X-Men (2004 - 2013)",resourceURI:"http://gateway.marvel.com/v1/public/series/744"},{name:"Cable (2017 - Present)",resourceURI:"http://gateway.marvel.com/v1/public/series/22386"},{name:"Cable Vol. 2: The Newer Mutants (2018)",resourceURI:"http://gateway.marvel.com/v1/public/series/22480"}],returned:3},stories:[{available:3,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/stories",items:[{name:"ASTONISHING X-MEN (2004) #25",resourceURI:"http://gateway.marvel.com/v1/public/stories/47427",type:"cover"},{name:"ASTONISHING X-MEN (2004) #26",resourceURI:"http://gateway.marvel.com/v1/public/stories/47735",type:"cover"},{name:"ASTONISHING X-MEN (2004) #27",resourceURI:"http://gateway.marvel.com/v1/public/stories/48233",type:"cover"}],returned:3}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c002e6cbf990",extension:"jpg"},urls:[{type:"detail",url:"http://marvel.com/comics/characters/1011298/armor_hisako_ichiki?utm_campaign=apiRef&utm_source=2b338eb5f577d71ecf79c2347a55dc75"},{type:"wiki",url:"http://marvel.com/universe/Armor_(Hisako_Ichiki)?utm_campaign=apiRef&utm_source=2b338eb5f577d71ecf79c2347a55dc75"},{type:"comiclink",url:"http://marvel.com/comics/characters/1011298/armor_hisako_ichiki?utm_campaign=apiRef&utm_source=2b338eb5f577d71ecf79c2347a55dc75"}]},{comics:{available:21,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/comics",items:[{name:"Astonishing X-Men (2004) #25",resourceURI:"http://gateway.marvel.com/v1/public/comics/21511"},{name:"Astonishing X-Men (2004) #26",resourceURI:"http://gateway.marvel.com/v1/public/comics/21714"},{name:"Astonishing X-Men (2004) #27",resourceURI:"http://gateway.marvel.com/v1/public/comics/21941"}],returned:20},description:"",events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/events",items:[],returned:0},id:1011297,modified:"1969-12-31T19:00:00-0500",name:"Armor (Hisako Ichiki)",resourceURI:"http://gateway.marvel.com/v1/public/characters/1011298",series:{available:3,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/series",items:[{name:"Astonishing X-Men (2004 - 2013)",resourceURI:"http://gateway.marvel.com/v1/public/series/744"},{name:"Cable (2017 - Present)",resourceURI:"http://gateway.marvel.com/v1/public/series/22386"},{name:"Cable Vol. 2: The Newer Mutants (2018)",resourceURI:"http://gateway.marvel.com/v1/public/series/22480"}],returned:3},stories:[{available:3,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/stories",items:[{name:"ASTONISHING X-MEN (2004) #25",resourceURI:"http://gateway.marvel.com/v1/public/stories/47427",type:"cover"},{name:"ASTONISHING X-MEN (2004) #26",resourceURI:"http://gateway.marvel.com/v1/public/stories/47735",type:"cover"},{name:"ASTONISHING X-MEN (2004) #27",resourceURI:"http://gateway.marvel.com/v1/public/stories/48233",type:"cover"}],returned:3}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c002e6cbf990",extension:"jpg"},urls:[{type:"detail",url:"http://marvel.com/comics/characters/1011298/armor_hisako_ichiki?utm_campaign=apiRef&utm_source=2b338eb5f577d71ecf79c2347a55dc75"},{type:"wiki",url:"http://marvel.com/universe/Armor_(Hisako_Ichiki)?utm_campaign=apiRef&utm_source=2b338eb5f577d71ecf79c2347a55dc75"},{type:"comiclink",url:"http://marvel.com/comics/characters/1011298/armor_hisako_ichiki?utm_campaign=apiRef&utm_source=2b338eb5f577d71ecf79c2347a55dc75"}]},{comics:{available:21,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/comics",items:[{name:"Astonishing X-Men (2004) #25",resourceURI:"http://gateway.marvel.com/v1/public/comics/21511"},{name:"Astonishing X-Men (2004) #26",resourceURI:"http://gateway.marvel.com/v1/public/comics/21714"},{name:"Astonishing X-Men (2004) #27",resourceURI:"http://gateway.marvel.com/v1/public/comics/21941"}],returned:20},description:"",events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/events",items:[],returned:0},id:1011296,modified:"1969-12-31T19:00:00-0500",name:"Armor (Hisako Ichiki)",resourceURI:"http://gateway.marvel.com/v1/public/characters/1011298",series:{available:3,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/series",items:[{name:"Astonishing X-Men (2004 - 2013)",resourceURI:"http://gateway.marvel.com/v1/public/series/744"},{name:"Cable (2017 - Present)",resourceURI:"http://gateway.marvel.com/v1/public/series/22386"},{name:"Cable Vol. 2: The Newer Mutants (2018)",resourceURI:"http://gateway.marvel.com/v1/public/series/22480"}],returned:3},stories:[{available:3,collectionURI:"http://gateway.marvel.com/v1/public/characters/1011298/stories",items:[{name:"ASTONISHING X-MEN (2004) #25",resourceURI:"http://gateway.marvel.com/v1/public/stories/47427",type:"cover"},{name:"ASTONISHING X-MEN (2004) #26",resourceURI:"http://gateway.marvel.com/v1/public/stories/47735",type:"cover"},{name:"ASTONISHING X-MEN (2004) #27",resourceURI:"http://gateway.marvel.com/v1/public/stories/48233",type:"cover"}],returned:3}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c002e6cbf990",extension:"jpg"},urls:[{type:"detail",url:"http://marvel.com/comics/characters/1011298/armor_hisako_ichiki?utm_campaign=apiRef&utm_source=2b338eb5f577d71ecf79c2347a55dc75"},{type:"wiki",url:"http://marvel.com/universe/Armor_(Hisako_Ichiki)?utm_campaign=apiRef&utm_source=2b338eb5f577d71ecf79c2347a55dc75"},{type:"comiclink",url:"http://marvel.com/comics/characters/1011298/armor_hisako_ichiki?utm_campaign=apiRef&utm_source=2b338eb5f577d71ecf79c2347a55dc75"}]}],total:3},etag:"eaa98eb278c077f42054edf36dbdd41264de8ff9",status:"Ok"},ie={params:{apikey:ae}},oe={params:{apikey:ae}},se={params:{apikey:ae}},ue={comics:{getComics:function(e){return new re.a(function(){var t=Object(w.a)(y.a.mark(function t(r,a){var n,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee()(e,ie);case 3:n=t.sent,c=n.data,r(c.data.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),a(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())},getComic:function(e){return new re.a(function(){var t=Object(w.a)(y.a.mark(function t(r,a){var n,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee()(e,ie);case 3:n=t.sent,c=n.data,r(c.data.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),a(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())}},characters:{getCharacters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Thor";return new re.a(function(){var t=Object(w.a)(y.a.mark(function t(r,a){var n,c,i;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat("https://gateway.marvel.com/v1/public/characters","?apikey=").concat(ae,"&").concat(ne,"&nameStartsWith=").concat(e),t.next=4,ee()(n);case 4:c=t.sent,i=c.data,r(i.data.results),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),a(ce.data.results);case 13:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,r){return t.apply(this,arguments)}}())},getCharacter:function(e){return new re.a(function(){var t=Object(w.a)(y.a.mark(function t(r,a){var n,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee()("".concat(e,"?apikey=").concat(ae));case 3:n=t.sent,c=n.data,r(c.data.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),a(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())}},series:{getSeries:function(e){return new re.a(function(){var t=Object(w.a)(y.a.mark(function t(r,a){var n,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee()(e,oe);case 3:n=t.sent,c=n.data,r(c.data.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),a(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())},getSerie:function(e){return new re.a(function(){var t=Object(w.a)(y.a.mark(function t(r,a){var n,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee()(e,oe);case 3:n=t.sent,c=n.data,r(c.data.results[0]),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),a(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())}},stories:{getStories:function(e){return new re.a(function(){var t=Object(w.a)(y.a.mark(function t(r,a){var n,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee()(e,se);case 3:n=t.sent,c=n.data,r(c.data.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),a(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())},getStorie:function(e){return new re.a(function(){var t=Object(w.a)(y.a.mark(function t(r,a){var n,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee()(e,se);case 3:n=t.sent,c=n.data,r(c.data.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),a(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())}}};function le(){var e=Object(I.a)(["\n  align-items: center;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 0;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.6);\n"]);return le=function(){return e},e}function me(){var e=Object(I.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n  opacity: ",";\n  transition: opacity 1.2s ease-in-out;\n"]);return me=function(){return e},e}var pe=R.a.div(me(),function(e){return e.active}),he=R.a.h1(le()),ve=function(e){function t(){var e,r;Object(p.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(v.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={characters:[],selectedIndex:0},r.handleClick=function(e){r.setState({selectedIndex:e})},r.handleChange=function(e){r.getCharacters(e)},r.getCharacters=function(){var e=Object(w.a)(y.a.mark(function e(t){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.characters.getCharacters(t);case 2:a=e.sent,r.setState({characters:a});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),r}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"render",value:function(){var e=this,t=this.state,r=t.characters,a=t.selectedIndex;return n.a.createElement("div",null,n.a.createElement(he,null,"Buscador de Heroes de Marvel"),n.a.createElement(A,{handleChange:this.handleChange}),n.a.createElement(pe,{active:r.length&&1},r.map(function(t,r){return n.a.createElement(Y,{key:t.id,character:t,handleClick:e.handleClick,selected:a===r,idx:r})})))}}]),t}(a.Component),fe=m()(),de=function(){return n.a.createElement(o.a,{history:fe},n.a.createElement(s.a,null,n.a.createElement(u.a,{path:"/",render:function(){return n.a.createElement(ve,null)}}),n.a.createElement(u.a,{path:"*",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.ab73aa99.chunk.js.map