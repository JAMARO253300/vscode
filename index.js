let p = document.querySelector('p')
let input = document.querySelector('input')



const contacts = [
    { name: 'João', number: '(19) 97654-2345'},
    { name: 'Carlos', number: '(19) 97654-3422'},
    { name: 'Ana', number: '(19) 95434-2455'},
    { name: 'Camila', number: '(19) 91154-9235'}

]

function search() {
    for (let i = 0; i < contacts.length; i++) {
        if (input.value.toLowerCase === contacts[i].name.toLowerCase) {
            p.innerHTML =   `Contato Encontrado Nome:${contacts[i].name} telefone:${contacts[i].number}`

            break

        } else {
            p.innerHTML = 'Esse contato não existe'
        }


    }

}
