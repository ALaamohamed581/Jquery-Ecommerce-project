var url = "https://fakestoreapi.com/products";
var productcolumn = document.getElementById("probox");
var temp;
var ptemp;
var checkout = document.getElementById("cko");
var smals = document.getElementsByClassName("amountt");
var chosetnp = document.getElementById("chosne-products");
var total = document.getElementById("total");
var shop = document.getElementById("check");
var pricess = document.getElementsByClassName("pricse");
var prdct = document.getElementsByClassName("bought-products");
var products = [];

$(document).ready(function () {
  //ajax call

  $.ajax({
    url: url,
    type: "get",
    dataType: "json",

    success: function (res) {
      console.log(res);
      var pro = {};

      var product = "";
      for (var i = 0; i < 9; i++) {
        product += `
            <div class="ps-box">
            <a href="#">
                <img src="${res[i].image}">
                <br>
                <span> ${res[i].title}</span>
                <p>${res[i].price} $</p>  
                <a href="#" class="add-cart cart" onClick=MovePorduct(${i})>
                <i class="fas fa-shopping-cart " ></i>

            </a>
                  </a>
        </div>
            `;
        var pro = {
          title: res[i].title,
          img: res[i].image,
          pric: res[i].price,
          id: res[i].id,
        };
        products.push(pro);
      }

      productcolumn.innerHTML = product;
    },
    error: function (xhr) {
      console.log(xhr);
    },
    beforeSend: function (xhr) {},
    complete: function (xhr) {},
  });
});

//  function MovePorduct(i){

//   $.ajax({
//     url: url,
//     type: 'get',
//     dataType: 'json',

//     success: function (res) {
//       var product=''

//         product+=`
//         <div class="bought-products">
//         <div class="p-dateails">
//               <a href="#">
//                   <img src="${res[i].image}">
//                   <br>
//                   <span> ${res[i].title}</span>
//                   <p class="pricse">${res[i].price}</p>        </a>
//               </div>
//      <div class="amount">
//   <button class="miuns"  onClick=decrease(${i},${res[i].price})>
//       <i class="fa-solid fa-minus"></i></button>
//       <small class="amountt"> 1 </small>
//   <button class="increase"  onClick=increase(${i},${res[i].price})>
//       <i class="fa-solid fa-plus" ></i></button>
//      </div>
//       </div>
//         `

//         pTemp=res[i].price

//         chosetnp.innerHTML+=product

//     },
//     error: function (xhr) {
//         console.log(xhr)
//     },
//     beforeSend: function (xhr) {
//     },
//     complete: function (xhr) {
//     }
// })}

function MovePorduct(i) {
  procont = Array.from(chosetnp.children);
  console.log(procont);
  if (procont.includes(prdct[i])) {
    increase(i);
  } else {
    var product = "";

    product += `
         <div class="bought-products" id="${i}pn">
          <div class="p-dateails" >
                <a href="#">
                   <img src="${products[i].img}">
                    <br>
                    <span> ${products[i].title}</span>
                    <p class="pricse">${products[i].pric}</p>        </a>
              </div>
       <div class="amount" >
     <button class="miuns"  onClick=decrease(${i})>
      <i class="fa-solid fa-minus"></i></button>
      <small class="amountt" id="${products[i].id}n" > 1 </small>
  <button class="increase"  onClick=increase(${i})>
      <i class="fa-solid fa-plus" ></i></button>
     </div>
      </div>
        `;

    chosetnp.innerHTML += product;
    temp = i;
    calatotal(temp);
  }
}

function decrease(i) {
  var pTemp = products[i].pric;

  if (document.getElementById(`${products[i].id}n`).innerHTML != 0) {
    document.getElementById(`${products[i].id}n`).innerHTML--;
    calatotal(i);
  } else if (document.getElementById(`${products[i].id}n`).innerHTML == "0") {
    document.getElementById(`${products[i].id}n`).innerHTML--;
    chosetnp.removeChild(document.getElementById(`${i}pn`));
    calatotal(i, pTemp);
  }
}

function increase(i) {
  document.getElementById(`${products[i].id}n`).innerHTML++;

  calatotal(i);
}

function calatotal(i, x = 0) {
  var priceTota = 0;
  var amousts = 0;
  for (j = 0; j < prdct.length; j++) {
    priceTota += Math.round(
      +prdct[j].children[0].children[0].children[3].innerHTML *
        +smals[j].innerHTML
    );
  }

  total.innerHTML = priceTota + "$";
}

$(document).on("click", "#check", function () {
  $(".checkout").addClass("ative_cart");
  calatotal(temp);
  $(document).on("click", ".products-p", function () {
    $(".checkout").removeClass("ative_cart");
  });
});
$(document).on("click", ".products-p", function () {
  $(".checkout").removeClass("ative_cart");
});
