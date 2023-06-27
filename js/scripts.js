

function subForm() {
  event.preventDefault();
  const userString = document.getElementById("input").value;
  console.log(userString);
}

window.onload = function() {
  document.querySelector("form#translate").addEventListener("submit", subForm);
};
