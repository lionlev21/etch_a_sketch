const slider = document.querySelector(".slider");
const range = document.querySelector(".range");
const erase = document.querySelector(".erase");
let grid = document.querySelector(".grid");
let size;
range.innerHTML = `${slider.value}X${slider.value}`;
slider.addEventListener("input", () => {
  range.innerHTML = `${slider.value}X${slider.value}`;
  size = slider.value;
});
