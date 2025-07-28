const Calculadora = require('../src/calculadora');

describe('Testando a classe Calculadora', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculadora();
    });

    test('Deve somar dois números corretamente: ', () => {
        expect(calc.somar(2, 3)).toBe(5);
        expect(calc.somar(-1, 1)).toBe(0);
    });

    test('Deve subtrair dois números corretamente: ', () => {
        expect(calc.subtrair(8, 5)).toBe(3);
        expect(calc.subtrair(10, 6)).toBe(4);
    })

    test('Deve multiplicar dois números corretamente: ', () => {
        expect(calc.multiplicar(3, 3)).toBe(9);
        expect(calc.multiplicar(5, 5)).toBe(25);
    })

    test('Deve dividir dois números corretamente: ', () => {
        expect(calc.dividir(9, 3)).toBe(3);
        expect(calc.dividir(16, 4)).toBe(4);
    })
})