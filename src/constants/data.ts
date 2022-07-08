//Types
import {
  NavigatonDrawerItemsInterface,
  NewsItemInterface,
} from '../types/types';

//Consntants
import NEWS_IMAGE from 'assets/images/home/news_image.png';

export const URLS = {
  HOME: '/',
  ADVANTAGES: '/advantages',
};

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

//Footer Contact Numbers
export const FOOTER_CONTACT_NUMBERS = [
  '+375-17-306-52-59',
  '+375-17-306-52-71',
  '+375-29-691-38-08',
];

//404 page error messages
export const ERROR_MESSAGES = [
  'A 404 error has occurred. To continue:',
  'Reload current page, or',
  'Navigate to the home page. Also check your internet connection and reload current page.',
];

export const LATEST_NEWS: NewsItemInterface[][] = [
  [
    {
      title:
        'BSEU and the Institute of Regional Economics of the Russian Academy of Sciences signed a cooperation agreement',
      image: NEWS_IMAGE,
      date: new Date(),
    },
    {
      title:
        'BSEU and the Institute of Regional Economics of the Russian Academy of Sciences signed a cooperation agreement',
      image: NEWS_IMAGE,
      date: new Date(),
    },
    {
      title:
        'BSEU and the Institute of Regional Economics of the Russian Academy of Sciences signed a cooperation agreement',
      image: NEWS_IMAGE,
      date: new Date(),
    },
  ],
  [
    {
      title:
        'BSEU and the Institute of Regional Economics of the Russian Academy of Sciences signed a cooperation agreement',
      image: NEWS_IMAGE,
      date: new Date(),
    },
    {
      title:
        'BSEU and the Institute of Regional Economics of the Russian Academy of Sciences signed a cooperation agreement',
      image: NEWS_IMAGE,
      date: new Date(),
    },
    {
      title:
        'BSEU and the Institute of Regional Economics of the Russian Academy of Sciences signed a cooperation agreement',
      image: NEWS_IMAGE,
      date: new Date(),
    },
  ],
];
