console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = false;
const destino= "Salvador";


console.log("\n Destinos possíveis");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

// usando o while

while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else {
    console.log("Desculpe tivemos um erro!");
}

// usando o For

for(let i = 0; i < 3 ; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
   }
    
}