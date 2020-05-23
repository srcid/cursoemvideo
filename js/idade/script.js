var date = new Date()
var radiomasc = document.getElementById('gen-masc')
var radiofeme = document.getElementById('gen-fema')
radiomasc.addEventListener('click', clickmasc)
radiofeme.addEventListener('click', clickfema)

function clickmasc() {
    document.body.style.backgroundColor = '#4e84cc'
}

function clickfema() {
    document.body.style.backgroundColor = '#b658b8'
}

document.getElementById('get-year').setAttribute('max', String(date.getFullYear()))
document.getElementById('get-year').setAttribute('min', String(0))

function getImagePerAge(age, gender) {
    let image = document.createElement('img')
    gender += '-'
    if (Number(age) < 5) {
        image.setAttribute('src', '_img/' + gender + 'baby.png')
    } else if (Number(age) < 18) {
        image.setAttribute('src', '_img/' + gender + 'children.png')
    } else if (Number(age) < 50 ) {
        image.setAttribute('src', '_img/' + gender + 'adult.png')
    } else {
        image.setAttribute('src', '_img/' + gender + 'old.png')
    }

    return image
}


function check() {
    let currentYear = date.getFullYear()
    let informedYear = document.getElementById('get-year')
    let sex = document.getElementsByName('get-gen')
    let res = document.getElementById('res')
    res.innerHTML = ''
    console.log(informedYear.value)

    if (informedYear.value.length == 0 || informedYear.value > currentYear || informedYear.value <= 0) {
        window.alert('[ERROR] Invalid year was informed')
    } else {
        console.log('Everything\'s fine, keep going on.')
        let age = currentYear - Number(informedYear.value)
        let img = getImagePerAge(age, sex[0].checked ? 'man': 'woman')
        console.log(img)
        res.appendChild(img)
        let messege = document.createElement('p')
        messege.appendChild(
            document.createTextNode(`És ${sex[0].checked ? 'um homem' : 'uma mulher'} de ${age} ${age > 1 ? 'anos' : 'ano'}`)
        )
        res.appendChild(messege)
        
    }

}

function formClearner() {
    document.body.style.backgroundColor = '#5bba76'
    let res = document.getElementById('res')
    res.innerHTML = 'Fill in the informations on top to see the result'
}