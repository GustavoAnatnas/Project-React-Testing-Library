import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Desafio 6', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const namePoke = screen.getByTestId('pokemon-name');
    expect(namePoke).toHaveTextContent('Pikachu');

    const typePoke = screen.getByTestId('pokemon-type');
    expect(typePoke).toHaveTextContent('Electric');

    const averageWeight = screen.getByText(/Average weight: 6.0 kg/i);
    expect(averageWeight).toBeInTheDocument();

    const imgLink = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(imgLink);
  });
  test('Teste se o card do pokémon indicado na Pokédex contém link de navegação', () => {
    renderWithRouter(<App />);
    const navLink = screen.getByRole('link', { name: /more/i });
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveAttribute('href', '/pokemons/25');
  });
  test('Teste se ao clicar no link de navegação, é feito o redirecionamento', () => {
    const { history } = renderWithRouter(<App />);
    const navLink = screen.getByRole('link', { name: /more/i });
    expect(navLink).toBeInTheDocument();
    userEvent.click(navLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const sumary = screen.getByText(/summary/i);
    expect(sumary).toBeInTheDocument();
  });

  test('Teste se existe um ícone de estrela nos pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const navLink = screen.getByRole('link', { name: /more/i });
    expect(navLink).toBeInTheDocument();
    userEvent.click(navLink);

    const verifyFavs = screen.getByLabelText(/pokémon fav/i);
    expect(verifyFavs).toBeInTheDocument();
    userEvent.click(verifyFavs);

    const verifyFavIcon = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(verifyFavIcon).toHaveAttribute('src', '/star-icon.svg');
    expect(verifyFavIcon).toBeInTheDocument();
  });
});
