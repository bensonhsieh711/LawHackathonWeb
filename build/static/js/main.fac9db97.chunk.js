(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){e.exports=a.p+"static/media/MosongLogo.fc0fc5e7.png"},220:function(e,t,a){e.exports=a(372)},225:function(e,t,a){},372:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a(41),l=a(44),c=a(42),o=a(45),i=a(0),s=a.n(i),m=a(20),d=a.n(m),u=(a(225),a(16)),p=a(144),h=a.n(p),E=a(26),b=a(138),f=a(31),g=a.n(f),w=a(30),v=a.n(w),y=a(55),x=a.n(y),C=a(33),k=a(146),S=a(38),O=a.n(S),A=a(65),j=a.n(A),N=a(39),T=a.n(N),L=a(64),z=a.n(L),F=a(66),M=a.n(F),V={PaperProps:{style:{maxHeight:224,width:250}}},D=["\u6bba\u4eba","\u912d\u5091","\u69cd\u679d","\u5e6b\u6d3e\u9b25\u722d","\u56db\u6d77\u5e6b"];var U=function(){var e=s.a.useState([]),t=Object(k.a)(e,2),a=t[0],n=t[1];return s.a.createElement(v.a,null,s.a.createElement(g.a,{htmlFor:"select-multiple-checkbox"},"\u8acb\u9078\u64c7"),s.a.createElement(z.a,{multiple:!0,value:a,onChange:function(e){n(e.target.value)},input:s.a.createElement(O.a,{id:"select-multiple-checkbox"}),renderValue:function(e){return e.join(", ")},MenuProps:V},D.map(function(e){return s.a.createElement(j.a,{key:e,value:e},s.a.createElement(M.a,{checked:a.indexOf(e)>-1}),s.a.createElement(T.a,{primary:e}))})))},I=a(67),P=a.n(I),R=a(43),B=a.n(R),G=a(72),_=a.n(G),H=a(73),J=a.n(H),q=a(75),W=a.n(q),Y=a(69),K=a.n(Y),Q=a(32),X=a.n(Q),Z=a(141),$=a.n(Z),ee=a(142),te=a.n(ee),ae=a(143),ne=a.n(ae),re=a(140),le=a.n(re),ce=a(29),oe=a.n(ce),ie=a(68),se=a.n(ie),me=a(70),de=a.n(me),ue=a(71),pe=a.n(ue),he=a(5),Ee=a.n(he),be=a(24),fe=a.n(be),ge=a(21),we=a.n(ge),ve=Object(u.withStyles)(function(e){return{root:{"label + &":{marginTop:3*e.spacing.unit}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,width:"auto",padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}})(x.a),ye=[["\u725b\u90ce\u559d\u5230\u9152\u7cbe\u4e2d\u6bd2\u4ea1 \u6cd5\u9662\u9996\u6b21","https://www.ptt.cc/bbs/Gossiping/M.1559175089.A.5CF.html"],["\u6d3e\u9063\u5de5\u6dda\u54ed\u6cd5\u9662\u722d\u6b0a\u76ca \u63a7\u544a","https://www.ptt.cc/bbs/Gossiping/M.1559552992.A.FAA.html"],["\u52c7\u8b66\u5f35\u666f\u7fa9\u958b\u69cd\u64ca\u6583\u62d2\u6355\u7aca\u8cca","https://www.ptt.cc/bbs/Gossiping/M.1559196474.A.E18.html"]],xe=[["\u906d\u76e3\u9662\u5f48\u52be\u8349\u7387\u8d77\u8a34\u7372\u5224\u514d\u61f2\u6212","https://www.ettoday.net/news/20190603/1459330.htm"],["\u8cfc\u7269\u4e2d\u5fc3\u54e1\u5de5\u5077\u62cd\u5973\u540c\u4e8b\u88d9\u5e95","https://www.ettoday.net/news/20190603/1459043.htm"],["\u5c0f\u4e09\u88f8\u7167\u55c6\u8072\uff01\u8001\u516c\u990a\u4e86\u5979\u7684\u5b69\u5b50","https://www.ettoday.net/news/20190603/1459226.htm"]],Ce=[["\u5973\u63a7\u523a\u9752\u5716\u919c\u6c42\u511f\u6557\u8a34","https://news.tvbs.com.tw/local/1143610"],["\u7537\u501f\u7af9\u7aff\u6458\u8292\u679c\u6454\u6b7b","https://news.tvbs.com.tw/local/1127982"],["\u63ed\u5973\u7ae5\u7591\u5929\u5929\u906d\u54e5\u6027\u4fb5","https://news.tvbs.com.tw/tech/1130420"]],ke=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){a.setState({keyword:e.target.value})},a.keywordSearchchOnClick=function(){a.setState({showCatagory:!a.state.showCatagory})},a.mongoTest=function(){var e=a.state.keyword;W.a.post("http://35.234.24.135:3200/casigo/account/fizzyread",{opinion:e,mainText:e,reason:e}).then(function(e){console.log(e.data),alert("Success!")}).catch(function(e){console.log(e),alert("Fail!")})},a.autoSearch=function(e){W.a.post("http://35.234.24.135:3200/casigo/account/fizzyread",{opinion:e,mainText:e,reason:e}).then(function(e){e.data?a.setState({verdictList:e.data}):(a.setState({verdictList:[]}),alert("\u67e5\u7121\u7d50\u679c"))}).catch(function(e){console.log(e)}).finally(function(){a.setState({searchAreaExpend:!1,resultAreaExpend:!0,Urlkeyword:null})})},a.relativeSearchOnClick=function(e){W.a.post("http://35.234.24.135:3200/casigo/account/fizzyread",{opinion:e,mainText:e,reason:e}).then(function(e){e.data?a.setState({searchAreaExpend:!1,resultAreaExpend:!0,verdictList:e.data}):(a.setState({verdictList:[]}),alert("\u67e5\u7121\u7d50\u679c"))}).catch(function(e){console.log(e)})},a.handleVerdictListClose=function(){a.setState({searchAreaExpend:!0,resultAreaExpend:!1,verdictContentExpend:!1})},a.handleVerdictContentOpen=function(e){console.log(e),a.setState({verdict:e,searchAreaExpend:!1,resultAreaExpend:!1,verdictContentExpend:!0})},a.handleVerdictContentClose=function(){a.setState({searchAreaExpend:!1,resultAreaExpend:!0,verdictContentExpend:!1})},a.handleDialogClose=function(){a.setState({dialogOpen:!1})},a.handleExpandClick=function(){a.setState({searchAreaExpend:!a.state.searchAreaExpend,resultAreaExpend:!a.state.resultAreaExpend})},a.handleDialogOpen=function(){a.setState({dialogOpen:!0})},a.state={keyword:"",Urlkeyword:a.props.match.params.keyword?a.props.match.params.keyword:null,showCatagory:!1,name:[],searchAreaExpend:!0,resultAreaExpend:!1,verdictContentExpend:!1,newsContent:"",verdictList:[],dialogOpen:!1,verdict:""},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"handleListItemClick",value:function(e){}},{key:"render",value:function(){var e=this;null!==this.state.Urlkeyword&&this.autoSearch(this.state.Urlkeyword);var t=this.props.classes,a=ye.map(function(e,t){return s.a.createElement(we.a,{component:"a",key:t,target:"_blank",href:e[1]},e[0])}),n=Ce.map(function(e,t){return s.a.createElement(we.a,{component:"a",key:t,target:"_blank",href:e[1]},e[0])}),r=xe.map(function(e,t){return s.a.createElement(we.a,{component:"a",key:t,target:"_blank",href:e[1]},e[0])}),l=this.state.verdict?s.a.createElement("p",null,s.a.createElement("b",{className:t.topic},"\u7a2e\u985e"),":",this.state.verdict.sys,s.a.createElement("br",null),s.a.createElement("b",{className:t.topic},"\u6587\u865f:"),this.state.verdict.no,s.a.createElement("br",null),s.a.createElement("b",{className:t.topic},"\u5224\u6c7a\u5167\u5bb9:"),this.state.verdict.judgement,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",{className:t.topic},"\u6cd5\u5f8b\u898b\u89e3:"),this.state.verdict.opinion,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",{className:t.topic},"\u4e3b\u8981\u5167\u5bb9:"),this.state.verdict.mainText):null;return s.a.createElement("div",null,s.a.createElement(oe.a,{className:t.root,elevation:1},s.a.createElement(P.a,{className:t.card},s.a.createElement(se.a,{avatar:s.a.createElement(K.a,{src:le.a,"aria-label":"Recipe",className:t.avatar}),title:"\u83ab\u5b8b\u6cd5\u5f8b\u8aee\u8a62",subheader:"\u8acb\u5728\u4e0b\u65b9\u8f38\u5165\u95dc\u9375\u5b57"}),s.a.createElement(B.a,{in:this.state.searchAreaExpend},s.a.createElement(de.a,null,s.a.createElement("form",{className:t.root,autoComplete:"off"},s.a.createElement(v.a,{className:t.margin},s.a.createElement(g.a,{htmlFor:"search-customized-select",className:t.bootstrapFormLabel},"\u8f38\u5165\u95dc\u9375\u5b57"),s.a.createElement(ve,{value:this.state.keyword,onChange:this.handleChange})),s.a.createElement(v.a,{className:t.margin},s.a.createElement(g.a,{htmlFor:"search-customized-select",className:t.bootstrapFormLabel}),!0===this.state.showCatagory?s.a.createElement(U,null):null)),s.a.createElement(C.a,{variant:"contained",color:"secondary",className:t.margin,onClick:this.keywordSearchchOnClick},"\u641c\u5c0b\u95dc\u9375\u5b57"),s.a.createElement(C.a,{variant:"contained",color:"primary",className:t.margin,onClick:function(){return e.relativeSearchOnClick(e.state.keyword)}},"\u641c\u5c0b\u76f8\u95dc\u7d50\u679c"),s.a.createElement(C.a,{variant:"contained",color:"primary",className:t.margin,onClick:this.mongoTest},"Mongo Test"))),s.a.createElement(pe.a,{className:t.actions,disableActionSpacing:!0},s.a.createElement(X.a,{"aria-label":"Add to favorites"},s.a.createElement($.a,null)),s.a.createElement(X.a,{"aria-label":"Share"},s.a.createElement(te.a,null)),s.a.createElement(X.a,{className:Ee()(t.expand,Object(b.a)({},t.expandOpen,this.state.resultAreaExpend)),onClick:this.handleExpandClick,"aria-expanded":this.state.resultAreaExpend,"aria-label":"Show more"},s.a.createElement(ne.a,null))),s.a.createElement(B.a,{in:this.state.resultAreaExpend},s.a.createElement(fe.a,null,this.state.verdictList.map(function(t,a){return[s.a.createElement(we.a,{key:a,button:!0},s.a.createElement(T.a,{key:a,onClick:function(){e.handleVerdictContentOpen(t)}},t.no,"\uff1a",t.mainText))]})),s.a.createElement(_.a,{onClose:this.handleDialogClose,"aria-labelledby":"customized-dialog-title",open:this.state.dialogOpen},s.a.createElement(J.a,{id:"customized-dialog-title",onClose:this.handleDialogClose},s.a.createElement(fe.a,null,s.a.createElement(we.a,null,"PTT",s.a.createElement(fe.a,null,a)),s.a.createElement(we.a,null,"TVBS",s.a.createElement(fe.a,null,n)),s.a.createElement(we.a,null,"ETTODAY ",s.a.createElement(fe.a,null,r))))),s.a.createElement(C.a,{variant:"contained",color:"primary",className:t.margin,onClick:this.handleVerdictListClose},"\u8fd4\u56de\u641c\u5c0b")),s.a.createElement(B.a,{in:this.state.verdictContentExpend},l,s.a.createElement(C.a,{variant:"contained",className:t.margin,onClick:this.handleDialogOpen},"\u76f8\u95dc\u793e\u7fa4\u6587\u7ae0"),s.a.createElement(C.a,{variant:"contained",color:"primary",className:t.margin,onClick:this.handleVerdictContentClose},"\u8fd4\u56de\u5167\u5bb9")))))}}]),t}(s.a.Component),Se=Object(u.withStyles)(function(e){return{root:{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},margin:{margin:e.spacing.unit},bootstrapFormLabel:{fontSize:20},card:{maxWidth:"100%",backgroundColor:"#eeeeee"},actions:{display:"flex"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{},topic:{color:"red"}}})(ke),Oe=Object(u.createMuiTheme)({palette:{primary:h.a}}),Ae=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(u.MuiThemeProvider,{theme:Oe},s.a.createElement(E.a,{path:"/index",render:function(e){return s.a.createElement(Se,e)}}),s.a.createElement(E.a,{path:"/search/:keyword",render:function(e){return s.a.createElement(Se,e)}}))}}]),t}(s.a.Component),je=a(100),Ne=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleTouchTap=function(e){e.preventDefault(),a.setState({open:!0,anchorEl:e.currentTarget})},a.handleRequestClose=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(je.a,null,s.a.createElement(E.c,null,s.a.createElement(Ae,null)))}}]),t}(s.a.Component);d.a.render(s.a.createElement(Ne,null),document.getElementById("root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.fac9db97.chunk.js.map