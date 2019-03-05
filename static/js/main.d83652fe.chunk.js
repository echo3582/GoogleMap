(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,n,e){t.exports=e(27)},19:function(t,n,e){},27:function(t,n,e){"use strict";e.r(n);var a,o,i,c=e(0),r=e.n(c),s=e(12),l=e.n(s),u=e(29),d=(e(19),e(2)),p=e(3),m=e(6),f=e(4),h=e(7),k=function(t){var n=t.initLocations,e=t.onHandlePick,a=t.locations;return r.a.createElement("ul",null,a.map(function(t){return r.a.createElement("li",{key:t.id,className:"filterItem"},r.a.createElement("button",{className:"buttonItem",value:t.marker.title,onClick:function(t){return function(t){var a=n.filter(function(n){return n.marker.title===t}),o=a[0]?a:n;e(o)}(t.target.value)}},t.marker.title))}))},v=function(t){function n(t){var e;return Object(d.a)(this,n),(e=Object(m.a)(this,Object(f.a)(n).call(this,t))).handleChange=function(t){e.setState({query:t});var n=e.props,a=n.initLocations,o=n.onHandleChange,i=a.filter(function(n){return-1!==n.marker.title.indexOf(t)});o(i[0]?i:a)},e.state={query:""},e}return Object(h.a)(n,t),Object(p.a)(n,[{key:"render",value:function(){var t=this,n=this.state.query;return r.a.createElement("input",{autoFocus:!0,type:"text",placeholder:"Filter",value:n,onChange:function(n){return t.handleChange(n.target.value)}})}}]),n}(c.Component),g=function(t){var n=t.initLocations,e=t.locations,a=t.onHandleChange,o=t.onHandlePick;return r.a.createElement("div",{className:"filter"},r.a.createElement("h2",null,"Filter Tool"),r.a.createElement(v,{initLocations:n,locations:e,onHandleChange:a}),r.a.createElement(k,{initLocations:n,locations:e,onHandlePick:o}))};function w(){document.getElementById("map").insertAdjacentHTML("afterbegin","kdjflkajsdl"),console.log("Oops, the map can't be loaded!")}var b=function(t){function n(t){var e;return Object(d.a)(this,n),(e=Object(m.a)(this,Object(f.a)(n).call(this,t))).state={loaded:!1},e}return Object(h.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){!function(t,n){var e=window.document.getElementsByTagName("script")[0],a=window.document.createElement("script");a.src=t,a.async=!0,a.defer=!0,a.onerror=n(),e.parentNode.insertBefore(a,e)}("https://maps.googleapis.com/maps/api/js?key=AIzaSyBEbHiCAD3pznHIe2nzSWIPuZ2prAUQdeE&libraries=places&callback=initMap",w)}},{key:"addMap",value:function(t){return a=new window.google.maps.Map(document.getElementById("map"),{center:t[0].marker.position,zoom:11})}},{key:"addMarker",value:function(t){return o=new window.google.maps.Marker({position:t.marker.position,title:t.marker.title,map:a,animation:window.google.maps.Animation.DROP})}},{key:"addInfo",value:function(t,n){return i=new window.google.maps.InfoWindow({content:"".concat(t.info,"</br><a href=").concat(n,' target="_blank">\u7ef4\u57fa\u767e\u79d1</a>'),maxWidth:200})}},{key:"clickListener",value:function(t,n){return t.addListener("click",function(){n.open(a,t),t.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout(function(){t.setAnimation(null)},1e3),a.panTo(t.position)})}},{key:"renderMap",value:function(t){var n=this;this.addMap(t),t.map(function(t){fetch("https://zh.wikipedia.org//w/api.php?action=opensearch&origin=*&format=json&search=".concat(t.marker.title,'&utf8=1"')).then(function(t){return t.json()}).then(function(t){return t[3][0]}).then(function(e){n.addMarker(t),n.addInfo(t,e),n.clickListener(o,i)})})}},{key:"initMap",value:function(){var t=this.props.mapLocations;this.addMap(t),this.setState({loaded:!0})}},{key:"render",value:function(){var t=this.props.mapLocations,n=this.state.loaded;return window.initMap=this.initMap.bind(this),n?this.renderMap(t):console.log("loading"),r.a.createElement("div",{id:"map"}," ")}}]),n}(c.Component),L=e(13),y=function(t){function n(t){var e;return Object(d.a)(this,n),(e=Object(m.a)(this,Object(f.a)(n).call(this,t))).updateLocations=L.debounce(function(t){e.setState({locations:t,mapLocations:t})},600),e.state={initLocations:[],locations:[],mapLocations:[]},e}return Object(h.a)(n,t),Object(p.a)(n,[{key:"pickLocation",value:function(t){this.setState({mapLocations:t}),console.log(this.state.mapLocations+"App")}},{key:"render",value:function(){var t=this,n=this.state,e=n.locations,a=n.initLocations,o=n.mapLocations;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,{initLocations:a,locations:e,onHandleChange:function(n){return t.updateLocations(n)},onHandlePick:function(n){return t.pickLocation(n)}}),r.a.createElement(b,{locations:e,mapLocations:o})))}},{key:"componentDidMount",value:function(){var t=this;fetch("/api/locations.json").then(function(t){return t.json()}).then(function(n){t.setState({initLocations:n.data.locations,locations:n.data.locations,mapLocations:n.data.locations})})}}]),n}(c.Component);l.a.render(r.a.createElement(u.a,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.d83652fe.chunk.js.map