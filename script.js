const slider = document.querySelector(".slider");
const range = document.querySelector(".range");
let size;
let color = "black";
range.innerHTML = `${slider.value} X ${slider.value}`;
slider.addEventListener("input", () => {
  range.innerHTML = `${slider.value} X ${slider.value}`;
  size = slider.value;
});

function createGrid(x) {
  const grid = document.querySelector(".grid");
  const squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${x}, 1fr)`;

  for (let i = 0; i < x * x; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    square.style.border = "1px solid black";
    grid.insertAdjacentElement("beforeend", square);
  }
}
createGrid(16);
function changeSize(input) {
  createGrid(input);
}
function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}
function changeColor(choice) {
  color = choice;
}
function resetBoard() {
  const grid = document.querySelector(".grid");
  const squares = grid.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
