import reviewRatings from "../Components/ratings.js";

let two = document.getElementById("two");
let infoContainer = document.getElementById("infoContainer");

let twoDOM = () => {
  infoContainer.innerHTML = null;
  infoContainer.innerHTML = reviewRatings();
};

two.onclick = twoDOM;
