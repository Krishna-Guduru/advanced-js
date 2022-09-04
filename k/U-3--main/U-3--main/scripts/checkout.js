// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let sum = JSON.parse(localStorage.getItem("amount"))

var m =  JSON.parse(localStorage.getItem("movie"))

var wallet = document.getElementById("wallet");
wallet.innerHTML=sum;

var  dis = document.getElementById("movie")
var  image = document.createElement("img");
image.src = m.Poster

var t = document.createElement("p")
t.innerHTML = m.Title;

dis.append(image,t)

function fax(){

    var x = document.getElementById("number_of_seats").ariaValueMax;

    var y = x*100

    if(y<=sum)
    {
        var z = sum-y;
       wallet.innerHTML = z
       alert("booking success")

       localStorage.setItem("amount",JSON.stringify(z))
    }
    else if(y>sum || sum== 0){
         
        alert("insufficend bailence")
    }
    
}