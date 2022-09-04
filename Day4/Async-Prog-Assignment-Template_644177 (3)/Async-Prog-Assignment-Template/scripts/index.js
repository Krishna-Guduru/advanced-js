let arrObj=[
    img="https://www.google.com/search?rlz=1C1CHBF_enIN845IN845&sxsrf=APq-WBvLQuThApNCe2703SkThhfZL_kaTg:1649863876919&q=Pushpa:+The+Rise&stick=H4sIAAAAAAAAAFWTO2_UQBSF14uyWjZEyiZCilKgKDRRmh0_x06TCESFeEWpMfHs2rP2zKxf-DFlfgIFZQokJAoE1BEv0YEQBQV0gCiQEAUtomJT-FrY1Tfn3nPPzNj9hc2lUTBS1dDIMMZUaj0-K6aT7J3y_zowLbDpmC6w6sWORK0uYuTUVdxwmiXIM1PQuROrjkxD4JKwkpE5L474CKmatLGtNqpIE2nnCWo4o5o_f2G6X2KP5DKAetWKVCsEXTimILYJaULMtHmHgHRRXuZ6lYBfKLQCtf6cGDgqPRP6bV1mVl02TG2GCZU5MOLp2ONQ72d5QbAK-XxeOJmoMPhpaq7XCeSjZuEXlcmgniHfTUkKuopkmqSk4Sh3mSWdqL0NH-khg_njWpSVY2vQr4chymrw515i5Aij9jxNo0BUb5gZnqhtv_0aNMkiM6UNJ46BAmKDH5VVQWKNt_vN8rFp1O08zxdsDPsJUYGqMjKgH6PEsh3e-rm2lxdjqLdEJSSp2rx-gtXCAcZB4EbYbs8_QUUQyDaPQbkl4P78RNZ2GItWD3Nau9DPmK5RS8J5BrXONYLld-Wpsrj888-X1fWHyr3Hbz8px8rg7LUJ9yZpdsNfuTgYXJ4xNiH5dCZWzq-vDoYjAgsjf8p4tkm1qycf73_oXRl25s-lX7f21i8MXzzf_3xy_cfu9uqgf3BYzcSM18Pj2--_Lh393t1cOy2982Rte2_tzEZnq6PO8VvP_ftqu7PfP_1_tKISr5Xu0ctHb3r9vrLc0br9zk53q3vuwcLyzbsZjQ93Ng7oZGN_mk2eLXT_AXDBapEABAAA&sa=X&ved=2ahUKEwj52b7yrZH3AhUKSWwGHTZXDOwQ8sMGegQIGxAI",
    img="https://assets.thehansindia.com/h-upload/2022/02/14/1276713-flelb4vvkaarova.webp",
img="https://wallpapercave.com/wp/wp7624775.jpg",
img="https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg",

    img="https://www.koimoi.com/wp-content/new-galleries/2021/12/rrr-sources-reveal-the-real-reason-behind-ss-rajamouli-not-being-postponed-001.jpg",
]


localStorage.setItem("imgData",JSON.stringify(arrObj))
let images_div=document.getElementById("slideshow")
let images=JSON.parse(localStorage.getItem("imgData"))
let id;
let i=0
let pic=document.createElement("img")
id=setInterval(function(){
    if(i==images.length){
        i=0;
    }
    images_div.innerHTML=""
    pic.src=images[i]
    images_div.append(pic)
    i++
},2000)


var movies = [
    {
        imgUrl:"https://wallpapercave.com/wp/wp8341804.jpg",
        name:"Bramothasvam",
        imbd:"8.5",
        date:"2-5-2015"
        
    },{ 
        imgUrl:"https://m.media-amazon.com/images/M/MV5BMTY5OTA1OTY4OV5BMl5BanBnXkFtZTgwODA1NzAwMTE@._V1_.jpg",
        name:"Dookudu",
        imdb:"8.5",
        date:"21-09-2013"

     
    },{ 
        imgUrl:"https://wallpapercave.com/wp/wp9649355.jpg",
        name:"srimanthudu",
        imdb:"8.4",
        date:"08-08-2015"
    },
    { 
        imgUrl:"https://m.media-amazon.com/images/M/MV5BN2U4ODE0YWItZGQ0MC00Y2NiLTkyMzAtYzlmZjk4NWI4MDRiXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        name:"Businessman",
        imdb:"8.2",
        date:"13-01-2013"
    },
    {
        imgUrl:"https://m.media-amazon.com/images/M/MV5BN2U4ODE0YWItZGQ0MC00Y2NiLTkyMzAtYzlmZjk4NWI4MDRiXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        name:"bharat ane nenu",
        imdb:"7.6",
        date:"21-04-2017"
    },
    { 
        imgUrl:"https://s2.dmcdn.net/v/5TGbP1LUVzAaNB5C6/x1080",
        name:"okkadu",
        imdb:"8.2",
        date:"14-01-2003"
    },
    { 
        imgUrl:"https://wallpapercave.com/wp/wp7468155.jpg",
        name:"kheleja",
        imdb:"8.5",
        date:"24-09-2010"
       
    },
    { 
        imgUrl:"https://wallpapercave.com/wp/wp9649439.jpg",
        name:"Sarkaruvari pata",
        imdb:"7.0",
        date:"21-05-2022"
        
        
    },
    { 
        imgUrl:"https://wallpapercave.com/wp/wp9065066.jpg",
        name:"Maharshi",
        imdb:"8.0",
        date:"29-05-2019"
    
    },
];
movies.map(function(elem,index){
    let box=document.createElement("div")
    let img=document.createElement("img")
    img.src=elem.imgUrl
    let name=document.createElement("p")
    name.innerText=elem.name
    let imdb=document.createElement("p")
    imdb.innerText=elem.imdb
    let date=document.createElement("p")
    date.innerText=elem.date
    box.append(img,name,imdb,date)
    document.getElementById("movies").append(box)
})