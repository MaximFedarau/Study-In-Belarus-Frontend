//Types
import { ReactElement } from 'react';

//Constants
import { CAROUSEL_STUDENTS } from 'constants/constants';

//Components
import Arrow from '../Arrow/Arrow.component';
import Student from '../Student/Student.component';

import { CarouselContainer } from 'components/Defaults/Container/Container.styles';

export default function Carousel(): ReactElement {
  const studentInfo = CAROUSEL_STUDENTS[0];
  // ! Test possibility!
  // ? If there is more than one item.
  // ? Create index using React.useState(). const [studentIndex, setStudentIndex] = React.useState<number>(0);
  // ? And pass this index to studentInfo variable. const studentInfo = CAROUSEL_STUDENTS[studentIndex];
  // ? To change items, create click handler for both arrows. One arrow will increment index, other decrement.
  return (
    <CarouselContainer>
      <Arrow />
      <Student {...studentInfo} />
      <Arrow />
    </CarouselContainer>
  );
}
