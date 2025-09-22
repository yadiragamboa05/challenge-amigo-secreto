// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const nuevoAmigo = document.getElementById('amigo').value;

    if (nuevoAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nuevoAmigo);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos disponibles para el sorteo.";
        return;
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];

        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }
}