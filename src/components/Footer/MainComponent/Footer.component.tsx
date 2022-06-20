//Types
import { ReactElement } from 'react';

//Constants
import {
  FOOTER_BACKGROUND_BY_PATH,
  NAVIGATION_DRAWER_ITEMS,
} from '../../../constants/constants';

//Components
import {
  FooterMainContainer,
  FooterWaveContainer,
  FooterContaner,
  FooterContentContainer,
  FooterContactsContainer,
  FooterContactsItemsContainer,
  FooterPhoneNumbersContainer,
  FooterNetworksContactsContainer,
  FooterTextContainer,
} from '../../Defaults/Container/Container.styles';
import {
  FooterLinkText,
  FooterContactText,
} from '../../Defaults/Text/Text.styles';

import { Box } from '@mui/material';

//Icons
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
    <FooterMainContainer>
      <FooterWaveContainer>
        <img
          src={FOOTER_BACKGROUND_BY_PATH[location.pathname].image}
          style={{ width: '100vw', height: '100%' }}
        />
      </FooterWaveContainer>
      <FooterContaner {...FOOTER_BACKGROUND_BY_PATH[location.pathname]}>
        <FooterContentContainer>
          <LogoSVG />
          <FooterTextContainer>
            {Object.keys(NAVIGATION_DRAWER_ITEMS).map((category) => (
              <FooterLinkText>{category}</FooterLinkText>
            ))}
          </FooterTextContainer>
          <FooterContactsContainer>
            <FooterContactText>
              Studyinby.com - official website on higher education in the
              Republic of Belarus for foreign citizens
            </FooterContactText>
            <FooterContactsItemsContainer>
              <LocalPhoneIcon />
              <FooterPhoneNumbersContainer>
                <FooterContactText>+375-17-306-52-59</FooterContactText>
                <FooterContactText>+375-17-306-52-71</FooterContactText>
                <FooterContactText>+375-29-691-38-08</FooterContactText>
              </FooterPhoneNumbersContainer>
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
    </FooterMainContainer>
  );
}
