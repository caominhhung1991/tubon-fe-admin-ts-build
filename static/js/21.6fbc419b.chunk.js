(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[21],{683:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(12),r=n(5),c=n.n(r),i=n(33),o=n(8),u=n(17),s=n(134);function l(e){var t=e.Instance,n=e.onPending,r=e.addSelectedId,l=e.onDelete,d=e.onActive;return{onAddAsync:function(e){return function(){var a=Object(o.a)(c.a.mark((function a(o){var s,l,d,b,h;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=e.validatedValues,l=s.otherPath,o(n(!0)),d=new t,b=l?[].concat(Object(i.a)(d.pathDatas),Object(i.a)(l)):d.pathDatas,a.next=7,Object(u.a)(b,s);case 7:return h=a.sent,r&&o(null===r||void 0===r?void 0:r(null===h||void 0===h?void 0:h.id)),o(n(!1)),a.abrupt("return",h);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},onUpdateAsync:function(e){return function(){var a=Object(o.a)(c.a.mark((function a(r){var o,l,d,b,h,m;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=e.currentData,l=e.validatedValues,d=o.id,b=o.otherPath,d){a.next=4;break}return a.abrupt("return",s.b.error("Ch\u01b0a c\xf3 id"));case 4:return r(n(!0)),h=new t,m=b?[].concat(Object(i.a)(h.pathDatas),Object(i.a)(b),[d]):[].concat(Object(i.a)(h.pathDatas),[d]),a.next=9,Object(u.h)(m,l);case 9:return r(n(!1)),a.abrupt("return",!0);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},onActiveAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=Object(o.a)(c.a.mark((function r(o){var s,l,b,h,m,f,g;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=e.id,l=e.active,b=e.otherPath,h=e.name,!d){r.next=3;break}return r.abrupt("return",o(d(s,l)));case 3:if(window.confirm("X\xe1c nh\u1eadn?")){r.next=5;break}return r.abrupt("return",null);case 5:return o(n(!0)),m=new t,f=b?[].concat(Object(i.a)(m.pathDatas),Object(i.a)(b),[s]):[].concat(Object(i.a)(m.pathDatas),[s]),g=h||"active",r.next=11,Object(u.h)(f,Object(a.a)({},g,l));case 11:o(n(!1));case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},onDeleteAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=Object(o.a)(c.a.mark((function r(o){var s,d,b,h,m,f,g,p;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!l){r.next=2;break}return r.abrupt("return",o(l(e)));case 2:return d=e.id,b=e.otherPath,o(n(!0)),h=new t,m=b?[].concat(Object(i.a)(b),[d]).join("/"):d,f=h.getPathDatas(m),g=h.getPathDeleted(m),s={},Object(a.a)(s,f,null),Object(a.a)(s,g,e),p=s,r.next=11,Object(u.h)(null,p);case 11:return o(n(!1)),r.abrupt("return",!0);case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}}},684:function(e,t,n){"use strict";var a=n(41),r=n(13),c=n(226),i=n(0),o=n.n(i),u=n(55),s=n(10),l=n(341),d=n(56),b=n(16),h=["modalId","constants","actions","datas","loading","isSelection","form","rowSelection","summary","isEdit","onBlur","inputOptions"];t.a=function(e){var t=e.modalId,n=e.constants,i=e.actions,m=e.datas,f=e.loading,g=e.isSelection,p=e.form,v=e.rowSelection,O=e.summary,j=e.isEdit,y=e.onBlur,T=e.inputOptions,w=Object(c.a)(e,h),x=Object(u.b)(),N=Object(u.c)((function(e){return e.table})).selectedRowKeys,C=Object(u.c)((function(e){return e.hideColumns})),D=null===C||void 0===C?void 0:C[t||""],I=o.a.useMemo((function(){var e={};return g?e.rowSelection=Object(r.a)({selectedRowKeys:N[t||""]||[],onChange:function(e,n){x(Object(l.d)({tableId:t,selectedRowKeys:e,selectedRows:n}))}},v):delete e.rowSelection,e}),[g,N]);function S(e,t,n){if(!j)return Object(d.f)();var a=n||"active",c=Object(r.a)(Object(r.a)({},e),{},{active:t,name:a});x(null===i||void 0===i?void 0:i.onActiveAsync(c))}function k(e){if(!j)return Object(d.f)();(null===i||void 0===i?void 0:i.onDeleteAsync)&&x(i.onDeleteAsync(e))}var A=Object(s.useSearchText)(),L=Object(a.a)(A,3),M=L[0],V=L[1],P=L[2],Y=o.a.useMemo((function(){var e=Object(s.getTableColumns)(n,{onActiveItem:S,onDeleteItem:k,searchText:M,searchInput:P,setSearchText:V,modalId:t,isEdit:j,constants:n,form:p,onBlur:y,inputOptions:T});return D&&(e=e.filter((function(e){return!(null===D||void 0===D?void 0:D[e.id])}))),e}),[M,D,n,T]),F=o.a.useMemo((function(){var t=Object.values(m||{});return(null===e||void 0===e?void 0:e.onCallbackDataSource)&&(t=e.onCallbackDataSource(t)),t}),[m]);return Object(b.b)("div",{className:"table",children:Object(b.b)(s.MyTable,Object(r.a)(Object(r.a)(Object(r.a)({},I),w),{},{rowKey:"id",height:"100%",loading:f,columns:Y,dataSource:F,summary:O||null}))})}},690:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(41),r=n(0),c=n.n(r),i=n(37),o=n.n(i),u=n(441),s=n(213),l=n(106),d=n(56),b=n(229),h=n(16),m=function(e){var t=e||{},n=t.disabledDate,i=t.editabledDate,l=t.className,m=t.defaultTime,f=void 0===m?o()():m,g=t.disabled,p=Object(r.useState)(f),v=Object(a.a)(p,2),O=v[0],j=v[1],y=Object(r.useState)((function(){return Object(d.b)(f)})),T=Object(a.a)(y,2),w=T[0],x=T[1],N=c.a.useMemo((function(){return null===i||void 0===i?void 0:i(O)}),[O,i]);function C(e){var t=Object(d.b)(e);x(t),j(e)}var D=function(e){var t=e.label,a=e.format,r=e.width,c=e.picker;return Object(h.b)(u.a.Item,{label:t,children:Object(h.b)(s.a,{locale:b.a,style:{width:r},format:a,picker:c,value:O,onChange:C,disabledDate:n,disabled:g,className:l})})};return[O,{getDayRender:function(){return D({picker:"date",label:"Ng\xe0y: ",format:"DD/MM/YY",width:"110px"})},getMonthRender:function(){return D({picker:"month",label:"Th\xe1ng: ",format:"MM/YYYY",width:"110px"})},getYearRender:function(){return D({picker:"year",label:"N\u0103m: ",format:"YYYY",width:"110px"})},isEditabledDate:N,selectedTime:O,yearAndDayOfYear:w,getDayOfAll:function(){return null===w||void 0===w?void 0:w.dayOfAll},onUpdate:C}]};m.defaultProps={disabledDate:l.noop,width:"105px",format:"DD/MM/YY",className:"",defaultTime:o()(),disabled:!1};var f=m},703:function(e,t,n){"use strict";var a=n(5),r=n.n(a),c=n(13),i=n(8),o=n(226),u=n(0),s=n.n(u),l=n(10),d=n(55),b=n(225),h=n(56),m=n(16),f=["modalId","constants","actions","modalTitle","onAfterAddFinish","isEdit"];t.a=function(e){var t=e.modalId,n=e.constants,a=e.actions,u=e.modalTitle,g=e.onAfterAddFinish,p=e.isEdit,v=Object(o.a)(e,f),O=Object(d.b)(),j=Object(d.c)((function(e){return e.form})),y=j.modal,T=j.edit,w=j.datas,x=s.a.useMemo((function(){var e;return!!(null===(e=y[t])||void 0===e?void 0:e.open)}),[y[t]]),N=s.a.useMemo((function(){return Object(l.getFormItemFields)(n.getInputFields(),T)}),[T]);function C(){return(C=Object(i.a)(r.a.mark((function e(n,c){var i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!0,!c){e.next=17;break}if(p){e.next=4;break}return e.abrupt("return",Object(h.f)());case 4:if(n.id){e.next=12;break}return e.next=7,O(a.onAddAsync({validatedValues:c}));case 7:i=e.sent,null===g||void 0===g||g(null===(o=i)||void 0===o?void 0:o.id),i=Boolean(i),e.next=17;break;case 12:return e.t0=Boolean,e.next=15,O(a.onUpdateAsync({currentData:n,validatedValues:c}));case 15:e.t1=e.sent,i=(0,e.t0)(e.t1);case 17:i&&O(b.a({modalId:t}));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.b)(l.MyModal,Object(c.a)(Object(c.a)({},v),{},{form:!0,title:u,modalId:t,visible:x,onClose:function(e,t){return C.apply(this,arguments)},formOptions:N,formProps:{labelCol:{span:8},wrapperCol:{span:16}},datas:w}))}},964:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),c=n(41),i=n(0),o=n.n(i),u=n(55),s=n(341),l=n(690),d=n(153),b=n(99),h=n(685),m=n(29),f=n(686),g=n(10),p=n(120),v=n(70),O=n(233),j=n(121),y=n(332),T=n(169),w={inputText:{id:"inputText",name:"Input text",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},inputNumber:{id:"inputNumber",name:"Input number",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input-number-format",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},time:{id:"time",name:"Time",width:100,className:"text-small",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},chiTietSalary:{id:"chiTietSalary",name:"Chi Ti\u1ebft L\u01b0\u01a1ng",width:100,className:"text-small",children:[O.a.luongCoBan,O.a.luongTrachNhiem,O.a.luongChuyenCan,O.a.luongPhuCapKhac]},ngayCong:{id:"ngayCong",name:"Ng\xe0y c\xf4ng",width:100,className:"text-small",children:[T.a.tongCongNgayThuong,T.a.tongNgayHuongLeTet,T.a.tongCongNgayLeTet,T.a.tongCongNgay]},gioTangCa:{id:"gioTangCa",name:"Gi\u1edd T\u0103ng Ca",width:100,className:"text-small",children:[T.a.tongGioTangCaThuong,T.a.tongGioTangCaNgayLe,T.a.tongCongTangCaNgay]},getTableColumns:function(){return[m.a.stt,p.b.maNV,v.a.hoTen,j.a.chucVuName,y.a.caLamViecName,this.chiTietSalary,O.a.tongLuongThang,O.a.tongLuongNgay,this.ngayCong,this.gioTangCa]},getInputFields:function(){return[this.inputText,this.inputNumber,this.time]},getExcelFields:function(){return[this.inputText,this.inputNumber,this.time,m.a.active]},getFormViewFields:function(){var e=[this.inputText,this.inputNumber,this.time];return Object(g.getFormItemViewFields)(e)}},x=n(684),N=n(703),C=n(421),D=n(683),I=n(420),S=n(17),k=n(369),A=n(379),L=n(16),M=m.d.tinhLuongModal;t.default=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.diemDanhThang})),n=t.tabsData,i=t.loading,m=t.diemDanhThangs,g=Object(u.c)((function(e){return{salaries:e.salary.salaries,nhanSus:e.nhanSu.nhanSus,chucVus:e.chucVu.chucVus,boPhans:e.boPhan.boPhans,caLamViecs:e.caLamViec.caLamViecs}})),p=g.salaries,v=g.nhanSus,O=g.chucVus,j=g.boPhans,y=g.caLamViecs,T=Object(D.a)({Instance:C.a,onPending:I.c,addSelectedId:I.a}),V=Object(l.a)(),P=Object(c.a)(V,2),Y=P[0],F=P[1];o.a.useEffect((function(){return e(Object(A.e)(Y)),function(){Object(S.g)("diemDanhThang")}}),[Y]);var E=o.a.useMemo((function(){var t=e(Object(A.d)()),n=Object.entries(t).reduce((function(e,t){var n=Object(c.a)(t,2),i=n[0],o=n[1],u=(null===p||void 0===p?void 0:p[i])||{},s=new k.a(u),l=s.getTongLuongThang(),d=s.getTongLuongNgay(),b=Object(r.a)(Object(r.a)(Object(r.a)({},o),u),{},{tongLuongThang:l,tongLuongNgay:d});return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},i,b))}),{});return console.log(n,"values"),n}),[v,m,p,O,j,y]);return Object(L.c)("div",{className:"tinhLuong-page",css:f.a,children:[Object(L.b)(h.b,{className:"tabs",options:n,activeKey:"all",onTabClick:function(t){"taiExcel"===t&&e(Object(s.b)({tableId:M,constants:w,fileSheet:"tinhLuongSheet",fileName:"tinhLuongName"}))}}),Object(L.b)(d.a,{className:"form-selects",gutter:10,style:{marginTop:"7px"},children:Object(L.b)(b.a,{sm:6,md:6,lg:6,children:F.getMonthRender()})}),Object(L.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(L.b)("div",{className:"aside-main",children:Object(L.b)(x.a,{pagination:!0,constants:w,actions:T,datas:E,loading:i,modalId:M,isSelection:!0})})}),Object(L.b)(N.a,{modalTitle:"tinhLuong",constants:w,actions:T,modalId:M})]})}}}]);