//Types
import React, { ReactElement } from 'react';

//Constants
import { NAVIGATION_ICON_BUTTON_SIZES } from 'constants/styles';

//Components
import { NavigationButtonsContainer } from 'components/Defaults/Container/Container.styles';
import IconButton from 'components/Defaults/IconButton/IconButton.component';
import Drawer from 'components/Navigation/Drawer/Drawer.component';

//Icons
import { ReactComponent as DrawerButtonSvg } from 'assets/images/navigation/drawer_button.svg';
import ActionsContainer from 'components/Navigation/ActionsContainer/ActionsContainer.component';

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
