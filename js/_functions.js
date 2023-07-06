import { burger } from "./functions/burger.js";

const swiper = new Swiper(".events__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 40,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".events__button_next",
    prevEl: ".events__button_prev",
  },
});
