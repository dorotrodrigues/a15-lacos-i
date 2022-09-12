// # Exercício 3

// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"
// ```

const brinquedos = ["Pelúcia", "Bola", "Bicicleta", "Carrinho", "Boneca"]

for(let contador = 0; contador < brinquedos.length; contador ++){
    console.log(`${contador + 1} -  ${brinquedos[contador]}`)
}