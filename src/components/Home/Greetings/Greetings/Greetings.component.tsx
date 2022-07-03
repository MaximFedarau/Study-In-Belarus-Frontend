//Types
import { ReactElement } from 'react';

//Constants
import { HOME_MAIN_IMAGE_SIZES } from 'constants/constants/styles';

//Components
import Bubbles from '../Bubbles/Bubbles.component';

import { GreetingsHeader } from 'components/Defaults/Container/Container.styles';
import { GreetingsContainer } from 'components/Defaults/Section/Section.styles';
import { GreetingsWelcomePart } from 'components/Defaults/Article/Article.styles';

//Icons
import { ReactComponent as StudentWithSignSVG } from 'assets/images/home/student_with_sign.svg';

export default function Greetings(): ReactElement {
  return (
    <GreetingsContainer>
      <GreetingsWelcomePart>
        <GreetingsHeader>
          <StudentWithSignSVG {...HOME_MAIN_IMAGE_SIZES} />
        </GreetingsHeader>
        <Bubbles />
      </GreetingsWelcomePart>
    </GreetingsContainer>
  );
}
