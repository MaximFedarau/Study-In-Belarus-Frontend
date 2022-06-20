//Types
import { ReactElement } from 'react';

//Constants
import { FOOTER_BACKGROUND_BY_PATH } from '../../../constants/constants';

//Components
import {
  FooterMainContainer,
  FooterWaveContainer,
  FooterContainer,
} from '../../Defaults/Container/Container.styles';

import Content from '../Content/Content.component';

//React Router
import { useLocation } from 'react-router-dom';

export default function Footer(): ReactElement {
  const location = useLocation();

  return (
    <FooterMainContainer>
      <FooterWaveContainer>
        <img
          src={FOOTER_BACKGROUND_BY_PATH[location.pathname].image}
          style={{ width: '100vw', height: '100%' }}
        />
      </FooterWaveContainer>
      <FooterContainer {...FOOTER_BACKGROUND_BY_PATH[location.pathname]}>
        <Content />
      </FooterContainer>
    </FooterMainContainer>
  );
}
