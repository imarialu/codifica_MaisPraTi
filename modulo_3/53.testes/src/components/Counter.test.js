import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import Counter from './Counter';

describe('Counter', () => {
    it('Deve renderizar o contador inicialmente com 0.', () => {
        render(<Counter/>)

        const countElement = screen.getByTestId('count');

        expect(countElement).toHaveTextContent(0);
    })

    it("Deve incrementar o contador quando o botão for clicado.", () => {
        render(<Counter/>);

        const countElement = screen.getByTestId('count');
        const buttonElement = screen.getByText('Incrementar');
        
        fireEvent.click(buttonElement);
        expect(countElement).toHaveTextContent('1');

        fireEvent.click(buttonElement)
        expect(countElement).toHaveTextContent('2');
    })
})
