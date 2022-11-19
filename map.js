const strings = ["hello tony", "goodbye tony", "bonjour tony"];

const individualWords = strings.map((greeting) => {
  const words = [];
  let word = "";
  for (letter of greeting) {
    if (letter !== " ") {
      word += letter;
    } else {
      words.push(word);
      word = "";
    }
  }
  words.push(word);
  let capitalisedString = "";
  for (indWord of words) {
    capitalisedString +=
      indWord.charAt(0).toUpperCase() + indWord.slice(1) + " ";
  }
  capitalisedString = capitalisedString.slice(0, -1);
  return capitalisedString;
});

// const capitalisedWords = individualWords.map((word) => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// });

console.log(individualWords);
// console.log(capitalisedWords);
console.log(strings);
