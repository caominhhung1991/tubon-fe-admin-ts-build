(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[7],{663:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var a=e(12),i=e(35),o=e(5),r=e.n(o),c=e(9),s=e(21);function u(n){var t=n.Instance,e=n.onPending,o=n.addSelectedId,u=n.onDelete,l=n.onActive;return{onAddAsync:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var a=Object(c.a)(r.a.mark((function a(i){var c,u,l,d;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=n.validatedValues,i(e(!0)),u=new t,l=u.pathDatas,a.next=6,Object(s.a)(l,c);case 6:return d=a.sent,o&&i(null===o||void 0===o?void 0:o(null===d||void 0===d?void 0:d.id)),i(e(!1)),a.abrupt("return",d);case 10:case"end":return a.stop()}}),a)})));return function(n){return a.apply(this,arguments)}}()},onUpdateAsync:function(n){return function(){var a=Object(c.a)(r.a.mark((function a(o){var c,u,l,d,h;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=n.currentData,u=n.validatedValues,l=c.id,o(e(!0)),d=new t,h=[].concat(Object(i.a)(d.pathDatas),[l]),a.next=7,Object(s.h)(h,u);case 7:return o(e(!1)),a.abrupt("return",!0);case 9:case"end":return a.stop()}}),a)})));return function(n){return a.apply(this,arguments)}}()},onActiveAsync:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var a=Object(c.a)(r.a.mark((function a(o){var c,u,d,h;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=n.id,u=n.active,o(e(!0)),d=new t,h=[].concat(Object(i.a)(d.pathDatas),[c]),a.next=6,Object(s.h)(h,{active:u});case 6:l&&o(l(c,u)),o(e(!1));case 8:case"end":return a.stop()}}),a)})));return function(n){return a.apply(this,arguments)}}()},onDeleteAsync:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var i=Object(c.a)(r.a.mark((function i(o){var c,l,d,h,g,b;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return l=n.id,o(e(!0)),d=new t,h=d.getPathDatas(l),g=d.getPathDeleted(l),c={},Object(a.a)(c,h,null),Object(a.a)(c,g,n),b=c,i.next=8,Object(s.h)(null,b);case 8:return u&&o(u(n)),o(e(!1)),i.abrupt("return",!0);case 11:case"end":return i.stop()}}),i)})));return function(n){return i.apply(this,arguments)}}()}}}},664:function(n,t,e){"use strict";var a=e(44),i=e(14),o=e(665),r=e(0),c=e.n(r),s=e(54),u=e(10),l=e(330),d=e(105),h=e(15),g=["modalId","constants","actions","datas","loading","isSelection","form","rowSelection","summary","isEdit","onBlur","inputOptions"];t.a=function(n){var t=n.modalId,e=n.constants,r=n.actions,b=n.datas,m=n.loading,f=n.isSelection,p=n.form,O=n.rowSelection,v=n.summary,j=n.isEdit,C=n.onBlur,N=n.inputOptions,w=Object(o.a)(n,g),y=Object(s.b)(),x=Object(s.c)((function(n){return n.table})).selectedRowKeys,M=Object(s.c)((function(n){return n.hideColumns})),T=null===M||void 0===M?void 0:M[t||""],H=c.a.useMemo((function(){var n={};return f?n.rowSelection=Object(i.a)({selectedRowKeys:x[t||""]||[],onChange:function(n,e){y(Object(l.d)({tableId:t,selectedRowKeys:n,selectedRows:e}))}},O):delete n.rowSelection,n}),[f,x]);function I(n,t){if(!j)return Object(d.e)();var e=Object(i.a)(Object(i.a)({},n),{},{active:t});y(null===r||void 0===r?void 0:r.onActiveAsync(e))}function D(n){if(!j)return Object(d.e)();(null===r||void 0===r?void 0:r.onDeleteAsync)&&y(r.onDeleteAsync(n))}var S=Object(u.useSearchText)(),F=Object(a.a)(S,3),A=F[0],B=F[1],k=F[2],L=c.a.useMemo((function(){var n=Object(u.getTableColumns)(e,{onActiveItem:I,onDeleteItem:D,searchText:A,searchInput:k,setSearchText:B,modalId:t,isEdit:j,constants:e,form:p,onBlur:C,inputOptions:N});return T&&(n=n.filter((function(n){return!(null===T||void 0===T?void 0:T[n.id])}))),n}),[A,T,e,N]),R=c.a.useMemo((function(){var t=Object.values(b||{});return(null===n||void 0===n?void 0:n.onCallbackDataSource)&&(t=n.onCallbackDataSource(t)),t}),[b]);return Object(h.b)("div",{className:"table",children:Object(h.b)(u.MyTable,Object(i.a)(Object(i.a)(Object(i.a)({},H),w),{},{rowKey:"id",height:"100%",loading:m,columns:L,dataSource:R,summary:v||null}))})}},670:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var a=e(33),i=e(10),o={tenNhomMatHang:{id:"tenNhomMatHang",name:"T\xean nh\xf3m",width:120,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(i.sortByText)("tenNhomMatHang"),form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},getTableColumns:function(){return[a.a.stt,this.tenNhomMatHang,a.a.active,a.a.editRow]},getInputFields:function(){return[this.tenNhomMatHang]},getExcelFields:function(){return[this.tenNhomMatHang,a.a.active]},getFormViewFields:function(){var n=[this.tenNhomMatHang];return Object(i.getFormItemViewFields)(n)}}},677:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var a=e(14),i=e(33),o=e(10),r=e(678),c={chuaNhan:{id:"chuaNhan",name:"Ch\u01b0a nh\u1eadn"},daNhan:{id:"daNhan",name:"\u0110\xe3 nh\u1eadn"},daHuy:{id:"daHuy",name:"\u0110\xe3 h\u1ee7y"}},s={id:{id:"id",name:"M\xe3 HD",width:90,className:"text-small font-weight-bold",isSearch:!0,form:{type:"input",innerProps:{disabled:!0}}},donMuaHangId:{id:"donMuaHangId",name:"M\xe3 \u0110H",width:90,className:"text-small",isSearch:!0,align:"center"},ngayDat:{id:"ngayDat",name:"Ng\xe0y \u0111\u1eb7t",width:100,className:"text-small font-weight-bold",isSearch:!0,form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayNhan:{id:"ngayNhan",name:"Ng\xe0y nh\u1eadn",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(o.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},tongTienDonHang:{id:"tongTienDonHang",name:"T\u1ed5ng ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"center",render:o.numberRender},trangThai:{id:"trangThai",name:"Tr\u1ea1ng th\xe1i",width:100,isSearch:!0,className:"text-small font-weight-bold",align:"center",render:function(n){var t;return(null===c||void 0===c||null===(t=c[n])||void 0===t?void 0:t.name)||""}},getTableColumns:function(){return[Object(a.a)(Object(a.a)({},i.a.stt),{},{fixed:!1}),this.id,r.a.tenNhaCungCap,this.tongTienDonHang,this.ngayDat,this.ngayNhan,this.trangThai,i.a.editRow]},getInputFields:function(){return[this.id,this.ngayNhan]},getExcelFields:function(){return[this.id,this.ngayDat,this.ngayNhan,i.a.active]},getFormViewFields:function(){var n=[this.id,this.ngayDat,this.ngayNhan];return Object(o.getFormItemViewFields)(n)}}},678:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var a=e(14),i=e(33),o=e(10),r=e(670),c={tenNhaCungCap:{id:"tenNhaCungCap",name:"T\xean NCC",width:120,isSearch:!0,className:"text-small font-weight-bold",sorter:Object(o.sortByText)("tenNhaCungCap"),form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},giaBan:{id:"giaBan",name:"Gi\xe1 b\xe1n",width:100,className:"text-small font-weight-bold",sorter:Object(o.sortByText)("giaBan"),form:{type:"input-number-format"}},nganhNgheKinhDoanh:{id:"nganhNgheKinhDoanh",name:"Ng\xe0nh ngh\u1ec1 KD",width:130,className:"text-small ",isSearch:!0,form:{type:"input"}},diaChiNhaCungCap:{id:"diaChiNhaCungCap",name:"\u0110\u1ecba ch\u1ec9",width:140,className:"text-small ",isSearch:!0,form:{type:"text-area"}},nguoiLienHe:{id:"nguoiLienHe",name:"Ng\u01b0\u1eddi li\xean h\u1ec7",width:100,className:"text-small ",form:{type:"input"}},soDienThoai:{id:"soDienThoai",name:"S\u1ed1 \u0110T",width:100,className:"text-small ",align:"center",form:{type:"input"}},getTableColumns:function(){return[i.a.stt,this.tenNhaCungCap,Object(a.a)(Object(a.a)({},r.a.tenNhomMatHang),{},{width:170}),this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai,i.a.active,i.a.editRow]},getInputFields:function(){return[this.tenNhaCungCap,this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai]},getExcelFields:function(){return[this.tenNhaCungCap,this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai,i.a.active]},getFormViewFields:function(){var n=[this.tenNhaCungCap,this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai];return Object(o.getFormItemViewFields)(n)}}},679:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var a={appSettings:"/app-settings",nhaCungCap:"/app-settings/nha-cung-cap",matHang:"/app-settings/mat-hang",nhomMatHang:"/app-settings/nhom-mat-hang",donViTinh:"/app-settings/don-vi-tinh"}},687:function(n,t,e){"use strict";e.d(t,"b",(function(){return l})),e.d(t,"a",(function(){return d}));var a=e(14),i=e(33),o=e(10),r=e(670),c=e(678),s=e(217),u=e(677),l={tenMatHang:{id:"tenMatHang",name:"T\xean MH",width:120,className:"text-small font-weight-bold",isSearch:!0,fixed:!0,sorter:Object(o.sortByText)("tenMatHang"),form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},giaBanChung:{id:"giaBanChung",name:"Gi\xe1 b\xe1n chung",width:120,className:"text-small font-weight-bold",align:"center",form:{type:"input-number-format"},render:o.numberRender},giaNhapNCC:{id:"giaNhapNCC",name:"Gi\xe1 nh\u1eadp NCC",width:100,className:"text-small font-weight-bold",align:"right",render:o.numberRender},nhaCungCapId:{id:"nhaCungCapId",name:"Nh\xe0 CC"},nhomMatHangId:{id:"nhomMatHangId",name:"Nh\xf3m MH"},getTableColumns:function(){return[i.a.stt,this.tenMatHang,Object(a.a)(Object(a.a)({},s.a.tenDonViTinh),{},{align:"center"}),Object(a.a)(Object(a.a)({},r.a.tenNhomMatHang),{},{align:"center"}),Object(a.a)(Object(a.a)({},c.a.tenNhaCungCap),{},{align:"center"}),this.giaBanChung,i.a.active,i.a.editRow]},getInputFields:function(){return[this.tenMatHang,this.giaBanChung]},getExcelFields:function(){return[i.a.active]}},d={getTableColumns:function(){return[Object(a.a)(Object(a.a)({},i.a.stt),{},{fixed:!1}),Object(a.a)(Object(a.a)({},c.a.tenNhaCungCap),{},{fixed:!1}),l.giaNhapNCC,u.a.ngayNhan,u.a.donMuaHangId]}}},696:function(n,t,e){"use strict";e.d(t,"a",(function(){return h})),e.d(t,"b",(function(){return g})),e.d(t,"c",(function(){return b}));var a=e(14),i=(e(0),e(33)),o=e(426),r=e(687),c=e(670),s=e(217),u=e(10),l=e(677),d=e(15),h={giaThamKhao:{id:"giaThamKhao",name:"Gi\xe1 TK",width:100,className:"text-small font-weight-bold",align:"right"},giaNhapNCC:{id:"giaNhapNCC",name:"Gi\xe1 nh\u1eadp",width:100,className:"text-small font-weight-bold",align:"right",form:{type:"input-number-format"},render:u.numberRender},soLuongDat:{id:"soLuongDat",name:"SL \u0111\u1eb7t",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input-number-format"}},soLuongNhan:{id:"soLuongNhan",name:"SL nh\u1eadn",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input-number-format"}},thanhTien:{id:"thanhTien",name:"Th\xe0nh ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:u.numberRender},getTableColumns:function(){return[Object(a.a)(Object(a.a)({},i.a.stt),{},{fixed:!1}),Object(a.a)(Object(a.a)({},r.b.tenMatHang),{},{width:120,fixed:!1}),Object(a.a)(Object(a.a)({},c.a.tenNhomMatHang),{},{align:"center"}),Object(a.a)(Object(a.a)({},this.soLuongDat),{},{render:function(n,t,e,a){var i=a.onBlur;return Object(d.b)(o.a,{value:n||"",size:"small",name:"".concat(t.id,".soLuongDat"),onBlur:i,min:0})}}),Object(a.a)(Object(a.a)({},s.a.tenDonViTinh),{},{align:"center"}),this.giaThamKhao,this.thanhTien]},getInputFields:function(){return[]},getExcelFields:function(){return[]}},g={getTableColumns:function(){return[Object(a.a)(Object(a.a)({},i.a.stt),{},{fixed:!1}),Object(a.a)(Object(a.a)({},r.b.tenMatHang),{},{width:150,fixed:!1}),Object(a.a)(Object(a.a)({},c.a.tenNhomMatHang),{},{align:"center"}),Object(a.a)({},h.soLuongDat),Object(a.a)(Object(a.a)({},h.soLuongNhan),{},{render:function(n,t,e,a){var i=a.onBlur,r=a.isEdit,c=a.inputOptions,s=null===c||void 0===c?void 0:c.isNhapSLNhan;return r&&s?Object(d.b)(o.a,{value:n||"",size:"small",name:"".concat(t.id,".soLuongNhan"),onBlur:i,min:0}):Object(u.formatNumber)(n)}}),Object(a.a)(Object(a.a)({},s.a.tenDonViTinh),{},{align:"center",isSearch:!1,width:90}),Object(a.a)(Object(a.a)({},h.giaNhapNCC),{},{render:function(n,t,e,a){var i=a.onBlur;return a.isEdit?Object(d.b)(o.a,{value:n||"",size:"small",name:"".concat(t.id,".giaNhapNCC"),onBlur:i,min:0}):Object(u.formatNumber)(n)}}),h.thanhTien]}},b={getTableColumns:function(){return[Object(a.a)(Object(a.a)({},i.a.stt),{},{fixed:!1}),Object(a.a)(Object(a.a)({},r.b.tenMatHang),{},{width:150,fixed:!1}),h.giaNhapNCC,Object(a.a)(Object(a.a)({},s.a.tenDonViTinh),{},{align:"center",width:90}),Object(a.a)(Object(a.a)({},c.a.tenNhomMatHang),{},{align:"center"}),l.a.ngayNhan,l.a.donMuaHangId]}}},705:function(n,t,e){"use strict";var a=e(5),i=e.n(a),o=e(9),r=e(0),c=e.n(r),s=e(10),u=e(54),l=e(215),d=e(670),h=e(663),g=e(350),b=e(33),m=e(336),f=e(15),p=b.c.nhomMatHangModal;t.a=function(n){var t=n.onAfterAddFinish,e=Object(h.a)({Instance:g.a,onPending:m.f,addSelectedId:m.a}),a=Object(u.b)(),r=Object(u.c)((function(n){return n.form})),b=r.modal,O=r.datas,v=c.a.useMemo((function(){var n;return!!(null===b||void 0===b||null===(n=b[p])||void 0===n?void 0:n.open)}),[b[p]]);function j(){return(j=Object(o.a)(i.a.mark((function n(o,r){var c,u,h;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=!0,u=Object(s.convertMomentToString)(d.a.getInputFields(),r),!r){n.next=16;break}if(null===o||void 0===o?void 0:o.id){n.next=11;break}return n.next=6,a(e.onAddAsync({validatedValues:u}));case 6:c=n.sent,null===t||void 0===t||t(null===(h=c)||void 0===h?void 0:h.id),c=Boolean(c),n.next=16;break;case 11:return n.t0=Boolean,n.next=14,a(e.onUpdateAsync({currentData:o,validatedValues:u}));case 14:n.t1=n.sent,c=(0,n.t0)(n.t1);case 16:c&&a(l.a({modalId:p}));case 17:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(f.b)(s.MyModal,{form:!0,title:"Nh\xf3m M\u0103t H\xe0ng",visible:v,onClose:function(){a(l.a({modalId:p}))},onOkModal:function(n,t){return j.apply(this,arguments)},formOptions:Object(s.getFormItemFields)(d.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:p,datas:O})}},710:function(n,t,e){"use strict";var a=e(0),i=e.n(a),o=e(57),r=e(108),c=e(45),s=e(10),u=e(54),l=e(336),d=e(705),h=e(91),g=e(263),b=e(215),m=e(33),f=e(679),p=e(15);t.a=function(n){var t,e,a=n.form,O=n.name,v=n.mode,j=n.label,C=n.labelCol,N=n.wrapperCol,w=n.rules,y=n.isAddNew,x=n.isTrangQuanLy,M=n.onAfterSelect,T=Object(u.b)(),H=Object(c.u)(),I=Object(u.c)((function(n){return n.nhomMatHang})).nhomMatHangs,D=Object(u.c)((function(n){return n.account})).accountData,S=i.a.useMemo((function(){return Object.values(I).filter((function(n){return n.active})).map((function(n){var t="".concat(n.tenNhomMatHang);return{value:n.id,label:t}}))}),[I]),F=null===D||void 0===D||null===(t=D.paths)||void 0===t||null===(e=t.nhomMatHang)||void 0===e?void 0:e.edit;var A=Object(p.b)(s.MyFormItem,{label:j||"Nh\xf3m m\u1eb7t h\xe0ng",type:"select",name:O||"nhomMatHangId",innerProps:{mode:v,showSearch:!0,allowClear:!0,filterOption:s.onSelectSearch,onChange:function(n){T(Object(l.a)(n)),null===M||void 0===M||M(n)},notFoundContent:F?Object(p.c)("div",{children:[y?Object(p.b)(o.a,{icon:Object(p.b)(h.a,{}),type:"primary",onClick:function(){return T(Object(b.c)({modalId:m.c.nhomMatHangModal}))},children:"Th\xeam"}):null,x?Object(p.b)(o.a,{icon:Object(p.b)(g.a,{}),type:"dashed",onClick:function(){H(f.a.nhomMatHang)},children:"Q. l\xfd"}):null]}):Object(p.b)(r.a,{})},options:S,rules:w||[]});return a?Object(p.c)(p.a,{children:[Object(p.b)(s.MyForm,{form:a,labelCol:C||{span:8},wrapperCol:N||{span:16},children:A}),F&&Object(p.b)(d.a,{onAfterAddFinish:function(n){a.setFieldsValue({nhomMatHangId:n})}})]}):Object(p.c)(p.a,{children:[A,F&&Object(p.b)(d.a,{})]})}},724:function(n,t,e){"use strict";var a=e(5),i=e.n(a),o=e(9),r=e(0),c=e.n(r),s=e(10),u=e(54),l=e(215),d=e(678),h=e(663),g=e(307),b=e(33),m=e(220),f=e(710),p=e(336),O=e(15),v=b.c.nhaCungCapModal;t.a=function(n){var t=n.onAfterAddFinish,e=Object(h.a)({Instance:g.a,onPending:m.e,addSelectedId:m.a}),a=Object(u.b)(),r=Object(u.c)((function(n){return n.form})),b=r.modal,j=r.datas,C=c.a.useMemo((function(){var n;return!!(null===b||void 0===b||null===(n=b[v])||void 0===n?void 0:n.open)}),[b[v]]);function N(){return(N=Object(o.a)(i.a.mark((function n(o,r){var c,s,u;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=!0,n.next=3,a(Object(p.d)(r));case 3:if(s=n.sent,!r){n.next=18;break}if(null===o||void 0===o?void 0:o.id){n.next=13;break}return n.next=8,a(e.onAddAsync({validatedValues:s}));case 8:c=n.sent,null===t||void 0===t||t(null===(u=c)||void 0===u?void 0:u.id),c=Boolean(c),n.next=18;break;case 13:return n.t0=Boolean,n.next=16,a(e.onUpdateAsync({currentData:o,validatedValues:s}));case 16:n.t1=n.sent,c=(0,n.t0)(n.t1);case 18:c&&a(l.a({modalId:v}));case 19:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(O.b)(s.MyModal,{form:!0,title:"Nh\xe0 Cung C\u1ea5p",visible:C,onClose:function(){a(l.a({modalId:v}))},onOkModal:function(n,t){return N.apply(this,arguments)},formOptions:Object(s.getFormItemFields)(d.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:v,datas:j,children:Object(O.b)(f.a,{mode:"multiple",isAddNew:!0,isTrangQuanLy:!0})})}},897:function(n,t,e){"use strict";e.r(t);e(0);var a=e(54),i=e(666),o=e(215),r=e(33),c=e(667),s=e(678),u=e(664),l=e(724),d=e(307),h=e(663),g=e(220),b=e(330),m=e(696),f=e(15),p=r.c.nhaCungCapModal;t.default=function(){var n,t,e=Object(a.b)(),r=Object(a.c)((function(n){return n.nhaCungCap})),O=r.tabsData,v=r.loading,j=r.nhaCungCaps,C=Object(h.a)({Instance:d.a,onPending:g.e,addSelectedId:g.a}),N=Object(a.c)((function(n){return n.account})).accountData,w=null===N||void 0===N||null===(n=N.paths)||void 0===n||null===(t=n.nhaCungCap)||void 0===t?void 0:t.edit;return Object(f.c)("div",{className:"nhaCungCap-page",css:c.a,children:[Object(f.b)(i.b,{className:"tabs",options:O,activeKey:"all",onTabClick:function(n){if("add"===n){var t=new d.a;w&&e(o.c({modalId:p,data:t.initData}))}else"taiExcel"===n&&e(Object(b.b)({tableId:p,constants:s.a,fileSheet:"nhaCungCap",fileName:"nhaCungCap"}))}}),Object(f.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(f.b)("div",{className:"aside-main",children:Object(f.b)(u.a,{pagination:!0,scroll:{x:1e3},constants:s.a,actions:C,datas:j,loading:v,modalId:p,isEdit:w,expandable:{expandedRowRender:function(n){return Object(f.b)("div",{children:Object(f.b)(u.a,{constants:m.c,datas:n.matHangNCCs})})}},rowSelection:{onChange:function(n,t){e(Object(b.d)({tableId:p,selectedRowKeys:n,selectedRows:t}))}},onRow:function(n){return{onClick:function(){e(o.c({modalId:p,data:n}))}}}})})}),Object(f.b)(l.a,{})]})}}}]);