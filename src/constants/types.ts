//Interface for Drawer Link Component
interface DrawerLinkInterface {
  link: string;
  name: string;
}

//Inteface for NAVIGATION_DRAWER_ITEMS
export interface NavigatonDrawerItemsInterface {
  [key: string]: DrawerLinkInterface[];
}

//Interface for News
export interface NewsItemInterface {
  title: string;
  date?: Date;
  image: string;
}
