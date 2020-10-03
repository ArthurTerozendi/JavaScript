function descobrirAntecessorSucessor(){
    var num = window.prompt("Digite um número inteiro qualquer");

    window.alert(`Antes de ${num}, temos o número ${num - 1}. \nDepois de ${num}, temos o número ${(parseInt(num) + 1)} `)
}