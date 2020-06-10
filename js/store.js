'use strict'

var count = 0;
var spano = document.querySelector('#spano');
var products = [];
function Products(name, path, price, quantity){
this.name = name;
this.path = path;
this.price = price;
this.quantity = quantity;
this.total = this.quantity * this.price;
products.push(this);
}

for(var i=0; i<products.length; i++){
    new Products(products[i]);
}

// adding eventListener for all carts
var addToCart = document.querySelectorAll('.container');
for(var i=0; i<addToCart.length; i++){
addToCart[i].addEventListener('click',handelAddToCart);
}
getProduct();

function handelAddToCart (event){
    getProduct();
    event.preventDefault();
    if(event.target.textContent == 'Add To Cart'){
    // Reach the path of the product image
    var productPath = event.path[2].children[0].children[0].attributes[0].nodeValue;
    console.log(productPath);
    // Reach the name of the product
    var productName = event.path[2].children[0].children[1].textContent;
     console.log(productName);
     console.log(event.path[2].children[0].children[0].attributes[1].nodeValue);
     // Reach the price of the product
    var productPrice = event.path[2].children[0].children[0].attributes[1].nodeValue; 
    console.log(productPrice);
    //Reach the quantity
    var productQuantity = event.path[1].children[1].value;
    if(productQuantity == 0){
      productQuantity =1;
    }
    //creat p
    console.log(productQuantity);
    new Products(productName, productPath, productPrice, productQuantity);
    count += 1;
    spano.textContent = `_${count}_`;
    // console.log(products);
    setProduct();
}
}
//send the selected Product to the local srorage
function setProduct(){
    var item = JSON.stringify(products);
    localStorage.setItem('item', item);
    var item2 = JSON.stringify(count);
    localStorage.setItem('count', item2);
}
// get the item that stored in the local storage 
function getProduct(){
  var getproduct = localStorage.getItem('item');
    if(getproduct){
  products = JSON.parse(getproduct);
  }
  var getCount = localStorage.getItem('count');
    if(getCount){
  count = JSON.parse(getCount);
  spano.textContent = `_${count}_`;
}
}

var filterButns = document.querySelector('#filter-btns').children;
var main = document.querySelector('.mainGalry').children;

for(var i = 0; i < filterButns.length; i++){
filterButns[i].addEventListener('click', function(){
    for(var j = 0; j < filterButns.length; j++){
        filterButns[j].classList.remove('active');
    }
    this.classList.add('active');
    var targ = this.getAttribute("data-target");

    for(var k = 0; k < main.length; k++){
        main[k].style.display = 'none';
        if(targ == main[k].getAttribute("data-id")){
            main[k].style.display = 'block';
        }
        if(targ == "all"){
            main[k].style.display = 'block';
        }
    }
    // console.log();
});

}



// Nav 
// this for the nav link
var links=document.getElementById("icon");
links.addEventListener('click', (event)=>{
  event.preventDefault();
  
    var displayOrHide=document.getElementById("myLinks");
    displayOrHide.classList.toggle('myLinks2');
});
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
// end nav link

// for make nav fixed and give him opecity 0.5 after scroll

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


// End nav function
