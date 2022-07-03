//Types
import { ReactElement } from 'react';

//Components
import Bubbles from '../Bubbles/Bubbles.component';

import {
  GreetingsContainer,
  GreetingsHeader,
} from 'components/Defaults/Container/Container.styles';

//Icons
import { ReactComponent as StudentWithSignSVG } from 'assets/images/home/student_with_sign.svg';

export default function Greetings(): ReactElement {
  return (
    <GreetingsContainer>
      <article
        style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <GreetingsHeader>
          <StudentWithSignSVG
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </GreetingsHeader>
        <Bubbles />
      </article>
    </GreetingsContainer>
  );
}
