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

while(contador<3){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
    }else{
        console.log("Destino não existe");
    }


    contador += 1;
}

