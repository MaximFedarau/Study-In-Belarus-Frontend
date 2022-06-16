//Types
import { ReactElement } from 'react';

//Constants
import {
  FOOTER_BACKGROUND_BY_PATH,
  NAVIGATION_DRAWER_ITEMS,
} from '../../../constants/constants';

//Components
import {
  FooterContaner,
  FooterContentContainer,
  FooterContactsContainer,
  FooterContactsItemsContainer,
  FooterNetworksContactsContainer,
  FooterTextContainer,
} from '../../Defaults/Container/Container.styles';
import {
  FooterLinkText,
  FooterContactText,
} from '../../Defaults/Text/Text.styles';

//Icons
import { ReactComponent as WaveSVG } from '../../../assets/images/blue_wave.svg';
import { ReactComponent as LogoSVG } from '../../../assets/images/logo.svg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

//React Router
import { useLocation } from 'react-router-dom';

export default function Footer(): ReactElement {
  const location = useLocation();

  const iconOptions = {
    style: { width: '53px', height: '53px', cursor: 'pointer' },
  };

  return (
    <FooterContaner image={FOOTER_BACKGROUND_BY_PATH[location.pathname]}>
      <FooterContentContainer>
        <LogoSVG />
        <FooterTextContainer>
          {Object.keys(NAVIGATION_DRAWER_ITEMS).map((category) => (
            <FooterLinkText>{category}</FooterLinkText>
          ))}
        </FooterTextContainer>
        <FooterContactsContainer>
          <FooterContactText>
            Studyinby.com - official website on higher education in the Republic
            of Belarus for foreign citizens
          </FooterContactText>
          <FooterContactsItemsContainer>
            <LocalPhoneIcon />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <FooterContactText>+375-17-306-52-59</FooterContactText>
              <FooterContactText>+375-17-306-52-71</FooterContactText>
              <FooterContactText>+375-29-691-38-08</FooterContactText>
            </div>
          </FooterContactsItemsContainer>
          <FooterContactsItemsContainer>
            <EmailIcon />
            <FooterContactText>edu@intcenter.by</FooterContactText>
          </FooterContactsItemsContainer>
          <FooterNetworksContactsContainer>
            <InstagramIcon {...iconOptions} />
            <TwitterIcon {...iconOptions} />
          </FooterNetworksContactsContainer>
        </FooterContactsContainer>
      </FooterContentContainer>
    </FooterContaner>
  );
}
