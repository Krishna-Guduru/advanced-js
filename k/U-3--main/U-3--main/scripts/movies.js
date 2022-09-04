// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let array = JSON.parse(localStorage.getItem("amount"));

// console.log("array:",array)

document.getElementById("wallet").innerHTML = array;


let id;
let movies_div = document.getElementById("movies");

// const url = `https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`
  
// http://www.omdbapi.com/?i=tt3896198&apikey=36e29dd0

 async function searchMovies(){

    try{
          const query = document.getElementById("search").value;

          let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=36e29dd0&s=${query}`);

        // let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=36e29dd0`);

          let data = await res.json();

        //   console.log("data:",data)
        // const mov = data.search;

        

        return data;

    }
    catch (err) {
        console.log("err:",err);
    }
 };

 function appendMovies(data){
    
    movies_div.innerHTML =  null;

     data.forEach(function(el){

        

        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.Poster;
        // console.log(img);

        let p = document.createElement("p");
        p.innerHTML = el.Title;

        let btn = document.createElement("button")
        btn.innerText = "book now"
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){

            fun(el)
        })

        box.append(img,p,btn)
     
        movies_div.append(box);
        // document.getElementById("movies").append(box);
       
     })
 }

  async function main(){
    
     let data = await searchMovies();

     console.log("data:",data)

     if(data == undefined)
     {
         return false;
     }

     appendMovies(data.Search);


  }



 function debounce(func, delay) {

   if(id)
   {
       clearTimeout(id)
   }
   id = setTimeout(function(){

       func()
   },delay)
 }


 function fun(el)
 {
     localStorage.setItem("movie",JSON.stringify(el));
     window.location = "checkout.html"
 }