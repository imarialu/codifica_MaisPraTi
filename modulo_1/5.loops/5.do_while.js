let contador = 11

do{ // Executa só uma vez, executa e depois "pensa"
    console.log(contador, contador++)
}while(contador < 10)

while(contador < 10){ // Não irá executar, pois contador não é menor que 10
    console.log(contador, contador++)
}