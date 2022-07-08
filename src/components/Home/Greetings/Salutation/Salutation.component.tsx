//Types
import { ReactElement } from 'react';

//Components
import SalutationMobile from '../SalutationMobile/SalutationMobile.component';
import Bubbles from '../Bubbles/Bubbles.component';

import { GreetingsWelcomePart } from 'components/Defaults/Article/Article.styles';
import { GreetingsHeader } from 'components/Defaults/Container/Container.styles';
import { GreetingsContainer } from 'components/Defaults/Section/Section.styles';

//Icons
import mainImage from 'assets/images/home/student_with_sign.png';

export default function Salutation(): ReactElement {
  return (
    <GreetingsContainer>
      <SalutationMobile />
      <GreetingsWelcomePart>
        <GreetingsHeader>
          <img src={mainImage} loading="lazy" width="100%" height="100%" />
        </GreetingsHeader>
        <Bubbles />
      </GreetingsWelcomePart>
    </GreetingsContainer>
  );
}
