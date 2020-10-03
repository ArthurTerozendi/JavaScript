let conjNum = [];

function invalido() {
    window.alert("Número Inválido!");
}

function attSelect() {
    let select = document.querySelector("select#numAd");
    select.innerHTML = "";
    for (let i = 0; i < conjNum.length; i++) {
        select.innerHTML += `<option value="num${i}"> Valor ${conjNum[i]} adicionado</option>`
    }
}

function addArray(num) {
    let verificadorExiste = false;
    for (let iterador of conjNum) {
        if (iterador == num) {
            verificadorExiste = true;
            break;
        }
    }
    if (!verificadorExiste) {
        conjNum.push(num);
        attSelect();
    } else {
        window.alert("Número já existe na lista!");
    }
}

function adicionar() {
    let num = document.querySelector("input#num").value;
    let res = document.querySelector("div#resultado");
    
    res.innerHTML = "";
    
    if (num.length == 0) {
        window.alert("Por favor adicione um número!");
    } else if (Number(num) >= 1 && Number(num) <= 100) {
        addArray(Number(num));
    } else {
        invalido();
    }
    document.querySelector("input#num").value = " ";
    document.querySelector("input#num").focus();
}

function calcular() {
    let res = document.querySelector("div#resultado");

    if (conjNum.length == 0) {
        window.alert("Por favor adicione um número!");
    } else if (conjNum.length == 1) {
        res.innerHTML = `<h3> Ao todo foi adicionado ${conjNum.length} número </h3>`;
    } else {
        res.innerHTML = `<h3> Ao todo foram adicionados ${conjNum.length} números </h3>`;
    }

    let maior, menor, media, soma = 0;
    
    for (let i = 0; i < conjNum.length; i++) {
        if (i == 0) {
            maior = conjNum[0];
            menor = conjNum[0];
        }
        if (maior < conjNum[i]) {
            maior = conjNum[i];
        }
        if (menor > conjNum[i]) {
            menor = conjNum[i];
        }
        soma += conjNum[i];
        media = soma/conjNum.length;
    }

    res.innerHTML += `<h3> O maior número é ${maior} </h3>`;
    res.innerHTML += `<h3> O menor número é ${menor} </h3>`;
    res.innerHTML += `<h3> A soma total é ${soma} </h3>`;
    res.innerHTML += `<h3> A média é ${media} </h3>`
}