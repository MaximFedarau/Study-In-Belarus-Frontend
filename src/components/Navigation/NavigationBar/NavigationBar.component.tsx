//Types
import { ReactElement } from 'react';

//Components
import {
  NavigationContainer,
  NavigationContentContainer,
} from 'components/Defaults/Container/Container.styles';
import ButtonsContainer from 'components/Navigation/ButtonsContainer/ButtonsContainer.component';

//Icons
import { ReactComponent as LogoSvg } from 'assets/images/navigation/logo.svg';

//React Router
import { Link } from 'react-router-dom';

export default function NavigationBar(): ReactElement {
  return (
    <NavigationContainer>
      <NavigationContentContainer width="95%">
        <Link to="/">
          <LogoSvg width={95} height={45} />
        </Link>
        <ButtonsContainer />
      </NavigationContentContainer>
    </NavigationContainer>
  );
}
