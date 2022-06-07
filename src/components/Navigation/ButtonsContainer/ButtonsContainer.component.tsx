//Types
import { ReactElement } from 'react';

//Constants
import { NAVIGATION_ICON_BUTTON_SIZES } from '../../../constants/constants';

//Components
import { NavigationButtonsContainer } from '../../Defaults/Container/Container.styles';
import IconButton from '../../Defaults/IconButton/IconButton.component';

//Icons
import { ReactComponent as DrawerButtonSvg } from '../../../assets/images/drawer_button.svg';
import ActionsContainer from '../ActionsContainer/ActionsContainer.component';

export default function ButtonsContainer(): ReactElement {
  return (
    <NavigationButtonsContainer>
      <ActionsContainer />
      <IconButton {...NAVIGATION_ICON_BUTTON_SIZES}>
        <DrawerButtonSvg />
      </IconButton>
    </NavigationButtonsContainer>
  );
}
