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

const center = [45.218250392658355, 39.58282873289355];
function init() {
  let map = new ymaps.Map("mymap", {
    center,
    zoom: 9,
  });

  let placemark = new ymaps.Placemark(
    [45.218250392658355, 39.58282873289355],
    {
      balloonContent: `
        <div class="balloon">
          <div class="balloon__top">
            <h3 class="balloon__title">Школа паркура</h3>
            <span class="balloon__score">Оценка</span>
          </div>
          <div class="balloon__bottom">
            <img src="./img/balloon-1.jpg" alt="Площадка для паркура" class="balloon__image"/>
            <div class="balloon__block">
              <p class="balloon__descr">
                Описаниеописание
                описаниеописание
                описаниеопписание
                Описаниеописаниеописание
                описаниеописаниеопписание
                Описаниеописаниеописание
              </p>
              <ul class="list-reset balloon__list">
                <li class="balloon__item">Режим работы: 7:00-23:00</li>
                <li class="balloon__item">Ул. Ставропольская 98</li>
                <li class="balloon__item">+791823743845</li>
              </ul>
              <a href="./spot.html" class="balloon__link">Подробнее</a>
            </div>
          </div>
        </div>
      `,
    },
    {
      iconLayout: "default#image",
    }
  );

  let placemark1 = new ymaps.Placemark(
    [45.069342866379685, 38.97262716483405],
    {
      balloonContent: `
        <div class="balloon">
          <div class="balloon__top">
            <h3 class="balloon__title">Школа паркура</h3>
            <span class="balloon__score">Оценка</span>
          </div>
          <div class="balloon__bottom">
            <img src="./img/balloon-2.jpg" alt="Площадка для паркура" class="balloon__image"/>
            <div class="balloon__block">
              <p class="balloon__descr">
                Описаниеописание
                описаниеописание
                описаниеопписание
                Описаниеописаниеописание
                описаниеописаниеопписание
                Описаниеописаниеописание
              </p>
              <ul class="list-reset balloon__list">
                <li class="balloon__item">Режим работы: 7:00-23:00</li>
                <li class="balloon__item">Ул. Ставропольская 98</li>
                <li class="balloon__item">+791823743845</li>
              </ul>
              <a href="./spot.html" class="balloon__link">Подробнее</a>
            </div>
          </div>
        </div>
      `,
    },
    {
      iconLayout: "default#image",
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
  map.geoObjects.add(placemark1);
}

ymaps.ready(init);

import { select } from "./functions/select.js";

select("spot-select");
select("city-select");
