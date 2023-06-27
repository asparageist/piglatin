function chop(element){
  const chopWord = element.substring(1);
  console.log(chopWord);
  return chopWord;
}

function subForm() {
  event.preventDefault();
  const userString = document.getElementById("input").value;
  chop(userString);
  console.log(userString);
}

window.onload = function() {
  document.querySelector("form#translate").addEventListener("submit", subForm);
};
