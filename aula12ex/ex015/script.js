function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos. Bom dia!`
        img.src = 'manha.1.png'
        document.body.style.backgroundColor = '#bc9270'
    } else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos. Boa tarde!`
        img.src = 'tarde.1.png'
        document.body.style.backgroundColor = '#c77133'
    }else{
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos. Boa noite!`
        img.src = 'noite.1.png'
        document.body.style.backgroundColor = '#243533'
    }
}

