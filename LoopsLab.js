// Declara la lista de frutas
let frutas = ["Manzana", "Banano", "Cereza", "Durazno", "Fresa"];

// Uso del loop for
console.log("Uso del loop for:");
for (let i = 0; i < frutas.length; i++) {
    console.log(i + " - " + frutas[i]);
}

// Reinicia el índice a 0
let indice = 0;

// Uso del loop while
console.log("\nUso del loop while:");
while (indice < frutas.length) {
    console.log(indice + " - " + frutas[indice]);
    indice++;
}

// Uso del loop for...of
console.log("\nUso del loop for...of:");
for (let fruta of frutas) {
    console.log(fruta);
}



// Definición de la función imprimirFruta
function imprimirFruta(tamanoMinimo) {
    console.log("Frutas con " + tamanoMinimo + " o menos letras:");
    for (let fruta of frutas) {
        if (fruta.length <= tamanoMinimo) {
            console.log(fruta);
        }
    }
}

// Llama a la función imprimirFruta con un tamaño mínimo de 6 letras
imprimirFruta(6);

// Llama a la función imprimirFruta con un tamaño mínimo de 5 letras
imprimirFruta(5);
