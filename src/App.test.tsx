//RTL
import { render } from '@testing-library/react';

//Constants
import { PAGES_TITLES } from 'types/enum';

//Components
import App from './App';

//React Navigation
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('App has correct routing.', () => {
  test('Correct 404 page Route.', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>,
    );
    expect(document.title).toBe(PAGES_TITLES.NOT_FOUND);
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
