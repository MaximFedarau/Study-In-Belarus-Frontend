//Types
import { ReactElement } from 'react';

//Constants
import { NAVIGATION_DRAWER_ITEMS } from 'constants/data';

//Components
import { NavigationDrawerItemsListContainer } from 'components/Defaults/Container/Container.styles';
import DrawerItem from 'components/Navigation/DrawerItem/DrawerItem.component';

export default function DrawerItemsList(): ReactElement {
  return (
    <NavigationDrawerItemsListContainer>
      {Object.keys(NAVIGATION_DRAWER_ITEMS).map((item) => (
        <DrawerItem key={item}>{item}</DrawerItem>
      ))}
    </NavigationDrawerItemsListContainer>
  );
}
