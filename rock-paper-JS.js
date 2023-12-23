let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  tie: 0,
};
function updateScore() {
  const scoreCard = document.querySelector(".scoreCard");
  scoreCard.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;
}

updateScore();
/*
        if (!score) {
          score = {
            wins: 0,
            losses: 0,
            tie: 0,
          };
        }
        */

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let winnerResult = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      winnerResult = "You Lose";
    } else if (computerMove === "Paper") {
      winnerResult = "You Win";
    } else if (computerMove === "Scissors") {
      winnerResult = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      winnerResult = "You Win";
    } else if (computerMove === "Paper") {
      winnerResult = "Tie";
    } else if (computerMove === "Scissors") {
      winnerResult = "You Lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      winnerResult = "Tie";
    } else if (computerMove === "Paper") {
      winnerResult = "You Lose";
    } else if (computerMove === "Scissors") {
      winnerResult = "You Win";
    }
  }

  if (winnerResult === "You Win") {
    score.wins += 1;
  } else if (winnerResult === "You Lose") {
    score.losses += 1;
  } else if (winnerResult === "Tie") {
    score.tie += 1;
  }

  document.querySelector(".js-result").innerHTML = `${winnerResult}`;

  document.querySelector(".js-moves").innerHTML = `You
       <img src="${playerMove}-emoji.png" alt="" class="move-icon" />
       <img src="${computerMove}-emoji.png" class="move-icon" alt="" />
       Computer`;

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  /*
    alert(
      `You picked ${playerMove}. Computer picked ${computerMove} .${winnerResult}
  Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`
    );*/
}

function pickComputerMove() {
  const randonNumber = Math.random();
  let computerMove = "";

  if (randonNumber >= 1 / 3 && randonNumber < 2 / 3) {
    computerMove = "Rock";
  } else if (randonNumber >= 2 / 3 && randonNumber < 1) {
    computerMove = "Paper";
  } else if (randonNumber >= 0 && randonNumber < 1 / 3) {
    computerMove = "Scissors";
  }
  return computerMove;
}
