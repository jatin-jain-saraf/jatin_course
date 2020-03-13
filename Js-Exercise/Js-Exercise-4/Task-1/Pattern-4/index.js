
for (let i = 0; i <= 4; i++) {

    for (let j = 0; j <= 4; j++) {
        document.getElementById("print").innerHTML += `&nbsp;`

        if ((j === i)) {

            document.getElementById("print").innerHTML += `*`
        } else if (i + j === 5 - 1) {

            document.getElementById("print").innerHTML += `*`

        } else {
            document.getElementById("print").innerHTML += `&nbsp;`

        }


    }

    document.getElementById("print").innerHTML += `<br>`


}