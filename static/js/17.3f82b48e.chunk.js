(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[17],{1085:function(n,t,e){"use strict";e.r(t);var a=e(16),o=e(6),i=e(39),c=e(0),l=e.n(c),r=e(56),u=e(753),d=e(45),b=e(61),s=e(754),h=e(7),g=e(767),f=e(778),m=e(257),O=e(849),j=e(405),v={getTableColumns:function(){return[Object(o.a)(Object(o.a)({},h.constants.stt),{},{fixed:!1}),g.a.donHangId,f.a.tenNhaCungCap,Object(o.a)(Object(o.a)({},g.a.ngayGiao),{},{defaultSortOrder:"descend",sortDirections:["descend"]}),g.a.tongTienDonHang,h.constants.editRow,Object(o.a)(Object(o.a)({},g.a.daThanhToan),{},{name:"\u0110\xe3 TT",render:Object(m.a)("DaThanhToan")}),O.a.tenNguoiThanhToan,b.e.tenTrangThai,j.a.tenLoaiDonHang,g.a.ngayDat]},getInputFields:function(){return[]},getExcelFields:function(){return[h.constants.active]}},p=e(752),T=e(12),S=e(17),M=e(18),y=e(31),H=e.n(y),N=function(n){Object(S.a)(e,n);var t=Object(M.a)(e);function e(){var n;Object(T.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))).pathDatas=["quanLyHangNhap","datas"],n.pathDeleted=["quanLyHangNhap","deleted"],n.initData={tenNguyenVatLieuChaLua:"",inputNumber:0,time:H()()},n}return e}(h.AppClass),x=e(751),C=e(414),D=e(30),k=e(13),w="/quan-ly-hang-nhap/tao-don-hang-nhap",I=e(11),z=e(758),F=e(23),L=b.c.danhSachDHNModal,A=Object(c.memo)((function(n){var t=n.pageData,e=Object(r.c)((function(n){return n.hideColumns})),a=null===e||void 0===e?void 0:e[L||""],i=l.a.useMemo((function(){var n=[h.constants.stt,g.a.donHangId,g.a.ngayGiao,f.a.tenNhaCungCap],t=[g.a.tongTienDonHang],e=[g.a.daThanhToan,g.a.ngayDat,b.e.tenTrangThai,h.constants.capNhatRow,b.e.tenTrangThai,j.a.tenLoaiDonHang];return[{id:0,colSpan:2+n.reduce((function(n,t){var e=t.id;return n+((null===a||void 0===a?void 0:a[e])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:t.reduce((function(n,t){var e=t.id;return n+((null===a||void 0===a?void 0:a[e])?0:1)}),0),cellClassName:"text-right font-weight-bold text-small text-danger",render:function(n){return Object(h.formatNumber)(n)}},{id:2,colSpan:e.reduce((function(n,t){var e=t.id;return n+((null===a||void 0===a?void 0:a[e])?0:1)}),0)}]}),[a]),c=l.a.useMemo((function(){return t.reduce((function(n,t){var e=n.tongTienDonHang+(t.tongTienDonHang||0);return Object(o.a)(Object(o.a)({},n),{},{tongTienDonHang:e})}),{tong:"T\u1ed5ng ti\u1ec1n",tongTienDonHang:0})}),[t]),u=l.a.useMemo((function(){return["tong","tongTienDonHang"].map((function(n,t){return Object(I.a)({},t,c[n])}))}),[c]);return Object(F.b)(z.a,{columns:i,dataSource:u})})),E=e(4),G=e.n(E),V=e(9),B=e(513),P=e(59),R=e(47),q=e(543),K=e(356),U=e(103),X=e(772),Y=e(87),J=e(117),_=b.c.donHangNhapModal,W=Object(c.memo)((function(n){var t=n.pageData,e=n.loaDonHangId,i=Object(r.c)((function(n){return n.hideColumns})),c=null===i||void 0===i?void 0:i[_||""],u=l.a.useMemo((function(){var n=[h.constants.stt,J.a.tenMatHang,U.a.tenNhomMatHang,X.a.soLuong,X.a.soLuongThuc,Y.a.tenDonViTinh,J.a.giaNhapMatHang],t=[X.a.thanhTien],o=Object(a.a)(e===j.b.nhapMatHangVAT.id?[J.a.vat]:[]);return[{id:0,colSpan:0+n.reduce((function(n,t){var e=t.id;return n+((null===c||void 0===c?void 0:c[e])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:t.reduce((function(n,t){var e=t.id;return n+((null===c||void 0===c?void 0:c[e])?0:1)}),0),render:function(n){return Object(h.formatNumber)(n)},cellClassName:"text-right font-weight-bold text-small text-danger"},{id:2,colSpan:o.reduce((function(n,t){var e=t.id;return n+((null===c||void 0===c?void 0:c[e])?0:1)}),0)}]}),[c,e]),d=l.a.useMemo((function(){return t.reduce((function(n,t){var e=n.thanhTien+(t.thanhTien||0);return Object(o.a)(Object(o.a)({},n),{},{thanhTien:e})}),{tong:"T\u1ed5ng ti\u1ec1n",thanhTien:0})}),[t]),b=l.a.useMemo((function(){return["tong","thanhTien"].map((function(n,t){return Object(I.a)({},t,d[n])}))}),[d]);return Object(F.b)(z.a,{columns:u,dataSource:b})})),Q=e(515),Z=b.c.openEditGiaNhapMatHang;var $=function(n){var t=n.dataSource,e=n.onOk,a=Object(r.c)((function(n){return n.form})),u=a.modal,d=a.datas,b=null===d||void 0===d?void 0:d[Z],s=Object(r.b)(),g=Object(c.useRef)(null),f=Object(K.useForm)(),m=Object(i.a)(f,1)[0];l.a.useEffect((function(){return m.setFieldsValue(b),(null===g||void 0===g?void 0:g.current)&&g.current.focus(),function(){m.resetFields()}}),[b]);var O=l.a.useMemo((function(){var n;return!!(null===u||void 0===u||null===(n=u[Z])||void 0===n?void 0:n.open)}),[u[Z]]);function j(){return v.apply(this,arguments)}function v(){return(v=Object(V.a)(G.a.mark((function n(){var a,i,c;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.validateFields();case 2:a=n.sent,i=a.giaNhapMatHang,null===e||void 0===e||e(Object(o.a)(Object(o.a)({},b),{},{giaNhapMatHang:i})),(c=null===t||void 0===t?void 0:t[(null===b||void 0===b?void 0:b.index)+1])?(m.resetFields(),s(Object(h.openModal)({modalId:Z,data:c}))):s(Object(h.closeModal)({modalId:Z}));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(F.b)(h.MyModal,{title:Object(F.c)("div",{children:["Gi\xe1 m\u1eb7t h\xe0ng - ",(null===b||void 0===b?void 0:b.tenMatHang)||""]}),visible:O,width:700,modalId:Z,datas:d,onOkModal:j,onClose:function(){return s(Object(h.closeModal)({modalId:Z}))},children:Object(F.c)(h.MyForm,{form:m,labelCol:{span:8},wrapperCol:{span:16},children:[Object(F.b)(h.MyFormItem,{name:"giaNhapMatHang",label:"Gi\xe1 nguy\xean li\u1ec7u:",children:Object(F.b)(Q.a,{ref:g,min:0,style:{width:"100%"},onPressEnter:j,autoFocus:!0})}),Object(F.b)(h.MyFormItem,{label:"Ch\u1ee9c n\u0103ng",children:Object(F.b)(P.a,{type:"primary",onClick:j,icon:Object(F.b)(q.a,{}),children:"L\u01b0u"})})]})})},nn=e(232),tn=e(88),en=e(879),an={getTableColumns:function(){return[Object(o.a)(Object(o.a)({},h.constants.stt),{},{fixed:!1}),Object(o.a)(Object(o.a)({},J.a.tenMatHang),{},{width:150,fixed:!1,isSearch:!1}),Object(o.a)(Object(o.a)({},U.a.tenNhomMatHang),{},{align:"center",isSearch:!1}),Object(o.a)({},X.a.soLuong),Object(o.a)(Object(o.a)({},X.a.soLuongThuc),{},{render:function(n,t,e,a){var o,i=null===a||void 0===a||null===(o=a.inputOptions)||void 0===o?void 0:o.openEditSoLuongThuc;return i?Object(F.b)("div",{className:"hoverClassBG textDecorationUnderline",onClick:function(){return i(t)},children:n||"--"}):n}}),Object(o.a)(Object(o.a)({},Y.a.tenDonViTinh),{},{isSearch:!1,width:90}),Object(o.a)(Object(o.a)({},J.a.giaNhapMatHang),{},{render:function(n,t,e,a){var o,i=null===a||void 0===a||null===(o=a.inputOptions)||void 0===o?void 0:o.openEditGiaNhapMatHang;return i?Object(F.b)("div",{className:"hoverClassBG textDecorationUnderline",onClick:function(){return i(t)},children:n?Object(h.formatNumber)(n):"--"}):n?Object(h.formatNumber)(n):""}}),X.a.thanhTien]}},on=b.c.donHangNhapModal,cn=function(n){var t=n.donHangNhapData,e=Object(r.b)(),c=Object(r.c)((function(n){return n.donHangNhap})).loading,u=Object(r.c)((function(n){return n.chiTietDonHang})).chiTietDonHangs,d=Object(r.c)((function(n){return n.loaiDonHang})).selectedLoaiDonHangId,s=Object(K.useForm)(),g=Object(i.a)(s,1)[0];l.a.useEffect((function(){return e(Object(nn.m)((null===t||void 0===t?void 0:t.chiTietDonHangs)||{})),function(){e(Object(nn.m)({}))}}),[t]);var f=l.a.useMemo((function(){return u?Object.values(u).map((function(n){var t=n.soLuongThuc,e=void 0===t?0:t,a=n.giaNhapMatHang,i=void 0===a?0:a,c=Math.round(e*i);return Object(o.a)(Object(o.a)({},n),{},{thanhTien:c})})).reduce((function(n,t){return Object(o.a)(Object(o.a)({},n),{},Object(I.a)({},t.id,t))}),{}):{}}),[u]),m=l.a.useMemo((function(){return Object(h.onCallbackDataSource)("tenMatHang",Object.values(f||{}))}),[f]),O=l.a.useMemo((function(){if(d===j.b.nhapMatHangVAT.id){var n=an.getTableColumns();return Object(o.a)(Object(o.a)({},an),{},{getTableColumns:function(){return[].concat(Object(a.a)(n),[J.a.vat])}})}return an}),[d]);return Object(F.c)(F.a,{children:[Object(F.b)(p.a,{onCallbackDataSource:function(n){return Object(h.onCallbackDataSource)("tenMatHang",n)},constants:O,datas:f,loading:c,modalId:on,form:g,pageSize:50,summary:function(n){return Object(F.b)(W,{loaDonHangId:null===t||void 0===t?void 0:t.loaiDonHangId,pageData:n})},inputOptions:{openEditGiaNhapMatHang:function(n){e(Object(h.openModal)({modalId:b.c.openEditGiaNhapMatHang,data:n}))},openEditSoLuongThuc:function(n){e(Object(h.openModal)({modalId:b.c.openEditSoLuongThuc,data:n}))},openEditVAT:function(n){e(Object(h.openModal)({modalId:b.c.openEditVATModal,data:n}))}}}),Object(F.c)(F.a,{children:[Object(F.b)($,{dataSource:m,onOk:function(n){e(Object(nn.i)(n)),e(Object(tn.h)(!0))}}),Object(F.b)(en.a,{dataSource:m,onOk:function(n){e(Object(nn.j)(n)),e(Object(tn.h)(!0))}}),Object(F.b)(h.SoLuongInputModal,{title:"Nh\u1eadp VAT",titleId:"tenMatHang",modalId:b.c.openEditVATModal,dataSource:m,onOk:function(n){e(Object(nn.k)(n)),e(Object(tn.h)(!0))},soLuongName:J.a.vat.id,soLuongLabel:J.a.vat.name})]})]})},ln=e(880),rn=e(764),un=e(854),dn=e(881),bn=e(412),sn=b.c.danhSachDHNModal,hn=function(n){var t,e,a=Object(r.b)(),c=B.a.useForm(),u=Object(i.a)(c,1)[0],d=Object(r.c)((function(n){return n.donHang})).donHangDirty,s=Object(r.c)((function(n){return n.danhSachDHN})).donHangNhapData,g=Object(r.c)((function(n){return n.account})).accountData,f=Object(r.c)((function(n){return n.form})),m=f.modal,O=f.datas,j=null===O||void 0===O?void 0:O[sn],v=null===g||void 0===g||null===(t=g.paths)||void 0===t||null===(e=t.danhSachDHN)||void 0===e?void 0:e.edit,p=l.a.useMemo((function(){var n;return!!(null===m||void 0===m||null===(n=m[sn])||void 0===n?void 0:n.open)}),[m[sn]]);function T(){if(d&&!window.confirm("\u0110\u01a1n h\xe0ng \u0111\xe3 thay \u0111\u1ed5i, b\u1ea1n c\xf3 mu\u1ed1n tho\xe1t?"))return null;a(Object(h.closeModal)({modalId:sn})),a(Object(tn.h)(!1))}function S(){return M.apply(this,arguments)}function M(){return(M=Object(V.a)(G.a.mark((function n(){return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(v){n.next=2;break}return n.abrupt("return",Object(D.o)());case 2:a(Object(h.onConfirmOk)(Object(V.a)(G.a.mark((function n(){var t,e,i,c,l;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.validateFields();case 2:return t=n.sent,e=t.ngayGiao,i=t.loaiDonHangId,c=e.format("L"),l=Object(o.a)(Object(o.a)({},s),{},{ngayGiao:c,loaiDonHangId:i}),l=a(Object(bn.b)(l)),n.next=9,a(Object(C.g)(l));case 9:a(Object(h.closeModal)({modalId:sn})),a(Object(tn.h)(!1));case 11:case"end":return n.stop()}}),n)}))),"X\xe1c nh\u1eadn l\u01b0u \u0111\u01a1n h\xe0ng?"));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return l.a.useEffect((function(){return a(Object(C.c)(j)),function(){return Object(k.j)("donHangNhapData")}}),[j]),l.a.useEffect((function(){if(p){if(p&&s){var n=H()(null===s||void 0===s?void 0:s.ngayGiao,"L");u.setFieldsValue(Object(o.a)(Object(o.a)({},s),{},{ngayGiao:n})),a(Object(bn.d)(s.loaiDonHangId))}}else a(Object(bn.d)(null)),u.resetFields()}),[p,s]),(null===s||void 0===s?void 0:s.trangThaiId)===b.g.daHuy.trangThaiId?Object(F.b)(h.MyModal,{title:Object(F.c)("div",{children:["\u0110\u01a1n \u0111\u1eb7t h\xe0ng nh\xe0 cung c\u1ea5p: ",null===s||void 0===s?void 0:s.tenNhaCungCap]}),visible:p,width:600,onClose:T,modalId:sn,datas:O,children:Object(F.b)("div",{children:"\u0110\u01a1n h\xe0ng \u0111\xe3 h\u1ee7y"})}):Object(F.c)(h.MyModal,{title:Object(F.c)("div",{children:["\u0110\u01a1n \u0111\u1eb7t h\xe0ng nh\xe0 cung c\u1ea5p: ",null===s||void 0===s?void 0:s.tenNhaCungCap]}),visible:p,onClose:T,onOkModal:S,width:1200,modalId:sn,datas:O,maskClosable:!d,children:[Object(F.c)(h.MyForm,{form:u,labelCol:{span:4},wrapperCol:{span:20},children:[Object(F.b)(rn.a,{name:"ngayGiao",label:"Ng\xe0y giao",rules:[{required:!0}],format:"L"}),Object(F.b)(un.a,{disabled:!0,rules:[{required:!0}]}),Object(F.b)(dn.a,{}),Object(F.c)(h.MyFormItem,{label:"Ch\u1ee9c n\u0103ng",children:[Object(F.b)(P.a,{type:"primary",icon:Object(F.b)(R.a,{}),onClick:function(){a(Object(h.openModal)({modalId:b.c.openAddMatHangSoLuongModal}))},children:"Th\xeam m\u1eb7t h\xe0ng"}),Object(F.b)(P.a,{type:"dashed",icon:Object(F.b)(q.a,{}),onClick:S,children:"L\u01b0u \u0111\u01a1n \u0111\u1eb7t h\xe0ng"})]}),Object(F.c)("div",{className:"mt-1",children:[Object(F.b)("div",{className:"font-weight-bold",style:{marginBottom:"7px"},children:"Chi Ti\u1ebft \u0110\u01a1n H\xe0ng:"}),Object(F.b)(cn,{donHangNhapData:s})]})]}),Object(F.b)(F.a,{children:Object(F.b)(ln.a,{giaMatHangName:"giaNhapMatHang",soLuongName:"soLuong",onAfterAddFinish:function(n){a(Object(nn.b)(n)),a(Object(tn.h)(!0))}})})]})},gn=e(65),fn=function(n){var t=n.donHangNhapData,e=l.a.useState({}),c=Object(i.a)(e,2),r=c[0],u=c[1],d=l.a.useState(""),b=Object(i.a)(d,2),s=b[0],g=b[1],f=Object(K.useForm)(),m=Object(i.a)(f,1)[0];l.a.useEffect((function(){u((null===t||void 0===t?void 0:t.chiTietDonHangs)||{}),g((null===t||void 0===t?void 0:t.loaiDonHangId)||"")}),[t]);var O=l.a.useMemo((function(){return r?Object.values(r).map((function(n){var t=n.soLuongThuc,e=void 0===t?0:t,a=n.giaNhapMatHang,i=void 0===a?0:a,c=Math.round(e*i);return Object(o.a)(Object(o.a)({},n),{},{thanhTien:c})})).reduce((function(n,t){return Object(o.a)(Object(o.a)({},n),{},Object(I.a)({},t.id,t))}),{}):{}}),[r]),v=l.a.useMemo((function(){if(s===j.b.nhapMatHangVAT.id){var n=an.getTableColumns();return Object(o.a)(Object(o.a)({},an),{},{getTableColumns:function(){return[].concat(Object(a.a)(n),[J.a.vat])}})}return an}),[s]);return Object(F.b)(F.a,{children:Object(F.b)(p.a,{onCallbackDataSource:function(n){var t=n.map((function(n,t){var e=Object(h.xoaDauVietNam)(n.tenMatHang);return Object(o.a)(Object(o.a)({},n),{},{index:t,searchName:e})}));return Object(gn.orderBy)(t,"searchName")},constants:v,datas:O,form:m,pageSize:50})})},mn=e(394),On=e(882),jn=e(856),vn=e(417);var pn=function(n){var t=n.onAfterSelect,e=Object(r.b)(),a=Object(r.c)((function(n){return n.nguoiThanhToan})),o=a.nguoiThanhToans,i=a.selectedNguoiThanhToanId,c=l.a.useMemo((function(){return Object.values(o||{})}),[o]);return Object(F.b)(F.a,{children:c.map((function(n){return Object(F.b)(P.a,{size:"small",type:i===n.id?"primary":void 0,onClick:function(){return a=n.id,e(Object(vn.e)(a)),void(null===t||void 0===t||t(a));var a},children:n.tenNguoiThanhToan},n.id)}))})},Tn=b.c.nguoiThanhToanModal;var Sn=function(n){var t=Object(r.b)(),e=Object(r.c)((function(n){return n.form})),a=e.modal,i=e.datas,c=null===i||void 0===i?void 0:i[Tn],u=Object(r.c)((function(n){return n.nguoiThanhToan})).selectedNguoiThanhToanId,d=l.a.useMemo((function(){var n;return!!(null===a||void 0===a||null===(n=a[Tn])||void 0===n?void 0:n.open)}),[a[Tn]]);return l.a.useEffect((function(){d?d&&c&&t(Object(vn.e)(null===c||void 0===c?void 0:c.nguoiThanhToanId)):t(Object(vn.e)(null))}),[d,c]),Object(F.b)(h.MyModal,{title:Object(F.b)("div",{children:"Ng\u01b0\u1eddi thanh to\xe1n"}),visible:d,onClose:function(){t(Object(h.closeModal)({modalId:Tn}))},onOkModal:function(){if(!u)return Object(D.k)("Ch\u01b0a ch\u1ecdn ng\u01b0\u1eddi thanh to\xe1n!");t(Object(h.onConfirmOk)(Object(V.a)(G.a.mark((function n(){var e;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=Object(o.a)(Object(o.a)({},c),{},{daThanhToan:!!(null===c||void 0===c?void 0:c.checked),nguoiThanhToanId:u}),e=t(Object(vn.c)(e)),t(Object(C.h)(e)),t(Object(h.closeModal)({modalId:Tn}));case 4:case"end":return n.stop()}}),n)})))))},width:700,modalId:Tn,datas:i,children:Object(F.b)(pn,{})})},Mn=e(269),yn=e(834),Hn=b.c.danhSachDHNModal;t.default=function(){var n,t,e=Object(r.b)(),c=Object(d.u)(),g=Object(r.c)((function(n){return n.danhSachDHN})),f=g.tabsData,m=g.loading,O=g.pageSize,j=g.danhSachDHNs,T=Object(r.c)((function(n){return n.table})).selectedRows,S=Object(r.c)((function(n){var t;return null===(t=n.tagsPage)||void 0===t?void 0:t[Hn]})),M=Object(h.useDatePicker)(),y=Object(i.a)(M,2),H=y[0],I=y[1],z=Object(r.c)((function(n){return n.account})).accountData,L=null===z||void 0===z||null===(n=z.paths)||void 0===n||null===(t=n.danhSachDHN)||void 0===t?void 0:t.edit,E=Object(x.a)({Instance:N,onPending:C.f,addSelectedId:C.a,onDelete:C.e,isEdit:L});l.a.useEffect((function(){return e(Object(C.d)(H)),function(){Object(k.j)("danhSachDHM")}}),[H]);var G=l.a.useMemo((function(){return[{value:"selectedTime",label:I.getMonthRender()}].concat(Object(a.a)(f))}),[H]);return Object(F.c)("div",{className:"danhSachDHN-page",css:s.a,children:[Object(F.b)(u.b,{className:"tabs",options:G,activeKey:S?"aside":"",onTabClick:function(n){if("add"===n){if(!L)return Object(D.o)();c(w)}else if("aside"===n)e(Object(h.toggleAside)({tagPageId:Hn}));else if("print"===n)e(Object(h.openModal)({modalId:b.d.inDonHang}));else if("taiExcel"===n){var t,a=null===T||void 0===T||null===(t=T[Hn])||void 0===t?void 0:t[0],o=null===a||void 0===a?void 0:a.chiTietDonHangs;e(Object(h.downloadExcel)({tableId:Hn,constants:On.a,fileSheet:a.id,fileName:"Don Hang Nhap ".concat(null===a||void 0===a?void 0:a.tenNhaCungCap,"_Ngay Giao ").concat(null===a||void 0===a?void 0:a.ngayGiao),dataSource:Object(mn.a)("tenMatHang",Object.values(o||{}))}))}}}),Object(F.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(F.b)("div",{className:"aside-main",children:Object(F.b)(p.a,{constants:v,actions:E,datas:j,loading:m,modalId:Hn,isEdit:L,expandable:{expandedRowRender:function(n){return Object(F.b)(fn,{donHangNhapData:n})},rowExpandable:function(n){return!!n.chiTietDonHangs},fixed:"right",indentSize:15},isSelection:!0,pagination:!0,pageSize:O,onChange:function(n){return e(Object(C.i)(n.pageSize))},summary:function(n){return Object(F.b)(A,{pageData:n})},rowClassName:function(n){return n.trangThaiId===b.g.daHuy.trangThaiId?"bg-danger":n.trangThaiId===b.g.chuaNhan.trangThaiId?"bg-gold-light":""},inputOptions:{onActiveDaThanhToan:function(n,t){if(!e(Object(Mn.b)(yn.a.xacNhanDaThanhToan.key)))return Object(D.k)("Ch\u01b0a c\xf3 quy\u1ec1n x\xe1c nh\u1eadn thanh to\xe1n!");e(Object(h.openModal)({modalId:b.c.nguoiThanhToanModal,data:Object(o.a)(Object(o.a)({},t),{},{checked:n})}))}}})})}),Object(F.c)(F.a,{children:[Object(F.b)(hn,{}),Object(F.b)(h.PrintModal,{modalId:b.d.inDonHang,title:"In \u0110\u01a1n \u0110\u1eb7t H\xe0ng",onPrint:function(n){var t=(null===T||void 0===T?void 0:T[Hn])||[];if(0===t.length)return Object(D.k)("Ch\u01b0a ch\u1ecdn \u0111\u01a1n h\xe0ng!");if(t.length>1)return Object(D.k)("Ch\u1ec9 ch\u1ecdn m\u1ed9t \u0111\u01a1n h\xe0ng!");var a=null===t||void 0===t?void 0:t[0];e(Object(jn.a)(a,n))}}),Object(F.b)(Sn,{})]})]})}},758:function(n,t,e){"use strict";e(0);var a=e(512),o=e(23),i=a.a.Summary,c=i.Row,l=i.Cell;t.a=function(n){var t,e=n.columns,a=n.dataSource;return Object(o.b)(c,{children:null===e||void 0===e||null===(t=e.map)||void 0===t?void 0:t.call(e,(function(n,t){var e=null===n||void 0===n?void 0:n.id,i=(null===n||void 0===n?void 0:n.colSpan)||0,c=(null===n||void 0===n?void 0:n.cellClassName)||"",r=(null===n||void 0===n?void 0:n.valueStyle)||{},u=(null===n||void 0===n?void 0:n.valueClassName)||"",d=null===n||void 0===n?void 0:n.render,b=(null===a||void 0===a?void 0:a[t])||{},s=(null===b||void 0===b?void 0:b[e])||"";return d&&(s=d(s,b,t)),Object(o.b)(l,{index:t,colSpan:i,className:c,children:Object(o.b)("div",{style:r,className:u,children:s})},e)}))})}},764:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));e(0);var a=e(7),o=e(239),i=e(23);function c(n){var t=n.name,e=n.label,c=n.rules,l=n.disabled,r=n.format;return Object(i.b)(a.MyFormItem,{name:t,label:e,rules:c,children:Object(i.b)(o.a,{disabled:l,style:{width:"100%"},format:r})})}},772:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));e(0);var a=e(7),o=e(65),i=e(23),c={soLuong:{id:"soLuong",name:"S\u1ed1 l\u01b0\u1ee3ng",width:100,className:"text-small font-weight-bold",align:"right",form:{type:"input-number-format"}},soLuongThuc:{id:"soLuongThuc",name:"SL nh\u1eadn",width:100,className:"text-small font-weight-bold",align:"right",form:{type:"input-number-format"}},thanhTien:{id:"thanhTien",name:"Th\xe0nh ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},thanhTienSauVAT:{id:"thanhTienSauVAT",name:"Th\xe0nh ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},ghiChu:{id:"ghiChu",name:"Ghi ch\xfa",width:100,className:"text-small",form:{type:"text-area"},render:function(n,t,e,a){var c,l=(null===a||void 0===a||null===(c=a.inputOptions)||void 0===c?void 0:c.openEditGhiChu)||o.noop;return Object(i.b)("div",{className:"hoverClassBG",onClick:function(){return l(t)},children:n||"--"})}},getTableColumns:function(){return[]},getInputFields:function(){return[]}}},811:function(n,t,e){"use strict";var a=e(6),o=e(16),i=e(0),c=e.n(i),l=e(59),r=e(114),u=e(7),d=e(56),b=e(800),s=e(47),h=e(61),g=e(65),f=e(394),m=e(23);t.a=function(n){var t,e,i=n.form,O=n.name,j=n.mode,v=n.label,p=n.labelCol,T=n.wrapperCol,S=n.rules,M=n.isEdit,y=n.isAddNew,H=n.onAfterSelect,N=n.onAfterAddFinish,x=n.disabled,C=n.matHangFilters,D=n.loaiTruMatHangs,k=n.defaultValues,w=Object(d.b)(),I=Object(d.c)((function(n){return n.danhSachMatHang})).danhSachMatHangs,z=Object(d.c)((function(n){return n.account})).accountData,F=(null===z||void 0===z||null===(t=z.paths)||void 0===t||null===(e=t.matHang)||void 0===e?void 0:e.edit)||M,L=c.a.useMemo((function(){var n=Object.values(I);return Object.values(k||{}).length>0&&(n=Object.values(k).reduce((function(n,t){var e=t.id,i=(null===I||void 0===I?void 0:I[e])||{};return[].concat(Object(o.a)(n),[Object(a.a)(Object(a.a)({},i),t)])}),[])),C&&(n=Object(g.filter)(n,C)),Object.values(D||{}).length>0&&(n=n.reduce((function(n,t){return(null===D||void 0===D?void 0:D[null===t||void 0===t?void 0:t.id])?n:[].concat(Object(o.a)(n),[t])}),[])),n=(n=Object(f.a)("tenMatHang",n)).filter((function(n){return n.active})).map((function(n){var t="".concat(n.tenMatHang," - ").concat(null===n||void 0===n?void 0:n.tenDonViTinh," - ").concat(null===n||void 0===n?void 0:n.tenNhomMatHang);return{value:n.id,label:t}})),n}),[I,D,k]),A=Object(m.b)(u.MyFormItem,{label:v||"M\u1eb7t h\xe0ng",type:"select",name:O||"matHangId",innerProps:{autoFocus:!0,mode:j,showSearch:!0,allowClear:!0,filterOption:u.onSelectSearch,onChange:function(n){var t=null===I||void 0===I?void 0:I[n];null===H||void 0===H||H(n,t)},disabled:x,notFoundContent:F?Object(m.b)("div",{children:y?Object(m.b)(l.a,{icon:Object(m.b)(s.a,{}),type:"primary",onClick:function(){return w(Object(u.openModal)({modalId:h.c.danhSachMatHangModal}))},children:"Th\xeam"}):null}):Object(m.b)(r.a,{})},options:L,rules:S||[]});return i?Object(m.c)(m.a,{children:[Object(m.b)(u.MyForm,{form:i,labelCol:p||{span:8},wrapperCol:T||{span:16},children:A}),F&&Object(m.b)(b.a,{onAfterAddFinish:function(n){i.setFieldsValue({matHangId:n})}})]}):Object(m.c)(m.a,{children:[A,F&&Object(m.b)(b.a,{onAfterAddFinish:function(n){function t(t,e){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n,t){null===N||void 0===N||N(n,t)}))})]})}},813:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var a={diaChiKhachHangDonHangStyle:{fontSize:9,color:"black",margin:[5,5,5,15]},congTyTextStyle:{fontSize:13,margin:[0,0,0,2],color:"black"},logoStyle:{margin:[0,0,0,0]},headerStyle:{margin:[0,0,0,1]},subHeaderStyle:{margin:[0,15,0,0]},subheader:{fontSize:16,bold:!0,margin:[0,10,0,5]},sub10header:{fontSize:10,bold:!0,margin:[0,2,0,2]},sub8header:{fontSize:8,bold:!0,margin:[0,2,0,2]},sub11header:{fontSize:11,bold:!0,margin:[0,5,0,5]},marginBottom10:{margin:[0,0,0,10]},tableExample:{margin:[0,5,0,15]},tableHeader8:{bold:!0,fontSize:8,color:"black",margin:[1,1,1,1]},tableHeader:{bold:!0,fontSize:9,color:"black",margin:[1,1,1,1]},tableHeaderLightBlue:{bold:!0,fontSize:9,color:"black",margin:[1,1,1,1]},textTable:{fontSize:8,color:"black"},textTable8:{fontSize:8,color:"black"},textTable9:{fontSize:9,color:"black"},textTable9Bold:{fontSize:9,bold:!0,color:"black"},textTable9DonDatHang:{fontSize:9,color:"black",margin:[0,1,0,1]},textTable9BoldDonDatHang:{fontSize:9,bold:!0,color:"black",margin:[0,1,0,1]},textTable8BoldDonDatHang:{fontSize:8,bold:!0,color:"black",margin:[0,1,0,1]},textTable11BoldDonDatHang:{fontSize:11,bold:!0,color:"black"},fontSize13BoldTitle:{fontSize:14,color:"red",margin:[0,5,0,15],bold:!0},fontSize13BoldDonDatHang:{fontSize:9,margin:[0,15,0,5],bold:!0},textTable10Bold:{fontSize:10,bold:!0,color:"black"},nameRecipeTable:{fontSize:9,bold:!0,color:"black"},kindRecipeTable:{fontSize:10,color:"red",bold:!0},textStyle:{fontSize:10,margin:[0,0,0,2],color:"black"},shiftStyle:{fontSize:11,margin:[0,0,0,2],color:"black"},thueVAT:{bold:!0,fontSize:9,color:"red",margin:[10,10,0,0]},ghiChuKhachHang:{bold:!0,fontSize:9,margin:[10,10,10,5]},nguoiNhanHangStyle:{bold:!0,fontSize:10,color:"black",margin:[0,10,0,0]},columnsStyle:{margin:[0,10,0,10]},lineStyle:{backgroundColor:"black"},donDatHangStyle:{color:"red",margin:[0,10,0,0],fontSize:13},lien1GiaoKhachHangStyle:{margin:[16,2,0,0],fontSize:10},lien2LuuHanhNoiBoStyle:{margin:[40,2,0,0],fontSize:10},nguoiThietKe:{bold:!0,fontSize:11,color:"black",margin:[30,10,0,0]},ngayThangNam:{fontSize:11,color:"black",margin:[0,10,0,0]},bold8:{fontSize:8,bold:!0,color:"black",margin:[0,0,5,0]},bold11:{fontSize:11,bold:!0,color:"black",margin:[0,0,10,0]},bold14:{fontSize:14,bold:!0,color:"black",margin:[20,20,20,0]},bold15:{fontSize:15,bold:!0,color:"black",margin:[20,20,20,0]},bold16:{fontSize:16,bold:!0,color:"black",margin:[20,20,20,0]},bold20:{fontSize:20,bold:!0,color:"black",margin:[20,20,20,0]},fontSize6:{fontSize:6,color:"black"},fontSize8:{fontSize:8,color:"black",margin:[2,2,2,2]},fontSize9:{fontSize:9,color:"black",margin:[2,2,2,2]},fontSize8Margin5:{fontSize:8,color:"black",margin:[5,5,5,5]},fontSize9Top20:{fontSize:9,color:"black",margin:[2,15,2,2]},fontSize9Bottom20:{fontSize:9,color:"black",margin:[2,2,2,15]},fontSize9Margin5:{fontSize:9,color:"black",margin:[5,5,5,5]},fontSize10Margin5:{fontSize:10,color:"black",margin:[5,5,5,5]},fontSize8MarginBottom20:{fontSize:8,color:"black",margin:[5,5,5,30]},nguoiGiaoNhan:{fontSize:13,color:"black",bold:!0,margin:[0,15,0,0]},marginTop:{margin:[0,15,0,0]}}},834:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var a=e(6),o=Object(a.a)({},{xacNhanDaThanhToan:{key:"xacNhanDaThanhToan",title:"X\xe1c nh\u1eadn \u0111\xe3 thanh to\xe1n"},huyDonHangXuat:{key:"huyDonHangXuat",title:"H\u1ee7y \u0111\u01a1n h\xe0ng xu\u1ea5t"}})},838:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var a=e(16),o=e(65);function i(n){var t=["STT","T\xean kh\xe1ch h\xe0ng","Ghi ch\xfa"].map((function(n){return{text:n,style:"tableHeader",fillColor:"lightblue",alignment:"center"}})),e=Object(o.orderBy)(n).map((function(n,t){return[{text:t+1,style:"textTable9",alignment:"center"},{text:n||"",style:"textTable9",bold:!0},{text:"",style:"textTable9"}]}));return{layout:"lightHorizontalLines",headerRows:1,dontBreakRows:!0,widths:[20,140,"*"],body:[t].concat(Object(a.a)(e))}}},849:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return i}));var a=e(7),o={tuyet:{id:"Tuy\u1ebft",nguoiThanhToanId:"Tuy\u1ebft",tenNguoiThanhToan:"Tuy\u1ebft"},tinh:{id:"T\u1ecbnh",nguoiThanhToanId:"T\u1ecbnh",tenNguoiThanhToan:"T\u1ecbnh"},empty:{id:"",nguoiThanhToanId:"",tenNguoiThanhToan:"--"}},i={nguoiThanhToanId:{id:"nguoiThanhToanId",name:"M\xe3 lo\u1ea1i TT",width:100},tenNguoiThanhToan:{id:"tenNguoiThanhToan",name:"Ng\u01b0\u1eddi TT",width:90,className:"text-small",align:"center",isSearch:!0,form:{type:"input"}},getTableColumns:function(){return[a.constants.stt,a.constants.active,a.constants.editRow]},getInputFields:function(){return[]}}},856:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var a=e(16),o=e(4),i=e.n(o),c=e(9),l=e(31),r=e.n(l),u=e(7),d=e(836),b=e(837),s=e(813),h=e(394),g=e(838);function f(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"A5";return function(){var e=Object(c.a)(i.a.mark((function e(a){var o,c,l,h,f,O,v,p,T,S,M,y,H,N;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.vfs=b.pdfMake.vfs,o=n.donHangId,c=n.tenNhaCungCap,l=n.ngayGiao,h=n.tenKhachHangs,f=r()(l,"L"),O=m,v=j,p=a(Object(u.getTimestamp)({})),T=p.updatedAtString,S=p.updatedBy,M="Th\u1eddi gian in: ".concat(T," ").concat(S),y=[O(),{style:"subHeaderStyle",columns:[{text:"Ng\xe0y giao: ".concat(f.format("DD.MM.YYYY")),style:"fontSize9Margin5",bold:!0},{text:"M\xe3 H\u0110: ".concat(o||""),style:"fontSize9Margin5",bold:!0},{text:"T\xean NCC: ".concat(c||""),style:"fontSize9Margin5",bold:!0},{text:M,style:"fontSize9Margin5",alignment:"right",bold:!0}]},{table:v(n)},{text:"",style:"marginTop"},h?{table:Object(g.a)(h)}:"",{style:"subHeaderStyle",columns:[{text:"Ng\u01b0\u1eddi giao",style:"fontSize10Margin5",bold:!0,alignment:"center"},{text:"Ng\u01b0\u1eddi nh\u1eadn h\xe0ng",style:"fontSize10Margin5",bold:!0,alignment:"center"}]}],H={pageSize:t,pageOrientation:"portal",pageMargins:[20,20,20,20],content:y,styles:s.a},N=window.open("","_blank"),d.createPdf(H).open({},N);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}function m(){return{style:"",columnGap:5,columns:[[{text:"Th\u1ef1c Ph\u1ea9m T\u01b0 B\u1ed1n".toUpperCase(),style:"bold11",bold:!0,alignment:"left",width:100},{text:"S\u1ed1 15 Nguy\u1ec5n Tri Ph\u01b0\u01a1ng, Ph\xfa Th\u1ecd, Ph\xfa Ch\xe1nh",style:"fontSize8",alignment:"left",width:100},{text:"TX T\xe2n Uy\xean, B\xecnh D\u01b0\u01a1ng",style:"fontSize8",alignment:"left",width:100},{text:"\u0110T: 0981.310.247",style:"fontSize8",alignment:"left",width:100},{text:"Website: thucphamtubon.com",style:"fontSize8",alignment:"left",width:100}],{text:"Phi\u1ebfu Ki\u1ec3m H\xe0ng".toUpperCase(),style:"bold20",bold:!0,alignment:"left"},{text:"",width:40}]}}function O(n){var t=[],e=Object.values(n.chiTietDonHangs||{});return(e=Object(h.a)("tenMatHang",e)).forEach((function(n,e){t.push([{text:e+1,style:"textTable9",alignment:"center"},{text:n.tenMatHang||"",style:"textTable9",bold:!0},{text:n.tenDonViTinh,style:"textTable9",alignment:"center"},{text:n.soLuongThuc||"",style:"textTable9",alignment:"right",bold:!0},{text:"",style:"textTable9",alignment:"right"},{text:"",style:"textTable9"}])})),t}function j(n){return{layout:"lightHorizontalLines",headerRows:1,dontBreakRows:!0,widths:[20,140,50,50,75,"*"],body:[["STT","T\xean m\u1eb7t h\xe0ng","\u0110VT","S\u1ed1 l\u01b0\u1ee3ng","SL th\u1ef1c nh\u1eadn","Ghi ch\xfa"].map((function(n){return{text:n,style:"tableHeader",fillColor:"lightblue",alignment:"center"}}))].concat(Object(a.a)(O(n)))}}},879:function(n,t,e){"use strict";var a=e(4),o=e.n(a),i=e(6),c=e(9),l=e(39),r=e(0),u=e.n(r),d=e(7),b=e(356),s=e(543),h=e(515),g=e(59),f=e(61),m=e(56),O=e(23),j=f.c.openEditSoLuongThuc;t.a=function(n){var t=n.dataSource,e=n.onOk,a=Object(m.c)((function(n){return n.form})),f=a.modal,v=a.datas,p=null===v||void 0===v?void 0:v[j],T=Object(m.b)(),S=Object(r.useRef)(null),M=Object(b.useForm)(),y=Object(l.a)(M,1)[0];u.a.useEffect((function(){y.setFieldsValue(p),(null===S||void 0===S?void 0:S.current)&&S.current.focus()}),[p]);var H=u.a.useMemo((function(){var n;return!!(null===f||void 0===f||null===(n=f[j])||void 0===n?void 0:n.open)}),[f[j]]);function N(){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(o.a.mark((function n(){var a,c,l;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.validateFields();case 2:a=n.sent,c=a.soLuongThuc,null===e||void 0===e||e(Object(i.a)(Object(i.a)({},p),{},{soLuongThuc:c})),(l=null===t||void 0===t?void 0:t[(null===p||void 0===p?void 0:p.index)+1])?(y.resetFields(),T(Object(d.openModal)({modalId:j,data:l}))):T(Object(d.closeModal)({modalId:j}));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(O.b)(d.MyModal,{title:Object(O.c)("div",{children:["S\u1ed1 L\u01b0\u1ee3ng Th\u1ef1c - ",(null===p||void 0===p?void 0:p.tenMatHang)||""]}),visible:H,width:700,modalId:j,datas:v,onOkModal:N,onClose:function(){return T(Object(d.closeModal)({modalId:j}))},children:Object(O.c)(d.MyForm,{form:y,labelCol:{span:8},wrapperCol:{span:16},children:[Object(O.b)(d.MyFormItem,{name:"soLuongThuc",label:"S\u1ed1 l\u01b0\u1ee3ng th\u1ef1c:",children:Object(O.b)(h.a,{ref:S,min:0,style:{width:"100%"},onPressEnter:N,autoFocus:!0})}),Object(O.b)(d.MyFormItem,{label:"Ch\u1ee9c n\u0103ng",children:Object(O.b)(g.a,{type:"primary",onClick:N,icon:Object(O.b)(s.a,{}),children:"L\u01b0u"})})]})})}},880:function(n,t,e){"use strict";var a=e(4),o=e.n(a),i=e(9),c=e(39),l=e(0),r=e.n(l),u=e(7),d=e(56),b=e(513),s=e(515),h=e(61),g=e(811),f=e(23);t.a=function(n){var t=n.onAfterAddFinish,e=n.soLuongName,a=n.giaMatHangName,l=n.matHangFilters,m=n.notAutoCloseAfterOk,O=n.loaiTruMatHangs,j=n.defaultValues,v=n.soLuongLabel,p=n.giaMatHangLabel,T=n.modalId,S=b.a.useForm(),M=Object(c.a)(S,1)[0];v=v||"S\u1ed1 l\u01b0\u1ee3ng",p=p||"Gi\xe1 m\u1eb7t h\xe0ng",T=T||h.c.openAddMatHangSoLuongModal;var y=Object(d.b)(),H=Object(d.c)((function(n){return n.form})),N=H.modal,x=H.datas,C=r.a.useMemo((function(){var n;return!!(null===N||void 0===N||null===(n=N[T])||void 0===n?void 0:n.open)}),[N[T]]);function D(){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(o.a.mark((function n(){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.validateFields();case 2:e=n.sent,null===t||void 0===t||t(e),m||y(Object(u.closeModal)({modalId:T})),M.resetFields();case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(f.b)(u.MyModal,{title:Object(f.b)("div",{children:"Th\xeam M\u1eb7t H\xe0ng"}),visible:C,onClose:function(){y(Object(u.closeModal)({modalId:T})),M.resetFields()},onOkModal:D,width:700,modalId:T,datas:x,children:Object(f.c)(u.MyForm,{form:M,children:[Object(f.b)(g.a,{defaultValues:j,loaiTruMatHangs:O,matHangFilters:l,rules:[{required:!0}],isAddNew:!0,onAfterAddFinish:function(n){M.setFieldsValue({matHangId:n})}}),Object(f.b)(u.MyFormItem,{name:e,label:v,children:Object(f.b)(s.a,{style:{width:"100%"},onPressEnter:D})}),a?Object(f.b)(u.MyFormItem,{name:a,label:p,children:Object(f.b)(s.a,{style:{width:"100%"},onPressEnter:D})}):null]})})}},881:function(n,t,e){"use strict";var a=e(0),o=e.n(a),i=e(7),c=e(56),l=e(412),r=e(23);t.a=function(n){var t=n.form,e=n.name,a=n.mode,u=n.label,d=n.labelCol,b=n.wrapperCol,s=n.rules,h=n.onAfterSelect,g=n.disabled,f=Object(c.b)(),m=Object(c.c)((function(n){return n.loaiDonHang})).loaiDonHangs,O=o.a.useMemo((function(){return Object.values(m).filter((function(n){return n.active})).map((function(n){return{value:n.id,label:n.tenLoaiDonHang||n.id}}))}),[m]),j=Object(r.b)(i.MyFormItem,{label:u||"Lo\u1ea1i \u0111\u01a1n h\xe0ng",type:"select",name:e||"loaiDonHangId",innerProps:{mode:a,showSearch:!0,allowClear:!0,filterOption:i.onSelectSearch,onChange:function(n){null===h||void 0===h||h(n),f(Object(l.d)(n))},disabled:g},options:O,rules:s||[]});return t?Object(r.b)(r.a,{children:Object(r.b)(i.MyForm,{form:t,labelCol:d||{span:8},wrapperCol:b||{span:16},children:j})}):j}},882:function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var a=e(6),o=(e(0),e(7)),i=e(515),c=e(103),l=e(87),r=e(117),u=e(772),d=e(23),b={getTableColumns:function(){return[Object(a.a)(Object(a.a)({},o.constants.stt),{},{fixed:!1}),Object(a.a)(Object(a.a)({},r.a.tenMatHang),{},{width:120,fixed:!1}),Object(a.a)(Object(a.a)({},c.a.tenNhomMatHang),{},{align:"center"}),Object(a.a)(Object(a.a)({},u.a.soLuong),{},{render:function(n,t,e,a){var o=a.onBlur;return Object(d.b)(i.a,{value:n||"",size:"small",name:"".concat(t.id,".soLuong"),onBlur:o,min:0})}}),Object(a.a)(Object(a.a)({},l.a.tenDonViTinh),{},{align:"center"}),r.a.giaNhapMatHang]},getInputFields:function(){return[]},getExcelFields:function(){return[o.constants.stt,r.a.tenMatHang,c.a.tenNhomMatHang,u.a.soLuongThuc,l.a.tenDonViTinh,r.a.giaNhapMatHang]}}}}]);