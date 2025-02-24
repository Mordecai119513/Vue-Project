<template>
<div
  class="py-md-13 py-9 background-position-center background-size-cover"
  style="
    background-color: rgba(13, 110, 253, 0.8);
  "
>
    <div class="container d-flex flex-column align-items-center ">
      <h2
        class="fw-bold fs-lg-10 fs-1 mb-3 text-white text-center my-1 py-1"
        style="font-family: var(--bs-NotoSerif-TC)"
      >
        關於Toy Haven
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <RouterLink class="text-decoration-none text-white" to="/">首頁</RouterLink>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="position-relative z-index-3 py-10 w-md-75 mx-auto">
      <div class="bkg-banai-secondary"></div>
      <div class="bkg-smallstepsgreen-secondary"></div>
      <div class="row justify-content-md-center">
        <div class="col-lg-6">
          <div class="mx-3" style="color: #5b5c60">
            <h3 class="fs-2 fw-bolder mb-3 my-2 py-2" style="font-family: var(--bs-NotoSerif-TC)">
              我們的理念
            </h3>
            <p class="mb-7">
              「我們相信玩具不只是娛樂，更是一種情感的連結。
在這裡，每個人都能找到屬於自己的童年回憶，
無論是收藏、遊玩，還是與家人朋友分享，
Toy Haven 讓快樂與創意無限延續。」
            </p>

            <h3 class="fs-2 fw-bolder mb-3" style="font-family: var(--bs-NotoSerif-TC)">
              品牌起源
            </h3>
            <p>
              Toy Haven 成立的初衷，是希望打造一個讓大人與小孩都能沉浸於玩具世界的空間。
我們發現，許多經典與創意玩具因時間流逝而逐漸被遺忘，
但每個玩具都承載著故事與情感，值得被珍藏與分享。
            </p>
            <p>
              因此，我們決定以我們最擅長的方式，
精選全球特色玩具，無論是復古收藏、潮流公仔，還是創意設計，
都希望能讓玩具的價值被看見，讓每個人都能擁有一個屬於自己的玩具樂園。
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bkg-banai-secondary {
  background-image: url('https://images.unsplash.com/photo-1516550135131-fe3dcb0bedc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=621e8231a4e714c2e85f5acbbcc6a730&auto=format&fit=crop&w=1352&q=80');
  background-size: auto;
  background-position: center center;
  background-repeat: no-repeat;
  max-width: 100%;
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 15%;
}
.bkg-smallstepsgreen-secondary {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740042340813.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gbGgLhrGD%2B6m6kBMLkTMJ9yqMmhNcBJyys5HE2xDLl0DFsI6hHQmuOkDVbob7BqlfHy8RVmvW2lGdjYOeHTEtICYw1c08MeYuMuoVzQJpVIQDQcPvFK4rT6JuK3uv9oORLqBXOAvzrpafHR9KRYH8KlOefsU67a7ZKfDj1SaWTEgSqtJOY8bCirJTDaDERKsKIWnD9eYkzdrIhtdqgOVynLzf4EmR5PQMM%2BDNSYDyzLJq5mq4ieubXYb8OnoC3otJ0A7aWHEu%2BVPEQDwsIUZjsEClgyhmC%2FfMG6x479Vl7HRkqL3zsr%2B6wDk9ZP4fuflQvQ%2B%2BzUe6J86UEkGuUgQGw%3D%3D');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  max-width: 100%;
  width: 170px;
  height: 200px;
  position: absolute;
  top: -50px;
  left: 0;
  opacity: 15%;
}
</style>
