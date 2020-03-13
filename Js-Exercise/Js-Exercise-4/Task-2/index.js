let otpt = document.getElementById("otpt")
let arr = [
    {
        name: 'jatin',
        sports: ['Chess', 'Ludo', 'Cricket']
    },
    {
        name: 'Myure',
        sports: ['carrom', 'Ludo', 'Football']
    },
    {

        name: 'Meet',
        sports: ['Snake Catcher', 'Quiz', 'Cricket']
    },
    {

        name: 'Nawal',
        sports: ['Carrom', 'Ludo', 'Football']
    },
    {
        name: 'Aman',
        sports: ['Snake Catcher', 'Quiz', 'Cricket']
    }]

let obj = []
let n = {}
for (let user of arr) {
    for (let sport of user.sports) {
        if (n[sport]) {
            n[sport].push(user.name)
        } else {
            n[sport] = [user.name]
        }
    }

}
for (let item in n) {
    obj.push({ [item]: n[item] })
}

otpt.innerHTML = JSON.stringify(obj)


