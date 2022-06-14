//Types
import React, { ReactElement } from 'react';

//Constants
import { NAVIGATION_DRAWER_ITEMS } from '../../../constants/constants';

//Components
import { DrawerMainText, DrawerText } from '../../Defaults/Text/Text.styles';
import { NavigationDrawerLinksContainer } from '../../Defaults/Container/Container.styles';

//React Router
import { Link } from 'react-router-dom';

//Interface for Props
interface DrawerItemProps {
  children: string;
}

export default function DrawerItem({
  children,
}: DrawerItemProps): ReactElement {
  const [additionalInfoVisibility, setAdditionalInfoVisibility] =
    React.useState<boolean>(false);

  function onMainTextClickHandler() {
    setAdditionalInfoVisibility(!additionalInfoVisibility);
  }

  return (
    <div>
      <DrawerMainText
        isSelected={additionalInfoVisibility}
        onClick={onMainTextClickHandler}
      >
        {children}
      </DrawerMainText>
      <NavigationDrawerLinksContainer isSelected={additionalInfoVisibility}>
        {NAVIGATION_DRAWER_ITEMS[children].map((item) => (
          <Link to={item.link}>
            <DrawerText>{item.name}</DrawerText>
          </Link>
        ))}
      </NavigationDrawerLinksContainer>
    </div>
  );
}
