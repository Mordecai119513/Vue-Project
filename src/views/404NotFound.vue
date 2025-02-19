<template>
    <div
      class="py-md-13 py-9 background-position-center background-size-corver"
      style="
        background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994205093.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RLJFHdzxV1ZFvcHobhOCdJFG71iTXspxuTuLv3LAuadLgMdzvO3ebfDIxgaswSy6G8SbPxVDbqyApt2wU2it78WeORuUUxdwMwTXV4qzswD20QiHhMvd3AZgGH6OcmLl%2BSP1YQilwzCQZlKgSckbe6LYnCKT2E7vj3iO9qTAsfoXM3FYNRfGl4p3Z11%2BRPSu5PDI5Wjg%2BSnmgeYzn3LLZfqyWN%2BHKVesfnxsDx4s6CkU%2ByX97aX4%2FIZiE89I6SwCw4DvMsNctfvaurRt6YyJKQ3NAB%2BBkmC1pBr0ARDd8C%2BWkxQXNVbaVkvu9PdgirS2CneyZtgonvceaSs5mSNnZA%3D%3D');
        background-color: var(--bs-primary);
      "
    >
      <div class="container d-flex flex-column align-items-center">
        <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
          找不到頁面
        </h2>
      </div>
    </div>
    <div class="my-10 mx-4">
      <h3 class="fs-1 fw-bold text-center">404</h3>
      <h3 class="fs-5 fw-bold text-center mb-5">Not found page</h3>
      <div class="d-flex flex-column align-items-center">
        <div class="text-center d-none d-sm-block mb-5">
          <p class="mb-0">很抱歉，我們無法找到您要查找的頁面</p>
          <p class="mb-0">不過不用擔心，返回首頁重新出發即可</p>
        </div>
        <div class="text-start d-block d-sm-none mb-5">
          <p class="mb-0">很抱歉，我們無法找到您要查找的頁面，不過不用擔心，返回首頁重新出發即可</p>
        </div>
        <RouterLink class="btn btn-primary text-center" to="/">回到首頁</RouterLink>
      </div>
    </div>
  </template>
