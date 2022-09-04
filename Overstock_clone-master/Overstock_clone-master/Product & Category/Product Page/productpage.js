let products = JSON.parse(localStorage.getItem("product")) || [];
let allProducts = JSON.parse(localStorage.getItem("siteProducts")) || [];
let cartArr = JSON.parse(localStorage.getItem("cartProducts")) || [];
let wishArr = JSON.parse(localStorage.getItem("wishProducts")) || [];
let cartBox = document.getElementById("showCart");
let cartParent = document.getElementById("cartParent");
let cartBelow = document.getElementById("below");
let toPayment = document.getElementById("payment");
let esc = document.getElementById("esc");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let detailsDiv = document.getElementById("details");
let reviewsContainer = document.getElementById("reviewsContainer");
let infoContainer = document.getElementById("infoContainer");
let one = document.getElementById("one");
let three = document.getElementById("three");
let cwpages = document.getElementsByClassName("tocartpage");
let moreRwSection = document.getElementById("moreRwSection");

import reviewsData from "../Overstock_Objects/reviews.js";
let reviewArr = reviewsData();
import shareOnFb from "../Components/share.js";

let infoArr = [
  {
    h4It: "ITEM#: 29583924",
    text: "Stay relaxed and sleep soundly with the Beautyrest Luxury Quilted Mink Weighted Blanket. Designed for adults or those with a minimum body weight of 120lbs, this 60 x 70 inches weighted blanket distributes pressure on your body, touching pressure points to make you feel secure and relaxed. The faux mink cover features diamond quilting and the weighted insert has box quilting to prevent the polyester and glass bead filling from shifting. Ten inner ties paired with a zipper closure on the cover keeps the insert secure.",
    imgUrl: "../Product Page/info.png",
    h4Feat: "Features",
    ul: [
      "Provides all over body comforting pressure for relaxation",
      "Poly fill and glass beads make up the filling weight for maximum comfort",
      "The weighted blanket is designed for adults or for a minimum body weight of 120 lbs or more",
      "Oeko-Tex Certified, includes no harmful substances or chemicals (#16.HCN.89565)",
    ],
  },
];

let totalAmount;
let totalItems;

h1.textContent = cartArr.length;
h2.textContent = wishArr.length;

function rightDescription(products) {
  detailsDiv.innerHTML = null;
  let discInfo;
  let totalQuant;
  let {
    name,
    ratings,
    desc,
    price,
    info: { discount },
  } = products;

  let share = document.createElement("div");
  share.setAttribute("id", "sharePlugin");
  share.innerHTML = shareOnFb();

  let title = document.createElement("h3");
  title.textContent = name;

  let rating = document.createElement("div");
  rating.textContent = ratings;

  let descr = document.createElement("p");
  descr.textContent = desc;

  let rate = document.createElement("h4");
  let originalP = document.createElement("span");
  originalP.textContent = `$${price}`;
  if (discount) {
    let newPrice = document.createElement("span");
    newPrice.textContent = `$${Math.round(price - price * (discount / 100))}`;
    rate.append(newPrice, originalP);

    discInfo = document.createElement("p");
    discInfo.textContent = `Flat ${discount}% offer`;
    discInfo.style.color = "red";
  } else {
    rate.append(originalP);
  }

  let varities = document.createElement("div");
  let code = document.createElement("p");
  code.textContent = "Colors";
  let colors = document.createElement("p");
  colors.setAttribute("id", "colors");
  let sp1 = document.createElement("span");
  sp1.textContent = "Red";
  let sp2 = document.createElement("span");
  sp2.textContent = "steelblue";
  let sp3 = document.createElement("span");
  sp3.textContent = "Burlywood";
  let sp4 = document.createElement("span");
  sp4.textContent = "Darkorchid";
  colors.append(sp1, sp2, sp3, sp4);
  varities.append(code, colors);

  let selectDiv = document.createElement("div");
  selectDiv.setAttribute("id", "selection");
  let selectTitle = document.createElement("p");
  selectTitle.textContent = "Quantity";
  let pincode = document.createElement("input");
  pincode.type = "number";
  pincode.maxLength = 6;
  pincode.placeholder = "Pincode";
  pincode.setAttribute("id", "pincode");
  let pinStatus = document.createElement("p");
  pinStatus.style.fontWeight = "700";
  pinStatus.style.color = "#00FF00";
  let quant = document.createElement("select");
  let op0 = document.createElement("option");
  op0.value = "";
  op0.textContent = "select quantity";
  let op1 = document.createElement("option");
  op1.value = 3;
  op1.textContent = `${3} quantity`;
  let op2 = document.createElement("option");
  op2.value = 5;
  op2.textContent = `${5} quantity`;
  let op3 = document.createElement("option");
  op3.value = 10;
  op3.textContent = `${10} quantity`;
  let op4 = document.createElement("option");
  op4.value = 15;
  op4.textContent = `${15} quantity`;
  quant.append(op0, op1, op2, op3, op4);
  selectDiv.append(selectTitle, pinStatus, quant, pincode);

  let btns = document.createElement("div");
  btns.setAttribute("id", "btns");
  let wishlist = document.createElement("button");
  wishlist.textContent = "Wishlist";
  let addToCart = document.createElement("button");
  addToCart.textContent = "Add to cart";
  btns.append(wishlist, addToCart);

  if (discInfo) {
    detailsDiv.append(
      share,
      title,
      rating,
      descr,
      rate,
      discInfo,
      varities,
      selectDiv,
      btns
    );
  } else {
    detailsDiv.append(
      share,
      title,
      rating,
      descr,
      rate,
      varities,
      selectDiv,
      btns
    );
  }

  let fetchPin = async () => {
    if (event.code === "Enter") {
      let pin = pincode.value;
      if (pin !== "") {
        getPin(pin, pinStatus);
        pincode.value = null;
      }
    }
  };
  pincode.addEventListener("keyup", fetchPin);

  // LOGIC FOR SELECT TAG
  quant.onchange = () => {
    let quantSelected = quant.value;
    totalQuant = Number(quantSelected);
  };

  // ADD TO WISHLIST
  wishlist.addEventListener("click", () => {
    if (wishArr.length === 0) {
      let obj = {
        name: products.name,
        pic: products.imgArr[0],
        prodQuant: 1,
        price: products.price * 1,
      };
      wishArr.push(obj);
      localStorage.setItem("wishProducts", JSON.stringify(wishArr));
      h2.textContent = wishArr.length;
      // wishlist.disabled = true
      // wishlist.style.color = "#f7f7f7"
      // wishlist.style.cursor = "not-allowed"
    } else {
      let flag = false;
      for (let i = 0; i < wishArr.length; i++) {
        if (products.name === wishArr[i].name) {
          flag = true;
          break;
        }
      }

      if (flag === true) {
      } else {
        let obj = {
          name: products.name,
          pic: products.imgArr[0],
          prodQuant: 1,
          price: products.price * 1,
        };
        wishArr.push(obj);
        localStorage.setItem("wishProducts", JSON.stringify(wishArr));
        h2.textContent = wishArr.length;
      }
    }
  });

  addToCart.addEventListener("click", () => {
    if (totalQuant === undefined || totalQuant === "") {
      alert("Please! Select the quantity");
      quant.style.border = "2px solid red";
    } else if (totalQuant) {
      quant.style.border = "1px solid #a5a5a5";

      if (cartArr.length === 0) {
        let obj = {
          name: products.name,
          prodQuant: totalQuant,
          price: (Math.round(products.price * 100) / 100) * totalQuant,
          pic: products.imgArr[0],
        };
        cartArr.push(obj);
        localStorage.setItem("cartProducts", JSON.stringify(cartArr));

        h1.textContent = cartArr.length;
      } else {
        let flag = false;

        for (let i = 0; i < cartArr.length; i++) {
          if (products.name === cartArr[i].name) {
            cartArr[i].prodQuant += totalQuant;
            cartArr[i].price =
              cartArr[i].prodQuant * (Math.round(products.price * 100) / 100);
            localStorage.setItem("cartProducts", JSON.stringify(cartArr));
            flag = true;
            break;
          }
        }

        if (flag === true) {
        } else {
          let obj = {
            name: products.name,
            prodQuant: totalQuant,
            price: (Math.round(products.price * 100) / 100) * totalQuant,
            pic: products.imgArr[0],
          };
          cartArr.push(obj);
          localStorage.setItem("cartProducts", JSON.stringify(cartArr));

          h1.textContent = cartArr.length;
        }
      }
    }
  });
}

let getPin = async (code, msg) => {
  try {
    const res = await fetch(`https://api.postalpincode.in/pincode/${code}`);

    let data = await res.json();
    let [{ Status }] = data;
    let img = document.createElement("img");
    img.setAttribute("id", "pinStatusGif");
    img.src = "./Fading circles.gif";
    if (Status === "Success") {
      let start = new Date(2022, 5, 0);
      let end = new Date();
      function randomDate(start, end) {
        return new Date(
          start.getTime() + Math.random() * (end.getTime() - start.getTime())
        );
      }
      msg.innerHTML = null;
      let x = randomDate(start, end).toString();
      msg.append(img);
      setTimeout(() => {
        msg.innerHTML = null;
        msg.textContent = `Delivery by, ${x.substring(0, 10)}`;
        msg.style.color = "#10db10";
      }, 3000);
    } else {
      msg.innerHTML = null;
      msg.append(img);
      setTimeout(() => {
        msg.innerHTML = null;
        msg.textContent = `sorry! unable to deliver`;
        msg.style.color = "#ee0a0a";
      }, 3000);
    }
  } catch (er) {
    console.log(er);
  }
};

rightDescription(products);

// TOP REVIEWS ====>
let geTesti = async () => {
  try {
    const res = await fetch(`https://testimonialapi.toolcarton.com/api`);
    let data = await res.json();
    gotTesti(data);
  } catch (er) {
    console.log(er);
  }
};

let gotTesti = (reviews) => {
  let i = 0;

  setInterval(() => {
    if (i >= reviews.length) {
      i = 0;
    }
    let { name, avatar, rating, message } = reviews[i];

    reviewsContainer.innerHTML = null;
    let rwBox = document.createElement("div");
    rwBox.setAttribute("id", "rwBox");
    let div1 = document.createElement("div");
    let perAvatar = document.createElement("img");
    perAvatar.src = avatar;
    let perName = document.createElement("h4");
    perName.textContent = name;
    div1.append(perAvatar, perName);

    let div2 = document.createElement("div");
    let msg = document.createElement("p");
    msg.textContent = message;
    let rwRatings = document.createElement("h4");
    rwRatings.textContent = `${rating} ⭐️`;
    div2.append(rwRatings, msg);

    rwBox.append(div1, div2);
    reviewsContainer.append(rwBox);

    i++;
  }, 3000);
};

geTesti();

let oneDOM = () => {
  infoContainer.innerHTML = null;
  let [{ h4Feat, h4It, imgUrl, ul }] = infoArr;
  let { details } = products;

  let contents = document.createElement("div");
  contents.setAttribute("id", "contents");

  let left = document.createElement("div");
  left.setAttribute("id", "left");
  let h4 = document.createElement("h4");
  h4.textContent = h4It;
  let p = document.createElement("p");
  p.textContent = details;
  left.append(h4, p);

  let middle = document.createElement("div");
  middle.setAttribute("id", "middle");
  let img = document.createElement("img");
  img.src = imgUrl;
  middle.append(img);

  let right = document.createElement("div");
  right.setAttribute("id", "right");
  let h44 = document.createElement("h4");
  h44.textContent = h4Feat;
  let ulText = document.createElement("ul");
  ul.forEach((el) => {
    let liText = document.createElement("li");
    liText.textContent = el;
    ulText.append(liText);
  });
  right.append(h44, ulText);

  contents.append(left, middle, right);
  infoContainer.append(contents);
};
one.onclick = oneDOM;
oneDOM();

three.onclick = () => {
  infoContainer.innerHTML = null;
  swiperReviews();
};

let swiperReviews = () => {
  moreRwSection.style.display = "block";
  hideRwContainer(moreRwSection);
};

let hideRwContainer = (moreRwSection) => {
  window.onkeyup = () => {
    if (event.keyCode == 27) {
      moreRwSection.style.display = "none";
      oneDOM();
    }
  };
};

// SWIPPER REVIEWS SECTION ===>
let swiper_wrapper = document.querySelector(".swipper-wrapper-1");
let swipperReviews = () => {
  for (let i = 3; i < reviewArr.length; i++) {
    let { name, review, stars, avatar } = reviewArr[i];
    let div1 = document.createElement("div");
    div1.setAttribute("class", "swiper-slide swiper-slide-1");

    let rateStars = document.createElement("h3");
    rateStars.textContent = stars;

    let div2 = document.createElement("div");
    div2.setAttribute("class", "testimonialBox");

    let content = document.createElement("div");
    content.setAttribute("class", "content");
    let txt = document.createElement("p");
    txt.textContent = review;

    let detail = document.createElement("div");
    detail.setAttribute("class", "details");
    let img = document.createElement("div");
    img.setAttribute("class", "imgBbx");
    let imgUser = document.createElement("img");
    imgUser.src = avatar;
    img.append(imgUser);
    let userName = document.createElement("h3");
    userName.append(name);
    detail.append(img, userName);

    content.append(txt, detail);
    div2.append(rateStars, content);
    div1.append(div2);
    swiper_wrapper.append(div1);
  }
};
swipperReviews();

// four.onclick = () => {
//   infoContainer.innerHTML = null;
// };

// RECOMMENDATION =====>
let recommendation = (x) => {
  let swipper_wrapper_2 = document.querySelector(".swipper-wrapper-2");
  let {
    name,
    price,
    img_url,
    info: { availability },
  } = allProducts[x];

  if (availability === true) {
    recom_feat_DOM(name, price, img_url, swipper_wrapper_2);
  }
};

let featuredSection = () => {
  let swipper_wrapper_3 = document.querySelector(".swipper-wrapper-3");
  allProducts.map((el) => {
    let {
      ratings,
      info: { discount, availability, reviews },
    } = el;
    if (
      ratings.length > 8 &&
      discount > 5 &&
      availability === true &&
      reviews > 50
    ) {
      let { name, price, img_url } = el;
      recom_feat_DOM(name, price, img_url, swipper_wrapper_3);
    }
  });
};

let recom_feat_DOM = (name, price, img_url, sw_wrapper) => {
  let swipper_2 = document.createElement("div");
  swipper_2.setAttribute("class", "swiper-slide swiper-slide-2");

  let content = document.createElement("div");
  content.setAttribute("id", "contentBox");

  let action = document.createElement("div");
  let add = document.createElement("i");
  add.setAttribute("class", "fa-solid fa-bag-shopping");
  let wish = document.createElement("i");
  wish.setAttribute("class", "fa-solid fa-heart");
  action.append(add, wish);

  let img = document.createElement("img");
  img.src = img_url;

  let rate = document.createElement("h4");
  rate.textContent = `$ ${Number(price)}`;

  let title = document.createElement("p");
  title.textContent = name;

  content.append(action, img, rate, title);
  swipper_2.append(content);

  sw_wrapper.append(swipper_2);

  add.onmouseover = () => {
    add.textContent = "Add";
    add.removeAttribute("class", "fa-solid fa-bag-shopping");
    changeState(add);
  };
  add.onmouseout = () => {
    defaultState(add);
    add.setAttribute("class", "fa-solid fa-bag-shopping");
  };

  wish.onmouseover = () => {
    wish.textContent = "Wishlist";
    wish.removeAttribute("class", "fa-solid fa-heart");
    changeState(wish);
  };

  wish.onmouseout = () => {
    defaultState(wish);
    wish.setAttribute("class", "fa-solid fa-heart");
  };

  let changeState = (elem) => {
    elem.style.padding = "0.2rem 1rem";
    elem.style.color = "#fff";
    elem.style.backgroundColor = "#c7232d";
    elem.style.fontStyle = "normal";
  };
  let defaultState = (elem) => {
    elem.textContent = null;
    elem.style.color = "#c72e2d";
    elem.style.backgroundColor = "unset";
  };

  // adding to cart
  add.onclick = () => {
    if (cartArr.length === 0) {
      let obj = {
        name: name,
        prodQuant: 1,
        price: 1 * price,
        pic: img_url,
      };

      cartArr.push(obj);
      localStorage.setItem("cartProducts", JSON.stringify(cartArr));
      // i = i + 1;
      // localStorage.setItem("quantity", JSON.stringify(i));
      // h1.textContent = JSON.parse(localStorage.getItem("quantity"));
      h1.textContent = cartArr.length;
    } else {
      let flag = false;
      for (let i = 0; i < cartArr.length; i++) {
        if (name === cartArr[i].name) {
          cartArr[i].prodQuant += 1;
          cartArr[i].price = cartArr[i].prodQuant * price;
          localStorage.setItem("cartProducts", JSON.stringify(cartArr));
          flag = true;
          break;
        }
      }

      if (flag === true) {
      } else {
        let obj = {
          name: name,
          prodQuant: 1,
          price: 1 * price,
          pic: img_url,
        };

        cartArr.push(obj);
        localStorage.setItem("cartProducts", JSON.stringify(cartArr));
        // i = i + 1;
        // localStorage.setItem("quantity", JSON.stringify(i));
        // h1.textContent = JSON.parse(localStorage.getItem("quantity"));
        h1.textContent = cartArr.length;
      }
    }
  };

  wish.onclick = () => {
    if (wishArr.length === 0) {
      let obj = {
        name: name,
        pic: img_url,
        prodQuant: 1,
        price: price * 1,
      };
      wishArr.push(obj);
      localStorage.setItem("wishProducts", JSON.stringify(wishArr));
      h2.textContent = wishArr.length;
    } else {
      let flag = false;
      for (let i = 0; i < wishArr.length; i++) {
        if (name === wishArr[i].name) {
          alert("Already added in wishlist");
          flag = true;
          break;
        }
      }

      if (flag === true) {
      } else {
        let obj = {
          name: name,
          pic: img_url,
          prodQuant: 1,
          price: price * 1,
        };
        wishArr.push(obj);
        localStorage.setItem("wishProducts", JSON.stringify(wishArr));
        h2.textContent = wishArr.length;
      }
    }
  };
};

var arr = [];
while (arr.length < 10) {
  var r = Math.floor(Math.random() * (25 - 0 + 1) + 0);
  if (arr.indexOf(r) === -1) {
    arr.push(r);
  }
}
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  recommendation(arr[i]);
}

featuredSection();

let cartParentDiv = () => {
  cartBelow.innerHTML = null;
  cartArr.map(({ pic, price, prodQuant }, index) => {
    let ctDiv = document.createElement("div");
    ctDiv.setAttribute("id", "ctDiv");

    let img = document.createElement("img");
    img.src = pic;

    let pQuant = document.createElement("p");
    pQuant.textContent = prodQuant;

    let pPrice = document.createElement("p");
    pPrice.textContent = `$${Math.round(price * 100) / 100}`;

    let remove = document.createElement("p");
    remove.setAttribute("class", "removeBtn");
    let removeIcon = document.createElement("i");
    removeIcon.setAttribute("class", "fa-solid fa-xmark");
    remove.append(removeIcon);

    ctDiv.append(img, pQuant, pPrice, remove);
    cartBelow.append(ctDiv);

    remove.onclick = () => {
      removeItem(index);
    };
  });

  toPayment.innerHTML = null;
  totalAmount = cartArr.reduce(function (sum, el) {
    return sum + el.price;
  }, 0);

  totalItems = cartArr.length;

  let totalI = document.createElement("h5");
  totalI.textContent = `Total Items : ${totalItems}`;

  let totalAm = document.createElement("h5");
  totalAm.textContent = `Total Amount : $${
    Math.round(totalAmount * 100) / 100
  }`;

  let toPay = document.createElement("h5");
  toPay.onclick = () => {
    localStorage.setItem(
      "totalPrice",
      `${Math.round(totalAmount * 100) / 100}`
    );
    window.open("../login_rizwan/registration.html", "_blank");
  };
  if (totalItems === 0) {
    toPay.style.display = "none";
  } else {
    toPay.style.visibility = "block";
    toPay.textContent = `Proceed to Pay  $${
      Math.round(totalAmount * 100) / 100
    }`;
  }

  toPayment.append(totalI, totalAm, toPay);
};

let removeItem = (index) => {
  cartArr.splice(index, 1);
  localStorage.setItem("cartProducts", JSON.stringify(cartArr));
  cartParentDiv(cartArr);
};

// The cart side div
cartBox.onclick = () => {
  cartParent.style.visibility = "visible";
  hideCartParent(cartParent);
  cartParentDiv();
};

let hideCartParent = (cartParent) => {
  window.onkeyup = () => {
    if (event.keyCode === 27) {
      cartParent.style.visibility = "hidden";
    }
  };
};

esc.onclick = () => {
  cartParent.style.visibility = "hidden";
};

// DARK & NIGHT MODE TOGGLE
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

for (let i = 0; i < cwpages.length; i++) {
  cwpages[i].onclick = () => {
    window.open("../Cart & Wishlist/cwpage.html", "_blank");
  };
}
