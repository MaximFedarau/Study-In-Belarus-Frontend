//Types
import { ReactElement } from 'react';

//Components
import {
  NavigationContainer,
  NavigationButtonsContainer,
  NavigationContentContainer,
  NavigationActionsContainer,
} from '../../Defaults/Container/Container.styles';
import IconButton from '../../Defaults/IconButton/IconButton.component';

//Icons
import { ReactComponent as LogoSvg } from '../../../assets/images/logo.svg';
import { ReactComponent as DrawerButtonSvg } from '../../../assets/images/drawer_button.svg';
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { ReactComponent as ENLanguageButtonSvg } from '../../../assets/images/EN_language_button.svg';

//React Router
import { Outlet } from 'react-router-dom';

export default function NavigationBar(): ReactElement {
  const iconButtonsSizes = { width: 35, height: 35 };
  return (
    <>
      <NavigationContainer width="100%" height="72px">
        <NavigationContentContainer width="95%">
          <LogoSvg width={95} height={45} />
          <NavigationButtonsContainer>
            <NavigationActionsContainer>
              <IconButton {...iconButtonsSizes}>
                <SearchIcon />
              </IconButton>
              <IconButton {...iconButtonsSizes}>
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
              <IconButton {...iconButtonsSizes}>
                <ENLanguageButtonSvg />
              </IconButton>
            </NavigationActionsContainer>
            <IconButton {...iconButtonsSizes}>
              <DrawerButtonSvg />
            </IconButton>
          </NavigationButtonsContainer>
        </NavigationContentContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
}
