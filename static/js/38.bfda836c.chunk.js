(this["webpackJsonptu-bon"]=this["webpackJsonptu-bon"]||[]).push([[38],{1035:function(e,t,n){"use strict";n.r(t);var a=n(13),i=n(8),o=n(40),c=n(0),s=n.n(c),r=n(56),u=n(7),l=n(159),d=n(102),g=n(714),m=n(64),h=n(718),b=n(127),f=n(69),p=n(242),O=n(128),y=n(347),j=n(176),N={tenNguyenVatLieuChaLua:{id:"tenNguyenVatLieuChaLua",name:"Input text",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},inputNumber:{id:"inputNumber",name:"Input number",width:100,className:"text-small font-weight-bold",align:"center",form:{type:"input-number-format",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},time:{id:"time",name:"Time",width:100,className:"text-small",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},chiTietSalary:{id:"chiTietSalary",name:"Chi Ti\u1ebft L\u01b0\u01a1ng",width:100,className:"text-small",children:[p.a.luongCoBan,p.a.luongTrachNhiem,p.a.luongChuyenCan,p.a.luongPhuCapKhac]},ngayCong:{id:"ngayCong",name:"Ng\xe0y c\xf4ng",width:100,className:"text-small",children:[j.a.tongCongNgayThuong,j.a.tongNgayHuongLeTet,j.a.tongCongNgayLeTet,j.a.tongCongNgay]},gioTangCa:{id:"gioTangCa",name:"Gi\u1edd T\u0103ng Ca",width:100,className:"text-small",children:[j.a.tongGioTangCaThuong,j.a.tongGioTangCaNgayLe,j.a.tongCongTangCaNgay]},getTableColumns:function(){return[u.constants.stt,b.b.maNV,f.a.hoTen,O.a.chucVuName,y.a.caLamViecName,this.chiTietSalary,p.a.tongLuongThang,p.a.tongLuongNgay,this.ngayCong,this.gioTangCa]},getInputFields:function(){return[this.tenNguyenVatLieuChaLua,this.inputNumber,this.time]},getExcelFields:function(){return[this.tenNguyenVatLieuChaLua,this.inputNumber,this.time,u.constants.active]},getFormViewFields:function(){var e=[this.tenNguyenVatLieuChaLua,this.inputNumber,this.time];return Object(u.getFormItemViewFields)(e)}},v=n(717),T=n(737),C=n(459),L=n(713),x=n(421),w=n(14),V=n(394),I=n(396),S=n(25),k=m.c.tinhLuongModal;t.default=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.diemDanhThang})),n=t.tabsData,c=t.loading,m=t.diemDanhThangs,b=Object(r.c)((function(e){return{salaries:e.salary.salaries,nhanSus:e.nhanSu.nhanSus,chucVus:e.chucVu.chucVus,boPhans:e.boPhan.boPhans,caLamViecs:e.caLamViec.caLamViecs}})),f=b.salaries,p=b.nhanSus,O=b.chucVus,y=b.boPhans,j=b.caLamViecs,F=Object(L.a)({Instance:C.a,onPending:x.c,addSelectedId:x.a}),P=Object(u.useDatePicker)(),E=Object(o.a)(P,2),A=E[0],M=E[1];s.a.useEffect((function(){return e(Object(I.e)(A)),function(){Object(w.i)("diemDanhThang")}}),[A]);var D=s.a.useMemo((function(){var t=e(Object(I.d)()),n=Object.entries(t).reduce((function(e,t){var n=Object(o.a)(t,2),c=n[0],s=n[1],r=(null===f||void 0===f?void 0:f[c])||{},u=new V.a(r),l=u.getTongLuongThang(),d=u.getTongLuongNgay(),g=Object(i.a)(Object(i.a)(Object(i.a)({},s),r),{},{tongLuongThang:l,tongLuongNgay:d});return Object(i.a)(Object(i.a)({},e),{},Object(a.a)({},c,g))}),{});return console.log(n,"values"),n}),[p,m,f,O,y,j]);return Object(S.c)("div",{className:"tinhLuong-page",css:h.a,children:[Object(S.b)(g.b,{className:"tabs",options:n,activeKey:"all",onTabClick:function(t){"taiExcel"===t&&e(Object(u.downloadExcel)({tableId:k,constants:N,fileSheet:"tinhLuongSheet",fileName:"tinhLuongName"}))}}),Object(S.b)(l.a,{className:"form-selects",gutter:10,style:{marginTop:"7px"},children:Object(S.b)(d.a,{sm:6,md:6,lg:6,children:M.getMonthRender()})}),Object(S.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(S.b)("div",{className:"aside-main",children:Object(S.b)(v.a,{pagination:!0,constants:N,actions:F,datas:D,loading:c,modalId:k,isSelection:!0})})}),Object(S.b)(T.a,{modalTitle:"tinhLuong",constants:N,actions:F,modalId:k})]})}},715:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),i=(n(327),n(161)),o=(n(79),n(214),n(126),n(235),n(326),n(360),function(e,t){var n=arguments;if(null==t||!i.d.call(t,"css"))return a.createElement.apply(void 0,n);var o=n.length,c=new Array(o);c[0]=i.a,c[1]=Object(i.c)(e,t);for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)})},716:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return a}))},737:function(e,t,n){"use strict";var a=n(5),i=n.n(a),o=n(8),c=n(10),s=n(716),r=n(0),u=n.n(r),l=n(7),d=n(56),g=n(35),m=n(25),h=["modalId","constants","actions","modalTitle","onAfterAddFinish","isEdit"];t.a=function(e){var t=e.modalId,n=e.constants,a=e.actions,r=e.modalTitle,b=e.onAfterAddFinish,f=e.isEdit,p=Object(s.a)(e,h),O=Object(d.b)(),y=Object(d.c)((function(e){return e.form})),j=y.modal,N=y.edit,v=y.datas,T=u.a.useMemo((function(){var e;return!!(null===(e=j[t])||void 0===e?void 0:e.open)}),[j[t]]),C=u.a.useMemo((function(){return Object(l.getFormItemFields)(n.getInputFields(),N)}),[N]);function L(){return(L=Object(c.a)(i.a.mark((function e(n,o){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=!0,!o){e.next=17;break}if(f){e.next=4;break}return e.abrupt("return",Object(g.j)());case 4:if(n.id){e.next=12;break}return e.next=7,O(a.onAddAsync({validatedValues:o}));case 7:c=e.sent,null===b||void 0===b||b(null===(s=c)||void 0===s?void 0:s.id),c=Boolean(c),e.next=17;break;case 12:return e.t0=Boolean,e.next=15,O(a.onUpdateAsync({currentData:n,validatedValues:o}));case 15:e.t1=e.sent,c=(0,e.t0)(e.t1);case 17:c&&O(Object(l.closeModal)({modalId:t}));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.b)(l.MyModal,Object(o.a)(Object(o.a)({},p),{},{form:!0,title:r,modalId:t,visible:T,onClose:function(e,t){return L.apply(this,arguments)},formOptions:C,formProps:{labelCol:{span:8},wrapperCol:{span:16}},datas:v}))}}}]);