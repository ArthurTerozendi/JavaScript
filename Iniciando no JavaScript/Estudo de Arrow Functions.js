var materiais = ['Hidrogenio', 'Helio', 'Lithium', 'Beryllium'];

//função anonima comum que retorna o tamanho do paramentro q foi passado
var a2 = materiais.map(function(material){return material.length});

//função ARROW que retorna o tamonho do parametro q foi passado
var a3 = materiais.map(material => material.length);

let num = 8;
num **= 2
console.log(num);
console.log(a2);
console.log(a3);

