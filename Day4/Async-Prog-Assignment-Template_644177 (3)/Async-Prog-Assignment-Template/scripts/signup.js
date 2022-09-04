document.querySelector("#form").addEventListener("submit",formsubmit)
var data=JSON.parse(localStorage.getItem("login"))||[]
function formsubmit(e){
    event.preventDefault();
    var obj={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        number:document.getElementById("contactNumber").value,
        password:document.getElementById("password").value
    
    }
    var name=obj.name
    var email=obj.email
    var contact=obj.contact
    var password=obj.password
    if (name == "" ||  email == "" || contact==""|| password == "" ) {
        alert("Fill all Fields")
        return
    }
    else{
        alert("signup sucessfully")
        window.location.href="login.html"
        data.push(obj)
        localStorage.setItem("login",JSON.stringify(data))
    }
}
