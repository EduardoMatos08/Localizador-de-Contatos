// Variáveis dos elementos da página

const input = document.querySelector("input")
const p = document.querySelector("#contact-informations")

// Variáveis dos Usuários

const contacts = [
    {nome: 'Eduardo', telefone: '+11 (11) 11111-1111'},

    {nome: 'Nadia', telefone: '+22 (22) 22222-2222'},

    {nome: 'Wilton', telefone: '+33 (33) 33333-3333'},

    {nome: 'Thiago', telefone: '+44 (44) 44444-4444'},

    {nome: 'Felipe', telefone: '+55 (55) 55555-5555'},

    { nome: 'Vitor', telefone: '+66 (66) 66666-6666'},
]

function locationOfContact() {

    for(let i = 0; i < contacts.length; i++){
        if(input.value.toLowerCase() === contacts[i].nome.toLowerCase()) {
            p.innerHTML = `</br><p>${contacts[i].nome}</p></br><p>${contacts[i].telefone}</p>`
            p.style.textAlign = "center"
            p.style.fontSize = "25px"
            break
        }

        else{
            p.innerHTML = `<br>Houve um ERRO ou o contato não foi encontrado, tente novamente...`
            p.style.fontSize = "20px"
            p.style.textAlign = "center"
        }
    }

}