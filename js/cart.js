'use strict'
var container = document.querySelector('#cartItems');
var products;
function getProduct(){
    var getproduct = localStorage.getItem('item');
    if(getproduct){
    products = JSON.parse(getproduct);
    }
    console.log(products);
}
getProduct();
function renderCartTable(){
    for(var i=0; i<products.length; i++){
    var tRow = document.createElement('tr');
    tRow.setAttribute('id',i);
    container.appendChild(tRow);
    var tData = document.createElement('td');
    tRow.appendChild(tData);
    tData.textContent = `${products[i]}.`
    
    }
}
renderCartTable();