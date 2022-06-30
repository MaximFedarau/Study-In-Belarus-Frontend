//RTL
import { render, screen } from '@testing-library/react';

//Components
import App from './App';

//React Navigation
import { BrowserRouter } from 'react-router-dom';

test('App has header and footer.', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
});

// ! Add tests for routes.
