let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-game-btn");
let msg = document.querySelector("#msg");

let turn0 = true;
let cnt = 0;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(`button is clicked.`);
    cnt++;
    if (turn0) {
      button.innerText = "O";
      turn0 = false;
    } else {
      button.innerText = "X";
      turn0 = true;
    }
    button.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  let result = false;
  for (let pattern of winPatterns) {
    let pos1Val = buttons[pattern[0]].innerText;
    let pos2Val = buttons[pattern[1]].innerText;
    let pos3Val = buttons[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showWinner(pos1Val);
        result = true;
      }
    }
  }
  if (cnt == 9 && !result) {
    showDraw();
  }
};

const showDraw = () => {
  msg.innerText = `Game has Drawn!`;
  msgContainer.classList.remove("hide");
  disableButtons();
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableButtons();
};

const disableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const enableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = false;
    button.innerText = "";
  });
};

const resetGame = () => {
  turn0 = true;
  cnt = 0;
  msgContainer.classList.add("hide");
  enableButtons();
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
