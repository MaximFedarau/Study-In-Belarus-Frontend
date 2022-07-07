//Types
import { ReactElement } from 'react';

//Constants
import { NAVIGATION_ACTIONS_ICONS } from 'constants/ui';
import { NAVIGATION_ICON_BUTTON_SIZES } from 'constants/styles';

//Components
import { NavigationActionsContainer } from 'components/Defaults/Container/Container.styles';
import IconButton from 'components/Defaults/IconButton/IconButton.component';

export default function ActionsContainer(): ReactElement {
  return (
    <NavigationActionsContainer>
      {NAVIGATION_ACTIONS_ICONS.map((Icon, index) => {
        return (
          <IconButton key={index} {...NAVIGATION_ICON_BUTTON_SIZES}>
            <Icon />
          </IconButton>
        );
      })}
    </NavigationActionsContainer>
  );
}
