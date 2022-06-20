//Types
import { NavigatonDrawerItemsInterface } from './types';
import { BUTTON_SIZE, BUTTON_VARIANT } from 'constants/enum';

//Consntants
import { TRUE_BLUE } from './colors';

//Icons
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { ReactComponent as ENLanguageButtonSvg } from 'assets/images/EN_language_button.svg';

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
  [BUTTON_SIZE.SMALL]: {},
  [BUTTON_SIZE.MEDIUM]: {},
  [BUTTON_SIZE.LARGE]: {
    padding: '0 24px',
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '23px',
    fontFamily: 'Cera Pro Bold',
  },
};

//Constants
import WHITE_WAVE from '../assets/images/wave.svg';
import BLUE_WAVE from '../assets/images/blue_wave.svg';
import { TRUE_BLUE } from './colors';

export const URLS = {
  HOME: '/',
  ADVANTAGES: '/advantages',
};

export const NAVIGATION_ICON_BUTTON_SIZES = { width: 35, height: 35 };

export const NAVIGATION_ACTIONS_ICONS = [
  SearchIcon,
  RemoveRedEyeOutlinedIcon,
  ENLanguageButtonSvg,
];

export const NAVIGATION_DRAWER_ITEMS: NavigatonDrawerItemsInterface = {
  'Why Belarus': [
    {
      name: 'Advantages of Studying in Belarus',
      link: URLS.ADVANTAGES,
    },
    {
      name: 'Development of Higher Education in the Republic of Belarus',
      link: '/',
    },
    {
      name: 'Famous Belarusians',
      link: '/',
    },
    {
      name: 'Photo and Video',
      link: '/',
    },
  ],
  'EDUCATION IN BELARUS': [],
  'HOW TO ENTER THE UNIVERSITY?': [],
  'LIFE IN BELARUS': [],
  NEWS: [],
  'EVENT CALENDAR': [],
};

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
