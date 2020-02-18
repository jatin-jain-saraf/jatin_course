let firstName = document.getElementById('FirstName');
let lastName = document.getElementById('LastName');
let tbody = document.getElementById('tbody');
let user = [{
        firstName: 'Jatin',
        lastName: 'Jain'
    },
    {
        firstName: 'Saransh',
        lastName: 'Rai'
    },
    {
        firstName: 'Shantam',
        lastName: 'Jain'
    },
    {
        firstName: 'Ravi',
        lastName: 'Pathekar'
    },
    {
        firstName: 'Neetesh',
        lastName: 'Tiwari'
    },
    {
        firstName: 'Afiaz',
        lastName: 'Qureshi'
    },
    {
        firstName: 'Prateek',
        lastName: 'jain'
    },
    {
        firstName: 'Asif',
        lastName: 'Khan'
    },
    {
        firstName: 'Vinayak',
        lastName: 'Knehekar'
    },
    {
        firstName: 'Mudit',
        lastName: 'Diwadi'
    }
];
let id = 0;
let addbtn = document.getElementById('add');
let updatebtn = document.getElementById('update');
let updatedusr;
show();
updatebtn.style.display = 'none';

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
    // tbody.innerHTML = '';
    for (let i = 0; i < user.length; i++) {
        let FirstName = user[i].firstName;
        let LastName = user[i].lastName;
        tbody.innerHTML += `<tr>
							<td>${FirstName}</td>
							<td>${LastName}</td>
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