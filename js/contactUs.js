'use strict'

var guestForm = document.getElementById("dataform")
guestForm.addEventListener("submit", function(event){
    event.preventDefault();
    var guestLik =event.target.gLik.value;
    var guestSug = event.target.gSug.value;
    var guestRef = event.target.gRef.value;
    var guestRat = event.target.gRating.value;
})
var donationform = document.getElementById("donationform")
guestForm.addEventListener("submit", function(event){
    event.preventDefault();
    var donorNam = event.target.doname.value;
    var donorMon = event.target.money.value;
})

function checkFeedback(){
    var b1 = document.forms["feed"]["1"].value;
    var b2 = document.forms["feed"]["2"].value;
    if (b1 != "" ){
        alert (b1+ " " +b2);
    } 
}
function checkDon(){
    var b3 = document.forms["don"]["3"].value;
    var b4 = document.forms["don"]["4"].value;
    
    if (b3 != "" ){
        alert (b3+ " " +b4);    
         
    } 
}