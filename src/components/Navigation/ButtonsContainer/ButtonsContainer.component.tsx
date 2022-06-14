//Types
import React, { ReactElement } from 'react';

//Constants
import { NAVIGATION_ICON_BUTTON_SIZES } from '../../../constants/constants';

//Components
import { NavigationButtonsContainer } from '../../Defaults/Container/Container.styles';
import IconButton from '../../Defaults/IconButton/IconButton.component';
import Drawer from '../Drawer/Drawer.component';

//Icons
import { ReactComponent as DrawerButtonSvg } from '../../../assets/images/drawer_button.svg';
import ActionsContainer from '../ActionsContainer/ActionsContainer.component';

export default function ButtonsContainer(): ReactElement {
  const [drawerState, setDrawerState] = React.useState<boolean>(false);

  function onClickDrawerButtonHandler() {
    setDrawerState(true);
  }

  function onCloseDrawerHandler() {
    setDrawerState(false);
  }

  return (
    <NavigationButtonsContainer>
      <Drawer
        open={drawerState}
        anchor="right"
        onCloseHandler={onCloseDrawerHandler}
      />
      <ActionsContainer />
      <IconButton
        {...NAVIGATION_ICON_BUTTON_SIZES}
        onClickHandler={onClickDrawerButtonHandler}
      >
        <DrawerButtonSvg />
      </IconButton>
    </NavigationButtonsContainer>
  );
}
