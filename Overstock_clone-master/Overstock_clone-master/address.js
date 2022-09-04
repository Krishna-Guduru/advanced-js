let totalAmount = localStorage.getItem("totalPrice") || 0;
let totaltoPay = Number(totalAmount);
let total_price = document.getElementById("total_price");
let button = document.getElementById("button");
let form_input = document.getElementById("form_input");

if (totaltoPay === 0) {
  total_price.textContent = "Nothing to Pay";
} else {
  total_price.textContent = `Total amount : $${totaltoPay}`;
}

form_input.onsubmit = () => {
  event.preventDefault();
  let building = document.querySelector("#building_name").value;
  let pin = document.querySelector("#pincode").value;
  let locality = document.querySelector("#locality").value;
  let city = document.querySelector("#city").value;
  let state = document.querySelector("#state").value;
  let customer_name = document.querySelector("#name").value;
  let number = document.querySelector("#mobile").value;

  add_data = {
    flat_no: document.querySelector("#building_name").value,
    landmark: document.querySelector("#Landmark").value,
    pincode: document.querySelector("#pincode").value,
    locality: document.querySelector("#locality").value,
    city: document.querySelector("#city").value,
    state: document.querySelector("#state").value,
    customer_name: document.querySelector("#name").value,
    mobile: document.querySelector("#mobile").value,
  };
  localStorage.setItem("userDETAILS", JSON.stringify(add_data));

  let x = document.querySelectorAll("form > input");
  for (let i = 0; i < x.length; i++) {
    x[i].value = null;
  }
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

button.onmouseover = () => {
  if (totaltoPay === 0) {
    button.disable = true;
  } else {
    button.textContent = `Pay  $${totaltoPay}`;
  }
};

button.onmouseout = () => {
  button.textContent = "Pay Now";
};

button.onclick = () => {
  window.location.href = "/otp/get.html";
};
