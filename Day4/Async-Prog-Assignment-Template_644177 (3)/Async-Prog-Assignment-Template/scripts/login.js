var data1=JSON.parse(localStorage.getItem("login")) 
document.querySelector("#form").addEventListener("submit",formlogin)
function formlogin(e){
    event.preventDefault();
    var forobj={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value

    }
    var email1=forobj.email
    var password1=forobj.password
    var index=data1.findIndex(ele=>{
        return ele.email==forobj.email && ele.password==forobj.password
    })

if (  email == "" || password == "" ) {
        alert("Fill all Fields")
        return
    }
else if(index>=0){
alert("login Sucessful")
forObj.name = login2[index].name
window.location.href = "index.html"
    } else {
        alert("invalid Credentials")
    }
}
