// Lista de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Função para encontrar números pares
function encontrarPares(lista) {
    return lista.filter(numero => numero % 2 === 0);
}

// Função para criar um objeto com nome de cidade
function criarObjetoCidade(nomeCidade) {
    return { nome: nomeCidade };
}

// Função para mostrar números pares ao clicar no botão
function mostrarNumerosPares() {
    const ulElement = document.getElementById('numeros');
    ulElement.innerHTML = ''; // Limpa a lista antes de adicionar os números
    
    const numerosPares = encontrarPares(numeros);
    numerosPares.forEach(numero => {
        const liElement = document.createElement('li');
        liElement.textContent = numero;
        ulElement.appendChild(liElement);
    });
}

// Testar a função para criar objeto de cidade
const cidade = criarObjetoCidade('São Paulo');
console.log(cidade); // Exemplo de uso: exibe { nome: 'São Paulo' } no console