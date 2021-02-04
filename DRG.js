var array = ["Gunner", "Engineer", "Scout", "Driller"];
function GetValue() {
  var randomNumber = array[Math.floor(Math.random() * (array.length))];
  document.getElementById('message').innerHTML = randomNumber
}
