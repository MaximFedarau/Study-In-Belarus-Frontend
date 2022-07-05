//Types
import { ReactElement } from 'react';

//Constants
import { FOOTER_NETWORK_ICON_OPTIONS } from '../../../constants/styles';

//Components
import { FooterNetworksContactsContainer } from '../../Defaults/Container/Container.styles';

//Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function NetworkContacts(): ReactElement {
  return (
    <FooterNetworksContactsContainer>
      <InstagramIcon {...FOOTER_NETWORK_ICON_OPTIONS} />
      <TwitterIcon {...FOOTER_NETWORK_ICON_OPTIONS} />
    </FooterNetworksContactsContainer>
  );
}
