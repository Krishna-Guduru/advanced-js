var searchinput = document.getElementById("search_input");

var searchbar = document.getElementById("searchbar");

searchbar.addEventListener("click", showdiv);
var inputdiv = document.getElementById("inputdiv");

function showdiv() {
  inputdiv.innerHTML = null;
  var div = document.createElement("div");
  div.setAttribute("id", "appendsearch");

  inputdiv.append(div);
}

var searchdatabtn = [
  {
    btn: "Dinner plates",
    id: "dinner",
  },
  {
    btn: "Melamine plates",
    id: "melamine",
  },
  {
    btn: "Salad plates",
    id: "salad",
  },
  {
    btn: "Charger plates",
    id: "",
  },
  {
    btn: "Plates",
    id: "",
  },
  {
    btn: "decorative plates",
    id: "",
  },
  {
    btn: "Dinner plates only",
    id: "",
  },
  {
    btn: "Plastic plates",
    id: "",
  },
  {
    btn: "White dinner plates",
    id: "",
  },
  {
    btn: "Sets dinner plates",
    id: "",
  },
  {
    btn: "Chic Home",
    id: "chichome",
  },
];

var dinnerimg = [
  {
    img: "http://ak1.ostkcdn.com/images/products/is/images/direct/c987f67e7f7a994bffbe7af24a09c1216d630544/vancasso-Navia-Rustic-Vintage-Dinner-Plates-Dessert-Plate-%28Set-of-4%29.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/is/images/direct/5f698bd8ab85c54e424aea7be9bb5b9481989354/vancasso-Bella-Dinner-Plates-Dessert-Plates-%28Set-of-4%29.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/30290692/4-Piece-Dinner-Plate-Set-Color-3bf7171a-91ba-48d1-b824-287f2cd55c5d_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/10839801/Certified-International-Tunisian-Sunset-10.5-Dinner-Plates-Set-of-4-b50cb674-ee7f-437c-9825-f7601fa8cd8e_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/11138513/Red-Vanilla-Swirl-Dinner-Plate-11-Set-of-4-bcb9af46-c4ad-427f-a82a-3eb5b0e17067_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/11138510/Red-Vanilla-Nantucket-White-Dinner-Plate-11.25-Set-of-4-c3ffd97e-2d0a-4257-ac14-be9c9a44751a_320.jpg",
  },
];

var melamineimg = [
  {
    img: "http://ak1.ostkcdn.com/images/products/19989584/Certified-International-Lucca-Melamine-Dinner-Plate-Set-of-6-4d706c50-d5c0-4ffd-804c-e1f84281765d_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/26950516/Certified-International-Perlette-9-inch-Salad-Dessert-Plates-Set-of-4-e9cdad25-2299-42b9-b2f9-622e983b051a_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/is/images/direct/275518079a419053d92daa8b06f8d302d3b64025/Calypso-Basics-by-Reston-Lloyd-Melamine-Dinner-Plate%2C-Set-of-6%2C-Turquoise.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/14200394/Certified-International-Cobalt-Blue-Melamine-Dinner-Plates-Pack-of-6-901b7684-e0f8-459b-8ae6-d98042a31da8_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/26950536/Certified-International-Perlette-11-inch-Dinner-Plates-Set-of-4-5ebc3797-853f-4274-bcef-7a3aad5cd41a_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/21299149/Certified-International-Radiance-Melamine-Dinner-Plate-Set-of-6-9c0f45ca-1c3e-4964-9b4b-594c310dbc1d_320.jpg",
  },
];

var saladimg = [
  {
    img: "http://ak1.ostkcdn.com/images/products/31053470/Manhattan-Comfort-Floreal-12-Medium-7.87-Salad-Plates-1a464dca-c458-446f-aa76-5135a615feaa_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/31053474/Manhattan-Comfort-Floreal-6-Medium-7.87-Salad-Plates-b6710ed9-da5f-4c4a-b35a-fdc320b2d144_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/10839803/Certified-International-Tunisian-Sunset-8.75-Salad-Dessert-Plates-Set-of-4-87b4152a-932f-4efe-88d4-957c8f0058f1_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/6072150/Red-Vanilla-Classic-White-Salad-Plates-Set-of-4-73061aad-2033-47dc-ae3d-c0343c8bddeb_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/30297328/4-Piece-Dessert-Plate-Set-Color-6e1f885d-e240-4d54-9957-9847ea6df570_320.jpg",
  },
  {
    img: "http://ak1.ostkcdn.com/images/products/is/images/direct/10a813b323f813256c92382ee82b93d0d3da68a1/STP-Goods-Daisy-Porcelain-Salad---Dessert-Plate-7.9%22-Set-of-4.jpg",
  },
];

searchbar.addEventListener("input", (e) => {
  document.getElementById("appendsearch").innerHTML = null;
  var value = e.target.value.toLowerCase();
  var arr = searchdatabtn.filter((char) => {
    return char.btn.toLowerCase().includes(value);
  });
  inputdiv.style.display = "block";
  window.onkeyup = () => {
    if (event.keyCode == 27) {
      inputdiv.style.display = "none";
    }
  };

  arr.map((elem) => {
    var div = document.getElementById("appendsearch");

    var list = document.createElement("div");
    list.innerText = elem.btn;
    list.setAttribute("id", elem.id);
    var b = document.createElement("br");

    div.append(list, b);
  });

  document.getElementById("dinner").addEventListener("click", () => {
    //inputdiv2
    var inputdiv2 = document.getElementById("inputdiv2");
    inputdiv2.innerHTML = null;
    window.onkeyup = () => {
      if (event.keyCode == 27) {
        inputdiv2.style.display = "none";
      }
    };
    var div = document.createElement("div");
    div.setAttribute("id", "searchgrid");

    inputdiv2.append(div);

    dinnerimg.map((elem) => {
      var img = document.createElement("img");
      img.src = elem.img;

      div.append(img);
    });
  });

  document.getElementById("melamine").addEventListener("click", () => {
    //inputdiv2
    var inputdiv2 = document.getElementById("inputdiv2");
    inputdiv2.innerHTML = null;
    window.onkeyup = () => {
      if (event.keyCode == 27) {
        inputdiv2.style.display = "none";
      }
    };
    var div = document.createElement("div");
    div.setAttribute("id", "searchgrid");

    inputdiv2.append(div);

    melamineimg.map((elem) => {
      var img = document.createElement("img");
      img.src = elem.img;

      div.append(img);
    });
  });

  document.getElementById("salad").addEventListener("click", () => {
    //inputdiv2
    var inputdiv2 = document.getElementById("inputdiv2");
    inputdiv2.innerHTML = null;
    window.onkeyup = () => {
      if (event.keyCode == 27) {
        inputdiv2.style.display = "none";
      }
    };

    var div = document.createElement("div");
    div.setAttribute("id", "searchgrid");

    inputdiv2.append(div);

    saladimg.map((elem) => {
      var img = document.createElement("img");
      img.src = elem.img;

      div.append(img);
    });
  });
});
