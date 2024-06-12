const totalScore = { playerScore: 0, computerScore: 0 };
const resultDiv = document.getElementById("result");
const handsDiv = document.getElementById("hands");
const playerScoreDiv = document.getElementById("player-score");


function getComputerChoice(min, max) {
  const randomNumber = Math.random() * (max - min) + min;
  const roundedNumber = Math.floor(randomNumber);

  // const randomChoice = ["Rock", "Paper", "Scissors"]
  // const randomNumber = Math.floor(Math.random() * 3)
  // return randomChoice[randomNumber]
  if (roundedNumber == 1) {
    return "Rock";
  } else if (roundedNumber == 2) {
    return "Paper";
  }
  return "Scissors";
}
console.log(getComputerChoice(1, 4));

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return (score = 0);
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return (score = 1);
  } else {
    return (score = -1);
  }
}
const computerChoice = getComputerChoice(1, 4);
console.log(getResult("Rock", computerChoice));

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
// ** Calculate who won and show it on the screen **

function showResult(score, playerChoice, computerChoice) {
  
  if (score === -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score === 0) {
    resultDiv.innerText = "It's a Draw!";
  } else {
    resultDiv.innerText = "You Win!";
  }

  handsDiv.innerText = `🧑 ${playerChoice} VS 🤖 ${computerChoice}`;

  playerScoreDiv.innerText = "Total score:" + " " + totalScore.playerScore;
// playerScoreDiv.innerText = JSON.stringify(totalScore, null, 10)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  let computerChoice = getComputerChoice(1, 4);
  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  console.log({ score });
  console.log(totalScore);

  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
}

// function reset() {
//   window.location = ""
// }
// const endGame = document.getElementById("endGameButton");
// endGame.onclick = reset;
function endGame() {
  const egb = document.getElementById("endGameButton");

  egb.onclick = () => {
    resultDiv.innerText = "";
    handsDiv.innerText = "";
    playerScoreDiv.innerText = "";
  };
}

endGame();
playGame();