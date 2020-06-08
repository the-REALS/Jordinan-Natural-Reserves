'use strict'

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


var addToCart = document.getElementsByClassName('container');
addEventListener('click',handelAddToCart);

function handelAddToCart (event){
    event.preventDefault();
    getProduct();
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
    //Reach the quantity
    var productQuantity = event.path[1].children[1].value;
    //creat p
    new Products(productName, productPath, productPrice, productQuantity);

    // console.log(products);
    setProduct();
    }
}
//send the selected Product to the local srorage
function setProduct(){
    var item = JSON.stringify(products);
    localStorage.setItem('item', item);
}
// get the item that stored in the local storage 
function getProduct(){
  var getproduct = localStorage.getItem('item');
  if(getproduct){
  products = JSON.parse(getproduct);
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
    console.log();
})

}