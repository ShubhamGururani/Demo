function calculate(x){
  var hrs=document.getElementById(x);
if (hrs.value >= 40){
   document.getElementById("trigger").innerHTML = "Pay this worker र्" +((hrs.value-40)*12) +"."; 
 }  
}