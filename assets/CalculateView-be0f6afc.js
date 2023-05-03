import{_ as f,T,o as _,c as b,a as e,f as v,r as h,e as l,w as p,g as u,t as n,h as E,n as c}from"./index-dc695ea1.js";import{_ as k}from"./logo-77d6255c.js";const M={methods:{showCouponCopyToast(){this.toast.show()}},mounted(){this.toast=new T(this.$refs.couponCopyToast)}},B={class:"toast-container position-fixed top-7 end-0 p-3"},R={ref:"couponCopyToast",class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true"},F=v('<div class="toast-header"><img src="'+k+'" class="rounded me-2" height="20" alt="logo"><strong class="me-auto">Cal For You</strong><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body text-success fs-5"> 優惠碼已成功複製！ </div>',2),D=[F];function N(o,t,y,x,s,m){return _(),b("div",B,[e("div",R,D,512)])}const A=f(M,[["render",N]]),S={data(){return{weight:null,height:null,age:null,gender:"male",activity:"init",bmr:null,tdee:null,exercise:"init",protein:null,couponCode:"cal-for-you"}},methods:{calculateBMR(){let o=null;this.gender==="male"?o=88.362+13.397*this.weight+4.799*this.height-5.677*this.age:this.gender==="female"&&(o=447.593+9.247*this.weight+3.098*this.height-4.33*this.age),this.bmr=parseFloat(o.toFixed())},calculateTDEE(){let o=null;const t=this.bmr;this.activity==="sedentary"?o=t*1.2:this.activity==="lightly"?o=t*1.375:this.activity==="moderately"?o=t*1.55:this.activity==="very"?o=t*1.725:this.activity==="super"&&(o=t*1.9),this.tdee=parseFloat(o.toFixed())},calculateProtein(){const o=this.weight;this.exercise==="no-exercise"?this.protein=`${(o*.8).toFixed()}-${o*1}g`:this.exercise==="exercise-same"?this.protein=`${o*1}-${(o*1.5).toFixed()}g`:this.exercise==="exercise-more"&&(this.protein=`${(o*1.5).toFixed()}-${o*2}g`)},calculateAll(){this.calculateBMR(),this.calculateTDEE(),this.calculateProtein()},copyCouponCode(){navigator.clipboard.writeText(this.couponCode).then(()=>{this.showToast()})},showToast(){this.$refs.showCouponCopyToast.showCouponCopyToast()}},components:{ShowCouponCopyToast:A},watch:{height:function(o){Number(o)<1&&(this.height=1)},weight:function(o){Number(o)<1&&(this.weight=1)},age:function(o){Number(o)<1&&(this.age=1)}}},U=v('<section class="container pt-6 pb-4 px-4 px-lg-7"><h2 class="pb-1"> 想知道自己每天該攝取多少熱量嗎? </h2><p class="fs-5 pb-3"> 那您一定要先了解自己的基礎代謝率 (BMR)以及每日總熱量消耗 (TDEE) </p><ul class="pb-3"><li class="pb-2"><h3> 基礎代謝率BMR(Basal Metabolic Rate): </h3><p> 當我們身體安靜、不吃東西時，所要消耗的最低熱量， 會受年齡、性別、身高、體重影響。 </p></li><li><h3> 每日總熱量消耗TDEE(Total Daily Energy Expenditure): </h3><p> 一個人在一天內消耗的總能量，包括基礎代謝率(BMR)、 日常活動、消化食物和進行體育鍛煉等所消耗的能量。 </p></li></ul><h2 class="pb-1"> 想知道自己每天該攝取多少蛋白質嗎? </h2><p> 一般成年人每天對蛋白質的需求分別如下： </p><ul><li>平常無運動或是想減重：自己的體重(kg) x 0.8 ~ 1.0 (g)</li><li>有運動健身，想維持肌肉量：自己的體重(kg) x 1.0 ~ 1.5 (g)</li><li>有運動健身，想增加肌肉量：自己的體重(kg) x 1.5 ~ 2.0 (g)</li></ul><p> 講了這麼多，讓我們一起來算算看吧！ </p></section>',1),q={class:"bg-primary-exlight",id:"calculator"},L={class:"container py-5 px-4 px-lg-7 bg-primary-exlight"},P=e("h2",null," BMR、TDEE、蛋白質計算機 ",-1),G={class:"row align-items-center mb-3"},K=e("div",{class:"col-auto me-5"},[e("label",{class:"col-form-label"},"性別")],-1),z={class:"col-auto form-check ms-1 me-3"},Y=e("label",{class:"form-check-label",for:"male"}," 男 ",-1),j={class:"col-auto form-check me-3"},H=e("label",{class:"form-check-label",for:"female"}," 女 ",-1),I={class:"row g-3 align-items-center mb-3"},J=e("div",{class:"col-auto me-5"},[e("label",{for:"height",class:"col-form-label"},"身高")],-1),O={class:"col-6 col-lg-4"},Q=e("div",{class:"col-auto"}," 公分 ",-1),W={class:"row g-3 align-items-center mb-3"},X=e("div",{class:"col-auto me-5"},[e("label",{for:"weight",class:"col-form-label"},"體重")],-1),Z={class:"col-6 col-lg-4"},$=e("div",{class:"col-auto"}," 公斤 ",-1),ee={class:"row g-3 align-items-center mb-3"},se=e("div",{class:"col-auto me-5"},[e("label",{for:"age",class:"col-form-label"},"年齡")],-1),oe={class:"col-6 col-lg-4"},te=e("div",{class:"col-auto"}," 歲 ",-1),le={class:"row g-3 align-items-center mb-3"},ie=e("div",{class:"col-auto me-3"},[e("label",{for:"activity",class:"col-form-label"},"運動強度")],-1),ae={class:"col-12 col-sm-auto"},ne=e("option",{value:"init",selected:"",disabled:""},"請選擇",-1),ce=e("option",{value:"sedentary"},"極輕度，久坐的辦公室工作，很少運動",-1),de=e("option",{value:"lightly"},"輕度，每週運動1-3次",-1),re=e("option",{value:"moderately"},"中度，每週運動3-5次",-1),ue=e("option",{value:"very"},"高度，每週運動6-7次",-1),he=e("option",{value:"super"},"極高度，每天都有高強度運動或是體力勞動",-1),me={class:"row g-3 align-items-center mb-3"},pe=e("div",{class:"col-auto me-3"},[e("label",{class:"col-form-label"},"理想體態")],-1),_e={class:"col-12 col-sm-auto"},be=e("option",{value:"init",selected:"",disabled:""},"請選擇",-1),ve=e("option",{value:"no-exercise"},"平常無運動或是想減重",-1),ge=e("option",{value:"exercise-same"},"有運動健身，想維持肌肉量",-1),fe=e("option",{value:"exercise-more"},"有運動健身，想增加肌肉量",-1),ye=["disabled"],xe={key:0,class:"fs-4"},we={class:"pb-3"},Ce=e("br",null,null,-1),Ve=e("br",null,null,-1),Te=e("br",null,null,-1),Ee=e("br",null,null,-1),ke={class:"d-flex align-items-center pb-3"},Me={class:"pe-3 text-success"},Be=e("i",{class:"bi bi-arrow-right"},null,-1),Re=v('<section class="container text-secondary px-4 px-lg-7 py-5"><h4>計算公式：</h4><h5>BMR 使用哈里斯-本尼迪克特公式</h5><ul><li>BMR男：88.362 + 13.397 * KG + 4.799 * CM - 5.677 * AGE</li><li>BMR女：447.593 + 9.247 * KG + 3.098 * CM - 4.330 * AGE</li></ul><h5>TDEE = BMR x PAL</h5><h5>PAL：活動水平，即日常活動和運動所消耗的能量</h5><ul><li>久坐的辦公室工作，很少運動：1.2</li><li>輕度，每週運動1-3次：1.375</li><li>中度，每週運動3-5次：1.55</li><li>高度，每週運動6-7次：1.725</li><li>極高度，每天都有高強度運動或是體力勞動：1.9</li></ul><p> 例如，一個男性，身高170公分，體重60公斤，年齡20歲，平時的活動水平為每週運動3-5次，則他的TDEE可以按照以下步驟計算： <br> 先計算BMR： 88.362 + 13.397 * 60 + 4.799 * 170 - 5.677 * 20 10 x 60 + 6.25 x 170 - 5 x 20 + 5 = 1597.97（大約為1598大卡） <br> 再乘以PAL的數值:1598 x 1.55 = 2478.9（大約為2479大卡） </p></section>',1);function Fe(o,t,y,x,s,m){const d=h("VField"),r=h("ErrorMessage"),w=h("VForm"),C=h("RouterLink"),V=h("ShowCouponCopyToast");return _(),b("div",null,[U,e("section",q,[e("div",L,[P,l(w,{onSubmit:m.calculateAll,class:"pb-4"},{default:p(({errors:a,meta:g})=>[e("div",G,[K,e("div",z,[l(d,{id:"male",name:"性別",type:"radio",class:c(["form-check-input",{"is-invalid":a.性別}]),modelValue:s.gender,"onUpdate:modelValue":t[0]||(t[0]=i=>s.gender=i),value:"male"},null,8,["class","modelValue"]),l(r,{name:"性別",class:"invalid-feedback"}),Y]),e("div",j,[l(d,{id:"female",name:"性別",type:"radio",class:c(["form-check-input",{"is-invalid":a.性別}]),modelValue:s.gender,"onUpdate:modelValue":t[1]||(t[1]=i=>s.gender=i),value:"female"},null,8,["class","modelValue"]),l(r,{name:"性別",class:"invalid-feedback"}),H])]),e("div",I,[J,e("div",O,[l(d,{id:"height",name:"身高",type:"number",class:c(["form-control",{"is-invalid":a.身高}]),placeholder:"請輸入身高",rules:"required|min_value:0",modelValue:s.height,"onUpdate:modelValue":t[2]||(t[2]=i=>s.height=i),modelModifiers:{number:!0}},null,8,["class","modelValue"]),l(r,{name:"身高",class:"invalid-feedback"})]),Q]),e("div",W,[X,e("div",Z,[l(d,{id:"weight",name:"體重",type:"number",class:c(["form-control",{"is-invalid":a.體重}]),placeholder:"請輸入體重",rules:"required|min_value:0",modelValue:s.weight,"onUpdate:modelValue":t[3]||(t[3]=i=>s.weight=i),modelModifiers:{number:!0}},null,8,["class","modelValue"]),l(r,{name:"體重",class:"invalid-feedback"})]),$]),e("div",ee,[se,e("div",oe,[l(d,{id:"age",name:"年齡",type:"number",class:c(["form-control",{"is-invalid":a.年齡}]),placeholder:"請輸入年齡",rules:"required|min_value:0",modelValue:s.age,"onUpdate:modelValue":t[4]||(t[4]=i=>s.age=i),modelModifiers:{number:!0}},null,8,["class","modelValue"]),l(r,{name:"年齡",class:"invalid-feedback"})]),te]),e("div",le,[ie,e("div",ae,[l(d,{id:"activity",name:"運動強度",class:c(["form-select",{"is-invalid":a.運動強度}]),rules:"required|is_not:init",modelValue:s.activity,"onUpdate:modelValue":t[5]||(t[5]=i=>s.activity=i),as:"select"},{default:p(()=>[ne,ce,de,re,ue,he]),_:2},1032,["class","modelValue"]),l(r,{name:"運動強度",class:"invalid-feedback"})])]),e("div",me,[pe,e("div",_e,[l(d,{id:"exercise",name:"理想體態",class:c(["form-select",{"is-invalid":a.理想體態}]),rules:"required|is_not:init",modelValue:s.exercise,"onUpdate:modelValue":t[6]||(t[6]=i=>s.exercise=i),as:"select"},{default:p(()=>[be,ve,ge,fe]),_:2},1032,["class","modelValue"]),l(r,{name:"理想體態",class:"invalid-feedback"})])]),e("div",null,[e("span",{class:c({"disabled-cursor":!g.valid})},[e("button",{type:"submit",class:"btn btn-primary",disabled:!g.valid}," 計算 ",8,ye)],2)])]),_:1},8,["onSubmit"]),s.bmr&&s.tdee&&s.protein?(_(),b("div",xe,[e("div",we,[u(" 您的每日基礎代謝率BMR： "+n(s.bmr)+" 大卡",1),Ce,u(" 您的每日總熱量消耗TDEE： "+n(s.tdee)+" 大卡",1),Ve,u(" 想減脂，建議攝取： "+n((s.tdee*.8).toFixed())+" ~ "+n(s.tdee*1)+" 大卡",1),Te,u(" 想增肌，建議攝取： "+n(s.tdee+100)+" ~ "+n(s.tdee+500)+" 大卡",1),Ee,u(" 每日蛋白質需求： "+n(s.protein),1)]),e("div",ke,[e("div",Me," 輸入優惠碼："+n(s.couponCode)+"，享九折優惠 ",1),e("button",{type:"button",class:"btn btn-outline-primary",onClick:t[7]||(t[7]=(...a)=>m.copyCouponCode&&m.copyCouponCode(...a))}," 點我複製優惠碼 ")]),l(C,{to:"/products",class:"btn btn-primary text-decoration-none fs-4 fw-bold hvr-grow"},{default:p(()=>[Be,u(" 前往購物")]),_:1})])):E("",!0)])]),Re,l(V,{ref:"showCouponCopyToast"},null,512)])}const Ae=f(S,[["render",Fe]]);export{Ae as default};