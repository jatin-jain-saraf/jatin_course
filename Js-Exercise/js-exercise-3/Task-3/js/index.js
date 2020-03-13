let start = document.getElementById("start")
start = alert("Click the card")
let cardText = document.querySelector("#card3 h2")
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let card4 = document.getElementById("card4")
card1.style.backgroundColor = 'skyblue'
card3.style.backgroundColor = 'skyblue'
let ne = ''
let previous = ''

let count1 = 0
let count2 = 0

let colorArr1 = ['green', 'blue', 'orange']
let colorArr2 = ['green', 'blue', 'skyblue', 'red', 'parrot']
card1.addEventListener('click', () => {
    cardText.innerHTML = `<br> oops`
})
setInterval(function () {
    if (count1 < colorArr1.length) {
        card2.style.backgroundColor = colorArr1[count1];
    } else {
        count1 = 0
        card2.style.backgroundColor = colorArr1[count1];
    }
    count1++
}, 3000)


function next() {

    ne = setInterval(function () {
        if (count2 < colorArr2.length) {
            card4.style.backgroundColor = colorArr2[count2];
        } else {
            count2 = 0
            card4.style.backgroundColor = colorArr2[count2];
        }
        count2++
    }, 5000)

}
function pre() {
    clearInterval(ne)
    if (count2 === 0) {
        count2 = 4
    } else {
        pre = setInterval(function () {
            count2--
            card4.style.backgroundColor = colorArr2[count2];
        }, 5000)

    }
}

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        next()
    }
    else if (e.keyCode == '40') {
        pre()
    }
    else if (e.keyCode == '37') {
        pre()
    }
    else if (e.keyCode == '39') {
        next()
    }

}
