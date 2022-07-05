//Types
import { ReactElement } from 'react';

//Constants
import { HOME_MOBILE_BUBBLES } from 'constants/constants/ui';
import { DEFAULT_SIZES } from 'constants/types/enum';

//Components
import Bubble from 'components/Defaults/Bubble/Bubble.component';

import { MobileTitle } from '../Greetings/Greetings.styles';
import { BelarusText } from './SalutationMobile.styles';
import { SalutationMobileBubbleText } from 'components/Defaults/Text/Text.styles';

import { MobileBubbleContainer } from 'components/Defaults/Container/Container.styles';
import {
  SalutationMobileContainer,
  PointsSection,
} from 'components/Defaults/Section/Section.styles';

export default function SalutationMobile(): ReactElement {
  return (
    <SalutationMobileContainer>
      <MobileTitle textColor="black">
        Welcome to {''}
        <BelarusText>Belarus</BelarusText>
      </MobileTitle>
      <PointsSection>
        {HOME_MOBILE_BUBBLES.map((text, index) => {
          return (
            <MobileBubbleContainer>
              <Bubble
                size={{ width: '20vw', height: '20vw' }}
                type={DEFAULT_SIZES.MEDIUM}
              >
                {index + 1}
              </Bubble>
              <SalutationMobileBubbleText>{text}</SalutationMobileBubbleText>
            </MobileBubbleContainer>
          );
        })}
      </PointsSection>
    </SalutationMobileContainer>
  );
}
