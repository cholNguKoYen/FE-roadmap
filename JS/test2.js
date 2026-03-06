const boardElement = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("resetBtn");

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

//Winning index
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(e) {
  const clickedCell = e.target;
  const clickedIndex = parseInt(clickedCell.getAttribute("data-index"));

  //Skip clicked cell or if game've done
  if (gameState[clickedIndex] !== "" || !gameActive) return;

  //Update data
  gameState[clickedIndex] = currentPlayer;
  clickedCell.innerText = currentPlayer;
  if (currentPlayer === "X") {
    clickedCell.classList.add("x-color");
  } else {
    clickedCell.classList.add("o-color");
  }
  checkResult();
}

function checkResult() {
  let roundWon = false;
  for (let i = 0; i < winningCondition.length; i++) {
    const [a, b, c] = winningCondition[i];
    if (gameState[a] === "" || gameState[b] === "" || gameState[c] === "") {
      continue;
    }
    if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusText.innerHTML = `The winner is ${currentPlayer}`;
    gameActive = false;
    return;
  }
  if (!gameState.includes("")) {
    statusText.innerHTML = "Draw";
    gameActive = false;
    return;
  }

  //take turn
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.innerHTML = `This is ${currentPlayer}' turn`;
}

function restartGame() {
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  statusText.innerHTML = "X turns";
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.classList.remove("x-color");
    cell.classList.remove("o-color");
  });
}

//Binding Event
cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", restartGame);
