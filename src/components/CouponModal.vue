<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 id="couponModalLabel" class="modal-title">
          <span v-if="!innerCoupon.id">新增優惠券</span>
          <span v-else>編輯產品</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-12">
            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="innerCoupon.title">
            </div>

            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="percent" class="form-label">打折比例</label>
                <input id="percent" type="number" min="0" max="100" class="form-control" placeholder="請輸入打折比例" v-model="innerCoupon.percent">
              </div>
            </div>

            <div class="mb-3">
              <label for="due_date" class="form-label">到期日</label>
              <input id="due_date" type="month" class="form-control" placeholder="請輸入到期日" v-model="innerCoupon.due_date">
            </div>

            <div class="mb-3">
              <label for="code" class="form-label">優惠代碼</label>
              <input id="code" type="text" class="form-control" placeholder="請輸入優惠代碼" v-model="innerCoupon.code">
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="innerCoupon.is_enabled">
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          取消
        </button>
        <button type="button" class="btn btn-primary" @click="addOrUpdateCoupon">
          確認
        </button>
      </div >
    </div >
  </div >
</template>

<script>
export default {
  props: ['tempCoupon', 'addOrUpdateCoupon'],
  computed: {
    innerCoupon () {
      return this.tempCoupon
    }
  }
}
</script>
