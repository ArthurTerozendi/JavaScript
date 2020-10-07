function incrementar(id) {
    if (id === "senha") {
        var input = document.getElementById("tamanhoSenha");
        var valor = parseInt(input.value);
        valor++;
        input.innerHTML = `<input type="number" id="tamanhoSenha" value="${valor}" readonly>`;
    }
}