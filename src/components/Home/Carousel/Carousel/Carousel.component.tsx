//Types
import React, { ReactElement } from 'react';

//Constants
import { CAROUSEL_STUDENTS } from 'constants/ui';

//Components
import Arrow from '../Arrow/Arrow.component';
import Student from '../Student/Student.component';

import { CarouselContainer } from 'components/Defaults/Section/Section.styles';

export default function Carousel(): ReactElement {
  const [studentIndex, setStudentIndex] = React.useState<number>(0);

  const studentInfo = CAROUSEL_STUDENTS[studentIndex];

  function onNextArrowClick(): void {
    const newIndex = studentIndex + 1;

    if (newIndex >= CAROUSEL_STUDENTS.length) {
      setStudentIndex(0);
    } else {
      setStudentIndex(newIndex);
    }
  }

  function onPreviousArrowClick(): void {
    const newIndex = studentIndex - 1;

    if (newIndex < 0) {
      setStudentIndex(CAROUSEL_STUDENTS.length - 1);
    } else {
      setStudentIndex(newIndex);
    }
  }

  return (
    <CarouselContainer>
      <Arrow onClick={onNextArrowClick} />
      <Student {...studentInfo} />
      <Arrow onClick={onPreviousArrowClick} />
    </CarouselContainer>
  );
}
