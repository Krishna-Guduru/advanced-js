// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
import {sidebar} from "../components/sidebar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let side = document.getElementById("sidebar")
side.innerHTML = sidebar(); 

let pageLoad = async () =>{
    try{
        const res = await fetch('https://masai-mock-api.herokuapp.com/news/top-headlines?country=in');
        const data = await res.json();
        const news = data.articles
        console.log("data:",news);
        append(news)
    }catch(err){
        console.log("err:",err);
    }
};
const append = (news) =>{
    let show_news = document.getElementById("results");
    show_news.innerHTML = "";
    news.forEach(element => {
        let div = document.createElement("div");
        div.setAttribute("class","news");
        let title = document.createElement("h2");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        let dis = document.createElement("p");
        dis.innerText = element.description
        div.append(title, img, dis);
        show_news.append(div);

    });
}
pageLoad();

let searchNews = async (e) =>{
    if(e.key === "Enter"){
        let value = document.getElementById("search_input").value;
        try{
            const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
            const data = await res.json();
            //const searched = 
            let searchedData = data.articles;
            console.log("data:",searchedData);

            append(searchedData)
        }catch(err){
            console.log("err:",err);
        }
    }
}
document.getElementById("search_input").addEventListener("keydown", searchNews);

let countryLoad = async (count) =>{
    try{
        const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${count}`);
        const data = await res.json();
        const news = data.articles
        console.log("data:",news);
        append(news)
    }catch(err){
        console.log("err:",err);
    }
};

let country = document.getElementById("country").children;
console.log(country);
function country_search(){
    let count = this.id;
    console.log(count);
    countryLoad(count);
}
for(let el of country){
    el.addEventListener("click", country_search);
}