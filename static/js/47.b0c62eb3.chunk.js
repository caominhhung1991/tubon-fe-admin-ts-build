(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[47],{1094:function(n,a,e){"use strict";e.r(a);var t=e(39),o=e(0),c=e.n(o),i=e(56),u=e(6),r=e(744),d=e(61),l=e(745),s=e(375),b=e(743),g=e(5),h=e.n(g),f=e(9),O=e(742),v=e(455),j=e(438),m=e(30),p=e(23),C=d.c.congNoBanHangChaLuaModal;var H=function(n){var a,e,t=n.onAfterAddFinish,o=Object(O.a)({Instance:v.a,onPending:j.f,addSelectedId:j.a}),r=Object(i.b)(),d=Object(i.c)((function(n){return n.form})),l=d.modal,b=d.datas,g=Object(i.c)((function(n){return n.account})).accountData,H=null===g||void 0===g||null===(a=g.paths)||void 0===a||null===(e=a.congNoBanHangChaLua)||void 0===e?void 0:e.edit,D=c.a.useMemo((function(){var n;return!!(null===l||void 0===l||null===(n=l[C])||void 0===n?void 0:n.open)}),[l[C]]);return Object(p.b)(u.MyModal,{form:!0,title:Object(p.b)("div",{children:"CongNoBanHangChaLua"}),visible:D,onClose:function(){r(Object(u.closeModal)({modalId:C}))},onOkModal:function(n,a){if(!H)return Object(m.n)();r(Object(u.onConfirmOk)(Object(f.a)(h.a.mark((function e(){var c,i,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=!0,i=Object(u.convertMomentToString)(s.a.getInputFields(),a),!a){e.next=16;break}if(null===n||void 0===n?void 0:n.id){e.next=11;break}return e.next=6,r(o.onAddAsync({validatedValues:i}));case 6:c=e.sent,null===t||void 0===t||t(null===(d=c)||void 0===d?void 0:d.id,c),c=Boolean(c),e.next=16;break;case 11:return e.t0=Boolean,e.next=14,r(o.onUpdateAsync({currentData:n,validatedValues:i}));case 14:e.t1=e.sent,c=(0,e.t0)(e.t1);case 16:c&&r(Object(u.closeModal)({modalId:C}));case 17:case"end":return e.stop()}}),e)})))))},formOptions:Object(u.getFormItemFields)(s.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:C,datas:b})},D=e(59),L=e(65);var N=function(n){var a,e=n.dateTimePicker,t=Object(i.b)();return Object(p.b)(p.a,{children:Object(p.b)(r.a,{header:Object(p.b)("div",{className:"font-weight-bold",children:"Th\xf4ng Tin Trang"}),body:Object(p.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(p.b)("div",{children:(null===e||void 0===e||null===(a=e.getMonthRender)||void 0===a?void 0:a.call(e))||null}),Object(p.b)("div",{})]}),footer:Object(p.b)("div",{children:Object(p.b)(D.a,{icon:Object(p.b)(L.a,{}),onClick:function(){t(Object(u.toggleAside)({tagPageId:d.c.congNoBanHangChaLuaModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},x=e(32),B=e.n(x),M=e(256),S=e(14),I=e(869),T=e(12),w=e(16),k=e(7),y=e(749),P=e(354),E=e(85),K=d.c.congNoBanHangChaLuaModal;var R=function(n){var a=n.pageData,e=n.isSelection,t=n.isExpandable,o=Object(i.b)(),r=Object(i.c)((function(n){return n.hideColumns})),d=Object(i.c)((function(n){return n.hoaDonBanHangChaLua})).hoaDonCongNoBanHangChaLuas,l=null===r||void 0===r?void 0:r[K||""],s=c.a.useMemo((function(){return Object.values(o(Object(E.d)(d))||{}).map((function(n,a){return Object(k.a)(Object(k.a)({id:a+2,name:n.tenKhachHangChaLua},n),{},{colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(n){return Object(u.formatNumber)(n)}})}))}),[d]),b=c.a.useMemo((function(){var n=[P.a.ngayHoaDon],a=[P.a.tongTienHoaDon],o=n.reduce((function(n,a){var e=a.id;return n+((null===l||void 0===l?void 0:l[e])?0:1)}),0),c=a.reduce((function(n,a){var e=a.id;return n+((null===l||void 0===l?void 0:l[e])?0:1)}),0),i=[].reduce((function(n,a){var e=a.id;return n+((null===l||void 0===l?void 0:l[e])?0:1)}),0);return[{id:0,colSpan:(e?1:0)+(t?1:0)+o,cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:c,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(n){return Object(u.formatNumber)(n)}}].concat(Object(w.a)(s),[{id:9999,colSpan:i}])}),[l,s]),g=c.a.useMemo((function(){return a.reduce((function(n,a){var e=n.tongTienHoaDon+(a.tongTienHoaDon||0),t=s.reduce((function(e,t){var o=t.khachHangChaLuaId;return Object(k.a)(Object(k.a)({},e),{},Object(T.a)({},o,((null===n||void 0===n?void 0:n[o])||0)+((null===a||void 0===a?void 0:a[o])||0)))}),{});return Object(k.a)(Object(k.a)(Object(k.a)({},n),t),{},{tongTienHoaDon:e})}),{tong:"T\u1ed5ng ti\u1ec1n",tongTienHoaDon:0})}),[a,s]),h=c.a.useMemo((function(){return["tong","tongTienHoaDon"].concat(Object(w.a)(s.map((function(n){return n.khachHangChaLuaId})))).map((function(n,a){return Object(T.a)({},a,g[n])}))}),[g]);return Object(p.b)(y.a,{columns:b,dataSource:h})},A=d.c.congNoBanHangChaLuaModal;a.default=function(){var n,a,e=Object(i.b)(),o=Object(i.c)((function(n){return n.congNoBanHangChaLua})),d=o.tabsData,g=o.congNoBanHangChaLuaLoading,h=o.pageSize,f=o.congNoBanHangChaLuas,C=o.congNoBanHangChaLuaDatas,D=Object(i.c)((function(n){return n.hoaDonBanHangChaLua})).hoaDonCongNoBanHangChaLuas,L=Object(i.c)((function(n){var a;return null===(a=n.tagsPage)||void 0===a?void 0:a[A]})),x=Object(i.c)((function(n){return n.account})),T=x.accountData,w=x.isDev,k=null===T||void 0===T||null===(n=T.paths)||void 0===n||null===(a=n.congNoBanHangChaLua)||void 0===a?void 0:a.edit,y=Object(u.useDatePicker)({defaultTime:w?B()("01/05/2022","L"):B()()}),P=Object(t.a)(y,2),E=P[0],K=P[1],z=Object(O.a)({Instance:v.a,onPending:j.f,addSelectedId:j.a,isEdit:k});c.a.useEffect((function(){e(Object(j.d)(E))}),[f,D,E]),c.a.useEffect((function(){return e(Object(M.d)(E)),e(Object(j.e)(E)),function(){Object(S.j)("congNoBanHangChaLua")}}),[E]);var F=c.a.useMemo((function(){return e(Object(j.c)())}),[D]);return Object(p.c)("div",{className:"congNoBanHangChaLua-page",css:l.a,children:[Object(p.b)(r.b,{className:"tabs",options:d,activeKey:L?"aside":"",onTabClick:function(n){if("add"===n){if(!k)return Object(m.n)();var a=new v.a;e(Object(u.openModal)({modalId:A,data:a.initData}))}else"aside"===n?e(Object(u.toggleAside)({tagPageId:A})):"taiExcel"===n&&e(Object(u.downloadExcel)({tableId:A,constants:s.a,fileSheet:"congNoBanHangChaLuaSheet",fileName:"congNoBanHangChaLuaName"}))}}),Object(p.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[L&&Object(p.b)(N,{dateTimePicker:K}),Object(p.b)("div",{className:"aside-main",children:Object(p.b)(b.a,{isEdit:k,constants:F,actions:z,datas:C,loading:g,modalId:A,expandable:{expandedRowRender:function(n){return Object(p.b)(I.a,{isHidePagination:!0,isHideSummary:!0,hoaDonBanHangChaLuas:n.hoaDonChaLuas})},expandRowByClick:!0,rowExpandable:function(n){var a;return!!(null===(a=Object.values((null===n||void 0===n?void 0:n.hoaDonChaLuas)||{}))||void 0===a?void 0:a.length)}},isSelection:!1,pagination:!0,pageSize:h,onChange:function(n){e(Object(j.g)(n.pageSize))},summary:function(n){return Object(p.b)(R,{pageData:n,isExpandable:!0})}})})]}),Object(p.b)(H,{})]})}},800:function(n,a,e){"use strict";var t=e(0),o=e.n(t),c=e(743),i=e(183),u=e(56),r=e(760),d=e(753),l=e(23);a.a=function(n){var a=n.record,e=Object(u.b)(),t=Object(u.c)((function(n){return n.loaiPhieuKho})).loaiPhieuKhos,s=o.a.useMemo((function(){return(null===a||void 0===a?void 0:a.hoaDonChaLuaChiTiets)||{}}),[a]),b=o.a.useMemo((function(){var n=null===a||void 0===a?void 0:a.loaiPhieuKhoId,t=e(Object(i.d)(n)),o=e(Object(i.c)(n));return e(Object(d.b)(r.b,t,o))}),[a,t]);return Object(l.b)(c.a,{constants:b,datas:s})}},819:function(n,a,e){"use strict";var t=e(12),o=e(7),c=e(16),i=e(0),u=e.n(i),r=e(749),d=e(6),l=e(56),s=e(61),b=e(767),g=e(251),h=e(228),f=e(402),O=e(354),v=e(23),j=s.c.hoaDonChaLuaModal;a.a=function(n){var a=n.pageData,e=n.loaiHoaDonId,i=Object(l.c)((function(n){return n.hideColumns})),s=null===i||void 0===i?void 0:i[j||""],m=u.a.useMemo((function(){var n=[d.constants.stt,O.a.ngayHoaDon],a=[O.a.tongTienHoaDon],t=[].concat(Object(c.a)(e===h.b.hoaDonBan.id?[b.a.tenKhachHangChaLua]:[]),Object(c.a)(e===h.b.hoaDonMua.id?[f.a.tenNhaCungCapChaLua]:[]),[O.a.muaCongNo,h.a.tenLoaiHoaDon,g.a.tenLoaiPhieuKho,d.constants.editRow]);return[{id:0,colSpan:1+n.reduce((function(n,a){var e=a.id;return n+((null===s||void 0===s?void 0:s[e])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:a.reduce((function(n,a){var e=a.id;return n+((null===s||void 0===s?void 0:s[e])?0:1)}),0),cellClassName:"text-right font-weight-bold text-small text-danger",render:function(n){return Object(d.formatNumber)(n)}},{id:2,colSpan:t.reduce((function(n,a){var e=a.id;return n+((null===s||void 0===s?void 0:s[e])?0:1)}),0)}]}),[s,e]),p=u.a.useMemo((function(){return a.reduce((function(n,a){var e=n.tongTienHoaDon+(a.tongTienHoaDon||0);return Object(o.a)(Object(o.a)({},n),{},{tongTienHoaDon:e})}),{tong:"T\u1ed5ng ti\u1ec1n",tongTienHoaDon:0})}),[a]),C=u.a.useMemo((function(){return["tong","tongTienHoaDon"].map((function(n,a){return Object(t.a)({},a,p[n])}))}),[p]);return Object(v.b)(r.a,{columns:m,dataSource:C})}},840:function(n,a,e){"use strict";e.d(a,"a",(function(){return d}));var t=e(7),o=e(6),c=e(767),i=e(251),u=e(228),r=e(354),d={getTableColumns:function(){return[Object(t.a)(Object(t.a)({},o.constants.stt),{},{fixed:!1}),Object(t.a)(Object(t.a)({},r.a.ngayHoaDon),{},{defaultSortOrder:"ascend"}),r.a.tongTienHoaDon,o.constants.editRow,c.a.tenKhachHangChaLua,r.a.muaCongNo,u.a.tenLoaiHoaDon,i.a.tenLoaiPhieuKho]},getInputFields:function(){return[]}}},869:function(n,a,e){"use strict";var t=e(5),o=e.n(t),c=e(9),i=(e(0),e(56)),u=e(61),r=e(840),d=e(743),l=e(215),s=e(742),b=e(256),g=e(800),h=e(819),f=e(228),O=e(842),v=e(23),j=u.c.hoaDonBanHangChaLuaModal;a.a=function(n){var a,e,t=n.hoaDonBanHangChaLuas,u=n.isHidePagination,m=n.isHideSummary,p=Object(i.b)(),C=Object(i.c)((function(n){return n.hoaDonBanHangChaLua})),H=C.hoaDonBanHangChaLuaLoading,D=C.pageSize,L=Object(i.c)((function(n){return n.account})).accountData,N=null===L||void 0===L||null===(a=L.paths)||void 0===a||null===(e=a.hoaDonBanHangChaLua)||void 0===e?void 0:e.edit,x=Object(s.a)({Instance:l.a,onPending:b.j,addSelectedId:b.a,isEdit:N});function B(){return(B=Object(c.a)(o.a.mark((function n(a,e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p(Object(b.e)(a,e));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(v.c)(v.a,{children:[Object(v.b)(d.a,{isEdit:N,constants:r.a,actions:x,datas:t,loading:H,modalId:j,expandable:{expandedRowRender:function(n){return Object(v.b)(g.a,{record:n})},expandRowByClick:!0},isSelection:!1,pagination:!u,pageSize:D,onChange:function(n){p(Object(b.k)(n.pageSize))},summary:function(n){return m||Object(v.b)(h.a,{loaiHoaDonId:f.b.hoaDonBan.id,pageData:n})},inputOptions:{onDeleteItem:function(n){p(Object(b.f)(n))},onActiveItemMuaCongNo:function(n,a){return B.apply(this,arguments)}}}),Object(v.b)(O.a,{})]})}}}]);