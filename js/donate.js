'use strict';

//constructor for donate
// function Donate(donateName, mony) {
//   this.donateName = donateName;
//   this.mony = mony;
//   allDonat.all.push(this);
// }

// Donate.all = [];

// Donate.prototype.addItem = function (donateName, mony) {
//   var thisDonate = new Donate(donateName, mony)
//   this.donateName.push(thisDonate);
//   this.mony.push(thisDonate);
// };


//store data to local storage
// Donate.prototype.storeToLocalStorage = function () {

//   var store = JSON.stringify(Donate.all);
//   localStorage.setItem('allDonate', store);
// }


//get data from local storage
// Donate.prototype.getDataFromeLocalStorage = function () {

//   var store = localStorage.getItem('allDonate');
//   if (store) {
//     Donate.all = JSON.parse(store);

//   }
// }

// on click to submit butoon
var donationform = document.querySelector('#donationform');
donationform.addEventListener('submit', buttonsub);

function buttonsub() {
  event.preventDefault();
  alert('thank you for Donate');
  donationform.reset();
}

// var donationform = document.getElementById("donationform");
// guestForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     var donorNam = event.target.doname.value;
//     var donorMon = event.target.money.value;
// })




// this for the nav link
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
// end nav link
// for make nav fixed and give him opecity 0.5 after scroll
var nav = document.querySelector('.topnav');
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    nav.classList = "sticky";
    console.log('hiii')
  } else {
    nav.classList = "topnav";
  }
}
// End Nav functions

