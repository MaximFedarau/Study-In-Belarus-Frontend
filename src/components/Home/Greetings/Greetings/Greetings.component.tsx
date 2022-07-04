//Types
import { ReactElement } from 'react';

//Components
import Bubbles from '../Bubbles/Bubbles.component';

import { GreetingsHeader } from 'components/Defaults/Container/Container.styles';
import { GreetingsContainer } from 'components/Defaults/Section/Section.styles';
import { GreetingsWelcomePart } from 'components/Defaults/Article/Article.styles';

//Icons
import { ReactComponent as StudentWithSignSVG } from 'assets/images/home/student_with_sign.svg';

import Education from '../Education/Education.component';

export default function Greetings(): ReactElement {
  return (
    <>
      <GreetingsContainer>
        <GreetingsWelcomePart>
          <GreetingsHeader>
            <StudentWithSignSVG width="100%" height="100%" />
          </GreetingsHeader>
          <Bubbles />
        </GreetingsWelcomePart>
      </GreetingsContainer>
      <Education />
    </>
  );
}
