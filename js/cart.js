'use strict'

var container = document.querySelector('#items');
var sTotal = document.querySelector('#cart-subtotal');
var taxTotal = document.querySelector('#cart-tax');
var gTotoal = document.querySelector('#cart-total');
var count = 0;
var spano = document.querySelector('#spano');

var products = [];
var contT = 0;


function getProduct(){
    var getproduct = localStorage.getItem('item');
    if(getproduct){
    products = JSON.parse(getproduct);
    console.log(products);
    }
    var getCount = localStorage.getItem('count');
    if(getCount){
  count = JSON.parse(getCount);
  spano.textContent = `_${count}_`;
}};
function setProduct(){
  var item = JSON.stringify(products);
  localStorage.setItem('item', item);
  var item2 = JSON.stringify(count);
  localStorage.setItem('count', item2);
}



function renderCart(){
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
        var div0 = document.createElement('div');
        div0.setAttribute('class', 'product-Name');
        if (products[i].name == 'Dana Mountains' || products[i].name == 'Al Patra' || products[i].name == 'AL Mujib'){
          div0.textContent = `${products[i].name} Ticket`;
        }else{
          div0.textContent = products[i].name;
        }
        div1.appendChild(div0);
        var div3 = document.createElement('div');
        div3.textContent = products[i].price + '$';
        div3.setAttribute('class', 'product-price');
        div1.appendChild(div3);
        var div4 = document.createElement('div');
        div4.textContent = products[i].quantity;
        div4.setAttribute('class', 'product-quantity');
        div1.appendChild(div4);
        var div5 = document.createElement('div');
        div5.setAttribute('class', 'product-removal');
        var div6 = document.createElement('div');
        div6.setAttribute('class', 'product-line-price');
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

    function countAll (){
      for (var i =0; i < products.length; i++)
      contT += products[i].total;
      sTotal.textContent = `${contT} $`;
      taxTotal.textContent = `${contT/20} $`
      gTotoal.textContent = `${(contT/20)+ 15 +contT} $`
    }


function clearTable() {
        container.innerHTML = ``;
}

container.addEventListener('click', removeItemFromCart);
function removeItemFromCart(event) {

    var deleteId;
  
    if (event.target.textContent === 'Remove') {
      deleteId = event.target.id;
      contT = 0;
      count -= 1;
      products.splice(deleteId, 1);
      
      setProduct();
      clearTable();
      renderCart();
      countAll ();
    }
  }
  
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

    var modal = document.getElementById('myModal');
    var span = document.getElementById("close1");
    var popupMessege = document.getElementById('popup');
    popupMessege.addEventListener('click' ,function mesegeCheckout(){
     if(event.target.id === 'popup'){
      modal.style.display = "block"; 
    }
   });
   myModal.addEventListener('click' ,function closeMessege(){
    if(event.target === myModal){
     modal.style.display = "none"; 
   }
   location.replace('store.html');
  });
  span.addEventListener('click' ,function closeMessege(){
    if(event.target === span){
     modal.style.display = "none"; 
    }
    location.replace('store.html');
  });
renderCart();
countAll ();

// End Nav Script 