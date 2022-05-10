import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Desafio 5', () => {
  test('Teste se a página contém um heading com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const h2Text = screen.getByText(/encountered/i);
    expect(h2Text).toBeInTheDocument();
  });
  test('Teste se é exibido o próx pokémon quando o botão Próximo pokémon é click', () => {
    renderWithRouter(<App />);
    const bttn = screen.getByRole('button', { name: /próx/i });
    expect(bttn).toBeInTheDocument();

    userEvent.click(bttn);

    const mudaPoke = screen.getAllByTestId('pokemon-name');
    expect(mudaPoke[0]).toBeInTheDocument();
  });
  test('Teste se é mostrado apenas um pokémon por vez. ', () => {
    renderWithRouter(<App />);
  });
});