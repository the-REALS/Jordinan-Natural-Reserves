'use strict';

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


var slidesDots = document.querySelector('#slidesDots');
slidesDots.addEventListener('click', function (event) {
  if (event.target.attributes[1].textContent == 'dot') {
    // console.log(event.target.attributes[1].textContent);
    var first = event.target.id;
    currentSlide(first);
  }
});

// to show 3 the slides 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var slidesParagraph = document.getElementsByClassName("paragraph");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  if (n > slidesParagraph.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slidesParagraph.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < slidesParagraph.length; i++) {
    slidesParagraph[i].style.display = "none";
  }

  slidesParagraph[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


var setIntervalx = setInterval(function () { plusSlides(1); }, 5000);

// function to show the other content of the text (READ MORE)
function readmeButton() {
  if (event.target.textContent == 'Read more') {
    clearInterval(setIntervalx);
  } else {
    clearInterval(setIntervalx);
    setIntervalx = setInterval(function () { plusSlides(1); }, 5000);
  }

  var dots = document.getElementById("doot");
  var dots1 = document.getElementById("doot1");
  var dots2 = document.getElementById("doot2");

  var moreText = document.getElementById("more");
  var moreText1 = document.getElementById("more1");
  var moreText2 = document.getElementById("more2");

  var btnText = document.getElementById("myBtn");
  var btnText1 = document.getElementById("myBtn1");
  var btnText2 = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";


  }
  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";

  }
  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";

  }

  else {

    dots.style.display = "none";
    dots1.style.display = "none";
    dots2.style.display = "none";

    btnText.innerHTML = "Read less";
    btnText1.innerHTML = "Read less";
    btnText2.innerHTML = "Read less";

    moreText.style.display = "inline";
    moreText1.style.display = "inline";
    moreText2.style.display = "inline";

  }
}

// for the navbar button
// this for the nav link
var links=document.getElementById("icon");
links.addEventListener('click',function(event){
  event.preventDefault();
  
    var displayOrHide=document.getElementById("myLinks");
    displayOrHide.classList.toggle('myLinks2');
    // if (displayOrHide.style.display === "inline-block") {
    //     displayOrHide.style.display = "none";
    // } else {
    //     displayOrHide.style.display = "inline-block";
    // }
});
// end nav link
// for make nav fixed and give him opecity 0.5 after scroll
var nav = document.querySelector('.topnav');
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    nav.classList = "sticky";
    // console.log('hiii')
  } else {
    nav.classList = "topnav";
  }
}

  // var men = document.querySelector('.menu');
  //       men.addEventListener('click', () =>{
  //           men.classList.toggle('active');
  //           console.log('ssss');
  //       })


/**************************************************************/
var count = 0;
var spano = document.querySelector('#spano');
var tripAll = [];

function Trip(name, path, price, quantity) {
this.name = name;
this.path = path;
this.price = price;
this.quantity = quantity;
this.total = this.quantity * this.price;
tripAll.push(this);
}

getProduct();

function setProduct(){
  var item = JSON.stringify(tripAll);
  localStorage.setItem('item', item);
  var item2 = JSON.stringify(count);
  localStorage.setItem('count', item2);
}
// get the item that stored in the local storage 
function getProduct(){
var getproduct = localStorage.getItem('item');
if(getproduct){
  tripAll = JSON.parse(getproduct);
}
var getCount = localStorage.getItem('count');
if(getCount){
  count = JSON.parse(getCount);
  spano.textContent = `${count}`;
}
}

var pur = document.querySelector(".purchase");
var slid = document.querySelector('.slider');
var form = document.querySelector('#forma');
var sec2 = document.querySelector('.screen');
var prog3 = document.querySelector('#thP3');
var ticket = document.querySelector('.table');
var bak = document.querySelector('#back')
var passen = document.querySelector('#passCont');
var morf = document.querySelector('#passCont2');

ticket.addEventListener('click', (event)=>{
    event.preventDefault();
    if(event.target.textContent == 'Back to Home'){
        ticket.classList.remove('table2');
        prog3.classList.remove('active');
        sec2.classList.remove('screen2');
        slid.classList.remove('slider2');
        form.classList.remove('form2');
        mC.classList.remove('modal-content2')
        modal.classList.remove('modal2');
      }
});

var tripName, tripPrice, tripPath;
var modal = document.getElementById('myModal');
var span = document.getElementById("close1");
var popupMessege = document.getElementById('next');
var mC = document.querySelector('#mContent');

// var eTar = `event.target`;
forma.addEventListener('submit', (event) =>{
    event.preventDefault();
console.log(event.target[0].labels);
        if(event.target[0].value !== '' && event.target[1].value !== '' && event.target[2].value !== '' && event.target[3].value !== ''){
            form.classList.add('form2');
            prog3.classList.add('active');
            ticket.classList.add('table2');
            passen.textContent = event.target[0].value;
            morf.textContent = event.target[3].value;
            new Trip(tripName, tripPath, tripPrice, event.target[2].value);
            bak.classList.add('back2');
            count += 1;
            spano.textContent = `${count}`;
            // modal.style.display = "block";
            modal.classList.add('modal2');
            mC.classList.add('modal-content2');
            setProduct();
        }
});

myModal.addEventListener('click' ,function closeMessege(){
  if(event.target === myModal){
  //  modal.style.display = "none"; 
  mC.classList.remove('modal-content2')
  modal.classList.remove('modal2');
 }
});
span.addEventListener('click' ,function closeMessege(){
  if(event.target === span){
  //  modal.style.display = "none";
  mC.classList.remove('modal-content2')
  modal.classList.remove('modal2');
  }
});


bak.addEventListener('click', ()=>{
    sec2.classList.remove('screen2');
    slid.classList.remove('slider2');
    ticket.classList.remove('table2');
});

slid.addEventListener('click', (event) =>{
    event.preventDefault();
    if(event.target.textContent == 'Purchase'){
        slid.classList.add('slider2');
        sec2.classList.add('screen2');
        console.log(event.path[3].children[0].children[0].children[0].attributes[0].nodeValue);
        tripPath = event.path[3].children[0].children[0].children[0].attributes[0].nodeValue;
        tripName = event.path[3].children[0].children[0].children[1].innerHTML;
        tripPrice = event.path[3].children[0].children[0].children[0].attributes[1].nodeValue;
        bak.classList.remove('back2');
    }
    if(event.target.textContent == 'Add To Cart'){
    var productPath = event.path[2].children[0].children[0].attributes[0].nodeValue;
    var productName = event.path[2].children[0].children[1].textContent;
    var productPrice = event.path[2].children[0].children[0].attributes[1].nodeValue; 
    var productQuantity = event.path[1].children[1].value;

    new Trip(productName, productPath, productPrice, productQuantity);
    count += 1;
    spano.textContent = `${count}`;
    setProduct();
}
});

productScroll();


function productScroll() {
    var slider = document.getElementById("slider");
    var next = document.getElementsByClassName("pro-next");
    var prev = document.getElementsByClassName("pro-prev");
    var slide = document.getElementById("slide");
    var item = document.getElementById("slide");

  for (var i = 0; i < next.length; i++) {
    //refer elements by class name

    var position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    var items = getCount(item, false);
    var visibleItems = slider.offsetWidth / 7600;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  var relevantChildren = 0;
  var children = parent.childNodes.length;
  for (var i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

// var inpu = document.querySelector('#inp');
// inpu.addEventListener('focus', ()=>{
//   for(var i = 0; i<4; i++){
  
//   }
// })

// inpu.blur(function() {
//   var x = this;
//   if (x.val())
//     x.addClass('used');
//   else
//     x.removeClass('used');
// });

// $(window, document, undefined).ready(function() {

//   $('input').blur(function() {
//     var $this = $(this);
//     if ($this.val())
//       $this.addClass('used');
//     else
//       $this.removeClass('used');
//   });

  // var $ripples = $('.ripples');

  // $ripples.on('click.Ripples', function(e) {

  //   var $this = $(this);
  //   var $offset = $this.parent().offset();
  //   var $circle = $this.find('.ripplesCircle');

  //   var x = e.pageX - $offset.left;
  //   var y = e.pageY - $offset.top;

  //   $circle.css({
  //     top: y + 'px',
  //     left: x + 'px'
  //   });

  //   $this.addClass('is-active');

  // });

  // $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  // 	$(this).removeClass('is-active');
  // });

// });
