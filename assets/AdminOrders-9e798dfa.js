import{M as g}from"./modal-507f238c.js";import{_ as f,o as r,c as n,a as e,t as l,h as x,F as b,k as O,bu as v,bg as M,g as k,r as _,e as u}from"./index-06a9f052.js";import{P as w}from"./PaginationComponent-a1db76de.js";import"./_commonjsHelpers-042e6b4d.js";const D={props:["tempOrder","updateOrder"],computed:{innerOrder(){return this.tempOrder}}},V={class:"modal-dialog modal-xl"},E={class:"modal-content border-0"},L=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{id:"orderModalLabel",class:"modal-title"},[e("span",null,"訂單內容")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),P={class:"modal-body"},T={class:"row"},U={class:"col-md-4"},I=e("h3",null,"用戶資料",-1),A={class:"table"},B={key:0},N=e("th",{style:{width:"100px"}},"姓名",-1),R=e("th",null,"Email",-1),q=e("th",null,"電話",-1),F=e("th",null,"地址",-1),H={class:"col-md-8"},S=e("h3",null,"訂單細節",-1),j={class:"table"},z=e("th",{style:{width:"100px"}},"訂單編號",-1),G=e("th",null,"下單時間",-1),J=e("th",null,"付款時間",-1),K={key:0},Q={key:1},W=e("th",null,"付款狀態",-1),X={key:0,class:"text-success"},Y={key:1,class:"text-muted"},Z=e("th",null,"總金額",-1),ee=e("h3",null,"選購商品",-1),te={class:"table"},de=e("thead",null,[e("tr")],-1),se={class:"text-end"},le={class:"d-flex justify-content-end"},re={class:"form-check"},ne={class:"form-check-label",for:"flexCheckDefault"},oe={key:0},ae={key:1},ie={class:"modal-footer"},ce=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function he(d,s,c,y,h,t){return r(),n("div",V,[e("div",E,[L,e("div",P,[e("div",T,[e("div",U,[I,e("table",A,[t.innerOrder.user?(r(),n("tbody",B,[e("tr",null,[N,e("td",null,l(t.innerOrder.user.name),1)]),e("tr",null,[R,e("td",null,l(t.innerOrder.user.email),1)]),e("tr",null,[q,e("td",null,l(t.innerOrder.user.tel),1)]),e("tr",null,[F,e("td",null,l(t.innerOrder.user.address),1)])])):x("",!0)])]),e("div",H,[S,e("table",j,[e("tbody",null,[e("tr",null,[z,e("td",null,l(t.innerOrder.id),1)]),e("tr",null,[G,e("td",null,l(d.$filters.date(t.innerOrder.create_at)),1)]),e("tr",null,[J,e("td",null,[t.innerOrder.paid_date?(r(),n("span",K,l(d.$filters.date(t.innerOrder.paid_date)),1)):(r(),n("span",Q,"時間不正確"))])]),e("tr",null,[W,e("td",null,[t.innerOrder.is_paid?(r(),n("strong",X,"已付款")):(r(),n("span",Y,"尚未付款"))])]),e("tr",null,[Z,e("td",null,l(d.$filters.currency(t.innerOrder.total)),1)])])]),ee,e("table",te,[de,e("tbody",null,[(r(!0),n(b,null,O(t.innerOrder.products,o=>(r(),n("tr",{key:o.id},[e("th",null,l(o.product.title),1),e("td",null,l(o.qty)+" / "+l(o.product.unit),1),e("td",se,l(d.$filters.currency(o.final_total)),1)]))),128))])]),e("div",le,[e("div",re,[v(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":s[0]||(s[0]=o=>t.innerOrder.is_paid=o)},null,512),[[M,t.innerOrder.is_paid]]),e("label",ne,[t.innerOrder.is_paid?(r(),n("span",oe,"已付款")):(r(),n("span",ae,"未付款"))])])])])])]),e("div",ie,[ce,e("button",{type:"button",class:"btn btn-primary",onClick:s[1]||(s[1]=o=>c.updateOrder(t.innerOrder))}," 確認 ")])])])}const _e=f(D,[["render",he]]),ue={props:["tempOrder","delOrder"]},pe={class:"modal-dialog"},me={class:"modal-content border-0"},be=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delOrderModalLabel",class:"modal-title"},[e("span",null,"刪除訂單")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Oe={class:"modal-body"},fe={class:"text-danger"},ye={class:"modal-footer"},ge=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ke(d,s,c,y,h,t){return r(),n("div",pe,[e("div",me,[be,e("div",Oe,[k(" 是否刪除 "),e("strong",fe,l(c.tempOrder.id),1),k(" 訂單(刪除後將無法恢復)。 ")]),e("div",ye,[ge,e("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=(...o)=>c.delOrder&&c.delOrder(...o))}," 確認刪除 ")])])])}const ve=f(ue,[["render",ke]]),{VITE_URL:p,VITE_PATH:m}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"cal-for-you",BASE_URL:"/cal-for-you/",MODE:"production",DEV:!1,PROD:!0},Me={props:["checkLogin"],data(){return{orders:{},tempOrder:{},page:{},orderModal:{},delOrderModal:{}}},methods:{getOrders(d=1){this.$http.get(`${p}v2/api/${m}/admin/orders?page=${d}`).then(s=>{this.orders=s.data.orders,this.page=s.data.pagination}).catch(s=>{alert(s.response.data.message)})},updateOrder(d){this.$http.put(`${p}v2/api/${m}/admin/order/${d.id}`,{data:d}).then(s=>{alert(s.data.message),this.getOrders(),this.orderModal.hide()}).catch(s=>{alert(s.response.data.message)})},delOrder(){this.$http.delete(`${p}v2/api/${m}/admin/order/${this.tempOrder.id}`,{data:this.tempOrder}).then(d=>{alert(d.data.message),this.getOrders(),this.delOrderModal.hide()}).catch(d=>{alert(d.response.data.message)})},openModal(d,s){d==="edit"?(this.orderModal.show(),this.tempOrder={...s}):d==="delete"&&(this.delOrderModal.show(),this.tempOrder={...s})}},components:{OrderModal:_e,DelOrderModal:ve,PaginationComponent:w},mounted(){this.checkLogin(),this.getOrders(),this.orderModal=new g(this.$refs.orderModal),this.delOrderModal=new g(this.$refs.delOrderModal)}},$e={class:"container"},Ce={class:"table mt-4"},xe=e("thead",null,[e("tr",null,[e("th",{width:"250"}," 訂單 ID "),e("th",{width:"120"}," 購買時間 "),e("th",{width:"120"}," Email "),e("th",{width:"120"}," 購買款項 "),e("th",{width:"120"}," 應付金額 "),e("th",{width:"120"}," 是否付款 "),e("th",{width:"120"}," 編輯 ")])],-1),we={class:"form-check"},De=["onUpdate:modelValue","onChange"],Ve={class:"form-check-label",for:"flexCheckDefault"},Ee={key:0,class:"text-success"},Le={key:1},Pe={class:"btn-group"},Te=["onClick"],Ue=["onClick"],Ie={id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},Ae={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"};function Be(d,s,c,y,h,t){const o=_("PaginationComponent"),$=_("OrderModal"),C=_("DelOrderModal");return r(),n("div",$e,[e("table",Ce,[xe,e("tbody",null,[(r(!0),n(b,null,O(h.orders,a=>(r(),n("tr",{key:a.id},[e("td",null,l(a.id),1),e("td",null,l(d.$filters.date(a.create_at)),1),e("td",null,l(a.user.email),1),(r(!0),n(b,null,O(a.products,i=>(r(),n("td",{key:i.id},l(i.product.title)+" 數量："+l(i.qty)+" "+l(i.product.unit),1))),128)),e("td",null,l(d.$filters.currency(a.total)),1),e("td",we,[v(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":i=>a.is_paid=i,onChange:i=>t.updateOrder(a)},null,40,De),[[M,a.is_paid]]),e("label",Ve,[a.is_paid?(r(),n("span",Ee,"已付款 ")):(r(),n("span",Le,"未付款"))])]),e("td",null,[e("div",Pe,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:i=>t.openModal("edit",a)}," 編輯 ",8,Te),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:i=>t.openModal("delete",a)}," 刪除 ",8,Ue)])])]))),128))])]),u(o,{pages:h.page,onChangePage:t.getOrders},null,8,["pages","onChangePage"]),e("div",Ie,[u($,{"temp-order":h.tempOrder,"update-order":t.updateOrder},null,8,["temp-order","update-order"])],512),e("div",Ae,[u(C,{"temp-order":h.tempOrder,"del-order":t.delOrder},null,8,["temp-order","del-order"])],512)])}const He=f(Me,[["render",Be]]);export{He as default};
