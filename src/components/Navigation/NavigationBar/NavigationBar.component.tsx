//Types
import { ReactElement } from 'react';

//Components
import {
  NavigationContainer,
  NavigationContentContainer,
} from '../../Defaults/Container/Container.styles';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer.component';

//Icons
import { ReactComponent as LogoSvg } from '../../../assets/images/logo.svg';

//React Router
import { Link } from 'react-router-dom';

export default function NavigationBar(): ReactElement {
  return (
    <NavigationContainer width="100%" height="72px">
      <NavigationContentContainer width="95%">
        <Link to="/">
          <LogoSvg width={95} height={45} />
        </Link>
        <ButtonsContainer />
      </NavigationContentContainer>
    </NavigationContainer>
  );
}
