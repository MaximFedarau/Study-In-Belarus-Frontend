//Types
import { ReactElement } from 'react';

//Components
import { FooterContactsContainer } from '../../Defaults/Container/Container.styles';
import { ContactsText } from '../../Defaults/Text/Text.styles';

import PhoneContacts from '../PhoneContacts/PhoneContacts.component';
import MainContacts from '../MainContacts/MainContacts.component';
import NetworkContacts from '../NetworkContacts/NetworkContacts.component';

export default function Contacts(): ReactElement {
  return (
    <FooterContactsContainer>
      <ContactsText>
        Studyinby.com - official website on higher education in the Republic of
        Belarus for foreign citizens
      </ContactsText>
      <PhoneContacts />
      <MainContacts />
      <NetworkContacts />
    </FooterContactsContainer>
  );
}
