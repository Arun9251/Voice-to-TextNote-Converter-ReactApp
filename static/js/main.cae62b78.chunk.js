(this.webpackJsonpvoicetext=this.webpackJsonpvoicetext||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(5),r=t.n(c),l=(t(12),t(6)),i=t(3),u=(t(13),new(window.SpeechRecognition||window.webkitSpeechRecognition));u.continuous=!0,u.interimResults=!0,u.lang="en-US";var s=function(){var e=Object(o.useState)(!1),n=Object(i.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(null),s=Object(i.a)(r,2),m=s[0],f=s[1],p=Object(o.useState)([]),d=Object(i.a)(p,2),E=d[0],b=d[1];Object(o.useEffect)((function(){h()}),[t]);var h=function(){t?(u.start(),u.onend=function(){console.log("continue.."),u.start()}):(u.stop(),u.onend=function(){console.log("Stopped Mic on Click")}),u.onstart=function(){console.log("Mics on")},u.onresult=function(e){var n=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");console.log(n),f(n),u.onerror=function(e){console.log(e.error)}}};return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Voice Notes"),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"box"},a.a.createElement("h2",null,"Current Note"),t?a.a.createElement("span",null,"\ud83c\udf99\ufe0f"):a.a.createElement("span",null,"\ud83d\uded1\ud83c\udf99\ufe0f"),a.a.createElement("button",{onClick:function(){b([].concat(Object(l.a)(E),[m])),f("")},disabled:!m},"Save Note"),a.a.createElement("button",{onClick:function(){return c((function(e){return!e}))}},"Start/Stop"),a.a.createElement("p",null,m)),a.a.createElement("div",{className:"box"},a.a.createElement("h2",null,"Notes"),E.map((function(e){return a.a.createElement("p",{key:e},e)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.cae62b78.chunk.js.map