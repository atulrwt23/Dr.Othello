const capitalChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallChar = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "#@$&*";
const number = "1234567890"

function giveNumber(number) {
  return Math.floor(Math.random() * number);
}

function giveChar(string) {
  const index = giveNumber(string.length);

  return string[index];
}

function getDigit() {
  const choice = giveNumber(4);

  switch (choice) {
    case 0:
      return giveChar(capitalChar);

    case 1:
      return giveChar(smallChar);

    case 2:
      return giveChar(specialChar);

    case 3:
      return giveNumber(10);
  }
}

function isCharMatching(char, string) {
  for (let index = 0; index < string.length; index++) {
    if (char === string[index]) {
      return true;
    }
  }

  return false;
}

function isCharPresent(string, password) {
  for (let index = 0; index < string.length; index++) {
    if (isCharMatching(string[index], password)) {
      return true;
    }
  }

  return false;
}


function isPasswordValid(password) {
  const condition1 = isCharPresent(capitalChar, password);
  const condition2 = isCharPresent(smallChar, password);
  const condition3 = isCharPresent(specialChar, password);
  const condition4 = isCharPresent(number, password);

  return condition1 && condition2 && condition3 && condition4;
  
}

function generatePassword(length, passwordLength) {
  if (passwordLength >= length) {
    return "";
  }

  const charToAdd = getDigit();

  return charToAdd + generatePassword(length, passwordLength + 1);
}

function givePassword(length) {
  const password = generatePassword(length, 0);

  if (!isPasswordValid(password)) {
    return givePassword(length);
  }

  console.clear();
  return "\nTHE PASSWORD IS : " + password + "\n";
}

function instruction() {
  const segment1 = "\nHELLO USER, SO YOU CAME HERE TO GENERATE A PASSWORD.\n\n";
  const segment2 = "THE PASSWORD MUST CONTAIN AT LEAST 8 DIGITS!!.\n";
  const segment3 = "THE PASSWORD CAN CONTAIN AT MOST 8010 DIGITS!!.\n\n";
  const segment4 = "TELL ME THE NUMBER OF DIGITS IN YOUR PASSWORD : ";

  return segment1 + segment2 + segment3 + segment4;
}

function passwordGeneration() {
  const length = +prompt(instruction());

  if (length < 4 || length > 8010) {
    console.clear();
    console.log("PLEASE GIVE A VALID LENGTH!!");
    return passwordGeneration();
  }

  return givePassword(length);
}

console.log(passwordGeneration());
