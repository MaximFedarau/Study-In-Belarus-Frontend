//Types
import { ReactElement } from 'react';

//Constants
import { NAVIGATION_ICON_BUTTON_SIZES } from 'constants/constants';

//Components
import { NavigationActionsContainer } from 'components/Defaults/Container/Container.styles';
import IconButton from 'components/Defaults/IconButton/IconButton.component';

//Icons
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { ReactComponent as ENLanguageButtonSvg } from 'assets/images/EN_language_button.svg';

export default function ActionsContainer(): ReactElement {
  return (
    <NavigationActionsContainer>
      <IconButton {...NAVIGATION_ICON_BUTTON_SIZES}>
        <SearchIcon />
      </IconButton>
      <IconButton {...NAVIGATION_ICON_BUTTON_SIZES}>
        <RemoveRedEyeOutlinedIcon />
      </IconButton>
      <IconButton {...NAVIGATION_ICON_BUTTON_SIZES}>
        <ENLanguageButtonSvg />
      </IconButton>
    </NavigationActionsContainer>
  );
}
