import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Desafio 2', () => {
  test('Teste se a página contém as informações sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<App />);
    const About = screen.getByRole('link', { name: /about/i });
    expect(About).toBeInTheDocument();

    userEvent.click(About);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const text = screen.getByAltText('Pokédex');
    expect(text).toBeInTheDocument();
  });
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    const About = screen.getByRole('link', { name: /about/i });
    expect(About).toBeInTheDocument();

    userEvent.click(About);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const textH2 = screen.getByText(/About Pokédex/i);
    expect(textH2).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<App />);
    const About = screen.getByRole('link', { name: /about/i });
    expect(About).toBeInTheDocument();

    userEvent.click(About);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const p1 = screen.getByText(/This application/i);
    expect(p1).toBeInTheDocument();

    const p2 = screen.getByText(/One can/i);
    expect(p2).toBeInTheDocument();
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    const { history } = renderWithRouter(<App />);
    const About = screen.getByRole('link', { name: /about/i });
    expect(About).toBeInTheDocument();

    userEvent.click(About);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const imgLink = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByRole('img', { name: /pokédex/i });
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(imgLink);
  });
});
