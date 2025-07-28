const soma = require('../src/soma'); // Exporta a função

// Testa
test('Soma 2 + 3 deve ser igual a 5', () => { 
    expect(soma(2, 3)).toBe(5); // Espero que 2 + 3 seja 5
})