// Uma Promise representa o possível retorno do furturo.
// É um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. 
// Ela pode estar em três estados: "pending" (pendente), "fulfilled" (cumprida) ou "rejected" (rejeitada).

function putWaterToBoil(callback){
    console.log('Boil the water.');
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We have boiled water');
            resolve();
        }, 5000)
    })
}

function getReatyToMakeCoffee(){
    console.log('Grind coffee beans.');
    console.log('Line the basket of your coffe maker with a filter');
    console.log('Wet the filter, and let it drain into your cup.');
    console.log('Discard the water in the cup.');
    console.log('Measure the ground coffee into the wet filter.');
}

function makeCoffee(){
    console.log('Pour water to wet the ground beans and drain into your cup.');
}

// Se der tudo certo durante o processo, vai chamando as outras funções

// putWaterToBoil()
// .then(getReatyToMakeCoffee)
// .then(makeCoffee)
// .then(() => {
//     console.log('Your coffee is ready!')
// })

// Caso ocorra algum erro, retorna o erro

// .catch((error) => {
//     console.error('Something went wrong: ', error)
// })


// Espera as próximas funções serem concluidas
async function makeCoffeeRoutine() {
    try{
        await putWaterToBoil();
        await getReatyToMakeCoffee();
        await makeCoffee();
        console.log('Your coffee is ready');
    }catch (error){
        console.error('Something went wrong: ', error);
    }
}

makeCoffeeRoutine();