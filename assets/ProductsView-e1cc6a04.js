import{_ as x,d as T,b as v,m as P,r as l,o as b,c as m,a as e,g as d,F as k,i as w,e as c,w as L,t as r}from"./index-dc695ea1.js";import{L as S}from"./LoadingComponent-e13bbfe8.js";import{P as E}from"./PaginationComponent-d8082917.js";import{c as f}from"./cart-b792bc43.js";import{S as B}from"./ShowCartToast-3c2d63ac.js";import"./_commonjsHelpers-042e6b4d.js";import"./logo-77d6255c.js";const{VITE_URL:u,VITE_PATH:p}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"cal-for-you",BASE_URL:"/cal-for-you/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},V={data(){return{products:[],page:{}}},methods:{getProducts(n=1){this.$http(`${u}v2/api/${p}/products?page=${n}`).then(t=>{this.products=t.data.products,this.page=t.data.pagination,this.$refs.loading.loading.isLoading=!1;const s=this.$refs.allProducts;s.parentNode.parentNode.querySelectorAll("button").forEach(i=>{i.disabled=!1}),s.disabled=!0}).catch(t=>{alert(t.response.data.message)})},filterCategory(n){this.$http(`${u}v2/api/${p}/products/all`).then(t=>{this.products=t.data.products.filter(s=>s.category===n.innerText),this.btnDisabled(n)}).catch(t=>{alert(t.response.data.message)})},filterCal(n){this.$http(`${u}v2/api/${p}/products/all`).then(t=>{n.innerText==="0 ~ 300"?this.products=t.data.products.filter(s=>s.calorie>=0&&s.calorie<=300):n.innerText==="301 ~ 600"?this.products=t.data.products.filter(s=>s.calorie>=301&&s.calorie<=600):n.innerText==="601"&&(this.products=t.data.products.filter(s=>s.calorie>=601)),this.btnDisabled(n)}).catch(t=>{alert(t.response.data.message)})},filterProtein(n){this.$http(`${u}v2/api/${p}/products/all`).then(t=>{n.innerText==="0 ~ 10"?this.products=t.data.products.filter(s=>s.protein>=0&&s.protein<=10):n.innerText==="10.1 ~ 20"?this.products=t.data.products.filter(s=>s.protein>=10.1&&s.protein<=20):n.innerText==="20.1"&&(this.products=t.data.products.filter(s=>s.protein>=20.1)),this.btnDisabled(n)}).catch(t=>{alert(t.response.data.message)})},showToast(){this.$refs.cartToast.showCartToast()},btnDisabled(n){n.parentNode.parentNode.querySelectorAll("button").forEach(s=>{s.disabled=!1}),n.disabled=!0},...T(f,["addToCart"])},components:{RouterLink:v,PaginationComponent:E,LoadingComponent:S,ShowCartToast:B},mounted(){this.getProducts()},computed:{...P(f,["loadingItem"])}},D={class:"container"},R={class:"pt-6"},$=e("h2",{class:"fw-bold pb-4 text-center"},"商品列表",-1),I={class:"row d-flex flex-md-row flex-column"},N={class:"col-8 col-md-3 align-self-center align-self-md-start"},A={class:"pb-3 pb-md-5 d-flex flex-column"},U={class:"pb-3 pb-md-5 d-flex flex-column"},q=e("button",{type:"button",class:"btn btn-primary mb-2 disabled"},"熱量 (Cal)",-1),j=e("i",{class:"bi bi-arrow-up"},null,-1),F={class:"pb-3 pb-md-5 d-flex flex-column"},H=e("button",{type:"button",class:"btn btn-primary mb-2 disabled"},"蛋白質 (g)",-1),O=e("i",{class:"bi bi-arrow-up"},null,-1),z={class:"col-12 col-md-9"},M={class:"row g-4"},G={class:"card card-translate mb-5",style:{position:"relative"}},J=["src"],K={class:"card-body text-center"},Q={class:"card-title fw-bold"},W={class:"card-text"},X={class:"text-decoration-line-through"},Y=e("br",null,null,-1),Z={class:"fs-5 text-danger"},tt=["onClick","disabled"],et=e("i",{class:"bi bi-cart-fill"},null,-1),ot={class:"d-flex justify-content-center pt-5"};function st(n,t,s,g,i,a){const h=l("RouterLink"),_=l("LoadingComponent"),y=l("ShowCartToast"),C=l("PaginationComponent");return b(),m("div",D,[e("section",R,[$,e("div",I,[e("div",N,[e("div",A,[e("button",{type:"button",onClick:t[0]||(t[0]=(...o)=>a.getProducts&&a.getProducts(...o)),ref:"allProducts",class:"btn btn-outline-primary mb-2"},"全部商品",512),e("button",{type:"button",onClick:t[1]||(t[1]=o=>a.filterCategory(o.target)),class:"btn btn-outline-primary mb-2"},"健康餐盒"),e("button",{type:"button",onClick:t[2]||(t[2]=o=>a.filterCategory(o.target)),class:"btn btn-outline-primary mb-2"},"乳清蛋白"),e("button",{type:"button",onClick:t[3]||(t[3]=o=>a.filterCategory(o.target)),class:"btn btn-outline-primary mb-2"},"雞肉"),e("button",{type:"button",onClick:t[4]||(t[4]=o=>a.filterCategory(o.target)),class:"btn btn-outline-primary"},"海鮮")]),e("div",U,[q,e("button",{type:"button",onClick:t[5]||(t[5]=o=>a.filterCal(o.target)),class:"btn btn-outline-primary mb-2"},"0 ~ 300"),e("button",{type:"button",onClick:t[6]||(t[6]=o=>a.filterCal(o.target)),class:"btn btn-outline-primary mb-2"},"301 ~ 600"),e("button",{type:"button",onClick:t[7]||(t[7]=o=>a.filterCal(o.target)),class:"btn btn-outline-primary"},[d("601"),j])]),e("div",F,[H,e("button",{type:"button",onClick:t[8]||(t[8]=o=>a.filterProtein(o.target)),class:"btn btn-outline-primary mb-2"},"0 ~ 10"),e("button",{type:"button",onClick:t[9]||(t[9]=o=>a.filterProtein(o.target)),class:"btn btn-outline-primary mb-2"},"10.1 ~ 20"),e("button",{type:"button",onClick:t[10]||(t[10]=o=>a.filterProtein(o.target)),class:"btn btn-outline-primary"},[d("20.1"),O])])]),e("div",z,[e("div",M,[(b(!0),m(k,null,w(i.products,o=>(b(),m("div",{key:o.id,class:"col-12 col-md-6 col-lg-4"},[e("div",G,[c(h,{to:`/product/${o.id}`,class:"nav-link overlay-link"},{default:L(()=>[e("img",{src:o.imageUrl,class:"card-img-top object-cover",height:"200",alt:"productImage"},null,8,J),e("div",K,[e("h5",Q,r(o.title),1),e("p",W,[e("span",X,"原價 $"+r(o.origin_price),1),Y,d("現在只要 "),e("span",Z,"$"+r(o.price),1)]),e("p",null,"熱量："+r(o.calorie)+" 大卡",1),e("p",null,"蛋白質："+r(o.protein)+" 克",1)])]),_:2},1032,["to"]),e("button",{type:"button",class:"btn btn-outline-primary",style:{position:"absolute",width:"100%",bottom:"-40px",left:"0",right:"0","z-index":"1"},onClick:nt=>n.addToCart(o.id,n.qty,a.showToast),disabled:o.id===n.loadingItem},[et,d(" 加入購物車 ")],8,tt)])]))),128))])])])]),c(_,{ref:"loading"},null,512),c(y,{ref:"cartToast"},null,512),e("section",ot,[c(C,{pages:i.page,onChangePage:a.getProducts},null,8,["pages","onChangePage"])])])}const pt=x(V,[["render",st]]);export{pt as default};