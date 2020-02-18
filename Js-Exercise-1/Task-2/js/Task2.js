let firstName = document.getElementById('FirstName');
let lastName = document.getElementById('LastName');
let tbody = document.getElementById('tbody');
let user = [];
let id = 0;
let addbtn = document.getElementById('add');
let updatebtn = document.getElementById('update');
let updatedusr;

function add() {
    id++;
    user.push({
        id: '',
        firstName: firstName.value,
        lastName: lastName.value
    });

    firstName.value = '';
    lastName.value = '';

    show();
}

function show() {
    tbody.innerHTML = '';
    for (let i = 0; i < user.length; i++) {
        let FirstName = user[i].firstName;
        let LastName = user[i].lastName;
        let x = FirstName.toString();
        let y = LastName.toString();
        tbody.innerHTML += `<tr>
							<td>${x}</td>
							<td>${y}</td>
							<td><span onclick = "edit(${i})"><i class="fas fa-edit"></i></span></td>
							<td><span onclick = "del(${i})"> <i class="fas fa-trash"></i></span></td>
							</tr>`;
    }
}

function edit(i) {
    addbtn.style.display = 'none';
    updatebtn.style.display = 'initial';
    firstName.value = user[i].firstName;
    lastName.value = user[i].lastName;
    updatedusr = i;
}

function update() {
    user[updatedusr].firstName = firstName.value;
    user[updatedusr].lastName = lastName.value;
    addbtn.style.display = 'initial';
    updatebtn.style.display = 'none';
    show();
    firstName.value = '';
    lastName.value = '';
}

function del(i) {
    user.splice(i, 1);
    show();
}