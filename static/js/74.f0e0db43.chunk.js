(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[74],{1120:function(a,e,n){"use strict";n.r(e);var t=n(0),i=n.n(t),o=n(56),r=n(7),c=n(753),s=n(61),d=n(754),l=n(926),g=n(752),u=n(193),m=n(4),b=n.n(m),h=n(6),f=n(9),p=n(39),T=n(117),j=n(87),O=n(423),y=n(767),H={getTableColumns:function(){return[Object(h.a)(Object(h.a)({},r.constants.stt),{},{fixed:!1}),Object(h.a)(Object(h.a)({},y.a.maDonHang),{},{className:"text-small font-weight-bold"}),Object(h.a)(Object(h.a)({},O.a.ngay),{},{name:"Ng\xe0y",className:"text-small"}),O.a.soLuong,j.a.tenDonViTinh,Object(h.a)(Object(h.a)({},T.a.vat),{},{render:function(a){return a+"%"}})]}},v=n(455),x=n(23);var w=function(a){var e=a.record,n=Object(o.b)(),t=i.a.useState({}),r=Object(p.a)(t,2),c=r[0],s=r[1];function d(){return(d=Object(f.a)(b.a.mark((function a(){var t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(Object(v.b)(null===e||void 0===e?void 0:e.id));case 2:t=a.sent,t=Object.values(t||{}).map((function(a){var e=a.ngayGiao,n=a.ngayHoaDon,t=a.maDonHang,i=a.donHangId;return Object(h.a)(Object(h.a)({},a),{},{ngay:e||n,maDonHang:t||i})})),console.log(t),s(t);case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return i.a.useEffect((function(){!function(){d.apply(this,arguments)}()}),[e]),Object(x.b)(g.a,{rowKey:"donHangId",constants:H,datas:c})},N=n(930),D=s.c.matHangVATModal;e.default=function(){var a,e,n=Object(o.b)(),t=Object(o.c)((function(a){return a.matHangVAT})),i=t.tabsData,m=t.matHangVATLoading,b=t.pageSize,h=t.matHangVATs,f=Object(o.c)((function(a){var e;return null===(e=a.tagsPage)||void 0===e?void 0:e[D]})),p=Object(o.c)((function(a){return a.account})).accountData,T=null===p||void 0===p||null===(a=p.paths)||void 0===a||null===(e=a.matHangVAT)||void 0===e?void 0:e.edit;return Object(x.c)("div",{className:"matHangVAT-page",css:d.a,children:[Object(x.b)(c.b,{className:"tabs",options:i,activeKey:f?"aside":"",onTabClick:function(a){"add"===a?n(Object(r.openModal)({modalId:s.c.hoaDonXuatVATModal})):"taiExcel"===a&&n(Object(r.downloadExcel)({tableId:D,constants:l.a,fileSheet:"matHangVATSheet",fileName:"matHangVATName"}))}}),Object(x.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(x.b)("div",{className:"aside-main",children:Object(x.b)(g.a,{isEdit:T,constants:l.a,datas:h,loading:m,modalId:D,expandable:{expandedRowRender:function(a){return Object(x.b)(w,{record:a})},expandedRowClassName:function(a,e,n){return"bg-gold"},fixed:!0},isSelection:!1,pagination:!0,pageSize:b,onChange:function(a){return n(Object(u.e)(a.pageSize))}})})}),Object(x.b)(x.a,{children:Object(x.b)(N.a,{})})]})}},767:function(a,e,n){"use strict";n.d(e,"a",(function(){return o}));var t=n(7),i=n(257),o={donHangId:{id:"donHangId",name:"M\xe3 \u0110H",width:105,className:"text-small",isSearch:!0,align:"center",sorter:Object(t.sortByText)("donHangId"),form:{type:"input",innerProps:{disabled:!0}}},maDonHang:{id:"maDonHang",name:"M\xe3 \u0110H",width:100,className:"text-small",isSearch:!0,align:"center"},ngayDat:{id:"ngayDat",name:"Ng\xe0y \u0111\u1eb7t",width:100,className:"text-small",isSearch:!0,align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayGiao:{id:"ngayGiao",name:"Ng\xe0y giao",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(t.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayNhan:{id:"ngayNhan",name:"Ng\xe0y nh\u1eadn",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(t.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},tongTienMatHang:{id:"tongTienMatHang",name:"T\u1ed5ng ti\u1ec1n m\u1eb7t h\xe0ng",width:100,className:"text-small font-weight-bold",align:"right",render:t.numberRender},tongTienMatHangTra:{id:"tongTienMatHangTra",name:"T\u1ed5ng ti\u1ec1n tr\u1ea3",width:100,className:"text-small font-weight-bold",align:"right",render:t.numberRender},tongTienDonHang:{id:"tongTienDonHang",name:"T\u1ed5ng ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:t.numberRender},daThanhToan:{id:"daThanhToan",name:"\u0110\xe3 giao",width:90,className:"text-small",filters:t.trueFalseFilter.filters,onFilter:t.trueFalseFilter.onFilter("daThanhToan"),align:"center",render:Object(i.a)("DaThanhToan")},getTableColumns:function(){return[t.constants.stt,t.constants.active,t.constants.editRow]},getInputFields:function(){return[]},getExcelFields:function(){return[t.constants.active]}}}}]);