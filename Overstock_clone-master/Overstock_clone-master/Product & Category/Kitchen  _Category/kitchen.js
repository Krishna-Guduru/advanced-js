let ctn1 = document.querySelector("#popular > #container");
let ctn2 = document.querySelector("#shopMore > #container");
let details = document.getElementById("details");
let dt_left = document.getElementById("dt_left");
let clickme = document.getElementById("clickme");
let toggleLeft = document.getElementById("toggleLeft");
let leftCont = document.getElementById("left");
let popImg = [
  { url: "https://bit.ly/3kI8Im9", text: "Small Appliances" },
  { url: "https://bit.ly/3MKSbdp", text: "Dinnerware" },
  { url: "https://bit.ly/3OTbbIy", text: "Cookware" },
  { url: "https://bit.ly/3vUl2VC", text: "Mixers" },
  { url: "https://bit.ly/3vYXU8x", text: "Cooking Essentials" },
  { url: "https://bit.ly/3MLvAxg", text: "Serveware" },
  { url: "https://bit.ly/3OXh2g0", text: "Bakeware" },
  { url: "https://bit.ly/3saLwRJ", text: "Ranges & Ovens" },
  { url: "https://bit.ly/3FdRpmx", text: "Table Linens & Decor" },
  { url: "https://bit.ly/3s8r18i", text: "Flatware" },
  { url: "https://bit.ly/3LKWiWS", text: "Major Appliances" },
  { url: "https://bit.ly/3LO6spK", text: "Glasses & Barware" },
];
let shopImg = [
  { url: "https://bit.ly/3ycgb55", text: "Counter Accessories" },
  { url: "https://bit.ly/3vFyH41", text: "Storage Canisters" },
  { url: "https://bit.ly/3OV3P7u", text: "Dish Racks" },
  { url: "https://bit.ly/37bnCyf", text: "Trash Cans" },
  { url: "https://bit.ly/3kCXI9K", text: "Wine Racks" },
  { url: "https://bit.ly/3KHCZvW", text: "Islands" },
  { url: "https://bit.ly/380mWfu", text: "Cabinets" },
  { url: "https://bit.ly/3Fk6FOP", text: "Butcher Blocks" },
  { url: "https://bit.ly/37chlT9", text: "carts" },
  { url: "https://bit.ly/3Fbhumh", text: "Kitchen Shelves" },
];

let imagesDom = (imgArr, wrapper) => {
  imgArr.map(({ url, text }) => {
    let imgBox = document.createElement("div");
    let img = document.createElement("img");
    img.src = url;
    let title = document.createElement("h4");
    title.textContent = text;
    imgBox.append(img, title);
    wrapper.append(imgBox);
  });
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

imagesDom(popImg, ctn1);
imagesDom(shopImg, ctn2);

toggleLeft.onclick = () => {
  leftCont.style.display = "block";
  hideNow(leftCont);
};

let hideNow = (leftCont) => {
  window.onkeyup = () => {
    if (event.keyCode === 27) {
      leftCont.style.display = "none";
    }
  };
};

document.getElementById("right").onclick = () => {
  window.location.href = "/Amar/product Page/product_page.html";
};
