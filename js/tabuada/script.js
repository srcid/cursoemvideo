let calculateBt = window.document.getElementById('calculate_bt')
calculateBt.addEventListener('click', timesTableGen)

function timesTableGen()
{
    let num   = window.document.querySelector('input#number').value,
        table = window.document.querySelector('select#times_table'),
        i
    
    table.innerHTML = ''
    
    if (num.length === 0) {
        window.alert('Insira um valor válido')
        return
    }

    for (i = 0; i <= 10; i++) {
        let optChild = window.document.createElement('option')
            optValue = `${i * Number(num)}`
            optHTML  = `${i} * ${num} = ${optValue}`

        optChild.setAttribute('value', optValue)
        optChild.innerHTML = optHTML
        table.appendChild(optChild)
    }
}