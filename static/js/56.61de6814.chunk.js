(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[56],{1004:function(t,n,e){"use strict";e.r(n);var a=e(8),o=e(21),i=e(40),l=e(0),c=e.n(l),r=e(56),b=e(7),d=e(709),g=e(64),u=e(713),s=e(94),f=e(115),h=e(101),m=e(414),S={getTableColumns:function(){return[b.constants.stt,Object(a.a)({},s.a.tenMatHang),Object(a.a)(Object(a.a)({},f.a.tenNhomMatHang),{},{width:110}),Object(a.a)(Object(a.a)({},m.a.xuat),{},{name:"T\u1ed5ng b\xe1n",width:80}),Object(a.a)(Object(a.a)({},m.a.tonCuoi),{},{name:"T\u1ed3n kho"}),Object(a.a)({},h.a.tenDonViTinh)]},getInputFields:function(){return[]},getExcelFields:function(){return[b.constants.stt,b.constants.id,s.a.tenMatHang,f.a.tenNhomMatHang,Object(a.a)(Object(a.a)({},m.a.tonCuoi),{},{name:"soLuong"}),Object(a.a)({},h.a.tenDonViTinh)]}},p=e(711),z=e(12),O=e(18),H=e(19),j=function(t){Object(O.a)(e,t);var n=Object(H.a)(e);function e(){var t;Object(z.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=n.call.apply(n,[this].concat(o))).pathDatas=["tongHopDonHang","datas"],t.pathDeleted=["tongHopDonHang","deleted"],t.initData={},t}return e}(b.AppClass),y=e(708),T=e(418),k=e(59),x=e(65),v=e(25);var D=function(t){var n,e=t.dateTimePicker,a=Object(r.b)();return Object(v.b)(v.a,{children:Object(v.b)(d.a,{header:Object(v.b)("div",{className:"font-weight-bold",children:Object(v.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(v.b)("div",{className:"form-input-aside",style:{padding:"5px"},children:Object(v.b)("div",{children:(null===e||void 0===e||null===(n=e.getDayRender)||void 0===n?void 0:n.call(e))||null})}),footer:Object(v.b)("div",{children:Object(v.b)(k.a,{icon:Object(v.b)(x.a,{}),onClick:function(){a(Object(b.toggleAside)({tagPageId:g.c.tongHopDonHangModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},M=e(32),w=e.n(M),N=e(363),B=e(5),C=e.n(B),P=e(13),Y=e(10),I=e(781),R=e(782),A=e(753),E=e(72);function K(){return{columnGap:5,columns:[[{text:"Th\u1ef1c Ph\u1ea9m T\u01b0 B\u1ed1n".toUpperCase(),style:"bold11",bold:!0,alignment:"left",width:100},{text:"S\u1ed1 15 Nguy\u1ec5n Tri Ph\u01b0\u01a1ng, Ph\xfa Th\u1ecd, Ph\xfa Ch\xe1nh",style:"fontSize8",alignment:"left",width:100},{text:"TX T\xe2n Uy\xean, B\xecnh D\u01b0\u01a1ng",style:"fontSize8",alignment:"left",width:100},{text:"\u0110T: 0981.310.247",style:"fontSize8",alignment:"left",width:100},{text:"Website: thucphamtubon.com",style:"fontSize8",alignment:"left",width:100}],{text:"Phi\u1ebfu T\u1ed5ng H\u1ee3p Gia V\u1ecb".toUpperCase(),style:"bold20",bold:!0,alignment:"left"}]}}function V(t){var n=["STT","T\xean m\u1eb7t h\xe0ng","Nh\xf3m MH","S\u1ed1 l\u01b0\u1ee3ng","\u0110VT","Ghi ch\xfa"].map((function(t){return{text:t,style:"tableHeader",fillColor:"lightblue",alignment:"center"}})),e=[];return(t=Object(N.a)("tenMatHang",t)).forEach((function(t,n){e.push([{text:n+1,style:"textTable9",alignment:"center"},{text:t.tenMatHang||"",style:"textTable9",bold:!0},{text:t.tenNhomMatHang||"",style:"textTable9"},{text:t.soLuongThuc||"",style:"textTable9",alignment:"right",bold:!0},{text:t.tenDonViTinh,style:"textTable9",alignment:"center"},{text:"",style:"textTable9"}])})),{layout:"lightHorizontalLines",headerRows:1,dontBreakRows:!0,widths:[20,140,50,50,50,"*"],body:[n].concat(e)}}function G(t){var n=["STT","T\xean kh\xe1ch h\xe0ng","Ghi ch\xfa"].map((function(t){return{text:t,style:"tableHeader",fillColor:"lightblue",alignment:"center"}})),e=Object(E.orderBy)(t).map((function(t,n){return[{text:n+1,style:"textTable9",alignment:"center"},{text:t||"",style:"textTable9",bold:!0},{text:"",style:"textTable9"}]}));return{layout:"lightHorizontalLines",headerRows:1,dontBreakRows:!0,widths:[20,140,"*"],body:[n].concat(Object(o.a)(e))}}var L=e(378),X=e(15),U=e(385),F=g.c.tongHopDonHangModal;n.default=function(){var t,n,e=Object(r.b)(),l=Object(b.useDatePicker)({defaultTime:w()().add(1,"day")}),s=Object(i.a)(l,2),f=s[0],h=s[1],m=Object(r.c)((function(t){return t.dsMatHang})).dsMatHangs,z=Object(r.c)((function(t){return t.tongHopDonHang})),O=z.tabsData,H=z.loading,k=z.pageSize,x=z.tongHopDonHangs,M=z.maDonHangsArray,B=z.maDonHangHeaders,E=z.tenKhachHangsArray,J=Object(r.c)((function(t){return t.danhSachDHX})).danhSachDHXs,W=Object(r.c)((function(t){return t.danhSachDHN})).danhSachDHNs,_=Object(r.c)((function(t){var n;return null===(n=t.tagsPage)||void 0===n?void 0:n[F]})),q=Object(r.c)((function(t){return t.account})).accountData,Q=null===q||void 0===q||null===(t=q.paths)||void 0===t||null===(n=t.tongHopDonHang)||void 0===n?void 0:n.edit,Z=Object(y.a)({Instance:j,onPending:T.e,addSelectedId:T.a,isEdit:Q});c.a.useEffect((function(){e(Object(T.d)(f))}),[f,J,W,m]),c.a.useEffect((function(){return e(Object(L.e)(f)),e(Object(U.d)(f)),function(){Object(X.i)("danhSachDHX"),Object(X.i)("danhSachDHN")}}),[f]);var $=c.a.useMemo((function(){return O?[].concat(Object(o.a)(O),[{label:"T\u1ed5ng h\u1ee3p \u0111\u01a1n h\xe0ng ng\xe0y: ".concat(f.format("DD-MM-YYYY")),value:"null"}]):O}),[f]),tt=c.a.useMemo((function(){return Object(a.a)(Object(a.a)({},S),{},{getTableColumns:function(){var t=S.getTableColumns();return[].concat(Object(o.a)(t),Object(o.a)(M.map((function(t,n){return{id:t,name:"".concat(null===B||void 0===B?void 0:B[n]," - ").concat(null===E||void 0===E?void 0:E[n]),width:120,className:"text-small",align:"right"}}))),[b.constants.deleteRowButton])}})}),[M,B,E]);return Object(v.c)("div",{className:"tongHopDonHang-page",css:u.a,children:[Object(v.b)(d.b,{className:"tabs",options:$,activeKey:_?"aside":"",onTabClick:function(t){if("aside"===t)e(Object(b.toggleAside)({tagPageId:F}));else if("taiExcel"===t){if(!window.confirm("X\xe1c nh\u1eadn t\u1ea3i file t\u1ed5ng h\u1ee3p \u0111\u01a1n h\xe0ng?"))return null;e(Object(T.c)(f))}else"print"===t&&e(Object(b.openModal)({modalId:g.d.inDonHang}))}}),Object(v.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[_&&Object(v.b)(D,{dateTimePicker:h}),Object(v.b)("div",{className:"aside-main",children:Object(v.b)(p.a,{isEdit:Q,constants:tt,onCallbackDataSource:function(t){return Object(N.a)("tenMatHang",t)},actions:Z,datas:x,loading:H,modalId:F,isSelection:!0,pagination:!0,pageSize:k,onChange:function(t){e(Object(T.f)(t.pageSize))},expandable:{expandedRowRender:function(t){return Object(v.b)("div",{children:t.id})},expandRowByClick:!1}})})]}),Object(v.b)(b.PrintModal,{modalId:g.d.inDonHang,title:"In Phi\u1ebfu T\u1ed5ng H\u1ee3p Gia V\u1ecb Ng\xe0y ".concat(f?f.format("DD/MM/YYYY"):""),onPrint:function(t){var n=Object.values(x).filter((function(t){return"giaVi"===t.nhomMatHangId}));e(function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"A5";return function(){var o=Object(Y.a)(C.a.mark((function o(i,l){var c,r,d,g,u,s,f,h,m,S,p,z;return C.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:I.vfs=R.pdfMake.vfs,c=l(),r=c.tongHopDonHang,d=r.maDonHangHeaders,g=r.tenKhachHangsArray,u=i(Object(b.getTimestamp)({})),s=u.updatedAtString,f=u.updatedBy,h=t.reduce((function(t,n){return Object.keys(n).reduce((function(t,n){return n.indexOf("DHX")>-1?Object(a.a)(Object(a.a)({},t),{},Object(P.a)({},n,!0)):t}),t)}),{}),m=Object.keys(h).map((function(t){var n,e=null===(n=t.split("-"))||void 0===n?void 0:n[1],a=null===d||void 0===d?void 0:d.findIndex((function(t){return t===e}));return null===g||void 0===g?void 0:g[a]})),S=[K(),{style:"subHeaderStyle",columns:[{text:"Ng\xe0y: ".concat(n.format("DD.MM.YYYY")),style:"fontSize9Margin5",bold:!0},{text:"Th\u1eddi gian in phi\u1ebfu: ".concat(s,", TK: ").concat(f),style:"fontSize9Margin5",alignment:"right"}]},{table:V(t)},{table:G(m)},{style:"subHeaderStyle",columns:[{text:"Ng\u01b0\u1eddi giao",style:"fontSize10Margin5",bold:!0,alignment:"center"},{text:"Ng\u01b0\u1eddi nh\u1eadn h\xe0ng",style:"fontSize10Margin5",bold:!0,alignment:"center"}]}],p={pageSize:e,pageOrientation:"portal",pageMargins:[20,20,20,20],content:S,styles:A.a},z=window.open("","_blank"),I.createPdf(p).open({},z);case 10:case"end":return o.stop()}}),o)})));return function(t,n){return o.apply(this,arguments)}}()}(n,f,t))}})]})}},753:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a={diaChiKhachHangDonHangStyle:{fontSize:9,color:"black",margin:[5,5,5,15]},congTyTextStyle:{fontSize:13,margin:[0,0,0,2],color:"black"},logoStyle:{margin:[0,0,0,0]},headerStyle:{margin:[0,0,0,1]},subHeaderStyle:{margin:[0,15,0,0]},subheader:{fontSize:16,bold:!0,margin:[0,10,0,5]},sub10header:{fontSize:10,bold:!0,margin:[0,2,0,2]},sub8header:{fontSize:8,bold:!0,margin:[0,2,0,2]},sub11header:{fontSize:11,bold:!0,margin:[0,5,0,5]},marginBottom10:{margin:[0,0,0,10]},tableExample:{margin:[0,5,0,15]},tableHeader8:{bold:!0,fontSize:8,color:"black",margin:[1,1,1,1]},tableHeader:{bold:!0,fontSize:9,color:"black",margin:[1,1,1,1]},tableHeaderLightBlue:{bold:!0,fontSize:9,color:"black",margin:[1,1,1,1]},textTable:{fontSize:8,color:"black"},textTable8:{fontSize:8,color:"black"},textTable9:{fontSize:9,color:"black"},textTable9Bold:{fontSize:9,bold:!0,color:"black"},textTable9DonDatHang:{fontSize:9,color:"black",margin:[0,1,0,1]},textTable9BoldDonDatHang:{fontSize:9,bold:!0,color:"black",margin:[0,1,0,1]},textTable8BoldDonDatHang:{fontSize:8,bold:!0,color:"black",margin:[0,1,0,1]},textTable11BoldDonDatHang:{fontSize:11,bold:!0,color:"black"},fontSize13BoldTitle:{fontSize:14,color:"red",margin:[0,5,0,15],bold:!0},fontSize13BoldDonDatHang:{fontSize:9,margin:[0,15,0,5],bold:!0},textTable10Bold:{fontSize:10,bold:!0,color:"black"},nameRecipeTable:{fontSize:9,bold:!0,color:"black"},kindRecipeTable:{fontSize:10,color:"red",bold:!0},textStyle:{fontSize:10,margin:[0,0,0,2],color:"black"},shiftStyle:{fontSize:11,margin:[0,0,0,2],color:"black"},thueVAT:{bold:!0,fontSize:9,color:"red",margin:[10,10,0,0]},ghiChuKhachHang:{bold:!0,fontSize:9,margin:[10,10,10,5]},nguoiNhanHangStyle:{bold:!0,fontSize:10,color:"black",margin:[0,10,0,0]},columnsStyle:{margin:[0,10,0,10]},lineStyle:{backgroundColor:"black"},donDatHangStyle:{color:"red",margin:[0,10,0,0],fontSize:13},lien1GiaoKhachHangStyle:{margin:[16,2,0,0],fontSize:10},lien2LuuHanhNoiBoStyle:{margin:[40,2,0,0],fontSize:10},nguoiThietKe:{bold:!0,fontSize:11,color:"black",margin:[30,10,0,0]},ngayThangNam:{fontSize:11,color:"black",margin:[0,10,0,0]},bold8:{fontSize:8,bold:!0,color:"black",margin:[0,0,5,0]},bold11:{fontSize:11,bold:!0,color:"black",margin:[0,0,10,0]},bold14:{fontSize:14,bold:!0,color:"black",margin:[20,20,20,0]},bold15:{fontSize:15,bold:!0,color:"black",margin:[20,20,20,0]},bold16:{fontSize:16,bold:!0,color:"black",margin:[20,20,20,0]},bold20:{fontSize:20,bold:!0,color:"black",margin:[20,20,20,0]},fontSize6:{fontSize:6,color:"black"},fontSize8:{fontSize:8,color:"black",margin:[2,2,2,2]},fontSize9:{fontSize:9,color:"black",margin:[2,2,2,2]},fontSize8Margin5:{fontSize:8,color:"black",margin:[5,5,5,5]},fontSize9Top20:{fontSize:9,color:"black",margin:[2,15,2,2]},fontSize9Bottom20:{fontSize:9,color:"black",margin:[2,2,2,15]},fontSize9Margin5:{fontSize:9,color:"black",margin:[5,5,5,5]},fontSize10Margin5:{fontSize:10,color:"black",margin:[5,5,5,5]},fontSize8MarginBottom20:{fontSize:8,color:"black",margin:[5,5,5,30]},nguoiGiaoNhan:{fontSize:13,color:"black",bold:!0,margin:[0,15,0,0]},marginTop:{margin:[0,15,0,0]}}}}]);