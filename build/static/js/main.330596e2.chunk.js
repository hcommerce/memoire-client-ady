(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){},161:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},164:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(34),r=c.n(n),i=(c(88),c(89),c(181)),l=c(182),o=c(183),j=c(184),u=c(11),d=c(5),b=c(20),m=c(28),p=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"FOLLOW":return Object(m.a)(Object(m.a)({},e),{},{user:Object(m.a)(Object(m.a)({},e.user),{},{followings:[].concat(Object(b.a)(e.user.followings),[t.payload])})});case"UNFOLLOW":return Object(m.a)(Object(m.a)({},e),{},{user:Object(m.a)(Object(m.a)({},e.user),{},{followings:e.user.followings.filter((function(e){return e!==t.payload}))})});default:return e}},h=c(0),O={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},x=Object(s.createContext)(O),f=function(e){var t=e.children,c=Object(s.useReducer)(p,O),a=Object(d.a)(c,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(h.jsx)(x.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})};function v(){var e=Object(s.useContext)(x).user,t="http://localhost:8800/images/";return Object(h.jsxs)("div",{className:"topbarContainer",children:[Object(h.jsx)("div",{className:"topbarLeft",children:Object(h.jsx)(u.b,{to:"/",style:{textDecoration:"none"},children:Object(h.jsx)("span",{className:"logo",children:"Anciens ULPGL"})})}),Object(h.jsx)("div",{className:"topbarCenter",children:Object(h.jsxs)("div",{className:"searchbar",children:[Object(h.jsx)(i.a,{className:"searchIcon"}),Object(h.jsx)("input",{placeholder:"Search for friend, post or video",className:"searchInput"})]})}),Object(h.jsxs)("div",{className:"topbarRight",children:[Object(h.jsxs)("div",{className:"topbarLinks",children:[Object(h.jsx)("span",{className:"topbarLink",children:"Homepage"}),Object(h.jsx)("span",{className:"topbarLink",children:"Timeline"})]}),Object(h.jsxs)("div",{className:"topbarIcons",children:[Object(h.jsxs)("div",{className:"topbarIconItem",children:[Object(h.jsx)(l.a,{}),Object(h.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(h.jsxs)("div",{className:"topbarIconItem",children:[Object(h.jsx)(o.a,{}),Object(h.jsx)("span",{className:"topbarIconBadge",children:"2"})]}),Object(h.jsxs)("div",{className:"topbarIconItem",children:[Object(h.jsx)(j.a,{}),Object(h.jsx)("span",{className:"topbarIconBadge",children:"1"})]})]}),Object(h.jsx)(u.b,{to:"/profile/".concat(e.username),children:Object(h.jsx)("img",{src:e.profilePicture?t+e.profilePicture:t+"person/noAvatar.png",alt:"",className:"topbarImg"})})]})]})}c(98);var g=c(185),N=c(186),w=c(187),I=c(188);c(99);function y(){return Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)("div",{className:"sidebarWrapper",children:Object(h.jsxs)("ul",{className:"sidebarList",children:[Object(h.jsx)(u.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(g.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Accueil"})]})}),Object(h.jsx)(u.b,{to:"/messenger",style:{textDecoration:"none",color:"inherit"},children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(o.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Chats"})]})}),Object(h.jsx)(u.b,{to:"/livre",style:{textDecoration:"none",color:"inherit"},children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(N.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Livres"})]})}),Object(h.jsx)(u.b,{to:"/offres",style:{textDecoration:"none",color:"inherit"},children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(w.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Offres d'emploi"})]})}),Object(h.jsx)(u.b,{to:"/evenement",style:{textDecoration:"none",color:"inherit"},children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(I.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Evennements"})]})})]})})})}var k=c(3),L=c.n(k),C=c(6),S=(c(101),c(189)),F=c(4),_=c.n(F),E=c(46);function R(e){var t=e.post,c=Object(s.useState)(t.likes.length),a=Object(d.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)(!1),l=Object(d.a)(i,2),o=l[0],j=l[1],b=Object(s.useState)({}),m=Object(d.a)(b,2),p=m[0],O=m[1],f="http://localhost:8800/images/",v=Object(s.useContext)(x).user;Object(s.useEffect)((function(){j(t.likes.includes(v._id))}),[v._id,t.likes]),Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(L.a.mark((function e(){var c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/user?userId=".concat(t.userId));case 2:c=e.sent,O(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.userId]);var g=function(){try{_.a.put("/api/posts/"+t._id+"/like",{userId:v._id})}catch(e){}r(o?n-1:n+1),j(!o)};return Object(h.jsx)("div",{className:"post",children:Object(h.jsxs)("div",{className:"postWrapper",children:[Object(h.jsxs)("div",{className:"postTop",children:[Object(h.jsxs)("div",{className:"postTopLeft",children:[Object(h.jsx)(u.b,{to:"/profile/".concat(p.username),children:Object(h.jsx)("img",{className:"postProfileImg",src:p.profilePicture?f+p.profilePicture:f+"person/noAvatar.png",alt:""})}),Object(h.jsx)("span",{className:"postUsername",children:p.username}),Object(h.jsx)("span",{className:"postDate",children:Object(E.a)(t.createdAt)})]}),Object(h.jsx)("div",{className:"postTopRight",children:Object(h.jsx)(S.a,{})})]}),Object(h.jsxs)("div",{className:"postCenter",children:[Object(h.jsx)("span",{className:"postText",children:null===t||void 0===t?void 0:t.desc}),Object(h.jsx)("img",{className:"postImg",src:f+t.img,alt:""})]}),Object(h.jsxs)("div",{className:"postBottom",children:[Object(h.jsxs)("div",{className:"postBottomLeft",children:[Object(h.jsx)("img",{className:"likeIcon",src:"".concat(f,"like.png"),onClick:g,alt:""}),Object(h.jsx)("img",{className:"likeIcon",src:"".concat(f,"heart.png"),onClick:g,alt:""}),Object(h.jsxs)("span",{className:"postLikeCounter",children:[n," people like it"]})]}),Object(h.jsx)("div",{className:"postBottomRight",children:Object(h.jsxs)("span",{className:"postCommentText",children:[t.comment?"".concat(t.comment," comments"):"0 comment"," "]})})]})]})})}c(120);var D=c(190),T=c(191);function P(){var e=Object(s.useContext)(x).user,t="http://localhost:8800/images/",c=Object(s.useRef)(),a=Object(s.useState)(null),n=Object(d.a)(a,2),r=n[0],i=n[1],l=function(){var t=Object(C.a)(L.a.mark((function t(s){var a,n,i;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),a={userId:e._id,desc:c.current.value},!r){t.next=16;break}return n=new FormData,i=Date.now()+r.name,n.append("name",i),n.append("file",r),a.img=i,console.log(a),t.prev=9,t.next=12,_.a.post("/api/upload",n);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.prev=16,t.next=19,_.a.post("/api/posts",a);case 19:window.location.reload(),t.next=24;break;case 22:t.prev=22,t.t1=t.catch(16);case 24:case"end":return t.stop()}}),t,null,[[9,14],[16,22]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"share",children:Object(h.jsxs)("div",{className:"shareWrapper",children:[Object(h.jsxs)("div",{className:"shareTop",children:[Object(h.jsx)("img",{className:"shareProfileImg",src:e.profilePicture?t+e.profilePicture:t+"person/noAvatar.png",alt:""}),Object(h.jsx)("input",{placeholder:"\xc0 quoi penses - tu "+e.username+"?",className:"shareInput",ref:c})]}),Object(h.jsx)("hr",{className:"shareHr"}),r&&Object(h.jsxs)("div",{className:"shareImgContainer",children:[Object(h.jsx)("img",{className:"shareImg",src:URL.createObjectURL(r),alt:""}),Object(h.jsx)(D.a,{className:"shareCancelImg",onClick:function(){return i(null)}})]}),Object(h.jsxs)("form",{className:"shareBottom",onSubmit:l,children:[Object(h.jsx)("div",{className:"shareOptions",children:Object(h.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(h.jsx)(T.a,{htmlColor:"tomato",className:"shareIcon"}),Object(h.jsx)("span",{className:"shareOptionText",children:"Photo ou Video"}),Object(h.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png,.jpeg,.jpg",onChange:function(e){return i(e.target.files[0])}})]})}),Object(h.jsx)("button",{className:"shareButton",type:"submit",children:"Publier"})]})]})})}c(121);function B(e){var t=e.username,c=Object(s.useState)([]),a=Object(d.a)(c,2),n=a[0],r=a[1],i=Object(s.useContext)(x).user;return Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(L.a.mark((function e(){var c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,_.a.get("/api/posts/profile/"+t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,_.a.get("/api/posts/timeline/"+i._id);case 8:e.t0=e.sent;case 9:c=e.t0,r(c.data.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,i._id]),Object(h.jsx)("div",{className:"feed",children:Object(h.jsxs)("div",{className:"feedWrapper",children:[(!t||t===i.username)&&Object(h.jsx)(P,{}),n.map((function(e){return Object(h.jsx)(R,{post:e},e._id)}))]})})}c(122),c(123);var A=c(192),U=c(193);function W(e){var t=e.user,c="http://localhost:8800/images/",a=Object(s.useState)([]),n=Object(d.a)(a,2),r=n[0],i=n[1],l=Object(s.useContext)(x),o=l.user,j=l.dispatch,b=Object(s.useState)(o.followings.includes(null===t||void 0===t?void 0:t.id)),m=Object(d.a)(b,2),p=m[0],O=m[1];Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(L.a.mark((function e(){var c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("/api/user/friends/"+t._id);case 3:c=e.sent,i(c.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var f=function(){var e=Object(C.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!p){e.next=7;break}return e.next=4,_.a.put("/api/user/".concat(t._id,"/follow"),{userId:o._id});case 4:j({type:"FOLLOW",payload:t._id}),e.next=10;break;case 7:return e.next=9,_.a.put("/api/user/".concat(t._id,"/unfollow"),{userId:o._id});case 9:j({type:"UNFOLLOW",payload:t._id});case 10:O(!p),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),v=function(){return Object(h.jsx)(h.Fragment,{})},g=function(){return Object(h.jsxs)(h.Fragment,{children:[t.username!==o.username&&Object(h.jsxs)("button",{className:"rightbarFollowButton",onClick:f,children:[p?"Unfollow":"Follow",p?Object(h.jsx)(A.a,{}):Object(h.jsx)(U.a,{})]}),Object(h.jsx)("h4",{className:"rightbarTitle",children:"User information"}),Object(h.jsxs)("div",{className:"rightbarInfo",children:[Object(h.jsxs)("div",{className:"rightbarInfoItem",children:[Object(h.jsx)("span",{className:"rightbarInfoKey",children:"City:"}),Object(h.jsx)("span",{className:"rightbarInfoValue",children:t.city})]}),Object(h.jsxs)("div",{className:"rightbarInfoItem",children:[Object(h.jsx)("span",{className:"rightbarInfoKey",children:"From:"}),Object(h.jsx)("span",{className:"rightbarInfoValue",children:t.from})]}),Object(h.jsxs)("div",{className:"rightbarInfoItem",children:[Object(h.jsx)("span",{className:"rightbarInfoKey",children:"Relationship:"}),Object(h.jsx)("span",{className:"rightbarInfoValue",children:1===t.relationship?"Single":1===t.relationship?"Married":"-"})]})]}),Object(h.jsx)("h4",{className:"rightbarTitle",children:"User friends"}),Object(h.jsx)("div",{className:"rightbarFollowings",children:r.map((function(e){return Object(h.jsx)(u.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},children:Object(h.jsxs)("div",{className:"rightbarFollowing",children:[Object(h.jsx)("img",{src:e.profilePicture?c+e.profilePicture:c+"person/noAvatar.png",alt:"",className:"rightbarFollowingImg"}),Object(h.jsx)("span",{className:"rightbarFollowingName",children:e.username})]})})}))})]})};return Object(h.jsx)("div",{className:"rightbar",children:Object(h.jsx)("div",{className:"rightbarWrapper",children:t?Object(h.jsx)(g,{}):Object(h.jsx)(v,{})})})}c(124);function G(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"homeContainer",children:[Object(h.jsx)(y,{}),Object(h.jsx)(B,{})]})]})}c(125);var q=function(){var e=Object(C.a)(L.a.mark((function e(t,c){var s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOGIN_START"}),e.prev=1,e.next=4,_.a.post("https://memoire-api-ady.herokuapp.com/auth/login",t);case 4:s=e.sent,c({type:"LOGIN_SUCCESS",payload:s.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:"LOGIN_FAILURE",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}(),M=c(194);function V(){var e=Object(s.useRef)(),t=Object(s.useRef)(),c=Object(s.useContext)(x),a=c.isFetching,n=c.dispatch;return Object(h.jsx)("div",{className:"login",children:Object(h.jsxs)("div",{className:"loginWrapper",children:[Object(h.jsxs)("div",{className:"loginLeft",children:[Object(h.jsx)("h6",{className:"loginLogo",children:"Anciens ULPGL | Alumni"}),Object(h.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Anciens ULPGL."})]}),Object(h.jsx)("div",{className:"loginRight",children:Object(h.jsxs)("form",{className:"loginBox",onSubmit:function(c){c.preventDefault(),q({email:e.current.value,password:t.current.value},n)},children:[Object(h.jsx)("input",{placeholder:"Matricule",type:"text",required:!0,className:"loginInput",ref:e}),Object(h.jsx)("input",{placeholder:"Password",type:"password",required:!0,minLength:"6",className:"loginInput",ref:t}),Object(h.jsx)("button",{className:"loginButton",type:"submit",disabled:a,children:a?Object(h.jsx)(M.a,{color:"white",size:"20px"}):"Log In"}),Object(h.jsx)("span",{className:"loginForgot",children:"Forgot Password?"}),Object(h.jsx)("button",{className:"loginRegisterButton",children:a?Object(h.jsx)(M.a,{color:"white",size:"20px"}):"Create a New Account"})]})})]})})}c(126);var z=c(8);function J(){var e="http://localhost:8800/images/",t=Object(s.useState)({}),c=Object(d.a)(t,2),a=c[0],n=c[1],r=Object(z.h)().username;return Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/user?username=".concat(r));case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"profile",children:[Object(h.jsx)(y,{}),Object(h.jsxs)("div",{className:"profileRight",children:[Object(h.jsxs)("div",{className:"profileRightTop",children:[Object(h.jsxs)("div",{className:"profileCover",children:[Object(h.jsx)("img",{className:"profileCoverImg",src:a.coverPicture?e+a.coverPicture:e+"person/noCover.png",alt:""}),Object(h.jsx)("img",{className:"profileUserImg",src:a.profilePicture?e+a.profilePicture:e+"person/noAvatar.png",alt:""})]}),Object(h.jsxs)("div",{className:"profileInfo",children:[Object(h.jsx)("h4",{className:"profileInfoName",children:a.username}),Object(h.jsx)("span",{className:"profileInfoDesc",children:a.desc})]})]}),Object(h.jsxs)("div",{className:"profileRightBottom",children:[Object(h.jsx)(B,{username:r}),Object(h.jsx)(W,{user:a})]})]})]})]})}c(127);function K(){var e=Object(s.useRef)(),t=Object(s.useRef)(),c=Object(s.useRef)(),a=Object(s.useRef)(),n=Object(z.g)(),r=function(){var s=Object(C.a)(L.a.mark((function s(r){var i;return L.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.preventDefault(),a.current.value===c.current.value){s.next=5;break}a.current.setCustomValidity("Passwords don't match!"),s.next=16;break;case 5:return i={username:e.current.value,email:t.current.value,password:c.current.value},console.log(e,t,c,a),s.prev=7,s.next=10,_.a.post("https://memoire-api-ady.herokuapp.com/auth/register",i);case 10:n.push("/login"),s.next=16;break;case 13:s.prev=13,s.t0=s.catch(7),console.log(s.t0);case 16:case"end":return s.stop()}}),s,null,[[7,13]])})));return function(e){return s.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"login",children:Object(h.jsxs)("div",{className:"loginWrapper",children:[Object(h.jsxs)("div",{className:"loginLeft",children:[Object(h.jsx)("h3",{className:"loginLogo",children:"Anciens ULPGL"}),Object(h.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Anciens ULPGL."})]}),Object(h.jsx)("div",{className:"loginRight",children:Object(h.jsxs)("form",{className:"loginBox",onSubmit:r,children:[Object(h.jsx)("input",{placeholder:"Username",required:!0,ref:e,className:"loginInput",type:"text"}),Object(h.jsx)("input",{placeholder:"Matricule",required:!0,ref:t,className:"loginInput",type:"email"}),Object(h.jsx)("input",{placeholder:"Password",required:!0,ref:c,className:"loginInput",type:"password",minLength:"6"}),Object(h.jsx)("input",{placeholder:"Password Again",required:!0,ref:a,className:"loginInput",type:"password"}),Object(h.jsx)("button",{className:"loginButton",type:"submit",onClick:function(e){return console.log(r(e))},children:"Sign Up"}),Object(h.jsx)(u.b,{to:"/login",children:Object(h.jsx)("button",{className:"loginRegisterButton",children:"Log into Account"})})]})})]})})}c(128);var H=c.p+"static/media/logo.6ce24c58.svg",Q=function(e){var t=e.conversation,c=e.currentUser,a=Object(s.useState)([]),n=Object(d.a)(a,2),r=n[0],i=n[1],l=t.members.find((function(e){return e!==c._id}));return Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("http://localhost:8800/api/user?userId="+l);case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[c,t]),Object(h.jsxs)("div",{className:"conversation",children:[Object(h.jsx)("img",{className:"conversationImg",src:H,alt:""}),Object(h.jsx)("span",{className:"conversationName",children:r.username})]})};c(129),c(130);var X=function(e){var t=e.message,c=e.own;return Object(h.jsxs)("div",{className:c?"message own":"message",children:[Object(h.jsxs)("div",{className:"messageTop",children:[Object(h.jsx)("img",{className:"messageImg",src:H,alt:""}),Object(h.jsx)("p",{className:"messageText",children:t.text})]}),Object(h.jsx)("div",{className:"messageBottom",children:Object(E.a)(t.createdAt)})]})};c(131);var Y=function(e){var t=e.onlineUsers,c=e.currentId,a=e.setCurrentChat,n=Object(s.useState)([]),r=Object(d.a)(n,2),i=r[0],l=r[1],o=Object(s.useState)([]),j=Object(d.a)(o,2),u=j[0],b=j[1];Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:8800/api/user/friends/"+c);case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]),Object(s.useEffect)((function(){b(i.filter((function(e){return t.includes(e._id)})))}),[i,t]);var m=function(){var e=Object(C.a)(L.a.mark((function e(t){var s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("http://localhost:8800/api/conversations/find/".concat(c,"/").concat(t._id));case 3:s=e.sent,a(s.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"chatOnline",children:u.map((function(e){return Object(h.jsxs)("div",{className:"chatOnlineFriend",onClick:function(){m(e)},children:[Object(h.jsxs)("div",{className:"chatOnlineImgContainer",children:[Object(h.jsx)("img",{className:"chatOnlineImg",src:H,alt:""}),Object(h.jsx)("div",{className:"chatOnlineBage"})]}),Object(h.jsx)("span",{className:"chatOnlineName",children:e.username})]})}))})},Z=c(81);function $(){var e=Object(s.useContext)(x).user,t=Object(s.useState)([]),c=Object(d.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(null),i=Object(d.a)(r,2),l=i[0],o=i[1],j=Object(s.useState)(""),u=Object(d.a)(j,2),m=u[0],p=u[1],O=Object(s.useState)(null),f=Object(d.a)(O,2),g=f[0],N=f[1],w=Object(s.useState)([]),I=Object(d.a)(w,2),y=I[0],k=I[1],S=Object(s.useState)([]),F=Object(d.a)(S,2),E=F[0],R=F[1],D=Object(s.useRef)(),T=Object(s.useRef)();Object(s.useEffect)((function(){T.current=Object(Z.io)("ws://localhost:8900"),T.current.on("getMessage",(function(e){N({sender:e.senderId,text:e.text,createdAt:Date.now()})}))}),[]),Object(s.useEffect)((function(){g&&(null===l||void 0===l?void 0:l.members.includes(g.sender))&&k((function(e){return[].concat(Object(b.a)(e),[g])}))}),[g,l]),Object(s.useEffect)((function(){T.current.emit("AddUser",e._id),T.current.on("getUsers",(function(t){R(e.followings.filter((function(e){return t.some((function(t){return t.userId===e}))})))}))}),[e]),Object(s.useEffect)((function(){var t=function(){var t=Object(C.a)(L.a.mark((function t(){var c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.a.get("http://localhost:8800/api/conversations/"+e._id);case 3:c=t.sent,n(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e._id]),Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("http://localhost:8800/api/message/"+l._id);case 3:t=e.sent,k(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]);var P=function(){var t=Object(C.a)(L.a.mark((function t(c){var s,a,n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),s={sender:e._id,text:m,conversationId:l._id},a=l.members.find((function(t){return t!==e._id})),T.current.emit("sendMessage",{senderId:e._id,receiverId:a,text:m}),t.prev=4,t.next=7,_.a.post("http://localhost:8800/api/message",s);case 7:n=t.sent,k([].concat(Object(b.a)(y),[n.data])),p(""),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e;null===(e=D.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[y]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"messenger",children:[Object(h.jsx)("div",{className:"chatMenu",children:Object(h.jsxs)("div",{className:"chatMenuWrapper",children:[Object(h.jsx)("input",{placeholder:"Recherche d'amis ",className:"chatMenuInput"}),a.map((function(t){return Object(h.jsx)("div",{onClick:function(){return o(t)},children:Object(h.jsx)(Q,{conversation:t,currentUser:e})})}))]})}),Object(h.jsx)("div",{className:"chatBox",children:Object(h.jsx)("div",{className:"chatBoxWrapper",children:l?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"chatBoxTop",children:y.map((function(t){return Object(h.jsx)("div",{ref:D,children:Object(h.jsx)(X,{message:t,own:t.sender===e._id})})}))}),Object(h.jsxs)("div",{className:"chatBoxBottom",children:[Object(h.jsx)("textarea",{className:"chatMessageInput",placeholder:"Write something ...",onChange:function(e){return p(e.target.value)},value:m}),Object(h.jsx)("button",{className:"chatSubmitButton",onClick:P,children:"Envoyer"})]})]}):Object(h.jsx)("span",{className:"noConversationText",children:"Ouvrez une conversation pour commencer le chat"})})}),Object(h.jsx)("div",{className:"chatOnline",children:Object(h.jsx)("div",{className:"chatOnlineWrapper",children:Object(h.jsx)(Y,{onlineUsers:E,currentId:e._id,setCurrentChat:o})})})]})]})}c(161);var ee=c(165),te=c(195);function ce(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=function(){var e=Object(C.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:8800/api/evenements").then((function(e){a(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n()}),[c]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"evenement",children:[Object(h.jsx)("div",{className:"sidebarevent",children:Object(h.jsx)(y,{})}),Object(h.jsx)("div",{className:"evenementpage",children:Object(h.jsx)(ee.a,{elevation:3,style:{margin:20,padding:20},children:c.map((function(e){return Object(h.jsxs)("div",{className:"card border-0",children:[Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h1",{className:"card-title",children:e.Titre},e.Titre),Object(h.jsx)("p",{className:"card-text",children:e.desc},e.desc),Object(h.jsxs)("p",{className:"card-text1",children:[" ",Object(h.jsx)(te.a,{}),"  ",new Date(e.dateEvenement).toLocaleString()]},e.dateEvenement)]}),Object(h.jsx)("img",{style:{height:350,width:"100%",objectFit:"cover"},src:"http://localhost:8800/images/".concat(e.image),class:"card-img-bottom",alt:e.Titre},e.image)]})}))})}),Object(h.jsx)("div",{className:"rightevent",children:Object(h.jsx)(W,{})})]})]})}c(162);var se=c(196),ae=c(199),ne=c(197);function re(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),r=Object(d.a)(n,2),i=r[0],l=r[1],o=Object(s.useRef)(),j=Object(s.useRef)(),u=Object(s.useContext)(x).user,b=Object(s.useRef)(),m=Object(s.useRef)(new Date),p=function(){var e=Object(C.a)(L.a.mark((function e(t){var c,s,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c={userId:u._id,Titre:j.current.value,desc:o.current.value,organisation:b.current.value,dateExpiration:m.current.value},!i){e.next=16;break}return s=new FormData,a=Date.now()+i.name,s.append("name",a),s.append("file",i),c.pdfLink=a,console.log(c),e.prev=9,e.next=12,_.a.post("http://localhost:8800/api/livre/upload",s);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,_.a.post("http://localhost:8800/api/offre/save",c);case 19:window.location.reload(),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(16);case 24:case"end":return e.stop()}}),e,null,[[9,14],[16,22]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(C.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:8800/api/offre").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){O(),console.log(c)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"offres",children:[Object(h.jsx)("div",{className:"sidebaroffre",children:Object(h.jsx)(y,{})}),Object(h.jsxs)("div",{className:"offrecorp",children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(se.a,{elevation:3,style:{padding:20,marginBottom:20},children:Object(h.jsx)("div",{className:"sendoffre",children:Object(h.jsx)("form",{onSubmit:p,children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("label",{htmlFor:"organisation",className:"col-sm-3 col-form-label",children:"Organisation"}),Object(h.jsx)("div",{class:"col-sm-9",children:Object(h.jsx)("input",{type:"text",ref:b,id:"organisation",className:"form-control form-control-sm mb-3"})}),Object(h.jsx)("label",{htmlFor:"poste",className:"col-sm-3 col-form-label",children:"Poste"}),Object(h.jsx)("div",{class:"col-sm-9",children:Object(h.jsx)("input",{type:"text",ref:j,id:"poste",className:"form-control form-control-sm mb-3"})}),Object(h.jsx)("label",{htmlFor:"desc",className:"col-sm-3 col-form-label",children:"Description"}),Object(h.jsx)("div",{class:"col-sm-9",children:Object(h.jsx)("input",{type:"text",ref:o,id:"desc",className:"form-control form-control-sm mb-3"})})]})}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("label",{htmlFor:"dateExpiration",className:"col-sm-3 col-form-label",children:"Expire"}),Object(h.jsx)("div",{class:"col-sm-9",children:Object(h.jsx)("input",{type:"date",ref:m,id:"dateExpiration",className:"form-control form-control-sm mb-3"})}),Object(h.jsx)("label",{htmlFor:"ressources",className:"col-sm-3 col-form-label",children:"Ressource"}),Object(h.jsx)("div",{class:"col-sm-9",children:Object(h.jsx)("input",{type:"file",id:"ressources",className:"form-control form-control-sm mb-3",onChange:function(e){return l(e.target.files[0])}})}),Object(h.jsx)("div",{className:"col-sm-9 align-items-end",children:Object(h.jsx)("button",{type:"submit",className:"btn",style:{width:150,backgroundColor:"darkblue",color:"white"},children:"Publier"})})]})})]})})})})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("table",{className:"table table-hover caption-top",children:[Object(h.jsx)("caption",{children:"Offres d'Emplois"}),Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Description"}),Object(h.jsx)("th",{scope:"col",children:"Poste"}),Object(h.jsx)("th",{scope:"col",children:"Organisation"}),Object(h.jsx)("th",{scope:"col",children:"Expire"}),Object(h.jsx)("th",{scope:"col",children:"Ressource"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.desc}),Object(h.jsx)("td",{children:e.Titre}),Object(h.jsx)("th",{children:Object(h.jsx)("td",{children:e.organisation})}),Object(h.jsx)("td",{style:{color:"green",fontSize:20,fontWeight:600},children:new Date(e.dateExpiration).toLocaleDateString()}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{style:{textDecoration:"none",cursor:"pointer"},href:"http://localhost:8800/images/".concat(e.pdfLink),target:"_blank",children:Object(h.jsx)(ae.a,{style:{color:"orange"},startIcon:Object(h.jsx)(ne.a,{}),children:"Download"})})})]})}))})]})})]})]})]})}c(163);var ie=c(198);function le(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),r=Object(d.a)(n,2),i=r[0],l=r[1],o=Object(s.useRef)(),j=Object(s.useRef)(),u=Object(s.useContext)(x).user,b=function(){var e=Object(C.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:8800/api/livre").then((function(e){a(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(C.a)(L.a.mark((function e(t){var c,s,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c={userId:u._id,Titre:j.current.value,desc:o.current.value},!i){e.next=16;break}return s=new FormData,a=Date.now()+i.name,s.append("name",a),s.append("file",i),c.couverture=a,console.log(c),e.prev=9,e.next=12,_.a.post("http://localhost:8800/api/livre/upload",s);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,_.a.post("http://localhost:8800/api/livre",c);case 19:window.location.reload(),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(16);case 24:case"end":return e.stop()}}),e,null,[[9,14],[16,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){b()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"livre",children:[Object(h.jsx)("div",{className:"livresidebar",children:Object(h.jsx)(y,{})}),Object(h.jsxs)("div",{className:"livrecorp",children:[Object(h.jsx)("div",{className:"container mb-3",children:Object(h.jsxs)("form",{onSubmit:m,className:"needs-validation",children:[Object(h.jsx)("h2",{children:"Publier un livre"}),Object(h.jsx)(ee.a,{elevation:3,style:{padding:20,marginBottom:20},children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("label",{for:"exampleInputEmail1",class:"form-label col-sm-2",children:"Titre"}),Object(h.jsx)("div",{className:"col-sm-10 mb-3",children:Object(h.jsx)("input",{required:!0,ref:j,type:"text",class:"form-control",id:"exampleInputEmail1",placeholder:"Titre livre"})}),Object(h.jsx)("label",{for:"floatingTextarea",className:"col-sm-2",children:"Description"}),Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("textarea",{required:!0,ref:o,class:"form-control",placeholder:"Description du livre",id:"floatingTextarea"})})]})}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("label",{for:"exampleInputPassword1",className:"form-label col-sm-2",children:"Ressource du livre"}),Object(h.jsx)("div",{class:"col-sm-10 mb-3",children:Object(h.jsx)("input",{required:!0,onChange:function(e){return l(e.target.files[0])},type:"file",class:"form-control",id:"exampleInputPassword1"})}),Object(h.jsx)("div",{className:"col-sm-12",children:Object(h.jsx)(ae.a,{style:{backgroundColor:"#304CA6",color:"#FFF",marginTop:"20px"},type:"submit",variant:"contained",startIcon:Object(h.jsx)(ie.a,{}),children:"Publier"})})]})})]})})]})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:c.map((function(e){return Object(h.jsx)("div",{className:"col-sm-4",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{style:{height:"20rem",objectFit:"cover"},src:"http://localhost:8800/images/".concat(e.couverture),className:"card-img-top",alt:e.couverture}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:e.Titre}),Object(h.jsx)("p",{className:"card-text",children:e.desc}),Object(h.jsx)("a",{href:"https://www.xl6.com/articles/extraits-1/9782755001136.pdf",target:"_blank",className:"btn btn-primary",children:"Extrait"})]})]})})}))})})]})]})]})}var oe=function(){var e=Object(s.useContext)(x).user;return Object(h.jsx)(u.a,{children:Object(h.jsxs)(z.d,{children:[Object(h.jsx)(z.b,{exact:!0,path:"/",children:e?Object(h.jsx)(G,{}):Object(h.jsx)(K,{})}),Object(h.jsx)(z.b,{exact:!0,path:"/login",children:e?Object(h.jsx)(z.a,{to:"/"}):Object(h.jsx)(V,{})}),Object(h.jsx)(z.b,{exact:!0,path:"/register",children:e?Object(h.jsx)(z.a,{to:"/"}):Object(h.jsx)(K,{})}),Object(h.jsx)(z.b,{exact:!0,path:"/messenger",children:e?Object(h.jsx)($,{}):Object(h.jsx)(z.a,{to:"/"})}),Object(h.jsx)(z.b,{exact:!0,path:"/profile/:username",children:Object(h.jsx)(J,{})}),Object(h.jsx)(z.b,{exact:!0,path:"/livre",children:e?Object(h.jsx)(le,{}):Object(h.jsx)(z.a,{to:"/"})}),Object(h.jsx)(z.b,{exact:!0,path:"/offres",children:e?Object(h.jsx)(re,{}):Object(h.jsx)(z.a,{to:"/"})}),Object(h.jsx)(z.b,{exact:!0,path:"/evenement",children:e?Object(h.jsx)(ce,{}):Object(h.jsx)(z.a,{to:"/"})})]})})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{children:Object(h.jsx)(oe,{})})}),document.getElementById("root"))},89:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[164,1,2]]]);
//# sourceMappingURL=main.330596e2.chunk.js.map