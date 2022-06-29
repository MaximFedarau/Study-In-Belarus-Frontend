//Types
import { ReactElement } from 'react';

//Components
import { FooterContactsItemsContainer } from '../../Defaults/Container/Container.styles';
import { ContactsText } from '../../Defaults/Text/Text.styles';

//Icons
import EmailIcon from '@mui/icons-material/Email';

export default function MainContacts(): ReactElement {
  return (
    <FooterContactsItemsContainer>
      <EmailIcon />
      <ContactsText>edu@intcenter.by</ContactsText>
    </FooterContactsItemsContainer>
  );
}
