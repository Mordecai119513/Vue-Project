<template>
    <footer class="bg-primary">
      <div class="container">
        <div class="py-lg-55 pt-4 pb-5">
          <div
            class="d-flex mb-lg-9 mb-55 flex-column flex-lg-row align-items-lg-start align-items-center justify-content-between"
          >
            <img
              src="/Logo.png"
              class="me-lg-7 me-0 mb-7 mb-lg-0 img-fluid"
              alt="Logo"
              width="120"
              height="40"
            />
            <ul class="list-unstyled text-center d-flex mb-0 flex-column flex-lg-row">
              <li class="mx-lg-7 mx-0 mb-lg-0 mb-4">
                <RouterLink class="link-light text-decoration-none" to="/PrivacyPolicy"
                  >隱私權與服務條款</RouterLink
                >
              </li>
              <li class="ms-lg-7 mx-0">
                <span class="text-white">合作夥伴</span>
                <ul class="list-unstyled mt-lg-5 mt-4 d-lg-block d-flex">
                  <li class="py-lg-25 py-0 me-2 me-lg-0">
                    <a
                      class="text-decoration-none link-light"
                      target="_blank"
                    >
                      <span class="d-lg-block d-none">Toy Haven</span>
                    </a>
                  </li>
                  <li class="py-lg-25 py-0 ms-2 ms-lg-0">
                    <a
                      class="text-decoration-none link-light"
                      href=""
                      target="_blank"
                      >
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul
            class="d-flex justify-content-between align-items-center flex-column flex-lg-row list-unstyled mb-0"
            style="color: var(--bs-gray-500)"
          >
            <li class="mb-lg-0 mb-3 order-2 order-lg-1 text-center">
              僅個人作品練習，無任何商業用途
            </li>
            <li class="order-3 order-lg-2 text-center">
              Copyright © 2025 ToyHaven.All rights reserved.
            </li>
            <li class="mb-lg-0 mb-3 order-1 order-lg-3">
              <a class="me-4"
                ><i class="bi bi-instagram fs-4" style="color: var(--bs-gray-500)"></i
              ></a>
              <a class="me-4"
                ><i class="bi bi-facebook fs-4" style="color: var(--bs-gray-500)"></i
              ></a>
              <a href="mailto:mordecai0304@gmail.com"
                ><i class="bi bi-envelope-fill fs-4" style="color: var(--bs-gray-500)"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
