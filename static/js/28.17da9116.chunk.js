(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[28],{1023:function(n,e,t){"use strict";t.r(e);var a=t(20),o=t(8),c=t(40),i=t(0),r=t.n(i),l=t(56),d=t(7),u=t(712),s=t(64),g=t(714),b=t(724),f={getTableColumns:function(){return[b.a.ngayGiao,b.a.tongTienDonHang]},getInputFields:function(){return[]},getExcelFields:function(){return[b.a.ngayGiao,b.a.tongTienDonHang]}},m=t(713),v=t(12),h=t(18),O=t(19),j=function(n){Object(h.a)(t,n);var e=Object(O.a)(t);function t(){var n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=e.call.apply(e,[this].concat(o))).pathDatas=["congNoNgayTuBon","datas"],n.pathDeleted=["congNoNgayTuBon","deleted"],n.initData={},n}return t}(d.AppClass),p=t(711),y=t(425),T=t(59),N=t(65),w=t(762),x=t(25);var C=function(n){var e=n.dateTimePicker,t=Object(l.b)();return Object(x.b)(x.a,{children:Object(x.b)(u.a,{header:Object(x.b)("div",{className:"font-weight-bold",children:Object(x.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(x.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(x.b)("div",{children:(null===e||void 0===e?void 0:e.getMonthRender())||null}),Object(x.b)(w.a,{})]}),footer:Object(x.b)("div",{children:Object(x.b)(T.a,{icon:Object(x.b)(N.a,{}),onClick:function(){t(Object(d.toggleAside)({tagPageId:s.c.congNoNgayTuBonModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},S=t(33),M=t(13),I=t(718),D=s.c.congNoNgayTuBonModal;var F=function(n){var e=n.pageData,t=Object(l.c)((function(n){return n.congNoNgayTuBon})).filteredKhachHangsFromDonHangs,c=Object(l.c)((function(n){return n.hideColumns})),i=null===c||void 0===c?void 0:c[D||""],u=r.a.useMemo((function(){return Object.values(t||{}).map((function(n,e){return{id:2+e,colSpan:1,cellClassName:"text-right font-weight-bold text-small",render:function(n){return Object(d.formatNumber)(n)}}}))}),[t]),s=r.a.useMemo((function(){var n=[b.a.ngayGiao],e=[b.a.tongTienDonHang];return[{id:0,colSpan:0+n.reduce((function(n,e){var t=e.id;return n+((null===i||void 0===i?void 0:i[t])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:e.reduce((function(n,e){var t=e.id;return n+((null===i||void 0===i?void 0:i[t])?0:1)}),0),cellClassName:"text-right font-weight-bold text-small text-danger",render:function(n){return Object(d.formatNumber)(n)}}].concat(Object(a.a)(u))}),[i,u]),g=r.a.useMemo((function(){return e.reduce((function(n,e){var a=n.tongTienDonHang+(e.tongTienDonHang||0),c=Object.values(t||{}).reduce((function(n,t){var a=t.id,c=((null===n||void 0===n?void 0:n[a])||0)+((null===e||void 0===e?void 0:e[a])||0);return Object(o.a)(Object(o.a)({},n),{},Object(M.a)({},a,c))}),n);return Object(o.a)(Object(o.a)(Object(o.a)({},n),c),{},{tongTienDonHang:a})}),{tong:"T\u1ed5ng ti\u1ec1n",tongTienDonHang:0})}),[e,t]),f=r.a.useMemo((function(){return["tong","tongTienDonHang"].concat(Object(a.a)(Object.values(t||{}).map((function(n){return n.id})))).map((function(n,e){return Object(M.a)({},e,g[n])}))}),[g,t]);return Object(x.b)(I.a,{columns:s,dataSource:f})},H=s.c.congNoNgayTuBonModal;e.default=function(){var n,e,t=Object(l.b)(),i=Object(d.useDatePicker)(),s=Object(c.a)(i,2),b=s[0],v=s[1],h=Object(l.c)((function(n){return n.congNoNgayTuBon})),O=h.tabsData,T=h.congNoNgayTuBonLoading,N=h.pageSize,w=h.congNoNgayTuBonsTheoCongTy,M=h.filteredKhachHangsFromDonHangs,I=Object(l.c)((function(n){var e;return null===(e=n.tagsPage)||void 0===e?void 0:e[H]})),D=Object(l.c)((function(n){return n.congTy})).congTyId,A=Object(l.c)((function(n){return n.dsKhachHang})).dsKhachHangs,B=Object(l.c)((function(n){return n.account})).accountData,k=null===B||void 0===B||null===(n=B.paths)||void 0===n||null===(e=n.congNoNgayTuBon)||void 0===e?void 0:e.edit,E=Object(p.a)({Instance:j,onPending:y.d,addSelectedId:y.a,isEdit:k});r.a.useEffect((function(){A&&Object.values(A).length>0&&t(Object(y.c)(b,D))}),[b,A,D]);var P=r.a.useMemo((function(){return Object.values(M||{}).map((function(n){return{id:n.id,width:100,align:"right",className:"text-small",name:n.tenKhachHang,render:d.numberRender}}))}),[M]),R=r.a.useMemo((function(){return Object(o.a)(Object(o.a)({},f),{},{getTableColumns:function(){return[].concat(Object(a.a)(f.getTableColumns()),Object(a.a)(P))},getExcelFields:function(){var n;return[].concat(Object(a.a)((null===f||void 0===f||null===(n=f.getExcelFields)||void 0===n?void 0:n.call(f))||[]),Object(a.a)(P))}})}),[P]);return Object(x.c)("div",{className:"congNoNgayTuBon-page",css:g.a,children:[Object(x.b)(u.b,{className:"tabs",options:O,activeKey:I?"aside":"",onTabClick:function(n){if("add"===n){if(!k)return Object(S.l)();var e=new j;t(Object(d.openModal)({modalId:H,data:e.initData}))}else"aside"===n?t(Object(d.toggleAside)({tagPageId:H})):"taiExcel"===n&&t(Object(d.downloadExcel)({tableId:H,constants:R,pageDatas:w,fileSheet:"congNoNgayTuBonSheet",fileName:"congNoNgayTuBonName"}))}}),Object(x.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[I&&Object(x.b)(C,{dateTimePicker:v}),Object(x.b)("div",{className:"aside-main",children:Object(x.b)(m.a,{isEdit:k,constants:R,actions:E,datas:w,loading:T,modalId:H,isSelection:!1,pagination:!0,pageSize:N,onChange:function(n){t(Object(y.e)(n.pageSize))},summary:function(n){return Object(x.b)(F,{pageData:n})}})})]})]})}},715:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(0),o=(t(331),t(158)),c=(t(78),t(215),t(124),t(239),t(330),t(360),function(n,e){var t=arguments;if(null==e||!o.d.call(e,"css"))return a.createElement.apply(void 0,t);var c=t.length,i=new Array(c);i[0]=o.a,i[1]=Object(o.c)(n,e);for(var r=2;r<c;r++)i[r]=t[r];return a.createElement.apply(null,i)})},716:function(n,e,t){"use strict";function a(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},c=Object.keys(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}t.d(e,"a",(function(){return a}))},718:function(n,e,t){"use strict";t(0);var a=t(473),o=t(25),c=a.a.Summary,i=c.Row,r=c.Cell;e.a=function(n){var e,t=n.columns,a=n.dataSource;return Object(o.b)(i,{children:null===t||void 0===t||null===(e=t.map)||void 0===e?void 0:e.call(t,(function(n,e){var t=null===n||void 0===n?void 0:n.id,c=(null===n||void 0===n?void 0:n.colSpan)||0,i=(null===n||void 0===n?void 0:n.cellClassName)||"",l=(null===n||void 0===n?void 0:n.valueStyle)||{},d=(null===n||void 0===n?void 0:n.valueClassName)||"",u=null===n||void 0===n?void 0:n.render,s=(null===a||void 0===a?void 0:a[e])||{},g=(null===s||void 0===s?void 0:s[t])||"";return u&&(g=u(g,s,e)),Object(o.b)(r,{index:e,colSpan:c,className:i,children:Object(o.b)("div",{style:l,className:d,children:g})},t)}))})}},724:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(7),o=t(376),c={donHangId:{id:"donHangId",name:"M\xe3 \u0110H",width:100,className:"text-small",isSearch:!0,align:"center",sorter:Object(a.sortByText)("donHangId"),form:{type:"input",innerProps:{disabled:!0}}},ngayDat:{id:"ngayDat",name:"Ng\xe0y \u0111\u1eb7t",width:100,className:"text-small",isSearch:!0,align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayGiao:{id:"ngayGiao",name:"Ng\xe0y giao",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(a.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayNhan:{id:"ngayNhan",name:"Ng\xe0y nh\u1eadn",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(a.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},tongTienMatHang:{id:"tongTienMatHang",name:"T\u1ed5ng ti\u1ec1n m\u1eb7t h\xe0ng",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},tongTienMatHangTra:{id:"tongTienMatHangTra",name:"T\u1ed5ng ti\u1ec1n tr\u1ea3",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},tongTienDonHang:{id:"tongTienDonHang",name:"T\u1ed5ng ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},daThanhToan:{id:"daThanhToan",name:"\u0110\xe3 giao",width:90,className:"text-small",filters:a.trueFalseFilter.filters,onFilter:a.trueFalseFilter.onFilter("daThanhToan"),align:"center",render:Object(o.a)("daThanhToan")},getTableColumns:function(){return[a.constants.stt,a.constants.active,a.constants.editRow]},getInputFields:function(){return[]},getExcelFields:function(){return[a.constants.active]}}},762:function(n,e,t){"use strict";var a=t(0),o=t.n(a),c=t(59),i=t(110),r=t(7),l=t(56),d=t(177),u=t(5),s=t.n(u),g=t(9),b=t(372),f=t(711),m=t(387),v=t(64),h=t(25),O=v.c.congTyModal,j=function(n){var e=n.onAfterAddFinish,t=Object(f.a)({Instance:m.a,onPending:d.f,addSelectedId:d.a}),a=Object(l.b)(),c=Object(l.c)((function(n){return n.form})),i=c.modal,u=c.datas,v=o.a.useMemo((function(){var n;return!!(null===i||void 0===i||null===(n=i[O])||void 0===n?void 0:n.open)}),[i[O]]);function j(){return(j=Object(g.a)(s.a.mark((function n(o,c){var i,l,d;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=!0,l=Object(r.convertMomentToString)(b.a.getInputFields(),c),!c){n.next=16;break}if(null===o||void 0===o?void 0:o.id){n.next=11;break}return n.next=6,a(t.onAddAsync({validatedValues:l}));case 6:i=n.sent,null===e||void 0===e||e(null===(d=i)||void 0===d?void 0:d.id),i=Boolean(i),n.next=16;break;case 11:return n.t0=Boolean,n.next=14,a(t.onUpdateAsync({currentData:o,validatedValues:l}));case 14:n.t1=n.sent,i=(0,n.t0)(n.t1);case 16:i&&a(Object(r.closeModal)({modalId:O}));case 17:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(h.b)(r.MyModal,{form:!0,title:"CongTy",visible:v,onClose:function(){a(Object(r.closeModal)({modalId:O}))},onOkModal:function(n,e){return j.apply(this,arguments)},formOptions:Object(r.getFormItemFields)(b.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:O,datas:u})},p=t(55);e.a=function(n){var e,t,a=n.form,u=n.name,s=n.mode,g=n.label,b=n.labelCol,f=n.wrapperCol,m=n.rules,O=n.isEdit,y=n.isAddNew,T=n.onAfterSelect,N=n.onAfterAddFinish,w=n.disabled,x=Object(l.b)(),C=Object(l.c)((function(n){return n.congTy})).congTys,S=Object(l.c)((function(n){return n.account})).accountData,M=(null===S||void 0===S||null===(e=S.paths)||void 0===e||null===(t=e.congTy)||void 0===t?void 0:t.edit)||O,I=o.a.useMemo((function(){return Object.values(C).filter((function(n){return n.active})).map((function(n){var e="".concat(n.tenCongTy);return{value:n.id,label:e}}))}),[C]),D=Object(h.b)(r.MyFormItem,{label:g||"C\xf4ng ty",type:"select",name:u||"congTyId",innerProps:{mode:s,showSearch:!0,allowClear:!0,filterOption:r.onSelectSearch,onChange:function(n){x(Object(d.a)(n)),null===T||void 0===T||T(n)},disabled:w,notFoundContent:M?Object(h.b)("div",{children:y?Object(h.b)(c.a,{icon:Object(h.b)(p.a,{}),type:"primary",onClick:function(){return x(Object(r.openModal)({modalId:v.c.congTyModal}))},children:"Th\xeam"}):null}):Object(h.b)(i.a,{})},options:I,rules:m||[]});return a?Object(h.c)(h.a,{children:[Object(h.b)(r.MyForm,{form:a,labelCol:b||{span:8},wrapperCol:f||{span:16},children:D}),M&&Object(h.b)(j,{onAfterAddFinish:function(n){a.setFieldsValue({congTyId:n})}})]}):Object(h.c)(h.a,{children:[D,M&&Object(h.b)(j,{onAfterAddFinish:function(n){function e(e){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(n){null===N||void 0===N||N(n)}))})]})}}}]);