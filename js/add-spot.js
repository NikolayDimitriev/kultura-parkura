import "./_vendor.js";
import vars from "./_vars.js";

import { burger } from "./functions/burger.js";

const openModalBtn = document.querySelector(".add-spot__button");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", function () {
  modal.classList.add("modal_active");
});

modal.addEventListener("click", function (e) {
  const target = e.target;
  const condition =
    target.classList.contains("modal__close") ||
    target.classList.contains("modal__icon");

  if (condition) {
    modal.classList.remove("modal_active");
  }

  if (target.classList.contains("modal_active")) {
    modal.classList.remove("modal_active");
  }
});
