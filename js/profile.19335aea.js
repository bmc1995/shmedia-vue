(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"0043":function(e,t,n){},"135b":function(e,t,n){"use strict";n("aee1")},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),a=n("17c2"),o=n("9112");for(var c in i){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),a=i("forEach");e.exports=a?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},2957:function(e,t,n){"use strict";n("b0c0");var r=n("7a23"),i=Object(r["G"])("data-v-99a0497a");Object(r["s"])("data-v-99a0497a");var a={id:"container"},o={class:"profile-img"},c={class:"profile-options"},s={class:"username"},l={key:0,class:"followBtn"},u={class:"profile-bio"},d={class:"goes-by"},p={key:0,class:"profile-stats"},f={class:"postsCount"},g=Object(r["g"])("strong",null,"Posts:",-1),m=Object(r["g"])("span",null,"|",-1),b={class:"followingCount"},j=Object(r["g"])("strong",null,"Following:",-1),O=Object(r["g"])("span",null,"|",-1),h={class:"followersCount"},v=Object(r["g"])("strong",null,"Followers:",-1);Object(r["q"])();var y=i((function(e,t,n,i,y,w){return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["g"])("div",o,[Object(r["g"])("img",{class:"profile-img",src:n.profilePicSrc,onClick:t[1]||(t[1]=function(e){return w.goToProfile(n.userName)}),alt:"Test profile iamge"},null,8,["src"])]),Object(r["g"])("div",c,[Object(r["g"])("span",s,[Object(r["g"])("strong",null,Object(r["y"])(n.userName),1)]),n.userName!==e.authState.idToken.claims.name?(Object(r["p"])(),Object(r["d"])("button",l," Follow ")):Object(r["e"])("",!0),n.userName==e.authState.idToken.claims.name?(Object(r["p"])(),Object(r["d"])("button",{key:1,onClick:t[2]||(t[2]=function(){return w.openSettings&&w.openSettings.apply(w,arguments)}),class:"optionsBtn"}," Edit Profile ")):Object(r["e"])("",!0)]),Object(r["g"])("div",u,[Object(r["g"])("strong",d,Object(r["y"])(n.displayName),1),Object(r["g"])("p",null,Object(r["y"])(n.bio),1)]),n.exploreCard?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("div",p,[Object(r["g"])("span",f,[g,Object(r["f"])(" "+Object(r["y"])(n.counts.posts),1)]),m,Object(r["g"])("span",b,[j,Object(r["f"])(" "+Object(r["y"])(n.counts.following),1)]),O,Object(r["g"])("span",h,[v,Object(r["f"])(" "+Object(r["y"])(n.counts.followers),1)])]))])})),w=n("1da1"),S=(n("96cf"),n("7ae2")),_=n.n(S),k={name:"UserCard",emits:["toggle-settings"],props:{first_name:{type:String},last_name:{type:String},displayName:{type:String,default:"..."},userName:{type:String,default:"..."},bio:{type:String,default:"Loading..."},profilePicSrc:{type:String,default:_.a},counts:{type:Object,default:Object.create({posts:0,following:0,followers:0})},exploreCard:{type:Boolean,default:!1}},methods:{sendFollowReq:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},goToProfile:function(e){if(this.exploreCard)return this.$router.push({name:"Profile",params:{username:e}})},openSettings:function(){this.$emit("toggle-settings")}}};n("135b");k.render=y,k.__scopeId="data-v-99a0497a";t["a"]=k},"58c3":function(e,t,n){"use strict";n("6ed1")},"6ed1":function(e,t,n){},"6ffe":function(e,t,n){},"73c2":function(e,t,n){},"7ae2":function(e,t,n){e.exports=n.p+"img/question-mark.92a2e13f.png"},a510:function(e,t,n){"use strict";n("6ffe")},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},aee1:function(e,t,n){},b590:function(e,t,n){"use strict";n("73c2")},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),a=n("df75"),o=n("d039"),c=o((function(){a(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(e){return a(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),o=n("50c4"),c=n("65f0"),s=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,d=6==e,p=7==e,f=5==e||d;return function(g,m,b,j){for(var O,h,v=a(g),y=i(v),w=r(m,b,3),S=o(y.length),_=0,k=j||c,C=t?k(g,S):n||p?k(g,0):void 0;S>_;_++)if((f||_ in y)&&(O=y[_],h=w(O,_,v),e))if(t)C[_]=h;else if(h)switch(e){case 3:return!0;case 5:return O;case 6:return _;case 2:s.call(C,O)}else switch(e){case 4:return!1;case 7:s.call(C,O)}return d?-1:l||u?u:C}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c66d:function(e,t,n){"use strict";n.r(t);n("ac1f"),n("1276");var r=n("7a23"),i=Object(r["G"])("data-v-74401065");Object(r["s"])("data-v-74401065");var a={id:"imageViewerContainer"},o={class:"imgButtons"},c=Object(r["g"])("span",{title:"Delete"},"🗑",-1),s=Object(r["g"])("span",{title:"Edit Caption"},"✎",-1),l={id:"profileContainer"},u={id:"settingsModal"};Object(r["q"])();var d=i((function(e,t,n,i,d,p){var f,g,m=Object(r["w"])("MediaContainer"),b=Object(r["w"])("UserCard"),j=Object(r["w"])("UserSettings"),O=Object(r["w"])("ProfilePosts");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["F"])(Object(r["g"])("div",a,[Object(r["g"])("div",o,[c,s,Object(r["g"])("span",{onClick:t[1]||(t[1]=function(){return p.toggleViewer&&p.toggleViewer.apply(p,arguments)}),title:"Close"},"x")]),Object(r["g"])(m,{media_url:d.viewerSrc,mediaType:"Image",postedBy:p.username,caption:d.caption},null,8,["media_url","postedBy","caption"])],512),[[r["C"],d.showImageViewer]]),Object(r["F"])(Object(r["g"])("div",l,[Object(r["F"])(Object(r["g"])(b,{userName:p.username,bio:p.bio,profilePicSrc:p.profilePic_url,displayName:p.displayName,counts:p.counts,onToggleSettings:p.toggleSettings},null,8,["userName","bio","profilePicSrc","displayName","counts","onToggleSettings"]),[[r["C"],!d.settingsOpen]]),Object(r["g"])("div",u,[Object(r["F"])(Object(r["g"])(j,{onToggleSettings:p.toggleSettings,onRefreshInfo:p.refreshInfo,currentProfileImg:p.profilePic_url,currentFname:"".concat(null===(f=p.displayName)||void 0===f?void 0:f.split(" ")[0]),currentLname:"".concat(null===(g=p.displayName)||void 0===g?void 0:g.split(" ")[1]),currentBio:p.bio,currentUsername:p.username},null,8,["onToggleSettings","onRefreshInfo","currentProfileImg","currentFname","currentLname","currentBio","currentUsername"]),[[r["C"],d.settingsOpen]])]),Object(r["F"])(Object(r["g"])(O,{imgArr:d.imgArr,onImageClicked:p.toggleViewer},null,8,["imgArr","onImageClicked"]),[[r["C"],!d.settingsOpen]])],512),[[r["C"],!d.showImageViewer]])],64)})),p=n("1da1"),f=(n("96cf"),n("99af"),n("d3b7"),n("2957")),g=Object(r["G"])("data-v-b8fa2d48");Object(r["s"])("data-v-b8fa2d48");var m={id:"postsContainer"};Object(r["q"])();var b=g((function(e,t,n,i,a,o){return Object(r["p"])(),Object(r["d"])("div",m,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.imgArr,(function(e,t){return Object(r["p"])(),Object(r["d"])("div",{class:"imgContainer",key:t,onClick:function(t){return o.clicked(e)}},[(Object(r["p"])(),Object(r["d"])("img",{draggable:"false",key:e.media_url,src:e.media_url,alt:"image"},null,8,["src"]))],8,["onClick"])})),128))])})),j={name:"ProfilePosts",props:{imgArr:{type:Array,deafult:[]}},methods:{clicked:function(e){this.$emit("image-clicked",e)}},emits:["image-clicked"]};n("f173");j.render=b,j.__scopeId="data-v-b8fa2d48";var O=j,h=Object(r["G"])("data-v-725d6318");Object(r["s"])("data-v-725d6318");var v={id:"UserSettingsContainer"},y=Object(r["g"])("h1",null,"Edit Profile",-1),w={id:"userSettingsForm",name:"userSettingsForm"},S={id:"profileImgUpload"},_={id:"profileSettings"},k={for:"first_name"},C=Object(r["f"])("First name: "),I={for:"last_name"},P=Object(r["f"])("Last name: "),B={for:"username"},U=Object(r["f"])("Username: "),x=Object(r["g"])("label",{for:"bio"},"Bio:",-1),T={id:"formButtons"};Object(r["q"])();var F=h((function(e,t,n,i,a,o){return Object(r["p"])(),Object(r["d"])("div",v,[y,Object(r["g"])("div",w,[Object(r["g"])("div",S,[a.previewMediaUrl?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("img",{key:0,src:n.currentProfileImg,alt:"Current profile picture"},null,8,["src"])),a.previewMediaUrl?(Object(r["p"])(),Object(r["d"])("img",{key:1,src:a.previewMediaUrl,alt:"profile picture to upload"},null,8,["src"])):Object(r["e"])("",!0),Object(r["g"])("input",{type:"file",name:"profilePic",id:"profilePicInput",onChange:t[1]||(t[1]=function(){return o.onFileChange&&o.onFileChange.apply(o,arguments)}),accept:".jpeg, .jpg, .png"},null,32)]),Object(r["g"])("div",_,[Object(r["g"])("label",k,[C,Object(r["F"])(Object(r["g"])("input",{type:"text",placeholder:n.currentFname,name:"first_name",id:"firstNameInput","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.first_name=e})},null,8,["placeholder"]),[[r["B"],a.first_name]])]),Object(r["g"])("label",I,[P,Object(r["F"])(Object(r["g"])("input",{type:"text",placeholder:n.currentLname,name:"last_name",id:"lastNameInput","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.last_name=e})},null,8,["placeholder"]),[[r["B"],a.last_name]])]),Object(r["g"])("label",B,[U,Object(r["F"])(Object(r["g"])("input",{type:"text",placeholder:n.currentUsername,name:"username",id:"usernameInput","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.username=e}),min:"4"},null,8,["placeholder"]),[[r["B"],a.username]])]),x,Object(r["F"])(Object(r["g"])("textarea",{type:"text",rows:"5",placeholder:n.currentBio,name:"bio",id:"bioInput","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.bio=e})},null,8,["placeholder"]),[[r["B"],a.bio]])]),Object(r["g"])("div",T,[Object(r["g"])("button",{onClick:t[6]||(t[6]=function(){return o.closeSettings&&o.closeSettings.apply(o,arguments)})},"Cancel"),Object(r["g"])("button",{onClick:t[7]||(t[7]=function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)})},"Save Changes")])])])})),R=(n("3ca3"),n("ddb0"),n("2b3d"),n("4c53"),n("159b"),n("b64b"),n("6d97")),N=n("47e3"),A={name:"UserSettings",props:{currentProfileImg:String,currentBio:String,currentFname:String,currentLname:String,currentUsername:String},data:function(){return{previewMediaUrl:null,image:null,bio:null,first_name:null,last_name:null,username:null}},methods:{onFileChange:function(e){if(0==e.target.files.length)return this.$data.image=null,this.previewMediaUrl=null;this.$data.image=e.target.files[0],this.previewMediaUrl=URL.createObjectURL(this.$data.image)},upload:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=new FormData,r.append("profilePic",e.profilePic),r.append("first_name",e.first_name),r.append("last_name",e.last_name),r.append("username",e.username),r.append("bio",e.bio),n.next=8,fetch("http://".concat(N["resourceURL"],"/users/edit/").concat(t.authState.idToken.claims.sub),{method:"POST",body:r,headers:{Authorization:"Bearer ".concat(t.$auth.getAccessToken())}}).catch((function(e){return console.log(e),e}));case 8:return i=n.sent,n.abrupt("return",i);case 10:case"end":return n.stop()}}),n)})))()},onSubmit:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.username.length<4)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.upload({profilePic:e.image,bio:e.bio,first_name:e.first_name,last_name:e.last_name,username:e.username}).then((function(t){e.closeSettings(),e.refreshInfo(),e.clearSettings(),console.log(t)})).catch((function(e){return console.log(e)}));case 4:case"end":return t.stop()}}),t)})))()},clearSettings:function(){var e=this;Object.keys(this.$data).forEach((function(t){"authState"!=t&&(e.$data[t]=null)}))},refreshInfo:function(){this.getNewTokens(),this.$auth.authStateManager.updateAuthState(),this.$emit("refresh-info",this.username||this.currentUsername)},closeSettings:function(){this.$emit("toggle-settings")},getNewTokens:function(){var e=this;this.$auth.token.getWithoutPrompt(R["a"].oidc).then((function(t){var n=t.tokens;e.$auth.tokenManager.setTokens(n)})).catch((function(e){console.log(e)}))}},emits:["toggle-settings","refresh-info"]};n("e9d1");A.render=F,A.__scopeId="data-v-725d6318";var V=A,$={id:"container"},M={id:"mediaContainer"},D={id:"commentsContainer"};function E(e,t,n,i,a,o){var c=Object(r["w"])("MediaBig"),s=Object(r["w"])("Comment");return Object(r["p"])(),Object(r["d"])("div",$,[Object(r["g"])("div",M,[Object(r["g"])(c,{media_url:n.media_url,postedBy:n.postedBy,mediaType:n.mediaType,caption:n.caption},null,8,["media_url","postedBy","mediaType","caption"])]),Object(r["g"])("div",D,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.comments,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e._id,postedBy:e.user,message:e.message,postedDate:e.date},null,8,["postedBy","message","postedDate"])})),128))])])}var L=Object(r["G"])("data-v-1a52748c");Object(r["s"])("data-v-1a52748c");var q={key:0,class:"imageContainer"},G={class:"captionContainer"},z={key:1,class:"VideoContainer"};Object(r["q"])();var J=L((function(e,t,n,i,a,o){return Object(r["p"])(),Object(r["d"])(r["a"],null,["Image"==n.mediaType?(Object(r["p"])(),Object(r["d"])("div",q,[Object(r["g"])("img",{draggable:"false",src:n.media_url,alt:"an image posted by: {{postedBy}}"},null,8,["src"])])):Object(r["e"])("",!0),Object(r["g"])("div",G,[Object(r["g"])("span",null,Object(r["y"])(n.caption),1)]),"Video"==n.mediaType?(Object(r["p"])(),Object(r["d"])("div",z,[Object(r["g"])("video",{draggable:"false",src:n.media_url,alt:"a video posted by: {{postedBy}}"},null,8,["src"])])):Object(r["e"])("",!0)],64)})),W={name:"MediaBig",props:{media_url:{type:String,default:"../testImages/question-mark.png"},mediaType:{type:String,default:"Image"},postedBy:{type:String,default:"a user"},caption:{type:String,default:""}}};n("58c3");W.render=J,W.__scopeId="data-v-1a52748c";var H=W,K=Object(r["G"])("data-v-23f736f0");Object(r["s"])("data-v-23f736f0");var Q={id:"container"},X={class:"username"},Y={class:"message"},Z={class:"date"};Object(r["q"])();var ee=K((function(e,t,n,i,a,o){return Object(r["p"])(),Object(r["d"])("div",Q,[Object(r["g"])("span",X,Object(r["y"])(n.postedBy),1),Object(r["g"])("div",Y,[Object(r["g"])("p",null,Object(r["y"])(n.message),1)]),Object(r["g"])("span",Z,Object(r["y"])(n.postedDate),1)])})),te={name:"Comment",props:{postedBy:{type:String},postedDate:{type:String},message:{type:String}}};n("a510");te.render=ee,te.__scopeId="data-v-23f736f0";var ne=te,re={name:"MediaContainer",props:{media_url:{type:String},mediaType:{type:String},postedBy:{type:String},comments:{type:Array,default:function(){return[{_id:"12312jgh1yhbli",message:"this is a default comment",postedDate:"1/27/21"},{_id:"12312jgh1yhbli",message:"this is a default comment",postedDate:"1/27/21"},{_id:"12312jgh1yhbli",message:"this is a default comment",postedDate:"1/27/21"},{_id:"12312jgh1yhbli",message:"this is a default comment",postedDate:"1/27/21"},{_id:"12312jgh1yhbli",message:"this is a default comment",postedDate:"1/27/21"}]}},caption:{type:String}},components:{MediaBig:H,Comment:ne}};re.render=E;var ie=re,ae={name:"Profile",components:{UserCard:f["a"],ProfilePosts:O,UserSettings:V,MediaContainer:ie},data:function(){return{profile:void 0,imgArr:void 0,settingsOpen:!1,showImageViewer:!1,viewerSrc:void 0,caption:void 0}},created:function(){this.getProfileInfo(this.$route.params.username)},computed:{username:function(){var e;return null===(e=this.profile)||void 0===e?void 0:e.username},bio:function(){var e;return null===(e=this.profile)||void 0===e?void 0:e.bio},profilePic_url:function(){var e;return null===(e=this.profile)||void 0===e?void 0:e.profilePic_url},displayName:function(){return this.profile?"".concat(this.profile.first_name," ").concat(this.profile.last_name):void 0},counts:function(){var e,t,n;return{followers:null===(e=this.profile)||void 0===e?void 0:e.followers.current.length,following:null===(t=this.profile)||void 0===t?void 0:t.following.length,posts:null===(n=this.imgArr)||void 0===n?void 0:n.length}}},beforeRouteUpdate:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getProfileInfo(e.params.username);case 2:t.profile=n.sent;case 3:case"end":return n.stop()}}),n)})))()},methods:{getProfileInfo:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://".concat(N["resourceURL"],"/users/find/name/").concat(e),{headers:{Authorization:"Bearer ".concat(t.$auth.getAccessToken())}}).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return r=n.sent,i=r.result,i&&t.getPosts(i.okta_uid),n.abrupt("return",t.profile=i);case 6:case"end":return n.stop()}}),n)})))()},getPosts:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://".concat(N["resourceURL"],"/posts/byUsers"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.$auth.getAccessToken)},body:JSON.stringify({userIdArr:[e]})});case 2:return r=n.sent,n.next=5,r.json();case 5:return i=n.sent,n.abrupt("return",t.imgArr=i);case 7:case"end":return n.stop()}}),n)})))()},refreshInfo:function(e){this.getProfileInfo(e)},toggleSettings:function(){this.settingsOpen=!this.settingsOpen},toggleViewer:function(e){this.showImageViewer=!this.showImageViewer,this.showImageViewer&&(this.viewerSrc=e.media_url,this.caption=e.caption)}}};n("b590");ae.render=d,ae.__scopeId="data-v-74401065";t["default"]=ae},e9d1:function(e,t,n){"use strict";n("0043")},f173:function(e,t,n){"use strict";n("ff8e")},ff8e:function(e,t,n){}}]);
//# sourceMappingURL=profile.19335aea.js.map