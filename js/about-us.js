'use strict'
var topBtn = document.getElementById("goTop");

topBtn.addEventListener('click',function(event){
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
};
var linkss=document.getElementById("icon");
linkss.addEventListener('click', (event)=>{
  event.preventDefault();
  
    var displayOrHide = document.getElementById("myLinks");
    displayOrHide.classList.toggle('myLinks2');
});
