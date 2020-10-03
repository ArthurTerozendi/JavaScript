var img = document.getElementById('foto');
var msg = document.getElementById('msg');
var data = new Date();
var hora = data.getHours();
var min = data.getMinutes();
msg.innerText = `São ${hora} horas e ${min} minutos!`;
if (hora < 12 && hora >= 5) {
    //Hora Manhã
    img.src = 'img/fotomanha.png'
    document.body.style.backgroundColor = '#ffe455';
} else if (hora >= 12  && hora <= 18) {
    //hora tarde
    img.alt = 'foto da tarde';
    img.src = 'img/fototarde.png';
    document.body.style.backgroundColor = '#c4bbb4';
}else{
    //hora noite
    img.src = 'img/fotonoite.png';
    document.body.style.backgroundColor = '#1c2628';
}
