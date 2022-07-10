//Types
import { PAGES_TITLES } from 'types/enum';

//RTL
import { render, screen } from '@testing-library/react';

//Components
import App from './App';

//React Navigation
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Correct routing for pages with header and footer.', () => {
  afterEach(() => {
    // ! checking for at least one header and footer.
    const headers = screen.getAllByRole('banner');
    expect(headers.length).toBeGreaterThanOrEqual(1);
    const footers = screen.getAllByRole('contentinfo');
    expect(footers.length).toBeGreaterThanOrEqual(1);
  });

  test('Correct Home page Route.', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(document.title).toBe(PAGES_TITLES.HOME);
  });

  test('Correct Advantages page Route.', () => {
    render(
      <MemoryRouter initialEntries={['/advantages']}>
        <App />
      </MemoryRouter>,
    );
    expect(document.title).toBe(PAGES_TITLES.ADVANTAGES_OF_STUDYING_IN_BELARUS);
  });
});

describe('Correct routing for pages without header and footer.', () => {
  test('Correct 404 page Route.', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>,
    );
    expect(document.title).toBe(PAGES_TITLES.NOT_FOUND);
  });
});
