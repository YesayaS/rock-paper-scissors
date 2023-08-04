function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  const computerS = rps_dict[computerSelection];
  if (playerSelection === computerS) {
    return `Draw! Both chose ${playerSelection}`;
  } else if (
    (playerSelection === "scissor" && computerS === "paper") ||
    (playerSelection === "paper" && computerS === "rock") ||
    (playerSelection === "rock" && computerS === "scissor")
  ) {
    return `Player win! ${playerSelection} beats ${computerS}`;
  } else {
    return `Computer win! ${computerS} beats ${playerSelection}`;
  }
}

const rps_dict = ["rock", "paper", "scissor"];

for (let i = 1; i <= 5; i++) {
  let playerSelection = prompt(`Round ${i}! Player input : `); //"scissor";
  if (!rps_dict.includes(playerSelection)) {
    alert("please input valid value!");
    i--;
    continue;
  }
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}
