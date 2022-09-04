let cartArr = JSON.parse(localStorage.getItem("cartProducts")) || [];
let wishArr = JSON.parse(localStorage.getItem("wishProducts")) || [];
let cartContainer = document.getElementById("cartContainer");
let wishContainer = document.getElementById("wishContainer");
let cartdetails = document.getElementById("cartdetails");
let wishdetails = document.getElementById("wishdetails");

let totalPrice;
let totalCartItems;
let wishlistSize;

wishlistSize = wishArr.length;
let wishsize = document.createElement("h3");
wishsize.textContent = `Wishlist size : ${wishlistSize}`;
wishdetails.append(wishsize);

totalPrice = cartArr.reduce((sum, el) => {
  return sum + el.price;
}, 0);

totalCartItems = cartArr.length;
let cartSize = document.createElement("h3");
cartSize.textContent = `Cart size : ${totalCartItems}`;

let total_price = document.createElement("h3");
total_price.textContent = `Total amount : $${
  Math.round(totalPrice * 100) / 100
}`;

let payNow = document.createElement("h3");
payNow.textContent = `Proceed to pay $${Math.round(totalPrice * 100) / 100}`;
payNow.onclick = () => {};

if (totalPrice === 0) {
  cartdetails.append(cartSize, total_price);
} else {
  cartdetails.append(cartSize, total_price, payNow);
}

let cartDOM = () => {
  cartContainer.innerHTML = null;

  cartArr.map(({ pic, price, prodQuant }, index) => {
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    let igBox = document.createElement("div");
    let image = document.createElement("img");
    image.src = pic;
    igBox.append(image);

    let qt = document.createElement("p");
    qt.textContent = prodQuant;

    let pr = document.createElement("p");
    pr.textContent = `$ ${Math.round(price * 100) / 100}`;

    let action = document.createElement("div");
    let iconn = document.createElement("i");
    iconn.setAttribute("class", "fa-solid fa-xmark");
    action.append(iconn);

    let addToWish = document.createElement("div");
    let wishAdd = document.createElement("i");
    wishAdd.setAttribute("class", "fa-solid fa-heart-circle-plus");
    addToWish.append(wishAdd);

    box.append(igBox, qt, pr, action, addToWish);
    cartContainer.append(box);

    iconn.onclick = () => {
      removeItem(index);
    };

    wishAdd.onclick = () => {
      addToWishList(index);
    };
  });
};

cartDOM();

let removeItem = (index) => {
  cartArr.splice(index, 1);
  localStorage.setItem("cartProducts", JSON.stringify(cartArr));
  cartDOM(cartArr);
  cartSize.textContent = `Cart size : ${returnSize(cartArr)}`;
  total_price.textContent = `Total amount : $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;
  payNow.textContent = `Proceed to pay $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;
  if (returnAmount(cartArr) === 0) {
    payNow.style.visibility = "hidden";
  }
};
payNow.onclick = () => {
  window.open("../login_rizwan/registration.html", "_blank");
};

let addToWishList = (index) => {
  wishArr.push(cartArr[index]);
  localStorage.setItem("wishProducts", JSON.stringify(wishArr));
  wishDOM(wishArr);
  wishsize.textContent = `Wishlist size : ${returnSize(wishArr)}`;

  cartArr.splice(index, 1);
  localStorage.setItem("cartProducts", JSON.stringify(cartArr));
  cartDOM(cartArr);
  cartSize.textContent = `Cart size : ${returnSize(cartArr)}`;
  total_price.textContent = `Total amount : $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;
  payNow.textContent = `Proceed to pay $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;
  if (returnAmount(cartArr) === 0) {
    payNow.style.visibility = "hidden";
  }
};

let wishDOM = () => {
  wishContainer.innerHTML = null;
  wishArr.map(({ price, pic, prodQuant }, index) => {
    let box = document.createElement("div");
    box.setAttribute("class", "wishBox");

    let igBox = document.createElement("div");
    let image = document.createElement("img");
    image.src = pic;
    igBox.append(image);

    let qt = document.createElement("p");
    qt.textContent = prodQuant;

    let pr = document.createElement("p");
    pr.textContent = `$ ${Math.round(price * 100) / 100}`;

    let action = document.createElement("div");
    let iconn = document.createElement("i");
    iconn.setAttribute("class", "fa-solid fa-xmark");
    action.append(iconn);

    let addToCart = document.createElement("div");
    let addIcon = document.createElement("i");
    addIcon.setAttribute("class", "fa-solid fa-cart-arrow-down");
    addToCart.append(addIcon);

    box.append(igBox, qt, pr, action, addToCart);
    wishContainer.append(box);

    iconn.onclick = () => {
      removeWish(index);
    };
    addIcon.onclick = () => {
      addtocartarr(index);
    };
  });
};

wishDOM();

let removeWish = (index) => {
  wishArr.splice(index, 1);
  localStorage.setItem("wishProducts", JSON.stringify(wishArr));
  wishDOM(wishArr);
  wishsize.textContent = `Wishlist size : ${returnSize(wishArr)}`;
};

let addtocartarr = (index) => {
  cartArr.push(wishArr[index]);
  localStorage.setItem("cartProducts", JSON.stringify(cartArr));
  cartDOM(cartArr);

  cartSize.textContent = `Cart size : ${returnSize(cartArr)}`;
  total_price.textContent = `Total amount : $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;
  payNow.textContent = `Proceed to pay $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;

  payNow.style.visibility = "visible";

  wishArr.splice(index, 1);
  localStorage.setItem("wishProducts", JSON.stringify(wishArr));
  wishDOM(wishArr);
  wishsize.textContent = `Wishlist size : ${returnSize(wishArr)}`;
};

let returnSize = (ar) => {
  let size = ar.length;
  return size;
};

let returnAmount = (ar) => {
  let amount = ar.reduce((sum, el) => {
    return sum + el.price;
  }, 0);

  return amount;
};

let elements = document.getElementsByClassName("mode");
for (let i = 0; i < elements.length; i++) {
  document
    .getElementById("toggler")
    .addEventListener("change", function (event) {
      if (event.target.checked) {
        elements[i].removeAttribute("data-theme");
      } else {
        elements[i].setAttribute("data-theme", "default");
      }
    });
}
