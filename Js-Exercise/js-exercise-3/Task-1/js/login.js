let email = document.querySelector('#email')
let password = document.querySelector('#password')
let currentUser
let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
let userArr = localStorage.getItem('userArr')
userArr = JSON.parse(userArr)
function Login() {
    let flag = false;
    if (email.value == '') {

        document.querySelector("#emailValadation").innerHTML = "Email Can't Be Empty"
    }
    else if (!regexEmail.test(email.value)) {

        document.querySelector("#emailValadation").innerHTML = "Enter Valid Email "
    }
    else if (password.value == '') {
        document.querySelector("#passValadation").innerHTML = "Password Can't Be Empty"
    }
    else if (password.value.length < 2) {
        document.querySelector("#passValadation").innerHTML = "Password is too Short"
    }
    else if (!regexPass.test(password.value)) {
        document.querySelector("#passValadation").innerHTML = "Provide Valid Password "
    } else {
        for (let i of userArr) {
            if (email.value === i.email && password.value === i.password) {
                console.log("inside if");

                if (i.role === 'admin') {
                    localStorage.setItem('currentAdmin', email.value)
                    window.location.href = "adminHome.html";
                } else {
                    localStorage.setItem('currentUser', email.value)

                    window.location.href = "studentHome.html";
                }
                flag = true;
                break;
            }
        }
        if (!flag) {
            alert("user dose not exist")
        }

        // if (userArr.includes(email.value)){
        //     console.log('inside');

        // } else {
        //     alert("user Does not exist");
        // }

    }

}
