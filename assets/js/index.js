
function controle(){
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;

  var a = Math.trunc(firstNumber);
  var b = Math.trunc(secondNumber);

  var c = a * b;

  alert("Résultat :"+c);
}
