import { burger } from "./functions/burger.js";

const eventsSlider = new Swiper(".events__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
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

    1200: {
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

const blogSlider = new Swiper(".blog__swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: ".blog__button_next",
    prevEl: ".blog__button_prev",
  },
});
