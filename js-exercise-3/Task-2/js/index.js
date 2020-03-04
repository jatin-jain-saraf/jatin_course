let inpt = document.getElementById("inpt")
let res = document.getElementById("res")

let arr = [
    {

        Fname: 'jatin jain'
    },
    {

        Fname: 'meet shah'
    },
    {

        Fname: 'aman gupta'
    },
    {

        Fname: 'nawal kishor'
    },
    {
        Fname: 'myure Ahir'
    },
    {
        Fname: 'ravi pathekar'
    },
    {
        Fname: 'hardick motwani'
    },
    {
        Fname: 'dhairya shah'
    },
    {
        Fname: 'darshen vesathiya'
    },
    {

        Fname: 'sweeta kumari'
    },
];
let search = () => {
    res.innerHTML = ''
    let arr1 = []
    for (user of arr) {
        if (user.Fname.includes(inpt.value)) {


            arr1.push(user.Fname)
        }
    }
    res.innerHTML = ''
    arr1.forEach(Fname => {
        
        let pos = Fname.indexOf(inpt.value)
        let part1 = Fname.slice(0,pos)
        let part2=Fname.slice(pos ,pos+inpt.value.length)
        let part3=Fname.slice(pos+inpt.value.length, Fname.length)
        // console.log(part1+part2+part3)  
        if (inpt.value !== '') {
            res.innerHTML += `${part1}<mark>${part2}</mark>${part3}<br>`
        }
        else {
            res.innerHTML = ''
        }
    })

}