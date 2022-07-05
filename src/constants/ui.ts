//Types
import { CarouselStudentInterface } from '../types/types';

//Consntants
import BEZZOT_AMANOV from 'assets/images/home/bezzot_amanov.svg';

//Icons
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { ReactComponent as ENLanguageButtonSvg } from 'assets/images/navigation/EN_language_button.svg';

import { ReactComponent as BookSVG } from 'assets/images/home/icons/book.svg';
import { ReactComponent as BriefcaseSVG } from 'assets/images/home/icons/briefcase.svg';
import { ReactComponent as CoffeeSVG } from 'assets/images/home/icons/coffee.svg';
import { ReactComponent as UniversitySVG } from 'assets/images/home/icons/university.svg';

export const NAVIGATION_ACTIONS_ICONS = [
  SearchIcon,
  RemoveRedEyeOutlinedIcon,
  ENLanguageButtonSvg,
];

export const HOME_MOBILE_BUBBLES = [
  'Choose Your profession, university and programme',
  'Learn about admission criteria and learning environment',
  'Prepare the documents and apply',
  'Receive your invitation and get your visa',
  'Pass the interview',
];

export const POINTS_OF_STUDYING = [
  {
    icon: UniversitySVG,
    text: 'UNIVERSITIES OF BELARUS',
  },
  {
    icon: BookSVG,
    text: 'LEARNING BENEFITS',
  },
  {
    icon: BriefcaseSVG,
    text: 'WORK FOR INTERNATIONAL STUDENTS',
  },
  {
    icon: CoffeeSVG,
    text: 'LIFE IN BELARUS',
  },
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
  {
    name: "Bezzot Amanov's brother",
    speech: 'I completely agree with my brother😎',
    image: BEZZOT_AMANOV,
    country: 'Turkmenistan ',
    education: 'Student of MSU A. Kuleshova',
  },
  {
    name: "Bezzot Amanov's third brother",
    speech: 'I completely agree with my first and second brothers😎😁',
    image: BEZZOT_AMANOV,
    country: 'Turkmenistan ',
    education: 'Student of MSU A. Kuleshova',
  },
];
