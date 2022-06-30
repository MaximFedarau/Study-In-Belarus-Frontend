//Types
import { ReactElement } from 'react';

//Constants
import { CAROUSEL_STUDENTS } from 'constants/constants';

//Components
import CarouseArrow from '../CarouselArrow/CarouselArrow.component';
import CarouselStudent from '../CarouselStudent/CarouselStudent.component';

import { CarouselContainer } from 'components/Defaults/Container/Container.styles';

export default function Carousel(): ReactElement {
  return (
    <CarouselContainer>
      <CarouseArrow />
      {CAROUSEL_STUDENTS.map((studentInfo) => (
        <CarouselStudent key={studentInfo.name} {...studentInfo} />
      ))}
      <CarouseArrow />
    </CarouselContainer>
  );
}
