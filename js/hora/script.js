var date = new Date()

function loadPictures() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('showingImg')
    // let sysCurrentTime = date.getHours()
    let sysCurrentTime = 19
    msg.innerText = `Horario atual: ${sysCurrentTime}`

    if (sysCurrentTime >= 0 && sysCurrentTime < 5) {
        //madrugada
        img.src = '_img/night.png'
        window.document.body.style.backgroundColor = '#002b50'
    } else if (sysCurrentTime < 12) {
        //manhã
        img.src = '_img/morning.png'
        window.document.body.style.backgroundColor = '#d2a478'
    } else if (sysCurrentTime < 18) {
        //tarde
        img.src = '_img/afternoon.png'
        window.document.body.style.backgroundColor = '#d0a31f'
    } else { //if (sysCurrentTime < 24)
        //noite
        img.src = '_img/night.png'
        window.document.body.style.backgroundColor = '#002b50'
    }
}