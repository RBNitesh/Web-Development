let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let yourScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  console.log(`user-choice = ${userChoice}`);
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log(`comp-choice = ${compChoice}`);
  //declare result
  declareResult(userChoice, compChoice);
};

const genCompChoice = () => {
  //rock, paper, scissor
  let options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
};

const declareResult = (userChoice, compChoice) => {
  if (userChoice == compChoice) {
    console.log(`Draw`);
    showDraw();
    return;
  }

  let userWin = true;
  if (userChoice == "rock" && compChoice == "paper") {
    userWin = false;
  } else if (userChoice == "paper" && compChoice == "scissor") {
    userWin = false;
  } else {
    if (compChoice == "rock") {
      userWin = false;
    }
  }
  showWinner(userWin);
};

const showDraw = () => {
  console.log(`game was draw!`);
  msg.innerText = "Draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
    yourScore++;
  } else {
    msg.innerText = "you lose!";
    msg.style.backgroundColor = "red";
    computerScore++;
  }
  console.log(msg.innerText);
  showScore();
};

const showScore = () => {
  userScore.innerText = yourScore;
  compScore.innerText = computerScore;
};
