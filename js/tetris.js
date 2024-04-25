//DOM
const playground = document.querySelector(".playground > ul");

// Setting

const GameRows = 20;
const GameCols = 10;

// Variables 
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;
const movingItem = {
  type: "",
  direction: 0,
  top: 0,
  left: 0,
};

init();

//Functions 
function init() {
  for (let i = 0; i < GameRows; i++) {
    prependNewLine();
  }
}

function prependNewLine() {
  const li = document.createElement("li");
  const ul = document.createElement("ul");
  for (let j = 0; j < GameCols; j++) {
    const matrix = document.createElement("li");
    ul.prepend(matrix);
  }
  li.prepend(ul);
  playground.prepend(li);
}
