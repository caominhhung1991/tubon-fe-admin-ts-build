(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[19],{679:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(12),c=n(5),i=n.n(c),r=n(33),o=n(8),u=n(18),s=n(120);function l(e){var t=e.Instance,n=e.onPending,c=e.addSelectedId,l=e.onDelete,d=e.onActive;return{onAddAsync:function(e){return function(){var a=Object(o.a)(i.a.mark((function a(o){var s,l,d,b,h;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=e.validatedValues,l=s.otherPath,o(n(!0)),d=new t,b=l?[].concat(Object(r.a)(d.pathDatas),Object(r.a)(l)):d.pathDatas,a.next=7,Object(u.a)(b,s);case 7:return h=a.sent,c&&o(null===c||void 0===c?void 0:c(null===h||void 0===h?void 0:h.id)),o(n(!1)),a.abrupt("return",h);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},onUpdateAsync:function(e){return function(){var a=Object(o.a)(i.a.mark((function a(c){var o,l,d,b,h,m;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=e.currentData,l=e.validatedValues,d=o.id,b=o.otherPath,d){a.next=4;break}return a.abrupt("return",s.b.error("Ch\u01b0a c\xf3 id"));case 4:return c(n(!0)),h=new t,m=b?[].concat(Object(r.a)(h.pathDatas),Object(r.a)(b),[d]):[].concat(Object(r.a)(h.pathDatas),[d]),a.next=9,Object(u.h)(m,l);case 9:return c(n(!1)),a.abrupt("return",!0);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},onActiveAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var c=Object(o.a)(i.a.mark((function c(o){var s,l,b,h,m,f,g;return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s=e.id,l=e.active,b=e.otherPath,h=e.name,o(n(!0)),m=new t,f=b?[].concat(Object(r.a)(m.pathDatas),Object(r.a)(b),[s]):[].concat(Object(r.a)(m.pathDatas),[s]),g=h||"active",c.next=7,Object(u.h)(f,Object(a.a)({},g,l));case 7:d&&o(d(s,l)),o(n(!1));case 9:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},onDeleteAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var c=Object(o.a)(i.a.mark((function c(o){var s,d,b,h,m,f,g,p;return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return d=e.id,b=e.otherPath,o(n(!0)),h=new t,m=b?[].concat(Object(r.a)(b),[d]).join("/"):d,f=h.getPathDatas(m),g=h.getPathDeleted(m),s={},Object(a.a)(s,f,null),Object(a.a)(s,g,e),p=s,c.next=9,Object(u.h)(null,p);case 9:return l&&o(l(e)),o(n(!1)),c.abrupt("return",!0);case 12:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}}}},680:function(e,t,n){"use strict";var a=n(41),c=n(13),i=n(225),r=n(0),o=n.n(r),u=n(54),s=n(10),l=n(339),d=n(72),b=n(16),h=["modalId","constants","actions","datas","loading","isSelection","form","rowSelection","summary","isEdit","onBlur","inputOptions"];t.a=function(e){var t=e.modalId,n=e.constants,r=e.actions,m=e.datas,f=e.loading,g=e.isSelection,p=e.form,v=e.rowSelection,O=e.summary,j=e.isEdit,y=e.onBlur,T=e.inputOptions,w=Object(i.a)(e,h),x=Object(u.b)(),N=Object(u.c)((function(e){return e.table})).selectedRowKeys,C=Object(u.c)((function(e){return e.hideColumns})),D=null===C||void 0===C?void 0:C[t||""],I=o.a.useMemo((function(){var e={};return g?e.rowSelection=Object(c.a)({selectedRowKeys:N[t||""]||[],onChange:function(e,n){x(Object(l.d)({tableId:t,selectedRowKeys:e,selectedRows:n}))}},v):delete e.rowSelection,e}),[g,N]);function S(e,t,n){if(!j)return Object(d.f)();var a=n||"active",i=Object(c.a)(Object(c.a)({},e),{},{active:t,name:a});x(null===r||void 0===r?void 0:r.onActiveAsync(i))}function A(e){if(!j)return Object(d.f)();(null===r||void 0===r?void 0:r.onDeleteAsync)&&x(r.onDeleteAsync(e))}var k=Object(s.useSearchText)(),L=Object(a.a)(k,3),M=L[0],V=L[1],P=L[2],Y=o.a.useMemo((function(){var e=Object(s.getTableColumns)(n,{onActiveItem:S,onDeleteItem:A,searchText:M,searchInput:P,setSearchText:V,modalId:t,isEdit:j,constants:n,form:p,onBlur:y,inputOptions:T});return D&&(e=e.filter((function(e){return!(null===D||void 0===D?void 0:D[e.id])}))),e}),[M,D,n,T]),F=o.a.useMemo((function(){var t=Object.values(m||{});return(null===e||void 0===e?void 0:e.onCallbackDataSource)&&(t=e.onCallbackDataSource(t)),t}),[m]);return Object(b.b)("div",{className:"table",children:Object(b.b)(s.MyTable,Object(c.a)(Object(c.a)(Object(c.a)({},I),w),{},{rowKey:"id",height:"100%",loading:f,columns:Y,dataSource:F,summary:O||null}))})}},687:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(41),c=n(0),i=n.n(c),r=n(39),o=n.n(r),u=n(438),s=n(213),l=n(100),d=n(72),b=n(229),h=n(16),m=function(e){var t=e||{},n=t.disabledDate,r=t.editabledDate,l=t.className,m=t.defaultTime,f=void 0===m?o()():m,g=t.disabled,p=Object(c.useState)(f),v=Object(a.a)(p,2),O=v[0],j=v[1],y=Object(c.useState)((function(){return Object(d.b)(f)})),T=Object(a.a)(y,2),w=T[0],x=T[1],N=i.a.useMemo((function(){return null===r||void 0===r?void 0:r(O)}),[O,r]);function C(e){var t=Object(d.b)(e);x(t),j(e)}var D=function(e){var t=e.label,a=e.format,c=e.width,i=e.picker;return Object(h.b)(u.a.Item,{label:t,children:Object(h.b)(s.a,{locale:b.a,style:{width:c},format:a,picker:i,value:O,onChange:C,disabledDate:n,disabled:g,className:l})})};return[O,{getDayRender:function(){return D({picker:"date",label:"Ng\xe0y: ",format:"DD/MM/YY",width:"110px"})},getMonthRender:function(){return D({picker:"month",label:"Th\xe1ng: ",format:"MM/YYYY",width:"110px"})},getYearRender:function(){return D({picker:"year",label:"N\u0103m: ",format:"YYYY",width:"110px"})},isEditabledDate:N,selectedTime:O,yearAndDayOfYear:w,getDayOfAll:function(){return null===w||void 0===w?void 0:w.dayOfAll},onUpdate:C}]};m.defaultProps={disabledDate:l.noop,width:"105px",format:"DD/MM/YY",className:"",defaultTime:o()(),disabled:!1};var f=m},688:function(e,t,n){"use strict";var a=n(5),c=n.n(a),i=n(13),r=n(8),o=n(225),u=n(0),s=n.n(u),l=n(10),d=n(54),b=n(224),h=n(72),m=n(16),f=["modalId","constants","actions","modalTitle","onAfterAddFinish","isEdit"];t.a=function(e){var t=e.modalId,n=e.constants,a=e.actions,u=e.modalTitle,g=e.onAfterAddFinish,p=e.isEdit,v=Object(o.a)(e,f),O=Object(d.b)(),j=Object(d.c)((function(e){return e.form})),y=j.modal,T=j.edit,w=j.datas,x=s.a.useMemo((function(){var e;return!!(null===(e=y[t])||void 0===e?void 0:e.open)}),[y[t]]),N=s.a.useMemo((function(){return Object(l.getFormItemFields)(n.getInputFields(),T)}),[T]);function C(){return(C=Object(r.a)(c.a.mark((function e(n,i){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,!i){e.next=17;break}if(p){e.next=4;break}return e.abrupt("return",Object(h.f)());case 4:if(n.id){e.next=12;break}return e.next=7,O(a.onAddAsync({validatedValues:i}));case 7:r=e.sent,null===g||void 0===g||g(null===(o=r)||void 0===o?void 0:o.id),r=Boolean(r),e.next=17;break;case 12:return e.t0=Boolean,e.next=15,O(a.onUpdateAsync({currentData:n,validatedValues:i}));case 15:e.t1=e.sent,r=(0,e.t0)(e.t1);case 17:r&&O(b.a({modalId:t}));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.b)(l.MyModal,Object(i.a)(Object(i.a)({},v),{},{form:!0,title:u,modalId:t,visible:x,onClose:function(e,t){return C.apply(this,arguments)},formOptions:N,formProps:{labelCol:{span:8},wrapperCol:{span:16}},datas:w}))}},958:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n(13),i=n(41),r=n(0),o=n.n(r),u=n(54),s=n(339),l=n(687),d=n(153),b=n(99),h=n(681),m=n(29),f=n(682),g=n(10),p=n(121),v=n(69),O=n(232),j=n(122),y=n(331),T=n(169),w={inputText:{id:"inputText",name:"Input text",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},inputNumber:{id:"inputNumber",name:"Input number",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input-number-format",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},time:{id:"time",name:"Time",width:100,className:"text-small",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},chiTietSalary:{id:"chiTietSalary",name:"Chi Ti\u1ebft L\u01b0\u01a1ng",width:100,className:"text-small",children:[O.a.luongCoBan,O.a.luongTrachNhiem,O.a.luongChuyenCan,O.a.luongPhuCapKhac]},ngayCong:{id:"ngayCong",name:"Ng\xe0y c\xf4ng",width:100,className:"text-small",children:[T.a.tongCongNgayThuong,T.a.tongNgayHuongLeTet,T.a.tongCongNgayLeTet,T.a.tongCongNgay]},gioTangCa:{id:"gioTangCa",name:"Gi\u1edd T\u0103ng Ca",width:100,className:"text-small",children:[T.a.tongGioTangCaThuong,T.a.tongGioTangCaNgayLe,T.a.tongCongTangCaNgay]},getTableColumns:function(){return[m.a.stt,p.b.maNV,v.a.hoTen,j.a.chucVuName,y.a.caLamViecName,this.chiTietSalary,O.a.tongLuongThang,O.a.tongLuongNgay,this.ngayCong,this.gioTangCa]},getInputFields:function(){return[this.inputText,this.inputNumber,this.time]},getExcelFields:function(){return[this.inputText,this.inputNumber,this.time,m.a.active]},getFormViewFields:function(){var e=[this.inputText,this.inputNumber,this.time];return Object(g.getFormItemViewFields)(e)}},x=n(680),N=n(688),C=n(419),D=n(679),I=n(418),S=n(18),A=n(366),k=n(377),L=n(16),M=m.d.tinhLuongModal;t.default=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.diemDanhThang})),n=t.tabsData,r=t.loading,m=t.diemDanhThangs,g=Object(u.c)((function(e){return{salaries:e.salary.salaries,nhanSus:e.nhanSu.nhanSus,chucVus:e.chucVu.chucVus,boPhans:e.boPhan.boPhans,caLamViecs:e.caLamViec.caLamViecs}})),p=g.salaries,v=g.nhanSus,O=g.chucVus,j=g.boPhans,y=g.caLamViecs,T=Object(D.a)({Instance:C.a,onPending:I.c,addSelectedId:I.a}),V=Object(l.a)(),P=Object(i.a)(V,2),Y=P[0],F=P[1];o.a.useEffect((function(){return e(Object(k.e)(Y)),function(){Object(S.g)("diemDanhThang")}}),[Y]);var E=o.a.useMemo((function(){var t=e(Object(k.d)()),n=Object.entries(t).reduce((function(e,t){var n=Object(i.a)(t,2),r=n[0],o=n[1],u=(null===p||void 0===p?void 0:p[r])||{},s=new A.a(u),l=s.getTongLuongThang(),d=s.getTongLuongNgay(),b=Object(c.a)(Object(c.a)(Object(c.a)({},o),u),{},{tongLuongThang:l,tongLuongNgay:d});return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},r,b))}),{});return console.log(n,"values"),n}),[v,m,p,O,j,y]);return Object(L.c)("div",{className:"tinhLuong-page",css:f.a,children:[Object(L.b)(h.b,{className:"tabs",options:n,activeKey:"all",onTabClick:function(t){"taiExcel"===t&&e(Object(s.b)({tableId:M,constants:w,fileSheet:"tinhLuongSheet",fileName:"tinhLuongName"}))}}),Object(L.b)(d.a,{className:"form-selects",gutter:10,style:{marginTop:"7px"},children:Object(L.b)(b.a,{sm:6,md:6,lg:6,children:F.getMonthRender()})}),Object(L.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(L.b)("div",{className:"aside-main",children:Object(L.b)(x.a,{pagination:!0,constants:w,actions:T,datas:E,loading:r,modalId:M,isSelection:!0})})}),Object(L.b)(N.a,{modalTitle:"tinhLuong",constants:w,actions:T,modalId:M})]})}}}]);