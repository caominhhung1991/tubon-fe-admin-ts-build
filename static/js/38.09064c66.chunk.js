(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[38],{1067:function(n,a,e){"use strict";e.r(a);var t=e(39),o=e(0),c=e.n(o),i=e(56),u=e(6),r=e(744),d=e(61),b=e(745),l=e(840),s=e(256),h=e(30),g=e(818),j=e(14),O=e(32),f=e.n(O),v=e(869),m=e(23),D=d.c.hoaDonBanHangChaLuaModal;a.default=function(){var n,a,e=Object(i.b)(),o=Object(i.c)((function(n){return n.hoaDonBanHangChaLua})),d=o.tabsData,O=o.hoaDonBanHangChaLuas,p=Object(i.c)((function(n){var a;return null===(a=n.tagsPage)||void 0===a?void 0:a[D]})),C=Object(i.c)((function(n){return n.account})),H=C.accountData,L=C.isDev,T=null===H||void 0===H||null===(n=H.paths)||void 0===n||null===(a=n.hoaDonBanHangChaLua)||void 0===a?void 0:a.edit,B=Object(u.useDatePicker)({defaultTime:L?f()("01/05/2022","L"):f()()}),M=Object(t.a)(B,2),N=M[0],x=M[1];return c.a.useEffect((function(){return e(Object(s.g)(N)),function(){Object(j.j)("hoaDonBanHangChaLua")}}),[N]),Object(m.c)("div",{className:"hoaDonBanHangChaLua-page",css:b.a,children:[Object(m.b)(r.b,{className:"tabs",options:d,activeKey:p?"aside":"",onTabClick:function(n){if("add"===n){if(!T)return Object(h.n)();e(Object(u.openModal)({modalId:D}))}else"aside"===n?e(Object(u.toggleAside)({tagPageId:D})):"taiExcel"===n&&e(Object(u.downloadExcel)({tableId:D,constants:l.a,fileSheet:"hoaDonBanHangChaLuaSheet",fileName:"hoaDonBanHangChaLuaName"}))}}),Object(m.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[p&&Object(m.b)(g.a,{dateTimePicker:x}),Object(m.b)("div",{className:"aside-main",children:Object(m.b)(v.a,{hoaDonBanHangChaLuas:O})})]})]})}},800:function(n,a,e){"use strict";var t=e(0),o=e.n(t),c=e(743),i=e(183),u=e(56),r=e(760),d=e(753),b=e(23);a.a=function(n){var a=n.record,e=Object(u.b)(),t=Object(u.c)((function(n){return n.loaiPhieuKho})).loaiPhieuKhos,l=o.a.useMemo((function(){return(null===a||void 0===a?void 0:a.hoaDonChaLuaChiTiets)||{}}),[a]),s=o.a.useMemo((function(){var n=null===a||void 0===a?void 0:a.loaiPhieuKhoId,t=e(Object(i.d)(n)),o=e(Object(i.c)(n));return e(Object(d.b)(r.b,t,o))}),[a,t]);return Object(b.b)(c.a,{constants:s,datas:l})}},818:function(n,a,e){"use strict";e(0);var t=e(59),o=e(50),c=e(65),i=e(744),u=e(56),r=e(6),d=e(61),b=e(23);a.a=function(n){var a=n.dateTimePicker,e=Object(u.b)();return Object(b.b)(b.a,{children:Object(b.b)(i.a,{header:Object(b.b)("div",{className:"font-weight-bold",children:Object(b.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(b.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(b.b)("div",{children:(null===a||void 0===a?void 0:a.getMonthRender())||null}),Object(b.b)("div",{children:Object(b.b)(t.a,{icon:Object(b.b)(o.a,{}),onClick:function(){e(Object(r.openModal)({modalId:d.c.hoaDonMuaHangChaLuaModal}))},block:!0,children:"Th\xeam h\xf3a \u0111\u01a1n mua h\xe0ng"})}),Object(b.b)("div",{className:"mt-1",children:Object(b.b)(t.a,{icon:Object(b.b)(o.a,{}),onClick:function(){e(Object(r.openModal)({modalId:d.c.hoaDonBanHangChaLuaModal}))},block:!0,children:"Th\xeam h\xf3a \u0111\u01a1n b\xe1n h\xe0ng"})})]}),footer:Object(b.b)("div",{children:Object(b.b)(t.a,{icon:Object(b.b)(c.a,{}),onClick:function(){e(Object(r.toggleAside)({tagPageId:d.c.hoaDonChaLuaModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})}},819:function(n,a,e){"use strict";var t=e(12),o=e(7),c=e(16),i=e(0),u=e.n(i),r=e(749),d=e(6),b=e(56),l=e(61),s=e(767),h=e(251),g=e(228),j=e(402),O=e(354),f=e(23),v=l.c.hoaDonChaLuaModal;a.a=function(n){var a=n.pageData,e=n.loaiHoaDonId,i=Object(b.c)((function(n){return n.hideColumns})),l=null===i||void 0===i?void 0:i[v||""],m=u.a.useMemo((function(){var n=[d.constants.stt,O.a.ngayHoaDon],a=[O.a.tongTienHoaDon],t=[].concat(Object(c.a)(e===g.b.hoaDonBan.id?[s.a.tenKhachHangChaLua]:[]),Object(c.a)(e===g.b.hoaDonMua.id?[j.a.tenNhaCungCapChaLua]:[]),[O.a.muaCongNo,g.a.tenLoaiHoaDon,h.a.tenLoaiPhieuKho,d.constants.editRow]);return[{id:0,colSpan:1+n.reduce((function(n,a){var e=a.id;return n+((null===l||void 0===l?void 0:l[e])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:a.reduce((function(n,a){var e=a.id;return n+((null===l||void 0===l?void 0:l[e])?0:1)}),0),cellClassName:"text-right font-weight-bold text-small text-danger",render:function(n){return Object(d.formatNumber)(n)}},{id:2,colSpan:t.reduce((function(n,a){var e=a.id;return n+((null===l||void 0===l?void 0:l[e])?0:1)}),0)}]}),[l,e]),D=u.a.useMemo((function(){return a.reduce((function(n,a){var e=n.tongTienHoaDon+(a.tongTienHoaDon||0);return Object(o.a)(Object(o.a)({},n),{},{tongTienHoaDon:e})}),{tong:"T\u1ed5ng ti\u1ec1n",tongTienHoaDon:0})}),[a]),p=u.a.useMemo((function(){return["tong","tongTienHoaDon"].map((function(n,a){return Object(t.a)({},a,D[n])}))}),[D]);return Object(f.b)(r.a,{columns:m,dataSource:p})}},840:function(n,a,e){"use strict";e.d(a,"a",(function(){return d}));var t=e(7),o=e(6),c=e(767),i=e(251),u=e(228),r=e(354),d={getTableColumns:function(){return[Object(t.a)(Object(t.a)({},o.constants.stt),{},{fixed:!1}),Object(t.a)(Object(t.a)({},r.a.ngayHoaDon),{},{defaultSortOrder:"ascend"}),r.a.tongTienHoaDon,o.constants.editRow,c.a.tenKhachHangChaLua,r.a.muaCongNo,u.a.tenLoaiHoaDon,i.a.tenLoaiPhieuKho]},getInputFields:function(){return[]}}},869:function(n,a,e){"use strict";var t=e(5),o=e.n(t),c=e(9),i=(e(0),e(56)),u=e(61),r=e(840),d=e(743),b=e(215),l=e(742),s=e(256),h=e(800),g=e(819),j=e(228),O=e(842),f=e(23),v=u.c.hoaDonBanHangChaLuaModal;a.a=function(n){var a,e,t=n.hoaDonBanHangChaLuas,u=n.isHidePagination,m=n.isHideSummary,D=Object(i.b)(),p=Object(i.c)((function(n){return n.hoaDonBanHangChaLua})),C=p.hoaDonBanHangChaLuaLoading,H=p.pageSize,L=Object(i.c)((function(n){return n.account})).accountData,T=null===L||void 0===L||null===(a=L.paths)||void 0===a||null===(e=a.hoaDonBanHangChaLua)||void 0===e?void 0:e.edit,B=Object(l.a)({Instance:b.a,onPending:s.j,addSelectedId:s.a,isEdit:T});function M(){return(M=Object(c.a)(o.a.mark((function n(a,e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D(Object(s.e)(a,e));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(f.c)(f.a,{children:[Object(f.b)(d.a,{isEdit:T,constants:r.a,actions:B,datas:t,loading:C,modalId:v,expandable:{expandedRowRender:function(n){return Object(f.b)(h.a,{record:n})},expandRowByClick:!0},isSelection:!1,pagination:!u,pageSize:H,onChange:function(n){D(Object(s.k)(n.pageSize))},summary:function(n){return m||Object(f.b)(g.a,{loaiHoaDonId:j.b.hoaDonBan.id,pageData:n})},inputOptions:{onDeleteItem:function(n){D(Object(s.f)(n))},onActiveItemMuaCongNo:function(n,a){return M.apply(this,arguments)}}}),Object(f.b)(O.a,{})]})}}}]);