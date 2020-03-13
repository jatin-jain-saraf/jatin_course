
for (let i = 0; i <= 3; i++) {

    for (let j = 3; j >= 0; j--) {
        document.getElementById("print").innerHTML += `&nbsp; &nbsp;`

        if (j <= i) {
            
            document.getElementById("print").innerHTML += `*`
        } else {
            document.getElementById("print").innerHTML += `&nbsp;`

        }
    }

    document.getElementById("print").innerHTML += `<br>`


}