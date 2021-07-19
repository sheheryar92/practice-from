// COUNTER
function myFunction() {
  const count = document.getElementById("getValue").value.length;

  document.getElementById("counter").innerHTML = count;
}
// COUNTER


// INPUT
function getData(event) {
  event.preventDefault();
  var nameValue = document.getElementById("enter_name").value;

  var numberValue = document.getElementById("enter_number").value;

  document.getElementById("user_name").innerHTML = nameValue;

  document.getElementById("user_number").innerHTML = numberValue;
}
// INPUT