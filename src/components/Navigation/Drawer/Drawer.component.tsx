//Types
import { ReactElement } from 'react';

//Constants
import { NAVIGATION_DRAWER_ITEMS } from '../../../constants/constants';
import { NavigationPaperStyle } from '../../Defaults/Drawer/Drawer.styles';
import IconButton from '../../Defaults/IconButton/IconButton.component';

//MUI Components
import { Drawer as MUIDrawer, Typography } from '@mui/material';
import { DrawerButton } from '../../Defaults/Button/Button.styles';

//Icons
// import CloseIcon from '@mui/icons-material/Close';
import CloseIcon from '../../../assets/images/close.svg';

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
      onClose={onCloseHandler}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '59px',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <DrawerButton>login for Universities</DrawerButton>
        <IconButton width={48} height={48} onClickHandler={onCloseHandler}>
          <img src={CloseIcon} />
        </IconButton>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '23px',
          marginTop: '42px',
          marginLeft: '25px',
          marginRight: '26px',
        }}
      >
        {NAVIGATION_DRAWER_ITEMS.map((item) => (
          <Typography>{item.toLocaleUpperCase()}</Typography>
        ))}
      </div>
    </MUIDrawer>
  );
}
