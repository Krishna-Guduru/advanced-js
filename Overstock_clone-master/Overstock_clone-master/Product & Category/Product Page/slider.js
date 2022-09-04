import exportDrift from "../dist/Drift.min.js";
let x = exportDrift();

let products = JSON.parse(localStorage.getItem("product")) || [];
let displayBx = document.getElementById("display");
let imageContainer = document.getElementById("leftTC");
let { imgArr } = products;

let first = document.getElementById("firstWrapper");
imgArr.map(function (el) {
  let slideDiv = document.createElement("div");
  slideDiv.setAttribute("class", "swiper-slide");

  let imgg = document.createElement("img");
  imgg.src = el;
  imgg.setAttribute("data-zoom", el);

  slideDiv.append(imgg);
  first.append(slideDiv);

  new Drift(imgg, {
    paneContainer: document.getElementById("display"),
  });

});

let second = document.getElementById("secondWrapper");
imgArr.map(function (el) {
  let div1 = document.createElement("div");
  div1.setAttribute("class", "swiper-slide");

  let image = document.createElement("img");
  image.src = el;

  div1.append(image);

  second.append(div1);
});

// IMAGE DISPLAY BOX
let show = () => {
  displayBx.style.display = "block";
};
let hide = () => {
  displayBx.style.display = "none";
};
imageContainer.onmouseover = () => {
  show();
};
imageContainer.onmouseout = () => {
  hide();
};
