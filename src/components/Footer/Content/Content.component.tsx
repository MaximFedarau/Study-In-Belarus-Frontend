//Types
import { ReactElement } from 'react';

//Consntants
import { NAVIGATION_DRAWER_ITEMS } from '../../../constants/constants';

//Components
import {
  FooterContentContainer,
  FooterTextContainer,
} from '../../Defaults/Container/Container.styles';
import { BottomLink } from '../../Defaults/Text/Text.styles';
import Contacts from '../Contacts/Contacts.component';

//Icons
import { ReactComponent as LogoSVG } from '../../../assets/images/logo.svg';

export default function Content(): ReactElement {
  return (
    <FooterContentContainer>
      <LogoSVG />
      <FooterTextContainer>
        {Object.keys(NAVIGATION_DRAWER_ITEMS).map((category) => (
          <BottomLink>{category}</BottomLink>
        ))}
      </FooterTextContainer>
      <Contacts />
    </FooterContentContainer>
  );
}
