'use strict'

var products = [];
function Products(name, path, price, quantity){
this.name = name;
this.path = path;
this.price = price;
this.quantity = quantity;
products.push(this);
}

for(var i=0; i<products.length; i++){
    new Products(products[i]);
}


var addToCart = document.getElementsByClassName('container');
addEventListener('click',handelAddToCart);

function handelAddToCart (event){
    getProduct();
    if(event.target.textContent == 'Add To Cart'){
    // Reach the path of the product image
    var productPath = event.path[2].children[0].children[0].attributes[0].nodeValue;
    console.log(productPath);
    // Reach the name of the product
    var poductName = event.path[2].children[0].children[1].textContent;
     console.log(poductName);
     console.log(event.path[2].children[0].children[0].attributes[1].nodeValue);
     // Reach the price of the product
    var productPrice = event.path[2].children[0].children[0].attributes[1].nodeValue; 
    //Reach the quantity
    var productQuantity = event.path[1].children[1].value;
    //creat p
    new Products(poductName, productPath, productPrice, productQuantity);

    // console.log(products);
    setProduct();
    }
}
//send the selected Product to the local srorage
function setProduct(){
    var item = JSON.stringify(products);
    localStorage.setItem('item', item);
}

function getProduct(){
  var getproduct = localStorage.getItem('item');
  if(getproduct){
  products = JSON.parse(getproduct);
  }
}