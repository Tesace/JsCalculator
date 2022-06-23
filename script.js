 var num1 = parseFloat(prompt("Please enter the first number: "));
document.getElementById("num1").innerHTML = ("Your first number was: " + num1);

var oprt = prompt("Please enter your arithmetic operator either (+, -, *, /) ");
document.getElementById("oprt").innerHTML = ("Your selected operator was: " + oprt);

var num2 = parseFloat(prompt("Please enter the second number: "));
document.getElementById("num2").innerHTML = ("Your second number was: " + num2);

if (oprt == "+"){
  var result = (num1 + num2)
  document.getElementById("result").innerHTML = ("The solution: " + result);
}
else if (oprt == "-"){
  var result = (num1 - num2)
  document.getElementById("result").innerHTML = ("The solution: " + result);
}
else if (oprt == "*"){
  var result = (num1 * num2)
  document.getElementById("result").innerHTML = ("The solution: " + result);
}
else if (oprt == "/"){
  var result = (num1 / num2)
  document.getElementById("result").innerHTML = ("The solution: " + result);
}


