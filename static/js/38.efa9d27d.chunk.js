(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[38],{1029:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),i=n(9),o=n(40),r=n(0),l=n.n(r),d=n(56),s=n(713),b=n(64),u=n(716),f=n(714),O=n(243),j=n(7),h=n(33),p=n(14),g=n(869),m=n(59),v=n(149),x=n(65),y=n(414),S=n(25);var T=function(e){var t=e.dateTimePicker,n=Object(d.b)(),a=Object(d.c)((function(e){return e.inVaGiaoHang})).openDaThanhToan;return Object(S.b)(S.a,{children:Object(S.b)(s.a,{header:Object(S.b)("div",{className:"font-weight-bold",children:Object(S.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(S.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(S.b)("div",{children:(null===t||void 0===t?void 0:t.getMonthRender())||null}),Object(S.b)("div",{children:Object(S.b)(m.a,{type:a?"primary":"dashed",danger:a,onClick:function(){n(Object(y.d)(!a))},icon:Object(S.b)(v.a,{}),children:"Xem c\xe1c \u0111\u01a1n \u0111\xe3 thanh to\xe1n"})})]}),footer:Object(S.b)("div",{children:Object(S.b)(m.a,{icon:Object(S.b)(x.a,{}),onClick:function(){n(Object(j.toggleAside)({tagPageId:b.c.inVaGiaoHangModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},w=n(8),k=n(725),M=n(771),D={thoiGianIn:{id:"thoiGianIn",name:"Th\u1eddi gian in",width:100,className:"text-small",isSearch:!0,align:"center"},getTableColumns:function(){return[k.a.daThanhToan,Object(w.a)({},k.a.ngayGiao),Object(w.a)(Object(w.a)({},M.a.tenKhachHang),{},{width:200}),this.thoiGianIn,b.e.tenTrangThai]},getInputFields:function(){return[]},getExcelFields:function(){return[j.constants.active]}},C=n(72),I=n(31),N=n.n(I),H=n(13),A=n(333),R=n(366),z=n(216),V=n(159),G=n(123),K=n(728),F={getTableColumns:function(){return[Object(w.a)(Object(w.a)({},j.constants.stt),{},{fixed:!1}),Object(w.a)(Object(w.a)({},z.a.tenMatHang),{},{width:120,fixed:!1}),Object(w.a)(Object(w.a)({},V.a.tenNhomMatHang),{},{align:"center"}),K.a.soLuongThuc,Object(w.a)(Object(w.a)({},G.a.tenDonViTinh),{},{align:"center"})]},getInputFields:function(){return[]}},P=function(e){var t=e.donHangXuatData,n=Object(A.useForm)(),a=Object(o.a)(n,1)[0],c=l.a.useMemo((function(){return(null===t||void 0===t?void 0:t.chiTietDonHangs)?Object.values((null===t||void 0===t?void 0:t.chiTietDonHangs)||{}).map((function(e){var t=e.soLuongThuc,n=void 0===t?0:t,a=e.giaBanMatHang,c=void 0===a?0:a,i=e.vat,o=void 0===i?0:i,r=Math.round(n*c),l=Math.round(r+r*o/100),d=Math.round(c+c*o/100);return Object(w.a)(Object(w.a)({},e),{},{thanhTien:r,giaBanMatHangSauVAT:d,thanhTienSauVAT:l})})).reduce((function(e,t){return Object(w.a)(Object(w.a)({},e),{},Object(H.a)({},t.id,t))}),{}):{}}),[t]);return Object(S.b)(S.a,{children:Object(S.b)(f.a,{onCallbackDataSource:function(e){return Object(R.a)("tenMatHang",e)},rowClassName:function(e){return(null===e||void 0===e?void 0:e.matHangConThieu)?"bg-blue-light":""},constants:F,datas:c,form:a,pageSize:50})})},X="inVaGiaoModal";t.default=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.danhSachDHX})),n=t.loading,a=t.pageSize,r=t.danhSachDHXs,m=Object(d.c)((function(e){return e.inVaGiaoHang})),v=m.tabsData,x=m.inVaGiaoHangs,w=m.openDaThanhToan,k=Object(d.c)((function(e){return e.table})).selectedRows,M=Object(d.c)((function(e){var t;return null===(t=e.tagsPage)||void 0===t?void 0:t[X]})),I=Object(j.useDatePicker)(),H=Object(o.a)(I,2),A=H[0],R=H[1];function z(){return(z=Object(i.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=null===k||void 0===k?void 0:k[X]){t.next=3;break}return t.abrupt("return",Object(h.h)("Ch\u01b0a ch\u1ecdn \u0111\u01a1n h\xe0ng"));case 3:e(Object(g.a)(a,n)),e(Object(j.closeModal)({modalId:b.d.inDonHang})),e(Object(y.c)(a,A));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l.a.useEffect((function(){return e(Object(O.g)(A)),e(Object(y.b)(A)),function(){return Object(p.j)("danhSachDHX")}}),[A]);var V=l.a.useMemo((function(){return e(Object(O.e)(r))}),[r,x,w]);return Object(S.c)("div",{className:"danhSachDHX-page",css:u.a,children:[Object(S.b)(s.b,{className:"tabs",options:v,activeKey:M?"aside":"",onTabClick:function(t){"aside"===t?e(Object(j.toggleAside)({tagPageId:X})):"print"===t&&e(Object(j.openModal)({modalId:b.d.inDonHang}))}}),Object(S.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[M&&Object(S.b)(T,{dateTimePicker:R}),Object(S.b)("div",{className:"aside-main",children:Object(S.b)(f.a,{constants:D,onCallbackDataSource:function(e){return Object(C.orderBy)(e,["daThanhToan","ngayGiao"],"desc")},datas:V,loading:n,modalId:X,expandable:{expandedRowRender:function(e){return Object(S.b)(P,{donHangXuatData:e})}},isSelection:!0,pagination:!0,pageSize:a,onChange:function(t){return e(Object(O.m)(t.pageSize))},rowClassName:function(e){return N()().startOf("day").valueOf()===N()(e.ngayGiao,"L").startOf("day").valueOf()?"bg-green-light":""}})})]}),Object(S.b)(j.PrintModal,{modalId:b.d.inDonHang,title:"In \u0110\u01a1n \u0110\u1eb7t H\xe0ng",onPrint:function(e){return z.apply(this,arguments)}})]})}},713:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return R}));var a=n(8),c=n(717),i=n(0),o=n(442),r=n(482),l=n(25),d=["options","header","body","footer"];var s=function(e){var t=e.options,n=e.header,i=e.body,s=e.footer,b=Object(c.a)(e,d);return Object(l.c)("div",{css:u,children:[n&&Object(l.c)("div",{className:"header",children:[n,Object(l.b)(o.a,{})]}),i&&Object(l.b)("div",{style:{overflow:"scroll"},children:i}),Object(l.b)(r.a,Object(a.a)(Object(a.a)({},b),{},{treeData:t,blockNode:!0})),s&&Object(l.c)("div",{className:"footer",children:[Object(l.b)(o.a,{}),s]})]})},b=s,u={name:"1dz1mat",styles:"padding:0px;background-color:#ffffff;margin-right:8px;width:300px;height:100%;display:flex;flex-direction:column;.header,.footer{display:flex;flex-direction:column;align-items:center;}.ant-divider-horizontal{margin:5px 0;}.ant-tree{margin-top:12px;flex:1;.ant-tree-node-content-wrapper{line-height:28px;}}"},f=n(5),O=n.n(f),j=n(13),h=n(9),p=n(40),g=n(7),m=n(734),v=n(162),x=["options"];var y=function(e){var t=e.options,n=Object(c.a)(e,x);return Object(l.b)("div",{css:S,children:Object(l.b)(v.a.Group,Object(a.a)(Object(a.a)({buttonStyle:"solid"},n),{},{children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.b)(v.a.Button,{style:{width:"calc(100% / ".concat(t.length,")")},value:e.value,children:e.label},e.value)}))}))})},S={name:"gsfen1",styles:"padding:8px;background-color:#ffffff;.ant-radio-group{width:100%;display:flex;}.ant-radio-button-wrapper{height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;}.ant-radio-button{}"},T=n(59),w=n(333),k=["children","onSearch"];var M=Object.assign((function(e){var t=e.children,n=e.onSearch,i=Object(c.a)(e,k),o=Object(w.useForm)(),r=Object(p.a)(o,1)[0],d=function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.validateFields();case 2:(t=e.sent)&&n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.b)("div",{css:C,children:Object(l.c)(g.MyForm,Object(a.a)(Object(a.a)({},i),{},{form:r,layout:"inline",children:[t,Object(l.c)(g.MyForm.Item,{children:[Object(l.b)(T.a,{type:"primary",onClick:d,children:"T\xecm Ki\u1ebfm"}),Object(l.b)(T.a,{onClick:function(){return r.resetFields()},children:"X\xf3a"})]})]}))})}),{Item:g.MyForm.Item}),D=M,C={name:"1k13qf8",styles:"padding:10px;background-color:#ffffff;.ant-form-item{margin-bottom:10px;}"},I=n(225),N=n(715),H=["options","children"];var A=I.a.TabPane,R=Object.assign((function(e){var t=e.options,n=e.children,i=Object(c.a)(e,H);return Object(l.b)(I.a,Object(a.a)(Object(a.a)({},i),{},{css:V,children:t?t.map((function(e){var t=e.label,n=e.value,c=e.Icon;return Object(N.a)(A,Object(a.a)(Object(a.a)({},e),{},{tab:Object(l.c)("span",{children:[c&&Object(l.b)(c,{})," ",t]}),key:n}))})):n}))}),I.a),z=R,V={name:"eb6il2",styles:"background-color:#fff;padding:0 20px;box-shadow:0 10px 10px -10px rgb(0 0 0 / 10%);height:40px;.ant-tabs-nav{margin:0;}.ant-tabs-tab{padding:9px 0;&+.ant-tabs-tab{margin:0 0 0 22px;}}"},G=n(716),K=function(e,t){var n=e.pageApi,c=e.pageParams,o=e.searchRender,r=e.tableOptions,d=e.tableRender,s=e.asideKey,u=e.asideData,f=e.asideValue,v=e.asideTreeItemRender,x=e.radioCardsData,S=e.radioCardsValue,T=e.tabsData,w=e.tabsValue,k=Object(m.a)({pageSize:20,pageNum:1,total:0,data:[]}),M=Object(p.a)(k,2),C=M[0],I=M[1],N=Object(i.useState)(f),H=Object(p.a)(N,2),A=H[0],R=H[1];Object(i.useEffect)((function(){u&&R(u[0].key)}),[u]);var V=Object(i.useCallback)(Object(h.a)(O.a.mark((function e(){var t,i,o,r=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:{},!s||A){e.next=3;break}return e.abrupt("return");case 3:if(!n){e.next=9;break}return i=Object(a.a)(Object(a.a)(Object(a.a)({},t),c),{},Object(j.a)({pageSize:C.pageSize,pageNum:C.pageNum},s,A)),e.next=7,n(i);case 7:(o=e.sent).status&&I({total:o.result.total,data:o.result.data});case 9:case"end":return e.stop()}}),e)}))),[n,c,C.pageSize,C.pageNum,s,A]);Object(i.useEffect)((function(){V()}),[V]);return Object(i.useImperativeHandle)(t,(function(){return{setAsideCheckedKey:R,load:function(e){return V(e)}}})),Object(l.c)("div",{css:G.a,children:[T&&Object(l.b)(z,{className:"tabs",options:T,defaultValue:T[0].value||w}),Object(l.c)("div",{className:"tabs-main",children:[u&&Object(l.b)(b,{options:u,selectedKeys:A?[A]:void 0,titleRender:v,onSelect:function(e){var t=Object(p.a)(e,1)[0];R(t)}}),Object(l.c)("div",{className:"aside-main",children:[o&&Object(l.b)(D,{className:"search",onSearch:function(e){V(e)},children:o}),x&&Object(l.b)(y,{options:x,defaultValue:S||x[0].value}),r&&Object(l.b)("div",{className:"table",children:Object(l.b)(g.MyTable,{height:"100%",dataSource:C.data,columns:r,pagination:{current:C.pageNum,pageSize:C.pageSize,total:C.total,onChange:function(e,t){I({pageNum:e}),t&&I({pageSize:t})}},children:null===d||void 0===d?void 0:d(C.data)})})]})]})]})},F=Object(i.forwardRef)(K);F.MySearch=D,F.MyTable=g.MyTable,F.MyAside=b},714:function(e,t,n){"use strict";var a=n(40),c=n(8),i=n(717),o=n(0),r=n.n(o),l=n(56),d=n(7),s=n(33),b=n(25),u=["modalId","constants","actions","datas","loading","isSelection","form","rowSelection","summary","isEdit","onBlur","inputOptions"];t.a=function(e){var t=e.modalId,n=e.constants,o=e.actions,f=e.datas,O=e.loading,j=e.isSelection,h=e.form,p=e.rowSelection,g=e.summary,m=e.isEdit,v=e.onBlur,x=e.inputOptions,y=Object(i.a)(e,u),S=Object(l.b)(),T=Object(l.c)((function(e){return e.table})).selectedRowKeys,w=Object(l.c)((function(e){return e.hideColumns})),k=null===w||void 0===w?void 0:w[t||""],M=r.a.useMemo((function(){var e={};return j?e.rowSelection=Object(c.a)({selectedRowKeys:T[t||""]||[],onChange:function(e,n){S(Object(d.onChangeSelectedRowKeys)({tableId:t,selectedRowKeys:e,selectedRows:n}))}},p):delete e.rowSelection,e}),[j,T]);function D(e,t,n){if(!m)return Object(s.l)();var a=n||"active",i=Object(c.a)(Object(c.a)({},e),{},{active:t,name:a});(null===o||void 0===o?void 0:o.onActiveAsync)&&S(null===o||void 0===o?void 0:o.onActiveAsync(i))}function C(e){if(!m)return Object(s.l)();(null===o||void 0===o?void 0:o.onDeleteAsync)&&S(o.onDeleteAsync(e))}var I=Object(d.useSearchText)(),N=Object(a.a)(I,3),H=N[0],A=N[1],R=N[2],z=r.a.useMemo((function(){var e=Object(d.getTableColumns)(n,{onActiveItem:D,onDeleteItem:C,searchText:H,searchInput:R,setSearchText:A,modalId:t,isEdit:m,constants:n,form:h,onBlur:v,inputOptions:x});return k&&(e=e.filter((function(e){return!(null===k||void 0===k?void 0:k[e.id])}))),e}),[H,k,n,x]),V=r.a.useMemo((function(){var t=Object.values(f||{});return(null===e||void 0===e?void 0:e.onCallbackDataSource)&&(t=e.onCallbackDataSource(t)),t}),[f]);return Object(b.b)("div",{className:"table",children:Object(b.b)(d.MyTable,Object(c.a)(Object(c.a)(Object(c.a)({},M),y),{},{rowKey:"id",height:"100%",loading:O,columns:z,dataSource:V,summary:g||null}))})}},716:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={name:"nlddxj",styles:"display:flex;flex-direction:column;.tabs-main{flex:1;display:flex;overflow:hidden;}.search{margin-bottom:10px;}.aside-main{display:flex;flex:1;overflow:hidden;flex-direction:column;}.table{flex:1;overflow:hidden;.ant-table-wrapper,.ant-spin-nested-loading,.ant-spin-container,.ant-table-container{height:100%;}.ant-spin-container{overflow:hidden;display:flex;flex-direction:column;.ant-table{flex:1;overflow:hidden;border-bottom:1px solid #eee;.ant-table-container{display:flex;flex-direction:column;.ant-table-body{flex:1;}}}.ant-pagination{margin:7px 0 5px 0;padding:0 10px;}}}"}},734:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(40),c=n(0);function i(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),i=n[0],o=n[1];return[i,function(e){return o((function(t){return Object.assign({},t,e)}))}]}}}]);