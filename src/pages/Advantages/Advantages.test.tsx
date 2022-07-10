//Types
import { PAGES_TITLES } from 'types/enum';

//Constants
import { NAVIGATION_DRAWER_ITEMS } from 'constants/data';

//RTL
import { render, screen, fireEvent } from '@testing-library/react';

//Page
import Advantages from 'pages/Advantages/Advantages.page';

//React Router
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
  // * setup for each test
  console.error = jest.fn();
  render(
    <BrowserRouter>
      <Advantages />
    </BrowserRouter>,
  );
});

describe('Advantages page attributes working correctly.', () => {
  test('Advantages page title is correct.', () => {
    expect(document.title).toBe(PAGES_TITLES.ADVANTAGES_OF_STUDYING_IN_BELARUS);
  });
});

describe('Advatanges page UI is correct.', () => {
  test('Advantages page has text content.', () => {
    const textContent = screen.getByRole('article');
    expect(textContent).toBeInTheDocument(); // ! expect only ONE article or general text content
  });

  test('Advantages page has aside content.', () => {
    const asideContent = screen.getAllByRole('complementary');
    expect(asideContent.length).toBeGreaterThanOrEqual(2); // !  I want at least 2 complementary elements
  });

  test('Advantages page has navigation.', () => {
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument(); // ! expect only ONE navigation
  });
});

describe('Advatanges page UX is correct.', () => {
  test('Advantages page has links.', () => {
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(2); // ! I want at least 2 links
  });
  test('Advantages page links are working.', () => {
    const links = screen.getAllByRole('link');
    const linksData = NAVIGATION_DRAWER_ITEMS['Why Belarus'];
    links.forEach((link, index) => {
      expect(link.textContent).toBe(String(index + 1) + linksData[index].name); // * Checking links (Bubble + message) content - may change
      fireEvent.click(link);
      expect(window.location.pathname).toBe(linksData[index].link); // ! Checking links are redirecting to correct page.
    });
  });
});
