//Types
import { ReactElement } from 'react';

//Constants
import { NAVIGATION_DRAWER_ITEMS } from 'constants/data';

//Components
import NavigationItem from '../NavigationItem/NavigationItem.component';
import { ArticleNavigationContainer } from 'components/Defaults/Container/Container.styles';

export default function Navigation(): ReactElement {
  return (
    <ArticleNavigationContainer>
      {NAVIGATION_DRAWER_ITEMS['Why Belarus'].map((item, index) => {
        return (
          <NavigationItem key={item.name} index={index + 1} link={item.link}>
            {item.name}
          </NavigationItem>
        );
      })}
    </ArticleNavigationContainer>
  );
}
