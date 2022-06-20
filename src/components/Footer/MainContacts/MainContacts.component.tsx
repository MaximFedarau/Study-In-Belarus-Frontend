//Types
import { ReactElement } from 'react';

//Components
import { FooterContactsItemsContainer } from '../../Defaults/Container/Container.styles';
import { FooterContactText } from '../../Defaults/Text/Text.styles';

//Icons
import EmailIcon from '@mui/icons-material/Email';

export default function MainContacts(): ReactElement {
  return (
    <FooterContactsItemsContainer>
      <EmailIcon />
      <FooterContactText>edu@intcenter.by</FooterContactText>
    </FooterContactsItemsContainer>
  );
}
