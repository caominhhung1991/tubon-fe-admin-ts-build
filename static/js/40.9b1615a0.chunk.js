(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[40],{961:function(a,t,e){"use strict";e.r(t);var n=e(13),c=e(0),i=e.n(c),b=e(54),d=e(683),o=e(224),s=e(29),l=e(684),r=e(694),u=e(682),g=e(242),j=e(681),O=e(355),m=e(741),f=e(340),v=e(64),h=e(58),p=e(65),H=e(342),N=e(16);var C=function(a){var t=Object(b.b)();return Object(N.b)(N.a,{children:Object(N.b)(d.a,{header:Object(N.b)("div",{className:"font-weight-bold",children:Object(N.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(N.b)("div",{className:"form-input-aside",style:{padding:"5px"}}),footer:Object(N.b)("div",{children:Object(N.b)(h.a,{icon:Object(N.b)(p.a,{}),onClick:function(){t(Object(H.b)({tagPageId:s.d.matHangModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},I=s.d.matHangModal;t.default=function(){var a,t,e=Object(b.b)(),c=Object(b.c)((function(a){return a.matHang})),s=c.tabsData,h=c.loading,p=c.matHangs,T=c.pageSize,M=Object(j.a)({Instance:g.a,onPending:O.d,addSelectedId:O.a}),S=Object(b.c)((function(a){var t;return null===(t=a.tagsPage)||void 0===t?void 0:t[I]})),w=Object(b.c)((function(a){return a.account})).accountData,x=Object(b.c)((function(a){return a.nhomMatHang})).nhomMatHangFilter,k=null===w||void 0===w||null===(a=w.paths)||void 0===a||null===(t=a.matHang)||void 0===t?void 0:t.edit;var y=i.a.useMemo((function(){var a=r.b.getTableColumns();return Object(n.a)(Object(n.a)({},r.b),{},{getTableColumns:function(){return a.map((function(a){return"tenNhomMatHang"===a.id?Object(n.a)(Object(n.a)({},a),x||{}):a}))}})}),[x]);return Object(N.c)("div",{className:"matHang-page",css:l.a,children:[Object(N.b)(d.b,{className:"tabs",options:s,activeKey:"all",onTabClick:function(a){if("add"===a){if(!k)return Object(v.f)();var t=new g.a;e(o.c({modalId:I,data:t.initData}))}else"aside"===a?e(Object(H.b)({tagPageId:I})):"taiExcel"===a&&e(Object(f.b)({tableId:I,constants:r.b,fileSheet:"matHang",fileName:"matHang"}))}}),Object(N.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[S&&Object(N.b)(C,{}),Object(N.b)("div",{className:"aside-main",children:Object(N.b)(u.a,{pagination:!0,constants:y,actions:M,datas:p,loading:h,modalId:I,isSelection:!0,isEdit:k,pageSize:T,onChange:function(a){e(Object(O.e)(a.pageSize))},expandable:{expandedRowRender:function(a){return Object(N.b)("div",{children:Object(N.b)(u.a,{constants:r.a,datas:a.giaNCCs||{}})})}}})})]}),Object(N.b)(m.a,{})]})}}}]);