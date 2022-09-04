// Ude Import export (MANDATORY)
import nav from "../components/navbar.js"

document.getElementById("nav_div").innerHTML = nav();



let news = JSON.parse(localStorage.getItem("news"));
   console.log("news:",news);
   let box = document.createElement("div")
   box.setAttribute("class", "news")

   let image = document.createElement("img")
   image.src = news.urlToImage

   let title1 = document.createElement("h4")
   title1.innerHTML = news.title

   let title = document.createElement("h4")
   title.innerHTML = news.content

   document.getElementById("detailed_news").append(image,title1,title)

   