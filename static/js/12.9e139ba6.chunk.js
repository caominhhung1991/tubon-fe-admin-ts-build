(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[12],{719:function(t,n,e){"use strict";var a=e(5),o=e.n(a),i=e(10),c=e(0),l=e.n(c),r=e(7),d=e(59),u=e(44),s=e(280),b=e(55),h=e(367),g=e(704),f=e(328),O=e(64),m=e(359),p=e(36),j=e(710),v=e(25),y=O.c.taiKhoanNganHangModal;n.a=function(t){var n,e,a=t.onAfterAddFinish,c=Object(b.b)(),O=Object(u.u)(),T=Object(b.c)((function(t){return t.form})),H=T.modal,x=T.datas,C=Object(b.c)((function(t){return t.account})).accountData,M=null===C||void 0===C||null===(n=C.paths)||void 0===n||null===(e=n.taiKhoanNganHang)||void 0===e?void 0:e.edit,w=Object(g.a)({Instance:f.a,onPending:m.e,addSelectedId:m.a,isEdit:M}),N=l.a.useMemo((function(){var t;return!!(null===H||void 0===H||null===(t=H[y])||void 0===t?void 0:t.open)}),[H[y]]);function S(){return(S=Object(i.a)(o.a.mark((function t(n,e){var i,l,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(M){t.next=2;break}return t.abrupt("return",Object(p.k)());case 2:if(i=!0,l=e,!e){t.next=18;break}if(null===n||void 0===n?void 0:n.id){t.next=13;break}return t.next=8,c(w.onAddAsync({validatedValues:l}));case 8:i=t.sent,null===a||void 0===a||a(null===(d=i)||void 0===d?void 0:d.id),i=Boolean(i),t.next=18;break;case 13:return t.t0=Boolean,t.next=16,c(w.onUpdateAsync({currentData:n,validatedValues:l}));case 16:t.t1=t.sent,i=(0,t.t0)(t.t1);case 18:i&&c(Object(r.closeModal)({modalId:y}));case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(v.b)(r.MyModal,{form:!0,title:Object(v.c)("div",{children:["T\xe0i Kho\u1ea3n Ng\xe2n H\xe0ng ",Object(v.b)(d.a,{icon:Object(v.b)(s.a,{}),onClick:function(){O(j.a.taiKhoanNganHang)},children:"Trang qu\u1ea3n l\xfd"})]}),visible:N,onClose:function(){c(Object(r.closeModal)({modalId:y}))},onOkModal:function(t,n){return S.apply(this,arguments)},formOptions:Object(r.getFormItemFields)(h.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:y,datas:x})}},723:function(t,n,e){"use strict";var a=e(0),o=e.n(a),i=e(59),c=e(109),l=e(44),r=e(7),d=e(55),u=e(359),s=e(719),b=e(57),h=e(280),g=e(64),f=e(710),O=e(25);n.a=function(t){var n,e,a=t.form,m=t.name,p=t.mode,j=t.label,v=t.labelCol,y=t.wrapperCol,T=t.rules,H=t.isAddNew,x=t.isTrangQuanLy,C=t.onAfterSelect,M=t.disabled,w=Object(d.b)(),N=Object(l.u)(),S=Object(d.c)((function(t){return t.taiKhoanNganHang})).taiKhoanNganHangs,D=Object(d.c)((function(t){return t.account})).accountData,I=null===D||void 0===D||null===(n=D.paths)||void 0===n||null===(e=n.taiKhoanNganHang)||void 0===e?void 0:e.edit,k=o.a.useMemo((function(){return Object.values(S).filter((function(t){return t.active})).map((function(t){var n=t.maTaiKhoan?"".concat(t.maTaiKhoan," - "):"",e="".concat(n," - ").concat(t.hoTen," - ").concat(t.tenNguoiNhan||""," - ").concat(t.soTaiKhoan," - ").concat(t.nganHang);return{value:t.id,label:e}}))}),[S]);var F=Object(O.b)(r.MyFormItem,{label:j||"TKNH",type:"select",name:m||"taiKhoanNganHangId",innerProps:{mode:p,showSearch:!0,allowClear:!0,filterOption:r.onSelectSearch,onChange:function(t){w(Object(u.a)(t)),null===C||void 0===C||C(t)},disabled:M,notFoundContent:I?Object(O.c)("div",{children:[H?Object(O.b)(i.a,{icon:Object(O.b)(b.a,{}),type:"primary",onClick:function(){return w(Object(r.openModal)({modalId:g.c.taiKhoanNganHangModal}))},children:"Th\xeam"}):null,x?Object(O.b)(i.a,{icon:Object(O.b)(h.a,{}),type:"dashed",onClick:function(){N(f.a.taiKhoanNganHang)},children:"Q. l\xfd"}):null]}):Object(O.b)(c.a,{})},options:k,rules:T||[]});return a?Object(O.c)(O.a,{children:[Object(O.b)(r.MyForm,{form:a,labelCol:v||{span:8},wrapperCol:y||{span:16},children:F}),I&&Object(O.b)(s.a,{onAfterAddFinish:function(t){a.setFieldsValue({taiKhoanNganHangId:t})}})]}):Object(O.c)(O.a,{children:[F,I&&Object(O.b)(s.a,{onAfterAddFinish:function(t){return null===C||void 0===C?void 0:C(t)}})]})}},730:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));e(0);var a=e(7),o=e(186),i=e(25);function c(t){var n=t.name,e=t.label,c=t.onPressEnter,l=t.rules,r=t.disabled;return Object(i.b)(a.MyFormItem,{name:n,label:e,rules:l,children:Object(i.b)(o.a,{disabled:r,onPressEnter:c})})}},753:function(t,n,e){"use strict";var a=e(5),o=e.n(a),i=e(10),c=e(0),l=e.n(c),r=e(7),d=e(55),u=e(724),s=e(704),b=e(396),h=e(64),g=e(361),f=e(714),O=e(357),m=e(723),p=e(359),j=e(25),v=h.c.nhaCungCapModal;n.a=function(t){var n=t.onAfterAddFinish,e=Object(s.a)({Instance:b.a,onPending:g.e,addSelectedId:g.a}),a=Object(d.b)(),c=Object(d.c)((function(t){return t.form})),h=c.modal,y=c.datas,T=l.a.useMemo((function(){var t;return!!(null===h||void 0===h||null===(t=h[v])||void 0===t?void 0:t.open)}),[h[v]]);function H(){return(H=Object(i.a)(o.a.mark((function t(i,c){var l,d,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=!0,t.next=3,a(Object(O.d)(c));case 3:return d=t.sent,t.next=6,a(Object(p.c)(d));case 6:if(d=t.sent,!c){t.next=21;break}if(null===i||void 0===i?void 0:i.id){t.next=16;break}return t.next=11,a(e.onAddAsync({validatedValues:d}));case 11:l=t.sent,null===n||void 0===n||n(null===(u=l)||void 0===u?void 0:u.id),l=Boolean(l),t.next=21;break;case 16:return t.t0=Boolean,t.next=19,a(e.onUpdateAsync({currentData:i,validatedValues:d}));case 19:t.t1=t.sent,l=(0,t.t0)(t.t1);case 21:l&&a(Object(r.closeModal)({modalId:v}));case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(j.c)(r.MyModal,{form:!0,title:"Nh\xe0 Cung C\u1ea5p",visible:T,onClose:function(){a(Object(r.closeModal)({modalId:v}))},onOkModal:function(t,n){return H.apply(this,arguments)},formOptions:Object(r.getFormItemFields)(u.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:v,datas:y,children:[Object(j.b)(f.a,{mode:"multiple",isAddNew:!0,isTrangQuanLy:!0}),Object(j.b)(m.a,{isAddNew:!0,isTrangQuanLy:!0})]})}},754:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));e(0);var a=e(7),o=e(469),i=e(25);function c(t){var n=t.name,e=t.label,c=t.rules,l=t.disabled,r=t.onPressEnter;return Object(i.b)(a.MyFormItem,{name:n,label:e,rules:c,children:Object(i.b)(o.a,{disabled:l,style:{width:"100%"},onPressEnter:r})})}},755:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));e(0);var a=e(7),o=e(221),i=e(25);function c(t){var n=t.name,e=t.label,c=t.rules;return Object(i.b)(a.MyFormItem,{name:n,label:e,rules:c,children:Object(i.b)(o.a,{style:{width:"100%"}})})}},760:function(t,n,e){"use strict";function a(t){var n=function(t){return document.getElementById(t)}(t);return null===n||void 0===n||n.focus(),n}e.d(n,"a",(function(){return a}))},765:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var a=e(8),o=e(7),i=e(211),c=e(123),l=e(158),r={tonDau:{id:"tonDau",name:"T\u1ed3n \u0111\u1ea7u",width:60,className:"text-small",align:"right"},nhap:{id:"nhap",name:"Nh\u1eadp",width:50,className:"text-small font-weight-bold text-danger",align:"right"},tongSoLuong:{id:"tongSoLuong",name:"T\u1ed5ng SL",width:65,className:"text-small font-weight-bold",align:"right"},xuat:{id:"xuat",name:"Xu\u1ea5t",width:50,className:"text-small font-weight-bold text-danger",align:"right"},tonCuoi:{id:"tonCuoi",name:"T\u1ed3n cu\u1ed1i",width:65,className:"text-small font-weight-bold",align:"right"},chiPhi:{id:"chiPhi",name:"Chi ph\xed",width:80,className:"text-small font-weight-bold",align:"right",render:o.numberRender},doanhThu:{id:"doanhThu",name:"Doanh thu",width:80,className:"text-small font-weight-bold",align:"right",render:o.numberRender},getTableColumns:function(){return[o.constants.stt,Object(a.a)(Object(a.a)({},i.a.tenMatHang),{},{width:130}),Object(a.a)(Object(a.a)({},l.a.tenNhomMatHang),{},{width:110}),Object(a.a)(Object(a.a)({},i.a.giaNhapMatHang),{},{width:70}),Object(a.a)(Object(a.a)({},i.a.giaBanMatHang),{},{width:70}),Object(a.a)(Object(a.a)({},c.a.tenDonViTinh),{},{width:90}),this.tonDau,this.nhap,this.tongSoLuong,this.xuat,this.tonCuoi,this.chiPhi,this.doanhThu]},getInputFields:function(){return[]},getExcelFields:function(){return[o.constants.stt,o.constants.id,Object(a.a)(Object(a.a)({},i.a.tenMatHang),{},{width:150}),l.a.tenNhomMatHang,i.a.giaNhapMatHang,i.a.giaBanMatHang,c.a.tenDonViTinh,this.tonDau,this.nhap,this.tongSoLuong,this.xuat,Object(a.a)(Object(a.a)({},this.tonCuoi),{},{name:"tonCuoi"}),this.chiPhi,this.doanhThu]}}},781:function(t,n,e){"use strict";var a=e(0),o=e.n(a),i=e(59),c=e(109),l=e(44),r=e(7),d=e(55),u=e(361),s=e(753),b=e(57),h=e(280),g=e(64),f=e(710),O=e(25);n.a=function(t){var n,e,a=t.form,m=t.name,p=t.mode,j=t.label,v=t.labelCol,y=t.wrapperCol,T=t.rules,H=t.isAddNew,x=t.isTrangQuanLy,C=t.onAfterSelect,M=t.onAfterAddFinish,w=t.disabled,N=Object(d.b)(),S=Object(l.u)(),D=Object(d.c)((function(t){return t.nhaCungCap})).nhaCungCaps,I=Object(d.c)((function(t){return t.account})).accountData,k=null===I||void 0===I||null===(n=I.paths)||void 0===n||null===(e=n.nhaCungCap)||void 0===e?void 0:e.edit,F=o.a.useMemo((function(){return Object.values(D).filter((function(t){return t.active})).map((function(t){var n="".concat(t.tenNhaCungCap);return{value:t.id,label:n}}))}),[D]);var A=Object(O.b)(r.MyFormItem,{label:j||"NCC",type:"select",name:m||"nhaCungCapId",innerProps:{mode:p,showSearch:!0,allowClear:!0,filterOption:r.onSelectSearch,onChange:function(t){N(Object(u.a)(t)),null===C||void 0===C||C(t)},disabled:w,notFoundContent:k?Object(O.c)("div",{children:[H?Object(O.b)(i.a,{icon:Object(O.b)(b.a,{}),type:"primary",onClick:function(){N(Object(r.openModal)({modalId:g.c.nhaCungCapModal}))}}):null,x?Object(O.b)(i.a,{icon:Object(O.b)(h.a,{}),type:"dashed",onClick:function(){S(f.a.nhaCungCap)},children:"Q. l\xfd"}):null]}):Object(O.b)(c.a,{})},options:F,rules:T||[]});return a?Object(O.c)(O.a,{children:[Object(O.b)(r.MyForm,{form:a,labelCol:v||{span:8},wrapperCol:y||{span:16},children:A}),k&&Object(O.b)(s.a,{onAfterAddFinish:function(t){a.setFieldsValue({nhaCungCapId:t})}})]}):Object(O.c)(O.a,{children:[A,k&&Object(O.b)(s.a,{onAfterAddFinish:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t){null===M||void 0===M||M(t)}))})]})}},785:function(t,n,e){"use strict";e.d(n,"a",(function(){return g}));var a=e(21),o=e(5),i=e.n(o),c=e(10),l=e(32),r=e.n(l),d=e(7),u=e(762),s=e(763),b=e(764),h=e(362);function g(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"A5";return function(){var e=Object(c.a)(i.a.mark((function e(a){var o,c,l,h,g,O,p,j,v,y,T,H,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.vfs=s.pdfMake.vfs,o=t.donHangId,c=t.tenNhaCungCap,l=t.ngayGiao,h=r()(l,"L"),g=f,O=m,p=a(Object(d.getTimestamp)({})),j=p.updatedAtString,v=p.updatedBy,y="Th\u1eddi gian in: ".concat(j," ").concat(v),T=[g(),{style:"subHeaderStyle",columns:[{text:"M\xe3 H\u0110: ".concat(o||""),style:"fontSize9Margin5",bold:!0},{text:"T\xean NCC: ".concat(c||""),style:"fontSize9Margin5",bold:!0},{text:"Ng\xe0y giao: ".concat(h.format("DD.MM.YYYY")),style:"fontSize9Margin5",bold:!0},{text:y,style:"fontSize9Margin5",alignment:"right",bold:!0}]},{table:O(t)},{style:"subHeaderStyle",columns:[{text:"Ng\u01b0\u1eddi giao",style:"fontSize10Margin5",bold:!0,alignment:"center"},{text:"Ng\u01b0\u1eddi nh\u1eadn h\xe0ng",style:"fontSize10Margin5",bold:!0,alignment:"center"}]}],H={pageSize:n,pageOrientation:"portal",pageMargins:[20,20,20,20],content:T,styles:b.a},x=window.open("","_blank"),u.createPdf(H).open({},x);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function f(){return{style:"",columnGap:5,columns:[[{text:"Th\u1ef1c Ph\u1ea9m T\u01b0 B\u1ed1n".toUpperCase(),style:"bold11",bold:!0,alignment:"left",width:100},{text:"S\u1ed1 15 Nguy\u1ec5n Tri Ph\u01b0\u01a1ng, Ph\xfa Th\u1ecd, Ph\xfa Ch\xe1nh",style:"fontSize8",alignment:"left",width:100},{text:"TX T\xe2n Uy\xean, B\xecnh D\u01b0\u01a1ng",style:"fontSize8",alignment:"left",width:100},{text:"\u0110T: 0981.310.247",style:"fontSize8",alignment:"left",width:100},{text:"Website: thucphamtubon.com",style:"fontSize8",alignment:"left",width:100}],{text:"Phi\u1ebfu Ki\u1ec3m H\xe0ng".toUpperCase(),style:"bold20",bold:!0,alignment:"left"},{text:"",width:40}]}}function O(t){var n=[],e=Object.values(t.chiTietDonHangs||{});return(e=Object(h.a)("tenMatHang",e)).forEach((function(t,e){n.push([{text:e+1,style:"textTable9",alignment:"center"},{text:t.tenMatHang||"",style:"textTable9",bold:!0},{text:t.tenDonViTinh,style:"textTable9",alignment:"center"},{text:t.soLuongThuc||"",style:"textTable9",alignment:"center",bold:!0},{text:"",style:"textTable9",alignment:"right"},{text:"",style:"textTable9"}])})),n}function m(t){return{layout:"lightHorizontalLines",headerRows:1,dontBreakRows:!0,widths:[20,140,50,50,75,"*"],body:[["STT","T\xean m\u1eb7t h\xe0ng","\u0110VT","S\u1ed1 l\u01b0\u1ee3ng","SL th\u1ef1c nh\u1eadn","Ghi ch\xfa"].map((function(t){return{text:t,style:"tableHeader",fillColor:"lightblue",alignment:"center"}}))].concat(Object(a.a)(O(t)))}}},997:function(t,n,e){"use strict";e.r(n);var a=e(8),o=e(21),i=e(40),c=e(0),l=e.n(c),r=e(55),d=e(7),u=e(705),s=e(64),b=e(709),h=e(211),g=e(158),f=e(123),O=e(413),m={getTableColumns:function(){return[d.constants.stt,Object(a.a)({},h.a.tenMatHang),Object(a.a)(Object(a.a)({},g.a.tenNhomMatHang),{},{width:110}),Object(a.a)(Object(a.a)({},O.a.xuat),{},{name:"T\u1ed5ng b\xe1n",width:80}),Object(a.a)(Object(a.a)({},O.a.tonCuoi),{},{name:"T\u1ed3n kho"}),Object(a.a)({},f.a.tenDonViTinh)]},getInputFields:function(){return[]},getExcelFields:function(){return[d.constants.stt,d.constants.id,h.a.tenMatHang,g.a.tenNhomMatHang,Object(a.a)(Object(a.a)({},O.a.tonCuoi),{},{name:"soLuong"}),Object(a.a)({},f.a.tenDonViTinh)]}},p=e(707),j=e(12),v=e(18),y=e(19),T=function(t){Object(v.a)(e,t);var n=Object(y.a)(e);function e(){var t;Object(j.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=n.call.apply(n,[this].concat(o))).pathDatas=["tongHopDonHang","datas"],t.pathDeleted=["tongHopDonHang","deleted"],t.initData={},t}return e}(d.AppClass),H=e(704),x=e(417),C=e(13),M=e(59),w=e(57),N=e(65),S=e(5),D=e.n(S),I=e(10),k=e(467),F=e(36),A=e(192),P=e(765),L={soLuong:{id:"soLuong",name:"S\u1ed1 l\u01b0\u1ee3ng ",width:100,className:"text-small font-weight-bold",align:"right",sorter:Object(d.sortByNumber)("soLuong"),render:Object(d.renderNumberInput)("SoLuong")},getTableColumns:function(){return[Object(a.a)(Object(a.a)({},d.constants.stt),{},{fixed:!1}),Object(a.a)(Object(a.a)({},h.a.tenMatHang),{},{fixed:!1}),g.a.tenNhomMatHang,this.soLuong,Object(a.a)(Object(a.a)({},f.a.tenDonViTinh),{},{className:"text-small",isSearch:!1,width:75}),P.a.tonCuoi,d.constants.deleteRowButton]},getInputFields:function(){return[d.constants.stt,d.constants.id,this.soLuong]},getExcelFields:function(){return[d.constants.active]}},z=e(761),E=e(754),B=e(730),V=e(760),K=e(391),R=e(25),Y=s.c.donHangNhapChiTietModal;var X=function(t){var n=Object(r.b)(),e=k.a.useForm(),o=Object(i.a)(e,1)[0],c=Object(r.c)((function(t){return t.form})),u=c.modal,s=c.datas,b=Object(r.c)((function(t){return t.donHangNhapChiTiet})).donHangNhapChiTiets,h=l.a.useMemo((function(){var t;return!!(null===u||void 0===u||null===(t=u[Y])||void 0===t?void 0:t.open)}),[u[Y]]),g=null===s||void 0===s?void 0:s[Y];function f(){return O.apply(this,arguments)}function O(){return(O=Object(I.a)(D.a.mark((function t(){var e,i;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.validateFields();case 2:e=t.sent,i=Object(a.a)(Object(a.a)({},g),e),n(Object(K.d)({convertedData:i})),Object(V.a)("matHangId"),o.resetFields(),Object(F.h)();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return l.a.useEffect((function(){h||o.resetFields()}),[h]),l.a.useEffect((function(){o.setFieldsValue(g)}),[g]),Object(R.b)(d.MyModal,{title:Object(R.b)("div",{children:"M\u1eb7t H\xe0ng"}),visible:h,onClose:function(){n(Object(d.closeModal)({modalId:Y}))},onOkModal:f,width:900,modalId:Y,datas:s,children:Object(R.c)(d.MyForm,{form:o,labelCol:{span:8},wrapperCol:{span:16},children:[Object(R.b)(B.a,{name:"id",label:"id",disabled:!0}),Object(R.b)(z.a,{isAddNew:!0,loaiTruMatHangs:b,rules:[{required:!0}],onAfterSelect:function(t,e){n(Object(d.openModal)({modalId:Y,data:e}))}}),Object(R.b)(E.a,{name:"soLuong",label:"S\u1ed1 l\u01b0\u1ee3ng",onPressEnter:f}),Object(R.b)(B.a,{name:"tenDonViTinh",label:"\u0110\u01a1n v\u1ecb t\xednh",disabled:!0})]})})};function G(t){return window.confirm(t||"X\xe1c nh\u1eadn?")}var U=s.c.donHangNhapChiTietModal;var Q=function(t){var n=t.loading,e=Object(r.b)(),a=Object(r.c)((function(t){return t.donHangNhapChiTiet})).donHangNhapChiTiets,o=Object(r.c)((function(t){return t.table})).selectedRows,i=l.a.useMemo((function(){return Object(d.onCallbackDataSource)("tenMatHang",Object.values(a||{}))}),[a]);return Object(R.c)("div",{className:"donHangNhapChiTiet-page",css:b.a,children:[Object(R.c)("div",{style:{marginBottom:"7px"},children:[Object(R.b)(M.a,{icon:Object(R.b)(w.a,{}),type:"primary",onClick:function(){e(Object(d.openModal)({modalId:U}))},children:"Th\xeam m\u1eb7t h\xe0ng"}),Object(R.b)(M.a,{icon:Object(R.b)(A.a,{}),type:"dashed",danger:!0,onClick:function(){var t=(null===o||void 0===o?void 0:o[U])||[];if(0===t.length)return Object(F.g)("Ch\u01b0a ch\u1ecdn m\u1eb7t h\xe0ng!");G("X\xe1c nh\u1eadn x\xf3a m\u1eb7t h\xe0ng \u0111\xe3 ch\u1ecdn?")&&(e(Object(K.c)({donHangNhapChiTietDataArray:t})),e(Object(d.onChangeSelectedRowKeys)({tableId:U,selectedRowKeys:[],selectedRows:[]})))},children:"X\xf3a m\u1eb7t h\xe0ng \u0111\xe3 ch\u1ecdn"})]}),Object(R.b)(p.a,{loading:n,isEdit:!0,constants:L,onCallbackDataSource:function(t){return Object(d.onCallbackDataSource)("tenMatHang",t)},datas:a,modalId:U,isSelection:!0,pagination:!1,expandable:{expandedRowRender:function(t){return Object(R.b)("div",{children:t.id})},expandRowByClick:!1},rowClassName:function(t){return(null===t||void 0===t?void 0:t.matHangConThieu)?"bg-blue-light":""},inputOptions:{onDelete:function(t){e(Object(K.b)(t))},openEditSoLuong:function(t){e(Object(d.openModal)({modalId:s.c.openEditSoLuong,data:t}))}}}),Object(R.b)(X,{}),Object(R.b)(d.SoLuongInputModal,{modalId:s.c.openEditSoLuong,soLuongName:"soLuong",dataSource:i,onOk:function(t){e(Object(K.d)({convertedData:t}))}})]})},q=e(755),J=e(781),W=e(240),_=e(720),Z=e(361),$=e(785),tt=s.c.taoDonHangNhapModal;var nt=function(t){var n,e,o=t.defaultFieldsValue,c=Object(r.b)(),u=k.a.useForm(),s=Object(i.a)(u,1)[0],b=Object(r.c)((function(t){return t.donHangNhapChiTiet})),h=b.donHangNhapChiTietDirty,g=b.donHangNhapChiTiets,f=Object(r.c)((function(t){return t.taoDonHangNhap})).loading,O=Object(r.c)((function(t){return t.form})),m=O.modal,p=O.datas,j=null===p||void 0===p?void 0:p[tt],v=Object(r.c)((function(t){return t.account})).accountData,y=null===v||void 0===v||null===(n=v.paths)||void 0===n||null===(e=n.danhSachNhanHang)||void 0===e?void 0:e.edit,T=l.a.useMemo((function(){var t;return!!(null===m||void 0===m||null===(t=m[tt])||void 0===t?void 0:t.open)}),[m[tt]]);function H(){return(H=Object(I.a)(D.a.mark((function t(){var n,e,o,i;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(y){t.next=2;break}return t.abrupt("return",Object(F.k)());case 2:if(G("X\xe1c nh\u1eadn t\u1ea1o \u0111\u01a1n h\xe0ng?")){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,s.validateFields();case 6:return n=t.sent,e=Object(d.convertMomentToString)([_.a.ngayGiao],n),t.next=10,c(Object(Z.c)(e));case 10:return e=t.sent,o=Object(a.a)(Object(a.a)({},e),{},{chiTietDonHangs:g}),t.next=14,c(Object(W.c)(o));case 14:return i=t.sent,t.next=17,c(Object($.a)(i,"A4"));case 17:c(Object(K.e)({})),c(Object(d.closeModal)({modalId:tt}));case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return l.a.useEffect((function(){s.setFieldsValue(o)}),[o]),l.a.useEffect((function(){var t=(null===j||void 0===j?void 0:j.donHangNhapChiTiets)||{};c(Object(K.e)(t))}),[j]),Object(R.c)(d.MyModal,{title:Object(R.b)("div",{children:"T\u1ea1o Phi\u1ebfu Nh\u1eadn H\xe0ng"}),visible:T,onClose:function(){if(h&&!window.confirm("D\u1eef li\u1ec7u d\xe3 thay \u0111\u1ed5i, b\u1ea1n c\xf3 mu\u1ed1n tho\xe1t?"))return Object(F.h)("Ti\u1ebfp t\u1ee5c ch\u1ec9nh s\u1eeda \u0111\u01a1n h\xe0ng nh\u1eadp!");c(Object(d.closeModal)({modalId:tt}))},onOkModal:function(){return H.apply(this,arguments)},width:900,modalId:tt,datas:p,children:[Object(R.c)(d.MyForm,{form:s,labelCol:{span:6},wrapperCol:{span:18},children:[Object(R.b)(q.a,{name:"ngayGiao",label:"Ng\xe0y giao",rules:[{required:!0}]}),Object(R.b)(J.a,{rules:[{required:!0}]})]}),Object(R.b)(Q,{loading:f})]})};var et=function(t){var n,e=t.selectedTime,o=t.dateTimePicker,i=Object(r.b)(),c=Object(r.c)((function(t){return t.tongHopDonHang})).tongHopDonHangs,l=Object(r.c)((function(t){return t.dsMatHang})).dsMatHangs;return Object(R.c)(R.a,{children:[Object(R.b)(u.a,{header:Object(R.b)("div",{className:"font-weight-bold",children:Object(R.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(R.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(R.b)("div",{children:(null===o||void 0===o||null===(n=o.getDayRender)||void 0===n?void 0:n.call(o))||null}),Object(R.b)("div",{children:Object(R.b)(M.a,{block:!0,icon:Object(R.b)(w.a,{}),type:"primary",onClick:function(){var t=Object.values(c||{}).reduce((function(t,n){var e=n.id,o=n.tongSoLuongThuc,i=void 0===o?0:o,c=n.tonCuoi,r=null===l||void 0===l?void 0:l[e];return r?Object(a.a)(Object(a.a)({},t),{},Object(C.a)({},e,Object(a.a)(Object(a.a)({},r),{},{soLuong:i,soLuongThuc:i,tonCuoi:c}))):Object(a.a)(Object(a.a)({},t),{},Object(C.a)({},e,n))}),{});i(Object(d.openModal)({modalId:s.c.taoDonHangNhapModal,data:{donHangNhapChiTiets:t}}))},children:"T\u1ea1o phi\u1ebfu mua h\xe0ng"})})]}),footer:Object(R.b)("div",{children:Object(R.b)(M.a,{icon:Object(R.b)(N.a,{}),onClick:function(){i(Object(d.toggleAside)({tagPageId:s.c.tongHopDonHangModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})}),Object(R.b)(nt,{defaultFieldsValue:{ngayGiao:e,nhaCungCapId:"-Mzc5aTuUKUtV5CUm4B-"}})]})},at=e(32),ot=e.n(at),it=e(362),ct=e(762),lt=e(763),rt=e(764),dt=e(72);function ut(){return{columnGap:5,columns:[[{text:"Th\u1ef1c Ph\u1ea9m T\u01b0 B\u1ed1n".toUpperCase(),style:"bold11",bold:!0,alignment:"left",width:100},{text:"S\u1ed1 15 Nguy\u1ec5n Tri Ph\u01b0\u01a1ng, Ph\xfa Th\u1ecd, Ph\xfa Ch\xe1nh",style:"fontSize8",alignment:"left",width:100},{text:"TX T\xe2n Uy\xean, B\xecnh D\u01b0\u01a1ng",style:"fontSize8",alignment:"left",width:100},{text:"\u0110T: 0981.310.247",style:"fontSize8",alignment:"left",width:100},{text:"Website: thucphamtubon.com",style:"fontSize8",alignment:"left",width:100}],{text:"Phi\u1ebfu T\u1ed5ng H\u1ee3p Gia V\u1ecb".toUpperCase(),style:"bold20",bold:!0,alignment:"left"}]}}function st(t){var n=["STT","T\xean m\u1eb7t h\xe0ng","Nh\xf3m MH","S\u1ed1 l\u01b0\u1ee3ng","\u0110VT","Ghi ch\xfa"].map((function(t){return{text:t,style:"tableHeader",fillColor:"lightblue",alignment:"center"}})),e=[];return(t=Object(it.a)("tenMatHang",t)).forEach((function(t,n){e.push([{text:n+1,style:"textTable9",alignment:"center"},{text:t.tenMatHang||"",style:"textTable9",bold:!0},{text:t.tenNhomMatHang||"",style:"textTable9"},{text:t.soLuongThuc||"",style:"textTable9",alignment:"right",bold:!0},{text:t.tenDonViTinh,style:"textTable9",alignment:"center"},{text:"",style:"textTable9"}])})),{layout:"lightHorizontalLines",headerRows:1,dontBreakRows:!0,widths:[20,140,50,50,50,"*"],body:[n].concat(e)}}function bt(t){var n=["STT","T\xean kh\xe1ch h\xe0ng","Ghi ch\xfa"].map((function(t){return{text:t,style:"tableHeader",fillColor:"lightblue",alignment:"center"}})),e=Object(dt.orderBy)(t).map((function(t,n){return[{text:n+1,style:"textTable9",alignment:"center"},{text:t||"",style:"textTable9",bold:!0},{text:"",style:"textTable9"}]}));return{layout:"lightHorizontalLines",headerRows:1,dontBreakRows:!0,widths:[20,140,"*"],body:[n].concat(Object(o.a)(e))}}var ht=e(376),gt=e(15),ft=e(384),Ot=s.c.tongHopDonHangModal;n.default=function(){var t,n,e=Object(r.b)(),c=Object(d.useDatePicker)({defaultTime:ot()().add(1,"day")}),h=Object(i.a)(c,2),g=h[0],f=h[1],O=Object(r.c)((function(t){return t.dsMatHang})).dsMatHangs,j=Object(r.c)((function(t){return t.tongHopDonHang})),v=j.tabsData,y=j.loading,M=j.pageSize,w=j.tongHopDonHangs,N=j.maDonHangsArray,S=j.maDonHangHeaders,k=j.tenKhachHangsArray,F=Object(r.c)((function(t){return t.danhSachDHX})).danhSachDHXs,A=Object(r.c)((function(t){return t.danhSachDHN})).danhSachDHNs,P=Object(r.c)((function(t){var n;return null===(n=t.tagsPage)||void 0===n?void 0:n[Ot]})),L=Object(r.c)((function(t){return t.account})).accountData,z=null===L||void 0===L||null===(t=L.paths)||void 0===t||null===(n=t.tongHopDonHang)||void 0===n?void 0:n.edit,E=Object(H.a)({Instance:T,onPending:x.e,addSelectedId:x.a,isEdit:z});l.a.useEffect((function(){e(Object(x.d)(g))}),[g,F,A,O]),l.a.useEffect((function(){return e(Object(ht.e)(g)),e(Object(ft.d)(g)),function(){Object(gt.i)("danhSachDHX"),Object(gt.i)("danhSachDHN")}}),[g]);var B=l.a.useMemo((function(){return v?[].concat(Object(o.a)(v),[{label:"T\u1ed5ng h\u1ee3p \u0111\u01a1n h\xe0ng ng\xe0y: ".concat(g.format("DD-MM-YYYY")),value:"null"}]):v}),[g]),V=l.a.useMemo((function(){return Object(a.a)(Object(a.a)({},m),{},{getTableColumns:function(){var t=m.getTableColumns();return[].concat(Object(o.a)(t),Object(o.a)(N.map((function(t,n){return{id:t,name:"".concat(null===S||void 0===S?void 0:S[n]," - ").concat(null===k||void 0===k?void 0:k[n]),width:120,className:"text-small",align:"right"}}))),[d.constants.deleteRowButton])}})}),[N,S,k]);return Object(R.c)("div",{className:"tongHopDonHang-page",css:b.a,children:[Object(R.b)(u.b,{className:"tabs",options:B,activeKey:P?"aside":"",onTabClick:function(t){if("aside"===t)e(Object(d.toggleAside)({tagPageId:Ot}));else if("taiExcel"===t){if(!window.confirm("X\xe1c nh\u1eadn t\u1ea3i file t\u1ed5ng h\u1ee3p \u0111\u01a1n h\xe0ng?"))return null;e(Object(x.c)(g))}else"print"===t&&e(Object(d.openModal)({modalId:s.d.inDonHang}))}}),Object(R.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[P&&Object(R.b)(et,{selectedTime:g,dateTimePicker:f}),Object(R.b)("div",{className:"aside-main",children:Object(R.b)(p.a,{isEdit:z,constants:V,onCallbackDataSource:function(t){return Object(it.a)("tenMatHang",t)},actions:E,datas:w,loading:y,modalId:Ot,isSelection:!0,pagination:!0,pageSize:M,onChange:function(t){e(Object(x.f)(t.pageSize))},expandable:{expandedRowRender:function(t){return Object(R.b)("div",{children:t.id})},expandRowByClick:!1}})})]}),Object(R.b)(d.PrintModal,{modalId:s.d.inDonHang,title:"In Phi\u1ebfu T\u1ed5ng H\u1ee3p Gia V\u1ecb Ng\xe0y ".concat(g?g.format("DD/MM/YYYY"):""),onPrint:function(t){var n=Object.values(w).filter((function(t){return"giaVi"===t.nhomMatHangId}));e(function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"A5";return function(){var o=Object(I.a)(D.a.mark((function o(i,c){var l,r,u,s,b,h,g,f,O,m,p,j;return D.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:ct.vfs=lt.pdfMake.vfs,l=c(),r=l.tongHopDonHang,u=r.maDonHangHeaders,s=r.tenKhachHangsArray,b=i(Object(d.getTimestamp)({})),h=b.updatedAtString,g=b.updatedBy,f=t.reduce((function(t,n){return Object.keys(n).reduce((function(t,n){return n.indexOf("DHX")>-1?Object(a.a)(Object(a.a)({},t),{},Object(C.a)({},n,!0)):t}),t)}),{}),O=Object.keys(f).map((function(t){var n,e=null===(n=t.split("-"))||void 0===n?void 0:n[1],a=null===u||void 0===u?void 0:u.findIndex((function(t){return t===e}));return null===s||void 0===s?void 0:s[a]})),m=[ut(),{style:"subHeaderStyle",columns:[{text:"Ng\xe0y: ".concat(n.format("DD.MM.YYYY")),style:"fontSize9Margin5",bold:!0},{text:"Th\u1eddi gian in phi\u1ebfu: ".concat(h,", TK: ").concat(g),style:"fontSize9Margin5",alignment:"right"}]},{table:st(t)},{table:bt(O)},{style:"subHeaderStyle",columns:[{text:"Ng\u01b0\u1eddi giao",style:"fontSize10Margin5",bold:!0,alignment:"center"},{text:"Ng\u01b0\u1eddi nh\u1eadn h\xe0ng",style:"fontSize10Margin5",bold:!0,alignment:"center"}]}],p={pageSize:e,pageOrientation:"portal",pageMargins:[20,20,20,20],content:m,styles:rt.a},j=window.open("","_blank"),ct.createPdf(p).open({},j);case 10:case"end":return o.stop()}}),o)})));return function(t,n){return o.apply(this,arguments)}}()}(n,g,t))}})]})}}}]);