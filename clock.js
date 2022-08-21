let clock = prompt("enter any time ");
var hours = Number(clock.substring(0,2));
var minutes = Number(clock.substring(2));
if(hours >0 &&hours <= 24){

if(hours >= 1 &&hours < 12){
    alert(hours + minutes +"AM");
}
else {
    hours = hours -12;
    alert(hours + minutes +"PM");
}
//moment(new Date()).format("YYYY-MM-DD hh:mm a"); // 12H clock (am/pm);

}
else {
    alert("invalid time");
}