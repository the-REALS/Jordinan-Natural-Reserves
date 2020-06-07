'use strict'
var container = document.querySelector('#items');

var products;
function getProduct(){
    var getproduct = localStorage.getItem('item');
    if(getproduct){
    products = JSON.parse(getproduct);
    console.log(products);
    }
  }
function renderCart(){
    getProduct();
    for( var i=0; i< products.length; i++){
        var tRow = document.createElement('tr');
        tRow.setAttribute('id',i);
        container.appendChild(tRow);
        var tData1 = document.createElement('td');
        tRow.appendChild(tData1);
        tData1.textContent = 'X';
        var tData2 = document.createElement('td');
        tRow.appendChild(tData2);
        tData2.textContent= products[i].name;
        var tData3 = document.createElement('td');
        tRow.appendChild(tData3);
        tData3.textContent = products[i].quantity;
        var tData4 = document.createElement('td');
        tRow.appendChild(tData4);
        tData4.textContent = products[i].price;
        var tData5 = document.createElement('td');
        var image= document.createElement('img');
        image.src = products[i].path;
        tData5.appendChild(image);
        tRow.appendChild(tData5);
    }
}
renderCart();