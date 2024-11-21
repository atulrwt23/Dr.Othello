function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

function giveHints(userName, userChoice, randomNumber) {
  const message = userName + " Your number : '" + userChoice;

  if (userChoice > randomNumber) {
    return message + "' is a higher number, try guessing samller number.\n";
  }

  return message + "' is a smaller number, try guessing higher number.\n";
}

function isNumberGuessed(userChoice, randomNumber) {
  return userChoice === randomNumber;
}

function makeMessage() {
  const segment1 = "\nYou are here to play guess a number.";
  const segment2 = "\nLet's start the game.";
  const segment3 = "\nTell me your name : ";

  return segment1 + segment2 + segment3;
}

function guessTheNumber(userName, randomNumber) {
  const userChoice = +prompt("\nTell me your Number : ");

  if (isNumberGuessed(userChoice, randomNumber)) {
    return "\n\nYou Won!!. Good One , let's play again\n\n";
  }

  console.clear();
  console.log(giveHints(userName, userChoice, randomNumber));

  if (!isUserInterested()) {
    return "Loser!!";
  }

  return guessTheNumber(userName, randomNumber);
}

function isUserInterested() {
  return confirm("Do you wish to continue.");
}

function startGame() {
  if (isUserInterested()) {
    const userName = prompt(makeMessage());
    const randomNumber = getRandomNumber();

    console.clear();
    console.log(guessTheNumber(userName, randomNumber));

    startGame();
  }

  return "\nWell it was nice knowing you.";
}

console.log(startGame());
