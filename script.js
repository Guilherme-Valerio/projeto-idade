function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){ 
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/homem-bebe.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/mulher-bebe.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/mulher-adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }
        res.innerHTML = `<br>É ${genero} com ${idade} anos.</br>`
        res.appendChild(img)
    }
} 