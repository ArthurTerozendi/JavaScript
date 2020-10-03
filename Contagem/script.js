function contar() {
    var inicio = Number(document.querySelector('#inicio').value);
    var fim = Number(document.querySelector('#fim').value);
    var passo = Number(document.querySelector("#passo").value);
    var contagem = document.querySelector("#contagem");
    var contador = " ";
    
    console.log(inicio);
    console.log(fim);
    console.log(passo);
    
    
    if (document.querySelector('#inicio').value.length == 0 || document.querySelector('#fim').value.length == 0 || document.querySelector('#passo').value.length == 0 ) {
        window.alert("Erro! Caixa de texto vazia!")
    }else {
        for (var i = inicio; i <= fim; i+= passo) {
        contador += i + " ";
        contagem.innerText = contador;
        }
    }
}