(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[37],{1113:function(n,e,t){"use strict";t.r(e);var a=t(39),i=t(0),o=t.n(i),c=t(60),r=t(7),d=t(777),s=t(65),l=t(778),u=t(791),h=t(802),b={getTableColumns:function(){return[r.constants.stt,u.a.ngayNhan,h.a.tenNhaCungCap,r.constants.createdAt,r.constants.editRow]},getInputFields:function(){return[u.a.ngayNhan,h.a.tenNhaCungCap]},getExcelFields:function(){return[r.constants.active]}},g=t(776),m=t(5),f=t.n(m),p=t(6),O=t(10),j=t(775),v=t(481),C=t(461),N=t(26),T=t(11),y=t(49),w=t(64),x=t(134),S=t(796),M={getTableColumns:function(){return[r.constants.stt,x.a.tenMatHang,Object(p.a)(Object(p.a)({},S.a.soLuong),{},{render:Object(r.renderNumberInput)("SoLuong")}),r.constants.deleteRowButton]},getInputFields:function(){return[]},getExcelFields:function(){return[r.constants.active]}},H=t(462),I=t(417),F=t(539),D=t(211),k=t(541),L=t(24);var E=function(n){var e=n.onAfterAddFinish,t=n.modalId,i=F.a.useForm(),d=Object(a.a)(i,1)[0],l=o.a.useRef();t=t||s.c.openAddMatHangSoLuongModal;var u=Object(c.b)(),h=Object(c.c)((function(n){return n.form})),b=h.modal,g=h.datas,m=o.a.useMemo((function(){var n;return!!(null===b||void 0===b||null===(n=b[t])||void 0===n?void 0:n.open)}),[b[t]]);function p(){return j.apply(this,arguments)}function j(){return(j=Object(O.a)(f.a.mark((function n(){var t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.validateFields();case 2:t=n.sent,null===e||void 0===e||e(t),d.resetFields(),l.current.focus(),Object(N.l)();case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return o.a.useEffect((function(){m||d.resetFields()}),[m]),Object(L.b)(r.MyModal,{title:Object(L.b)("div",{children:"Th\xeam M\u1eb7t H\xe0ng"}),visible:m,onClose:function(){u(Object(r.closeModal)({modalId:t})),d.resetFields()},onOkModal:p,width:700,modalId:t,datas:g,children:Object(L.c)(r.MyForm,{form:d,children:[Object(L.b)(r.MyFormItem,{name:"tenMatHang",label:"T\xean m\u1eb7t h\xe0ng",rules:[{required:!0}],children:Object(L.b)(D.a,{style:{width:"100%"},ref:l})}),Object(L.b)(r.MyFormItem,{name:"soLuong",label:"S\u1ed1 l\u01b0\u1ee3ng",children:Object(L.b)(k.a,{style:{width:"100%"},onPressEnter:p})})]})})},A=s.c.dsnhChiTietModal;var P=function(n){var e,t,a=Object(c.b)(),i=Object(c.c)((function(n){return n.dsnhChiTiet})).dsnhChiTiets,d=Object(c.c)((function(n){return n.danhSachMatHang})).danhSachMatHangs,u=Object(c.c)((function(n){return n.account})).accountData,h=null===u||void 0===u||null===(e=u.paths)||void 0===e||null===(t=e.dsnhChiTiet)||void 0===t?void 0:t.edit;function b(){return(b=Object(O.a)(f.a.mark((function n(e){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a(Object(H.a)(e));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=Object(O.a)(f.a.mark((function n(e){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a(Object(H.c)(e));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var j=o.a.useMemo((function(){var n=Object.values(i||{});return(n=n.map((function(n){var e=n.tenMatHang;return Object(p.a)({id:e},n)}))).reduce((function(n,e){return Object(p.a)(Object(p.a)({},n),{},Object(T.a)({},e.id,e))}),{})}),[i,d]);return Object(L.c)("div",{className:"dsnhChiTiet-table",css:l.a,children:[Object(L.b)("div",{style:{marginBottom:"7px"},children:Object(L.b)(w.a,{icon:Object(L.b)(y.a,{}),type:"primary",onClick:function(){a(Object(r.openModal)({modalId:s.c.openAddMatHangSoLuongModal}))},children:"Th\xeam m\u1eb7t h\xe0ng"})}),Object(L.b)(g.a,{isEdit:h,constants:M,onCallbackDataSource:function(n){return Object(I.a)("tenMatHang",n)},datas:j,modalId:A,isSelection:!1,pagination:!1,inputOptions:{openEditSoLuong:function(n){a(Object(r.openModal)({modalId:s.c.openEditSoLuong,data:n}))},onDelete:function(n){return m.apply(this,arguments)}}}),Object(L.b)(E,{onAfterAddFinish:function(n){return b.apply(this,arguments)}}),Object(L.b)(r.SoLuongInputModal,{soLuongName:"soLuong",soLuongLabel:"S\u1ed1 l\u01b0\u1ee3ng",onOk:function(n){a(Object(H.e)(n))}})]})},R=s.c.danhSachNhanHangModal;var B=function(n){var e,t,a=n.onAfterAddFinish,i=Object(j.a)({Instance:v.a,onPending:C.d,addSelectedId:C.a}),d=Object(c.b)(),s=Object(c.c)((function(n){return n.form})),l=s.modal,u=s.datas,h=null===u||void 0===u?void 0:u[R],g=Object(c.c)((function(n){return n.dsnhChiTiet})).dsnhChiTiets,m=Object(c.c)((function(n){return n.account})).accountData,T=null===m||void 0===m||null===(e=m.paths)||void 0===e||null===(t=e.danhSachNhanHang)||void 0===t?void 0:t.edit,y=o.a.useMemo((function(){var n;return!!(null===l||void 0===l||null===(n=l[R])||void 0===n?void 0:n.open)}),[l[R]]);function w(){return(w=Object(O.a)(f.a.mark((function n(e,t){var o,c,s,l;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(T){n.next=2;break}return n.abrupt("return",Object(N.o)());case 2:if(o=!0,c=t.ngayNhan,s=Object(r.convertMomentToString)(b.getInputFields(),t),s=Object(p.a)(Object(p.a)({},s),{},{dsnhChiTiets:g}),s=Object(N.h)(c,s),!t){n.next=21;break}if(null===e||void 0===e?void 0:e.id){n.next=16;break}return n.next=11,d(i.onAddAsync({validatedValues:s}));case 11:o=n.sent,null===a||void 0===a||a(null===(l=o)||void 0===l?void 0:l.id),o=Boolean(o),n.next=21;break;case 16:return n.t0=Boolean,n.next=19,d(i.onUpdateAsync({currentData:e,validatedValues:s}));case 19:n.t1=n.sent,o=(0,n.t0)(n.t1);case 21:o&&d(Object(r.closeModal)({modalId:R}));case 22:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return o.a.useEffect((function(){d(Object(H.d)(null===h||void 0===h?void 0:h.dsnhChiTiets))}),[h]),Object(L.b)(r.MyModal,{form:!0,title:Object(L.b)("div",{children:"Phi\u1ebfu Nh\u1eadn H\xe0ng"}),visible:y,onClose:function(){d(Object(r.closeModal)({modalId:R}))},onOkModal:function(n,e){return w.apply(this,arguments)},formOptions:Object(r.getFormItemFields)(b.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:R,datas:u,children:Object(L.b)(P,{})})},K=t(73);var q=function(n){var e=n.dateTimePicker,t=Object(c.b)();return Object(L.b)(L.a,{children:Object(L.b)(d.a,{header:Object(L.b)("div",{className:"font-weight-bold",children:Object(L.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(L.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(L.b)("div",{children:(null===e||void 0===e?void 0:e.getMonthRender())||null}),Object(L.b)("div",{})]}),footer:Object(L.b)("div",{children:Object(L.b)(w.a,{icon:Object(L.b)(K.a,{}),onClick:function(){t(Object(r.toggleAside)({tagPageId:s.c.danhSachNhanHangModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},G=t(12),V=s.c.dsnhChiTietModal;var z=function(n){var e,t,a=n.record,i=Object(c.c)((function(n){return n.account})).accountData,o=null===i||void 0===i||null===(e=i.paths)||void 0===e||null===(t=e.dsnhChiTiet)||void 0===t?void 0:t.edit;return Object(L.b)("div",{className:"dsnhChiTiet-table",css:l.a,children:Object(L.b)(g.a,{isEdit:o,constants:M,onCallbackDataSource:function(n){return Object(I.a)("tenMatHang",n)},datas:(null===a||void 0===a?void 0:a.dsnhChiTiets)||{},modalId:V,isSelection:!1,pagination:!1})})},J=s.c.danhSachNhanHangModal;e.default=function(){var n,e,t=Object(c.b)(),i=Object(r.useDatePicker)(),s=Object(a.a)(i,2),u=s[0],h=s[1],m=Object(c.c)((function(n){return n.danhSachNhanHang})),f=m.tabsData,p=m.danhSachNhanHangLoading,O=m.pageSize,T=m.danhSachNhanHangs,y=Object(c.c)((function(n){var e;return null===(e=n.tagsPage)||void 0===e?void 0:e[J]})),w=Object(c.c)((function(n){return n.account})).accountData,x=null===w||void 0===w||null===(n=w.paths)||void 0===n||null===(e=n.danhSachNhanHang)||void 0===e?void 0:e.edit,S=Object(j.a)({Instance:v.a,onPending:C.d,addSelectedId:C.a,isEdit:x});return o.a.useEffect((function(){return t(Object(C.c)(u)),function(){Object(G.j)("danhSachNhanHang")}}),[u]),Object(L.c)("div",{className:"danhSachNhanHang-page",css:l.a,children:[Object(L.b)(d.b,{className:"tabs",options:f,activeKey:y?"aside":"",onTabClick:function(n){if("add"===n){if(!x)return Object(N.o)();var e=new v.a;t(Object(r.openModal)({modalId:J,data:e.initData}))}else"aside"===n?t(Object(r.toggleAside)({tagPageId:J})):"taiExcel"===n&&t(Object(r.downloadExcel)({tableId:J,constants:b,fileSheet:"danhSachNhanHangSheet",fileName:"danhSachNhanHangName"}))}}),Object(L.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[y&&Object(L.b)(q,{dateTimePicker:h}),Object(L.b)("div",{className:"aside-main",children:Object(L.b)(g.a,{isEdit:x,constants:b,actions:S,datas:T,loading:p,modalId:J,expandable:{expandedRowRender:function(n){return Object(L.b)(z,{record:n})},expandRowByClick:!1},isSelection:!1,pagination:!0,pageSize:O,onChange:function(n){t(Object(C.e)(n.pageSize))}})})]}),Object(L.b)(B,{})]})}},779:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t(0),i=(t(374),t(178)),o=(t(92),t(244),t(146),t(273),t(373),t(411),function(n,e){var t=arguments;if(null==e||!i.d.call(e,"css"))return a.createElement.apply(void 0,t);var o=t.length,c=new Array(o);c[0]=i.a,c[1]=Object(i.c)(n,e);for(var r=2;r<o;r++)c[r]=t[r];return a.createElement.apply(null,c)})},780:function(n,e,t){"use strict";function a(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}t.d(e,"a",(function(){return a}))},791:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t(7),i=t(277),o={donHangId:{id:"donHangId",name:"M\xe3 \u0110H",width:105,className:"text-small",isSearch:!0,align:"center",sorter:Object(a.sortByText)("donHangId"),form:{type:"input",innerProps:{disabled:!0}}},maDonHang:{id:"maDonHang",name:"M\xe3 \u0110H",width:100,className:"text-small",isSearch:!0,align:"center"},ngayDat:{id:"ngayDat",name:"Ng\xe0y \u0111\u1eb7t",width:100,className:"text-small",isSearch:!0,align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayGiao:{id:"ngayGiao",name:"Ng\xe0y giao",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(a.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayNhan:{id:"ngayNhan",name:"Ng\xe0y nh\u1eadn",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(a.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},tongTienMatHang:{id:"tongTienMatHang",name:"T\u1ed5ng ti\u1ec1n m\u1eb7t h\xe0ng",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},tongTienMatHangTra:{id:"tongTienMatHangTra",name:"T\u1ed5ng ti\u1ec1n tr\u1ea3",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},tongTienDonHang:{id:"tongTienDonHang",name:"T\u1ed5ng ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},daThanhToan:{id:"daThanhToan",name:"\u0110\xe3 giao",width:90,className:"text-small",filters:a.trueFalseFilter.filters,onFilter:a.trueFalseFilter.onFilter("daThanhToan"),align:"center",render:Object(i.a)("DaThanhToan")},getTableColumns:function(){return[a.constants.stt,a.constants.active,a.constants.editRow]},getInputFields:function(){return[]},getExcelFields:function(){return[a.constants.active]}}},796:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));t(0);var a=t(7),i=t(68),o=t(24),c={soLuong:{id:"soLuong",name:"S\u1ed1 l\u01b0\u1ee3ng",width:100,className:"text-small font-weight-bold",align:"right",form:{type:"input-number-format"}},soLuongThuc:{id:"soLuongThuc",name:"SL nh\u1eadn",width:100,className:"text-small font-weight-bold",align:"right",form:{type:"input-number-format"}},thanhTien:{id:"thanhTien",name:"Th\xe0nh ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},thanhTienSauVAT:{id:"thanhTienSauVAT",name:"Th\xe0nh ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},ghiChu:{id:"ghiChu",name:"Ghi ch\xfa",width:100,className:"text-small",form:{type:"text-area"},render:function(n,e,t,a){var c,r=(null===a||void 0===a||null===(c=a.inputOptions)||void 0===c?void 0:c.openEditGhiChu)||i.noop;return Object(o.b)("div",{className:"hoverClassBG",onClick:function(){return r(e)},children:n||"--"})}},getTableColumns:function(){return[]},getInputFields:function(){return[]}}},802:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(6),i=t(7),o=t(112),c={nhaCungCapId:{id:"nhaCungCapId",name:"nhaCungCapId"},tenNhaCungCap:{id:"tenNhaCungCap",name:"T\xean NCC",width:150,isSearch:!0,className:"text-small font-weight-bold",sorter:Object(i.sortByText)("tenNhaCungCap"),form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},nganhNgheKinhDoanh:{id:"nganhNgheKinhDoanh",name:"Ng\xe0nh ngh\u1ec1 KD",width:130,className:"text-small ",isSearch:!0,form:{type:"input"}},diaChiNhaCungCap:{id:"diaChiNhaCungCap",name:"\u0110\u1ecba ch\u1ec9",width:140,className:"text-small ",isSearch:!0,form:{type:"text-area"}},nguoiLienHe:{id:"nguoiLienHe",name:"Ng\u01b0\u1eddi li\xean h\u1ec7",width:100,className:"text-small ",form:{type:"input"}},soDienThoai:{id:"soDienThoai",name:"S\u1ed1 \u0110T",width:100,className:"text-small ",align:"center",form:{type:"input"}},getTableColumns:function(){return[Object(a.a)(Object(a.a)({},i.constants.stt),{},{fixed:!1}),this.tenNhaCungCap,Object(a.a)(Object(a.a)({},o.a.tenNhomMatHang),{},{width:170}),this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai,i.constants.active,i.constants.editRow]},getInputFields:function(){return[this.tenNhaCungCap,this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai]},getExcelFields:function(){return[this.tenNhaCungCap,this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai,i.constants.active]}}}}]);