(this.webpackJsonpflow=this.webpackJsonpflow||[]).push([[0],{31:function(e,t,a){e.exports=a(70)},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(36),a(4)),s=a(5),i=a(7),u=a(6),m=a(10),d=a(11),p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.styling},r.a.createElement(m.a,{icon:d.a}),r.a.createElement("div",null,r.a.createElement("h2",null,"Flow"),r.a.createElement("p",null,"Get shit done"))))},f=(a(41),function(e){var t="onLoad";return e.loaded&&(t="onLoad fadeOut"),r.a.createElement("div",{className:t},r.a.createElement(p,{styling:"onLoadLogoBox"}))}),h=(a(42),a(29)),k=a.n(h),v=function(e){return r.a.createElement("h1",{className:"userName"},"Karan's planner")},E=a(30),b=a.n(E);var g=function(e){return r.a.createElement("time",{className:"clock"},r.a.createElement(b.a,{format:"hh:mm:ss",ticking:"true",timezone:e.tz}))},C=a(3),N=a.n(C),y=function(e){return r.a.createElement("time",{className:"date"},N.a.tz(N()(),e.tz).format("LL"))},j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={bkground:{usrChoice:"",url:"",headerImg:""},usr:{name:""},dateTime:{timeZone:"America/New_York"},loaded:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;k()({method:"GET",url:"https://api.unsplash.com/photos",dataResponse:"json",params:{client_id:"II3ASpAqNfI4gpWE2HdYIORRcGNtpm5N6UBeF2cBQQc",format:"json"}}).then((function(t){var a=Math.floor(Math.random()*t.data.length),n=t.data[a].urls.full;e.setState((function(e){var t=Object.assign({},e.bkground);return t.url=n,t.headerImg="linear-gradient(0deg, rgba(51,51, 51,.6), rgba(64, 115, 158,.6)), url(\n\t\t\t\t\t\t".concat(n,"\n\t\t\t\t\t\t)"),{bkground:t,loaded:!0}}))}))}},{key:"render",value:function(){var e=this.state,t=e.bkground,a=(t.usrChoice,t.url,t.headerImg),n=e.usr.name,c={backgroundImage:a};return r.a.createElement("header",{style:c},r.a.createElement(f,{loaded:this.state.loaded}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"logoClockBox"},r.a.createElement(p,{styling:"headerLogoBox"})," ",r.a.createElement("div",{className:"dateTimeBox"},r.a.createElement(g,{tz:this.state.dateTime.timeZone}),r.a.createElement(y,{tz:this.state.dateTime.timeZone}))),r.a.createElement(v,{usrName:n})))}}]),a}(n.Component),I=a(15),A=a.n(I);a(65);A.a.initializeApp({apiKey:"AIzaSyAa00XcVVgsPNI-my3GA-AgAVjTh-Zt0As",authDomain:"project-five-b1afe.firebaseapp.com",databaseURL:"https://project-five-b1afe.firebaseio.com",projectId:"project-five-b1afe",storageBucket:"project-five-b1afe.appspot.com",messagingSenderId:"653508419721",appId:"1:653508419721:web:768aeb69f0823e91cd2658"});var w=A.a,O=function(e){return r.a.createElement("form",{action:"",className:"form"},r.a.createElement("input",{className:e.validation,type:"text",id:"newTask",value:e.value,onChange:e.change,placeholder:"Enter task here"}),r.a.createElement("button",{type:"submit",onClick:e.click,Val:!0},"Add Task"))},T=function(e){return r.a.createElement("input",{type:"checkbox",className:"checkbox",id:e.id,onClick:e.statusCheck,defaultChecked:e.status})},B=function(e){return r.a.createElement("button",{className:"delButton"},r.a.createElement(m.a,{icon:d.b,onClick:e.delClick,className:"trashIcon",alt:!0}),r.a.createElement("span",{class:"nonVisual"},"Delete"))},L=function(e){var t="label",a="task";return e.status&&(t="label taskComplete",a="task taskCompleteBox"),r.a.createElement("li",{className:a},r.a.createElement(T,{id:e.id,statusCheck:e.statusCheck,status:e.status}),r.a.createElement("label",{className:t,for:e.id},e.task),r.a.createElement(B,{delClick:e.delClick}))},x=(a(67),function(e){var t=e.tasksArr;return r.a.createElement("ul",{className:"tasks"},t.map((function(t){return r.a.createElement(L,{id:t.key,task:t.eachTask,status:t.complete,statusCheck:function(a){e.status(t.key,t.complete)},key:t.key,delClick:function(a){e.delClick(t.key)}})})))}),z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).addTaskHandler=function(t){var a=t.target.value.charAt(0).toUpperCase()+t.target.value.slice(1);e.setState({usrInput:a})},e.submitTaskHandler=function(t){t.preventDefault();var a=w.database().ref("tasks"),n={task:e.state.usrInput,complete:!1};e.state.usrInput.length?(a.push(n),e.setState({usrInput:""})):e.setState({validationAlert:!0})},e.handleRemove=function(e){w.database().ref("tasks").child(e).remove()},e.handleComplete=function(e,t){var a={complete:!t};w.database().ref("tasks").child(e).update(a)},e.state={tasks:[],usrInput:"",referenceDate:"October 1, 2020"},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=w.database().ref("/tasks");N.a.tz(N()(),"America/New_York").format("LL");for(var a in console.log(t),t)console.log(t[a]);t.on("value",(function(t){var a=[],n=t.val();for(var r in n)a.push({key:r,eachTask:n[r].task,complete:n[r].complete});e.setState({tasks:a})}));Date.now()}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.usrInput;return r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",null,r.a.createElement(O,{value:a,change:this.addTaskHandler,click:this.submitTaskHandler}),r.a.createElement(x,{tasksArr:t,delClick:this.handleRemove,status:this.handleComplete}))))}}]),a}(n.Component),S=(a(68),function(){return r.a.createElement("footer",null,r.a.createElement("div",{class:"footer-bottom"},r.a.createElement("a",{href:"https://junocollege.com/",class:"copyright"},"CREATED AT JUNO COLLEGE"),r.a.createElement("p",{className:"footerBottom"},"Copyright \xa9 2020 Juno College")))}),D=(a(69),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(z,null),r.a.createElement(S,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.e5dc23c7.chunk.js.map