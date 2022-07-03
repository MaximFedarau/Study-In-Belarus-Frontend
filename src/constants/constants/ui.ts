//Types
import { CarouselStudentInterface } from '../types/types';

//Consntants
import BEZZOT_AMANOV from 'assets/images/home/bezzot_amanov.svg';

//Icons
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { ReactComponent as ENLanguageButtonSvg } from 'assets/images/navigation/EN_language_button.svg';

export const NAVIGATION_ACTIONS_ICONS = [
  SearchIcon,
  RemoveRedEyeOutlinedIcon,
  ENLanguageButtonSvg,
];

//Home Page News

export const CAROUSEL_STUDENTS: CarouselStudentInterface[] = [
  {
    name: 'Bezzot Amanov',
    speech:
      'Reputable teachers and scientists make Belarusian education highly valed in our country',
    image: BEZZOT_AMANOV,
    country: 'Turkmenistan ',
    education: 'Student of MSU A. Kuleshova',
  },
];
