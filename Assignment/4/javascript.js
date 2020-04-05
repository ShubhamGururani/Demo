function getInterest() {
  var p = document.getElementById("principal").value ; 
  var t = document.getElementById("time").value ; 
  var r = document.getElementById("rate").value;
  var ams = (p*r*t)/100;
  document.getElementById("res").innerHTML = "Total interest = र्" +ams;
}