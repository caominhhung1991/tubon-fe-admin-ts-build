(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[0],{674:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return C.a}));var n=a(14),r=a(224),c=a(0),i=a(388),o=a(437),l=a(15),d=["options","header","body","footer"];var s=function(e){var t=e.options,a=e.header,c=e.body,s=e.footer,b=Object(r.a)(e,d);return Object(l.c)("div",{css:u,children:[a&&Object(l.c)("div",{className:"header",children:[a,Object(l.b)(i.a,{})]}),c&&Object(l.b)("div",{style:{overflow:"scroll"},children:c}),Object(l.b)(o.a,Object(n.a)(Object(n.a)({},b),{},{treeData:t,blockNode:!0})),s&&Object(l.c)("div",{className:"footer",children:[Object(l.b)(i.a,{}),s]})]})},b=s,u={name:"1dz1mat",styles:"padding:0px;background-color:#ffffff;margin-right:8px;width:300px;height:100%;display:flex;flex-direction:column;.header,.footer{display:flex;flex-direction:column;align-items:center;}.ant-divider-horizontal{margin:5px 0;}.ant-tree{margin-top:12px;flex:1;.ant-tree-node-content-wrapper{line-height:28px;}}"},f=a(5),p=a.n(f),h=a(12),j=a(8),O=a(41),m=a(10),v=a(712),g=a(159),x=["options"];var y=function(e){var t=e.options,a=Object(r.a)(e,x);return Object(l.b)("div",{css:w,children:Object(l.b)(g.a.Group,Object(n.a)(Object(n.a)({buttonStyle:"solid"},a),{},{children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.b)(g.a.Button,{style:{width:"calc(100% / ".concat(t.length,")")},value:e.value,children:e.label},e.value)}))}))})},w={name:"gsfen1",styles:"padding:8px;background-color:#ffffff;.ant-radio-group{width:100%;display:flex;}.ant-radio-button-wrapper{height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;}.ant-radio-button{}"},k=a(308),S=["children","onSearch"];var N=Object.assign((function(e){var t=e.children,a=e.onSearch,c=Object(r.a)(e,S),i=Object(k.useForm)(),o=Object(O.a)(i,1)[0],d=function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.validateFields();case 2:(t=e.sent)&&a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.b)("div",{css:z,children:Object(l.c)(m.MyForm,Object(n.a)(Object(n.a)({},c),{},{form:o,layout:"inline",children:[t,Object(l.c)(m.MyForm.Item,{children:[Object(l.b)(m.MyButton,{type:"primary",onClick:d,children:"T\xecm Ki\u1ebfm"}),Object(l.b)(m.MyButton,{onClick:function(){return o.resetFields()},children:"X\xf3a"})]})]}))})}),{Item:m.MyForm.Item}),M=N,z={name:"1k13qf8",styles:"padding:10px;background-color:#ffffff;.ant-form-item{margin-bottom:10px;}"},C=a(713),F=a(675),I=function(e,t){var a=e.pageApi,r=e.pageParams,i=e.searchRender,o=e.tableOptions,d=e.tableRender,s=e.asideKey,u=e.asideData,f=e.asideValue,g=e.asideTreeItemRender,x=e.radioCardsData,w=e.radioCardsValue,k=e.tabsData,S=e.tabsValue,N=Object(v.a)({pageSize:20,pageNum:1,total:0,data:[]}),z=Object(O.a)(N,2),I=z[0],T=z[1],R=Object(c.useState)(f),V=Object(O.a)(R,2),A=V[0],D=V[1];Object(c.useEffect)((function(){u&&D(u[0].key)}),[u]);var E=Object(c.useCallback)(Object(j.a)(p.a.mark((function e(){var t,c,i,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:{},!s||A){e.next=3;break}return e.abrupt("return");case 3:if(!a){e.next=9;break}return c=Object(n.a)(Object(n.a)(Object(n.a)({},t),r),{},Object(h.a)({pageSize:I.pageSize,pageNum:I.pageNum},s,A)),e.next=7,a(c);case 7:(i=e.sent).status&&T({total:i.result.total,data:i.result.data});case 9:case"end":return e.stop()}}),e)}))),[a,r,I.pageSize,I.pageNum,s,A]);Object(c.useEffect)((function(){E()}),[E]);return Object(c.useImperativeHandle)(t,(function(){return{setAsideCheckedKey:D,load:function(e){return E(e)}}})),Object(l.c)("div",{css:F.a,children:[k&&Object(l.b)(C.b,{className:"tabs",options:k,defaultValue:k[0].value||S}),Object(l.c)("div",{className:"tabs-main",children:[u&&Object(l.b)(b,{options:u,selectedKeys:A?[A]:void 0,titleRender:g,onSelect:function(e){var t=Object(O.a)(e,1)[0];D(t)}}),Object(l.c)("div",{className:"aside-main",children:[i&&Object(l.b)(M,{className:"search",onSearch:function(e){E(e)},children:i}),x&&Object(l.b)(y,{options:x,defaultValue:w||x[0].value}),o&&Object(l.b)("div",{className:"table",children:Object(l.b)(m.MyTable,{height:"100%",dataSource:I.data,columns:o,pagination:{current:I.pageNum,pageSize:I.pageSize,total:I.total,onChange:function(e,t){T({pageNum:e}),t&&T({pageSize:t})}},children:null===d||void 0===d?void 0:d(I.data)})})]})]})]})},T=Object(c.forwardRef)(I);T.MySearch=M,T.MyTable=m.MyTable,T.MyAside=b},675:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={name:"nlddxj",styles:"display:flex;flex-direction:column;.tabs-main{flex:1;display:flex;overflow:hidden;}.search{margin-bottom:10px;}.aside-main{display:flex;flex:1;overflow:hidden;flex-direction:column;}.table{flex:1;overflow:hidden;.ant-table-wrapper,.ant-spin-nested-loading,.ant-spin-container,.ant-table-container{height:100%;}.ant-spin-container{overflow:hidden;display:flex;flex-direction:column;.ant-table{flex:1;overflow:hidden;border-bottom:1px solid #eee;.ant-table-container{display:flex;flex-direction:column;.ant-table-body{flex:1;}}}.ant-pagination{margin:7px 0 5px 0;padding:0 10px;}}}"}},686:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=(a(316),a(155)),c=(a(77),a(208),a(124),a(240),a(315),a(370),function(e,t){var a=arguments;if(null==t||!r.d.call(t,"css"))return n.createElement.apply(void 0,a);var c=a.length,i=new Array(c);i[0]=r.a,i[1]=Object(r.c)(e,t);for(var o=2;o<c;o++)i[o]=a[o];return n.createElement.apply(null,i)})},712:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(41),r=a(0);function c(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],i=a[1];return[c,function(e){return i((function(t){return Object.assign({},t,e)}))}]}},713:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(14),r=a(224),c=(a(0),a(211)),i=a(15),o=a(686),l=["options","children"];var d=c.a.TabPane,s=Object.assign((function(e){var t=e.options,a=e.children,s=Object(r.a)(e,l);return Object(i.b)(c.a,Object(n.a)(Object(n.a)({},s),{},{css:b,children:t?t.map((function(e){var t=e.label,a=e.value,r=e.Icon;return Object(o.a)(d,Object(n.a)(Object(n.a)({},e),{},{tab:Object(i.c)("span",{children:[r&&Object(i.b)(r,{})," ",t]}),key:a}))})):a}))}),c.a);t.b=s;var b={name:"eb6il2",styles:"background-color:#fff;padding:0 20px;box-shadow:0 10px 10px -10px rgb(0 0 0 / 10%);height:40px;.ant-tabs-nav{margin:0;}.ant-tabs-tab{padding:9px 0;&+.ant-tabs-tab{margin:0 0 0 22px;}}"}}}]);