(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[41],{1123:function(t,a,n){"use strict";n.r(a);var e=n(17),i=n(6),o=n(39),c=n(0),l=n.n(c),u=n(60),r=n(7),d=n(777),s=n(65),h=n(778),b=n(859),g=n(776),f=n(13),m=n(18),O=n(19),j=function(t){Object(m.a)(n,t);var a=Object(O.a)(n);function n(){var t;Object(f.a)(this,n);for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(t=a.call.apply(a,[this].concat(i))).pathDatas=["quanLyBaoCao","baoCaoTuBon","datas"],t.pathDeleted=["quanLyBaoCao","baoCaoTuBon","deleted"],t.tonCuoiPaths=["quanLyBaoCao","baoCaoTuBon","tonCuoi"],t.initData={},t}return n}(r.AppClass),v=n(775),p=n(464),N=n(64),y=n(73),C=n(24);var T=function(t){var a,n=t.selectedTime,e=t.dateTimePicker,i=Object(u.b)();return Object(C.b)(C.a,{children:Object(C.b)(d.a,{header:Object(C.b)("div",{className:"font-weight-bold",children:Object(C.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(C.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(C.b)("div",{children:(null===e||void 0===e||null===(a=e.getDayRender)||void 0===a?void 0:a.call(e))||null}),Object(C.b)("div",{className:"mt-1",children:Object(C.b)(N.a,{block:!0,type:"primary",onClick:function(){return i(Object(p.e)(n))},children:"L\u01b0u b\xe1o c\xe1o ng\xe0y"})}),Object(C.b)("div",{className:"mt-1",children:Object(C.b)(N.a,{block:!0,type:"primary",onClick:function(){return i(Object(p.f)(n))},children:"L\u01b0u b\xe1o c\xe1o t\u1eeb \u0111\u1ea7u th\xe1ng t\u1edbi cu\u1ed1i th\xe1ng"})})]}),footer:Object(C.b)("div",{children:Object(C.b)(N.a,{icon:Object(C.b)(y.a,{}),onClick:function(){i(Object(r.toggleAside)({tagPageId:s.c.baoCaoTuBonNgayModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},S=n(26),w=n(11),D=n(782),x=n(134),M=n(112),H=n(101),B=s.c.baoCaoTuBonNgayModal;var P=function(t){var a=t.pageData,n=Object(u.c)((function(t){return t.hideColumns})),e=null===n||void 0===n?void 0:n[B||""],o=l.a.useMemo((function(){var t=[r.constants.stt,x.a.tenMatHang,M.a.tenNhomMatHang],a=[x.a.giaNhapMatHang,x.a.giaBanMatHang,H.a.tenDonViTinh,b.a.tonDau,b.a.nhap,b.a.tongSoLuong,b.a.xuat,b.a.tonCuoi];return[{id:0,colSpan:t.reduce((function(t,a){var n=a.id;return t+((null===e||void 0===e?void 0:e[n])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:a.reduce((function(t,a){var n=a.id;return t+((null===e||void 0===e?void 0:e[n])?0:1)}),0)},{id:2,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(t){return Object(r.formatNumber)(t)}},{id:3,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(t){return Object(r.formatNumber)(t)}}]}),[e]),c=l.a.useMemo((function(){return a.reduce((function(t,a){var n=t.chiPhi+(a.chiPhi||0),e=t.doanhThu+(a.doanhThu||0);return Object(i.a)(Object(i.a)({},t),{},{chiPhi:n,doanhThu:e})}),{tong:"T\u1ed5ng ti\u1ec1n",chiPhi:0,doanhThu:0})}),[a]),d=l.a.useMemo((function(){return["tong","","chiPhi","doanhThu"].map((function(t,a){return Object(w.a)({},a,c[t])}))}),[c]);return Object(C.b)(D.a,{columns:o,dataSource:d})},k=n(417),Y=n(28),L=n.n(Y),E=n(281),I=n(436),A=n(12),R=s.c.baoCaoTuBonNgayModal;a.default=function(){var t,a,n=Object(u.b)(),c=Object(r.useDatePicker)({defaultTime:L()().subtract(1,"day")}),s=Object(o.a)(c,2),f=s[0],m=s[1],O=Object(u.c)((function(t){return t.baoCaoTuBonNgay})),N=O.tabsData,y=O.loading,w=O.pageSize,D=O.baoCaoTuBonNgays,x=Object(u.c)((function(t){var a;return null===(a=t.tagsPage)||void 0===a?void 0:a[R]})),M=Object(u.c)((function(t){return t.account})).accountData,H=null===M||void 0===M||null===(t=M.paths)||void 0===t||null===(a=t.baoCaoTuBonNgay)||void 0===a?void 0:a.edit,B=Object(u.c)((function(t){return t.danhSachDHX})).danhSachDHXs,Y=Object(u.c)((function(t){return t.danhSachDHN})).danhSachDHNs,X=Object(u.c)((function(t){return t.danhSachMatHang})).danhSachMatHangs,q=Object(v.a)({Instance:j,onPending:p.d,addSelectedId:p.a,isEdit:H});l.a.useEffect((function(){n(Object(p.c)(f))}),[f,X,B,Y]),l.a.useEffect((function(){return n(Object(E.g)(f)),n(Object(I.d)(f)),function(){Object(A.j)("danhSachDHX"),Object(A.j)("danhSachDHN")}}),[f]);var z=l.a.useMemo((function(){return N?[].concat(Object(e.a)(N),[{label:"B\xe1o c\xe1o ng\xe0y: ".concat(f.format("DD-MM-YYYY")),value:"null"}]):N}),[f]);return Object(C.c)("div",{className:"baoCaoTuBonNgay-page",css:h.a,children:[Object(C.b)(d.b,{className:"tabs",options:z,activeKey:x?"aside":"",onTabClick:function(t){if("add"===t&&H){if(!H)return Object(S.o)();var a=new j;n(Object(r.openModal)({modalId:R,data:a.initData}))}else if("aside"===t)n(Object(r.toggleAside)({tagPageId:R}));else if("taiExcel"===t){var e=Object.values(X).map((function(t){var a=(null===D||void 0===D?void 0:D[null===t||void 0===t?void 0:t.id])||{};return Object(i.a)(Object(i.a)({},t),a)}));e=Object(k.a)("tenMatHang",e),n(Object(r.downloadExcel)({tableId:R,constants:b.a,fileSheet:"".concat(f.format("YYYY-MM-DD")),fileName:"Bao Cao Tu Bon Ngay ".concat(f.format("YYYY-MM-DD")),dataSource:e}))}}}),Object(C.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[x&&Object(C.b)(T,{selectedTime:f,dateTimePicker:m}),Object(C.b)("div",{className:"aside-main",children:Object(C.b)(g.a,{isEdit:H,onCallbackDataSource:function(t){return Object(k.a)("tenMatHang",t)},constants:b.a,actions:q,datas:D,loading:y,modalId:R,isSelection:!1,pagination:!0,pageSize:w,onChange:function(t){n(Object(p.g)(t.pageSize))},summary:function(t){return Object(C.b)(P,{pageData:t})}})})]})]})}},779:function(t,a,n){"use strict";n.d(a,"a",(function(){return o}));var e=n(0),i=(n(374),n(178)),o=(n(92),n(244),n(146),n(273),n(373),n(411),function(t,a){var n=arguments;if(null==a||!i.d.call(a,"css"))return e.createElement.apply(void 0,n);var o=n.length,c=new Array(o);c[0]=i.a,c[1]=Object(i.c)(t,a);for(var l=2;l<o;l++)c[l]=n[l];return e.createElement.apply(null,c)})},780:function(t,a,n){"use strict";function e(t,a){if(null==t)return{};var n,e,i=function(t,a){if(null==t)return{};var n,e,i={},o=Object.keys(t);for(e=0;e<o.length;e++)n=o[e],a.indexOf(n)>=0||(i[n]=t[n]);return i}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)n=o[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(a,"a",(function(){return e}))},782:function(t,a,n){"use strict";n(0);var e=n(538),i=n(24),o=e.a.Summary,c=o.Row,l=o.Cell;a.a=function(t){var a,n=t.columns,e=t.dataSource;return Object(i.b)(c,{children:null===n||void 0===n||null===(a=n.map)||void 0===a?void 0:a.call(n,(function(t,a){var n=null===t||void 0===t?void 0:t.id,o=(null===t||void 0===t?void 0:t.colSpan)||0,c=(null===t||void 0===t?void 0:t.cellClassName)||"",u=(null===t||void 0===t?void 0:t.valueStyle)||{},r=(null===t||void 0===t?void 0:t.valueClassName)||"",d=null===t||void 0===t?void 0:t.render,s=(null===e||void 0===e?void 0:e[a])||{},h=(null===s||void 0===s?void 0:s[n])||"";return d&&(h=d(h,s,a)),Object(i.b)(l,{index:a,colSpan:o,className:c,children:Object(i.b)("div",{style:u,className:r,children:h})},n)}))})}},859:function(t,a,n){"use strict";n.d(a,"a",(function(){return u}));var e=n(6),i=n(7),o=n(134),c=n(101),l=n(112),u={tonDau:{id:"tonDau",name:"T\u1ed3n \u0111\u1ea7u",width:60,className:"text-small",align:"right"},nhap:{id:"nhap",name:"Nh\u1eadp",width:50,className:"text-small font-weight-bold text-danger",align:"right"},tongSoLuong:{id:"tongSoLuong",name:"T\u1ed5ng SL",width:65,className:"text-small font-weight-bold",align:"right"},xuat:{id:"xuat",name:"Xu\u1ea5t",width:50,className:"text-small font-weight-bold text-danger",align:"right"},tonCuoi:{id:"tonCuoi",name:"T\u1ed3n cu\u1ed1i",width:65,className:"text-small font-weight-bold",align:"right"},chiPhi:{id:"chiPhi",name:"Chi ph\xed",width:80,className:"text-small font-weight-bold",align:"right",render:i.numberRender},doanhThu:{id:"doanhThu",name:"Doanh thu",width:80,className:"text-small font-weight-bold",align:"right",render:i.numberRender},getTableColumns:function(){return[i.constants.stt,Object(e.a)(Object(e.a)({},o.a.tenMatHang),{},{width:130}),Object(e.a)(Object(e.a)({},l.a.tenNhomMatHang),{},{width:110}),Object(e.a)(Object(e.a)({},o.a.giaNhapMatHang),{},{width:70}),Object(e.a)(Object(e.a)({},o.a.giaBanMatHang),{},{width:70}),Object(e.a)(Object(e.a)({},c.a.tenDonViTinh),{},{width:90}),this.tonDau,this.nhap,this.tongSoLuong,this.xuat,this.tonCuoi,this.chiPhi,this.doanhThu]},getInputFields:function(){return[]},getExcelFields:function(){return[i.constants.stt,i.constants.id,Object(e.a)(Object(e.a)({},o.a.tenMatHang),{},{width:150}),l.a.tenNhomMatHang,o.a.giaNhapMatHang,o.a.giaBanMatHang,c.a.tenDonViTinh,this.tonDau,this.nhap,this.tongSoLuong,this.xuat,Object(e.a)(Object(e.a)({},this.tonCuoi),{},{name:"tonCuoi"}),this.chiPhi,this.doanhThu]}}}}]);