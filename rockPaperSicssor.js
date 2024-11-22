function composeInstrictions() {
  const segment1 = "\nIt's show time let's play rock-paper-sicssor";
  const segment2 = "\n\nFor Rock choose 🪨 : R";
  const segment3 = "\nFor Paper choose  📄 : P";
  const segment4 = "\nFor Sicssor choose ✂️ : S";
  const segment5 = "\n\nNow choose your weapon : ";

  return segment1 + segment2 + segment3 + segment4 + segment5;
}

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.3) {
    return "R";
  }

  if (randomNumber > 0.6) {
    return "P";
  }

  return "S";
}

function getArticle(choice, player) {
  if (choice === "S") {
    return player + "\n choose Sicssor : ✂️";
  }

  if (choice === "P") {
    return player + "\n choose Papaer : 📄";
  }

  return player + "\nYou choose Rock : 🪨";
}

function getArticleMessage(userChoice, deviceChoice) {
  const userArticle = getArticle(userChoice, "You");
  const deviceArticle = getArticle(deviceChoice, "Device");
  
  return userArticle + deviceArticle;
}

function play(userChoice, deviceChoice) {
  const choicePair = userChoice + deviceChoice;
  const article = getArticleMessage(userChoice, deviceChoice);

  if (userChoice === deviceChoice) {
    return article + "\nWOW IT'S A TIE!!\nLet's play again.";
  }

  if (choicePair === "RS" || choicePair === "PR" || choicePair === "SP") {
    return article + "\nYOU WIN!!\nYou are good.\nLet's play again.\n";
  }

  return article + "\nYOU LOSE!!\nYou but you can still win.\nLet's play again."
}

function isChoiceValid(userChoice) {
  return userChoice === "R" || userChoice === "P" || userChoice === "S";
}

function continueGame(userChoice) {
  if (!isChoiceValid(userChoice)) {
    return "\nWhy do this to me ?\nPlease choose a valid input in CAPITAL!!!";
  }

  return play(userChoice, getComputerChoice());
}

function rockPaperSicssor() {
  const userChoice = prompt(composeInstrictions());

  return continueGame(userChoice);
}

function isUserPlaying() {
  return confirm("\nAre you ready for the challenge!!");
}

function askUserToPlay() {
  if (!isUserPlaying()) {
    return "\nIt was fun knowing you, let's play next time.\n";
  }

  console.clear();
  console.log(rockPaperSicssor());

  return askUserToPlay();
}

console.log(askUserToPlay());
