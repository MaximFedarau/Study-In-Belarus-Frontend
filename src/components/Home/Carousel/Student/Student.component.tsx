//Types
import { ReactElement } from 'react';
import { CarouselStudentInterface } from 'constants/types';

//Components
import {
  CarouselStudentInfo,
  CarouselStudentAdditionalInfo,
} from 'components/Defaults/Container/Container.styles';
import {
  CarouselStudentHeader,
  CarouselStudentText,
  CarouselStudentAdditionalText,
} from 'components/Defaults/Text/Text.styles';

//MUI
import { Avatar } from '@mui/material';

export default function Student({
  name,
  speech,
  image,
  country,
  education,
}: CarouselStudentInterface): ReactElement {
  return (
    <CarouselStudentInfo>
      <Avatar sx={{ width: '20vw', height: '20vw' }} src={image} />
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
