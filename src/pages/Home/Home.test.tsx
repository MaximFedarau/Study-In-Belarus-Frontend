//Types
import { PAGES_TITLES } from 'types/enum';

//Constants
import {
  HOME_MOBILE_BUBBLES,
  POINTS_OF_STUDYING,
  CAROUSEL_STUDENTS,
} from 'constants/ui';

//RTL
import {
  render,
  screen,
  fireEvent,
  getAllByRole,
  getByText,
  getByAltText,
} from '@testing-library/react';

//Page
import Home from 'pages/Home/Home.page';

//React Router
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
  // * setup for each test
  console.error = jest.fn();
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
});

describe('Home page attributes are working correctly.', () => {
  test('Home page title is correct.', () => {
    expect(document.title).toBe(PAGES_TITLES.HOME);
  });
});

describe('Home page UI is correct.', () => {
  test("Bubble's texts are correct.", () => {
    HOME_MOBILE_BUBBLES.forEach((bubble) => {
      const pattern = new RegExp(bubble, 'i');
      const bubbleText = screen.getAllByText(pattern);
      expect(bubbleText.length).toBeGreaterThanOrEqual(2); // ! I want at least 2 bubbles with text - for mobile and desktop
    });
  });

  test('Home page has points of studying.', () => {
    POINTS_OF_STUDYING.forEach((point) => {
      const pattern = new RegExp(point.text, 'i');
      const pointText = screen.getAllByText(pattern);
      expect(pointText.length).toBeGreaterThanOrEqual(1); // ! I want at least ONE point of studying - for desktop+mobile
    });
  });

  test('Home page has carousel.', () => {
    const carousel = screen.getByTestId('carousel');
    expect(carousel).toBeInTheDocument(); // ! expect only ONE carousel
    const firstStudentName = getByText(carousel, CAROUSEL_STUDENTS[0].name);
    const firstStudentAvatar = getByAltText(
      carousel,
      CAROUSEL_STUDENTS[0].name,
    );
    expect(firstStudentName).toBeInTheDocument();
    expect(firstStudentAvatar).toBeInTheDocument();
    // ! check if it has correct student
    const buttons = getAllByRole(carousel, 'button');
    expect(buttons.length).toBe(2); // ! I want ONLY 2 buttons
  });

  test('Home page has Latest News section.', () => {
    const latestNews = screen.getByText(/Latest News/i);
    const allNews = screen.getByText(/All News/i);
    // ! expect only ONE latest news section
    expect(latestNews).toBeInTheDocument();
    expect(allNews).toBeInTheDocument();
    // * Also, when all news have different content, I will check it here.
  });
});

describe('Home page UX is correct.', () => {
  test('Carousel previous button is working.', () => {
    const carousel = screen.getByTestId('carousel');
    const buttons = getAllByRole(carousel, 'button');
    const previousButton = buttons[0];
    expect(previousButton).toBeInTheDocument(); // ! expect only ONE previous button
    fireEvent.click(previousButton);
    const lastStudentName = getByText(
      carousel,
      CAROUSEL_STUDENTS[CAROUSEL_STUDENTS.length - 1].name,
    );
    const lastStudentAvatar = getByAltText(
      carousel,
      CAROUSEL_STUDENTS[CAROUSEL_STUDENTS.length - 1].name,
    );
    // ! check if it has correct student
    expect(lastStudentName).toBeInTheDocument();
    expect(lastStudentAvatar).toBeInTheDocument();
  });

  test('Carousel next button is working.', () => {
    const carousel = screen.getByTestId('carousel');
    const buttons = getAllByRole(carousel, 'button');
    const nextButton = buttons[1];
    expect(nextButton).toBeInTheDocument(); // ! expect only ONE next button
    fireEvent.click(nextButton);
    const firstStudentName = getByText(carousel, CAROUSEL_STUDENTS[1].name);
    const firstStudentAvatar = getByAltText(
      carousel,
      CAROUSEL_STUDENTS[1].name,
    );
    // ! check if it has correct student
    expect(firstStudentName).toBeInTheDocument();
    expect(firstStudentAvatar).toBeInTheDocument();
  });
});
