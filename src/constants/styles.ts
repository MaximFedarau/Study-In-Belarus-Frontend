//Types
import { HomeBubblesStylesInterface } from '../types/types';
import { DEFAULT_SIZES, BUTTON_VARIANT } from 'types/enum';

//Consntants
import { TRUE_BLUE } from './colors';
import WHITE_WAVE from 'assets/images/footer/wave.svg';
import BLUE_WAVE from 'assets/images/footer/blue_wave.svg';

import { smallTabletCSS } from 'utils/styles/smallTabletCSS';

//Icons
import { URLS } from './data';
import { smallMobileCSS } from 'utils/styles/smallMobileCSS';

export const BUTTON_VARIANT_STYLING = {
  [BUTTON_VARIANT.CONTAINED]: {
    backgroundColor: TRUE_BLUE,
    color: 'white',
  },
  [BUTTON_VARIANT.OUTLINED]: {
    backgroundColor: 'white',
    color: TRUE_BLUE,
    border: `1px solid ${TRUE_BLUE}`,
  },
};

export const BUTTON_SIZE_STYLING = {
  [DEFAULT_SIZES.SMALL]: {},
  [DEFAULT_SIZES.MEDIUM]: {},
  [DEFAULT_SIZES.LARGE]: {
    padding: '0 24px',
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '23px',
    fontFamily: 'Cera Pro Bold',
  },
};

export const NAVIGATION_ICON_BUTTON_SIZES = { width: 35, height: 35 };

//Footer Background color depending on Path
export const FOOTER_BACKGROUND_BY_PATH = {
  [URLS.HOME]: {
    image: WHITE_WAVE,
    mobileBackground: 'white',
  },
  [URLS.ADVANTAGES]: {
    image: BLUE_WAVE,
    mobileBackground: TRUE_BLUE,
  },
};

//Footer Network Icons
export const FOOTER_NETWORK_ICON_OPTIONS = {
  style: { width: '53px', height: '53px', cursor: 'pointer' },
};

// Home Page Bubbles Styling
export const BUBBLES_TEXT_STYLING: HomeBubblesStylesInterface = {
  [DEFAULT_SIZES.SMALL]: {
    container: {
      maxWidth: 314,
      maxHeight: 314,
    },
    mainText: {
      fontSize: '56px',
    },
    subtext: {
      minWidth: 210,
    },
  },
  [DEFAULT_SIZES.MEDIUM]: {
    container: {
      maxWidth: 461,
      maxHeight: 461,
    },
    mainText: {
      fontSize: '56px',
    },
    subtext: {
      maxWidth: 150,
    },
  },
  [DEFAULT_SIZES.LARGE]: {
    container: {
      maxWidth: 499,
      maxHeight: 499,
    },
    mainText: {
      fontSize: '56px',
    },
    subtext: {
      maxWidth: 300,
    },
  },
};

//News Item Styling depending on Size
export const NEWS_ITEM_STYLING = {
  [DEFAULT_SIZES.SMALL]: {
    width: '97%',
    height: '12.4vw',
    fontSize: 15,
    maxWidth: 400,
    maxHeight: 250,
    ...smallTabletCSS({
      height: '25vw',
      fontSize: '2vw',
      maxHeight: 300,
    }),
    ...smallMobileCSS({
      height: '23.5vw',
      fontSize: '2vw',
      maxHeight: 300,
    }),
  },
  [DEFAULT_SIZES.MEDIUM]: {},
  [DEFAULT_SIZES.LARGE]: {
    width: '97%',
    height: '27vw',
    fontSize: 24,
    maxWidth: 850,
    maxHeight: 550,
    ...smallTabletCSS({
      height: '55.5vw',
      fontSize: '4vw',
      maxHeight: 600,
    }),
  },
};

//Advantages Page Image Sizes
export const ADVANTAGES_IMAGE_SIZES = {
  style: { width: '100%', height: '100%' },
};

//Home Page Main Image Size
export const HOME_MAIN_IMAGE_SIZES = {
  style: { width: '100%', height: '100%' },
};
