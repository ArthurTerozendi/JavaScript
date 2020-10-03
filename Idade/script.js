
function verificarIdade () {
    var data = document.querySelector('input#data').value;
    var foto = document.getElementById("foto");
    
    data = data.split("-", 3);
    var idade;
    
    var dataAtual = new Date();
    

    if ( Number(data[0]) < 2020) {
        if ( Number(data[1]) < (dataAtual.getMonth() + 1) ) {
            idade = dataAtual.getFullYear() - Number(data[0]);
        } 
        else if (Number(data[1]) == (dataAtual.getMonth() + 1)) {
            if ( Number(data[2]) <= dataAtual.getDate() ) {
                idade = dataAtual.getFullYear() - Number(data[0]);
            } else {
                idade = dataAtual.getFullYear() - Number(data[0]) - 1;
            }
        }else {
            idade = dataAtual.getFullYear() - Number(data[0]) - 1;
        }
    } else {
        window.alert("Ano inválido!")
    }
    var sexo = document.getElementsByName("sexo");
    var suaIdade = document.querySelector("#idade");

    sexo[0].checked == true ? sexo = 'masc' : sexo = 'fem';
    
    if ( idade >= 1 && idade < 4 ) {
        if (idade == 1) {
            suaIdade.innerText = `Você tem ${idade} ano!`;
        } else {
            suaIdade.innerText = `Você tem ${idade} anos!`;
        }
        if (sexo == 'masc') {
            foto.src = 'img/bebeMasc.png';
        }
        else if ( sexo == 'fem' ) {
            foto.src = 'img/bebeFem.png';
        } else {
            window.alert("Informe seu sexo!");
        }
    } else if (idade >= 4 && idade < 13) {
        suaIdade = `Você tem ${idade} anos!`;
        
        if (sexo == 'masc') {
            foto.src = 'img/criancaMasc.png';
        }
        else if ( sexo == 'fem' ) {
            foto.src = 'img/criancaFem.png';
        } else {
            window.alert("Informe seu sexo!");
        }
    } else if (idade >= 13 && idade < 18) {
        suaIdade = `Você tem ${idade} anos!`;
        
        if (sexo == 'masc') {
            foto.src = 'img/adolescenteMasc.png';
        }
        else if ( sexo == 'fem' ) {
            foto.src = 'img/adolescenteFem.png';
        } else {
            window.alert("Informe seu sexo!");
        }
    } else if (idade >= 18 && idade < 60) {
        suaIdade = `Você tem ${idade} anos!`;
        
        if (sexo == 'masc') {
            foto.src = 'img/adultoMasc.png';
        }
        else if ( sexo == 'fem' ) {
            foto.src = 'img/adultoFem.png';
        } else {
            window.alert("Informe seu sexo!");
        }
    } else if (idade >= 60) {
        suaIdade = `Você tem ${idade} anos!`;
        
        if (sexo == 'masc') {
            foto.src = 'img/velhoMasc.png';
        }
        else if ( sexo == 'fem' ) {
            foto.src = 'img/velhoFem.png';
        } else {
            window.alert("Informe seu sexo!");
        }
    } else { 
        window.alert("Idade Inválida!");
    }
}