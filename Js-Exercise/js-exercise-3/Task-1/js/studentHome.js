let currentUser = localStorage.getItem('currentUser');
let userArr = localStorage.getItem('userArr');
userArr = JSON.parse(userArr);
let name;
let coursesArr = JSON.parse(localStorage.getItem('coursesArr')) ? JSON.parse(localStorage.getItem('coursesArr')) : [];


let courseName = document.getElementById("courseName");
let courseImg = document.getElementById("courseImg");
let courseLink = document.getElementById("courseLink");
const tbodyRemove = document.getElementById("TbodyRemove");
let courseId = 0;
let result = "";
let img;
let res;
let studentForAssign = '';

function logouts() {
    let confirmBtn = confirm("Are u sure want to logout?")
    if (confirmBtn == true) {
        localStorage.removeItem('currentUser');
        window.location.href = '../src/login.html';
    } else {
        window.location.href = '#';
    }

}

for (let user of userArr) {
    if (user.email === currentUser) {
        currentUser = user;
    }
}
document.getElementById("role").innerHTML = currentUser.name;

let currentUserFetch = localStorage.getItem('currentUser');
// currentUserFetch = JSON.parse(currentUserFetch);


for (let i = 0; i < currentUser.courses.length; i++) {
    
    for (let j = 0; j < coursesArr.length; j++) {

        if (coursesArr[i].courseId === currentUser.courses[i]) {

            document.getElementById("allcourse").innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 mb-5">
                        <div class="card pt-5 text-center">
                            <img src = '${coursesArr[i].courseImg}' height="200px">
                            <div class="card-body">
                            <a href="${coursesArr[i].courseLink}"><h5 class="card-title">${coursesArr[i].courseName}</h5></a>                                
                        </div>
                    </div>`
        }
    }
}
