function displayGrid(string) {
  let grid = "";
  const line = "---------------";

  for (let index = 1; index <= 9; index++) {
    grid = grid + "┃ " + string[index - 1] + " ┃";

    if (index % 3 === 0) {
      grid = grid + "\n" + line + "\n";
      continue;
    }
  }

  return grid;
}

function getMark(playerNumber) {
  return playerNumber % 2 === 0 ? "✘" : "☢";
}

function replace(playerChoice, string, playerNumber) {
  let grid = "";
  const mark = getMark(playerNumber);

  for (let index = 0; index < string.length; index++) {
    if (playerChoice === string[index]) {
      grid = grid + mark;
      continue;
    }

    grid = grid + string[index];
  }

  return grid;
}

function playMessage(player1Name, player2Name, playerNumber) {
  const player = playerNumber === 0 ? player1Name : player2Name;

  return player + " please choose your box for the input : ";
}

function isWinningMatchFound(string, start, end, diff, seperation) {
  for (let index = start; index < end; index = index + seperation) {
    const isMatched = string[index] === string[index + diff];
    if (isMatched && string[index + diff] === string[index + 2 * diff]) {
      return true;
    }
  }

  return false;
}

function isTheirAWinner(str) {
  let isValid = isWinningMatchFound(str, 0, 3, 3, 1);
  isValid = isValid || isWinningMatchFound(str, 0, 7, 1, 3);
  isValid = isValid || isWinningMatchFound(str, 0, 1, 4, 1);
  isValid = isValid || isWinningMatchFound(str, 2, 3, 2, 1);

  return isValid;
}

function isChoiceVlaid(choice, grid) {
  for (let index = 0; index < grid.length; index++) {
    if (choice === grid[index]) {
      return true;
    }
  }

  return false;
}

function giveResult(string, playerNumber, player1Name, player2Name) {
  const player = playerNumber % 2 !== 0 ? player1Name : player2Name;
  const statement1 = player + " has won the match.";
  const statement2 = "The match is a tie.";

  return isTheirAWinner(string) ? statement1 : statement2;
}

function printBoard(string) {
  console.clear();
  console.log("\n" + displayGrid(string));
}

function play(player1Name, player2Name, playerNumber, string) {
  let validPlay = 0;
  while (validPlay <= 9 && !isTheirAWinner(string)) {
    printBoard(string);
    const choice = prompt(playMessage(player1Name, player2Name, playerNumber));
    string = replace(choice, string, playerNumber);

    if (!isChoiceVlaid(choice, string)) {
      validPlay--;
    }

    validPlay++;
    playerNumber++;
  }
  printBoard(string);

  return giveResult(string, playerNumber, player1Name, player2Name);
}

function ticTakToe() {
  const stringValue = "123456789";
  const player1Name = prompt("Enter player one name : ");
  const player2Name = prompt("Enter player two name : ");

  console.log(play(player1Name, player2Name, 0, stringValue));
}

ticTakToe();
