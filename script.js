const rpsDict = ["rock", "paper", "scissor"];
const buttons = document.querySelectorAll(`button`);
const player = document.querySelector(".player");
const bot = document.querySelector(".bot");
let currentRound = 0;

buttons.forEach((button) => button.addEventListener("click", play));
setHeader();
scoreboardBg();

function setHeader() {
  document.querySelector(".winner").innerHTML = "Round(s) : " + currentRound;
}

function scoreboardBg() {
  const playerBar = (parseInt(player.innerHTML) / currentRound) * 100;
  const colorOne = `green ${playerBar}%`;
  const colorTwo = `red ${playerBar}%`;
  const gradient = `linear-gradient(to right, ${colorOne}, ${colorTwo})`;
  document.querySelector(".scoreboard").style.background = gradient;
}

function roundsWinner() {
  if (player === bot) return "Match Draw!";
  if (player.innerHTML >= bot) return "Player wins the Match!";
  if (player <= bot) return "Bot wins the Match!";
}

function play() {
  currentRound += 1;
  playerSelection = this.dataset.choice;
  const result = playRound(playerSelection, getComputerChoice());
  document.querySelector(".results").innerHTML = result;
  scoreboardBg();
  setHeader();
  if (currentRound === 5) {
    buttons.forEach((button) => {
      button.disabled = true;
      const matchWinner = roundsWinner();
      document.querySelector(".winner").innerHTML = matchWinner;
      return;
    });
  }
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  const computerS = rpsDict[computerSelection];
  if (playerSelection === computerS) {
    return `Draw! Both chose ${playerSelection}`;
  } else if (
    (playerSelection === "scissor" && computerS === "paper") ||
    (playerSelection === "paper" && computerS === "rock") ||
    (playerSelection === "rock" && computerS === "scissor")
  ) {
    player.innerHTML = parseInt(player.innerHTML) + 1;
    return `Player wins this round! ${playerSelection} beats ${computerS}`;
  } else {
    bot.innerHTML = parseInt(bot.innerHTML) + 1;
    return `Computer wins this round! ${computerS} beats ${playerSelection}`;
  }
}

function fiveRounds() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(`Round ${i}! Player input : `); //"scissor";
    if (!rpsDict.includes(playerSelection)) {
      alert("please input valid value!");
      i--;
      continue;
    }
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
