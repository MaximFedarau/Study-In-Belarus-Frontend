//Types
import { ReactElement } from 'react';

//Constants
import { NavigationPaperStyle } from 'components/Defaults/Drawer/Drawer.styles';

//Components
import { NavigationDrawerLoginContainer } from 'components/Defaults/Container/Container.styles';
import { DrawerButton } from 'components/Defaults/Button/Button.styles';
import IconButton from 'components/Defaults/IconButton/IconButton.component';

//MUI Components
import { Drawer as MUIDrawer } from '@mui/material';

//Icons
import CloseIcon from 'assets/images/close.svg';
import DrawerItemsList from 'components/Navigation/DrawerItemsList/DrawerItemsList.component';

//Interface for Props
interface DrawerProps {
  anchor?: 'bottom' | 'left' | 'right' | 'top';
  open?: boolean;
  onCloseHandler?: () => void;
}

export default function Drawer({
  anchor,
  open,
  onCloseHandler,
}: DrawerProps): ReactElement {
  return (
    <MUIDrawer
      PaperProps={NavigationPaperStyle}
      anchor={anchor}
      open={open}
      variant="persistent"
      transitionDuration={750}
    >
      <NavigationDrawerLoginContainer>
        <DrawerButton>login for Universities</DrawerButton>
        <IconButton width={48} height={48} onClickHandler={onCloseHandler}>
          <img src={CloseIcon} />
        </IconButton>
      </NavigationDrawerLoginContainer>
      <DrawerItemsList />
    </MUIDrawer>
  );
}
