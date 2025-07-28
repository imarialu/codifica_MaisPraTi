// O assincronismo permite que o programa inicie uma tarefa de longa duração 
// sendo capaz de responder a outros eventos enquanto essa tarefa é executada, 
// ao invés de esperar a mesma ser concluída.

function putWaterToBoil(callback){
    console.log('Boil the water.');
    // Depois de 5 segundos chama a função makeCoffee
    setTimeout(() => {
        console.log('We have boiled water');
        callback();
    }, 5000)
}

function getReatyToMakeCoffee(callback){
    console.log('Grind coffee beans.');
    console.log('Line the basket of your coffe maker with a filter');
    console.log('Wet the filter, and let it drain into your cup.');
    console.log('Discard the water in the cup.');
    console.log('Measure the ground coffee into the wet filter.');
    callback();
}

function makeCoffee(callback){
    console.log('Pour water to wet the ground beans and drain into your cup.');
    callback();
}

// Passando as callbacks para as funções (callback hell)
putWaterToBoil(() => {
    getReatyToMakeCoffee(() => {
        makeCoffee(() => {
            console.log('Your coffee is ready!')
        })
    })
})
