<template>
  <!-- 做視差滾動 -->
  <section class="position-relative">
    <div class="banner d-flex align-items-center justify-content-center fs-1 text-white text-opacity-75"
    style="background: no-repeat top/cover url(https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80); width: 100%; height: 100vh;">
      <div class="container position-absolute top-50 start-50 translate-middle text-center">
        <p class="fw-bold text-primary-light">不知道該吃多少嗎?<br>交給我們幫你算</p>
        <a href="#" class="btn btn-primary-transparent btn-lg">幫你算</a>
      </div>
    </div>
  </section>

  <section class="text-primary-dark bg-primary-exlight">
    <div class="container text-center py-5">
      <div class="fs-2 fw-bold pb-5">您是否有以下困擾?</div>
      <div class="row align-items-center justify-content-center py-sm">
        <div class="col-md-6 pb-5 pb-md-0">
          <img src="https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" class="img-fluid" alt="diet" style="object-fit: cover;">
        </div>
        <div class="col-md-6 ">
          <h2 class="fs-3">想減肥<br>但不知道該吃哪些食物</h2>
        </div>
      </div>
      <div class="row flex-row-reverse align-items-center justify-content-center py-sm">
        <div class="col-md-6 pb-5 pb-md-0">
          <img src="https://images.unsplash.com/photo-1577563612200-a95560e2edec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="img-fluid" alt="obesity" style="object-fit: cover;">
        </div>
        <div class="col-md-6">
          <h2 class="fs-3">想減脂<br>害怕攝取過多熱量</h2>
        </div>
      </div>
      <div class="row align-items-center justify-content-center py-sm">
        <div class="col-md-6 pb-5 pb-md-0">
          <img src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="img-fluid" alt="training" style="object-fit: cover;">
        </div>
        <div class="col-md-6">
          <h2 class="fs-3">想增肌<br>這樣吃，蛋白質夠嗎</h2>
        </div>
      </div>
    </div>
  </section>

  <!-- 做視差滾動，使用 AOS -->
  <section class="position-relative">
    <div class="concept d-flex align-items-center justify-content-center text-primary-light"
    style="background: no-repeat center / cover url(https://images.unsplash.com/photo-1505744386214-51dba16a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80); width: 100%; height: 300px;">
      <div class="container position-absolute top-50 start-50 translate-middle text-center">
        <h2 class="pb-3 fs-2">品牌理念</h2>
        <p class="fs-4">結合 <strong class="fs-3">Cal</strong>culate 與 <strong class="fs-3">Cal</strong>orie<br>為您計算一天所需的熱量以及蛋白質</p>
      </div>
    </div>
  </section>

  <!-- 使用輪播效果左右切換食物 -->
  <section class="bg-primary-exlight">
    <div class="container d-flex flex-column align-items-center justify-content-center text-center py-5">
      <h2 class="fw-bold pb-4">優選好食</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <a href="#"><img src="..." class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h5 class="card-title fw-bold">產品名稱</h5>
              <p class="card-text">原價<br>現在只要</p>
              <a href="#" class="btn btn-outline-primary mb-0 mb-md-2 mb-lg-0 me-2 me-md-0"><i class="bi bi-heart-fill"></i> 加入收藏</a>
              <a href="#" class="btn btn-primary"><i class="bi bi-cart-fill"></i> 加入購物車</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <a href="#"><img src="..." class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h5 class="card-title fw-bold">產品名稱</h5>
              <p class="card-text">原價<br>現在只要</p>
              <a href="#" class="btn btn-outline-primary mb-0 mb-md-2 mb-lg-0"><i class="bi bi-heart-fill"></i> 加入收藏</a>
              <a href="#" class="btn btn-primary"><i class="bi bi-cart-fill"></i> 加入購物車</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <a href="#"><img src="..." class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h5 class="card-title fw-bold">產品名稱</h5>
              <p class="card-text">原價<br>現在只要</p>
              <a href="#" class="btn btn-outline-primary mb-0 mb-md-2 mb-lg-0"><i class="bi bi-heart-fill"></i> 加入收藏</a>
              <a href="#" class="btn btn-primary"><i class="bi bi-cart-fill"></i> 加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-light text-primary-dark py-4">
    <div class="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Cal For You 幫你算</h2>
      <p>聯絡我們：0912345678 <a href="#"><i class="bi bi-facebook fs-3"></i></a> <a href="#" class="line-link"><i class="bi bi-line fs-3"></i></a><br>營業時間（六日公休）：週一 ~ 週五 09：00 ~ 20：00</p>
    </div>
  </section>
</template>

<script>

</script>
