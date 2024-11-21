function messageForUser() {
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

function WinLoseOrTie(userChoice, deviceChoice) {
  const choicePair = userChoice + deviceChoice;

  if (userChoice === deviceChoice) {
    return "\nWOW IT'S A TIE!!\nLet's play again.";
  }

  if (choicePair === "RS" || choicePair === "PR" || choicePair === "SP") {
    return "\nYOU WIN!!\nYou are good.\nLet's play again.\n";
  }

  return "\nYOU LOSE!!\nYou don't know how to play.\nLet's play again."
}

function isChoiceValid(userChoice) {
  return userChoice === "R" || userChoice === "P" || userChoice === "S";
}

function continueGame(userChoice) {
  if (!isChoiceValid(userChoice)) {
    return "\nWhy do this to me ?\nPlease choose a valid input in CAPITAL!!!";
  }

  return WinLoseOrTie(userChoice, getComputerChoice());
}

function getUserChoice() {
  return prompt(messageForUser());
}

function isUserPlaying() {
  return confirm("\nAre you ready for the challenge!!");
}

function rockPaperSicssor() {
  return continueGame(getUserChoice());
}

function askUserToPlay() {
  if (!isUserPlaying()) {
    return "\nIt was fun knowing you, let's play next time.\n";
  }

  console.log(rockPaperSicssor());

  return askUserToPlay();
}

console.log(askUserToPlay());
