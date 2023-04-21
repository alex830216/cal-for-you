<template>
  <div>
    <section class="container pt-6 pb-4 px-4 px-lg-7">
      <h2 class="pb-1">
        想知道自己每天該攝取多少熱量嗎?
      </h2>
      <p class="fs-5 pb-3">
        那您一定要先了解自己的基礎代謝率 (BMR)以及每日總熱量消耗 (TDEE)
      </p>
      <ul class="pb-3">
        <li class="pb-2">
          <h3>
            基礎代謝率BMR(Basal Metabolic Rate):
          </h3>
          <p>
            當我們身體安靜、不吃東西時，所要消耗的最低熱量，
            會受年齡、性別、身高、體重影響。
          </p>
        </li>
        <li>
          <h3>
            每日總熱量消耗TDEE(Total Daily Energy Expenditure):
          </h3>
          <p>
            一個人在一天內消耗的總能量，包括基礎代謝率(BMR)、
            日常活動、消化食物和進行體育鍛煉等所消耗的能量。
          </p>
        </li>
      </ul>
      <h2 class="pb-1">
        想知道自己每天該攝取多少蛋白質嗎?
      </h2>
      <p>
        一般成年人每天對蛋白質的需求分別如下：
      </p>
      <ul>
        <li>平常無運動或是想減重：自己的體重(kg) x 0.8 ~ 1.0 (g)</li>
        <li>有運動健身，想維持肌肉量：自己的體重(kg) x 1.0 ~ 1.5 (g)</li>
        <li>有運動健身，想增加肌肉量：自己的體重(kg) x 1.5 ~ 2.0 (g)</li>
      </ul>
      <p>
        講了這麼多，讓我們一起來算算看吧！
      </p>
    </section>
    <section class="bg-primary-exlight" id="calculator">
      <div class="container py-5 px-4 px-lg-7 bg-primary-exlight">
        <h2>
          BMR、TDEE、蛋白質計算機
        </h2>
        <VForm v-slot="{ errors, meta }" @submit="calculateAll" class="pb-4">
          <div class="row align-items-center mb-3">
            <div class="col-auto me-5">
              <label class="col-form-label">性別</label>
            </div>
            <div class="col-auto form-check ms-1 me-3">
              <VField
                id="male"
                name="性別"
                type="radio"
                class="form-check-input"
                :class="{ 'is-invalid': errors['性別'] }"
                v-model="gender"
                value="male" />
              <ErrorMessage name="性別" class="invalid-feedback" />
              <label class="form-check-label" for="male">
                男
              </label>
            </div>
            <div class="col-auto form-check me-3">
              <VField
                id="female"
                name="性別"
                type="radio"
                class="form-check-input"
                :class="{ 'is-invalid': errors['性別'] }"
                v-model="gender"
                value="female" />
              <ErrorMessage name="性別" class="invalid-feedback" />
              <label class="form-check-label" for="female">
                女
              </label>
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3">
            <div class="col-auto me-5">
              <label for="height" class="col-form-label">身高</label>
            </div>
            <div class="col-6 col-lg-4">
              <VField
                id="height"
                name="身高"
                type="number"
                class="form-control"
                :class="{ 'is-invalid': errors['身高'] }"
                placeholder="請輸入身高"
                rules="required|min_value:0"
                v-model.number="height" />
              <ErrorMessage name="身高" class="invalid-feedback" />
            </div>
            <div class="col-auto">
              公分
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3">
            <div class="col-auto me-5">
              <label for="weight" class="col-form-label">體重</label>
            </div>
            <div class="col-6 col-lg-4">
              <VField
                id="weight"
                name="體重"
                type="number"
                class="form-control"
                :class="{ 'is-invalid': errors['體重'] }"
                placeholder="請輸入體重"
                rules="required|min_value:0"
                v-model.number="weight" />
              <ErrorMessage name="體重" class="invalid-feedback" />
            </div>
            <div class="col-auto">
              公斤
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3">
            <div class="col-auto me-5">
              <label for="age" class="col-form-label">年齡</label>
            </div>
            <div class="col-6 col-lg-4">
              <VField
                id="age"
                name="年齡"
                type="number"
                class="form-control"
                :class="{ 'is-invalid': errors['年齡'] }"
                placeholder="請輸入年齡"
                rules="required|min_value:0"
                v-model.number="age" />
              <ErrorMessage name="年齡" class="invalid-feedback" />
            </div>
            <div class="col-auto">
              歲
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3">
            <div class="col-auto me-3">
              <label for="activity" class="col-form-label">運動強度</label>
            </div>
            <div class="col-12 col-sm-auto">
              <VField
                id="activity"
                name="運動強度"
                class="form-select"
                :class="{ 'is-invalid': errors['運動強度'] }"
                rules="required|is_not:init"
                v-model="activity"
                as="select">
                <option value="init" selected disabled>請選擇</option>
                <option value="sedentary">極輕度，久坐的辦公室工作，很少運動</option>
                <option value="lightly">輕度，每週運動1-3次</option>
                <option value="moderately">中度，每週運動3-5次</option>
                <option value="very">高度，每週運動6-7次</option>
                <option value="super">極高度，每天都有高強度運動或是體力勞動</option>
              </VField>
              <ErrorMessage name="運動強度" class="invalid-feedback" />
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3">
            <div class="col-auto me-3">
              <label class="col-form-label">理想體態</label>
            </div>
            <div class="col-12 col-sm-auto">
              <VField
                id="exercise"
                name="理想體態"
                class="form-select"
                :class="{ 'is-invalid': errors['理想體態'] }"
                rules="required|is_not:init"
                v-model="exercise"
                as="select">
                <option value="init" selected disabled>請選擇</option>
                <option value="no-exercise">平常無運動或是想減重</option>
                <option value="exercise-same">有運動健身，想維持肌肉量</option>
                <option value="exercise-more">有運動健身，想增加肌肉量</option>
              </VField>
              <ErrorMessage name="理想體態" class="invalid-feedback" />
            </div>
          </div>
          <div>
            <span :class="{ 'disabled-cursor': !meta.valid}">
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="!meta.valid">
                計算
              </button>
            </span>
          </div>
        </VForm>
        <div v-if="bmr && tdee && protein" class="fs-4">
          <div class="pb-3">
            您的每日基礎代謝率BMR： {{ bmr }} 大卡<br>
            您的每日總熱量消耗TDEE： {{ tdee }} 大卡<br>
            想減脂，建議攝取： {{ (tdee * 0.8).toFixed() }} ~ {{ tdee * 1.0 }} 大卡<br>
            想增肌，建議攝取： {{ tdee + 100 }} ~ {{ tdee + 500 }} 大卡<br>
            每日蛋白質需求： {{ protein }}
          </div>
          <div class="d-flex align-items-center pb-3">
            <div class="pe-3 text-success">
              輸入優惠碼：{{ couponCode }}，享九折優惠
            </div>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="copyCouponCode">
              點我複製優惠碼
            </button>
          </div>
          <RouterLink to="/products" class="btn btn-primary text-decoration-none fs-4 fw-bold hvr-grow"><i class="bi bi-arrow-right"></i> 前往購物</RouterLink>
        </div>
      </div>
    </section>
    <section class="container text-secondary px-4 px-lg-7 py-5">
      <h4>計算公式：</h4>
      <h5>BMR 使用哈里斯-本尼迪克特公式</h5>
      <ul>
        <li>BMR男：88.362 + 13.397 * KG + 4.799 * CM - 5.677 * AGE</li>
        <li>BMR女：447.593 + 9.247 * KG + 3.098 * CM - 4.330 * AGE</li>
      </ul>
      <h5>TDEE = BMR x PAL</h5>
      <h5>PAL：活動水平，即日常活動和運動所消耗的能量</h5>
      <ul>
        <li>久坐的辦公室工作，很少運動：1.2</li>
        <li>輕度，每週運動1-3次：1.375</li>
        <li>中度，每週運動3-5次：1.55</li>
        <li>高度，每週運動6-7次：1.725</li>
        <li>極高度，每天都有高強度運動或是體力勞動：1.9</li>
      </ul>
      <p>
        例如，一個男性，身高170公分，體重60公斤，年齡20歲，平時的活動水平為每週運動3-5次，則他的TDEE可以按照以下步驟計算： <br>
        先計算BMR： 88.362 + 13.397 * 60 + 4.799 * 170 - 5.677 * 20
        10 x 60 + 6.25 x 170 - 5 x 20 + 5 = 1597.97（大約為1598大卡） <br>
        再乘以PAL的數值:1598 x 1.55 = 2478.9（大約為2479大卡）
      </p>
    </section>
    <ShowCouponCopyToast ref="showCouponCopyToast" />
  </div>
</template>

<script>
import ShowCouponCopyToast from '@/components/ShowCouponCopyToast.vue'
export default {
  data () {
    return {
      weight: null,
      height: null,
      age: null,
      gender: 'male',
      activity: 'init',
      bmr: null,
      tdee: null,
      exercise: 'init',
      protein: null,
      couponCode: 'cal-for-you'
    }
  },
  methods: {
    calculateBMR () {
      let bmr = null
      if (this.gender === 'male') {
        bmr = 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age)
      } else if (this.gender === 'female') {
        bmr = 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age)
      }
      this.bmr = parseFloat(bmr.toFixed())
    },
    calculateTDEE () {
      let tdee = null
      const bmr = this.bmr

      if (this.activity === 'sedentary') {
        tdee = bmr * 1.2
      } else if (this.activity === 'lightly') {
        tdee = bmr * 1.375
      } else if (this.activity === 'moderately') {
        tdee = bmr * 1.55
      } else if (this.activity === 'very') {
        tdee = bmr * 1.725
      } else if (this.activity === 'super') {
        tdee = bmr * 1.9
      }
      this.tdee = parseFloat(tdee.toFixed())
    },
    calculateProtein () {
      const weight = this.weight

      if (this.exercise === 'no-exercise') {
        this.protein = `${(weight * 0.8).toFixed()}-${weight * 1}g`
      } else if (this.exercise === 'exercise-same') {
        this.protein = `${weight * 1}-${(weight * 1.5).toFixed()}g`
      } else if (this.exercise === 'exercise-more') {
        this.protein = `${(weight * 1.5).toFixed()}-${weight * 2}g`
      }
    },
    calculateAll () {
      this.calculateBMR()
      this.calculateTDEE()
      this.calculateProtein()
    },
    copyCouponCode () {
      // 複製代碼，clipboard 為非同步語法
      navigator.clipboard.writeText(this.couponCode)
        .then(() => {
          this.showToast()
        })
    },
    showToast () {
      this.$refs.showCouponCopyToast.showCouponCopyToast()
    }
  },
  components: {
    ShowCouponCopyToast
  },
  watch: {
    height: function (newVal) {
      if (Number(newVal) < 1) {
        this.height = 1
      }
    },
    weight: function (newVal) {
      if (Number(newVal) < 1) {
        this.weight = 1
      }
    },
    age: function (newVal) {
      if (Number(newVal) < 1) {
        this.age = 1
      }
    }
  }
}
</script>
