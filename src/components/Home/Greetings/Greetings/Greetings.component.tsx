//Types
import { ReactElement } from 'react';

//Components
import Education from '../Education/Education.component';
import Salutation from '../Salutation/Salutation.component';

export default function Greetings(): ReactElement {
  return (
    <>
      <Salutation />
      <Education />
    </>
  );
}
