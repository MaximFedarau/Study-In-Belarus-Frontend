//Types
import { ReactElement } from 'react';

//Components
import IconButton from 'components/Defaults/IconButton/IconButton.component';

import { CarouselArrowWrapper } from 'components/Defaults/Container/Container.styles';

//Icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Arrow(): ReactElement {
  const ARROW_SIZES = { style: { width: 50, height: 50 } };
  return (
    <CarouselArrowWrapper>
      <IconButton>
        <ArrowForwardIosIcon {...ARROW_SIZES} />
      </IconButton>
    </CarouselArrowWrapper>
  );
}
