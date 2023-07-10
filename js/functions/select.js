export const select = function (id) {
  const select = document.getElementById(id);
  const selectCurrent = select.querySelector(".select__current");
  const selectHeader = select.querySelector(".select__header");
  const selectItem = select.querySelectorAll(".select__item");
  const selectBody = select.querySelector(".select__body");

  const isInput = selectCurrent.classList.contains("select__input");

  selectHeader.addEventListener("click", function () {
    select.classList.toggle("select_active");
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.classList.contains("select__item_disabled")) {
        return;
      }

      const text = item.textContent;

      if (isInput) {
        selectCurrent.value = text;
      } else {
        selectCurrent.textContent = text;
      }

      selectCurrent.classList.remove("select__current_empty");
      select.classList.remove("select_active");
    });
  });

  if (isInput) {
    selectCurrent.addEventListener("input", function (e) {
      const value = e.target.value.toUpperCase();

      selectItem.forEach(function (city) {
        const text = city.textContent.toUpperCase();

        if (text.indexOf(value) !== -1) {
          city.style.display = "block";
        } else {
          city.style.display = "none";
        }
      });
    });
  }
};
