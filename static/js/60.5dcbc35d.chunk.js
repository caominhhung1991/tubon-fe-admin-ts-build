(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[60],{1022:function(e,n,t){"use strict";t.r(n);var a=t(5),c=t.n(a),i=t(9),r=t(0),s=t.n(r),o=t(115),u=t(56),l=t(744),h=t(395),b=t(128),d=t(793),f=t(131),g=t(6),m=t(61),p=t(745),y=t(742),N=t(743),O=t(23),V=m.c.nghiViecModal;n.default=function(){var e=Object(u.b)(),n=Object(y.a)({Instance:f.a,onPending:h.h,addSelectedId:h.a}),t=Object(u.c)((function(e){return e.table})).selectedRows,a=Object(u.c)((function(e){return e.nhanSu})),r=a.loading,m=a.nhanSusQuit,v=Object(u.c)((function(e){return{boPhans:e.boPhan.boPhans,chucVus:e.chucVu.chucVus,cMNDs:e.cMND.cMNDs,caLamViecs:e.caLamViec.caLamViecs}})),j=v.boPhans,w=v.chucVus,x=v.cMNDs,S=v.caLamViecs;function k(){return(k=Object(i.a)(c.a.mark((function n(a){var i,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a!==b.a.LamViec){n.next=10;break}if(null===(i=t[V])||void 0===i?void 0:i.length){n.next=3;break}return n.abrupt("return",o.b.error("Ch\u01b0a ch\u1ecdn d\u1eef li\u1ec7u!"));case 3:if(window.confirm("Are you sure?")){n.next=5;break}return n.abrupt("return",null);case 5:return r=t[V]||[],n.next=8,e(Object(h.i)(r,b.a.NghiViec));case 8:n.next=11;break;case 10:"taiExcel"===a&&e(Object(g.downloadExcel)({tableId:V,constants:b.b,fileSheet:"datas",fileName:"Danh Sach Nghi Viec"}));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.a.useEffect((function(){e(Object(h.e)())}),[]);var D=s.a.useMemo((function(){return m?e(Object(h.c)(m)):{}}),[m,j,w,x,S]);return Object(O.c)("div",{className:"danh-sach-nghi-viec-page",css:p.a,children:[Object(O.b)(l.b,{className:"tabs",options:b.c,activeKey:"all",onTabClick:function(e){return k.apply(this,arguments)}}),Object(O.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(O.b)("div",{className:"aside-main",children:Object(O.b)(N.a,{pagination:!0,scroll:{x:1500},constants:d.a,actions:n,datas:D,loading:r,modalId:V,rowSelection:{onChange:function(n,t){e(Object(g.onChangeSelectedRowKeys)({tableId:V,selectedRowKeys:n,selectedRows:t}))}}})})})]})}},746:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),c=(t(351),t(163)),i=(t(79),t(227),t(127),t(250),t(350),t(386),function(e,n){var t=arguments;if(null==n||!c.d.call(n,"css"))return a.createElement.apply(void 0,t);var i=t.length,r=new Array(i);r[0]=c.a,r[1]=Object(c.c)(e,n);for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)})},747:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}t.d(n,"a",(function(){return a}))},793:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(6),c=t(128),i=t(70),r=t(356),s=t(129),o={ngayNghiViec:{id:"ngayNghiViec",name:"Ng\xe0y ngh\u1ec9",className:"text-small",width:100,align:"center",isSearch:!0,form:{type:"date-picker"}},lyDoNghiViec:{id:"lyDoNghiViec",name:"L\xfd do ngh\u1ec9 vi\u1ec7c",className:"text-small",width:150,isSearch:!0,form:{type:"text-area"}},getTableColumns:function(){return[a.constants.stt,c.b.maNV,i.a.hoTen,c.b.ngayVaoLam,this.ngayNghiViec,this.lyDoNghiViec,c.b.soDienThoai,i.a.ngaySinh,i.a.gioiTinh,r.a.boPhanName,s.a.chucVuName]},getInputFields:function(){return[a.constants.id,this.ngayNghiViec,this.lyDoNghiViec]}}}}]);