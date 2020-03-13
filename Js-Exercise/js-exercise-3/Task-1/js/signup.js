let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#confirmPassword')
let role
let userArr = JSON.parse(localStorage.getItem('userArr')) ? JSON.parse(localStorage.getItem('userArr')) : [];
let courses =[]
let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
function submit(){
    document.querySelector("#nameValadation").innerHTML = '';
    document.querySelector("#emailValadation").innerHTML = '';
    document.querySelector("#passValadation").innerHTML = '';
    document.querySelector("#conPassValadation").innerHTML = '';

    if (name.value == '' ){
        document.querySelector('#nameValadation').innerHTML = "Please Enter name"
    }
    else if (name.value.length < 2){
        document.querySelector("#nameValadation").innerHTML = "Name is too Short"
    }
    else if (email.value == '') {
        
        document.querySelector("#emailValadation").innerHTML = "Email Can't Be Empty"
    }
    else if (!regexEmail.test(email.value)){
        
        document.querySelector("#emailValadation").innerHTML = "Enter Valid Email "
    }
    else if (password.value == '') {
        document.querySelector("#passValadation").innerHTML = "Password Can't Be Empty"
    }
    else if (password.value.length < 2){
        document.querySelector("#passValadation").innerHTML = "Password is too Short"
    }
    else if (!regexPass.test(password.value)){
        document.querySelector("#passValadation").innerHTML = "Provide Valid Password " 
    }
    else if(confirmPassword.value == '') {
        document.querySelector("#conPassValadation").innerHTML = "Enter Same Password As Above"
    }
    else if (!(confirmPassword.value === password.value)) {
        document.querySelector("#conPassValadation").innerHTML = "Password Not Matched"

    }
   else {
    if (document.querySelector('#admin').checked) {
        role = document.querySelector('#admin').value;
    } else {
        role = document.querySelector('#student').value;
    }
    const userObj = {
        email: email.value,
        password: password.value,
        name: name.value,
        role: role,
        courses
    }

        userArr.push(userObj);
        localStorage.setItem('userArr', JSON.stringify(userArr));
       window.location.href = "login.html"
   }
}
