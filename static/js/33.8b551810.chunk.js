(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[33],{1013:function(t,a,n){"use strict";n.r(a);var e=n(20),i=n(8),o=n(40),c=n(0),l=n.n(c),u=n(56),r=n(7),d=n(714),s=n(64),b=n(718),h=n(96),g=n(103),m=n(104),f={tonDau:{id:"tonDau",name:"T\u1ed3n \u0111\u1ea7u",width:60,className:"text-small",align:"right"},nhap:{id:"nhap",name:"Nh\u1eadp",width:50,className:"text-small font-weight-bold text-danger",align:"right"},tongSoLuong:{id:"tongSoLuong",name:"T\u1ed5ng SL",width:65,className:"text-small font-weight-bold",align:"right"},xuat:{id:"xuat",name:"Xu\u1ea5t",width:50,className:"text-small font-weight-bold text-danger",align:"right"},tonCuoi:{id:"tonCuoi",name:"T\u1ed3n cu\u1ed1i",width:65,className:"text-small font-weight-bold",align:"right"},chiPhi:{id:"chiPhi",name:"Chi ph\xed",width:80,className:"text-small font-weight-bold",align:"right",render:r.numberRender},doanhThu:{id:"doanhThu",name:"Doanh thu",width:80,className:"text-small font-weight-bold",align:"right",render:r.numberRender},getTableColumns:function(){return[r.constants.stt,Object(i.a)(Object(i.a)({},h.a.tenMatHang),{},{width:130}),Object(i.a)(Object(i.a)({},m.a.tenNhomMatHang),{},{width:110}),Object(i.a)(Object(i.a)({},h.a.giaNhapMatHang),{},{width:70}),Object(i.a)(Object(i.a)({},h.a.giaBanMatHang),{},{width:70}),Object(i.a)(Object(i.a)({},g.a.tenDonViTinh),{},{width:90}),this.tonDau,this.nhap,this.tongSoLuong,this.xuat,this.tonCuoi,this.chiPhi,this.doanhThu]},getInputFields:function(){return[]},getExcelFields:function(){return[r.constants.stt,r.constants.id,h.a.tenMatHang,m.a.tenNhomMatHang,h.a.giaNhapMatHang,h.a.giaBanMatHang,g.a.tenDonViTinh,this.tonDau,this.nhap,this.tongSoLuong,this.xuat,Object(i.a)(Object(i.a)({},this.tonCuoi),{},{name:"tonCuoi"}),this.chiPhi,this.doanhThu]}},v=n(717),O=n(12),j=n(18),p=n(19),N=function(t){Object(j.a)(n,t);var a=Object(p.a)(n);function n(){var t;Object(O.a)(this,n);for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(t=a.call.apply(a,[this].concat(i))).pathDatas=["quanLyBaoCao","baoCaoTuBon","datas"],t.pathDeleted=["quanLyBaoCao","baoCaoTuBon","deleted"],t.tonCuoiPaths=["quanLyBaoCao","baoCaoTuBon","tonCuoi"],t.initData={},t}return n}(r.AppClass),y=n(713),C=n(402),T=n(59),w=n(65),M=n(25);var x=function(t){var a,n=t.selectedTime,e=t.dateTimePicker,i=Object(u.b)();return Object(M.b)(M.a,{children:Object(M.b)(d.a,{header:Object(M.b)("div",{className:"font-weight-bold",children:Object(M.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(M.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(M.b)("div",{children:(null===e||void 0===e||null===(a=e.getDayRender)||void 0===a?void 0:a.call(e))||null}),Object(M.b)("div",{className:"mt-1",children:Object(M.b)(T.a,{block:!0,type:"primary",onClick:function(){return i(Object(C.e)(n))},children:"L\u01b0u b\xe1o c\xe1o ng\xe0y"})}),Object(M.b)("div",{className:"mt-1",children:Object(M.b)(T.a,{block:!0,type:"primary",onClick:function(){return i(Object(C.f)(n))},children:"L\u01b0u b\xe1o c\xe1o t\u1eeb \u0111\u1ea7u th\xe1ng t\u1edbi cu\u1ed1i th\xe1ng"})})]}),footer:Object(M.b)("div",{children:Object(M.b)(T.a,{icon:Object(M.b)(w.a,{}),onClick:function(){i(Object(r.toggleAside)({tagPageId:s.c.baoCaoTuBonNgayModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},D=n(35),S=n(13),B=n(720),P=s.c.baoCaoTuBonNgayModal;var H=function(t){var a=t.pageData,n=Object(u.c)((function(t){return t.hideColumns})),e=null===n||void 0===n?void 0:n[P||""],o=l.a.useMemo((function(){var t=[r.constants.stt,h.a.tenMatHang,m.a.tenNhomMatHang],a=[h.a.giaNhapMatHang,h.a.giaBanMatHang,g.a.tenDonViTinh,f.tonDau,f.nhap,f.tongSoLuong,f.xuat,f.tonCuoi];return[{id:0,colSpan:t.reduce((function(t,a){var n=a.id;return t+((null===e||void 0===e?void 0:e[n])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:a.reduce((function(t,a){var n=a.id;return t+((null===e||void 0===e?void 0:e[n])?0:1)}),0)},{id:2,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(t){return Object(r.formatNumber)(t)}},{id:3,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(t){return Object(r.formatNumber)(t)}}]}),[e]),c=l.a.useMemo((function(){return a.reduce((function(t,a){var n=t.chiPhi+(a.chiPhi||0),e=t.doanhThu+(a.doanhThu||0);return Object(i.a)(Object(i.a)({},t),{},{chiPhi:n,doanhThu:e})}),{tong:"T\u1ed5ng ti\u1ec1n",chiPhi:0,doanhThu:0})}),[a]),d=l.a.useMemo((function(){return["tong","","chiPhi","doanhThu"].map((function(t,a){return Object(S.a)({},a,c[t])}))}),[c]);return Object(M.b)(B.a,{columns:o,dataSource:d})},k=n(365),Y=n(32),L=n.n(Y),I=s.c.baoCaoTuBonNgayModal;a.default=function(){var t,a,n=Object(u.b)(),c=Object(r.useDatePicker)({defaultTime:L()().subtract(1,"day")}),s=Object(o.a)(c,2),h=s[0],g=s[1],m=Object(u.c)((function(t){return t.baoCaoTuBonNgay})),O=m.tabsData,j=m.loading,p=m.pageSize,T=m.baoCaoTuBonNgays,w=Object(u.c)((function(t){var a;return null===(a=t.tagsPage)||void 0===a?void 0:a[I]})),S=Object(u.c)((function(t){return t.account})).accountData,B=null===S||void 0===S||null===(t=S.paths)||void 0===t||null===(a=t.baoCaoTuBonNgay)||void 0===a?void 0:a.edit,P=Object(u.c)((function(t){return t.dsMatHang})).dsMatHangs,Y=Object(y.a)({Instance:N,onPending:C.d,addSelectedId:C.a,isEdit:B});l.a.useEffect((function(){Object.values(P).length&&h&&n(Object(C.c)(h))}),[h,P]);var E=l.a.useMemo((function(){return O?[].concat(Object(e.a)(O),[{label:"B\xe1o c\xe1o ng\xe0y: ".concat(h.format("DD-MM-YYYY")),value:"null"}]):O}),[h]);return Object(M.c)("div",{className:"baoCaoTuBonNgay-page",css:b.a,children:[Object(M.b)(d.b,{className:"tabs",options:E,activeKey:w?"aside":"",onTabClick:function(t){if("add"===t&&B){if(!B)return Object(D.j)();var a=new N;n(Object(r.openModal)({modalId:I,data:a.initData}))}else if("aside"===t)n(Object(r.toggleAside)({tagPageId:I}));else if("taiExcel"===t){var e=Object.values(P).map((function(t){var a=(null===T||void 0===T?void 0:T[null===t||void 0===t?void 0:t.id])||{};return Object(i.a)(Object(i.a)({},t),a)}));e=Object(k.a)("tenMatHang",e),n(Object(r.downloadExcel)({tableId:I,constants:f,fileSheet:"".concat(h.format("YYYY-MM-DD")),fileName:"Bao Cao Tu Bon Ngay ".concat(h.format("YYYY-MM-DD")),dataSource:e}))}}}),Object(M.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[w&&Object(M.b)(x,{selectedTime:h,dateTimePicker:g}),Object(M.b)("div",{className:"aside-main",children:Object(M.b)(v.a,{isEdit:B,onCallbackDataSource:function(t){return Object(k.a)("tenMatHang",t)},constants:f,actions:Y,datas:T,loading:j,modalId:I,isSelection:!1,pagination:!0,pageSize:p,onChange:function(t){n(Object(C.g)(t.pageSize))},onRow:function(t){return{onClick:function(){B&&n(Object(r.openModal)({modalId:I,data:t}))}}},summary:function(t){return Object(M.b)(H,{pageData:t})}})})]})]})}},715:function(t,a,n){"use strict";n.d(a,"a",(function(){return o}));var e=n(0),i=(n(327),n(161)),o=(n(79),n(214),n(126),n(235),n(326),n(360),function(t,a){var n=arguments;if(null==a||!i.d.call(a,"css"))return e.createElement.apply(void 0,n);var o=n.length,c=new Array(o);c[0]=i.a,c[1]=Object(i.c)(t,a);for(var l=2;l<o;l++)c[l]=n[l];return e.createElement.apply(null,c)})},716:function(t,a,n){"use strict";function e(t,a){if(null==t)return{};var n,e,i=function(t,a){if(null==t)return{};var n,e,i={},o=Object.keys(t);for(e=0;e<o.length;e++)n=o[e],a.indexOf(n)>=0||(i[n]=t[n]);return i}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)n=o[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(a,"a",(function(){return e}))},720:function(t,a,n){"use strict";n(0);var e=n(475),i=n(25),o=e.a.Summary,c=o.Row,l=o.Cell;a.a=function(t){var a,n=t.columns,e=t.dataSource;return Object(i.b)(c,{children:null===n||void 0===n||null===(a=n.map)||void 0===a?void 0:a.call(n,(function(t,a){var n=null===t||void 0===t?void 0:t.id,o=(null===t||void 0===t?void 0:t.colSpan)||0,c=(null===t||void 0===t?void 0:t.cellClassName)||"",u=(null===t||void 0===t?void 0:t.valueStyle)||{},r=(null===t||void 0===t?void 0:t.valueClassName)||"",d=null===t||void 0===t?void 0:t.render,s=(null===e||void 0===e?void 0:e[a])||{},b=(null===s||void 0===s?void 0:s[n])||"";return d&&(b=d(b,s,a)),Object(i.b)(l,{index:a,colSpan:o,className:c,children:Object(i.b)("div",{style:u,className:r,children:b})},n)}))})}}}]);