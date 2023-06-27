function chop(element){
  const chopWord = element.substring(1);
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
