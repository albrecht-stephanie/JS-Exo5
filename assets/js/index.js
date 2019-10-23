
function controle(){

  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  if ((isNaN(firstNumber)) || (isNaN(secondNumber))){ //verification que les champs contiennent des nombresss
    alert("J'ai dis des nombres !!!")

  }
  else {
    if (Number.isInteger(firstNumber,secondNumber)){  //verification si nombres decimaux
      alert("J'ai dis des nombres à virgule !!!")
    }
    else {
      var a = Math.trunc(firstNumber);
      var b = secondNumber;

      var c = a * b;

      alert("Résultat :"+c);
    }

  }

}
