const grid = document.querySelector(".grid");
let i = 0;
for (i = 0; i < 9; i++) {
  const item = document.createElement("div");
  item.setAttribute("class", `item${i} item`);

  grid.appendChild(item);
}

function createArray(...elements) {
  return {
    elements: [...elements],
  };
}

const array = createArray(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(array.elements);
console.log(array.elements[5]);
console.log(array.elements.length);

// let j = 0;
// for (j = 0; j < array.elements.length; j++) {
//   const fill = document.querySelector(`.item${j}`);
//   fill.innerHTML = array.elements[j];
// }

let x = 0;
for (x = 0; x < 9; x++) {
  const fil = document.querySelector(`.item${x}`);

  fil.addEventListener("click", () => {
    const y = x;
    fil.innerHTML = array.elements[y];
  });
}
