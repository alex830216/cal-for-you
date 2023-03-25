import{_ as y,b as C,a as x,r as i,o as l,c as p,d as t,e as a,w as n,t as o,f as d,C as T,D as S,F as h,j as m,k}from"./index-a97a57c8.js";import{c as E}from"./cart-b3410f03.js";import{S as V}from"./ShowCartToast-17a78fa6.js";import{A as L,N as $,S as R,a as A,b as B}from"./navigation.min-28f4497f.js";import"./logo-77d6255c.js";const{VITE_URL:b,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"cal-for-you",BASE_URL:"/cal-for-you/",MODE:"production",DEV:!1,PROD:!0},D={data(){return{products:[],product:{},categoryProduct:{},qty:1,modules:[L,$,R]}},methods:{getProduct(){const{id:r}=this.$route.params;this.$http(`${b}v2/api/${f}/product/${r}`).then(c=>{this.product=c.data.product,this.getSameCategory()})},getSameCategory(){const{category:r}=this.product;this.$http(`${b}v2/api/${f}/products?category=${r}`).then(c=>{this.products=c.data.products})},getCategoryProduct(r){this.product=r},showToast(){this.$refs.showCartToast.showCartToast()},...C(E,["addToCart"])},components:{RouterLink:x,ShowCartToast:V,Swiper:A,SwiperSlide:B},mounted(){this.getProduct()}},U={class:"container pt-6 pb-5"},j={style:{"--bs-breadcrumb-divider":`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`},"aria-label":"breadcrumb"},q={class:"breadcrumb"},I={class:"breadcrumb-item"},N={class:"breadcrumb-item active","aria-current":"page"},M={class:"container pb-7"},O={class:"row pt-2"},F={class:"col-12 col-lg-6 text-center pb-5 pb-lg-0"},H=["src"],z={class:"col-12 col-lg-6 px-5"},P={class:"text-center pb-3"},G={class:"pb-"},J=t("br",null,null,-1),K=["value"],Q={class:"pt-5 d-flex justify-content-between"},W=t("i",{class:"bi bi-cart-fill"},null,-1),X={class:"bg-primary-exlight"},Y={class:"container d-flex flex-fill flex-column align-items-center justify-content-center text-center py-5 col-8 col-lg-4"},Z=t("h3",{class:"fw-bold pb-4"},"您可能也喜歡",-1),tt={class:"card"},st=["src"],et={class:"card-body"},ot={class:"card-title fw-bold"},ct={class:"card-text"},rt={class:"text-decoration-line-through"},it=t("br",null,null,-1);function lt(r,c,at,nt,e,u){const _=i("RouterLink"),g=i("ShowCartToast"),v=i("swiper-slide"),w=i("swiper");return l(),p("div",null,[t("section",U,[t("div",j,[t("ol",q,[t("li",I,[a(_,{to:"/products",class:"link-primary text-decoration-none"},{default:n(()=>[d("商品列表")]),_:1})]),t("li",N,o(e.product.title),1)])])]),t("section",M,[t("div",O,[t("div",F,[t("img",{src:e.product.imageUrl,alt:"",class:"object-cover",height:"300"},null,8,H)]),t("div",z,[t("h2",P,o(e.product.title),1),t("p",null,o(e.product.description),1),t("div",G," 價格：$"+o(e.product.price),1),t("div",null,[d(" 數量"),J,T(t("select",{class:"form-select","aria-label":"exercise-frequency","onUpdate:modelValue":c[0]||(c[0]=s=>e.qty=s)},[(l(),p(h,null,m(10,s=>t("option",{value:s,key:`${s}18645`},o(s),9,K)),64))],512),[[S,e.qty]])]),t("div",Q,[t("button",{type:"button",class:"btn btn-primary",onClick:c[1]||(c[1]=s=>{r.addToCart(e.product.id,e.qty),u.showToast()})},[W,d(" 加入購物車 ")]),a(g,{ref:"showCartToast"},null,512)])])])]),t("section",X,[t("div",Y,[Z,a(w,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},scrollbar:{hide:!0},navigation:!0,modules:e.modules,class:"swiper"},{default:n(()=>[(l(!0),p(h,null,m(e.products,s=>(l(),k(v,{key:s.id},{default:n(()=>[t("div",tt,[a(_,{to:`/product/${s.id}`,onClick:dt=>u.getCategoryProduct(s),class:"overlay-link"},{default:n(()=>[t("img",{src:s.imageUrl,class:"card-img-top object-cover",height:"200",alt:"產品圖片"},null,8,st)]),_:2},1032,["to","onClick"]),t("div",et,[t("h5",ot,o(s.title),1),t("p",ct,[t("span",rt,"原價 $"+o(s.origin_price),1),it,d("現在只要 $"+o(s.price),1)]),t("p",null,"熱量："+o(s.calorie)+" 大卡",1),t("p",null,"蛋白質："+o(s.protein)+" 克",1)])])]),_:2},1024))),128))]),_:1},8,["modules"])])])])}const bt=y(D,[["render",lt]]);export{bt as default};
