//Types
import { ReactElement } from 'react';

//Components
import IconButton from 'components/Defaults/IconButton/IconButton.component';

import { CarouselArrowWrapper } from 'components/Defaults/Container/Container.styles';

import { ArrowIcon } from './Arrow.styles';

//Interface for Props
interface ArrowProps {
  onClick?: () => void;
}

export default function Arrow({ onClick }: ArrowProps): ReactElement {
  return (
    <CarouselArrowWrapper onClick={onClick}>
      <IconButton>
        <ArrowIcon />
      </IconButton>
    </CarouselArrowWrapper>
  );
}
