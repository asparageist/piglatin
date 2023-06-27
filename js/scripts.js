function chop(word){
  let secondLetter = word[1];
  let chopWord = word;
  if ("h".includes(secondLetter)) {
    chopWord = word.substring(2);
  } else {
    chopWord = word.substring(1);
  }
  console.log(chopWord);
  return chopWord;
}

function subForm() {
  event.preventDefault();
  const userString = document.getElementById("input").value;
  let firstLetter = userString[0];
  if ("aeiouAEIOU".includes(firstLetter)){
    console.log(userString);
  } else {
  chop(userString);
  }
}

window.onload = function() {
  document.querySelector("form#translate").addEventListener("submit", subForm);
};
