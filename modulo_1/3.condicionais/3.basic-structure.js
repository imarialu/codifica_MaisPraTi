let num1 = 5
let num2 = 7
let num3 = 1

if((num1 > num2) && (num1 > num3)){
    console.log("O primeiro número é o maior!")
}else if((num2 > num1) && (num2 > num3)){
    console.log("O segundo número é o maior!")
}else if((num3 > num2) && (num3 > num1)){
    console.log("O terceiro número é o maior!")
}else{
    console.log("Os números são iguais ou há empate entre dois ou mais")
}
