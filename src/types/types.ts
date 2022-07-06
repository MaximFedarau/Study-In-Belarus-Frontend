import React from 'react';
import { DEFAULT_SIZES } from './enum';

// Interface for Styles in Media Queries (CSS) Utils
export type MEDIA_QUERIES_STYLES = React.CSSProperties | { [key: string]: any };

//Interface for Drawer Link Component
interface DrawerLinkInterface {
  link: string;
  name: string;
}

//Inteface for NAVIGATION_DRAWER_ITEMS
export interface NavigatonDrawerItemsInterface {
  [key: string]: DrawerLinkInterface[];
}

//Interface for Home page Bubbles
export type HomeBubblesStylesInterface = {
  [key in DEFAULT_SIZES]: {
    container: React.CSSProperties;
    mainText: React.CSSProperties;
    subtext: React.CSSProperties;
  };
};

//Interface for Carousel Student Interface
export interface CarouselStudentInterface {
  name: string;
  speech: string;
  image: string;
  country: string;
  education: string;
}

//Interface for News
export interface NewsItemInterface {
  title: string;
  date?: Date;
  image: string;
}
