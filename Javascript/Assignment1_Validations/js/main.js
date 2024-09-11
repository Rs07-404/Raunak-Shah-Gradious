document.addEventListener("submit",(event)=>{
    event.preventDefault();
    const form = new FormData(document.getElementById("form"));
    var name = /^[a-zA-Z]*$/;
    var city = /^[a-zA-Z]*$/;
    var email = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-z]{2,}$/;

    if(form.get("fname").length === 0){
        document.getElementById("nameerr").innerHTML = "Please enter your name.";
    }
    else if(!name.test(form.get("fname"))){
        document.getElementById("nameerr").innerHTML = "Please enter your name in correct format.";
    }else{
        document.getElementById("nameerr").innerHTML = "";
    }


    if(form.get("city").length === 0){
        document.getElementById("cityerr").innerHTML = "Please enter city.";
    }
    else if(!city.test(form.get("city"))){
        document.getElementById("cityerr").innerHTML = "Please enter city in correct format.";
    }else{
        document.getElementById("cityerr").innerHTML = "";
    }
    

    if(form.get("email").length === 0){
        document.getElementById("emailerr").innerHTML = "Please enter your email address";
    }
    else if(!email.test(form.get("email"))){
        document.getElementById("emailerr").innerHTML = "Please enter your email address in correct format.";
    }
    else{
        document.getElementById("emailerr").innerHTML = "";
    }


    if(form.get("position") === "select"){
        document.getElementById("poserr").innerHTML = "Please select a position";
    }else{
        document.getElementById("poserr").innerHTML = "";
    }

    const err = false;
    const errors = document.querySelectorAll("err");
    errors.forEach(element => {
        if(element.innerHTML.length > 0){
            err = true;
        }
    });

    if(!err){
        localStorage["first-name"] = form.get("fname");
        localStorage["email"] = form.get("email");
        localStorage["city"] = form.get("city");
        localStorage["position"] = form.get("position");
    }

    console.log("First Name:", localStorage["first-name"]);
    console.log("Email:", localStorage["email"]);
    console.log("City:", localStorage["city"]);
    console.log("Desired Position:", localStorage["position"]);
});

console.log("First Name:", localStorage["first-name"]);
console.log("Email:", localStorage["email"]);
console.log("City:", localStorage["city"]);
console.log("Desired Position:", localStorage["position"]);