(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(3),c=a.n(i),r=(a(13),a(14),a(4)),o=a(5),l=a(1),m=a(7),d=a(6),u=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={break:5,session:25,count:1500,onoff:0,label:"Session"},s.decrementBreak=s.decrementBreak.bind(Object(l.a)(s)),s.incrementBreak=s.incrementBreak.bind(Object(l.a)(s)),s.decrementSession=s.decrementSession.bind(Object(l.a)(s)),s.incrementSession=s.incrementSession.bind(Object(l.a)(s)),s.reset=s.reset.bind(Object(l.a)(s)),s.start=s.start.bind(Object(l.a)(s)),s.convertSeconds=s.convertSeconds.bind(Object(l.a)(s)),s}return Object(o.a)(a,[{key:"decrementBreak",value:function(){this.state.break>1&&this.setState((function(e){return{break:e.break-1}}))}},{key:"incrementBreak",value:function(){this.state.break<60&&this.setState((function(e){return{break:e.break+1}}))}},{key:"decrementSession",value:function(){this.state.session>1&&this.setState((function(e){return{session:e.session-1,count:60*e.session-60}}))}},{key:"incrementSession",value:function(){this.state.session<60&&this.setState((function(e){return{session:e.session+1,count:60*e.session+60}}))}},{key:"reset",value:function(){clearInterval(this.timer),document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0,this.setState((function(e){return{break:5,session:25,count:1500,onoff:0,label:"Session"}}))}},{key:"convertSeconds",value:function(e){var t=e%60;function a(e){return e<10?"0"+e:e}return a(Math.floor(e/60))+":"+a(t)}},{key:"start",value:function(){var e=this;0===this.state.onoff?(this.timer=setInterval((function(){return e.counter()}),1e3),this.setState({onoff:1})):(clearInterval(this.timer),this.setState({onoff:0}))}},{key:"counter",value:function(){this.state.count>=0&&this.setState({count:this.state.count-1}),0===this.state.count&&document.getElementById("beep").play(),this.state.count<0&&"Session"===this.state.label&&(clearInterval(this.timer),this.setState({count:60*this.state.break,onoff:0,label:"Break"}),this.start()),this.state.count<0&&"Break"===this.state.label&&(clearInterval(this.timer),this.setState({count:60*this.state.session,onoff:0,label:"Session"}),this.start())}},{key:"render",value:function(){return n.a.createElement("div",{className:"container h-100 bg-dark"},n.a.createElement("div",{className:"row h-100 align-items-center"},n.a.createElement("div",{className:"col text-center"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h1",{className:"display-4"},"Pomodoro Clock"))),n.a.createElement("div",{className:"row my-3"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"session border border-white rounded-circle p-5 m-auto"},n.a.createElement("h2",{id:"timer-label"},this.state.label),n.a.createElement("div",{id:"time-left",className:"display-3"},this.convertSeconds(this.state.count)),n.a.createElement("audio",{id:"beep",src:"http://static1.grsites.com/archive/sounds/musical/musical012.mp3"}),n.a.createElement("div",{id:"start-stop"},n.a.createElement("span",{id:"start_stop",className:"text-light action",onClick:this.start},n.a.createElement("i",{className:"fas fa-play"}),n.a.createElement("i",{className:"fas fa-pause"})),n.a.createElement("span",{id:"reset",className:"text-light ml-3 action",onClick:this.reset},n.a.createElement("i",{className:"fas fa-undo-alt"})))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"lead",id:"break-label"},"Break Length"),n.a.createElement("span",{id:"break-decrement",className:"text-light action",onClick:this.decrementBreak},n.a.createElement("i",{className:"fas fa-minus"})),n.a.createElement("span",{id:"break-length",className:"lead mx-3"},this.state.break),n.a.createElement("span",{id:"break-increment",className:"text-light action",onClick:this.incrementBreak},n.a.createElement("i",{className:"fas fa-plus"}))),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"lead",id:"session-label"},"Session Length"),n.a.createElement("span",{id:"session-decrement",className:"text-light action",onClick:this.decrementSession},n.a.createElement("i",{className:"fas fa-minus"})),n.a.createElement("span",{id:"session-length",className:"lead mx-3"},this.state.session),n.a.createElement("span",{id:"session-increment",className:"text-light action",onClick:this.incrementSession},n.a.createElement("i",{className:"fas fa-plus"})))),n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col text-white-50"},"Coded by ",n.a.createElement("a",{href:"http://www.vinweb.hu",className:"text-white-50"},"Janos Vincze"))))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2ee8d7a9.chunk.js.map