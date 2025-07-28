const prompt = require('prompt-sync')();

let numTabuada = Number(prompt("Insira o número da tabuada que deseja saber: "));

let contadora = 1;

while(contadora <= 10){
    console.log(`${numTabuada} x ${contadora} = ${numTabuada * contadora}`);
    contadora++;
}

