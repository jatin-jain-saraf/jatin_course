let currentUser = localStorage.getItem('currentAdmin');
let userArr = localStorage.getItem('userArr');
userArr = JSON.parse(userArr);
let name;
let coursesArr = JSON.parse(localStorage.getItem('coursesArr')) ? JSON.parse(localStorage.getItem('coursesArr')) : [];
console.log(coursesArr)
let courseName = document.getElementById("courseName");
let courseImg = document.getElementById("courseImg");
let courseLink = document.getElementById("courseLink");
const tbodyRemove = document.getElementById("TbodyRemove");
let courseId = 0;
let result = "";
let img;
let res;
let studentForAssign = '';


if (!localStorage.getItem('currentAdmin')) {
    window.location.href = '../src/login.html';
} else {
    for (let i = 0; i < userArr.length; i++) {
        if (currentUser === userArr[i].email) {
            if (userArr[i].role === "admin") {
                // window.location.href =userArr '../admin/index.html';
            } else {
                window.location.href = '../src/login.html';
            }
        }
    }
}



logout = () => {
    let confirmBtn = confirm("Are u sure want to logout?")
    if (confirmBtn == true) {
        localStorage.removeItem('currentAdmin');
        window.location.href = '../src/login.html';
    } else {
        window.location.href = '#';
    }
}

for (let user of userArr) {
    if (user.email === currentUser) {
        currentUserName = user.name;
    }
}
document.getElementById("role").innerHTML = currentUserName;

document.getElementById("AddCourse").addEventListener('click', event => {
    if (courseName.value == '') {
        alert("Please Enter the course Name ")
    } else if (courseImg.value == '') {
        alert("Please Enter the course Image ")
    } else if (courseLink.value == '') {
        alert("Please Enter the course Link ")
    } else {
        console.log('Hello');
        if(coursesArr.length === 0){
            courseId = 1
        }else{
            courseId = coursesArr[coursesArr.length - 1].courseId + 1
        }
        let objOfCourse = {
            courseName: courseName.value,
            courseImg: courseImg.value,
            courseLink: courseLink.value,
            courseId: courseId
        }


        coursesArr.push(objOfCourse);
        console.log(objOfCourse);

        localStorage.setItem('coursesArr', JSON.stringify(coursesArr));
        window.location.href = "../src/adminHome.html";
    }
})
let coursesArrFetch = JSON.parse(localStorage.getItem('coursesArr') || '[]');
// coursesArrFetch = JSON.parse(coursesArrFetch);


for (let i = 0; i < coursesArrFetch.length; i++) {
    courseId = coursesArrFetch[i].courseId
    img = coursesArrFetch[i].courseImg;
    document.getElementById("allCourse").innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 mb-5">
                        <div class="card pt-5 text-center">
                            <img src = '${img}' height="200px">
                            <div class="card-body">
                            <h5 class="card-title">${coursesArr[i].courseName}</h5>
                        </div>
                        <div class="card-footer">
                            <button type="button" onclick = "assignCourse(${courseId})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                                Assign Course
                            </button>
                        </div>
                    </div>`
}

let assignCourse = (courseId) => {
    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].role === "student") {
            document.getElementById("assignCourse").innerHTML += `<tr> 
                                    <td>${userArr[i].name}</td>
                                    <td>${userArr[i].email}</td>
                                    <td><input type="checkbox" id="${userArr[i].email}" onclick="sendDataToStudent(${courseId},'${userArr[i].email}')" value = '${courseId}' ${userArr[i].courses.includes(courseId) ? "checked" : ""}></td>
                                </tr>`
        }
    }

}

for (let i = 0; i < coursesArrFetch.length; i++) {
    tbodyRemove.innerHTML += `<tr>
                                    <td><img src="${coursesArrFetch[i].courseImg}" width="50px"></td>
                                    <td>${coursesArrFetch[i].courseName}</td>
                                    <td><button class="btn btn-danger" onclick="RemoveCourse(${coursesArrFetch[i].courseId})">Remove</button></td>
                                </tr>`
}
function RemoveCourse(courseId) {

    for (let i = 0; i < coursesArrFetch.length; i++) {

        if (coursesArrFetch[i].courseId === courseId) {

            coursesArrFetch.splice(i, 1);
            console.log(coursesArrFetch);
            localStorage.setItem('coursesArr', JSON.stringify(coursesArrFetch))
            location.reload(true);
        }



    }


}

function sendDataToStudent(courseId, userEmail) {

    if (document.getElementById(`${userEmail}`).checked) {
        userArr.forEach((user) => {
            if (userEmail === user.email) {
                user.courses.push(courseId)
                localStorage.setItem('userArr', JSON.stringify(userArr))
            }
        })
    } else {
        userArr.forEach((user)=>{
            
            if(userEmail===user.email){
                user.courses.splice(courseId-1,1)
                
                localStorage.setItem('userArr', JSON.stringify(userArr))
                
            }
        })
    }


}
