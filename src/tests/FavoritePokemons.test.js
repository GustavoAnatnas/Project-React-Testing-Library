import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Desafio 3', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    const { history } = renderWithRouter(<App />);
    const pokémonsFavoritados = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(pokémonsFavoritados).toBeInTheDocument();
    userEvent.click(pokémonsFavoritados);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');

    const noFavorite = screen.getByText(/no favorite/i);
    expect(noFavorite).toBeInTheDocument();
  });
  test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more/i });
    expect(details).toBeInTheDocument();

    userEvent.click(details);

    const isFav = screen.getByRole('checkbox', { name: /pokémon/i });
    expect(isFav).toBeInTheDocument();

    userEvent.click(isFav);

    const goToFav = screen.getByRole('link', { name: /favorite/i });
    expect(goToFav).toBeInTheDocument();

    userEvent.click(goToFav);

    const dataTestName = screen.getAllByTestId('pokemon-name');
    expect(dataTestName[0]).toBeInTheDocument();
  });
});
