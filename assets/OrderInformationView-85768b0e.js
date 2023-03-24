import{_ as k,b as C,m as E,r as u,o as v,c as b,d as e,F as I,j as $,H as q,t as d,e as o,w as _,i as T,f as r,A as p,C as U,G as j}from"./index-c154cf11.js";import{c as g}from"./cart-dd1cb09b.js";const{VITE_URL:f,VITE_PATH:h}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"cal-for-you",BASE_URL:"/cal-for-you/",MODE:"production",DEV:!1,PROD:!0},F={data(){return{cart:{},loadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{updateCart(t){const s={product_id:t.product.id,qty:t.qty};this.loadingItem=t.id,this.$http.put(`${f}v2/api/${h}/cart/${t.id}`,{data:s}).then(c=>{this.cart=c.data.data,this.getCart(),this.loadingItem=""})},deleteCart(t){this.loadingItem=t.id,this.$http.delete(`${f}v2/api/${h}/cart/${t.id}`).then(()=>{this.getCart(),this.loadingItem=""})},deleteCarts(){this.$http.delete(`${f}v2/api/${h}/carts`).then(()=>{this.getCart()})},createOrder(){const t=this.form;this.$http.post(`${f}v2/api/${h}/order`,{data:t}).then(s=>{this.$refs.form.resetForm(),this.form.message="",this.getCart();const c=s.data.orderId;this.$router.push({name:"payment",query:{id:c}})}).catch(s=>{alert(s.response.data.message)})},...C(g,["getCart","addToCart"])},computed:{...E(g,["carts","total","final_total"])},mounted(){this.getCart()}},S=T('<section class="container pt-6 pb-5"><h2 class="text-center pb-4 fw-bold">填寫訂購資料</h2><div class="row"><div class="col-3 pe-0"><div class="timeline-item d-flex flex-column align-items-center justify-content-center"><div class="line bg-black w-100"></div><div class="circle bg-white border border border-primary rounded-circle"></div><div class="mt-3">購物車清單</div></div></div><div class="col-3 px-0"><div class="timeline-item d-flex flex-column align-items-center justify-content-center"><div class="line bg-black w-100"></div><div class="circle bg-primary border border-primary rounded-circle"></div><div class="mt-3 fw-bold">填寫訂購資料</div></div></div><div class="col-3 px-0"><div class="timeline-item d-flex flex-column align-items-center justify-content-center"><div class="line bg-black w-100"></div><div class="circle bg-white border border-primary rounded-circle"></div><div class="mt-3">填寫付款資料</div></div></div><div class="col-3 ps-0"><div class="timeline-item d-flex flex-column align-items-center justify-content-center"><div class="line bg-black w-100"></div><div class="circle bg-white border border-primary rounded-circle"></div><div class="mt-3">完成訂單</div></div></div></div></section>',1),L={class:"container py-3"},R={class:"table table-hover align-middle text-center"},A=e("thead",null,[e("tr",{class:"table-primary"},[e("th",{class:"col-6"},"品名"),e("th",{class:"col-2"},"單價"),e("th",{class:"col-2"},"數量"),e("th",{class:"col-2"},"小計")])],-1),D=["src"],N={class:"fs-4"},O=e("td",{colspan:"3",class:"col-11 text-end pe-5 fw-bold"},"訂單金額",-1),B={class:"col-1 fw-bold"},M={class:"container"},H={class:"bg-primary-subtle p-4"},P=e("h3",{class:"pb-3"}," 訂購資料 ",-1),z=e("div",{class:"mb-3 text-danger"},"* 為必填",-1),G={class:"mb-3"},J=e("label",{for:"email",class:"form-label"},[r("Email "),e("span",{class:"text-danger"},"*")],-1),K={class:"mb-3"},Q=e("label",{for:"name",class:"form-label"},[r("收件人姓名 "),e("span",{class:"text-danger"},"*")],-1),W={class:"mb-3"},X=e("label",{for:"tel",class:"form-label"},[r("收件人電話 "),e("span",{class:"text-danger"},"*")],-1),Y={class:"mb-3"},Z=e("label",{for:"address",class:"form-label"},[r("收件人地址 "),e("span",{class:"text-danger"},"*")],-1),ee={class:"mb-4"},se=e("label",{for:"remarks",class:"form-label"},"備註",-1),te={class:"d-flex justify-content-end align-items-center p-3"},le=["disabled"];function ae(t,s,c,oe,a,x){const n=u("VField"),m=u("ErrorMessage"),y=u("RouterLink"),V=u("VForm");return v(),b("div",null,[S,e("section",L,[e("table",R,[A,e("tbody",null,[t.carts?(v(!0),b(I,{key:0},$(t.carts,l=>(v(),b("tr",{key:l.id},[e("td",null,[e("img",{src:l.product.imageUrl,class:"object-cover",height:"100",alt:""},null,8,D),r(d(l.product.title),1)]),e("td",null,d(l.product.price),1),e("td",null,d(l.qty),1),e("td",null," $"+d(l.product.price*l.qty),1)]))),128)):q("",!0)]),e("tfoot",null,[e("tr",N,[O,e("td",B,"$"+d(t.final_total),1)])])])]),e("section",M,[e("div",H,[P,o(V,{class:"pb-4",ref:"form",onSubmit:x.createOrder},{default:_(({errors:l,meta:w})=>[z,e("div",G,[J,o(n,{id:"email",name:"email",type:"email",class:p(["form-control",{"is-invalid":l.email}]),placeholder:"name@gmail.com",rules:"required|email",modelValue:a.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=i=>a.form.user.email=i)},null,8,["class","modelValue"]),o(m,{name:"email",class:"invalid-feedback"})]),e("div",K,[Q,o(n,{id:"name",name:"姓名",type:"text",class:p(["form-control",{"is-invalid":l.姓名}]),placeholder:"王小明",rules:"required",modelValue:a.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=i=>a.form.user.name=i)},null,8,["class","modelValue"]),o(m,{name:"姓名",class:"invalid-feedback"})]),e("div",W,[X,o(n,{id:"tel",name:"電話",type:"tel",class:p(["form-control",{"is-invalid":l.電話}]),placeholder:"0912345678",rules:"required|phone",modelValue:a.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=i=>a.form.user.tel=i)},null,8,["class","modelValue"]),o(m,{name:"電話",class:"invalid-feedback"})]),e("div",Y,[Z,o(n,{id:"address",name:"地址",type:"text",class:p(["form-control",{"is-invalid":l.地址}]),placeholder:"xx市xx區xx路x段x號x樓",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=i=>a.form.user.address=i)},null,8,["class","modelValue"]),o(m,{name:"地址",class:"invalid-feedback"})]),e("div",ee,[se,U(e("textarea",{class:"form-control",id:"remarks",cols:"30",rows:"5","onUpdate:modelValue":s[4]||(s[4]=i=>a.form.message=i)},null,512),[[j,a.form.message]])]),e("div",te,[o(y,{to:"/cart",class:"btn btn-light me-3"},{default:_(()=>[r("返回購物車")]),_:1}),e("button",{type:"submit",class:"btn btn-primary",disabled:!w.valid||t.carts.length===0}," 確認結帳 ",8,le)])]),_:1},8,["onSubmit"])])])])}const de=k(F,[["render",ae]]);export{de as default};
