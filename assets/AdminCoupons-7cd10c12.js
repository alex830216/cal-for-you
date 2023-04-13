import{M as g}from"./modal-507f238c.js";import{P as k}from"./PaginationComponent-ede26183.js";import{_ as C,o as l,c as i,a as o,bt as c,bk as r,bg as w,f as v,t as u,r as _,F as x,j as U,e as b}from"./index-37a6019e.js";import"./_commonjsHelpers-042e6b4d.js";const V={props:["tempCoupon","addOrUpdateCoupon"],computed:{innerCoupon(){return this.tempCoupon}}},L={class:"modal-dialog modal-xl"},D={class:"modal-content border-0"},P={class:"modal-header bg-dark text-white"},E={id:"couponModalLabel",class:"modal-title"},T={key:0},N={key:1},O=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),A={class:"modal-body"},B={class:"row"},I={class:"col-12"},R={class:"mb-3"},F=o("label",{for:"title",class:"form-label"},"標題",-1),H={class:"row"},S={class:"mb-3 col-md-6"},j=o("label",{for:"percent",class:"form-label"},"打折比例",-1),q={class:"mb-3"},z=o("label",{for:"due_date",class:"form-label"},"到期日",-1),G={class:"mb-3"},J=o("label",{for:"code",class:"form-label"},"優惠代碼",-1),K={class:"mb-3"},Q={class:"form-check"},W=o("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),X={class:"modal-footer"},Y=o("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Z(n,t,s,f,p,e){return l(),i("div",L,[o("div",D,[o("div",P,[o("h5",E,[e.innerCoupon.id?(l(),i("span",N,"編輯產品")):(l(),i("span",T,"新增優惠券"))]),O]),o("div",A,[o("div",B,[o("div",I,[o("div",R,[F,c(o("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":t[0]||(t[0]=d=>e.innerCoupon.title=d)},null,512),[[r,e.innerCoupon.title]])]),o("div",H,[o("div",S,[j,c(o("input",{id:"percent",type:"number",min:"0",max:"100",class:"form-control",placeholder:"請輸入打折比例","onUpdate:modelValue":t[1]||(t[1]=d=>e.innerCoupon.percent=d)},null,512),[[r,e.innerCoupon.percent]])])]),o("div",q,[z,c(o("input",{id:"due_date",type:"month",class:"form-control",placeholder:"請輸入到期日","onUpdate:modelValue":t[2]||(t[2]=d=>e.innerCoupon.due_date=d)},null,512),[[r,e.innerCoupon.due_date]])]),o("div",G,[J,c(o("input",{id:"code",type:"text",class:"form-control",placeholder:"請輸入優惠代碼","onUpdate:modelValue":t[3]||(t[3]=d=>e.innerCoupon.code=d)},null,512),[[r,e.innerCoupon.code]])]),o("div",K,[o("div",Q,[c(o("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=d=>e.innerCoupon.is_enabled=d)},null,512),[[w,e.innerCoupon.is_enabled]]),W])])])])]),o("div",X,[Y,o("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(...d)=>s.addOrUpdateCoupon&&s.addOrUpdateCoupon(...d))}," 確認 ")])])])}const oo=C(V,[["render",Z]]),to={props:["tempCoupon","delCoupon"]},eo={class:"modal-dialog"},no={class:"modal-content border-0"},so=o("div",{class:"modal-header bg-danger text-white"},[o("h5",{id:"delCouponModalLabel",class:"modal-title"},[o("span",null,"刪除產品")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ao={class:"modal-body"},lo={class:"text-danger"},io={class:"modal-footer"},po=o("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function co(n,t,s,f,p,e){return l(),i("div",eo,[o("div",no,[so,o("div",ao,[v(" 是否刪除 "),o("strong",lo,u(s.tempCoupon.title),1),v(" 商品(刪除後將無法恢復)。 ")]),o("div",io,[po,o("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...d)=>s.delCoupon&&s.delCoupon(...d))}," 確認刪除 ")])])])}const uo=C(to,[["render",co]]),{VITE_URL:h,VITE_PATH:m}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"cal-for-you",BASE_URL:"/cal-for-you/",MODE:"production",DEV:!1,PROD:!0},ro={props:["checkLogin"],data(){return{coupons:[],tempCoupon:{},isNew:!1,page:{},couponModal:{},delCouponModal:{}}},methods:{getCoupons(n=1){this.$http.get(`${h}v2/api/${m}/admin/coupons?page=${n}`).then(t=>{this.coupons=t.data.coupons,this.page=t.data.pagination}).catch(t=>{alert(t.response.data.message)})},addOrUpdateCoupon(){let n=`${h}v2/api/${m}/admin/coupon`,t="post";this.tempCoupon.due_date=Date.parse(this.tempCoupon.due_date),this.isNew||(n=`${h}v2/api/${m}/admin/coupon/${this.tempCoupon.id}`,t="put"),this.tempCoupon.id?this.$http[t](n,{data:this.tempCoupon}).then(s=>{alert(s.data.message),this.getCoupons(),this.couponModal.hide()}).catch(s=>{alert(s.response.data.message)}):this.$http[t](n,{data:this.tempCoupon}).then(s=>{alert(s.data.message),this.getCoupons(),this.couponModal.hide()}).catch(s=>{alert(s.response.data.message)})},delCoupon(){const n=`${h}v2/api/${m}/admin/coupon/${this.tempCoupon.id}`;this.$http.delete(n,{data:this.tempCoupon}).then(t=>{alert(t.data.message),this.getCoupons(),this.delCouponModal.hide()}).catch(t=>{alert(t.response.data.message)})},openModal(n,t){n==="create"?(this.couponModal.show(),this.isNew=!0,this.tempCoupon={}):n==="edit"?(this.couponModal.show(),this.isNew=!1,this.tempCoupon={...t},this.tempCoupon.due_date=this.$filters.dateMonth(this.tempCoupon.due_date)):n==="delete"&&(this.delCouponModal.show(),this.tempCoupon={...t})}},components:{PaginationComponent:k,CouponModal:oo,DelCouponModal:uo},mounted(){this.checkLogin(),this.getCoupons(),this.couponModal=new g(this.$refs.couponModal),this.delCouponModal=new g(this.$refs.delCouponModal)}},ho={class:"container"},mo={class:"text-end mt-4"},_o={class:"table mt-4"},bo=o("thead",null,[o("tr",null,[o("th",{width:"120"}," 優惠券名稱 "),o("th",{width:"120"},"打折比例"),o("th",{width:"120"}," 到期日 "),o("th",{width:"120"}," 優惠代碼 "),o("th",{width:"100"}," 是否啟用 "),o("th",{width:"120"}," 編輯 ")])],-1),Co={key:0,class:"text-success"},fo={key:1},go={class:"btn-group"},vo=["onClick"],Mo=["onClick"],yo={id:"couponModal",ref:"couponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},$o={id:"delCouponModal",ref:"delCouponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delCouponModalLabel","aria-hidden":"true"};function ko(n,t,s,f,p,e){const d=_("PaginationComponent"),M=_("CouponModal"),y=_("DelCouponModal");return l(),i("div",ho,[o("div",mo,[o("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=a=>e.openModal("create"))}," 建立新的優惠券 ")]),o("table",_o,[bo,o("tbody",null,[(l(!0),i(x,null,U(p.coupons,a=>(l(),i("tr",{key:a.id},[o("td",null,u(a.title),1),o("td",null,u(a.percent),1),o("td",null,u(n.$filters.dateMonth(a.due_date)),1),o("td",null,u(a.code),1),o("td",null,[a.is_enabled?(l(),i("span",Co,"啟用")):(l(),i("span",fo,"未啟用"))]),o("td",null,[o("div",go,[o("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:$=>e.openModal("edit",a)}," 編輯 ",8,vo),o("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:$=>e.openModal("delete",a)}," 刪除 ",8,Mo)])])]))),128))])]),b(d,{pages:p.page,onChangePage:e.getCoupons},null,8,["pages","onChangePage"]),o("div",yo,[b(M,{"temp-coupon":p.tempCoupon,"add-or-update-coupon":e.addOrUpdateCoupon},null,8,["temp-coupon","add-or-update-coupon"])],512),o("div",$o,[b(y,{"temp-coupon":p.tempCoupon,"del-coupon":e.delCoupon},null,8,["temp-coupon","del-coupon"])],512)])}const Lo=C(ro,[["render",ko]]);export{Lo as default};
