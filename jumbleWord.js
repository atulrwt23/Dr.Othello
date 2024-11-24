function provideRange(number) {
  return Math.floor(Math.random() * number);
}

function swap(string, index1, index2) {
  let str = "";
  
  for (let index = 0; index < string.length; index++) {
    if (index === index1) {
      str = str + string[index2];
      continue;
    }
    
    if (index === index2) {
      str = str + string[index1];
      continue;
    }

    str = str + string[index];
  }

  return str;
}

function swapWord(word) {
  let str = word;

  for (let times = 0; times < str.length * 1000; times++) {
    str = swap(str, provideRange(word.length), provideRange(word.length));
  }

  return str;
}

function shuffle() {
  const word = prompt("Give a valid word that can be jumbled : ");
  const swaped = swapWord(word);

  if (word === swaped) {
    return shuffle();
  }
  
  return swaped;
}

console.log(shuffle());
