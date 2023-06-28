function chop(word){
  let firstLetter = word[0];
  let secondLetter = word[1];
  let chopWord = word;
  if ("h".includes(secondLetter) || "q".includes(firstLetter)) {
    chopWord = word.substring(2);
  } else {
    chopWord = word.substring(1);
    secondLetter = "";
  }
  addAy(chopWord, firstLetter, secondLetter);
  return chopWord;
}

function addAy(word, first, second){
  let wordAy = word + first + second + "ay";
  console.log(wordAy);
  return wordAy;
}

function splitString(userString){
  let stringArray = userString.split(" ");
  stringArray.forEach(element)
}

function subForm() {
  event.preventDefault();
  const userString = document.getElementById("input").value;
  let firstLetter = userString[0];
  if ("aeiouAEIOU".includes(firstLetter)){
    addAy(userString, "w", "");
  } else {
    chop(userString);
  }
}

window.onload = function() {
  document.querySelector("form#translate").addEventListener("submit", subForm);
};
