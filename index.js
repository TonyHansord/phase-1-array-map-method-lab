const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  const capitalisedTutorials = tutorials.map((tutorial) => {
    const words = [];
    let word = "";
    for (let letter of tutorial) {
      if (letter !== " ") {
        word += letter;
      } else {
        words.push(word);
        word = "";
      }
    }
    words.push(word);
    let capitalisedString = "";
    for (let indWord of words) {
      capitalisedString +=
        indWord.charAt(0).toUpperCase() + indWord.slice(1) + " ";
    }
    capitalisedString = capitalisedString.slice(0, -1);
    return capitalisedString;
  });

  return capitalisedTutorials;
};
