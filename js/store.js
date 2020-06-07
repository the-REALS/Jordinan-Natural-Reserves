'use strict'

var productsNames = [];

var products = [];
function Products(name, path, price){
this.name = name;
this.path = path;
this.price = price;
products.push(this);
}

for(var i=0; i<productsNames.length; i++){
    new Products(productsNames[i]);
}


var addToCart = document.getElementsByClassName('container');
addEventListener('click',handelAddToCart);

function handelAddToCart (event){
    if(event.target.textContent == 'Add To Cart'){
    // Reach the path of the product image
    var productPath = event.path[2].children[0].children[0].attributes[0].nodeValue;
    console.log(productPath);
    // Reach the name of the product
    var poductName = event.path[1].children[0].childNodes[0].textContent;
     console.log(poductName);
     console.log(event.path[2].children[0].children[0].attributes[1].nodeValue);
     // Reach the price of the product
    var productPrice = event.path[2].children[0].children[0].attributes[1].nodeValue; 

    new Products(poductName, productPath, productPrice);

    console.log(products);
    }
}
