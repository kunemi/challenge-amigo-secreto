const amigos = []
function Amigo() {
    let listaDeAmigos = document.getElementById("amigo").value
    let inicioDeLista = listaDeAmigos
    if (inicioDeLista === "") {
        alert("ingrese un nombre valido")

    }
        else if (amigos.includes(inicioDeLista)) {
        alert("ese nombre ya esta en la lista");return}

     
        else {
        amigos.push(inicioDeLista)
        document.getElementById("amigo").value = ""


        }



    console.log(amigos)

    mostrarLista()


}
function mostrarLista() {
    let lista2 = document.getElementById("lista")
    lista2.innerHTML = ""
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li")
        li.textContent = amigos[i]
        lista2.appendChild(li)
    }


}
function sortearAmigo() {


    if (amigos.length === 0) {
        alert("no hay amigos para sortear"); return
    }

    let sorteoganador = Math.floor(Math.random() * amigos.length)

    let resultadoFinal = document.getElementById("resultado")
    resultadoFinal.innerHTML = `el ganador del sorteo es ${amigos[sorteoganador]}`
    document.getElementById("lista").innerHTML = ""
    amigos.length = 0


}
