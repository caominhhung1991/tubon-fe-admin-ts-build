(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[5],{726:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var a=e(7),o=e(731),l={donHangId:{id:"donHangId",name:"M\xe3 \u0110H",width:100,className:"text-small",isSearch:!0,align:"center",sorter:Object(a.sortByText)("donHangId"),form:{type:"input",innerProps:{disabled:!0}}},ngayDat:{id:"ngayDat",name:"Ng\xe0y \u0111\u1eb7t",width:100,className:"text-small",isSearch:!0,align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayGiao:{id:"ngayGiao",name:"Ng\xe0y giao",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(a.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayNhan:{id:"ngayNhan",name:"Ng\xe0y nh\u1eadn",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(a.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},tongTienMatHang:{id:"tongTienMatHang",name:"T\u1ed5ng ti\u1ec1n m\u1eb7t h\xe0ng",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},tongTienMatHangTra:{id:"tongTienMatHangTra",name:"T\u1ed5ng ti\u1ec1n tr\u1ea3",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},tongTienDonHang:{id:"tongTienDonHang",name:"T\u1ed5ng ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},daThanhToan:{id:"daThanhToan",name:"\u0110\xe3 giao",width:90,className:"text-small",filters:a.trueFalseFilter.filters,onFilter:a.trueFalseFilter.onFilter("daThanhToan"),align:"center",render:Object(o.a)("DaThanhToan")},getTableColumns:function(){return[a.constants.stt,a.constants.active,a.constants.editRow]},getInputFields:function(){return[]},getExcelFields:function(){return[a.constants.active]}}},729:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e(0);var a=e(7),o=e(72),l=e(25),i={soLuong:{id:"soLuong",name:"S\u1ed1 l\u01b0\u1ee3ng",width:100,className:"text-small font-weight-bold",align:"right",form:{type:"input-number-format"}},soLuongThuc:{id:"soLuongThuc",name:"SL nh\u1eadn",width:100,className:"text-small font-weight-bold",align:"right",form:{type:"input-number-format"}},thanhTien:{id:"thanhTien",name:"Th\xe0nh ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},thanhTienSauVAT:{id:"thanhTienSauVAT",name:"Th\xe0nh ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},ghiChu:{id:"ghiChu",name:"Ghi ch\xfa",width:100,className:"text-small",form:{type:"text-area"},render:function(t,n,e,a){var i,r=(null===a||void 0===a||null===(i=a.inputOptions)||void 0===i?void 0:i.openEditGhiChu)||o.noop;return Object(l.b)("div",{className:"hoverClassBG",onClick:function(){return r(n)},children:t||"--"})}},getTableColumns:function(){return[]},getInputFields:function(){return[]}}},731:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var a=e(487),o=e(25);function l(t){return function(n,e,l,i){var r,c=null===i||void 0===i||null===(r=i.inputOptions)||void 0===r?void 0:r["onActive".concat(t)];if(!c)return Object(o.b)(a.a,{size:"small",checked:!!n});return Object(o.b)(a.a,{size:"small",checked:!!n,onClick:function(t,n){n.stopPropagation(),null===c||void 0===c||c(t,e)}})}}},756:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return o}));var a={giaVi:{id:"giaVi",tenLoaiDonHang:"Gia v\u1ecb",active:!0}},o={tenLoaiDonHang:{id:"tenLoaiDonHang",name:"T\xean lo\u1ea1i \u0110H",className:"text-small",width:110,isSearch:!0},getTableColumns:function(){return[]},getInputFields:function(){return[]}}},768:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a={diaChiKhachHangDonHangStyle:{fontSize:9,color:"black",margin:[5,5,5,15]},congTyTextStyle:{fontSize:13,margin:[0,0,0,2],color:"black"},logoStyle:{margin:[0,0,0,0]},headerStyle:{margin:[0,0,0,1]},subHeaderStyle:{margin:[0,15,0,0]},subheader:{fontSize:16,bold:!0,margin:[0,10,0,5]},sub10header:{fontSize:10,bold:!0,margin:[0,2,0,2]},sub8header:{fontSize:8,bold:!0,margin:[0,2,0,2]},sub11header:{fontSize:11,bold:!0,margin:[0,5,0,5]},marginBottom10:{margin:[0,0,0,10]},tableExample:{margin:[0,5,0,15]},tableHeader8:{bold:!0,fontSize:8,color:"black",margin:[1,1,1,1]},tableHeader:{bold:!0,fontSize:9,color:"black",margin:[1,1,1,1]},tableHeaderLightBlue:{bold:!0,fontSize:9,color:"black",margin:[1,1,1,1]},textTable:{fontSize:8,color:"black"},textTable8:{fontSize:8,color:"black"},textTable9:{fontSize:9,color:"black"},textTable9Bold:{fontSize:9,bold:!0,color:"black"},textTable9DonDatHang:{fontSize:9,color:"black",margin:[0,1,0,1]},textTable9BoldDonDatHang:{fontSize:9,bold:!0,color:"black",margin:[0,1,0,1]},textTable8BoldDonDatHang:{fontSize:8,bold:!0,color:"black",margin:[0,1,0,1]},textTable11BoldDonDatHang:{fontSize:11,bold:!0,color:"black"},fontSize13BoldTitle:{fontSize:14,color:"red",margin:[0,5,0,15],bold:!0},fontSize13BoldDonDatHang:{fontSize:9,margin:[0,15,0,5],bold:!0},textTable10Bold:{fontSize:10,bold:!0,color:"black"},nameRecipeTable:{fontSize:9,bold:!0,color:"black"},kindRecipeTable:{fontSize:10,color:"red",bold:!0},textStyle:{fontSize:10,margin:[0,0,0,2],color:"black"},shiftStyle:{fontSize:11,margin:[0,0,0,2],color:"black"},thueVAT:{bold:!0,fontSize:9,color:"red",margin:[10,10,0,0]},ghiChuKhachHang:{bold:!0,fontSize:9,margin:[10,10,10,5]},nguoiNhanHangStyle:{bold:!0,fontSize:10,color:"black",margin:[0,10,0,0]},columnsStyle:{margin:[0,10,0,10]},lineStyle:{backgroundColor:"black"},donDatHangStyle:{color:"red",margin:[0,10,0,0],fontSize:13},lien1GiaoKhachHangStyle:{margin:[16,2,0,0],fontSize:10},lien2LuuHanhNoiBoStyle:{margin:[40,2,0,0],fontSize:10},nguoiThietKe:{bold:!0,fontSize:11,color:"black",margin:[30,10,0,0]},ngayThangNam:{fontSize:11,color:"black",margin:[0,10,0,0]},bold8:{fontSize:8,bold:!0,color:"black",margin:[0,0,5,0]},bold11:{fontSize:11,bold:!0,color:"black",margin:[0,0,10,0]},bold14:{fontSize:14,bold:!0,color:"black",margin:[20,20,20,0]},bold15:{fontSize:15,bold:!0,color:"black",margin:[20,20,20,0]},bold16:{fontSize:16,bold:!0,color:"black",margin:[20,20,20,0]},bold20:{fontSize:20,bold:!0,color:"black",margin:[20,20,20,0]},fontSize6:{fontSize:6,color:"black"},fontSize8:{fontSize:8,color:"black",margin:[2,2,2,2]},fontSize9:{fontSize:9,color:"black",margin:[2,2,2,2]},fontSize8Margin5:{fontSize:8,color:"black",margin:[5,5,5,5]},fontSize9Top20:{fontSize:9,color:"black",margin:[2,15,2,2]},fontSize9Bottom20:{fontSize:9,color:"black",margin:[2,2,2,15]},fontSize9Margin5:{fontSize:9,color:"black",margin:[5,5,5,5]},fontSize10Margin5:{fontSize:10,color:"black",margin:[5,5,5,5]},fontSize8MarginBottom20:{fontSize:8,color:"black",margin:[5,5,5,30]},nguoiGiaoNhan:{fontSize:13,color:"black",bold:!0,margin:[0,15,0,0]},marginTop:{margin:[0,15,0,0]}}},772:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var a=e(7),o={tenKhachHang:{id:"tenKhachHang",name:"T\xean KH",className:"text-small font-weight-bold",width:140,align:"",isSearch:!0,form:{required:!0,type:"input"}},tenDayDu:{id:"tenDayDu",name:"T\xean \u0111\u1ea7y \u0111\u1ee7",className:"text-small",width:110,align:"",isSearch:!0,sorter:Object(a.sortByText)("tenDayDu"),form:{type:"input"}},diaChi:{id:"diaChi",name:"\u0110\u1ecba ch\u1ec9",className:"text-small",width:180,isSearch:!0,form:{type:"text-area"}},getTableColumns:function(){return[]},getInputFields:function(){return[]},getExcelFields:function(){return[]}}},870:function(t,n,e){"use strict";e.d(n,"a",(function(){return x}));var a=e(5),o=e.n(a),l=e(20),i=e(9),r=e(31),c=e.n(r),g=e(782),d=e(783),s=e(768),b=e(72);function u(t){return{style:"",columnGap:5,columns:[[{text:"Th\u1ef1c Ph\u1ea9m T\u01b0 B\u1ed1n".toUpperCase(),style:"bold11",bold:!0,alignment:"left",width:100},{text:"S\u1ed1 15 Nguy\u1ec5n Tri Ph\u01b0\u01a1ng, Ph\xfa Th\u1ecd, Ph\xfa Ch\xe1nh",style:"fontSize8",alignment:"left",width:100},{text:"TX T\xe2n Uy\xean, B\xecnh D\u01b0\u01a1ng",style:"fontSize8",alignment:"left",width:100},{text:"\u0110T: 0981.310.247",style:"fontSize8",alignment:"left",width:100},{text:"Website: thucphamtubon.com",style:"fontSize8",alignment:"left",width:100}],{text:"H\xd3A \u0110\u01a0N B\xc1N H\xc0NG".toUpperCase(),style:"bold20",bold:!0,alignment:"left"},{text:"",width:40}]}}function h(t){return{style:"",columnGap:5,columns:[{image:"data:image/png;base64,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",width:50,style:"logoStyle",alignment:"right"},{text:"\u0110\u01a1n H\xe0ng H\u1eb1ng Ng\xe0y".toUpperCase(),width:400,style:"bold15",bold:!0,alignment:"center"},[{text:"M\xe3 s\u1ed1: AC-TC/Cs-002",style:"fontSize8"},{text:"Nga\u0300y pha\u0301t ha\u0300nh:",style:"fontSize8"},{text:"01/03/2017",style:"fontSize8"},{text:"L\u1ea7n pha\u0301t ha\u0300nh: l\xe2\u0300n th\u01b0\u0301 1",style:"fontSize8"},{text:"S\u1ed1 trang: 1",style:"fontSize8"},{text:"H\xecnh th\u1ee9c g\u1edfi: v\u0103n b\u1ea3n",style:"fontSize8"}]]}}var m=e(367),A=e(7);function f(t){var n=[],e=Object.values(t.chiTietDonHangs||{});return(e=Object(m.a)("tenMatHang",e)).forEach((function(t,e){var a=Math.round(t.soLuongThuc*t.giaBanMatHang);n.push([{text:e+1,style:"textTable9",alignment:"center"},{text:t.tenMatHang||"",style:"textTable9",bold:!0},{text:t.tenDonViTinh,style:"textTable9",alignment:"center"},{text:t.soLuongThuc||"",style:"textTable9",alignment:"center",bold:!0},{text:Object(A.formatNumber)(t.giaBanMatHang)||"",style:"textTable9",alignment:"right"},{text:Object(A.formatNumber)(a)||"",style:"textTable9",bold:!0,alignment:"right"},{text:t.ghiChu||"",style:"textTable9"}])})),n}function y(t){var n=t.tongTienDonHang,e=void 0===n?0:n;return{layout:"lightHorizontalLines",headerRows:1,dontBreakRows:!0,widths:[20,140,50,50,55,70,"*"],body:[["STT","T\xean m\u1eb7t h\xe0ng","\u0110VT","S\u1ed1 l\u01b0\u1ee3ng","\u0110\u01a1n gi\xe1","Th\xe0nh ti\u1ec1n","Ghi ch\xfa"].map((function(t){return{text:t,style:"tableHeader",fillColor:"lightblue",alignment:"center"}}))].concat(Object(l.a)(f(t)),[[{text:"TH\xc0NH TI\u1ec0N",style:"textTable10Bold",bold:!0,alignment:"center",colSpan:5},"","","","",{text:Object(A.formatNumber)(e),bold:!0,style:"textTable10Bold",alignment:"right"},""]])}}var S=e(756);function T(t){var n=[],e=Object.values(t.chiTietDonHangs||{});return(e=Object(m.a)("tenMatHang",e)).forEach((function(t,e){var a=t.tenMatHang,o=t.tenDonViTinh,l=t.soLuongThuc,i=void 0===l?0:l,r=t.giaBanMatHang,c=void 0===r?0:r,g=t.vat,d=t.ghiChu,s=void 0===d?"":d,b=Math.round(i*c),u=Math.round(c+c*g/100);u=u||c;var h=Math.round(i*u);h=h||b;var m=g?"".concat(g,"% VAT;"):"",f="".concat(m," ").concat(s),y=g?u:"";n.push([{text:e+1,style:"textTable9",alignment:"center"},{text:a||"",style:"textTable9",bold:!0},{text:o,style:"textTable9",alignment:"center"},{text:i||"",style:"textTable9",alignment:"center",bold:!0},{text:Object(A.formatNumber)(c)||"",style:"textTable9",alignment:"right"},{text:Object(A.formatNumber)(b)||"",style:"textTable9",alignment:"right"},{text:Object(A.formatNumber)(y)||"",style:"textTable9",bold:!0,alignment:"right"},{text:Object(A.formatNumber)(h)||"",style:"textTable9",bold:!0,alignment:"right"},{text:f,style:"textTable9"}])})),n}function v(t){var n=t.tongTienDonHang,e=void 0===n?0:n,a=t.chiTietDonHangs,o=void 0===a?{}:a,i=["STT","T\xean m\u1eb7t h\xe0ng","\u0110VT","SL","\u0110\u01a1n gi\xe1","Th\xe0nh ti\u1ec1n","Gi\xe1 sau VAT","Th\xe0nh ti\u1ec1n","Ghi ch\xfa"].map((function(t){return{text:t,style:"tableHeader",fillColor:"lightblue",alignment:"center"}})),r=Object.values(o).reduce((function(t,n){var e=n.giaBanMatHang,a=void 0===e?0:e,o=n.soLuongThuc,l=void 0===o?0:o;return t+Math.round(a*l)}),0);return{layout:"lightHorizontalLines",headerRows:1,dontBreakRows:!0,widths:[20,100,40,35,45,55,55,55,"*"],body:[i].concat(Object(l.a)(T(t)),[[{text:"TH\xc0NH TI\u1ec0N",style:"textTable10Bold",bold:!0,alignment:"center",colSpan:5},"","","","",{text:Object(A.formatNumber)(r),bold:!0,style:"textTable10Bold",alignment:"right"},"",{text:Object(A.formatNumber)(e),bold:!0,style:"textTable10Bold",alignment:"right"},""]])}}function x(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"A5";return function(){var e=Object(i.a)(o.a.mark((function e(a,i){var r,m,A,f,T,x,z,H,k,F,q,B,L,V,p,Y,j,X,K,C,D;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(g.vfs=d.pdfMake.vfs,r=i(),m=r.dsKhachHang.dsKhachHangs,A=[],f=0;f<(t||[]).length;f++)T=(null===t||void 0===t?void 0:t[f])||{},x=T.id,z=T.donHangId,H=T.tenKhachHang,k=T.khachHangId,F=T.ngayGiao,q=T.loaiDonHangId,B=(null===m||void 0===m?void 0:m[k])||{},L=B.diaChi,V=B.congTyId,p=q===S.b.giaVi.id,Y=c()(F,"L"),j=null,j="-Mzxy-28H6NupoQHWc28"===V?h:u,X=p?v:y,K=[f===b.values.length-1?{}:{text:"",pageBreak:"before"},j(),{style:"subHeaderStyle",columns:[{text:"M\xe3 H\u0110: ".concat(z||""," - ").concat(x),style:"fontSize9Margin5",bold:!0,width:150},{text:"T\xean Kh\xe1ch H\xe0ng: ".concat(H||""),style:"fontSize9Margin5",bold:!0},{text:"Ng\xe0y: ".concat(Y.format("DD.MM.YYYY")),style:"fontSize9Margin5",alignment:"right",bold:!0}]},{text:"\u0110\u1ecba Ch\u1ec9: ".concat(L),style:"diaChiKhachHangDonHangStyle",bold:!0},{table:X(T)},{style:"subHeaderStyle",columns:[{text:"Ng\u01b0\u1eddi giao",style:"fontSize10Margin5",bold:!0,alignment:"center"},{text:"Ng\u01b0\u1eddi nh\u1eadn h\xe0ng",style:"fontSize10Margin5",bold:!0,alignment:"center"}]}],A=[].concat(Object(l.a)(A),K);C={pageSize:n,pageOrientation:"portal",pageMargins:[20,20,20,20],content:A,styles:s.a},D=window.open("","_blank"),g.createPdf(C).open({},D);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}}]);