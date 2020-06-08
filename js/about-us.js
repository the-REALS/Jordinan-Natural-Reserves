'use strict'
var topBtn = document.getElementById("goTop");

topBtn.addEventListener('click',function(event){
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


});
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}



// Nav 
// this for the nav link
var links=document.getElementById("icon");
links.addEventListener('click',function(event){
    event.preventDefault();
    
    var displayOrHide=document.getElementById("myLinks")
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

// for the navbar button
// var links=document.getElementById("icon");
// links.addEventListener('click',function(event){
//     event.preventDefault();
//     var displayOrHide=document.getElementById("myLinks")
//     if (displayOrHide.style.display === "inline-block") {
//         displayOrHide.style.display = "none";
//     } else {
//         displayOrHide.style.display = "inline-block";
//     }
// });
// var nav = document.querySelector('.topnav');   
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
// nav.classList = "sticky";
// console.log('hiii')
// } else {
// nav.classList = "topnav";
// }
// }

// var men = document.querySelector('.menu');
// men.addEventListener('click', () =>{
//     men.classList.toggle('active');
//     console.log('ssss');
// })
