import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Desafio 1', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const link1 = screen.getByRole('link', { name: /Home/i });
    expect(link1).toBeInTheDocument();
    const link2 = screen.getByRole('link', { name: /About/i });
    expect(link2).toBeInTheDocument();
    const link3 = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(link3).toBeInTheDocument();
  });
  it('Teste se a aplicação é redirecionada para a página inicial ao clicar Home', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeInTheDocument();
    userEvent.click(home);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  it('Teste se a aplicação é redirecionada para a página de About ao click About', () => {
    const { history } = renderWithRouter(<App />);
    const About = screen.getByRole('link', { name: /about/i });
    expect(About).toBeInTheDocument();
    userEvent.click(About);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  it('Teste se a aplicação é redirecionada para a página de About ao click About', () => {
    const { history } = renderWithRouter(<App />);
    const pokémonsFavoritados = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(pokémonsFavoritados).toBeInTheDocument();
    userEvent.click(pokémonsFavoritados);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  it('Teste se a aplicação é redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina-desconhecida');

    const notFound = screen.getByText((content) => content.startsWith('Page requested'));
    expect(notFound).toBeInTheDocument();
  });
});
