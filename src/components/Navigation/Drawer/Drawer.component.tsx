//Types
import { ReactElement } from 'react';

//Constants
import { NavigationPaperStyle } from 'components/Defaults/Drawer/Drawer.styles';
import { BUTTON_VARIANT, DEFAULT_SIZES } from 'constants/enum';

//Components
import { NavigationDrawerLoginContainer } from 'components/Defaults/Container/Container.styles';
import IconButton from 'components/Defaults/IconButton/IconButton.component';
import Button from 'components/Defaults/Button/Button.component';

//MUI Components
import { Drawer as MUIDrawer } from '@mui/material';

//Icons
import CloseIcon from 'assets/images/navigation/close.svg';
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
        <Button
          shellVariant={BUTTON_VARIANT.OUTLINED}
          shellSize={DEFAULT_SIZES.LARGE}
        >
          login for Universities
        </Button>
        <IconButton width={48} height={48} onClickHandler={onCloseHandler}>
          <img src={CloseIcon} />
        </IconButton>
      </NavigationDrawerLoginContainer>
      <DrawerItemsList />
    </MUIDrawer>
  );
}
