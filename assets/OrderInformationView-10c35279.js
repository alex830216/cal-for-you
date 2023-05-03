import{_ as k,d as C,m as I,r as p,o as v,c as b,a as e,F as $,i as E,h as q,t as r,e as o,w as g,f as S,n as c,k as T,bl as U,g as n}from"./index-dc695ea1.js";import{c as x}from"./cart-b792bc43.js";import"./_commonjsHelpers-042e6b4d.js";const{VITE_URL:f,VITE_PATH:h}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"cal-for-you",BASE_URL:"/cal-for-you/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},j={data(){return{cart:{},loadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},isDisabled:!0}},methods:{updateCart(t){const s={product_id:t.product.id,qty:t.qty};this.loadingItem=t.id,this.$http.put(`${f}v2/api/${h}/cart/${t.id}`,{data:s}).then(d=>{this.cart=d.data.data,this.getCart(),this.loadingItem=""}).catch(d=>{alert(d.response.data.message)})},deleteCart(t){this.loadingItem=t.id,this.$http.delete(`${f}v2/api/${h}/cart/${t.id}`).then(()=>{this.getCart(),this.loadingItem=""}).catch(s=>{alert(s.response.data.message)})},deleteCarts(){this.$http.delete(`${f}v2/api/${h}/carts`).then(()=>{this.getCart()}).catch(t=>{alert(t.response.data.message)})},createOrder(){const t=this.form;this.$http.post(`${f}v2/api/${h}/order`,{data:t}).then(s=>{this.$refs.form.resetForm(),this.form.message="",this.getCart();const d=s.data.orderId;this.$router.push({name:"payment",query:{id:d}})}).catch(s=>{alert(s.response.data.message)})},...C(x,["getCart","addToCart"])},computed:{...I(x,["carts","total","final_total"])},mounted(){this.getCart()}},F={class:"container"},R={class:"row justify-content-center"},D={class:"col-12 col-lg-6"},L=S('<section class="pt-6 pb-5"><h2 class="text-center pb-md-5 fw-bold">填寫訂購資料</h2><div class="d-none d-md-block"><div class="row"><div class="col-3 pe-0"><div class="timeline-item d-flex flex-column align-items-center justify-content-center"><div class="line bg-black w-100"></div><div class="circle bg-white border border border-primary rounded-circle"></div><div class="mt-3">購物車清單</div></div></div><div class="col-3 px-0"><div class="timeline-item d-flex flex-column align-items-center justify-content-center"><div class="line bg-black w-100"></div><div class="circle bg-primary border border-primary rounded-circle"></div><div class="mt-3 fw-bold">填寫訂購資料</div></div></div><div class="col-3 px-0"><div class="timeline-item d-flex flex-column align-items-center justify-content-center"><div class="line bg-black w-100"></div><div class="circle bg-white border border-primary rounded-circle"></div><div class="mt-3">填寫付款資料</div></div></div><div class="col-3 ps-0"><div class="timeline-item d-flex flex-column align-items-center justify-content-center"><div class="line bg-black w-100"></div><div class="circle bg-white border border-primary rounded-circle"></div><div class="mt-3">完成訂單</div></div></div></div></div></section>',1),N={class:"py-3"},O={class:"table table-hover align-middle text-center"},A=e("thead",null,[e("tr",{class:"table-primary"},[e("th",{class:"col-6"},"品名"),e("th",{class:"col-2"},"單價"),e("th",{class:"col-2"},"數量"),e("th",{class:"col-2"},"小計")])],-1),B={class:"d-flex flex-column flex-md-row align-items-center justify-content-center"},M={class:"col-12 col-md-3 pb-2 pb-md-0 me-md-2"},P=["src"],H={class:"col-12 col-md-9 text-center text-md-start"},z={class:"fs-4"},G=e("td",{colspan:"3",class:"col-11 text-end pe-5 fw-bold"},"訂單金額",-1),J={class:"col-1 fw-bold"},K={class:"bg-primary-subtle p-4"},Q=e("h3",{class:"pb-3"}," 訂購資料 ",-1),W=e("div",{class:"mb-3 text-danger"},"* 為必填",-1),X={class:"mb-3"},Y=e("label",{for:"email",class:"form-label"},[n("Email "),e("span",{class:"text-danger"},"*")],-1),Z={class:"mb-3"},ee=e("label",{for:"name",class:"form-label"},[n("收件人姓名 "),e("span",{class:"text-danger"},"*")],-1),se={class:"mb-3"},te=e("label",{for:"tel",class:"form-label"},[n("收件人電話 "),e("span",{class:"text-danger"},"*")],-1),le={class:"mb-3"},ae=e("label",{for:"address",class:"form-label"},[n("收件人地址 "),e("span",{class:"text-danger"},"*")],-1),oe={class:"mb-4"},ie=e("label",{for:"remarks",class:"form-label"},"備註",-1),de={class:"d-flex justify-content-end align-items-center py-3"},re=["disabled"];function ce(t,s,d,ne,a,y){const m=p("VField"),u=p("ErrorMessage"),V=p("RouterLink"),w=p("VForm");return v(),b("div",F,[e("div",R,[e("div",D,[L,e("section",N,[e("table",O,[A,e("tbody",null,[t.carts?(v(!0),b($,{key:0},E(t.carts,l=>(v(),b("tr",{key:l.id},[e("td",B,[e("div",M,[e("img",{src:l.product.imageUrl,class:"object-cover w-100",height:"120",alt:"productImage"},null,8,P)]),e("div",H,r(l.product.title),1)]),e("td",null,r(l.product.price),1),e("td",null,r(l.qty),1),e("td",null," $"+r(l.product.price*l.qty),1)]))),128)):q("",!0)]),e("tfoot",null,[e("tr",z,[G,e("td",J,"$"+r(t.$filters.currency(t.final_total)),1)])])])]),e("section",null,[e("div",K,[Q,o(w,{class:"pb-4",ref:"form",onSubmit:y.createOrder},{default:g(({errors:l,meta:_})=>[W,e("div",X,[Y,o(m,{id:"email",name:"email",type:"email",class:c(["form-control",{"is-invalid":l.email}]),placeholder:"email@gmail.com",rules:"required|email",modelValue:a.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=i=>a.form.user.email=i)},null,8,["class","modelValue"]),o(u,{name:"email",class:"invalid-feedback"})]),e("div",Z,[ee,o(m,{id:"name",name:"姓名",type:"text",class:c(["form-control",{"is-invalid":l.姓名}]),placeholder:"王小明",rules:"required",modelValue:a.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=i=>a.form.user.name=i)},null,8,["class","modelValue"]),o(u,{name:"姓名",class:"invalid-feedback"})]),e("div",se,[te,o(m,{id:"tel",name:"電話",type:"tel",class:c(["form-control",{"is-invalid":l.電話}]),placeholder:"0912345678",rules:"required|phone",modelValue:a.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=i=>a.form.user.tel=i)},null,8,["class","modelValue"]),o(u,{name:"電話",class:"invalid-feedback"})]),e("div",le,[ae,o(m,{id:"address",name:"地址",type:"text",class:c(["form-control",{"is-invalid":l.地址}]),placeholder:"xx市xx區xx路x段x號x樓",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=i=>a.form.user.address=i)},null,8,["class","modelValue"]),o(u,{name:"地址",class:"invalid-feedback"})]),e("div",oe,[ie,T(e("textarea",{class:"form-control",id:"remarks",cols:"30",rows:"5","onUpdate:modelValue":s[4]||(s[4]=i=>a.form.message=i)},null,512),[[U,a.form.message]])]),e("div",de,[o(V,{to:"/cart",class:"btn btn-light me-4"},{default:g(()=>[n("返回購物車")]),_:1}),e("span",{class:c({"disabled-cursor":!_.valid})},[e("button",{type:"submit",class:"btn btn-primary",disabled:!_.valid||t.carts.length===0}," 確認結帳 ",8,re)],2)])]),_:1},8,["onSubmit"])])])])])])}const fe=k(j,[["render",ce]]);export{fe as default};
