function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let h1 = document.getElementById('text')

    var data = new Date()
    var hora = data.getHours()
        // var hora = 10
    msg.innerHTML = `agora são ${hora} horas`


    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "./imagens/manha (Personalizar).png"
        document.body.style.background = '#e7c783'
        h1.innerHTML = "Bom Dia"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "./imagens/tarde (Personalizar).png"
        h1.innerHTML = "Boa Tarde"
    } else {
        //boa noite
        img.src = "./imagens/noite (Personalizar).png"
        document.body.style.background = '#10228C'
        h1.innerHTML = "Boa Noite"
    }
}