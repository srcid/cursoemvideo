let addBtn        = window.document.querySelector('button#add_btn'),
    finBtn        = window.document.querySelector('button#fin_btn'),
    clearBtn      = window.document.querySelector('button#clear_btn')
    resConteiner  = window.document.querySelector('div#res_conteiner'),
    listConteiner = window.document.createElement('div'),
    oprtConteiner = window.document.createElement('div')


resConteiner.appendChild(listConteiner)
resConteiner.appendChild(oprtConteiner)

listConteiner.style.textAlign = 'center'

addBtn.addEventListener('click', getNumber)
finBtn.addEventListener('click', finalize)
clearBtn.addEventListener('click', clearNumbers)

function getNumber() {
    let newNumber = window.document.querySelector('input#to_add')
    
    if (newNumber.value.length === 0) {
        window.alert('Nenhum valor passado')
        return
    } else {
        addToList(newNumber.value)
        window.document.querySelector('form#form').reset()
    }
}

function addToList(param) {
    let newNumConteiner = window.document.createElement('div')

    newNumConteiner.setAttribute('class', 'num_conteiner')

    newNumConteiner.innerHTML = Number(param)

    listConteiner.appendChild(newNumConteiner)
}

function finalize() {
    let allElements = window.document.querySelectorAll('div.num_conteiner'),
        allNuns     = [],
        biggerOne,
        lowerOne,
        summatory,
        averageValue


    if (allElements.length === 0) {
        window.alert('Nenhum valor encontrado, adicione algum')
        return
    }
    
    for (let elem of allElements) {
        allNuns.push(Number(elem.innerText))
    }

    console.log(allNuns)

    biggerOne    = ((allNuns) => {return Math.max.apply(null, allNuns)})(allNuns)
    lowerOne     = ((allNuns) => {return Math.min.apply(null, allNuns)})(allNuns)
    summatory    = allNuns.reduce((a, b) => { return Number(a) + Number(b)}, 0)
    averageValue = summatory / allNuns.length

    console.log(biggerOne, lowerOne, summatory, averageValue)
    
    printingOutput(biggerOne, lowerOne, summatory, averageValue)

}

function printingOutput(biggerOne, lowerOne, summatory, averageValue) {
    let discriptionBigger = window.document.createElement('p'),
        discriptionLower  = window.document.createElement('p'),
        discriptionSum    = window.document.createElement('p'),
        discriptionAve    = window.document.createElement('p')

    oprtConteiner.innerHTML = ''

    discriptionBigger.innerHTML = `Maior valor: ${biggerOne}`
    discriptionLower.innerHTML  = `Menor valor: ${lowerOne}`
    discriptionSum.innerHTML    = `Soma de todos: ${summatory}`
    discriptionAve.innerHTML    = `Média: ${averageValue}`

    oprtConteiner.appendChild(discriptionBigger)
                 .appendChild(discriptionLower)
                 .appendChild(discriptionSum)
                 .appendChild(discriptionAve)
}

function clearNumbers() {
    listConteiner.innerHTML = ''
    oprtConteiner.innerHTML = ''
}