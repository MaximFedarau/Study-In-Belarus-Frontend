//Types
import { ReactElement } from 'react';

//Components
import {
  FooterContactsItemsContainer,
  FooterPhoneNumbersContainer,
} from '../../Defaults/Container/Container.styles';
import { ContactsText } from '../../Defaults/Text/Text.styles';

//Icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function PhoneContacts(): ReactElement {
  return (
    <FooterContactsItemsContainer>
      <LocalPhoneIcon />
      <FooterPhoneNumbersContainer>
        <ContactsText>+375-17-306-52-59</ContactsText>
        <ContactsText>+375-17-306-52-71</ContactsText>
        <ContactsText>+375-29-691-38-08</ContactsText>
      </FooterPhoneNumbersContainer>
    </FooterContactsItemsContainer>
  );
}
