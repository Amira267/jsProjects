
var mesg =alert ("is the first release of the calculator that only has a samulation features + , - , * , / ");


var result;

var fNum = Number(prompt("Enter the first number"));
var lNum = Number(prompt("Enter the second number "));
var op = prompt("Enter the operator");
switch(op) {
   case "+":
      result = fNum + lNum;
      alert(fNum + op + lNum +"=" + result);
       break;
   case "-":
        result = fNum - lNum;
        alert(fNum + op + lNum +"=" + result);
        break;
    case "*":
       result = fNum * lNum;
       alert(fNum + op + lNum +"=" + result);
        break;
    case "/":
        result = fNum / lNum;
        alert(fNum + op + lNum +"=" + result);
       break;
    
}