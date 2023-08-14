console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`

);

listaDeDestinos.push(`Curitiba`) //adicionando um item a lista
console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);  // serve para remover um item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // vai mostrar apenas o nome da posição 1 que é Sao paulo



