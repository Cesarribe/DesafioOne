let amigos = [];

function adicionarAmigo() {
   
    const nome = document.getElementById('campoNome').value.trim();

    
    if (nome === "") {
       
        alert("Por favor, insira um nome.");
    } else {
        
        amigos.push(nome);

        
        console.log(amigos);

        
        document.getElementById('campoNome').value = "";
    }
}

function exibirAmigos() {
    const lista = document.getElementById('lista-amigos');
    
   
    lista.innerHTML = "";


    for (let i = 0; i < amigos.length; i++) {
        
        const item = document.createElement('li');
        item.textContent = amigos[i];

        
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    
    const amigoSorteado = amigos[indiceAleatorio];

   
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
