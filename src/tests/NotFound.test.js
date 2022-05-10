import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Desafio 4', () => {
  test('Teste se a página contém um heading h2', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina-desconhecida');

    const heading = screen.getByText((content) => content.startsWith('Page requested'));
    expect(heading).toBeInTheDocument();
  });
  test('Teste se a página mostra a imagem', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina-desconhecida');

    const gifNotFoundLink = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const gifNotFound = screen.getByRole('img', { name: /pikachu/i });
    expect(gifNotFound).toBeInTheDocument();
    expect(gifNotFound.src).toContain(gifNotFoundLink);
  });
});
