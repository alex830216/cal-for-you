import{_ as x,d as C,b as S,r as n,o as c,c as d,a as t,e as a,w as l,t as o,f as u,bt as T,bj as k,F as p,j as _,k as f}from"./index-37a6019e.js";import{c as E}from"./cart-e8736bef.js";import{S as V}from"./ShowCartToast-77de8254.js";import{A as U,N as L,S as B,a as R,b as $}from"./navigation.min-645f1b0e.js";import"./logo-77d6255c.js";const{VITE_URL:v,VITE_PATH:w}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"cal-for-you",BASE_URL:"/cal-for-you/",MODE:"production",DEV:!1,PROD:!0},j={data(){return{products:[],product:{},productPictures:[],categoryProduct:{},qty:1,modules:[U,L,B]}},methods:{getProduct(){const{id:i}=this.$route.params;this.$http(`${v}v2/api/${w}/product/${i}`).then(r=>{this.product=r.data.product,this.product.imagesUrl?this.productPictures=[this.product.imageUrl,...this.product.imagesUrl]:this.productPictures=[this.product.imageUrl],this.getSameCategory()})},getSameCategory(){const{category:i}=this.product;this.$http(`${v}v2/api/${w}/products?category=${i}`).then(r=>{this.products=r.data.products})},getCategoryProduct(i){this.product=i},showToast(){this.$refs.showCartToast.showCartToast()},...C(E,["addToCart"])},components:{RouterLink:S,ShowCartToast:V,Swiper:R,SwiperSlide:$},mounted(){this.getProduct()}},A={class:"container pt-6 pb-5"},q={style:{"--bs-breadcrumb-divider":`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`},"aria-label":"breadcrumb"},D={class:"breadcrumb"},I={class:"breadcrumb-item"},N={class:"breadcrumb-item active","aria-current":"page"},P={class:"container pb-7"},M={class:"row pt-2"},O={class:"col-12 col-lg-6 text-center pb-5 pb-lg-0"},F=["src"],H={class:"col-12 col-lg-6 px-5"},z={class:"text-center pb-3"},G={class:"pb-"},J=t("br",null,null,-1),K=["value"],Q={class:"pt-5 d-flex justify-content-between"},W=t("i",{class:"bi bi-cart-fill"},null,-1),X={class:"bg-primary-exlight"},Y={class:"container d-flex flex-fill flex-column align-items-center justify-content-center text-center py-5 col-8 col-lg-4"},Z=t("h3",{class:"fw-bold pb-4"},"您可能也喜歡",-1),tt={class:"card"},et=["src"],st={class:"card-body"},ot={class:"card-title fw-bold"},rt={class:"card-text"},it={class:"text-decoration-line-through"},ct=t("br",null,null,-1);function lt(i,r,at,nt,s,h){const m=n("RouterLink"),b=n("swiper-slide"),g=n("swiper"),y=n("ShowCartToast");return c(),d("div",null,[t("section",A,[t("div",q,[t("ol",D,[t("li",I,[a(m,{to:"/products",class:"link-primary text-decoration-none"},{default:l(()=>[u("商品列表")]),_:1})]),t("li",N,o(s.product.title),1)])])]),t("section",P,[t("div",M,[t("div",O,[a(g,{spaceBetween:30,centeredSlides:!0,scrollbar:{hide:!0},loop:!0,navigation:!0,modules:s.modules,class:"swiper"},{default:l(()=>[(c(!0),d(p,null,_(s.productPictures,e=>(c(),f(b,{key:e},{default:l(()=>[t("img",{src:e,alt:"",class:"object-cover w-100",height:"422"},null,8,F)]),_:2},1024))),128))]),_:1},8,["modules"])]),t("div",H,[t("h2",z,o(s.product.title),1),t("p",null,o(s.product.description),1),t("div",G," 價格：$"+o(s.product.price),1),t("div",null,[u(" 數量"),J,T(t("select",{class:"form-select","aria-label":"exercise-frequency","onUpdate:modelValue":r[0]||(r[0]=e=>s.qty=e)},[(c(),d(p,null,_(10,e=>t("option",{value:e,key:`${e}18645`},o(e),9,K)),64))],512),[[k,s.qty]])]),t("div",Q,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:r[1]||(r[1]=e=>{i.addToCart(s.product.id,s.qty),h.showToast()})},[W,u(" 加入購物車 ")]),a(y,{ref:"showCartToast"},null,512)])])])]),t("section",X,[t("div",Y,[Z,a(g,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},scrollbar:{hide:!0},navigation:!0,modules:s.modules,class:"swiper"},{default:l(()=>[(c(!0),d(p,null,_(s.products,e=>(c(),f(b,{key:e.id},{default:l(()=>[t("div",tt,[a(m,{to:`/product/${e.id}`,onClick:dt=>h.getCategoryProduct(e),class:"overlay-link"},{default:l(()=>[t("img",{src:e.imageUrl,class:"card-img-top object-cover",height:"200",alt:"產品圖片"},null,8,et)]),_:2},1032,["to","onClick"]),t("div",st,[t("h5",ot,o(e.title),1),t("p",rt,[t("span",it,"原價 $"+o(e.origin_price),1),ct,u("現在只要 $"+o(e.price),1)]),t("p",null,"熱量："+o(e.calorie)+" 大卡",1),t("p",null,"蛋白質："+o(e.protein)+" 克",1)])])]),_:2},1024))),128))]),_:1},8,["modules"])])])])}const bt=x(j,[["render",lt]]);export{bt as default};
