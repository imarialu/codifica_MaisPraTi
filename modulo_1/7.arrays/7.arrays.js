let listaDeFrutas = Array();
let listaNomes = ['Maria', 'André']

listaDeFrutas[0] = 'Maça';
listaDeFrutas[1] = 'Maracujá';
listaDeFrutas['adocicadas'] = 'Manga'; // Adicionando com u  index diferenciado

for(let i = 0; i < listaDeFrutas.length; i++){ // Percorre a array
    console.log(listaDeFrutas[i]);
}

listaDeFrutas.push('Uva'); // Adiciona no final de uma array
listaDeFrutas.unshift('Abacate'); // Adiciona no início de uma array

console.log(listaDeFrutas);

listaDeFrutas.pop(); // Elimina o último elemento de uma array
listaDeFrutas.shift(); // Elimina o primeiro elemento de uma array

console.log(listaDeFrutas);
console.log(listaNomes);
