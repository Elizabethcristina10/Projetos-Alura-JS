console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;



console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >=18){
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1,1); // serve para remover um item da lista
}else{
     if(estaAcompanhada){
        console.log("Comprador está acompanhada")
         listaDeDestinos.splice(1,1); // serve para remover um item da lista
     }else{
          console.log("Não é maior de idade");
    }
}

console.log("Embarque: \n \n")  //  O \n serve para pular linha
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem")
}else{
    console.log("Você nao pode embarcar")
}

console.log(listaDeDestinos);



// UMA NOVA FORMA ABAIXO DE ESCREVER O CÓDIGO MAIS CURTO E DIRETO


const idadeComprador1 = 15;
const estaAcompanhada1 = true;


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1,1); // serve para remover um item da lista
} else {
    console.log("Não é maior de idade");    
}

console.log(listaDeDestinos);

