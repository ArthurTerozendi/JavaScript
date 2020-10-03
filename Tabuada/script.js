function calcular() {
    let sel = document.querySelector("select#tabuada");
    var num = document.querySelector("input#num").value;
    var tabuada = 0;
    if (num.length == 0) {
        window.alert("Por favor digite um número!");
    } else {
        sel.innerHTML = "";
        for ( var i = 1; i <= 10; i++) {
            tabuada = Number(num) * i;
            sel.innerHTML +=  `<option value="${Number(num)} x ${i}"> ${Number(num)} x ${i} = ${tabuada} </option>`
        }
    }
}