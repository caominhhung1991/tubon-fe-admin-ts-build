(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[18],{1012:function(e,n,t){"use strict";t.r(n);var a=t(13),i=t(8),o=t(0),r=t.n(o),c=t(56),u=t(7),l=t(706),d=t(64),s=t(710),h=t(96),b=t(116),m=t(768),f=t(103),v={getTableColumns:function(){return[u.constants.stt,h.a.tenMatHang,b.a.tenNhomMatHang,m.a.soLuongTonKho,f.a.tenDonViTinh,m.a.giaNhapTonKho,m.a.thanhTienTonKho]},getInputFields:function(){return[]},getExcelFields:function(){return this.getTableColumns()}},g=t(708),O=t(310),j=t(705),p=t(242),T=t(59),C=t(354),y=t(65),N=t(800),L=t(36),K=t(24);var w=function(e){var n,t,a=Object(c.b)(),i=Object(c.c)((function(e){return e.account})).accountData,o=null===i||void 0===i||null===(n=i.paths)||void 0===n||null===(t=n.khoChaLua)||void 0===t?void 0:t.edit;return Object(K.c)(K.a,{children:[Object(K.b)(l.a,{header:Object(K.b)("div",{className:"font-weight-bold",children:Object(K.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(K.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(K.b)("div",{className:"mt-1",children:Object(K.b)(T.a,{icon:Object(K.b)(C.a,{}),onClick:function(){if(!o)return Object(L.k)();a(Object(u.openModal)({modalId:d.c.phieuKhoNhapChaLuaModal}))},block:!0,children:"Th\xeam phi\u1ebfu nh\u1eadp kho"})}),Object(K.b)("div",{className:"mt-1"})]}),footer:Object(K.b)("div",{children:Object(K.b)(T.a,{icon:Object(K.b)(y.a,{}),onClick:function(){a(Object(u.toggleAside)({tagPageId:d.c.khoChaLuaModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})}),Object(K.b)(N.a,{})]})},M=t(15),x=t(361),I=t(712),k=d.c.khoChaLuaModal;var P=function(e){var n=e.pageData,t=Object(c.c)((function(e){return e.hideColumns})),o=null===t||void 0===t?void 0:t[k||""],l=r.a.useMemo((function(){var e=[u.constants.stt,h.a.tenMatHang,b.a.tenNhomMatHang,m.a.soLuongTonKho,f.a.tenDonViTinh,m.a.giaNhapTonKho],n=[m.a.thanhTienTonKho];return[{id:0,colSpan:2+e.reduce((function(e,n){var t=n.id;return e+((null===o||void 0===o?void 0:o[t])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:n.reduce((function(e,n){var t=n.id;return e+((null===o||void 0===o?void 0:o[t])?0:1)}),0),cellClassName:"text-right font-weight-bold text-small text-danger",render:function(e){return Object(u.formatNumber)(e)}},{id:2,colSpan:[].reduce((function(e,n){var t=n.id;return e+((null===o||void 0===o?void 0:o[t])?0:1)}),0)}]}),[o]),d=r.a.useMemo((function(){return n.reduce((function(e,n){var t=e.thanhTienTonKho+(n.thanhTienTonKho||0);return Object(i.a)(Object(i.a)({},e),{},{thanhTienTonKho:t})}),{tong:"T\u1ed5ng ti\u1ec1n",thanhTienTonKho:0})}),[n]),s=r.a.useMemo((function(){return["tong","thanhTienTonKho"].map((function(e,n){return Object(a.a)({},n,d[e])}))}),[d]);return Object(K.b)(I.a,{columns:l,dataSource:s})},S=d.c.khoChaLuaModal;n.default=function(){var e,n,t=Object(c.b)(),o=Object(c.c)((function(e){return e.khoChaLua})),d=o.tabsData,h=o.loading,b=o.pageSize,m=o.khoChaLuas,f=Object(c.c)((function(e){return e.dsMatHang})).dsMatHangs,T=Object(c.c)((function(e){var n;return null===(n=e.tagsPage)||void 0===n?void 0:n[S]})),C=Object(c.c)((function(e){return e.account})).accountData,y=null===C||void 0===C||null===(e=C.paths)||void 0===e||null===(n=e.khoChaLua)||void 0===n?void 0:n.edit,N=Object(j.a)({Instance:O.a,onPending:p.d,addSelectedId:p.a,isEdit:y});r.a.useEffect((function(){return t(Object(p.c)()),function(){Object(M.i)("khoChaLua")}}),[]);var I=r.a.useMemo((function(){return Object.values(m).map((function(e){var n=e.soLuongTonKho,t=void 0===n?0:n,a=e.giaNhapTonKho,o=void 0===a?0:a,r=(null===f||void 0===f?void 0:f[null===e||void 0===e?void 0:e.id])||{},c=Math.round(t*o);return Object(i.a)(Object(i.a)(Object(i.a)({},r),e),{},{thanhTienTonKho:c})})).reduce((function(e,n){return Object(i.a)(Object(i.a)({},e),{},Object(a.a)({},n.id,n))}),{})}),[f,m]);return Object(K.c)("div",{className:"khoChaLua-page",css:s.a,children:[Object(K.b)(l.b,{className:"tabs",options:d,activeKey:T?"aside":"",onTabClick:function(e){if("add"===e&&y){if(!y)return Object(L.k)();var n=new O.a;t(Object(u.openModal)({modalId:S,data:n.initData}))}else"aside"===e?t(Object(u.toggleAside)({tagPageId:S})):"taiExcel"===e&&t(Object(u.downloadExcel)({tableId:S,constants:v,fileSheet:"khoChaLuaSheet",fileName:"khoChaLuaName"}))}}),Object(K.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[T&&Object(K.b)(w,{}),Object(K.b)("div",{className:"aside-main",children:Object(K.b)(g.a,{isEdit:y,onCallbackDataSource:function(e){return Object(x.a)("tenMatHang",e)},constants:v,actions:N,datas:I,loading:h,modalId:S,expandable:{expandedRowRender:function(e){return Object(K.b)("div",{children:e.id})},expandRowByClick:!1},isSelection:!0,pagination:!0,pageSize:b,onChange:function(e){t(Object(p.f)(e.pageSize))},summary:function(e){return Object(K.b)(P,{pageData:e})}})})]})]})}},712:function(e,n,t){"use strict";t(0);var a=t(467),i=t(24),o=a.a.Summary,r=o.Row,c=o.Cell;n.a=function(e){var n,t=e.columns,a=e.dataSource;return Object(i.b)(r,{children:null===t||void 0===t||null===(n=t.map)||void 0===n?void 0:n.call(t,(function(e,n){var t=null===e||void 0===e?void 0:e.id,o=(null===e||void 0===e?void 0:e.colSpan)||0,r=(null===e||void 0===e?void 0:e.cellClassName)||"",u=(null===e||void 0===e?void 0:e.valueStyle)||{},l=(null===e||void 0===e?void 0:e.valueClassName)||"",d=null===e||void 0===e?void 0:e.render,s=(null===a||void 0===a?void 0:a[n])||{},h=(null===s||void 0===s?void 0:s[t])||"";return d&&(h=d(h,s,n)),Object(i.b)(c,{index:n,colSpan:o,className:r,children:Object(i.b)("div",{style:u,className:l,children:h})},t)}))})}},725:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return r}));var a=t(8),i={nguyenLieu:{id:"nguyenLieu",tenLoaiPhieuKho:"Nguy\xean li\u1ec7u",active:!0},thanhPham:{id:"thanhPham",tenLoaiPhieuKho:"Th\xe0nh ph\u1ea7m",active:!0}},o=Object(a.a)(Object(a.a)({},i),{sanXuat:{id:"sanXuat",tenLoaiPhieuKho:"S\u1ea3n xu\u1ea5t",active:!0},ban:{id:"ban",tenLoaiPhieuKho:"B\xe1n",active:!0}}),r={tenLoaiPhieuKho:{id:"tenLoaiPhieuKho",name:"T\xean lo\u1ea1i \u0110H",className:"text-small",width:110,isSearch:!0},getTableColumns:function(){return[]},getInputFields:function(){return[]}}},737:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return l}));var a=t(8),i=t(7),o=t(374),r=t(103),c=t(116),u={soLuong:{id:"soLuong",name:"S\u1ed1 l\u01b0\u1ee3ng",width:100,className:"text-small font-weight-bold",align:"right",isSearch:!0,sorter:Object(i.sortByNumber)("soLuong"),form:{type:"input-number",rules:[{required:!0}]}},donGia:{id:"donGia",name:"\u0110\u01a1n gi\xe1",width:100,className:"text-small font-weight-bold",align:"right",isSearch:!0,sorter:Object(i.sortByNumber)("donGia"),form:{type:"input-number-format",rules:[{required:!0}]},render:i.numberRender},thanhTien:{id:"thanhTien",name:"Th\xe0nh ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",isSearch:!0,sorter:Object(i.sortByNumber)("donGia"),render:i.numberRender},getTableColumns:function(){return[i.constants.stt,o.a.tenNguyenVatLieuChaLua,Object(a.a)(Object(a.a)({},c.a.tenNhomMatHang),{},{className:"text-small"}),this.soLuong,Object(a.a)(Object(a.a)({},r.a.tenDonViTinh),{},{align:"center",className:"text-small"}),this.donGia,this.thanhTien,i.constants.editRow]},getInputFields:function(){return[i.constants.id]},getExcelFields:function(){return[i.constants.active]}},l={getTableColumns:function(){return[i.constants.stt,o.a.tenNguyenVatLieuChaLua,Object(a.a)(Object(a.a)({},c.a.tenNhomMatHang),{},{className:"text-small"}),u.soLuong,Object(a.a)(Object(a.a)({},r.a.tenDonViTinh),{},{className:"text-small"}),u.donGia,u.thanhTien]}}},768:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(7),i={khoId:{id:"khoId",name:"khoId"},tenKho:{id:"tenKho",name:"T\xean kho",width:100,className:"text-small font-weight-bold",form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},diaChiKho:{id:"diaChiKho",name:"\u0110\u1ecba ch\u1ec9",width:150,className:"text-small",form:{type:"input"}},soLuongTonKho:{id:"soLuongTonKho",name:"SL t\u1ed3n kho",width:100,className:"text-small font-weight-bold",align:"right",form:{type:"input-number-format"},render:a.numberRender},giaNhapTonKho:{id:"giaNhapTonKho",name:"Gi\xe1 nh\u1eadp kho",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},thanhTienTonKho:{id:"thanhTienTonKho",name:"Th\xe0nh ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},getTableColumns:function(){return[]},getInputFields:function(){return[]}}},769:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(8),i=t(7),o=t(770),r=t(725),c={ngay:{id:"ngay",name:"Ng\xe0y",width:100,className:"text-small",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},getTableColumns:function(){return[Object(a.a)(Object(a.a)({},i.constants.stt),{},{fixed:!1}),o.a.ngay,o.a.tongTienPhieuKho,r.a.tenLoaiPhieuKho,i.constants.createdAt,i.constants.createdBy,i.constants.capNhatRow]},getInputFields:function(){return[i.constants.id,this.ngay]},getExcelFields:function(){return[this.ngay,i.constants.active]},getFormViewFields:function(){var e=[this.ngay];return Object(i.getFormItemViewFields)(e)}}},770:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(7),i={ngay:{id:"ngay",name:"Ng\xe0y",width:100,className:"text-small font-weight-bold",align:"center",isSearch:!0,sorter:Object(a.sortByText)("ngay"),form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},tongTienPhieuKho:{id:"tongTienPhieuKho",name:"T\u1ed5ng ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},getTableColumns:function(){return[]},getInputFields:function(){return[]}}},800:function(e,n,t){"use strict";var a=t(5),i=t.n(a),o=t(10),r=t(40),c=t(0),u=t.n(c),l=t(7),d=t(468),s=t(56),h=t(769),b=t(64),m=t(36),f=t(13),v=t(8),g=t(59),O=t(55),j=t(710),p=t(737),T=t(708),C=t(378),y=t(798),N=t(470),L=t(24);function K(e){var n=e.name,t=e.label,a=e.rules,i=e.disabled,o=e.onPressEnter;return Object(L.b)(l.MyFormItem,{name:n,label:t,rules:a,children:Object(L.b)(N.a,{disabled:i,style:{width:"100%"},onPressEnter:o})})}var w=t(370);function M(e){var n=function(e){return document.getElementById(e)}(e);null===n||void 0===n||n.focus()}function x(e){var n=e.name,t=e.label,a=e.rules,i=e.onPressEnter;return Object(L.b)(l.MyFormItem,{name:n,label:t,rules:a,children:Object(L.b)(N.a,{style:{width:"100%"},onPressEnter:i,formatter:m.a.formatter,parser:m.a.parser})})}var I=b.c.phieuKhoNhapChaLuaChiTietModal,k="nguyenVatLieuChaLuaId";var P=function(e){var n=Object(s.b)(),t=d.a.useForm(),a=Object(r.a)(t,1)[0],c=Object(s.c)((function(e){return e.form})),h=c.modal,b=c.datas,m=u.a.useMemo((function(){var e;return!!(null===h||void 0===h||null===(e=h[I])||void 0===e?void 0:e.open)}),[h[I]]),f=null===b||void 0===b?void 0:b[I],v=u.a.useMemo((function(){return Object(l.getFormItemFields)(p.a.getInputFields())}),[]);function g(){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(i.a.mark((function e(){var t,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.validateFields();case 2:t=e.sent,o=Object(l.convertMomentToString)(p.a.getInputFields(),t),o=n(Object(w.c)(o)),n(Object(C.d)({convertedData:o,nameOfId:"nguyenVatLieuChaLuaId"})),a.resetFields(),M(k);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return u.a.useEffect((function(){m||a.resetFields()}),[m]),u.a.useEffect((function(){a.setFieldsValue(f)}),[f]),Object(L.b)(l.MyModal,{title:Object(L.b)("div",{children:"Nguy\xean v\u1eadt li\u1ec7u, s\u1ed1 l\u01b0\u1ee3ng"}),visible:m,onClose:function(){n(Object(l.closeModal)({modalId:I}))},onOkModal:g,width:900,modalId:I,datas:b,children:Object(L.c)(l.MyForm,{form:a,labelCol:{span:8},wrapperCol:{span:16},options:v,children:[Object(L.b)(y.a,{rules:[{required:!0}]}),Object(L.b)(K,{name:p.a.soLuong.id,label:p.a.soLuong.name,onPressEnter:g}),Object(L.b)(x,{name:p.a.donGia.id,label:p.a.donGia.name,onPressEnter:g})]})})},S=t(712),F=t(374),E=t(116),D=t(103),V=b.c.canThayTheModal;var R=function(e){var n=e.pageData,t=Object(s.c)((function(e){return e.hideColumns})),a=null===t||void 0===t?void 0:t[V||""],i=u.a.useMemo((function(){var e=[l.constants.stt,F.a.tenNguyenVatLieuChaLua,E.a.tenNhomMatHang,p.a.soLuong,D.a.tenDonViTinh,p.a.donGia],n=[p.a.thanhTien],t=[l.constants.editRow];return[{id:0,colSpan:0+e.reduce((function(e,n){var t=n.id;return e+((null===a||void 0===a?void 0:a[t])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:n.reduce((function(e,n){var t=n.id;return e+((null===a||void 0===a?void 0:a[t])?0:1)}),0),cellClassName:"text-right font-weight-bold text-small text-danger",render:function(e){return Object(l.formatNumber)(e)}},{id:2,colSpan:t.reduce((function(e,n){var t=n.id;return e+((null===a||void 0===a?void 0:a[t])?0:1)}),0)}]}),[a]),o=u.a.useMemo((function(){return n.reduce((function(e,n){var t=e.thanhTien+(n.thanhTien||0);return Object(v.a)(Object(v.a)({},e),{},{thanhTien:t})}),{tong:"T\u1ed5ng ti\u1ec1n",thanhTien:0})}),[n]),r=u.a.useMemo((function(){return["tong","thanhTien"].map((function(e,n){return Object(f.a)({},n,o[e])}))}),[o]);return Object(L.b)(S.a,{columns:i,dataSource:r})},G=b.c.phieuKhoNhapChaLuaChiTietModal;var H=function(e){var n=Object(s.b)(),t=Object(s.c)((function(e){return e.phieuKhoNhapChaLuaChiTiet})).phieuKhoNhapChaLuaChiTiets,a=Object(s.c)((function(e){return e.nguyenVatLieuChaLua})).nguyenVatLieuChaLuas,i=u.a.useMemo((function(){return Object.values(t||{}).reduce((function(e,n){var t=(null===a||void 0===a?void 0:a[n.id])||{},i=n.soLuong,o=void 0===i?0:i,r=n.donGia,c=void 0===r?0:r,u=Math.round(o*c);return Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},n.id,Object(v.a)(Object(v.a)(Object(v.a)({},t),n),{},{thanhTien:u})))}),{})}),[t,a]);return Object(L.c)("div",{className:"phieuKhoNhapChaLuaChiTiet-page",css:j.a,children:[Object(L.b)("div",{style:{marginBottom:"7px"},children:Object(L.b)(g.a,{icon:Object(L.b)(O.a,{}),type:"primary",onClick:function(){n(Object(l.openModal)({modalId:G}))},children:"Th\xeam m\u1eb7t h\xe0ng, s\u1ed1 l\u01b0\u1ee3ng"})}),Object(L.b)(T.a,{isEdit:!0,constants:p.a,datas:i,modalId:G,isSelection:!1,pagination:!1,inputOptions:{onDeleteItem:function(e){n(Object(C.b)(e))}},summary:function(e){return Object(L.b)(R,{pageData:e})}}),Object(L.b)(P,{})]})},B=t(220);function q(e){var n=e.name,t=e.label,a=e.rules;return Object(L.b)(l.MyFormItem,{name:n,label:t,rules:a,children:Object(L.b)(B.a,{style:{width:"100%"}})})}var A=t(32),z=t.n(A),X=t(725);var J=function(e){var n=e.form,t=e.name,a=e.mode,i=e.label,o=e.labelCol,r=e.wrapperCol,c=e.rules,d=e.onAfterSelect,s=e.disabled,h=u.a.useMemo((function(){return Object.values(X.c).filter((function(e){return e.active})).map((function(e){var n="".concat(e.tenLoaiPhieuKho);return{value:e.id,label:n}}))}),[X.c]),b=Object(L.b)(l.MyFormItem,{label:i||"Lo\u1ea1i phi\u1ebfu nh\u1eadp",type:"select",name:t||"loaiPhieuKhoId",innerProps:{mode:a,showSearch:!0,allowClear:!0,filterOption:l.onSelectSearch,onChange:function(e){null===d||void 0===d||d(e)},disabled:s},options:h,rules:c||[]});return n?Object(L.b)(L.a,{children:Object(L.b)(l.MyForm,{form:n,labelCol:o||{span:8},wrapperCol:r||{span:16},children:b})}):b},Q=function(e){return function(){var n,t;if(!(null===e||void 0===e?void 0:e.loaiPhieuKhoId))return Object(v.a)(Object(v.a)({},e),{},{tenLoaiPhieuKho:""});if((null===e||void 0===e||null===(n=e.loaiPhieuKhoId)||void 0===n?void 0:n.length)&&"string"!==typeof e.loaiPhieuKhoId)t=e.loaiPhieuKhoId.map((function(e){var n=(null===X.b||void 0===X.b?void 0:X.b[e])||{};return"".concat(n.tenLoaiPhieuKho||"")})).join(", ");else{var a=(null===X.b||void 0===X.b?void 0:X.b[e.loaiPhieuKhoId])||{};t="".concat(a.tenLoaiPhieuKho||"")}return Object(v.a)(Object(v.a)({},e),{},{tenLoaiPhieuKho:t})}},U=t(391),W=t(187);function Y(e){var n=e.name,t=e.label,a=e.onPressEnter,i=e.disabled;return Object(L.b)(l.MyFormItem,{name:n,label:t,children:Object(L.b)(W.a,{disabled:i,onPressEnter:a})})}var Z=b.c.phieuKhoNhapChaLuaModal;n.a=function(e){var n,t,a=d.a.useForm(),c=Object(r.a)(a,1)[0],b=Object(s.b)(),f=Object(s.c)((function(e){return e.form})),v=f.modal,g=f.datas,O=null===g||void 0===g?void 0:g[Z],j=Object(s.c)((function(e){return e.account})).accountData,p=null===j||void 0===j||null===(n=j.paths)||void 0===n||null===(t=n.phieuKhoNhapChaLua)||void 0===t?void 0:t.edit,T=u.a.useMemo((function(){var e;return!!(null===v||void 0===v||null===(e=v[Z])||void 0===e?void 0:e.open)}),[v[Z]]);function y(){return(y=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return",Object(m.k)());case 2:if(window.confirm("X\xe1c nh\u1eadn c\u1eadp nh\u1eadt?")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,c.validateFields();case 6:n=e.sent,t=Object(l.convertMomentToString)([h.a.ngay],n),t=b(Q(t)),t=b(Object(C.c)(t)),b(Object(U.d)(t)),b(Object(l.closeModal)({modalId:Z}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return u.a.useEffect((function(){O?(b(Object(C.e)((null===O||void 0===O?void 0:O.phieuKhoNhapChaLuaChiTiets)||{})),c.setFieldsValue(O)):c.setFieldsValue({ngay:z()(),loaiPhieuKhoId:X.c.nguyenLieu.id})}),[O]),Object(L.c)(l.MyModal,{title:Object(L.b)("div",{children:"Phi\u1ebfu Nh\u1eadp Kho Ch\u1ea3 L\u1ee5a"}),visible:T,onClose:function(){b(Object(l.closeModal)({modalId:Z}))},onOkModal:function(){return y.apply(this,arguments)},width:1e3,modalId:Z,datas:g,children:[Object(L.c)(l.MyForm,{form:c,labelCol:{span:6},wrapperCol:{span:18},children:[Object(L.b)(Y,{name:l.constants.id.id,label:l.constants.id.name,disabled:!0}),Object(L.b)(q,{name:"ngay",label:"Ng\xe0y",rules:[{required:!0}]}),Object(L.b)(J,{rules:[{required:!0}]})]}),Object(L.b)(H,{})]})}}}]);