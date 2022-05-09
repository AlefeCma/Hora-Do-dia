function carregar(){
var hora = window.document.getElementById('hora')
var foto = window.document.getElementById('img')
var data = new Date()
var minutos = data.getMinutes()
hora1 = data.getHours()

hora.innerText= (`Agora são ${hora1} horas e ${minutos} minutos`)
if(hora1>= 0 && hora1<12){
    foto.src = 'manhacerta.png'
    document.body.style.background="#a08f7a"
}else if(hora1>=12 && hora1<18){
    foto.src = 'tardecerta.png'
    document.body.style.background="#933610"
}else{
    foto.src = 'noitecerta.png'
    document.body.style.background="#00060f"
}

}