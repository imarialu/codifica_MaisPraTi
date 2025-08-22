import { describe, it, expect } from 'vitest';
import { soma } from './soma';

describe('soma', () => {
    it('Deve retornar a soma de dois números.', () => {
        expect(soma(5, 3)).toBe(8);
    })
})