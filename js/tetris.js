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

//
const BLOCKS = {
  square: [
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [],
    [],
    [],
  ],
  tree: [
    [[2, 1], [0, 1], [1, 0], [1, 1]],
    [],
    [],
    [],
  ],

};

const movingItem = {
  type: "square",
  direction: 0,
  top: 0,
  left: 3,
};


init();

//Functions 
function init() {
  tempMovingItem = { ...movingItem };

  //set a default type if it's not valid
  if (!BLOCKS[tempMovingItem.type]) {
    tempMovingItem.type = "square";
  }

  for (let i = 0; i < GameRows; i++) {
    prependNewLine();
  }
  renderBlocks();
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

function renderBlocks() {
  const { type, direction, top, left } = tempMovingItem;
  BLOCKS[type][direction].forEach(block => {
    const x = block[0] + left;
    const y = block[1] + top;
    const target = playground.childNodes[y].childNodes[0].childNodes[x];
    target.classList.add(type);
  });
}