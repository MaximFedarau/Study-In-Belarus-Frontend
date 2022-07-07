//Types
import { ReactElement } from 'react';

//Constants
import { FOOTER_CONTACT_NUMBERS } from 'constants/data';

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
        {FOOTER_CONTACT_NUMBERS.map((number) => (
          <ContactsText key={number}>{number}</ContactsText>
        ))}
      </FooterPhoneNumbersContainer>
    </FooterContactsItemsContainer>
  );
}
