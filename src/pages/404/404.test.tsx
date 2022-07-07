//Types
import { PAGES_TITLES } from 'types/enum';

//RTL
import { render } from '@testing-library/react';

//Page
import Page404 from 'pages/404/404.page';

describe('404 page attributes working correcty.', () => {
  test('404 page title is correct.', () => {
    console.log(document);
    expect(document.title).toBe(PAGES_TITLES.NOT_FOUND);
  });
});

// ! Warning. I added snapshot checking here, because I don't want the page to ever change much.
describe('404 page UI is correct.', () => {
  const page = render(<Page404 />);
  expect(page).toMatchSnapshot();
});
