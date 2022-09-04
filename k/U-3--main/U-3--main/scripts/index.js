// Store the wallet amount to your local storage with key "amount"

let array = [];
console.log(array);
function add_money()
{

let input= document.getElementById("amount").value;

array.push(input);
// console.log(array);


var sum=0;
for(var i=0; i<array.length; i++){

 sum=sum+Number(array[i]);
}

let wallet = document.getElementById("wallet").innerHTML=sum;

localStorage.setItem("amount",sum);

}
