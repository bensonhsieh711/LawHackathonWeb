(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{378:function(e,t,a){e.exports=a(700)},700:function(e,t,a){"use strict";a.r(t);var n=a(121),l=a(122),r=a(124),o=a(123),c=a(125),i=a(0),s=a.n(i),m=a(14),u=a.n(m),h=a(115),p=a.n(h),d=(a(95),a(73),a(301)),E=a.n(d),b=a(195),f=a.n(b),w=a(116),g=a.n(w),C=(a(147),a(117)),y=a.n(C),k=a(33),v=a(52),O=a.n(v),S=a(51),x=a.n(S),j=a(85),A=a.n(j),T=a(44),F=(a(487),a(304)),N=(a(563),a(50)),z=a.n(N),M=a(86),R=a.n(M),I=a(88),L=a.n(I),P=a(84),q=a.n(P),B=a(87),G=a.n(B),H={PaperProps:{style:{maxHeight:224,width:250}}},J=["\u6bba\u4eba","\u912d\u5091","\u69cd\u679d","\u5e6b\u6d3e\u9b25\u722d","\u56db\u6d77\u5e6b"];var U=function(){var e=s.a.useState([]),t=Object(F.a)(e,2),a=t[0],n=t[1];return s.a.createElement(x.a,null,s.a.createElement(O.a,{htmlFor:"select-multiple-checkbox"},"\u8acb\u9078\u64c7"),s.a.createElement(q.a,{multiple:!0,value:a,onChange:function(e){n(e.target.value)},input:s.a.createElement(z.a,{id:"select-multiple-checkbox"}),renderValue:function(e){return e.join(", ")},MenuProps:H},J.map(function(e){return s.a.createElement(R.a,{key:e,value:e},s.a.createElement(G.a,{checked:a.indexOf(e)>-1}),s.a.createElement(L.a,{primary:e}))})))},_=a(118),D=a.n(_),V=a(89),W=a.n(V),Y=a(119),K=a.n(Y),Q=a(120),X=a.n(Q),Z=a(303),$=a.n(Z),ee=Object(k.withStyles)(function(e){return{root:{"label + &":{marginTop:3*e.spacing.unit}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,width:"auto",padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}})(A.a),te=[["\u725b\u90ce\u559d\u5230\u9152\u7cbe\u4e2d\u6bd2\u4ea1 \u6cd5\u9662\u9996\u6b21","https://www.ptt.cc/bbs/Gossiping/M.1559175089.A.5CF.html"],["\u6d3e\u9063\u5de5\u6dda\u54ed\u6cd5\u9662\u722d\u6b0a\u76ca \u63a7\u544a","https://www.ptt.cc/bbs/Gossiping/M.1559552992.A.FAA.html"],["\u52c7\u8b66\u5f35\u666f\u7fa9\u958b\u69cd\u64ca\u6583\u62d2\u6355\u7aca\u8cca","https://www.ptt.cc/bbs/Gossiping/M.1559196474.A.E18.html"]],ae=[["\u906d\u76e3\u9662\u5f48\u52be\u8349\u7387\u8d77\u8a34\u7372\u5224\u514d\u61f2\u6212","https://www.ettoday.net/news/20190603/1459330.htm"],["\u8cfc\u7269\u4e2d\u5fc3\u54e1\u5de5\u5077\u62cd\u5973\u540c\u4e8b\u88d9\u5e95","https://www.ettoday.net/news/20190603/1459043.htm"],["\u5c0f\u4e09\u88f8\u7167\u55c6\u8072\uff01\u8001\u516c\u990a\u4e86\u5979\u7684\u5b69\u5b50","https://www.ettoday.net/news/20190603/1459226.htm"]],ne=[["\u5973\u63a7\u523a\u9752\u5716\u919c\u6c42\u511f\u6557\u8a34","https://news.tvbs.com.tw/local/1143610"],["\u7537\u501f\u7af9\u7aff\u6458\u8292\u679c\u6454\u6b7b","https://news.tvbs.com.tw/local/1127982"],["\u63ed\u5973\u7ae5\u7591\u5929\u5929\u906d\u54e5\u6027\u4fb5","https://news.tvbs.com.tw/tech/1130420"]],le=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={search:"",showCatagory:!1,name:[],searchAreaExpend:!0,resultAreaExpend:!1,open:!1,newsContent:""},a.handleChange=function(e){a.setState({search:e.target.value})},a.keywordSearchchOnClick=function(){a.setState({showCatagory:!a.state.showCatagory}),$.a.post("localhost:3200/casigo/account/read",{year:2002}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})},a.relativeSearchOnClick=function(){a.setState({searchAreaExpend:!a.state.searchAreaExpend,resultAreaExpend:!a.state.resultAreaExpend})},a.handleClose=function(){a.setState({open:!1})},a.handleOpen=function(){a.setState({open:!0})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"handleListItemClick",value:function(e){}},{key:"render",value:function(){var e=this.props.classes,t=te.map(function(e){return s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",href:e[1]},e[0]))}),a=ne.map(function(e,t){return s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",href:e[1]},e[0]))}),n=ae.map(function(e,t){return s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",href:e[1]},e[0]))});return s.a.createElement(D.a,null,s.a.createElement(W.a,{in:this.state.searchAreaExpend},s.a.createElement("form",{className:e.root,autoComplete:"off"},s.a.createElement(x.a,{className:e.margin},s.a.createElement(O.a,{htmlFor:"search-customized-select",className:e.bootstrapFormLabel},"\u8f38\u5165\u95dc\u9375\u5b57"),s.a.createElement(ee,null)),s.a.createElement(x.a,{className:e.margin},s.a.createElement(O.a,{htmlFor:"search-customized-select",className:e.bootstrapFormLabel}),1==this.state.showCatagory?s.a.createElement(U,null):null)),s.a.createElement(T.a,{variant:"contained",color:"secondary",className:e.margin,onClick:this.keywordSearchchOnClick},"\u641c\u5c0b\u95dc\u9375\u5b57"),s.a.createElement(T.a,{variant:"contained",color:"primary",className:e.margin,onClick:this.relativeSearchOnClick},"\u641c\u5c0b\u76f8\u95dc\u7d50\u679c")),s.a.createElement(W.a,{in:this.state.resultAreaExpend},s.a.createElement(T.a,{onClick:this.handleOpen},"\u6848\u4ef6\u4e00"),s.a.createElement(T.a,{onClick:this.handleOpen},"\u6848\u4ef6\u4e8c"),s.a.createElement(T.a,{onClick:this.handleOpen},"\u6848\u4ef6\u4e09"),s.a.createElement(T.a,{onClick:this.handleOpen},"\u6848\u4ef6\u56db"),s.a.createElement(K.a,{onClose:this.handleClose,"aria-labelledby":"customized-dialog-title",open:this.state.open},s.a.createElement(X.a,{id:"customized-dialog-title",onClose:this.handleClose},s.a.createElement("ul",null,s.a.createElement("li",null,"PTT",s.a.createElement("ul",null,t)),s.a.createElement("li",null,"TVBS",s.a.createElement("ul",null,a)),s.a.createElement("li",null,"ETTODAY",s.a.createElement("ul",null,n))))),s.a.createElement(T.a,{variant:"contained",color:"primary",className:e.margin,onClick:this.relativeSearchOnClick},"\u8fd4\u56de\u641c\u5c0b")))}}]),t}(s.a.Component),re=Object(k.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing.unit},bootstrapFormLabel:{fontSize:18}}})(le),oe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).handleTouchTap=function(e){e.preventDefault(),a.setState({open:!0,anchorEl:e.currentTarget})},a.handleRequestClose=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{muiTheme:f()(E.a)},s.a.createElement(y.a,{open:this.state.open,anchorEl:this.state.anchorEl,anchorOrigin:{horizontal:"left",vertical:"bottom"},targetOrigin:{horizontal:"left",vertical:"top"},onRequestClose:this.handleRequestClose}),s.a.createElement(g.a,{style:{fontFamily:"Microsoft JhengHei"},title:"\u83ab\u8a1f No-Suit",onClick:this.handleTouchTap}),s.a.createElement(re,null))}}]),t}(s.a.Component);u.a.render(s.a.createElement(oe,null),document.getElementById("root"))}},[[378,1,2]]]);
//# sourceMappingURL=main.9528603e.chunk.js.map