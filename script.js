const squares = document.querySelectorAll(".square");
const x = document.querySelectorAll(".hide-x");
const o = document.querySelectorAll(".hide-o");
const winner = document.querySelector(".winner");
const xWins = document.querySelector(".xWins");
const oWins = document.querySelector(".oWins");
const draws = document.querySelector(".draws");
const playBtn = document.querySelector(".playGame");
const resetResultBtn = document.querySelector(".resetResults");

let i = 0;
flag = true;
let xWin = localStorage.getItem("resultsX");
let oWin = localStorage.getItem("resultsO");
let draw = localStorage.getItem("resultsDraw");

const square1 = document.querySelector(".square1");
const square2 = document.querySelector(".square2");
const square3 = document.querySelector(".square3");
const square4 = document.querySelector(".square4");
const square5 = document.querySelector(".square5");
const square6 = document.querySelector(".square6");
const square7 = document.querySelector(".square7");
const square8 = document.querySelector(".square8");
const square9 = document.querySelector(".square9");

const game = () => {
  // Player moves
  square1.addEventListener("click", function playerMove() {
    let i = 0;
    if (flag == true) {
      x[i].classList.remove("hide-x");

      this.classList.add("x");
      this.disabled = true;
      winConditions();

      flag = false;
    } else if (flag == false) {
      o[i].classList.remove("hide-o");

      this.classList.add("o");
      this.disabled = true;
      winConditions();

      flag = true;
    }
  });
  square2.addEventListener("click", function playerMove() {
    let i = 1;
    if (flag == true) {
      x[i].classList.remove("hide-x");

      this.classList.add("x");
      this.disabled = true;
      winConditions();

      flag = false;
    } else if (flag == false) {
      o[i].classList.remove("hide-o");

      this.classList.add("o");
      this.disabled = true;
      winConditions();

      flag = true;
    }
  });
  square3.addEventListener("click", function playerMove() {
    let i = 2;
    if (flag == true) {
      x[i].classList.remove("hide-x");

      this.classList.add("x");
      this.disabled = true;
      winConditions();

      flag = false;
    } else if (flag == false) {
      o[i].classList.remove("hide-o");

      this.classList.add("o");
      this.disabled = true;
      winConditions();

      flag = true;
    }
  });
  square4.addEventListener("click", function playerMove() {
    let i = 3;
    if (flag == true) {
      x[i].classList.remove("hide-x");

      this.classList.add("x");
      this.disabled = true;
      winConditions();

      flag = false;
    } else if (flag == false) {
      o[i].classList.remove("hide-o");

      this.classList.add("o");
      this.disabled = true;
      winConditions();

      flag = true;
    }
  });
  square5.addEventListener("click", function playerMove() {
    let i = 4;
    if (flag == true) {
      x[i].classList.remove("hide-x");

      this.classList.add("x");
      this.disabled = true;
      winConditions();

      flag = false;
    } else if (flag == false) {
      o[i].classList.remove("hide-o");

      this.classList.add("o");
      this.disabled = true;
      winConditions();

      flag = true;
    }
  });
  square6.addEventListener("click", function playerMove() {
    let i = 5;
    if (flag == true) {
      x[i].classList.remove("hide-x");

      this.classList.add("x");
      this.disabled = true;
      winConditions();

      flag = false;
    } else if (flag == false) {
      o[i].classList.remove("hide-o");

      this.classList.add("o");
      this.disabled = true;
      winConditions();

      flag = true;
    }
  });
  square7.addEventListener("click", function playerMove() {
    let i = 6;
    if (flag == true) {
      x[i].classList.remove("hide-x");

      this.classList.add("x");
      this.disabled = true;
      winConditions();

      flag = false;
    } else if (flag == false) {
      o[i].classList.remove("hide-o");

      this.classList.add("o");
      this.disabled = true;
      winConditions();

      flag = true;
    }
  });
  square8.addEventListener("click", function playerMove() {
    let i = 7;
    if (flag == true) {
      x[i].classList.remove("hide-x");

      this.classList.add("x");
      this.disabled = true;
      winConditions();

      flag = false;
    } else if (flag == false) {
      o[i].classList.remove("hide-o");

      this.classList.add("o");
      this.disabled = true;
      winConditions();

      flag = true;
    }
  });
  square9.addEventListener("click", function playerMove() {
    let i = 8;
    if (flag == true) {
      x[i].classList.remove("hide-x");

      this.classList.add("x");
      this.disabled = true;
      winConditions();

      flag = false;
    } else if (flag == false) {
      o[i].classList.remove("hide-o");

      this.classList.add("o");
      this.disabled = true;
      winConditions();

      flag = true;
    }
  });
};

// Win conditions
const winConditions = () => {
  // X player win conditions
  if (
    square1.classList.contains("x") &&
    square2.classList.contains("x") &&
    square3.classList.contains("x")
  ) {
    winner.innerHTML = "X player Wins";
    xWin++;
    pauseGame();
  } else if (
    square4.classList.contains("x") &&
    square5.classList.contains("x") &&
    square6.classList.contains("x")
  ) {
    winner.innerHTML = "X player Wins";
    xWin++;
    pauseGame();
  } else if (
    square7.classList.contains("x") &&
    square8.classList.contains("x") &&
    square9.classList.contains("x")
  ) {
    winner.innerHTML = "X player Wins";
    xWin++;
    pauseGame();
  } else if (
    square1.classList.contains("x") &&
    square5.classList.contains("x") &&
    square9.classList.contains("x")
  ) {
    winner.innerHTML = "X player Wins";
    xWin++;
    pauseGame();
  } else if (
    square3.classList.contains("x") &&
    square5.classList.contains("x") &&
    square7.classList.contains("x")
  ) {
    winner.innerHTML = "X player Wins";
    xWin++;
    pauseGame();
  } else if (
    square1.classList.contains("x") &&
    square3.classList.contains("x") &&
    square7.classList.contains("x")
  ) {
    winner.innerHTML = "X player Wins";
    xWin++;
    pauseGame();
  } else if (
    square2.classList.contains("x") &&
    square5.classList.contains("x") &&
    square8.classList.contains("x")
  ) {
    winner.innerHTML = "X player Wins";
    xWin++;
    pauseGame();
  } else if (
    square3.classList.contains("x") &&
    square6.classList.contains("x") &&
    square9.classList.contains("x")
  ) {
    winner.innerHTML = "X player Wins";
    xWin++;
    pauseGame();
  }

  // O player win conditions

  if (
    square1.classList.contains("o") &&
    square2.classList.contains("o") &&
    square3.classList.contains("o")
  ) {
    winner.innerHTML = "O player Wins";
    oWin++;
    pauseGame();
  } else if (
    square4.classList.contains("o") &&
    square5.classList.contains("o") &&
    square6.classList.contains("o")
  ) {
    winner.innerHTML = "O player Wins";
    oWin++;
    pauseGame();
  } else if (
    square7.classList.contains("o") &&
    square8.classList.contains("o") &&
    square9.classList.contains("o")
  ) {
    winner.innerHTML = "O player Wins";
    oWin++;
    pauseGame();
  } else if (
    square1.classList.contains("o") &&
    square5.classList.contains("o") &&
    square9.classList.contains("o")
  ) {
    winner.innerHTML = "O player Wins";
    oWin++;
    pauseGame();
  } else if (
    square3.classList.contains("o") &&
    square5.classList.contains("o") &&
    square7.classList.contains("o")
  ) {
    winner.innerHTML = "O player Wins";
    oWin++;
    pauseGame();
  } else if (
    square1.classList.contains("o") &&
    square3.classList.contains("o") &&
    square7.classList.contains("o")
  ) {
    winner.innerHTML = "O player Wins";
    oWin++;
    pauseGame();
  } else if (
    square2.classList.contains("o") &&
    square5.classList.contains("o") &&
    square8.classList.contains("o")
  ) {
    winner.innerHTML = "O player Wins";
    oWin++;
    pauseGame();
  } else if (
    square3.classList.contains("o") &&
    square6.classList.contains("o") &&
    square9.classList.contains("o")
  ) {
    winner.innerHTML = "O player Wins";
    oWin++;
    pauseGame();
  }

  // Draw conditions

  if (
    (square1.classList.contains("o") || square1.classList.contains("x")) &&
    (square2.classList.contains("o") || square2.classList.contains("x")) &&
    (square3.classList.contains("o") || square3.classList.contains("x")) &&
    (square4.classList.contains("o") || square4.classList.contains("x")) &&
    (square5.classList.contains("o") || square5.classList.contains("x")) &&
    (square6.classList.contains("o") || square6.classList.contains("x")) &&
    (square7.classList.contains("o") || square7.classList.contains("x")) &&
    (square8.classList.contains("o") || square8.classList.contains("x")) &&
    (square9.classList.contains("o") || square9.classList.contains("x"))
  ) {
    console.log("Draw");
    draw++;
    pauseGame();
  }

  xWins.innerHTML = `X wins: ${xWin}`;
  oWins.innerHTML = `O wins: ${oWin}`;
  draws.innerHTML = `Draws: ${draw}`;

  localStorage.setItem("resultsX", xWin);
  localStorage.setItem("resultsO", oWin);
  localStorage.setItem("resultsDraw", draw);
};
// Pause game
const pauseGame = () => {
  playBtn.innerHTML = "Play Game";

  square1.classList.remove("x");
  square1.classList.remove("o");
  square2.classList.remove("x");
  square2.classList.remove("o");
  square3.classList.remove("x");
  square3.classList.remove("o");
  square4.classList.remove("x");
  square4.classList.remove("o");
  square5.classList.remove("x");
  square5.classList.remove("o");
  square6.classList.remove("x");
  square6.classList.remove("o");
  square7.classList.remove("x");
  square7.classList.remove("o");
  square8.classList.remove("x");
  square8.classList.remove("o");
  square9.classList.remove("x");
  square9.classList.remove("o");

  flag = true;

  square1.disabled = true;
  square2.disabled = true;
  square3.disabled = true;
  square4.disabled = true;
  square5.disabled = true;
  square6.disabled = true;
  square7.disabled = true;
  square8.disabled = true;
  square9.disabled = true;
};

winConditions();
game();

playBtn.addEventListener("click", function startNewGame() {
  x.forEach((element) => {
    element.classList.add("hide-x");
  });
  o.forEach((element) => {
    element.classList.add("hide-o");
  });

  playBtn.innerHTML = "Reset";

  square1.disabled = false;
  square2.disabled = false;
  square3.disabled = false;
  square4.disabled = false;
  square5.disabled = false;
  square6.disabled = false;
  square7.disabled = false;
  square8.disabled = false;
  square9.disabled = false;

  winner.innerHTML = "";
});

resetResultBtn.addEventListener("click", function resetResults() {
  xWin = 0;
  oWin = 0;
  draw = 0;

  xWins.innerHTML = `X wins: ${xWin}`;
  oWins.innerHTML = `O wins: ${oWin}`;
  draws.innerHTML = `Draws: ${draw}`;
});

xWins.innerHTML = `X wins: ${xWin}`;
oWins.innerHTML = `O wins: ${oWin}`;
draws.innerHTML = `Draws: ${draw}`;
