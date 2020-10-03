function clicar() {
    var nome = window.prompt("Qual é o seu nome?");
    var idade = window.prompt(`Olá, ${nome}! Quantos anos você tem?`);
    window.alert(`Acabei de conhecer o ${nome}, que tem ${idade} anos!`);
}