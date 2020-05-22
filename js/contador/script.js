let submitButton = document.getElementById('submit_button')
submitButton.addEventListener('click', handleForm)


function handleForm() {
    let initial = document.getElementById('initial_value').value,
        max     = document.getElementById('max_value').value,
        step    = document.getElementById('step').value,
        res     = document.getElementById('res'),
        parag   = document.createElement('p'),
        form    = document.getElementById('form'),
        i

    res.innerHTML = ''
    // parag.setAttribute('role', 'image')
    // parag.setAttribute('aria-label', 'point-right')
    console.log(initial + ' ' + max + ' ' + step)

    for (i = Number(initial); i <= Number(max); i += Number(step)) {
        parag.innerHTML += `${i} &#x1F449; `;
    }

    parag.innerHTML += ' &#x2714;'
    res.appendChild(parag)
    form.reset()
}


