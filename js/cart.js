'use strict'
var container = document.querySelector('#items');
var sTotal = document.querySelector('#cart-subtotal');
var taxTotal = document.querySelector('#cart-tax');
var gTotoal = document.querySelector('#cart-total');

var products = [];
function getProduct(){
    var getproduct = localStorage.getItem('item');
    if(getproduct){
    products = JSON.parse(getproduct);
    console.log(products);
    }
}

var cont = 0;

function renderCart(){
  var items = document.getElementById('items');
    getProduct();
    for(var i=0; i< products.length; i++){
        var div1 = document.createElement('div');
        div1.setAttribute('class', 'product');
        var div2 = document.createElement('div');
        div2.setAttribute('class', 'product-image');
        var img1 = document.createElement('img');
        img1.src = products[i].path;
        div2.appendChild(img1);
        div1.appendChild(div2);
        var div3 = document.createElement('div');
        div3.textContent = products[i].price + '$';
        div3.setAttribute('class', 'product-price product-price22');
        div1.appendChild(div3);
        var div4 = document.createElement('div');
        div4.textContent = products[i].quantity;
        div4.setAttribute('class', 'product-quantity product-quantity22');
        div1.appendChild(div4);
        var div5 = document.createElement('div');
        div5.setAttribute('class', 'product-removal product-removal22');
        var div6 = document.createElement('div');
        div6.setAttribute('class', 'product-line-price product-line-price22');
        div6.textContent = `${products[i].total}$`
        div1.appendChild(div6);
        container.appendChild(div1);
        var button1 = document.createElement('button');
        button1.setAttribute('class', 'remove-product');
        button1.id = i;
        button1.textContent = `Remove`;
        div5.appendChild(button1);
        div1.appendChild(div5);
      }
    }

    function count (){
      for (var i =0; i < products.length; i++)
      cont += products[i].total;
      sTotal.textContent = `${cont} $`;
      taxTotal.textContent = `${cont/20} $`
      gTotoal.textContent = `${(cont/20)+ 15 +cont} $`
    }


function clearTable() {
        container.innerHTML = ``;
}

container.addEventListener('click', removeItemFromCart);
function removeItemFromCart(event) {

    var deleteId;
  
    if (event.target.textContent === 'Remove') {
      deleteId = event.target.id;
      cont = 0;
      products.splice(deleteId, 1);
      
      setProduct();
      clearTable();
      renderCart();
      count ();
    }
  }

  function setProduct(){
    var item = JSON.stringify(products);
    localStorage.setItem('item', item);
}

renderCart();
count ();

// Nav Script 

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
// End Nav Script 