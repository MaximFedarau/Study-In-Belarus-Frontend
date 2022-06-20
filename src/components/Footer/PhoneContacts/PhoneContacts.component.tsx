//Types
import { ReactElement } from 'react';

//Components
import {
  FooterContactsItemsContainer,
  FooterPhoneNumbersContainer,
} from '../../Defaults/Container/Container.styles';
import { FooterContactText } from '../../Defaults/Text/Text.styles';

//Icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function PhoneContacts(): ReactElement {
  return (
    <FooterContactsItemsContainer>
      <LocalPhoneIcon />
      <FooterPhoneNumbersContainer>
        <FooterContactText>+375-17-306-52-59</FooterContactText>
        <FooterContactText>+375-17-306-52-71</FooterContactText>
        <FooterContactText>+375-29-691-38-08</FooterContactText>
      </FooterPhoneNumbersContainer>
    </FooterContactsItemsContainer>
  );
}
