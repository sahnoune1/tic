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

const player = createArray("x", "x", "x", "x", "x", "x", "x", "x", "x");
const enemy = createArray("o", "o", "o", "o", "o", "o", "o", "o", "o");
console.log(player.elements);
console.log(player.elements[5]);
console.log(player.elements.length);

const me = document.querySelector(".player");
const you = document.querySelector(".enemy");
let w = 0;
function test1() {
  const test = [];
  for (let y = 0; y < 9; y++) {
    test[y] = document.querySelector(`.item${y}`);
  }
  const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let q = 0; q < winning.length; q++) {
    const [a, b, c] = winning[q];
    if (
      test[a].innerHTML === "x" &&
      test[b].innerHTML === "x" &&
      test[c].innerHTML === "x"
    ) {
      alert("we have a winner");
      w = 1;
      location.reload();
    }
  }
}
function test2() {
  const test = [];
  for (let y = 0; y < 9; y++) {
    test[y] = document.querySelector(`.item${y}`);
  }
  const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let q = 0; q < winning.length; q++) {
    const [a, b, c] = winning[q];
    if (
      test[a].innerHTML === "o" &&
      test[b].innerHTML === "o" &&
      test[c].innerHTML === "o"
    ) {
      alert("we have a winner");
      w = 1;
      location.reload();
    }
  }
}
function draw() {
  let state;
  const elements = document.querySelectorAll(".item");
  for (let b = 0; b < elements.length; b++) {
    if (!elements[b].classList.contains("filled")) {
      state = false;
      break;
    }
    state = true;
  }

  if (state === true && w === 0) {
    alert("draw");
  }
}
for (let x = 0; x < 9; x++) {
  const fil = document.querySelector(`.item${x}`);

  fil.addEventListener("click", () => {
    if (!fil.classList.contains("filled")) {
      if (me.classList.contains("selected")) {
        fil.innerHTML = player.elements[x];

        fil.classList.add("filled");
      } else if (you.classList.contains("selected")) {
        fil.innerHTML = enemy.elements[x];

        fil.classList.add("filled");
      }
      test1();
      test2();
    }
    draw();
  });
}

you.addEventListener("click", () => {
  you.classList.add("selected");
  me.classList.remove("selected");
});
me.addEventListener("click", () => {
  me.classList.add("selected");
  you.classList.remove("selected");
});
