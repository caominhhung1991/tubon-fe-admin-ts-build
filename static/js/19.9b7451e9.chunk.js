(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[19],{1006:function(n,a,e){"use strict";e.r(a);var t=e(5),o=e.n(t),i=e(10),c=e(13),l=e(8),r=e(40),u=e(0),d=e.n(u),s=e(56),h=e(7),b=e(32),g=e.n(b),T=e(72),f=e(714),m=e(64),v=e(718),p=e(370),O=e(376),j={daThanhToan:{id:"daThanhToan",name:"\u0110\xe3 TT",width:70,className:"text-small",filters:h.trueFalseFilter.filters,onFilter:h.trueFalseFilter.onFilter("daThanhToan"),align:"center",fixed:!0,render:Object(O.a)("daThanhToan")},ngay:{id:"ngay",name:"Ng\xe0y",width:100,className:"text-small font-weight-bold",align:"center",isSearch:!0,fixed:!0,sorter:Object(h.sortByText)("ngay"),form:{type:"date-picker",innerProps:{disabledDate:function(n){return n<g()()}},rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},Thu:{id:"Thu",name:"Thu",width:110,className:"text-small font-weight-bold text-success",align:"right",isSearch:!0,form:{type:"input-number-format",innerProps:{min:0,step:1e3}},render:h.numberRender},Chi:{id:"Chi",name:"Chi",width:120,className:"text-small font-weight-bold text-danger",align:"right",isSearch:!0,form:{type:"input-number-format",innerProps:{min:0,step:1e3}},render:h.numberRender},loaiThanhToan:{id:"loaiThanhToan",name:"Lo\u1ea1i TT",width:100,className:"text-small",align:"center",isSearch:!0},nguoiThanhToan:{id:"nguoiThanhToan",name:"Ng\u01b0\u1eddi TT",width:110,className:"text-small font-weight-bold",align:"center",isSearch:!0},noiDungThanhToan:{id:"noiDungThanhToan",name:"N\u1ed9i dung",width:200,isSearch:!0,className:"text-small",form:{type:"text-area"}},getTableColumns:function(){return[h.constants.stt,this.daThanhToan,this.ngay,this.Thu,this.Chi,this.nguoiThanhToan,this.loaiThanhToan,this.noiDungThanhToan,Object(l.a)(Object(l.a)({},p.a.tenTaiKhoanNganHang),{},{width:170,render:function(n,a){var e,t;return(null===a||void 0===a||null===(e=a.taiKhoanNganHang)||void 0===e?void 0:e.tenNguoiNhan)||(null===a||void 0===a||null===(t=a.taiKhoanNganHang)||void 0===t?void 0:t.hoTen)}}),Object(l.a)(Object(l.a)({},p.a.nganHang),{},{width:200}),p.a.soTaiKhoan,h.constants.editRow]},getInputFields:function(){return[this.ngay,this.Thu,this.Chi,this.noiDungThanhToan]},getExcelFields:function(){return[h.constants.stt,this.daThanhToan,this.ngay,this.Thu,this.Chi,this.nguoiThanhToan,this.loaiThanhToan,this.noiDungThanhToan,Object(l.a)(Object(l.a)({},p.a.tenTaiKhoanNganHang),{},{width:170,render:function(n,a){var e,t;return(null===a||void 0===a||null===(e=a.taiKhoanNganHang)||void 0===e?void 0:e.tenNguoiNhan)||(null===a||void 0===a||null===(t=a.taiKhoanNganHang)||void 0===t?void 0:t.hoTen)}}),Object(l.a)(Object(l.a)({},p.a.nganHang),{},{width:200}),p.a.soTaiKhoan]}},N=e(717),y=e(232),C=e(713),w=e(426),S=e(328),M=e(35),x=e(736),I=e(427),k=e(25),F=function(n){var a=n.form,e=n.name,t=n.mode,o=n.label,i=n.labelCol,c=n.wrapperCol,l=n.rules,r=n.onAfterSelect,u=n.disabled,b=Object(s.b)(),g=Object(s.c)((function(n){return n.loaiThanhToan})).loaiThanhToans,T=d.a.useMemo((function(){return Object.values(g).map((function(n){var a="".concat(n.tenLoaiThanhToan);return{value:n.id,label:a}}))}),[g]);var f=Object(k.b)(h.MyFormItem,{label:o||"Lo\u1ea1i thanh to\xe1n",type:"select",name:e||"loaiThanhToanId",innerProps:{mode:t,showSearch:!0,allowClear:!0,filterOption:h.onSelectSearch,onChange:function(n){b(Object(I.a)(n)),null===r||void 0===r||r(n)},disabled:u},options:T,rules:l||[]});return a?Object(k.b)(k.a,{children:Object(k.b)(h.MyForm,{form:a,labelCol:i||{span:8},wrapperCol:c||{span:16},children:f})}):Object(k.b)(k.a,{children:f})},K=e(312),H=e(12),D=e(18),P=e(19),A={tuyet:{id:"Tuy\u1ebft",nguoiThanhToanId:"Tuy\u1ebft",tenNguoiThanhToan:"Tuy\u1ebft"},tinh:{id:"T\u1ecbnh",nguoiThanhToanId:"T\u1ecbnh",tenNguoiThanhToan:"T\u1ecbnh"},empty:{id:"",nguoiThanhToanId:"",tenNguoiThanhToan:"--"}},E=(h.AppClass,e(20),e(23)),z=e(55),V={nguoiThanhToanId:{id:"nguoiThanhToanId",name:"M\xe3 lo\u1ea1i TT",width:100},tenNguoiThanhToan:{id:"tenNguoiThanhToan",name:"Ng\u01b0\u1eddi TT",width:90,className:"text-small",align:"center",isSearch:!0,form:{type:"input"}},getTableColumns:function(){return[h.constants.stt,h.constants.active,h.constants.editRow]},getInputFields:function(){return[]}},R=(e(14),e(15),[{label:"Th\xeam m\u1edbi",value:"add",Icon:z.a},h.constantTabs.taiExcel]),L={loading:!1,selectedTab:R[0].value,tabsData:R,pageSize:Number(localStorage.getItem("pageSize-nguoiThanhToan")||"25"),nguoiThanhToans:{},nguoiThanhToanId:""},B=Object(E.createSlice)({name:"nguoiThanhToan",initialState:L,reducers:{setDatas:function(n,a){n.nguoiThanhToans=a.payload},setPageSize:function(n,a){localStorage.setItem("pageSize-nguoiThanhToan","".concat(a.payload)),n.pageSize=a.payload},onPending:function(n,a){n.loading=!!a.payload},addSelectedId:function(n,a){n.nguoiThanhToanId=a.payload}}}),q=B.actions,Q=q.addSelectedId;q.setDatas,q.onPending,q.setPageSize,B.reducer;var J=function(n){var a=n.form,e=n.name,t=n.mode,o=n.label,i=n.labelCol,c=n.wrapperCol,l=n.rules,r=n.onAfterSelect,u=n.disabled,b=Object(s.b)(),g=d.a.useMemo((function(){return Object.values(A).map((function(n){var a="".concat(n.tenNguoiThanhToan);return{value:n.id,label:a}}))}),[A]);var T=Object(k.b)(h.MyFormItem,{label:o||"Ng\u01b0\u1eddi TT",type:"select",name:e||"nguoiThanhToanId",innerProps:{mode:t,showSearch:!0,allowClear:!0,filterOption:h.onSelectSearch,onChange:function(n){b(Q(n)),null===r||void 0===r||r(n)},disabled:u},options:g,rules:l||[]});return a?Object(k.b)(k.a,{children:Object(k.b)(h.MyForm,{form:a,labelCol:i||{span:8},wrapperCol:c||{span:16},children:T})}):Object(k.b)(k.a,{children:T})},U=m.c.bcktTienMatModal;var G=function(){var n,a,e=Object(s.b)(),t=Object(s.c)((function(n){return n.form})),c=t.modal,u=t.datas,b=Object(s.c)((function(n){return n.taiKhoanNganHang})).loading,T=null===u||void 0===u?void 0:u[U],f=Object(S.useForm)(),m=Object(r.a)(f,1)[0];d.a.useEffect((function(){T?m.setFieldsValue(T):(m.resetFields(),m.setFieldsValue({nguoiThanhToan:A.tinh.id,loaiThanhToan:K.b.chuyenKhoan.id,ngay:g()()}))}),[T]);var v=Object(s.c)((function(n){return n.account})).accountData,p=null===v||void 0===v||null===(n=v.paths)||void 0===n||null===(a=n.bcktTienMat)||void 0===a?void 0:a.edit,O=d.a.useMemo((function(){var n;return!!(null===c||void 0===c||null===(n=c[U])||void 0===n?void 0:n.open)}),[c[U]]);function N(){return(N=Object(i.a)(o.a.mark((function n(){var a,t,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(p){n.next=2;break}return n.abrupt("return",Object(M.j)());case 2:if(!b){n.next=4;break}return n.abrupt("return",null);case 4:return n.next=6,m.validateFields();case 6:if(a=n.sent,t=a.ngay,i=Object(h.convertMomentToString)(j.getInputFields(),a),null===T||void 0===T?void 0:T.id){n.next=15;break}return i.id=t.valueOf().toString(),n.next=13,e(Object(w.g)({currentData:i,validatedValues:i}));case 13:n.next=17;break;case 15:return n.next=17,e(Object(w.g)({currentData:Object(l.a)(Object(l.a)({},T),i),validatedValues:i}));case 17:e(Object(h.closeModal)({modalId:U}));case 18:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(k.b)(h.MyModal,{title:Object(k.b)("div",{children:"BC Ti\u1ec1n M\u1eb7t"}),visible:O,onClose:function(){e(Object(h.closeModal)({modalId:U}))},onOkModal:function(){return N.apply(this,arguments)},formProps:{labelCol:{span:6},wrapperCol:{span:18}},width:1200,modalId:U,datas:u,children:Object(k.c)(h.MyForm,{form:m,labelCol:{span:6},wrapperCol:{span:18},options:Object(h.getFormItemFields)(j.getInputFields()),children:[Object(k.b)(x.a,{isAddNew:!0,isTrangQuanLy:!0,onAfterSelect:function(n){m.setFieldsValue({taiKhoanNganHangId:n})}}),Object(k.b)(F,{name:"loaiThanhToan"}),Object(k.b)(J,{name:"nguoiThanhToan"})]})})},W=e(720),X=e(466),Y=m.c.bcktTienMatModal,Z=Object(u.memo)((function(n){var a=n.pageData,e=Object(s.c)((function(n){return n.hideColumns})),t=null===e||void 0===e?void 0:e[Y||""],o=d.a.useMemo((function(){var n=[h.constants.stt,j.daThanhToan,j.ngay],a=[p.a.tenTaiKhoanNganHang,j.noiDungThanhToan,V.tenNguoiThanhToan,X.a.tenLoaiThanhToan,h.constants.editRow];return[{id:0,colSpan:1+n.reduce((function(n,a){var e=a.id;return n+((null===t||void 0===t?void 0:t[e])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-success",render:function(n){return Object(h.formatNumber)(n)}},{id:2,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(n){return Object(h.formatNumber)(n)}},{id:4,colSpan:2+a.reduce((function(n,a){var e=a.id;return n+((null===t||void 0===t?void 0:t[e])?0:1)}),0)}]}),[t]),i=d.a.useMemo((function(){return a.reduce((function(n,a){var e=n.Thu+(a.Thu||0),t=n.Chi+(a.Chi||0);return Object(l.a)(Object(l.a)({},n),{},{Thu:e,Chi:t})}),{tong:"T\u1ed5ng ti\u1ec1n",Thu:0,Chi:0})}),[a]),r=d.a.useMemo((function(){return["tong","Thu","Chi"].map((function(n,a){return Object(c.a)({},a,i[n])}))}),[i]);return Object(k.b)(W.a,{columns:o,dataSource:r})})),$=e(59),_=e(65),nn=function(n){var a,e=n.dateTimePicker,t=Object(s.b)(),o=Object(s.c)((function(n){return n.bcktTienMat})).bcktTienMats,i=(Object(s.c)((function(n){return n.account})).isDev,d.a.useMemo((function(){return o?Object.values(o).reduce((function(n,a){var e=(null===n||void 0===n?void 0:n.soTienChuaThanhToan)||0,t=(null===a||void 0===a?void 0:a.daThanhToan)?0:a.Chi||0,o=(null===n||void 0===n?void 0:n.soTienDaThanhToan)||0,i=(null===a||void 0===a?void 0:a.daThanhToan)&&a.Chi||0;return Object(l.a)(Object(l.a)({},n),{},{soTienChuaThanhToan:e+t,soTienDaThanhToan:o+i})}),{}):{}}),[o])),c=i||{},r=c.soTienChuaThanhToan,u=void 0===r?0:r,b=c.soTienDaThanhToan,g=void 0===b?0:b;return Object(k.b)(k.a,{children:Object(k.b)(f.a,{header:Object(k.b)("div",{className:"font-weight-bold",children:Object(k.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(k.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(k.b)("div",{children:(null===e||void 0===e||null===(a=e.getMonthRender)||void 0===a?void 0:a.call(e))||null}),Object(k.c)("div",{className:"font-weight-bold mt-1",children:["S\u1ed1 ti\u1ec1n \u0111\xe3 thanh to\xe1n: ",Object(h.formatNumber)(g)]}),Object(k.c)("div",{className:"font-weight-bold mt-1",children:["S\u1ed1 ti\u1ec1n ch\u01b0a thanh to\xe1n: ",Object(h.formatNumber)(u)]})]}),footer:Object(k.b)("div",{children:Object(k.b)($.a,{icon:Object(k.b)(_.a,{}),onClick:function(){t(Object(h.toggleAside)({tagPageId:m.c.bcktTienMatModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},an=m.c.bcktTienMatModal;a.default=function(){var n,a,e=Object(s.b)(),t=Object(h.useDatePicker)({defaultTime:g()()}),u=Object(r.a)(t,2),b=u[0],m=u[1],p=Object(s.c)((function(n){return n.bcktTienMat})),O=p.tabsData,S=p.loading,M=p.bcktTienMats,x=p.pageSize,I=Object(s.c)((function(n){var a;return null===(a=n.tagsPage)||void 0===a?void 0:a[an]})),F=Object(s.c)((function(n){return n.account})).accountData,K=null===F||void 0===F||null===(n=F.paths)||void 0===n||null===(a=n.bcktTienMat)||void 0===a?void 0:a.edit,H=Object(C.a)({Instance:y.a,onPending:w.f,addSelectedId:w.a,onActive:w.c,onDelete:w.d,isEdit:K});var D=d.a.useMemo((function(){return M?Object.values(M).reduce((function(n,a){var e=(null===a||void 0===a?void 0:a.taiKhoanNganHang)||{},t=e.soTaiKhoan,o=e.nganHang;return Object(l.a)(Object(l.a)({},n),{},Object(c.a)({},a.id,Object(l.a)(Object(l.a)({},a),{},{soTaiKhoan:t,nganHang:o})))}),{}):{}}),[M]);return d.a.useEffect((function(){e(Object(w.e)({selectedTime:b}))}),[b]),Object(k.c)("div",{className:"bcktTienMat-page",css:v.a,children:[Object(k.b)(f.b,{className:"tabs",options:O,activeKey:"all",onTabClick:function(n){if("add"===n){var a=new y.a;e(Object(h.openModal)({modalId:an,data:a.initData}))}else"aside"===n?e(Object(h.toggleAside)({tagPageId:an})):"taiExcel"===n&&e(Object(h.downloadExcel)({tableId:an,constants:j,fileSheet:"bcktTienMatSheet",fileName:"bcktTienMatName"}))}}),Object(k.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[I&&Object(k.b)(nn,{dateTimePicker:m}),Object(k.b)("div",{className:"aside-main",children:Object(k.b)(N.a,{isEdit:K,pagination:!0,isSelection:!0,constants:j,actions:H,datas:D,loading:S,modalId:an,pageSize:x,onChange:function(n){e(Object(w.h)(n.pageSize))},onRow:function(n){return{onClick:function(){var a=Object(i.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log(n);case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()}},onCallbackDataSource:function(n){return Object(T.orderBy)(n,"ngayTao")},summary:function(n){return Object(k.b)(Z,{pageData:n})},rowClassName:function(n){return(null===n||void 0===n?void 0:n.daThanhToan)?"":"bg-gold-light"}})})]}),Object(k.b)(G,{})]})}},715:function(n,a,e){"use strict";e.d(a,"a",(function(){return i}));var t=e(0),o=(e(327),e(161)),i=(e(79),e(214),e(126),e(235),e(326),e(360),function(n,a){var e=arguments;if(null==a||!o.d.call(a,"css"))return t.createElement.apply(void 0,e);var i=e.length,c=new Array(i);c[0]=o.a,c[1]=Object(o.c)(n,a);for(var l=2;l<i;l++)c[l]=e[l];return t.createElement.apply(null,c)})},716:function(n,a,e){"use strict";function t(n,a){if(null==n)return{};var e,t,o=function(n,a){if(null==n)return{};var e,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)e=i[t],a.indexOf(e)>=0||(o[e]=n[e]);return o}(n,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)e=i[t],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}e.d(a,"a",(function(){return t}))},719:function(n,a,e){"use strict";e.d(a,"a",(function(){return t}));var t={appSettings:"/app-settings",khachHang:"/app-settings/khach-hang",nhaCungCap:"/app-settings/nha-cung-cap",matHang:"/app-settings/mat-hang",nhomMatHang:"/quan-ly-mat-hang/nhom-mat-hang",donViTinh:"/app-settings/don-vi-tinh",taiKhoanNganHang:"/app-settings/tai-khoan-ngan-hang"}},720:function(n,a,e){"use strict";e(0);var t=e(475),o=e(25),i=t.a.Summary,c=i.Row,l=i.Cell;a.a=function(n){var a,e=n.columns,t=n.dataSource;return Object(o.b)(c,{children:null===e||void 0===e||null===(a=e.map)||void 0===a?void 0:a.call(e,(function(n,a){var e=null===n||void 0===n?void 0:n.id,i=(null===n||void 0===n?void 0:n.colSpan)||0,c=(null===n||void 0===n?void 0:n.cellClassName)||"",r=(null===n||void 0===n?void 0:n.valueStyle)||{},u=(null===n||void 0===n?void 0:n.valueClassName)||"",d=null===n||void 0===n?void 0:n.render,s=(null===t||void 0===t?void 0:t[a])||{},h=(null===s||void 0===s?void 0:s[e])||"";return d&&(h=d(h,s,a)),Object(o.b)(l,{index:a,colSpan:i,className:c,children:Object(o.b)("div",{style:r,className:u,children:h})},e)}))})}},729:function(n,a,e){"use strict";var t=e(5),o=e.n(t),i=e(10),c=e(0),l=e.n(c),r=e(7),u=e(59),d=e(44),s=e(281),h=e(56),b=e(370),g=e(713),T=e(329),f=e(64),m=e(362),v=e(35),p=e(719),O=e(25),j=f.c.taiKhoanNganHangModal;a.a=function(n){var a,e,t=n.onAfterAddFinish,c=Object(h.b)(),f=Object(d.u)(),N=Object(h.c)((function(n){return n.form})),y=N.modal,C=N.datas,w=Object(h.c)((function(n){return n.account})).accountData,S=null===w||void 0===w||null===(a=w.paths)||void 0===a||null===(e=a.taiKhoanNganHang)||void 0===e?void 0:e.edit,M=Object(g.a)({Instance:T.a,onPending:m.e,addSelectedId:m.a,isEdit:S}),x=l.a.useMemo((function(){var n;return!!(null===y||void 0===y||null===(n=y[j])||void 0===n?void 0:n.open)}),[y[j]]);function I(){return(I=Object(i.a)(o.a.mark((function n(a,e){var i,l,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(S){n.next=2;break}return n.abrupt("return",Object(v.j)());case 2:if(i=!0,l=e,!e){n.next=18;break}if(null===a||void 0===a?void 0:a.id){n.next=13;break}return n.next=8,c(M.onAddAsync({validatedValues:l}));case 8:i=n.sent,null===t||void 0===t||t(null===(u=i)||void 0===u?void 0:u.id),i=Boolean(i),n.next=18;break;case 13:return n.t0=Boolean,n.next=16,c(M.onUpdateAsync({currentData:a,validatedValues:l}));case 16:n.t1=n.sent,i=(0,n.t0)(n.t1);case 18:i&&c(Object(r.closeModal)({modalId:j}));case 19:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(O.b)(r.MyModal,{form:!0,title:Object(O.c)("div",{children:["T\xe0i Kho\u1ea3n Ng\xe2n H\xe0ng ",Object(O.b)(u.a,{icon:Object(O.b)(s.a,{}),onClick:function(){f(p.a.taiKhoanNganHang)},children:"Trang qu\u1ea3n l\xfd"})]}),visible:x,onClose:function(){c(Object(r.closeModal)({modalId:j}))},onOkModal:function(n,a){return I.apply(this,arguments)},formOptions:Object(r.getFormItemFields)(b.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:j,datas:C})}},736:function(n,a,e){"use strict";var t=e(0),o=e.n(t),i=e(59),c=e(115),l=e(44),r=e(7),u=e(56),d=e(362),s=e(729),h=e(55),b=e(281),g=e(64),T=e(719),f=e(25);a.a=function(n){var a,e,t=n.form,m=n.name,v=n.mode,p=n.label,O=n.labelCol,j=n.wrapperCol,N=n.rules,y=n.isAddNew,C=n.isTrangQuanLy,w=n.onAfterSelect,S=n.disabled,M=Object(u.b)(),x=Object(l.u)(),I=Object(u.c)((function(n){return n.taiKhoanNganHang})).taiKhoanNganHangs,k=Object(u.c)((function(n){return n.account})).accountData,F=null===k||void 0===k||null===(a=k.paths)||void 0===a||null===(e=a.taiKhoanNganHang)||void 0===e?void 0:e.edit,K=o.a.useMemo((function(){return Object.values(I).filter((function(n){return n.active})).map((function(n){var a=n.maTaiKhoan?"".concat(n.maTaiKhoan," - "):"",e="".concat(a," - ").concat(n.hoTen," - ").concat(n.tenNguoiNhan||""," - ").concat(n.soTaiKhoan," - ").concat(n.nganHang);return{value:n.id,label:e}}))}),[I]);var H=Object(f.b)(r.MyFormItem,{label:p||"TKNH",type:"select",name:m||"taiKhoanNganHangId",innerProps:{mode:v,showSearch:!0,allowClear:!0,filterOption:r.onSelectSearch,onChange:function(n){M(Object(d.a)(n)),null===w||void 0===w||w(n)},disabled:S,notFoundContent:F?Object(f.c)("div",{children:[y?Object(f.b)(i.a,{icon:Object(f.b)(h.a,{}),type:"primary",onClick:function(){return M(Object(r.openModal)({modalId:g.c.taiKhoanNganHangModal}))},children:"Th\xeam"}):null,C?Object(f.b)(i.a,{icon:Object(f.b)(b.a,{}),type:"dashed",onClick:function(){x(T.a.taiKhoanNganHang)},children:"Q. l\xfd"}):null]}):Object(f.b)(c.a,{})},options:K,rules:N||[]});return t?Object(f.c)(f.a,{children:[Object(f.b)(r.MyForm,{form:t,labelCol:O||{span:8},wrapperCol:j||{span:16},children:H}),F&&Object(f.b)(s.a,{onAfterAddFinish:function(n){t.setFieldsValue({taiKhoanNganHangId:n})}})]}):Object(f.c)(f.a,{children:[H,F&&Object(f.b)(s.a,{onAfterAddFinish:function(n){return null===w||void 0===w?void 0:w(n)}})]})}}}]);