const slider = document.querySelector(".slider");
const range = document.querySelector(".range");
range.innerHTML = `${slider.value}X${slider.value}`;
slider.addEventListener("input", () => {
  range.innerHTML = `${slider.value}X${slider.value}`;
});
