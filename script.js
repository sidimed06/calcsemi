function calc(){
var l15 =document.getElementById("1.5l").value;
var l1 =document.getElementById("1l").value;
var l05 =document.getElementById("0.5l").value;
var l5 =document.getElementById("5l").value;
var p1 =document.getElementById("p1").value;
var p2 =document.getElementById("p2").value;
var p3 =document.getElementById("p3").value;
var p4 =document.getElementById("p4").value;
var prixl15=p1*112*l15;
var prixl11=p4*120*l1;
var prixl05=p2*172*l05;
var prixl5=p3*192*l5;
document.getElementById("result").value= parseFloat(prixl15)+parseFloat(prixl11)+parseFloat(prixl05)+parseFloat(prixl5);
}