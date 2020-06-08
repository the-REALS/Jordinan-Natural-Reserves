'use strict'

var guestForm = document.getElementById("dataform")
guestForm.addEventListener("submit", function(event){
    event.preventDefault();
    // var guestAge = event.target.gAge.value;
    // var guestJob = event.target.gOcc.value;
    var guestLik =event.target.gLik.value;
    var guestSug = event.target.gSug.value;
    var guestRef = event.target.gRef.value;
    var guestRat = event.target.gRating.value;
    // alert("Tanks " + guestAge + " Glad you " + guestJob + " And " + guestLik + " And that " + guestRef);

})


// function checkFeedback(){
//     var b1 = document.forms["feed"]["1"].value;
//     var b2 = document.forms["feed"]["2"].value;
    
//     if (b1 == "" ){
//         alert ("Anything you like?");
//         return false;
//     } 
//     if (b2 == "" ){
//         alert ("Any Suggestions?");
//         return false;
//     } 
// }