(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),c=a.n(r),l=(a(25),a(13)),o=a(14),u=a(17),s=a(15),h=a(2),d=a(18),m=a(16),g=a.n(m);var p=function(e){return i.a.createElement("div",null,i.a.createElement("img",{src:e.i.images.downsized_large.url,alt:"default"}))},f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).search=function(){g.a.get("http://api.giphy.com/v1/gifs/search?q="+a.state.value+"&api_key=JQI7xYodCQUL8IIV4Iddwf7Sigw1Snl6").then(function(e){console.log(e),a.setState({imageurl:e.data.data})}).catch(function(e){})},a.state={value:a.props,imageurl:[]},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.search=a.search.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this.state.imageurl.map(function(e){return i.a.createElement(p,{i:e})});return i.a.createElement("div",null,i.a.createElement("h2",null,"Awesome gifs:"),i.a.createElement("input",{type:"search",placeholder:"Search",onChange:this.handleChange}),i.a.createElement("input",{type:"submit",onClick:this.search}),i.a.createElement("br",null),e)}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.1873d758.chunk.js.map