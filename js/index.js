 'use strict';

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var slidesParagraph = document.getElementsByClassName("paragraph");
          var dots = document.getElementsByClassName("dot");

          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          
          if (n > slidesParagraph.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slidesParagraph.length}


          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          for (i=0; i < slidesParagraph.length;i++){
            slidesParagraph[i].style.display = "none";

          }
          slidesParagraph[slideIndex-1].style.display = "block";  

          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }
        setInterval(function(){plusSlides(1); }, 5000);
        

        function readmeButton() {
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