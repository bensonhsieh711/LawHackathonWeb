(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){e.exports=a.p+"static/media/MosongLogo.fc0fc5e7.png"},295:function(e,t,a){e.exports=a(560)},560:function(e,t,a){"use strict";a.r(t);var n=a(92),r=a(93),l=a(95),o=a(94),c=a(96),s=a(0),i=a.n(s),m=a(20),u=a.n(m),h=a(216),p=a.n(h),d=(a(379),a(173),a(217)),E=a.n(d),g=a(139),f=a.n(g),b=(a(416),a(419),a(421),a(27)),w=a(39),v=a.n(w),C=a(38),y=a.n(C),k=a(66),x=a.n(k),S=a(69),O=a(219),j=(a(423),a(37)),A=a.n(j),T=a(67),F=a.n(T),N=a(88),z=a.n(N),L=a(86),M=a.n(L),I=a(87),P=a.n(I),R={PaperProps:{style:{maxHeight:224,width:250}}},B=["\u6bba\u4eba","\u912d\u5091","\u69cd\u679d","\u5e6b\u6d3e\u9b25\u722d","\u56db\u6d77\u5e6b"];var G=function(){var e=i.a.useState([]),t=Object(O.a)(e,2),a=t[0],n=t[1];return i.a.createElement(y.a,null,i.a.createElement(v.a,{htmlFor:"select-multiple-checkbox"},"\u8acb\u9078\u64c7"),i.a.createElement(M.a,{multiple:!0,value:a,onChange:function(e){n(e.target.value)},input:i.a.createElement(A.a,{id:"select-multiple-checkbox"}),renderValue:function(e){return e.join(", ")},MenuProps:R},B.map(function(e){return i.a.createElement(F.a,{key:e,value:e},i.a.createElement(P.a,{checked:a.indexOf(e)>-1}),i.a.createElement(z.a,{primary:e}))})))},U=a(89),_=a.n(U),D=a(68),H=a.n(D),J=a(90),V=a.n(J),q=a(91),W=a.n(q),Y=a(140),K=a.n(Y),Q=Object(b.withStyles)(function(e){return{root:{"label + &":{marginTop:3*e.spacing.unit}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,width:"auto",padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}})(x.a),X=[["\u725b\u90ce\u559d\u5230\u9152\u7cbe\u4e2d\u6bd2\u4ea1 \u6cd5\u9662\u9996\u6b21","https://www.ptt.cc/bbs/Gossiping/M.1559175089.A.5CF.html"],["\u6d3e\u9063\u5de5\u6dda\u54ed\u6cd5\u9662\u722d\u6b0a\u76ca \u63a7\u544a","https://www.ptt.cc/bbs/Gossiping/M.1559552992.A.FAA.html"],["\u52c7\u8b66\u5f35\u666f\u7fa9\u958b\u69cd\u64ca\u6583\u62d2\u6355\u7aca\u8cca","https://www.ptt.cc/bbs/Gossiping/M.1559196474.A.E18.html"]],Z=[["\u906d\u76e3\u9662\u5f48\u52be\u8349\u7387\u8d77\u8a34\u7372\u5224\u514d\u61f2\u6212","https://www.ettoday.net/news/20190603/1459330.htm"],["\u8cfc\u7269\u4e2d\u5fc3\u54e1\u5de5\u5077\u62cd\u5973\u540c\u4e8b\u88d9\u5e95","https://www.ettoday.net/news/20190603/1459043.htm"],["\u5c0f\u4e09\u88f8\u7167\u55c6\u8072\uff01\u8001\u516c\u990a\u4e86\u5979\u7684\u5b69\u5b50","https://www.ettoday.net/news/20190603/1459226.htm"]],$=[["\u5973\u63a7\u523a\u9752\u5716\u919c\u6c42\u511f\u6557\u8a34","https://news.tvbs.com.tw/local/1143610"],["\u7537\u501f\u7af9\u7aff\u6458\u8292\u679c\u6454\u6b7b","https://news.tvbs.com.tw/local/1127982"],["\u63ed\u5973\u7ae5\u7591\u5929\u5929\u906d\u54e5\u6027\u4fb5","https://news.tvbs.com.tw/tech/1130420"]],ee=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={search:"",showCatagory:!1,name:[],searchAreaExpend:!0,resultAreaExpend:!1,open:!1,newsContent:"",verdictList:[]},a.handleChange=function(e){a.setState({search:e.target.value})},a.keywordSearchchOnClick=function(){a.setState({showCatagory:!a.state.showCatagory})},a.mongoTest=function(){var e=a.state.search;K.a.post("http://35.234.24.135:3200/casigo/account/fizzyread",{opinion:e,mainText:e,reason:e}).then(function(e){console.log(e.data),alert("Success!")}).catch(function(e){console.log(e),alert("Fail!")})},a.relativeSearchOnClick=function(){var e=a.state.search;K.a.post("http://35.234.24.135:3200/casigo/account/fizzyread",{opinion:e,mainText:e,reason:e}).then(function(e){a.setState({searchAreaExpend:!a.state.searchAreaExpend,resultAreaExpend:!a.state.resultAreaExpend,verdictList:e.data})}).catch(function(e){console.log(e)})},a.handleClose=function(){a.setState({open:!1})},a.handleOpen=function(){a.setState({open:!0})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleListItemClick",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props.classes,a=X.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:e[1]},e[0]))}),n=$.map(function(e,t){return i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:e[1]},e[0]))}),r=Z.map(function(e,t){return i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:e[1]},e[0]))});return i.a.createElement(_.a,null,i.a.createElement(H.a,{in:this.state.searchAreaExpend},i.a.createElement("form",{className:t.root,autoComplete:"off"},i.a.createElement(y.a,{className:t.margin},i.a.createElement(v.a,{htmlFor:"search-customized-select",className:t.bootstrapFormLabel},"\u8f38\u5165\u95dc\u9375\u5b57"),i.a.createElement(Q,{value:this.state.search,onChange:this.handleChange})),i.a.createElement(y.a,{className:t.margin},i.a.createElement(v.a,{htmlFor:"search-customized-select",className:t.bootstrapFormLabel}),1==this.state.showCatagory?i.a.createElement(G,null):null)),i.a.createElement(S.a,{variant:"contained",color:"secondary",className:t.margin,onClick:this.keywordSearchchOnClick},"\u641c\u5c0b\u95dc\u9375\u5b57"),i.a.createElement(S.a,{variant:"contained",color:"primary",className:t.margin,onClick:this.relativeSearchOnClick},"\u641c\u5c0b\u76f8\u95dc\u7d50\u679c"),i.a.createElement(S.a,{variant:"contained",color:"primary",className:t.margin,onClick:this.mongoTest},"Mongo Test")),i.a.createElement(H.a,{in:this.state.resultAreaExpend},i.a.createElement("ul",null,this.state.verdictList.map(function(t){return i.a.createElement("li",{onClick:e.handleOpen},t.no,"\uff1a",t.mainText)})),i.a.createElement(V.a,{onClose:this.handleClose,"aria-labelledby":"customized-dialog-title",open:this.state.open},i.a.createElement(W.a,{id:"customized-dialog-title",onClose:this.handleClose},i.a.createElement("ul",null,i.a.createElement("li",null,"PTT",i.a.createElement("ul",null,a)),i.a.createElement("li",null,"TVBS",i.a.createElement("ul",null,n)),i.a.createElement("li",null,"ETTODAY",i.a.createElement("ul",null,r))))),i.a.createElement(S.a,{variant:"contained",color:"primary",className:t.margin,onClick:this.relativeSearchOnClick},"\u8fd4\u56de\u641c\u5c0b")))}}]),t}(i.a.Component),te=Object(b.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing.unit},bootstrapFormLabel:{fontSize:18}}})(ee),ae=a(141),ne=a.n(ae),re=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).handleTouchTap=function(e){e.preventDefault(),a.setState({open:!0,anchorEl:e.currentTarget})},a.handleRequestClose=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(ne.a),i.a.createElement(p.a,{muiTheme:f()(E.a)},i.a.createElement("img",{src:ne.a,alt:"Logo",width:"5%",height:"20%"}),i.a.createElement("h1",null,"\u83ab\u8a1f No-Suit"),i.a.createElement(te,null))}}]),t}(i.a.Component);u.a.render(i.a.createElement(re,null),document.getElementById("root"))}},[[295,1,2]]]);
//# sourceMappingURL=main.8e04939f.chunk.js.map