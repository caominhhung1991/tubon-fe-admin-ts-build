(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[68],{1146:function(a,n,e){"use strict";e.r(n);var t=e(11),c=e(6),o=e(39),r=e(0),l=e.n(r),i=e(60),u=e(777),s=e(7),d=e(65),b=e(778),O=e(290),f=e(776),p=e(5),j=e.n(p),v=e(10),h=e(775),m=e(457),g=e(441),y=e(24),w=d.c.salaryModal,I=function(a){var n=Object(h.a)({Instance:m.a,onPending:g.d,addSelectedId:g.a}),e=Object(i.b)(),t=Object(i.c)((function(a){return a.form})),o=t.modal,r=t.datas,u=l.a.useMemo((function(){var a;return!!(null===o||void 0===o||null===(a=o[w])||void 0===a?void 0:a.open)}),[o[w]]);function d(){return(d=Object(v.a)(j.a.mark((function a(t,o,r){var l,i,u;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return!0,l=new m.a(o),i=l.getTongLuongThang(),u=Object(c.a)(Object(c.a)({id:t.id},o),{},{tongLuongThang:i}),console.log(u),a.next=7,e(n.onUpdateAsync({currentData:t,validatedValues:u}));case 7:a.sent&&e(Object(s.closeModal)({modalId:w}));case 9:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(y.b)(s.MyModal,{form:!0,title:"Salary",visible:u,onClose:function(){e(Object(s.closeModal)({modalId:w}))},onOkModal:function(a,n,e){return d.apply(this,arguments)},formOptions:Object(s.getFormItemFields)(O.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:w,datas:r,initData:(new m.a).initData})},S=d.c.salaryModal;n.default=function(){var a,n,e=Object(i.b)(),r=Object(i.c)((function(a){return a.salary})),d=r.tabsData,p=r.loading,j=r.salaries,v=Object(i.c)((function(a){return{chucVus:a.chucVu.chucVus,nhanSus:a.nhanSu.nhanSus}})),w=v.nhanSus,M=v.chucVus,x=Object(h.a)({Instance:m.a,onPending:g.d,addSelectedId:g.a}),N=Object(i.c)((function(a){return a.account})).accountData,T=null===N||void 0===N||null===(a=N.paths)||void 0===a||null===(n=a.salary)||void 0===n?void 0:n.edit;var V=l.a.useMemo((function(){return w&&j?Object.entries(w).reduce((function(a,n){var e,r=Object(o.a)(n,2),l=r[0],i=r[1],u=(null===j||void 0===j?void 0:j[l])||{},s=null===M||void 0===M||null===(e=M[i.chucVuId])||void 0===e?void 0:e.chucVuName,d=new m.a(u).getTongLuongThang();return Object(c.a)(Object(c.a)({},a),{},Object(t.a)({},l,Object(c.a)(Object(c.a)(Object(c.a)({},i),{},{chucVuName:s},u),{},{tongLuongThang:d})))}),{}):{}}),[w,j,M]);return Object(y.c)("div",{className:"salary-page",css:b.a,children:[Object(y.b)(u.b,{className:"tabs",options:d,activeKey:"all",onTabClick:function(a){if("add"===a){var n=new m.a;e(Object(s.openModal)({modalId:S,data:n.initData}))}else"taiExcel"===a&&e(Object(s.downloadExcel)({tableId:S,constants:O.a,fileSheet:"salarySheet",fileName:"salaryName"}))}}),Object(y.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(y.b)("div",{className:"aside-main",children:Object(y.b)(f.a,{isEdit:T,pagination:!0,scroll:{x:900},constants:O.a,actions:x,datas:V,loading:p,modalId:S,isSelection:!0})})}),Object(y.b)(I,{})]})}},779:function(a,n,e){"use strict";e.d(n,"a",(function(){return o}));var t=e(0),c=(e(374),e(178)),o=(e(92),e(244),e(146),e(273),e(373),e(411),function(a,n){var e=arguments;if(null==n||!c.d.call(n,"css"))return t.createElement.apply(void 0,e);var o=e.length,r=new Array(o);r[0]=c.a,r[1]=Object(c.c)(a,n);for(var l=2;l<o;l++)r[l]=e[l];return t.createElement.apply(null,r)})},780:function(a,n,e){"use strict";function t(a,n){if(null==a)return{};var e,t,c=function(a,n){if(null==a)return{};var e,t,c={},o=Object.keys(a);for(t=0;t<o.length;t++)e=o[t],n.indexOf(e)>=0||(c[e]=a[e]);return c}(a,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(t=0;t<o.length;t++)e=o[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(c[e]=a[e])}return c}e.d(n,"a",(function(){return t}))}}]);