(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[24],{1034:function(e,n,t){"use strict";t.r(n);var a=t(13),i=t(21),c=t(7),o=t(41),r=t(0),d=t.n(r),l=t(57),u=t(367),s=t(365),b=t(237),g=t(722),h=t(30),m=t(725),f=t(8),v=t(378),O=t(739),j=t(36),T={phanTram:{id:"phanTram",name:"%",width:50,className:"text-small font-weight-bold text-danger",align:"right"},getTableColumns:function(){return[h.a.stt,Object(c.a)(Object(c.a)({},v.a.tenCongTy),{},{fixed:!0}),Object(c.a)(Object(c.a)({},O.a.tongTienDonHang),{},{width:110,sorter:Object(f.sortByNumber)("tongTienDonHang")}),this.phanTram]},getInputFields:function(){return[]},getExcelFields:function(){return[h.a.stt,v.a.tenCongTy,O.a.tongTienDonHang].concat(Object(i.a)(Object(j.b)()))}},p=t(723),N=t(468),y=t(721),D=t(431),w=t(60),H=t(65),x=t(17);var S=function(e){var n,t=e.dateTimePicker,a=Object(l.b)();return Object(x.b)(x.a,{children:Object(x.b)(g.a,{header:Object(x.b)("div",{className:"font-weight-bold",children:Object(x.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(x.b)("div",{className:"form-input-aside",style:{padding:"5px"},children:Object(x.b)("div",{children:(null===t||void 0===t||null===(n=t.getMonthRender)||void 0===n?void 0:n.call(t))||null})}),footer:Object(x.b)("div",{children:Object(x.b)(w.a,{icon:Object(x.b)(H.a,{}),onClick:function(){a(Object(s.b)({tagPageId:h.d.congNoKhachHangTuBonModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},M=t(728),C=t(391),k=t(729),I=h.d.congNoKhachHangTuBonModal;var B=function(e){var n=e.pageData,t=Object(l.c)((function(e){return e.hideColumns})),o=null===t||void 0===t?void 0:t[I||""],r=d.a.useMemo((function(){var e=[h.a.stt,v.a.tenCongTy],n=[O.a.tongTienDonHang];return[{id:0,colSpan:2+e.reduce((function(e,n){var t=n.id;return e+((null===o||void 0===o?void 0:o[t])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:n.reduce((function(e,n){var t=n.id;return e+((null===o||void 0===o?void 0:o[t])?0:1)}),0),cellClassName:"text-right font-weight-bold text-small text-danger",render:function(e){return Object(f.formatNumber)(e)}},{id:2,colSpan:1}].concat(Object(i.a)(Object(j.c)(3)))}),[o]),u=d.a.useMemo((function(){return n.reduce((function(e,n){var t=e.tongTienDonHang+(n.tongTienDonHang||0),i=j.a.reduce((function(t,i){var o=((null===e||void 0===e?void 0:e[i])||0)+((null===n||void 0===n?void 0:n[i])||0);return Object(c.a)(Object(c.a)({},t),{},Object(a.a)({},i,o))}),{});return Object(c.a)(Object(c.a)(Object(c.a)({},e),i),{},{tongTienDonHang:t})}),{tong:"T\u1ed5ng ti\u1ec1n",tongTienDonHang:0})}),[n]),s=d.a.useMemo((function(){return["tong","tongTienDonHang"].concat(Object(i.a)(j.a)).map((function(e,n){return Object(a.a)({},n,u[e])}))}),[u]);return Object(x.b)(k.a,{columns:r,dataSource:s})},Y=h.d.congNoKhachHangTuBonModal;n.default=function(){var e,n,t=Object(l.b)(),r=Object(M.b)(),h=Object(o.a)(r,2),f=h[0],v=h[1],O=Object(l.c)((function(e){return e.congNoKhachHangTuBon})),w=O.tabsData,H=O.congNoKhachHangTuBonLoading,k=O.pageSize,I=O.congNoKhachHangTuBons,R=Object(l.c)((function(e){var n;return null===(n=e.tagsPage)||void 0===n?void 0:n[Y]})),K=Object(l.c)((function(e){return e.danhSachDHX})).danhSachDHXDaGiaos,E=Object(l.c)((function(e){return e.congTy})).congTys,F=Object(l.c)((function(e){return e.account})).accountData,P=null===F||void 0===F||null===(e=F.paths)||void 0===e||null===(n=e.congNoKhachHangTuBon)||void 0===n?void 0:n.edit,A=Object(y.a)({Instance:N.a,onPending:D.d,addSelectedId:D.a,isEdit:P});d.a.useEffect((function(){Object.values(E).length>0&&t(Object(C.f)(f))}),[f,E]),d.a.useEffect((function(){t(Object(D.c)())}),[K]);var q=d.a.useMemo((function(){var e=T.getTableColumns();return Object(c.a)(Object(c.a)({},T),{},{getTableColumns:function(){return[].concat(Object(i.a)(e),Object(i.a)(Object(j.b)()))}})}),[T]),z=d.a.useMemo((function(){var e=Object.values(I).reduce((function(e,n){return e+((null===n||void 0===n?void 0:n.tongTienDonHang)||0)}),0);return console.log(I),Object.values(I).reduce((function(n,t){var i=Math.round(((null===t||void 0===t?void 0:t.tongTienDonHang)||0)/e*1e4)/100;return Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},t.id,Object(c.a)(Object(c.a)({},t),{},{phanTram:i})))}),{})}),[I]);return Object(x.c)("div",{className:"congNoKhachHangTuBon-page",css:m.a,children:[Object(x.b)(g.b,{className:"tabs",options:w,activeKey:R?"aside":"",onTabClick:function(e){if("add"===e){if(!P)return Object(j.j)();var n=new N.a;t(Object(b.c)({modalId:Y,data:n.initData}))}else"aside"===e?t(Object(s.b)({tagPageId:Y})):"taiExcel"===e&&t(Object(u.b)({tableId:Y,constants:T,fileSheet:"congNoKhachHangTuBonSheet",fileName:"congNoKhachHangTuBonName"}))}}),Object(x.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[R&&Object(x.b)(S,{dateTimePicker:v}),Object(x.b)("div",{className:"aside-main",children:Object(x.b)(p.a,{isEdit:P,constants:q,actions:A,datas:z,loading:H,modalId:Y,expandable:{expandedRowRender:function(e){return Object(x.b)("div",{children:e.id})},expandRowByClick:!1},isSelection:!0,pagination:!0,pageSize:k,onChange:function(e){t(Object(D.e)(e.pageSize))},onRow:function(e){return{onClick:function(){P&&t(Object(b.c)({modalId:Y,data:e}))}}},summary:function(e){return Object(x.b)(B,{pageData:e})}})})]})]})}},724:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),i=(t(332),t(161)),c=(t(80),t(215),t(125),t(238),t(331),t(366),function(e,n){var t=arguments;if(null==n||!i.d.call(n,"css"))return a.createElement.apply(void 0,t);var c=t.length,o=new Array(c);o[0]=i.a,o[1]=Object(i.c)(e,n);for(var r=2;r<c;r++)o[r]=t[r];return a.createElement.apply(null,o)})},726:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(41),i=t(0),c=t.n(i),o=t(33),r=t.n(o),d=t(484),l=t(224),u=t(73),s=t(36),b=t(241),g=t(17),h=function(e){var n=e||{},t=n.disabledDate,o=n.editabledDate,u=n.className,h=n.defaultTime,m=void 0===h?r()():h,f=n.disabled,v=Object(i.useState)(m),O=Object(a.a)(v,2),j=O[0],T=O[1],p=Object(i.useState)((function(){return Object(s.e)(m)})),N=Object(a.a)(p,2),y=N[0],D=N[1],w=c.a.useMemo((function(){return null===o||void 0===o?void 0:o(j)}),[j,o]);function H(e){var n=Object(s.e)(e);D(n),T(e)}var x=function(e){var n=e.label,a=e.format,i=e.width,c=e.picker;return Object(g.b)(d.a.Item,{label:n,children:Object(g.b)(l.a,{locale:b.a,style:{width:i},format:a,picker:c,value:j,onChange:H,disabledDate:t,disabled:f,className:u})})};return[j,{getDayRender:function(){return x({picker:"date",label:"Ng\xe0y: ",format:"DD/MM/YY",width:"110px"})},getMonthRender:function(){return x({picker:"month",label:"Th\xe1ng: ",format:"MM/YYYY",width:"110px"})},getYearRender:function(){return x({picker:"year",label:"N\u0103m: ",format:"YYYY",width:"110px"})},isEditabledDate:w,selectedTime:j,yearAndDayOfYear:y,getDayOfAll:function(){return null===y||void 0===y?void 0:y.dayOfAll},onUpdate:H}]};h.defaultProps={disabledDate:u.noop,width:"105px",format:"DD/MM/YY",className:"",defaultTime:r()(),disabled:!1};var m=h},728:function(e,n,t){"use strict";var a=t(721);t.d(n,"a",(function(){return a.a}));var i=t(726);t.d(n,"b",(function(){return i.a}))},729:function(e,n,t){"use strict";t(0);var a=t(483),i=t(17),c=a.a.Summary,o=c.Row,r=c.Cell;n.a=function(e){var n,t=e.columns,a=e.dataSource;return Object(i.b)(o,{children:null===t||void 0===t||null===(n=t.map)||void 0===n?void 0:n.call(t,(function(e,n){var t=null===e||void 0===e?void 0:e.id,c=(null===e||void 0===e?void 0:e.colSpan)||0,o=(null===e||void 0===e?void 0:e.cellClassName)||"",d=(null===e||void 0===e?void 0:e.valueStyle)||{},l=(null===e||void 0===e?void 0:e.valueClassName)||"",u=null===e||void 0===e?void 0:e.render,s=(null===a||void 0===a?void 0:a[n])||{},b=(null===s||void 0===s?void 0:s[t])||"";return u&&(b=u(b,s,n)),Object(i.b)(r,{index:n,colSpan:c,className:o,children:Object(i.b)("div",{style:d,className:l,children:b})},t)}))})}},739:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(30),i=t(8),c=t(384),o={donHangId:{id:"donHangId",name:"M\xe3 \u0110H",width:100,className:"text-small",isSearch:!0,align:"center",sorter:Object(i.sortByText)("donHangId"),form:{type:"input",innerProps:{disabled:!0}}},ngayDat:{id:"ngayDat",name:"Ng\xe0y \u0111\u1eb7t",width:100,className:"text-small",isSearch:!0,align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayGiao:{id:"ngayGiao",name:"Ng\xe0y giao",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(i.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayNhan:{id:"ngayNhan",name:"Ng\xe0y nh\u1eadn",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(i.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},tongTienMatHang:{id:"tongTienMatHang",name:"T\u1ed5ng ti\u1ec1n m\u1eb7t h\xe0ng",width:100,className:"text-small font-weight-bold",align:"right",render:i.numberRender},tongTienMatHangTra:{id:"tongTienMatHangTra",name:"T\u1ed5ng ti\u1ec1n tr\u1ea3",width:100,className:"text-small font-weight-bold",align:"right",render:i.numberRender},tongTienDonHang:{id:"tongTienDonHang",name:"T\u1ed5ng ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:i.numberRender},daThanhToan:{id:"daThanhToan",name:"\u0110\xe3 giao",width:90,className:"text-small",filters:i.trueFalseFilter.filters,onFilter:i.trueFalseFilter.onFilter("daThanhToan"),align:"center",render:Object(c.a)("daThanhToan")},getTableColumns:function(){return[a.a.stt,a.a.active,a.a.editRow]},getInputFields:function(){return[]},getExcelFields:function(){return[a.a.active]}}}}]);