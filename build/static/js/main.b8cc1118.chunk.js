(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(62),s=a.n(r),o=(a(71),a(6)),c=a(7),i=a(9),m=a(8),u=a(10),h=a(139),d=a(140),p=a(136),E=a(4),f=(a(73),a(63)),b=(a(75),a(49)),v=a.n(b);v.a.initializeApp({apiKey:"AIzaSyArEU3VdUswjw4INNWXno0uY40mC1PG7pM",authDomain:"vroneworld.firebaseapp.com",databaseURL:"https://vroneworld.firebaseio.com",projectId:"vroneworld",storageBucket:"vroneworld.appspot.com",messagingSenderId:"965926543486"});var y=v.a,w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={playerName:"",userPrefs:"",userMessage:"",time:y.database.ServerValue.TIMESTAMP,allPosts:[]},e.handleChange=e.handleChange.bind(Object(E.a)(Object(E.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(E.a)(Object(E.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=y.database().ref("allPosts"),a={title:this.state.playerName,content:this.state.userPrefs,message:this.state.userMessage,timeS:y.database.ServerValue.TIMESTAMP};t.push(a),this.setState({playerName:"",userPrefs:"",userMessage:"",time:""})}},{key:"componentDidMount",value:function(){var e=this;y.database().ref("allPosts").on("value",function(t){var a=t.val(),n=[];for(var l in a)n.push({id:l,playerName:a[l].title,userPrefs:a[l].content,userMessage:a[l].message,time:a[l].timeS});e.setState({allPosts:n})})}},{key:"removeItem",value:function(e){y.database().ref("/allPosts/".concat(e)).remove()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"messageForm"},l.a.createElement("div",{className:"all_chat"},l.a.createElement("div",{className:"all_chat__header"},l.a.createElement("img",{src:"https://s3.amazonaws.com/vrone.world/vroneworld-chat.jpg",className:"all-channel__logo",alt:"logo"}),l.a.createElement("div",{className:"app"},l.a.createElement("header",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Enter a Post Below."))),l.a.createElement("h2",null,l.a.createElement("br",null),"ALL GAMES CHANNEL."),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"add-post"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",name:"playerName",placeholder:"Player Name",onChange:this.handleChange,value:this.state.playerName}),l.a.createElement("input",{type:"text",name:"userPrefs",placeholder:"Systems | Games",onChange:this.handleChange,value:this.state.userPrefs}),l.a.createElement("input",{type:"text",name:"userMessage",placeholder:"Message - Remember Rule #1!",onChange:this.handleChange,value:this.state.userMessage}),l.a.createElement("button",null,"Post!"))),l.a.createElement("section",{className:"display-post"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("ul",null,this.state.allPosts.map(function(t){return l.a.createElement("li",{key:t.id},l.a.createElement("h3",null,t.playerName),l.a.createElement("p",null,t.userPrefs," "),l.a.createElement("p",null,t.userMessage," "),l.a.createElement("p",null,t.time,l.a.createElement("button",{onClick:function(){return e.removeItem(t.id)}},"Remove Post")),l.a.createElement("p",null,"  "))})))))))))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={clicked:!1},e.handleClick=e.handleClick.bind(Object(E.a)(Object(E.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.setState({clicked:!0})}},{key:"render",value:function(){return l.a.createElement("div",{className:"RulesBody"},l.a.createElement("form",{className:"UserForm"},l.a.createElement("table",{rules:"rows"},l.a.createElement("tr",null,l.a.createElement("th",null,"The Rules.")),l.a.createElement("tr",null,l.a.createElement("td",null,"1. Do not post any sensitive information (i.e. Personal Information, URLs, etc.).")),l.a.createElement("tr",null,l.a.createElement("td",null,"2. Be kind to another, and watch the language. Harrassment of any kind will not be tolerated.")),l.a.createElement("tr",null,l.a.createElement("td",null,"3. Please remove your post after you have found your team.")),l.a.createElement("tr",null)),l.a.createElement("div",{className:"ChatOpenButton"},l.a.createElement("button",{onClick:this.handleClick}," Go to Chat! "),this.state.clicked?l.a.createElement(w,null):null)))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={clicked:!1},e.handleClick=e.handleClick.bind(Object(E.a)(Object(E.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.setState({clicked:!0})}},{key:"render",value:function(){return l.a.createElement("div",{className:"theRules"},l.a.createElement("h2",null,"Welcome, Player."),l.a.createElement("p",null,"If this is your first time visiting, and you'd like to understand the reasoning of this website, please visit the Mission section."),l.a.createElement("p",null,"VR One World is currently in it's first phase of production. It is a rudimentary real time communication application where users can come together to connect online. This project is built using React on the front end, and using Firebase (BaaS) to store the users' posts, while the website is hosted on an AWS S3 Bucket. VROne.World is open source, and available to access publicly. For more information, please head to the Contact section."),l.a.createElement("p",null,"The chat will appear at the bottom. Please follow the rules!"),l.a.createElement("div",{className:"formButton"},l.a.createElement("button",{className:"fbButton",onClick:this.handleClick}," Start Here "),this.state.clicked?l.a.createElement(g,null):null))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"theMission"},l.a.createElement("h2",null,"The Mission."),l.a.createElement("p",null,"Here, we believe that everyone is equal and are responsible for this One World. We all are seeking either love, riches, power, security, or the unobtainable. Despite having differences, we still find ways to share our experiences and connect. Even the most opposites of people uncover new looks and feelings of life that they would have never known otherwise. And although, we have countless mediums and channels to connect to each other, there are still those gaps where, someone like you or I, are unable to find someone else to share experiences with. However, this project is an attempt to be that light, community, link, or whatever definition befits you, to connect people all over the world to each other from all walks of life. So put on your headset, stand (or sit) with the rest of us, and play like..."),l.a.createElement("p",null," - VR One World."))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("h2",null,"Questions / Feedback"),l.a.createElement("p",null,"Please feel free to reach out to me directly."),l.a.createElement("p",null,"Email: danielchoe.dev@gmail.com"),l.a.createElement("p",null,"Linked-In: ",l.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-choe/"},"Profile")),l.a.createElement("p",null,"Portfolio: ",l.a.createElement("a",{href:"https://www.daniel-choe.com/"},"Portfolio")))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement("header",{className:"homeHeader"},l.a.createElement("h1",{className:"vrOneWorldTitle"},"VR One World."),l.a.createElement("a",{href:"index.html"},l.a.createElement("img",{className:"figure",src:"https://s3.amazonaws.com/vrone.world/logo.png",alt:"logo"}))),l.a.createElement("ul",{className:"header"},l.a.createElement("li",null,l.a.createElement(d.a,{exact:!0,to:"/"},"Seekers")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/mission"},"Mission")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/contact"},"Contact"))),l.a.createElement("div",{className:"content"},l.a.createElement(p.a,{exact:!0,path:"/",component:k}),l.a.createElement(p.a,{path:"/mission",component:O}),l.a.createElement(p.a,{path:"/contact",component:j}))))}}]),t}(n.Component);s.a.render(l.a.createElement(N,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(135)},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){}},[[66,2,1]]]);
//# sourceMappingURL=main.b8cc1118.chunk.js.map