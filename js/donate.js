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

var nav = document.querySelector('.topnav');
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    nav.classList = "sticky";
    // console.log('hiii')
  } else {
    nav.classList = "topnav";
  }
};
var linkss=document.getElementById("icon");
linkss.addEventListener('click', (event)=>{
  event.preventDefault();
  
    var displayOrHide = document.getElementById("myLinks");
    displayOrHide.classList.toggle('myLinks2');
});

// End Nav functions

