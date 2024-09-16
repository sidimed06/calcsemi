function calc(){
var l15 =document.getElementById("1.5l").value;
var l1 =document.getElementById("1l").value;
var l05 =document.getElementById("0.5l").value;
var l5 =document.getElementById("5l").value;
var lg =document.getElementById("1g").value;
var lj =document.getElementById("1j").value;
var ljm =document.getElementById("1jm").value;
var dr =document.getElementById("dr").value;

var p1 =document.getElementById("p1").value;
var p2 =document.getElementById("p2").value;
var p3 =document.getElementById("p3").value;
var p4 =document.getElementById("p4").value;
var p5 =document.getElementById("p5").value;
var p6 =document.getElementById("p6").value;
var p7 =document.getElementById("p7").value;
var p8 =document.getElementById("p8").value;


var prixl15=p1*112*l15;
var prixl11=p4*120*l1;
var prixl05=p2*175*l05;
var prixl5=p3*192*l5;
var prixlg=p5*140*lg;
var prixlj=p6*150*lj;
var prixljm=p7*160*ljm;
var prixdr=p8*180*dr;

document.getElementById("result").value= parseFloat(prixl15)+parseFloat(prixl11)+parseFloat(prixl05)+parseFloat(prixl5)+parseFloat(prixlg)+parseFloat(prixlj)+parseFloat(prixljm)+parseFloat(prixdr);
}
function sus(){
    var s  =document.getElementById("s1").value;
   var prix =document.getElementById("result").value;
   document.getElementById("s1").value=prix-s;

    }
    function add(){
        var a = parseFloat(document.getElementById("a1").value);
            var prix = parseFloat(document.getElementById("result").value);
       document.getElementById("a1").value= prix+ a;
    
        }