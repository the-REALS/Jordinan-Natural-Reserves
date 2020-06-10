'use strict';

var guestForm = document.getElementById("dataform");
guestForm.addEventListener("submit", checkFeedback);

function checkFeedback() {
    event.preventDefault();
    var firstq = document.forms["feed"]["firstQ"].value;
    var secondQ = document.forms["feed"]["secondQ"].value;
    if (firstq != "") {
        alert(` thank you to submit `);
    }
    guestForm.reset();
}


// var donationform = document.getElementById("donationform");
// guestForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     var donorNam = event.target.doname.value;
//     var donorMon = event.target.money.value;
// })



// This JS for Nav oki 
var links = document.getElementById("icon");
links.addEventListener('click', function (event) {
    event.preventDefault();

    var displayOrHide = document.getElementById("myLinks")
    if (displayOrHide.style.display === "inline-block") {
        displayOrHide.style.display = "none";
    } else {
        displayOrHide.style.display = "inline-block";
    }
});

var nav = document.querySelector('.topnav');
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    nav.classList = "sticky";
    // console.log('hiii')
  } else {
    nav.classList = "topnav";
  }
}
// End nav JS



// fot send botton on the contact form 
var signup = document.querySelector('.modal-content');
signup.addEventListener('submit', signUpBotton);

function signUpBotton() {
    event.preventDefault();
    console.log(event.target[0].value);
    if (event.target[0].value !== "" && event.target[1].value !== "" && event.target[2].value !== "" && event.target[3].value !== "") {

        alert("thanks to contact us we will contact you");
    }
    else {
        alert('please fill up the form');
    }
    signup.reset();
}



// to click out side the contact form and take you out of the page 
function reachNow() {
    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

reachNow();