//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

/**
 * Função para adicionar um amigo à lista
 */
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    // Validações
    if (nome === '') {
        alert('Por favor, digite um nome!');
        return;
    }
    
    // Verificar se o nome já existe (case insensitive)
    if (amigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase())) {
        alert('Este nome já foi adicionado!');
        input.value = '';
        return;
    }
    
    // Adicionar o nome ao array
    amigos.push(nome);
    
    // Limpar o input
    input.value = '';
    
    // Atualizar a lista na tela
    atualizarLista();
    
    // Focar no input para facilitar a adição de mais nomes
    input.focus();
}

/**
 * Função para atualizar a lista de amigos na tela
 */
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;
        li.style.margin = '5px 0';
        li.style.padding = '8px';
        li.style.backgroundColor = '#f0f0f0';
        li.style.borderRadius = '15px';
        li.style.border = '1px solid #ccc';
        lista.appendChild(li);
    });
}

/**
 * Função para sortear os pares de amigo secreto
 */
function sortearAmigo() {
    // Verificar se há pelo menos 2 pessoas
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 pessoas para fazer o sorteio!');
        return;
    }
    
    // Criar uma cópia do array para embaralhar
    let amigosSorteados = [...amigos];
    let pares = [];
    let tentativas = 0;
    const maxTentativas = 100;
    
    // Tentar criar pares válidos (ninguém tira a si mesmo)
    do {
        pares = [];
        let disponíveis = [...amigos];
        let valido = true;
        
        for (let i = 0; i < amigos.length; i++) {
            const pessoa = amigos[i];
            
            // Filtrar para que a pessoa não tire ela mesma
            const opções = disponíveis.filter(nome => nome !== pessoa);
            
            if (opções.length === 0) {
                valido = false;
                break;
            }
            
            // Escolher aleatoriamente
            const indiceAleatorio = Math.floor(Math.random() * opções.length);
            const amigoSecreto = opções[indiceAleatorio];
            
            pares.push({ pessoa, amigoSecreto });
            
            // Remover o amigo secreto da lista de disponíveis
            disponíveis = disponíveis.filter(nome => nome !== amigoSecreto);
        }
        
        tentativas++;
        
        if (valido) break;
        
    } while (tentativas < maxTentativas);
    
    if (tentativas >= maxTentativas) {
        alert('Não foi possível gerar um sorteio válido. Tente novamente!');
        return;
    }
    
    // Exibir o resultado
    exibirResultado(pares);
}

/**
 * Função para exibir o resultado do sorteio
 */
function exibirResultado(pares) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    // Título do resultado
    const titulo = document.createElement('li');
    titulo.textContent = '🎁 Resultado do Sorteio:';
    titulo.style.fontSize = '24px';
    titulo.style.marginBottom = '15px';
    titulo.style.color = '#4B69FD';
    titulo.style.fontWeight = 'bold';
    resultado.appendChild(titulo);
    
    // Exibir cada par
    pares.forEach(par => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${par.pessoa}</strong> → ${par.amigoSecreto}`;
        li.style.margin = '8px 0';
        li.style.padding = '10px';
        li.style.backgroundColor = '#e8f5e8';
        li.style.borderRadius = '15px';
        li.style.border = '2px solid #05DF05';
        li.style.fontSize = '18px';
        resultado.appendChild(li);
    });
}

/**
 * Função para limpar toda a aplicação
 */
function limparTudo() {
    if (amigos.length === 0 && document.getElementById('resultado').innerHTML === '') {
        alert('Não há nada para limpar!');
        return;
    }
    
    if (confirm('Tem certeza que deseja limpar todos os dados?')) {
        // Limpar array de amigos
        amigos = [];
        
        // Limpar listas na tela
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = '';
        
        // Limpar input
        document.getElementById('amigo').value = '';
        
        // Focar no input
        document.getElementById('amigo').focus();
        
        alert('Dados limpos com sucesso!');
    }
}

/**
 * Função para permitir adicionar nomes pressionando Enter
 */
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('amigo');
    
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
    
    // Focar no input quando a página carregar
    input.focus();
});
