var products = [
  { 
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

var cart = [];
var cartList = [];
var total = 0;

function open_modal() {
  console.log("Open Modal");
  printCart();
}
 
// Exercise 1
/* function buy(id) {
  for (i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      cartList.push(products[i]);
    }
  }
  console.log(cartList);
  document.getElementById("count_product").innerHTML = cartList.length; // imprimimos en el boton cart
}*/

// Exercise 2
function cleanCart() {
  // FUNCIONA
  cartList = [];
  cart = [];
  document.getElementById("count_product").innerHTML = 0;
  document.getElementById("total_price").innerHTML = 0;
  document.getElementById("cart_list").innerHTML = "";
}

// Exercise 3
function calculateTotal() {
  // FUNCIONA
  for (i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  console.log(total);
}

// Exercise 4
/*function generateCart() {
  // FUNCIONA
  
  for (i = 0; i < cartList.length; i++) {
    let product = cartList[i];
    let existingProduct = cart.includes(product);
    if (existingProduct) {
      product.quantity++;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
  }
  applyPromotionsCart() // aplicamos promo
  console.log(cart);
}
*/
// Exercise 5
function applyPromotionsCart() {
  // FUNCIONA
  for (i = 0; i < cart.length; i++) {
    let existDiscount = cart[i].offer;
    if (existDiscount && cart[i].id === 1 && cart[i].quantity >= 3) {
      cart[i].subtotalWithDiscount = cart[i].quantity * 10;
    }
    if (existDiscount && cart[i].id === 3 && cart[i].quantity >= 10) {
      cart[i].subtotalWithDiscount = (cart[i].quantity * 3.33)
    }
  }
}
 
// Exercise 6
function printCart() {
  //generateCart()
  let htmlCartList =
    cart.length == 0
      ? "<tr><th scope='row'>No items added yet</th><td></td><td></td><td></td><td></td></tr>"
      : "";
  let subtotal = 0;
  cart.forEach(function (product) {
    htmlCartList += "<tr>";
    htmlCartList +=
      "<th scope='row'>" +
      product.name +
      "</th><td>$" +
      product.price +
      "</td><td>" +
      product.quantity
      +
      ` <button class='btn btn-sm' onclick='removeFromCart(${product.id})'>-</button><td>`;
    if (product.subtotalWithDiscount) {
      htmlCartList +=
        "$" +
        product.subtotalWithDiscount +
        "</td>";
      subtotal += product.subtotalWithDiscount;
    } else {
      htmlCartList += "$" + product.quantity * product.price + "</td>";
      subtotal += product.quantity * product.price;
    }

  });
  document.getElementById("cart_list").innerHTML = htmlCartList;
  document.getElementById("total_price").innerHTML = subtotal;
}

// Exercise 7


// ** Nivell II **
// Exercise 8
function addToCart(id) {
  for (i = 0; i < products.length; i++) {
    if (products[i].id === id && products[i].hasOwnProperty('quantity') === false) {
      cart.push(products[i])
      products[i].quantity = 1
    } else if (products[i].id === id && products[i].hasOwnProperty('quantity') === true) { products[i].quantity++ }
  }
    document.getElementById("count_product").innerHTML = cart.length;
    applyPromotionsCart();
    console.log(cart);
}

// Exercise 9
function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  
  if (index !== -1) {
    if (cart[index].quantity === 1) {
      cart.splice(index, 1);
    } else if (cart[index].quantity > 1) {
      cart[index].quantity--;
    }
  }
  
  applyPromotionsCart();
  printCart();
}
