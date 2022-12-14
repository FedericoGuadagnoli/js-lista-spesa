console.log('JS OK');
const container = document.querySelector('.container');
console.log(container);
// Data una lista della spesa,
// stampare in pagina gli elementi della lista individualmente con un ciclo while.

//Creo variabile elementi della lista
const list = ['pane', 'acqua', 'latte', 'uova', 'farina'];
console.log(list);

// Preparo la lista
let listElements = '<ul>';
console.log(listElements);

// Inserisco gli elementi della lista uno ad uno tramite il ciclo while
let i = 0;
while (i !== list.length) {
    const name = list[i];
    console.log(name);
    listElements += `<li>${name}</li>`;
    i++;
    console.log(listElements);
}

// Chiudo la lista
listElements += '</ul>';
console.log(listElements);

// Stampo la lista in pagina
container.innerHTML = listElements;
