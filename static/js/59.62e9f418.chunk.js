(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[59],{1012:function(e,t,n){"use strict";n.r(t);var a=n(40),i=n(0),c=n.n(i),o=n(56),u=n(7),d=n(710),r=n(64),s=n(714),h=n(10),l=n(775),b=n(165),p={inputText:{id:"inputText",name:"Input text",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},inputNumber:{id:"inputNumber",name:"Input number",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input-number-format",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},time:{id:"time",name:"Time",width:100,className:"text-small",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},getTableColumns:function(){return[Object(h.a)(Object(h.a)({},u.constants.stt),{},{fixed:!1}),l.a.ngay,l.a.tongTienPhieuKho,b.a.tenLoaiPhieuKho,u.constants.createdAt,u.constants.createdBy,u.constants.capNhatRow]},getInputFields:function(){return[this.inputText,this.inputNumber,this.time]},getExcelFields:function(){return[this.inputText,this.inputNumber,this.time,u.constants.active]},getFormViewFields:function(){var e=[this.inputText,this.inputNumber,this.time];return Object(u.getFormItemViewFields)(e)}},m=n(713),g=n(457),j=n(709),O=n(404),v=n(59),f=n(356),N=n(65),K=n(32),T=n.n(K),C=n(335),x=n(15),w=n(802),L=n(24);var P=function(e){var t,n,a,i=e.dateTimePicker,c=Object(o.b)(),s=Object(o.c)((function(e){return e.account})).accountData,l=null===s||void 0===s||null===(t=s.paths)||void 0===t||null===(n=t.phieuKhoNhapCL)||void 0===n?void 0:n.edit;return Object(L.c)(L.a,{children:[Object(L.b)(d.a,{header:Object(L.b)("div",{className:"font-weight-bold",children:Object(L.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(L.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(L.b)("div",{children:(null===i||void 0===i||null===(a=i.getDayRender)||void 0===a?void 0:a.call(i))||null}),Object(L.b)("div",{className:"mt-1",children:Object(L.b)(v.a,{icon:Object(L.b)(f.a,{}),onClick:function(){var e=(new C.a).initData,t=T()();c(Object(u.openModal)({modalId:r.c.phieuKhoNhapModal,data:Object(h.a)(Object(h.a)({},e),{},{ngay:t,khoId:"khoChaLua"})}))},block:!0,children:"Th\xeam phi\u1ebfu nh\u1eadp kho"})})]}),footer:Object(L.b)("div",{children:Object(L.b)(v.a,{icon:Object(L.b)(N.a,{}),onClick:function(){c(Object(u.toggleAside)({tagPageId:r.c.phieuKhoNhapCLModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})}),Object(L.b)(w.a,{isEdit:l,onStopListen:function(){Object(x.i)(O.d)},onListen:function(){c(Object(O.c)())}})]})},y=n(13),k=n(716),I=r.c.phieuKhoNhapCLModal;var M=function(e){var t=e.pageData,n=Object(o.c)((function(e){return e.hideColumns})),a=null===n||void 0===n?void 0:n[I||""],i=c.a.useMemo((function(){var e=[u.constants.stt,l.a.ngay],t=[l.a.tongTienPhieuKho],n=[b.a.tenLoaiPhieuKho,u.constants.createdAt,u.constants.createdBy,u.constants.capNhatRow];return[{id:0,colSpan:2+e.reduce((function(e,t){var n=t.id;return e+((null===a||void 0===a?void 0:a[n])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:t.reduce((function(e,t){var n=t.id;return e+((null===a||void 0===a?void 0:a[n])?0:1)}),0),cellClassName:"text-right font-weight-bold text-small text-danger",render:function(e){return Object(u.formatNumber)(e)}},{id:2,colSpan:n.reduce((function(e,t){var n=t.id;return e+((null===a||void 0===a?void 0:a[n])?0:1)}),0)}]}),[a]),d=c.a.useMemo((function(){return t.reduce((function(e,t){var n=e.tongTienPhieuKho+(t.tongTienPhieuKho||0);return Object(h.a)(Object(h.a)({},e),{},{tongTienPhieuKho:n})}),{tong:"T\u1ed5ng ti\u1ec1n",tongTienPhieuKho:0})}),[t]),r=c.a.useMemo((function(){return["tong","tongTienPhieuKho"].map((function(e,t){return Object(y.a)({},t,d[e])}))}),[d]);return Object(L.b)(k.a,{columns:i,dataSource:r})},S=n(758);var D=function(e){var t=e.phieuKhoData,n=Object(o.c)((function(e){return e.dsMatHang})).dsMatHangs,a=c.a.useMemo((function(){var e=(null===t||void 0===t?void 0:t.phieuKhoChiTiets)||{};return Object.values(e).reduce((function(e,t){var a=t.matHangId,i=t.giaNhapMatHang,c=void 0===i?0:i,o=t.soLuongNhapKho,u=void 0===o?0:o,d=(null===n||void 0===n?void 0:n[a])||{},r=Math.round(c*u);return Object(h.a)(Object(h.a)({},e),{},Object(y.a)({},a,Object(h.a)(Object(h.a)(Object(h.a)({},d),t),{},{thanhTienGiaNhap:r})))}),{})}),[t,n]);return Object(L.b)("div",{children:Object(L.b)(m.a,{constants:S.b,datas:a,isSelection:!1,pagination:!1})})},E=r.c.phieuKhoNhapModal;t.default=function(){var e,t,n=Object(o.b)(),i=Object(u.useDatePicker)(),r=Object(a.a)(i,2),h=r[0],l=r[1],b=Object(o.c)((function(e){return e.phieuKhoNhapCL})),v=b.tabsData,f=b.phieuKhoNhapCLLoading,N=b.pageSize,K=b.phieuKhoNhapCLs,T=Object(o.c)((function(e){var t;return null===(t=e.tagsPage)||void 0===t?void 0:t[E]})),C=Object(o.c)((function(e){return e.account})).accountData,y=null===C||void 0===C||null===(e=C.paths)||void 0===e||null===(t=e.phieuKhoNhapCL)||void 0===t?void 0:t.edit,k=Object(j.a)({Instance:g.a,onPending:O.f,addSelectedId:O.a,isEdit:y});return c.a.useEffect((function(){return n(Object(O.c)(h)),function(){Object(x.i)(O.d)}}),[h]),Object(L.c)("div",{className:"phieuKhoNhapCL-page",css:s.a,children:[Object(L.b)(d.b,{className:"tabs",options:v,activeKey:T?"aside":"",onTabClick:function(e){"aside"===e?n(Object(u.toggleAside)({tagPageId:E})):"taiExcel"===e&&n(Object(u.downloadExcel)({tableId:E,constants:p,fileSheet:"phieuKhoNhapCLSheet",fileName:"phieuKhoNhapCLName"}))}}),Object(L.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[T&&Object(L.b)(P,{dateTimePicker:l}),Object(L.b)("div",{className:"aside-main",children:Object(L.b)(m.a,{isEdit:y,constants:p,actions:k,datas:K,loading:f,modalId:E,expandable:{expandedRowRender:function(e){return Object(L.b)("div",{children:Object(L.b)(D,{phieuKhoData:e})})},expandRowByClick:!1},isSelection:!0,pagination:!0,pageSize:N,onChange:function(e){n(Object(O.e)(e.pageSize))},summary:function(e){return Object(L.b)(M,{pageData:e})}})})]}),Object(L.b)(w.a,{isEdit:y})]})}}}]);