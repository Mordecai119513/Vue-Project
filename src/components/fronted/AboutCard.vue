<template>
    <section
      class="section-bkg pt-8 pb-15"
    >
      <div class="container ">
        <div data-aos="fade-up">
          <h2 class="fs-2 fw-bold text-primary text-center mb-6 my-4 py-4" style="font-family: var(--bs-NotoSerif-TC)">
            關於Toy Haven
          </h2>
        </div>
        <div class="row flex-lg-row flex-column-reverse align-items-center gx-lg-8 gy-3">
          <div class="col-lg-6 p-55">
            <div data-aos="fade-up">
              <h3
                class="text-secondary fs-3 fw-bold mb-3"
                style="font-family: var(--bs-NotoSerif-TC)"
              >
              Toy Haven
              </h3>
              <p class="text-secondary fs-4 fw-bold mb-4">
                重新出發，找回屬於你的魔法。
              </p>
              <p class="text-secondary mb-4">
                在這裡，我們相信玩具不只是物品，
                它們承載著童年的幻想、歡笑與成長的印記。
                但隨著時間流逝，那些純真的感動也逐漸遠去。
                我們希望透過 Toy Haven，重新連結這份童真，
                用經典的設計與創新的玩具，
                喚醒心中最純粹的快樂。
              </p>
              <RouterLink to="/about" class="btn btn-outline-primary w-100 w-lg-35 py-2" href=""
                >查看更多</RouterLink
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div data-aos="fade-up">
              <img
                class="img-fluid d-none d-lg-block"
                src="/Logo.png"
                alt="用滴管將黃色精油滴在手上的特寫"
                width="636"
                height="300"
                style="background-color: var(--bs-secondary)"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

  <style lang="scss" scoped>
  .aboutImg {
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
  }
  .section-bkg {
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  </style>
