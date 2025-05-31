// Faça uma função que inverta uma string

// function inverteString(str){
//     return str.split('').reverse().join(''); // split separa os caracteres, reverse reverte e join junta os caracteres novamente
// }

// console.log(inverteString("CHUVA"));

// OU

function reverseString(str){
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("Beijos rihanna"))