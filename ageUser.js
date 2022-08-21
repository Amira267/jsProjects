while(true){
var age = Number(prompt("Enter your age "));

if(age == null)
break;

while(age <= 0){

     alert("invalid age ");
     
}

if (age >= 1 && age <= 10) {
    alert ("Chlid");
  } 
  
else if (age>=  11 && age <= 18) {
    alert ("teenager");
  }
else if (age >= 19 && age <= 50) {
    alert ("Grown");
  } 
  
else {
    alert ("Old");
  }



}