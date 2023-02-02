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
      const test = [];
      for (let y = 0; y < 9; y++) {
        test[y] = document.querySelector(`.item${y}`);
      }

      if (
        test[0].innerHTML === "x" &&
        test[1].innerHTML === "x" &&
        test[2].innerHTML === "x"
      ) {
        alert("we have a winner");
        location.reload();
      }
      if (
        test[3].innerHTML === "x" &&
        test[4].innerHTML === "x" &&
        test[5].innerHTML === "x"
      ) {
        alert("we have a winner");
        location.reload();
      }
      if (
        test[6].innerHTML === "x" &&
        test[7].innerHTML === "x" &&
        test[8].innerHTML === "x"
      ) {
        alert("we have a winner");
        location.reload();
      }
      if (
        test[0].innerHTML === "x" &&
        test[3].innerHTML === "x" &&
        test[6].innerHTML === "x"
      ) {
        alert("we have a winner");
        location.reload();
      }
      if (
        test[1].innerHTML === "x" &&
        test[4].innerHTML === "x" &&
        test[7].innerHTML === "x"
      ) {
        alert("we have a winner");
        location.reload();
      }

      if (
        test[2].innerHTML === "x" &&
        test[5].innerHTML === "x" &&
        test[8].innerHTML === "x"
      ) {
        alert("we have a winner");
        location.reload();
      }
      if (
        test[0].innerHTML === "x" &&
        test[4].innerHTML === "x" &&
        test[8].innerHTML === "x"
      ) {
        alert("we have a winner");
        location.reload();
      }
      if (
        test[2].innerHTML === "x" &&
        test[4].innerHTML === "x" &&
        test[6].innerHTML === "x"
      ) {
        alert("we have a winner");
        location.reload();
      }
    }
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
