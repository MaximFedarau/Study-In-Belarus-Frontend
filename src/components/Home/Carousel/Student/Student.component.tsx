//Types
import { ReactElement } from 'react';
import { CarouselStudentInterface } from 'types/types';

//Components

import { StudentAvatar } from './Student.styles';

import { CarouselStudentInfo } from 'components/Defaults/Article/Article.styles';
import { CarouselStudentAdditionalInfo } from 'components/Defaults/Section/Section.styles';
import {
  CarouselStudentHeader,
  CarouselStudentText,
  CarouselStudentAdditionalText,
} from 'components/Defaults/Text/Text.styles';

export default function Student({
  name,
  speech,
  image,
  country,
  education,
}: CarouselStudentInterface): ReactElement {
  return (
    <CarouselStudentInfo>
      <StudentAvatar src={image} />
      <section>
        <CarouselStudentHeader>{name}</CarouselStudentHeader>
        <CarouselStudentText>{speech}</CarouselStudentText>
        <CarouselStudentAdditionalInfo>
          <CarouselStudentAdditionalText>
            {country}
          </CarouselStudentAdditionalText>
          <CarouselStudentAdditionalText>
            {education}
          </CarouselStudentAdditionalText>
        </CarouselStudentAdditionalInfo>
      </section>
    </CarouselStudentInfo>
  );
}
