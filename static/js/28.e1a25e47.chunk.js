(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[28],{1125:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n(17),i=n(6),o=n(39),r=n(0),l=n.n(r),d=n(60),s=n(64),u=n(7),b=n(777),g=n(65),f=n(778),m=n(420),h=n(791),O=n(26),j={phanTram:{id:"phanTram",name:"%",width:50,className:"text-small font-weight-bold text-danger",align:"right"},getTableColumns:function(){return[u.constants.stt,Object(i.a)(Object(i.a)({},m.a.tenCongTy),{},{width:150,fixed:!0}),Object(i.a)(Object(i.a)({},h.a.tongTienDonHang),{},{width:110,fixed:!0,sorter:Object(u.sortByNumber)("tongTienDonHang")}),Object(i.a)(Object(i.a)({},this.phanTram),{},{fixed:!0})]},getInputFields:function(){return[]},getExcelFields:function(){return[u.constants.stt,m.a.tenCongTy,h.a.tongTienDonHang].concat(Object(c.a)(Object(O.d)()))}},v=n(776),p=n(483),y=n(73),x=n(24);var T=function(e){var t,n=e.dateTimePicker,a=Object(d.b)();return Object(x.b)(x.a,{children:Object(x.b)(b.a,{header:Object(x.b)("div",{className:"font-weight-bold",children:Object(x.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(x.b)("div",{className:"form-input-aside",style:{padding:"5px"},children:Object(x.b)("div",{children:(null===n||void 0===n||null===(t=n.getMonthRender)||void 0===t?void 0:t.call(n))||null})}),footer:Object(x.b)("div",{children:Object(x.b)(s.a,{icon:Object(x.b)(y.a,{}),onClick:function(){a(Object(u.toggleAside)({tagPageId:g.c.congNoKhachHangTuBonModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},w=n(281),N=n(782),S=g.c.congNoKhachHangTuBonModal;var C=function(e){var t=e.pageData,n=Object(d.c)((function(e){return e.hideColumns})),o=null===n||void 0===n?void 0:n[S||""],r=l.a.useMemo((function(){var e=[u.constants.stt,m.a.tenCongTy],t=[h.a.tongTienDonHang];return[{id:0,colSpan:2+e.reduce((function(e,t){var n=t.id;return e+((null===o||void 0===o?void 0:o[n])?0:1)}),0),cellClassName:"text-center font-weight-bold text-danger"},{id:1,colSpan:1+t.reduce((function(e,t){var n=t.id;return e+((null===o||void 0===o?void 0:o[n])?0:1)}),0),cellClassName:"text-right font-weight-bold text-small text-danger",render:function(e){return Object(u.formatNumber)(e)}}].concat(Object(c.a)(Object(O.e)(2)))}),[o]),s=l.a.useMemo((function(){return t.reduce((function(e,t){var n=e.tongTienDonHang+(t.tongTienDonHang||0),c=O.c.reduce((function(n,c){var o=((null===e||void 0===e?void 0:e[c])||0)+((null===t||void 0===t?void 0:t[c])||0);return Object(i.a)(Object(i.a)({},n),{},Object(a.a)({},c,o))}),{});return Object(i.a)(Object(i.a)(Object(i.a)({},e),c),{},{tongTienDonHang:n})}),{tong:"T\u1ed5ng ti\u1ec1n",tongTienDonHang:0})}),[t]),b=l.a.useMemo((function(){return["tong","tongTienDonHang"].concat(Object(c.a)(O.c.map((function(e){return"".concat(e)})))).map((function(e,t){return Object(a.a)({},t,s[e])}))}),[s]);return Object(x.b)(N.a,{columns:r,dataSource:b})},H=g.c.congNoKhachHangTuBonModal;t.default=function(){var e=Object(d.b)(),t=Object(u.useDatePicker)(),n=Object(o.a)(t,2),r=n[0],g=n[1],m=Object(d.c)((function(e){return e.congNoKhachHangTuBon})),h=m.tabsData,y=m.pageSize,N=m.congNoKhachHangTuBons,S=Object(d.c)((function(e){var t;return null===(t=e.tagsPage)||void 0===t?void 0:t[H]})),D=Object(d.c)((function(e){return e.danhSachDHX})).danhSachDHXDaGiaos,k=Object(d.c)((function(e){return e.congTy})).congTys;l.a.useEffect((function(){e(Object(w.h)(r))}),[r,k]),l.a.useEffect((function(){e(Object(p.b)())}),[D]);var M=l.a.useMemo((function(){var e=j.getTableColumns();return Object(i.a)(Object(i.a)({},j),{},{getTableColumns:function(){return[].concat(Object(c.a)(e),Object(c.a)(Object(O.d)()))}})}),[j]),I=l.a.useMemo((function(){var e=Object.values(N).reduce((function(e,t){return e+((null===t||void 0===t?void 0:t.tongTienDonHang)||0)}),0);return Object.values(N).reduce((function(t,n){var c=Math.round(((null===n||void 0===n?void 0:n.tongTienDonHang)||0)/e*1e4)/100;return Object(i.a)(Object(i.a)({},t),{},Object(a.a)({},n.id,Object(i.a)(Object(i.a)({},n),{},{phanTram:c})))}),{})}),[N]);return Object(x.c)("div",{className:"congNoKhachHangTuBon-page",css:f.a,children:[Object(x.b)(b.b,{className:"tabs",options:h,activeKey:S?"aside":"",onTabClick:function(t){"aside"===t?e(Object(u.toggleAside)({tagPageId:H})):"taiExcel"===t&&e(Object(u.downloadExcel)({tableId:H,constants:j,fileSheet:"congNoKhachHangTuBonSheet",fileName:"congNoKhachHangTuBonName"}))}}),Object(x.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[S&&Object(x.b)(T,{dateTimePicker:g}),Object(x.b)("div",{className:"aside-main",children:Object(x.b)(v.a,{constants:M,datas:I,modalId:H,expandable:{expandedRowRender:function(e){return Object(x.c)("div",{children:[e.id,Object(x.b)(s.a,{onClick:function(){return console.log(e)},children:"Log Console"})]})},expandRowByClick:!1},isSelection:!0,pagination:!0,pageSize:y,onChange:function(t){e(Object(p.c)(t.pageSize))},summary:function(e){return Object(x.b)(C,{pageData:e})}})})]})]})}},776:function(e,t,n){"use strict";var a=n(39),c=n(6),i=n(780),o=n(0),r=n.n(o),l=n(60),d=n(7),s=n(26),u=n(24),b=["modalId","constants","actions","datas","loading","isSelection","form","rowSelection","summary","isEdit","onBlur","inputOptions"];t.a=function(e){var t=e.modalId,n=e.constants,o=e.actions,g=e.datas,f=e.loading,m=e.isSelection,h=e.form,O=e.rowSelection,j=e.summary,v=e.isEdit,p=e.onBlur,y=e.inputOptions,x=Object(i.a)(e,b),T=Object(l.b)(),w=Object(l.c)((function(e){return e.table})).selectedRowKeys,N=Object(l.c)((function(e){return e.hideColumns})),S=null===N||void 0===N?void 0:N[t||""],C=r.a.useMemo((function(){var e={};return m?e.rowSelection=Object(c.a)({selectedRowKeys:w[t||""]||[],onChange:function(e,n){T(Object(d.onChangeSelectedRowKeys)({tableId:t,selectedRowKeys:e,selectedRows:n})),console.log(n,"rows")}},O):delete e.rowSelection,e}),[m,w]);function H(e,t,n){if(!v)return Object(s.o)();var a=n||"active",i=Object(c.a)(Object(c.a)({},e),{},{active:t,name:a});(null===o||void 0===o?void 0:o.onActiveAsync)&&T(null===o||void 0===o?void 0:o.onActiveAsync(i))}function D(e){if(!v)return Object(s.o)();(null===o||void 0===o?void 0:o.onDeleteAsync)&&T(o.onDeleteAsync(e))}var k=Object(d.useSearchText)(),M=Object(a.a)(k,3),I=M[0],R=M[1],K=M[2],B=r.a.useMemo((function(){var e=Object(d.getTableColumns)(n,{onActiveItem:H,onDeleteItem:D,searchText:I,searchInput:K,setSearchText:R,modalId:t,isEdit:v,constants:n,form:h,onBlur:p,inputOptions:y});return S&&(e=e.filter((function(e){return!(null===S||void 0===S?void 0:S[e.id])}))),e}),[I,S,n,y]),F=r.a.useMemo((function(){var t=Object.values(g||{});return(null===e||void 0===e?void 0:e.onCallbackDataSource)&&(t=e.onCallbackDataSource(t)),t}),[g]);return Object(u.b)("div",{className:"table",children:Object(u.b)(d.MyTable,Object(c.a)(Object(c.a)(Object(c.a)({rowKey:"id"},C),x),{},{height:"100%",loading:f,columns:B,dataSource:F,summary:j||null}))})}},777:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return K}));var a=n(6),c=n(780),i=n(0),o=n(502),r=n(301),l=n(24),d=["options","header","body","footer"];var s=function(e){var t=e.options,n=e.header,i=e.body,s=e.footer,u=Object(c.a)(e,d);return Object(l.c)("div",{css:b,children:[n&&Object(l.c)("div",{className:"header",children:[n,Object(l.b)(o.a,{})]}),i&&Object(l.b)("div",{style:{overflow:"scroll"},children:i}),Object(l.b)(r.a,Object(a.a)(Object(a.a)({},u),{},{treeData:t,blockNode:!0})),s&&Object(l.c)("div",{className:"footer",children:[Object(l.b)(o.a,{}),s]})]})},u=s,b={name:"1dz1mat",styles:"padding:0px;background-color:#ffffff;margin-right:8px;width:300px;height:100%;display:flex;flex-direction:column;.header,.footer{display:flex;flex-direction:column;align-items:center;}.ant-divider-horizontal{margin:5px 0;}.ant-tree{margin-top:12px;flex:1;.ant-tree-node-content-wrapper{line-height:28px;}}"},g=n(5),f=n.n(g),m=n(11),h=n(10),O=n(39),j=n(7),v=n(801),p=n(183),y=["options"];var x=function(e){var t=e.options,n=Object(c.a)(e,y);return Object(l.b)("div",{css:T,children:Object(l.b)(p.a.Group,Object(a.a)(Object(a.a)({buttonStyle:"solid"},n),{},{children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.b)(p.a.Button,{style:{width:"calc(100% / ".concat(t.length,")")},value:e.value,children:e.label},e.value)}))}))})},T={name:"gsfen1",styles:"padding:8px;background-color:#ffffff;.ant-radio-group{width:100%;display:flex;}.ant-radio-button-wrapper{height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;}.ant-radio-button{}"},w=n(64),N=n(376),S=["children","onSearch"];var C=Object.assign((function(e){var t=e.children,n=e.onSearch,i=Object(c.a)(e,S),o=Object(N.useForm)(),r=Object(O.a)(o,1)[0],d=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.validateFields();case 2:(t=e.sent)&&n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.b)("div",{css:D,children:Object(l.c)(j.MyForm,Object(a.a)(Object(a.a)({},i),{},{form:r,layout:"inline",children:[t,Object(l.c)(j.MyForm.Item,{children:[Object(l.b)(w.a,{type:"primary",onClick:d,children:"T\xecm Ki\u1ebfm"}),Object(l.b)(w.a,{onClick:function(){return r.resetFields()},children:"X\xf3a"})]})]}))})}),{Item:j.MyForm.Item}),H=C,D={name:"1k13qf8",styles:"padding:10px;background-color:#ffffff;.ant-form-item{margin-bottom:10px;}"},k=n(257),M=n(779),I=["options","children"];var R=k.a.TabPane,K=Object.assign((function(e){var t=e.options,n=e.children,i=Object(c.a)(e,I);return Object(l.b)(k.a,Object(a.a)(Object(a.a)({},i),{},{css:F,children:t?t.map((function(e){var t=e.label,n=e.value,c=e.Icon;return Object(M.a)(R,Object(a.a)(Object(a.a)({},e),{},{tab:Object(l.c)("span",{children:[c&&Object(l.b)(c,{})," ",t]}),key:n}))})):n}))}),k.a),B=K,F={name:"1cziumu",styles:"background-color:#fff;padding:0 20px;box-shadow:0 10px 10px -10px rgb(0 0 0 / 10%);height:40px;justify-content:center;.ant-tabs-nav{margin:0;}.ant-tabs-tab{padding:9px 0;&+.ant-tabs-tab{margin:0 0 0 22px;}}"},E=n(778),z=function(e,t){var n=e.pageApi,c=e.pageParams,o=e.searchRender,r=e.tableOptions,d=e.tableRender,s=e.asideKey,b=e.asideData,g=e.asideValue,p=e.asideTreeItemRender,y=e.radioCardsData,T=e.radioCardsValue,w=e.tabsData,N=e.tabsValue,S=Object(v.a)({pageSize:20,pageNum:1,total:0,data:[]}),C=Object(O.a)(S,2),D=C[0],k=C[1],M=Object(i.useState)(g),I=Object(O.a)(M,2),R=I[0],K=I[1];Object(i.useEffect)((function(){b&&K(b[0].key)}),[b]);var F=Object(i.useCallback)(Object(h.a)(f.a.mark((function e(){var t,i,o,r=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:{},!s||R){e.next=3;break}return e.abrupt("return");case 3:if(!n){e.next=9;break}return i=Object(a.a)(Object(a.a)(Object(a.a)({},t),c),{},Object(m.a)({pageSize:D.pageSize,pageNum:D.pageNum},s,R)),e.next=7,n(i);case 7:(o=e.sent).status&&k({total:o.result.total,data:o.result.data});case 9:case"end":return e.stop()}}),e)}))),[n,c,D.pageSize,D.pageNum,s,R]);Object(i.useEffect)((function(){F()}),[F]);return Object(i.useImperativeHandle)(t,(function(){return{setAsideCheckedKey:K,load:function(e){return F(e)}}})),Object(l.c)("div",{css:E.a,children:[w&&Object(l.b)(B,{className:"tabs",options:w,defaultValue:w[0].value||N}),Object(l.c)("div",{className:"tabs-main",children:[b&&Object(l.b)(u,{options:b,selectedKeys:R?[R]:void 0,titleRender:p,onSelect:function(e){var t=Object(O.a)(e,1)[0];K(t)}}),Object(l.c)("div",{className:"aside-main",children:[o&&Object(l.b)(H,{className:"search",onSearch:function(e){F(e)},children:o}),y&&Object(l.b)(x,{options:y,defaultValue:T||y[0].value}),r&&Object(l.b)("div",{className:"table",children:Object(l.b)(j.MyTable,{height:"100%",dataSource:D.data,columns:r,pagination:{current:D.pageNum,pageSize:D.pageSize,total:D.total,onChange:function(e,t){k({pageNum:e}),t&&k({pageSize:t})}},children:null===d||void 0===d?void 0:d(D.data)})})]})]})]})},A=Object(i.forwardRef)(z);A.MySearch=H,A.MyTable=j.MyTable,A.MyAside=u},778:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={name:"nlddxj",styles:"display:flex;flex-direction:column;.tabs-main{flex:1;display:flex;overflow:hidden;}.search{margin-bottom:10px;}.aside-main{display:flex;flex:1;overflow:hidden;flex-direction:column;}.table{flex:1;overflow:hidden;.ant-table-wrapper,.ant-spin-nested-loading,.ant-spin-container,.ant-table-container{height:100%;}.ant-spin-container{overflow:hidden;display:flex;flex-direction:column;.ant-table{flex:1;overflow:hidden;border-bottom:1px solid #eee;.ant-table-container{display:flex;flex-direction:column;.ant-table-body{flex:1;}}}.ant-pagination{margin:7px 0 5px 0;padding:0 10px;}}}"}},779:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),c=(n(374),n(178)),i=(n(92),n(244),n(146),n(273),n(373),n(411),function(e,t){var n=arguments;if(null==t||!c.d.call(t,"css"))return a.createElement.apply(void 0,n);var i=n.length,o=new Array(i);o[0]=c.a,o[1]=Object(c.c)(e,t);for(var r=2;r<i;r++)o[r]=n[r];return a.createElement.apply(null,o)})},780:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,"a",(function(){return a}))},782:function(e,t,n){"use strict";n(0);var a=n(538),c=n(24),i=a.a.Summary,o=i.Row,r=i.Cell;t.a=function(e){var t,n=e.columns,a=e.dataSource;return Object(c.b)(o,{children:null===n||void 0===n||null===(t=n.map)||void 0===t?void 0:t.call(n,(function(e,t){var n=null===e||void 0===e?void 0:e.id,i=(null===e||void 0===e?void 0:e.colSpan)||0,o=(null===e||void 0===e?void 0:e.cellClassName)||"",l=(null===e||void 0===e?void 0:e.valueStyle)||{},d=(null===e||void 0===e?void 0:e.valueClassName)||"",s=null===e||void 0===e?void 0:e.render,u=(null===a||void 0===a?void 0:a[t])||{},b=(null===u||void 0===u?void 0:u[n])||"";return s&&(b=s(b,u,t)),Object(c.b)(r,{index:t,colSpan:i,className:o,children:Object(c.b)("div",{style:l,className:d,children:b})},n)}))})}},791:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(7),c=n(277),i={donHangId:{id:"donHangId",name:"M\xe3 \u0110H",width:105,className:"text-small",isSearch:!0,align:"center",sorter:Object(a.sortByText)("donHangId"),form:{type:"input",innerProps:{disabled:!0}}},maDonHang:{id:"maDonHang",name:"M\xe3 \u0110H",width:100,className:"text-small",isSearch:!0,align:"center"},ngayDat:{id:"ngayDat",name:"Ng\xe0y \u0111\u1eb7t",width:100,className:"text-small",isSearch:!0,align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayGiao:{id:"ngayGiao",name:"Ng\xe0y giao",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(a.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},ngayNhan:{id:"ngayNhan",name:"Ng\xe0y nh\u1eadn",width:110,className:"text-small font-weight-bold",isSearch:!0,sorter:Object(a.sortByText)("dayId"),align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},tongTienMatHang:{id:"tongTienMatHang",name:"T\u1ed5ng ti\u1ec1n m\u1eb7t h\xe0ng",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},tongTienMatHangTra:{id:"tongTienMatHangTra",name:"T\u1ed5ng ti\u1ec1n tr\u1ea3",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},tongTienDonHang:{id:"tongTienDonHang",name:"T\u1ed5ng ti\u1ec1n",width:100,className:"text-small font-weight-bold",align:"right",render:a.numberRender},daThanhToan:{id:"daThanhToan",name:"\u0110\xe3 giao",width:90,className:"text-small",filters:a.trueFalseFilter.filters,onFilter:a.trueFalseFilter.onFilter("daThanhToan"),align:"center",render:Object(c.a)("DaThanhToan")},getTableColumns:function(){return[a.constants.stt,a.constants.active,a.constants.editRow]},getInputFields:function(){return[]},getExcelFields:function(){return[a.constants.active]}}},801:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(39),c=n(0);function i(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),i=n[0],o=n[1];return[i,function(e){return o((function(t){return Object.assign({},t,e)}))}]}}}]);