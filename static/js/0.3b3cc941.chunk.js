(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[0],{715:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(13),r=n(5),c=n.n(r),i=n(20),o=n(9),u=n(14),l=n(112),s=n(34);function d(e){var t=e.Instance,n=e.onPending,r=e.addSelectedId,d=e.onDelete,b=e.onActive,f=e.isEdit;return{onAddAsync:function(e){return function(){var a=Object(o.a)(c.a.mark((function a(o){var l,s,d,b,f;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l=e.validatedValues,s=l.otherPath,o(null===n||void 0===n?void 0:n(!0)),d=new t,b=s?[].concat(Object(i.a)(d.pathDatas),Object(i.a)(s)):d.pathDatas,a.next=7,Object(u.a)(b,l);case 7:return f=a.sent,r&&o(null===r||void 0===r?void 0:r(null===f||void 0===f?void 0:f.id)),o(null===n||void 0===n?void 0:n(!1)),a.abrupt("return",f);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},onUpdateAsync:function(e){return function(){var a=Object(o.a)(c.a.mark((function a(r){var o,s,d,b,f,p;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=e.currentData,s=e.validatedValues,d=o.id,b=o.otherPath,d){a.next=4;break}return a.abrupt("return",l.b.error("Ch\u01b0a c\xf3 id"));case 4:return r(null===n||void 0===n?void 0:n(!0)),f=new t,p=b?[].concat(Object(i.a)(f.pathDatas),Object(i.a)(b),[d]):[].concat(Object(i.a)(f.pathDatas),[d]),a.next=9,r(Object(u.k)(p,s));case 9:return r(null===n||void 0===n?void 0:n(!1)),a.abrupt("return",!0);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},onActiveAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=Object(o.a)(c.a.mark((function r(o){var l,d,p,v,O,j,h;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(l=e.id,d=e.active,p=e.otherPath,v=e.name,!b){r.next=3;break}return r.abrupt("return",o(b(l,d)));case 3:if(f){r.next=5;break}return r.abrupt("return",Object(s.l)());case 5:if(window.confirm("X\xe1c nh\u1eadn?")){r.next=7;break}return r.abrupt("return",null);case 7:return o(null===n||void 0===n?void 0:n(!0)),O=new t,j=p?[].concat(Object(i.a)(O.pathDatas),Object(i.a)(p),[l]):[].concat(Object(i.a)(O.pathDatas),[l]),h=v||"active",r.next=13,o(Object(u.k)(j,Object(a.a)({},h,d)));case 13:o(null===n||void 0===n?void 0:n(!1)),Object(s.i)();case 15:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},onDeleteAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=Object(o.a)(c.a.mark((function r(o){var l,s,b,f,p,v,O,j;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!d){r.next=2;break}return r.abrupt("return",o(d(e)));case 2:return s=e.id,b=e.otherPath,o(null===n||void 0===n?void 0:n(!0)),f=new t,p=b?[].concat(Object(i.a)(b),[s]).join("/"):s,v=f.getPathDatas(p),O=f.getPathDeleted(p),l={},Object(a.a)(l,v,null),Object(a.a)(l,O,e),j=l,r.next=11,o(Object(u.k)(null,j));case 11:return o(null===n||void 0===n?void 0:n(!1)),r.abrupt("return",!0);case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}}},716:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return z}));var a=n(8),r=n(720),c=n(0),i=n(444),o=n(485),u=n(25),l=["options","header","body","footer"];var s=function(e){var t=e.options,n=e.header,c=e.body,s=e.footer,d=Object(r.a)(e,l);return Object(u.c)("div",{css:b,children:[n&&Object(u.c)("div",{className:"header",children:[n,Object(u.b)(i.a,{})]}),c&&Object(u.b)("div",{style:{overflow:"scroll"},children:c}),Object(u.b)(o.a,Object(a.a)(Object(a.a)({},d),{},{treeData:t,blockNode:!0})),s&&Object(u.c)("div",{className:"footer",children:[Object(u.b)(i.a,{}),s]})]})},d=s,b={name:"1dz1mat",styles:"padding:0px;background-color:#ffffff;margin-right:8px;width:300px;height:100%;display:flex;flex-direction:column;.header,.footer{display:flex;flex-direction:column;align-items:center;}.ant-divider-horizontal{margin:5px 0;}.ant-tree{margin-top:12px;flex:1;.ant-tree-node-content-wrapper{line-height:28px;}}"},f=n(5),p=n.n(f),v=n(13),O=n(9),j=n(40),h=n(6),m=n(739),x=n(162),g=["options"];var y=function(e){var t=e.options,n=Object(r.a)(e,g);return Object(u.b)("div",{css:w,children:Object(u.b)(x.a.Group,Object(a.a)(Object(a.a)({buttonStyle:"solid"},n),{},{children:null===t||void 0===t?void 0:t.map((function(e){return Object(u.b)(x.a.Button,{style:{width:"calc(100% / ".concat(t.length,")")},value:e.value,children:e.label},e.value)}))}))})},w={name:"gsfen1",styles:"padding:8px;background-color:#ffffff;.ant-radio-group{width:100%;display:flex;}.ant-radio-button-wrapper{height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;}.ant-radio-button{}"},k=n(59),S=n(334),D=["children","onSearch"];var A=Object.assign((function(e){var t=e.children,n=e.onSearch,c=Object(r.a)(e,D),i=Object(S.useForm)(),o=Object(j.a)(i,1)[0],l=function(){var e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.validateFields();case 2:(t=e.sent)&&n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.b)("div",{css:N,children:Object(u.c)(h.MyForm,Object(a.a)(Object(a.a)({},c),{},{form:o,layout:"inline",children:[t,Object(u.c)(h.MyForm.Item,{children:[Object(u.b)(k.a,{type:"primary",onClick:l,children:"T\xecm Ki\u1ebfm"}),Object(u.b)(k.a,{onClick:function(){return o.resetFields()},children:"X\xf3a"})]})]}))})}),{Item:h.MyForm.Item}),I=A,N={name:"1k13qf8",styles:"padding:10px;background-color:#ffffff;.ant-form-item{margin-bottom:10px;}"},C=n(226),M=n(718),T=["options","children"];var R=C.a.TabPane,z=Object.assign((function(e){var t=e.options,n=e.children,c=Object(r.a)(e,T);return Object(u.b)(C.a,Object(a.a)(Object(a.a)({},c),{},{css:P,children:t?t.map((function(e){var t=e.label,n=e.value,r=e.Icon;return Object(M.a)(R,Object(a.a)(Object(a.a)({},e),{},{tab:Object(u.c)("span",{children:[r&&Object(u.b)(r,{})," ",t]}),key:n}))})):n}))}),C.a),K=z,P={name:"eb6il2",styles:"background-color:#fff;padding:0 20px;box-shadow:0 10px 10px -10px rgb(0 0 0 / 10%);height:40px;.ant-tabs-nav{margin:0;}.ant-tabs-tab{padding:9px 0;&+.ant-tabs-tab{margin:0 0 0 22px;}}"},V=n(719),E=function(e,t){var n=e.pageApi,r=e.pageParams,i=e.searchRender,o=e.tableOptions,l=e.tableRender,s=e.asideKey,b=e.asideData,f=e.asideValue,x=e.asideTreeItemRender,g=e.radioCardsData,w=e.radioCardsValue,k=e.tabsData,S=e.tabsValue,D=Object(m.a)({pageSize:20,pageNum:1,total:0,data:[]}),A=Object(j.a)(D,2),N=A[0],C=A[1],M=Object(c.useState)(f),T=Object(j.a)(M,2),R=T[0],z=T[1];Object(c.useEffect)((function(){b&&z(b[0].key)}),[b]);var P=Object(c.useCallback)(Object(O.a)(p.a.mark((function e(){var t,c,i,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:{},!s||R){e.next=3;break}return e.abrupt("return");case 3:if(!n){e.next=9;break}return c=Object(a.a)(Object(a.a)(Object(a.a)({},t),r),{},Object(v.a)({pageSize:N.pageSize,pageNum:N.pageNum},s,R)),e.next=7,n(c);case 7:(i=e.sent).status&&C({total:i.result.total,data:i.result.data});case 9:case"end":return e.stop()}}),e)}))),[n,r,N.pageSize,N.pageNum,s,R]);Object(c.useEffect)((function(){P()}),[P]);return Object(c.useImperativeHandle)(t,(function(){return{setAsideCheckedKey:z,load:function(e){return P(e)}}})),Object(u.c)("div",{css:V.a,children:[k&&Object(u.b)(K,{className:"tabs",options:k,defaultValue:k[0].value||S}),Object(u.c)("div",{className:"tabs-main",children:[b&&Object(u.b)(d,{options:b,selectedKeys:R?[R]:void 0,titleRender:x,onSelect:function(e){var t=Object(j.a)(e,1)[0];z(t)}}),Object(u.c)("div",{className:"aside-main",children:[i&&Object(u.b)(I,{className:"search",onSearch:function(e){P(e)},children:i}),g&&Object(u.b)(y,{options:g,defaultValue:w||g[0].value}),o&&Object(u.b)("div",{className:"table",children:Object(u.b)(h.MyTable,{height:"100%",dataSource:N.data,columns:o,pagination:{current:N.pageNum,pageSize:N.pageSize,total:N.total,onChange:function(e,t){C({pageNum:e}),t&&C({pageSize:t})}},children:null===l||void 0===l?void 0:l(N.data)})})]})]})]})},F=Object(c.forwardRef)(E);F.MySearch=I,F.MyTable=h.MyTable,F.MyAside=d},717:function(e,t,n){"use strict";var a=n(40),r=n(8),c=n(720),i=n(0),o=n.n(i),u=n(56),l=n(6),s=n(34),d=n(25),b=["modalId","constants","actions","datas","loading","isSelection","form","rowSelection","summary","isEdit","onBlur","inputOptions"];t.a=function(e){var t=e.modalId,n=e.constants,i=e.actions,f=e.datas,p=e.loading,v=e.isSelection,O=e.form,j=e.rowSelection,h=e.summary,m=e.isEdit,x=e.onBlur,g=e.inputOptions,y=Object(c.a)(e,b),w=Object(u.b)(),k=Object(u.c)((function(e){return e.table})).selectedRowKeys,S=Object(u.c)((function(e){return e.hideColumns})),D=null===S||void 0===S?void 0:S[t||""],A=o.a.useMemo((function(){var e={};return v?e.rowSelection=Object(r.a)({selectedRowKeys:k[t||""]||[],onChange:function(e,n){w(Object(l.onChangeSelectedRowKeys)({tableId:t,selectedRowKeys:e,selectedRows:n}))}},j):delete e.rowSelection,e}),[v,k]);function I(e,t,n){if(!m)return Object(s.l)();var a=n||"active",c=Object(r.a)(Object(r.a)({},e),{},{active:t,name:a});w(null===i||void 0===i?void 0:i.onActiveAsync(c))}function N(e){if(!m)return Object(s.l)();(null===i||void 0===i?void 0:i.onDeleteAsync)&&w(i.onDeleteAsync(e))}var C=Object(l.useSearchText)(),M=Object(a.a)(C,3),T=M[0],R=M[1],z=M[2],K=o.a.useMemo((function(){var e=Object(l.getTableColumns)(n,{onActiveItem:I,onDeleteItem:N,searchText:T,searchInput:z,setSearchText:R,modalId:t,isEdit:m,constants:n,form:O,onBlur:x,inputOptions:g});return D&&(e=e.filter((function(e){return!(null===D||void 0===D?void 0:D[e.id])}))),e}),[T,D,n,g]),P=o.a.useMemo((function(){var t=Object.values(f||{});return(null===e||void 0===e?void 0:e.onCallbackDataSource)&&(t=e.onCallbackDataSource(t)),t}),[f]);return Object(d.b)("div",{className:"table",children:Object(d.b)(l.MyTable,Object(r.a)(Object(r.a)(Object(r.a)({},A),y),{},{rowKey:"id",height:"100%",loading:p,columns:K,dataSource:P,summary:h||null}))})}},719:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={name:"nlddxj",styles:"display:flex;flex-direction:column;.tabs-main{flex:1;display:flex;overflow:hidden;}.search{margin-bottom:10px;}.aside-main{display:flex;flex:1;overflow:hidden;flex-direction:column;}.table{flex:1;overflow:hidden;.ant-table-wrapper,.ant-spin-nested-loading,.ant-spin-container,.ant-table-container{height:100%;}.ant-spin-container{overflow:hidden;display:flex;flex-direction:column;.ant-table{flex:1;overflow:hidden;border-bottom:1px solid #eee;.ant-table-container{display:flex;flex-direction:column;.ant-table-body{flex:1;}}}.ant-pagination{margin:7px 0 5px 0;padding:0 10px;}}}"}},739:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(40),r=n(0);function c(e){var t=Object(r.useState)(e),n=Object(a.a)(t,2),c=n[0],i=n[1];return[c,function(e){return i((function(t){return Object.assign({},t,e)}))}]}}}]);